import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildShape, geometryInfo, stlBytes, threeMFBytes, validateParams, PRESETS, MIN_WALL } from './model.js';

const $ = (id) => document.getElementById(id);
const nf = (v, d=1) => Number(v).toLocaleString('nl-NL', {maximumFractionDigits:d});
const state = window.__demo11 = { ready:false, builds:0, geometry:null, info:null, params:null, error:null };
let buildTimer, framedKey='';

const DEFAULTS = {
  kind:'cilinder', diameter:50, height:40, bottomDiameter:60, topDiameter:30,
  bottomSide:50, topSide:30, sides:6, outerDiameter:30, innerDiameter:18,
  wallMode:'wall', wall:2, solid:false, openBottom:false, cutMode:'angle', cutAngle:25, cutHeight:20,
  chamfer:0.8, segments:64,
};

function readParams() {
  const p = { kind:$('kind').value, wallMode:$('wallMode').value, cutMode:$('cutMode').value, solid:$('solid').checked, openBottom:$('openBottom').checked };
  for (const id of ['diameter','height','bottomDiameter','topDiameter','bottomSide','topSide','sides','outerDiameter','innerDiameter','wall','cutAngle','cutHeight','chamfer','segments']) p[id]=Number($(id).value);
  if (p.solid) p.wall = 0;
  if (p.solid || p.kind==='ring') p.openBottom = false;
  return p;
}
function writeParams(p) {
  for (const [k,v] of Object.entries(p)) {
    const el=$(k); if (!el) continue;
    if (el.type==='checkbox') el.checked=!!v; else el.value=v;
  }
  syncVisibility(); rebuild();
}
function syncVisibility() {
  const k=$('kind').value;
  for (const el of document.querySelectorAll('[data-shape]')) el.hidden=!el.dataset.shape.split(' ').includes(k);
  $('cutSection').hidden=k==='ring';
  $('cutValue').hidden=$('cutMode').value!=='height';
  $('angleValue').hidden=$('cutMode').value!=='angle';
  $('wallLabel').textContent=$('wallMode').value==='inner' ? 'Wanddikte (informatie)' : 'Wanddikte (mm)';
  $('wallMode').hidden=k!=='ring';
  $('innerDiameter').closest('label').hidden=$('wallMode').value!=='inner';
  $('wall').disabled=k==='ring' && $('wallMode').value==='inner';
  
  $('solid').closest('label').hidden=k==='ring';
  if(k==='ring' && $('solid').checked) { $('solid').checked=false; }
  $('wall').closest('label').classList.toggle('disabled',$('solid').checked && k!=='ring');
  if($('solid').checked || k==='ring') $('openBottom').checked=false;
  $('openBottom').closest('label').hidden=k==='ring' || $('solid').checked;
  $('segmentsValue').textContent=$('segments').value;
}
function updateWallFromInner() {
  if ($('kind').value==='ring' && $('wallMode').value==='inner') $('wall').value=Math.max(0,(Number($('outerDiameter').value)-Number($('innerDiameter').value))/2).toFixed(1);
}

function rebuild() {
  syncVisibility();
  const p=readParams(), errors=validateParams(p);
  $('messages').innerHTML=errors.map(e=>`<div class="msg err">${e}</div>`).join('');
  $('dlStl').disabled=$('dl3mf').disabled=errors.length>0;
  state.error=errors[0]||null;
  if (errors.length) { state.ready=false; return; }
  try {
    const geometry=buildShape(p), info=geometryInfo(geometry,p);
    if (!info.isClosed) throw new Error(`Het model heeft ${info.openEdges} open randen.`);
    state.geometry=geometry; state.info=info; state.params=p; state.builds++; state.ready=true;
    showModel(info);
    const volumeCm=info.volume/1000;
    $('readout').innerHTML=`<b>Buitenmaten:</b> ${info.size.map(v=>nf(v,2)).join(' × ')} mm<br><b>Volume:</b> ${nf(volumeCm,1)} cm³ · <b>Driehoeken:</b> ${info.triangles}<br><span class="ok-text">✓ Gesloten model, klaar om te slicen</span>`;
    const msgs=[];
    if (p.kind!=='ring') msgs.push(p.wall===0 ? ['ok','Massief model. Kies een wanddikte voor een open bakje.'] : ['ok',(p.openBottom ? `Hol model met ${nf(p.wall,1)} mm wand, open bodem (kijkgat). Handig als sleeve om een tumbler of fles.` : `Hol model met ${nf(p.wall,1)} mm wand en bodem. De binnenzijde volgt de schuine snede.`)]);
    if (p.kind==='ring') msgs.push(['ok',`Doorvoergat Ø ${nf((p.wallMode==='inner'?p.innerDiameter:p.outerDiameter-2*p.wall),1)} mm${p.chamfer?` · afschuining ${nf(p.chamfer,1)} mm`:''}.`]);
    if (Math.max(info.size[0],info.size[1])>270 || info.size[2]>270) msgs.push(['warn','Past niet binnen 270 × 270 × 270 mm van de Snapmaker U1. Verklein de maten.']);
    else msgs.push(['ok','Past binnen het maximale bouwvolume van de Snapmaker U1 (270 mm).']);
    if (p.cutMode==='angle' && p.cutAngle>40) msgs.push(['warn','Bij een steile snede kan de overhang support nodig hebben. Controleer dit in je slicer.']);
    $('messages').innerHTML=msgs.map(([c,t])=>`<div class="msg ${c}">${t}</div>`).join('');
  } catch(e) { console.error(e); state.error=e.message; state.ready=false; $('messages').innerHTML=`<div class="msg err">Model kon niet gemaakt worden: ${e.message}</div>`; $('dlStl').disabled=$('dl3mf').disabled=true; }
}

// three.js-voorbeeld: JSCAD z omhoog wordt in de scene y omhoog.
const host=$('view');
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)); host.prepend(renderer.domElement);
const scene=new THREE.Scene(); scene.background=new THREE.Color(0xeef0f8);
const camera=new THREE.PerspectiveCamera(35,1,0.1,3000);
const controls=new OrbitControls(camera,renderer.domElement); controls.enableDamping=true;
scene.add(new THREE.HemisphereLight(0xffffff,0x67708c,2));
const sun=new THREE.DirectionalLight(0xffffff,2.2);sun.position.set(80,180,130);scene.add(sun);
const world=new THREE.Group(); world.rotation.x=-Math.PI/2;scene.add(world);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(270,270),new THREE.MeshStandardMaterial({color:0xd6dbea,roughness:1,transparent:true,opacity:0.5}));ground.position.set(0,0,-0.05);world.add(ground);
const grid=new THREE.GridHelper(270,27,0x9da6c6,0xc0c6da);grid.rotation.x=Math.PI/2;grid.position.z=0;world.add(grid);
let mesh;
function showModel(info) {
  if(mesh){world.remove(mesh);mesh.geometry.dispose();mesh.material.dispose();}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(info.trianglesForView,3));geo.computeVertexNormals();
  mesh=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:0x596fe8,roughness:0.52,metalness:0.04,side:THREE.DoubleSide}));world.add(mesh);
  const key=info.size.map(v=>v.toFixed(2)).join(':');
  if(key!==framedKey){framedKey=key;const bb=new THREE.Box3().setFromObject(mesh),center=bb.getCenter(new THREE.Vector3()),span=bb.getSize(new THREE.Vector3()).length();controls.target.copy(center);camera.position.copy(center).add(new THREE.Vector3(0.65,0.65,1).normalize().multiplyScalar(span*1.65));camera.near=Math.max(0.1,span/100);camera.far=span*20;camera.updateProjectionMatrix();}
}
function resize(){const w=host.clientWidth||600,h=host.clientHeight||400;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}
new ResizeObserver(resize).observe(host);resize();
(function loop(){controls.update();renderer.render(scene,camera);requestAnimationFrame(loop);})();

function filename(ext){const p=state.params;const kind={cilinder:'afgeknotte-cilinder',kegel:'afgeknotte-kegel',piramide:'afgeknotte-piramide',ring:'buis-ring'}[p.kind];return `${kind}-${p.wall>0?'hol-'+String(p.wall).replace('.','p')+'mm'+(p.openBottom?'-open-bodem':''):'massief'}.${ext}`;}
function download(data,name,type){const url=URL.createObjectURL(new Blob([data],{type}));const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);}
$('dlStl').onclick=()=>{if(state.ready){const b=stlBytes(state.geometry);download(b,filename('stl'),'model/stl');$('status').textContent=`STL gedownload: ${nf(b.length/1024,0)} kB, binair, maten in mm.`;}};
$('dl3mf').onclick=()=>{if(state.ready){const b=threeMFBytes(state.geometry,filename('3mf'));download(b,filename('3mf'),'model/3mf');$('status').textContent=`3MF gedownload: ${nf(b.length/1024,0)} kB. Open als één object in Snapmaker Orca.`;}};
$('reset').onclick=()=>writeParams(DEFAULTS);
$('form').addEventListener('input',(e)=>{updateWallFromInner();clearTimeout(buildTimer);buildTimer=setTimeout(rebuild,80);});
$('form').addEventListener('change',()=>{updateWallFromInner();rebuild();});
for(const b of document.querySelectorAll('[data-preset]'))b.onclick=()=>writeParams({...DEFAULTS,...PRESETS[b.dataset.preset],solid:PRESETS[b.dataset.preset].wall===0,openBottom:!!PRESETS[b.dataset.preset].openBottom});
writeParams(DEFAULTS);
