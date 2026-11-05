(()=>{var WO=Object.create;var Q1=Object.defineProperty;var XO=Object.getOwnPropertyDescriptor;var YO=Object.getOwnPropertyNames;var ZO=Object.getPrototypeOf,jO=Object.prototype.hasOwnProperty;var E=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var JO=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of YO(e))!jO.call(t,s)&&s!==n&&Q1(t,s,{get:()=>e[s],enumerable:!(i=XO(e,s))||i.enumerable});return t};var ex=(t,e,n)=>(n=t!=null?WO(ZO(t)):{},JO(e||!t||!t.__esModule?Q1(n,"default",{value:t,enumerable:!0}):n,t));var Ne=E((eme,Yv)=>{var N8=t=>t.flat(1/0);Yv.exports=N8});var jv=E((tme,Zv)=>{var F8=t=>Object.assign({},t);Zv.exports=F8});var Kv=E((nme,Jv)=>{var O8=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t[3]=e[3]+n[3],t[4]=e[4]+n[4],t[5]=e[5]+n[5],t[6]=e[6]+n[6],t[7]=e[7]+n[7],t[8]=e[8]+n[8],t[9]=e[9]+n[9],t[10]=e[10]+n[10],t[11]=e[11]+n[11],t[12]=e[12]+n[12],t[13]=e[13]+n[13],t[14]=e[14]+n[14],t[15]=e[15]+n[15],t);Jv.exports=O8});var fh=E((ime,Qv)=>{var U8=()=>[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Qv.exports=U8});var t2=E((sme,e2)=>{var B8=fh(),k8=t=>{let e=B8();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};e2.exports=k8});var Cp=E((rme,n2)=>{var z8=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t);n2.exports=z8});var s2=E((ome,i2)=>{var q8=(t,e)=>{let n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],p=e[13],x=e[14],m=e[15],b=n*a-i*o,S=n*c-s*o,y=n*l-r*o,M=i*c-s*a,A=i*l-r*a,w=s*l-r*c,T=u*p-f*g,v=u*x-h*g,_=u*m-d*g,R=f*x-h*p,D=f*m-d*p,L=h*m-d*x,N=b*L-S*D+y*R+M*_-A*v+w*T;return N?(N=1/N,t[0]=(a*L-c*D+l*R)*N,t[1]=(s*D-i*L-r*R)*N,t[2]=(p*w-x*A+m*M)*N,t[3]=(h*A-f*w-d*M)*N,t[4]=(c*_-o*L-l*v)*N,t[5]=(n*L-s*_+r*v)*N,t[6]=(x*y-g*w-m*S)*N,t[7]=(u*w-h*y+d*S)*N,t[8]=(o*D-a*_+l*T)*N,t[9]=(i*_-n*D-r*T)*N,t[10]=(g*A-p*y+m*b)*N,t[11]=(f*y-u*A-d*b)*N,t[12]=(a*v-o*R-c*T)*N,t[13]=(n*R-i*v+s*T)*N,t[14]=(p*S-g*M-x*b)*N,t[15]=(u*M-f*S+h*b)*N,t):null};i2.exports=q8});var o2=E((ame,r2)=>{var V8=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15];r2.exports=V8});var nt=E((cme,a2)=>{var G8=Math.PI*2;a2.exports={EPS:1e-5,NEPS:1e-13,TAU:G8,spatialResolution:1e5}});var an=E((lme,l2)=>{var{NEPS:H8}=nt(),c2=t=>Math.abs(t)<H8?0:t,$8=t=>c2(Math.sin(t)),W8=t=>c2(Math.cos(t));l2.exports={sin:$8,cos:W8}});var Rp=E((ume,u2)=>{var X8=t=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);u2.exports=X8});var Dp=E((hme,h2)=>{var{EPS:Y8}=nt(),{sin:Z8,cos:j8}=an(),J8=Rp(),K8=(t,e,n)=>{let[i,s,r]=n,o=i*i+s*s+r*r;if(Math.abs(o)<Y8)return J8(t);let a=1/Math.sqrt(o);i*=a,s*=a,r*=a;let c=Z8(e),l=j8(e),u=1-l;return t[0]=i*i*u+l,t[1]=s*i*u+r*c,t[2]=r*i*u-s*c,t[3]=0,t[4]=i*s*u-r*c,t[5]=s*s*u+l,t[6]=r*s*u+i*c,t[7]=0,t[8]=i*r*u+s*c,t[9]=s*r*u-i*c,t[10]=r*r*u+l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};h2.exports=K8});var d2=E((fme,f2)=>{var Q8=(t,e)=>(t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t);f2.exports=Q8});var m2=E((dme,p2)=>{var{sin:Pp,cos:Ip}=an(),eq=(t,e,n,i)=>{let s=Pp(e),r=Ip(e),o=Pp(n),a=Ip(n),c=Pp(i),l=Ip(i);return t[0]=a*r,t[1]=a*s,t[2]=-o,t[3]=0,t[4]=c*o*r-l*s,t[5]=l*r+c*o*s,t[6]=c*a,t[7]=0,t[8]=c*s+l*o*r,t[9]=l*o*s-c*r,t[10]=l*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};p2.exports=eq});var x2=E((pme,g2)=>{var tq=(t,e)=>(t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t);g2.exports=tq});var y2=E((mme,v2)=>{var nq=fh(),iq=(t,e,n,i,s,r,o,a,c,l,u,f,h,d,g,p)=>{let x=nq();return x[0]=t,x[1]=e,x[2]=n,x[3]=i,x[4]=s,x[5]=r,x[6]=o,x[7]=a,x[8]=c,x[9]=l,x[10]=u,x[11]=f,x[12]=h,x[13]=d,x[14]=g,x[15]=p,x};v2.exports=iq});var Lp=E((gme,_2)=>{var sq=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t[2]=Math.abs(e[2]),t);_2.exports=sq});var Np=E((xme,b2)=>{var rq=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t[2]=e[2]+n[2],t);b2.exports=rq});var mc=E((vme,S2)=>{var oq=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2];S2.exports=oq});var M2=E((yme,E2)=>{var aq=mc(),cq=(t,e)=>{let n=t[0],i=t[1],s=t[2],r=e[0],o=e[1],a=e[2],c=Math.sqrt(n*n+i*i+s*s),l=Math.sqrt(r*r+o*o+a*a),u=c*l,f=u&&aq(t,e)/u;return Math.acos(Math.min(Math.max(f,-1),1))};E2.exports=cq});var gc=E((_me,A2)=>{var lq=()=>[0,0,0];A2.exports=lq});var T2=E((bme,w2)=>{var uq=gc(),hq=t=>{let e=uq();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};w2.exports=hq});var Fp=E((Sme,C2)=>{var fq=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);C2.exports=fq});var No=E((Eme,R2)=>{var dq=(t,e,n)=>{let i=e[0],s=e[1],r=e[2],o=n[0],a=n[1],c=n[2];return t[0]=s*c-r*a,t[1]=r*o-i*c,t[2]=i*a-s*o,t};R2.exports=dq});var Op=E((Mme,D2)=>{var pq=(t,e)=>{let n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return Math.sqrt(n*n+i*i+s*s)};D2.exports=pq});var I2=E((Ame,P2)=>{var mq=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t[2]=e[2]/n[2],t);P2.exports=mq});var N2=E((wme,L2)=>{var gq=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];L2.exports=gq});var O2=E((Tme,F2)=>{var xq=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t);F2.exports=xq});var B2=E((Cme,U2)=>{var vq=gc(),yq=(t,e,n)=>{let i=vq();return i[0]=t,i[1]=e,i[2]=n,i};U2.exports=yq});var z2=E((Rme,k2)=>{var _q=(t,e,n=0)=>(t[0]=e[0],t[1]=e[1],t[2]=n,t);k2.exports=_q});var Up=E((Dme,q2)=>{var bq=t=>{let e=t[0],n=t[1],i=t[2];return Math.sqrt(e*e+n*n+i*i)};q2.exports=bq});var G2=E((Pme,V2)=>{var Sq=(t,e,n,i)=>(t[0]=e[0]+i*(n[0]-e[0]),t[1]=e[1]+i*(n[1]-e[1]),t[2]=e[2]+i*(n[2]-e[2]),t);V2.exports=Sq});var Bp=E((Ime,H2)=>{var Eq=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t[2]=Math.max(e[2],n[2]),t);H2.exports=Eq});var kp=E((Lme,$2)=>{var Mq=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t[2]=Math.min(e[2],n[2]),t);$2.exports=Mq});var X2=E((Nme,W2)=>{var Aq=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t[2]=e[2]*n[2],t);W2.exports=Aq});var Z2=E((Fme,Y2)=>{var wq=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t);Y2.exports=wq});var dh=E((Ome,j2)=>{var Tq=(t,e)=>{let n=e[0],i=e[1],s=e[2],r=n*n+i*i+s*s;return r>0&&(r=1/Math.sqrt(r)),t[0]=n*r,t[1]=i*r,t[2]=s*r,t};j2.exports=Tq});var K2=E((Ume,J2)=>{var Cq=Lp(),Rq=gc(),Dq=No(),Pq=(t,e)=>{let n=Cq(Rq(),e),i=0+(n[0]<n[1]&&n[0]<n[2]),s=0+(n[1]<=n[0]&&n[1]<n[2]),r=0+(n[2]<=n[0]&&n[2]<=n[1]);return Dq(t,e,[i,s,r])};J2.exports=Pq});var ey=E((Bme,Q2)=>{var Iq=(t,e,n,i)=>{let s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[0],r[1]=s[1]*Math.cos(i)-s[2]*Math.sin(i),r[2]=s[1]*Math.sin(i)+s[2]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};Q2.exports=Iq});var ny=E((kme,ty)=>{var Lq=(t,e,n,i)=>{let s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],s[2]=e[2]-n[2],r[0]=s[2]*Math.sin(i)+s[0]*Math.cos(i),r[1]=s[1],r[2]=s[2]*Math.cos(i)-s[0]*Math.sin(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2],t};ty.exports=Lq});var sy=E((zme,iy)=>{var Nq=(t,e,n,i)=>{let s=[],r=[];return s[0]=e[0]-n[0],s[1]=e[1]-n[1],r[0]=s[0]*Math.cos(i)-s[1]*Math.sin(i),r[1]=s[0]*Math.sin(i)+s[1]*Math.cos(i),t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=e[2],t};iy.exports=Nq});var zp=E((qme,ry)=>{var Fq=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t);ry.exports=Fq});var ay=E((Vme,oy)=>{var Oq=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t[2]=Math.round(e[2]/n)*n+0,t);oy.exports=Oq});var qp=E((Gme,cy)=>{var Uq=(t,e)=>{let n=e[0]-t[0],i=e[1]-t[1],s=e[2]-t[2];return n*n+i*i+s*s};cy.exports=Uq});var Vp=E((Hme,ly)=>{var Bq=t=>{let e=t[0],n=t[1],i=t[2];return e*e+n*n+i*i};ly.exports=Bq});var xc=E(($me,uy)=>{var kq=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t);uy.exports=kq});var fy=E((Wme,hy)=>{var zq=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;hy.exports=zq});var py=E((Xme,dy)=>{var qq=(t,e,n)=>{let i=e[0],s=e[1],r=e[2],o=n[3]*i+n[7]*s+n[11]*r+n[15];return o=o||1,t[0]=(n[0]*i+n[4]*s+n[8]*r+n[12])/o,t[1]=(n[1]*i+n[5]*s+n[9]*r+n[13])/o,t[2]=(n[2]*i+n[6]*s+n[10]*r+n[14])/o,t};dy.exports=qq});var xe=E((Yme,my)=>{my.exports={abs:Lp(),add:Np(),angle:M2(),clone:T2(),copy:Fp(),create:gc(),cross:No(),distance:Op(),divide:I2(),dot:mc(),equals:N2(),fromScalar:O2(),fromValues:B2(),fromVec2:z2(),length:Up(),lerp:G2(),max:Bp(),min:kp(),multiply:X2(),negate:Z2(),normalize:dh(),orthogonal:K2(),rotateX:ey(),rotateY:ny(),rotateZ:sy(),scale:zp(),snap:ay(),squaredDistance:qp(),squaredLength:Vp(),subtract:xc(),toString:fy(),transform:py()}});var xy=E((Zme,gy)=>{var Xs=xe(),Vq=Dp(),Gq=(t,e,n)=>{let i=Xs.normalize(Xs.create(),e),s=Xs.normalize(Xs.create(),n),r=Xs.cross(Xs.create(),s,i),o=Xs.dot(s,i);if(o===-1)return Vq(t,Math.PI,Xs.orthogonal(r,i));let a=1/(1+o);return t[0]=r[0]*r[0]*a+o,t[1]=r[1]*r[0]*a-r[2],t[2]=r[2]*r[0]*a+r[1],t[3]=0,t[4]=r[0]*r[1]*a+r[2],t[5]=r[1]*r[1]*a+o,t[6]=r[2]*r[1]*a-r[0],t[7]=0,t[8]=r[0]*r[2]*a-r[1],t[9]=r[1]*r[2]*a+r[0],t[10]=r[2]*r[2]*a+o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};gy.exports=Gq});var yy=E((jme,vy)=>{var{sin:Hq,cos:$q}=an(),Wq=(t,e)=>{let n=Hq(e),i=$q(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=n,t[7]=0,t[8]=0,t[9]=-n,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};vy.exports=Wq});var by=E((Jme,_y)=>{var{sin:Xq,cos:Yq}=an(),Zq=(t,e)=>{let n=Xq(e),i=Yq(e);return t[0]=i,t[1]=0,t[2]=-n,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=n,t[9]=0,t[10]=i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};_y.exports=Zq});var Ey=E((Kme,Sy)=>{var{sin:jq,cos:Jq}=an(),Kq=(t,e)=>{let n=jq(e),i=Jq(e);return t[0]=i,t[1]=n,t[2]=0,t[3]=0,t[4]=-n,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t};Sy.exports=Kq});var Ay=E((Qme,My)=>{var Qq=t=>t[0]===1&&t[1]===0&&t[2]===0&&t[3]===0&&t[4]===0&&t[5]===1&&t[6]===0&&t[7]===0&&t[8]===0&&t[9]===0&&t[10]===1&&t[11]===0&&t[12]===0&&t[13]===0&&t[14]===0&&t[15]===1;My.exports=Qq});var Ty=E((ege,wy)=>{var e6=t=>xs(t[1])&&xs(t[2])&&xs(t[3])&&xs(t[4])&&xs(t[6])&&xs(t[7])&&xs(t[8])&&xs(t[9])&&xs(t[11])&&t[15]===1,xs=t=>Math.abs(t)<Number.EPSILON;wy.exports=e6});var Ry=E((tge,Cy)=>{var t6=t=>{let e=t[4]*t[9]-t[8]*t[5],n=t[8]*t[1]-t[0]*t[9],i=t[0]*t[5]-t[4]*t[1];return e*t[2]+n*t[6]+i*t[10]<0};Cy.exports=t6});var Py=E((nge,Dy)=>{var n6=(t,e)=>{let[n,i,s,r]=e;return t[0]=1-2*n*n,t[1]=-2*i*n,t[2]=-2*s*n,t[3]=0,t[4]=-2*n*i,t[5]=1-2*i*i,t[6]=-2*s*i,t[7]=0,t[8]=-2*n*s,t[9]=-2*i*s,t[10]=1-2*s*s,t[11]=0,t[12]=2*n*r,t[13]=2*i*r,t[14]=2*s*r,t[15]=1,t};Dy.exports=n6});var Ly=E((ige,Iy)=>{var i6=(t,e,n)=>{let i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],c=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],g=e[11],p=e[12],x=e[13],m=e[14],b=e[15],S=n[0],y=n[1],M=n[2],A=n[3];return t[0]=S*i+y*a+M*f+A*p,t[1]=S*s+y*c+M*h+A*x,t[2]=S*r+y*l+M*d+A*m,t[3]=S*o+y*u+M*g+A*b,S=n[4],y=n[5],M=n[6],A=n[7],t[4]=S*i+y*a+M*f+A*p,t[5]=S*s+y*c+M*h+A*x,t[6]=S*r+y*l+M*d+A*m,t[7]=S*o+y*u+M*g+A*b,S=n[8],y=n[9],M=n[10],A=n[11],t[8]=S*i+y*a+M*f+A*p,t[9]=S*s+y*c+M*h+A*x,t[10]=S*r+y*l+M*d+A*m,t[11]=S*o+y*u+M*g+A*b,S=n[12],y=n[13],M=n[14],A=n[15],t[12]=S*i+y*a+M*f+A*p,t[13]=S*s+y*c+M*h+A*x,t[14]=S*r+y*l+M*d+A*m,t[15]=S*o+y*u+M*g+A*b,t};Iy.exports=i6});var Fy=E((sge,Ny)=>{var{EPS:s6}=nt(),{sin:r6,cos:o6}=an(),a6=Cp(),c6=(t,e,n,i)=>{let[s,r,o]=i,a=s*s+r*r+o*o;if(Math.abs(a)<s6)return a6(t,e);let c=1/Math.sqrt(a);s*=c,r*=c,o*=c;let l=r6(n),u=o6(n),f=1-u,h=e[0],d=e[1],g=e[2],p=e[3],x=e[4],m=e[5],b=e[6],S=e[7],y=e[8],M=e[9],A=e[10],w=e[11],T=s*s*f+u,v=r*s*f+o*l,_=o*s*f-r*l,R=s*r*f-o*l,D=r*r*f+u,L=o*r*f+s*l,N=s*o*f+r*l,B=r*o*f-s*l,F=o*o*f+u;return t[0]=h*T+x*v+y*_,t[1]=d*T+m*v+M*_,t[2]=g*T+b*v+A*_,t[3]=p*T+S*v+w*_,t[4]=h*R+x*D+y*L,t[5]=d*R+m*D+M*L,t[6]=g*R+b*D+A*L,t[7]=p*R+S*D+w*L,t[8]=h*N+x*B+y*F,t[9]=d*N+m*B+M*F,t[10]=g*N+b*B+A*F,t[11]=p*N+S*B+w*F,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t};Ny.exports=c6});var Uy=E((rge,Oy)=>{var{sin:l6,cos:u6}=an(),h6=(t,e,n)=>{let i=l6(n),s=u6(n),r=e[4],o=e[5],a=e[6],c=e[7],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=r*s+l*i,t[5]=o*s+u*i,t[6]=a*s+f*i,t[7]=c*s+h*i,t[8]=l*s-r*i,t[9]=u*s-o*i,t[10]=f*s-a*i,t[11]=h*s-c*i,t};Oy.exports=h6});var ky=E((oge,By)=>{var{sin:f6,cos:d6}=an(),p6=(t,e,n)=>{let i=f6(n),s=d6(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[8],u=e[9],f=e[10],h=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s-l*i,t[1]=o*s-u*i,t[2]=a*s-f*i,t[3]=c*s-h*i,t[8]=r*i+l*s,t[9]=o*i+u*s,t[10]=a*i+f*s,t[11]=c*i+h*s,t};By.exports=p6});var qy=E((age,zy)=>{var{sin:m6,cos:g6}=an(),x6=(t,e,n)=>{let i=m6(n),s=g6(n),r=e[0],o=e[1],a=e[2],c=e[3],l=e[4],u=e[5],f=e[6],h=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=r*s+l*i,t[1]=o*s+u*i,t[2]=a*s+f*i,t[3]=c*s+h*i,t[4]=l*s-r*i,t[5]=u*s-o*i,t[6]=f*s-a*i,t[7]=h*s-c*i,t};zy.exports=x6});var Gy=E((cge,Vy)=>{var v6=(t,e,n)=>{let i=n[0],s=n[1],r=n[2];return t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t[3]=e[3]*i,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*r,t[9]=e[9]*r,t[10]=e[10]*r,t[11]=e[11]*r,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};Vy.exports=v6});var $y=E((lge,Hy)=>{var y6=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t[2]=e[2]-n[2],t[3]=e[3]-n[3],t[4]=e[4]-n[4],t[5]=e[5]-n[5],t[6]=e[6]-n[6],t[7]=e[7]-n[7],t[8]=e[8]-n[8],t[9]=e[9]-n[9],t[10]=e[10]-n[10],t[11]=e[11]-n[11],t[12]=e[12]-n[12],t[13]=e[13]-n[13],t[14]=e[14]-n[14],t[15]=e[15]-n[15],t);Hy.exports=y6});var Xy=E((uge,Wy)=>{var _6=t=>t.map(e=>e.toFixed(7)).toString();Wy.exports=_6});var Zy=E((hge,Yy)=>{var b6=(t,e,n)=>{let i=n[0],s=n[1],r=n[2],o,a,c,l,u,f,h,d,g,p,x,m;return e===t?(t[12]=e[0]*i+e[4]*s+e[8]*r+e[12],t[13]=e[1]*i+e[5]*s+e[9]*r+e[13],t[14]=e[2]*i+e[6]*s+e[10]*r+e[14],t[15]=e[3]*i+e[7]*s+e[11]*r+e[15]):(o=e[0],a=e[1],c=e[2],l=e[3],u=e[4],f=e[5],h=e[6],d=e[7],g=e[8],p=e[9],x=e[10],m=e[11],t[0]=o,t[1]=a,t[2]=c,t[3]=l,t[4]=u,t[5]=f,t[6]=h,t[7]=d,t[8]=g,t[9]=p,t[10]=x,t[11]=m,t[12]=o*i+u*s+g*r+e[12],t[13]=a*i+f*s+p*r+e[13],t[14]=c*i+h*s+x*r+e[14],t[15]=l*i+d*s+m*r+e[15]),t};Yy.exports=b6});var yt=E((fge,jy)=>{jy.exports={add:Kv(),clone:t2(),copy:Cp(),create:fh(),invert:s2(),equals:o2(),fromRotation:Dp(),fromScaling:d2(),fromTaitBryanRotation:m2(),fromTranslation:x2(),fromValues:y2(),fromVectorRotation:xy(),fromXRotation:yy(),fromYRotation:by(),fromZRotation:Ey(),identity:Rp(),isIdentity:Ay(),isOnlyTransformScale:Ty(),isMirroring:Ry(),mirrorByPlane:Py(),multiply:Ly(),rotate:Fy(),rotateX:Uy(),rotateY:ky(),rotateZ:qy(),scale:Gy(),subtract:$y(),toString:Xy(),translate:Zy()}});var vc=E((dge,Jy)=>{var S6=yt(),E6=t=>(t===void 0&&(t=[]),{sides:t,transforms:S6.create()});Jy.exports=E6});var Qy=E((pge,Ky)=>{var M6=(t,e)=>(t[0]=Math.abs(e[0]),t[1]=Math.abs(e[1]),t);Ky.exports=M6});var t_=E((mge,e_)=>{var A6=(t,e,n)=>(t[0]=e[0]+n[0],t[1]=e[1]+n[1],t);e_.exports=A6});var ph=E((gge,n_)=>{var w6=t=>Math.atan2(t[1],t[0]);n_.exports=w6});var s_=E((xge,i_)=>{i_.exports=ph()});var o_=E((vge,r_)=>{var T6=ph(),C6=t=>T6(t)*57.29577951308232;r_.exports=C6});var yc=E((yge,a_)=>{var R6=()=>[0,0];a_.exports=R6});var l_=E((_ge,c_)=>{var D6=yc(),P6=t=>{let e=D6();return e[0]=t[0],e[1]=t[1],e};c_.exports=P6});var h_=E((bge,u_)=>{var I6=(t,e)=>(t[0]=e[0],t[1]=e[1],t);u_.exports=I6});var d_=E((Sge,f_)=>{var L6=(t,e,n)=>(t[0]=0,t[1]=0,t[2]=e[0]*n[1]-e[1]*n[0],t);f_.exports=L6});var m_=E((Ege,p_)=>{var N6=(t,e)=>{let n=e[0]-t[0],i=e[1]-t[1];return Math.sqrt(n*n+i*i)};p_.exports=N6});var x_=E((Mge,g_)=>{var F6=(t,e,n)=>(t[0]=e[0]/n[0],t[1]=e[1]/n[1],t);g_.exports=F6});var y_=E((Age,v_)=>{var O6=(t,e)=>t[0]*e[0]+t[1]*e[1];v_.exports=O6});var b_=E((wge,__)=>{var U6=(t,e)=>t[0]===e[0]&&t[1]===e[1];__.exports=U6});var Gp=E((Tge,S_)=>{var{sin:B6,cos:k6}=an(),z6=(t,e)=>(t[0]=k6(e),t[1]=B6(e),t);S_.exports=z6});var M_=E((Cge,E_)=>{var q6=Gp(),V6=(t,e)=>q6(t,e*.017453292519943295);E_.exports=V6});var w_=E((Rge,A_)=>{var G6=(t,e)=>(t[0]=e,t[1]=e,t);A_.exports=G6});var C_=E((Dge,T_)=>{var H6=yc(),$6=(t,e)=>{let n=H6();return n[0]=t,n[1]=e,n};T_.exports=$6});var D_=E((Pge,R_)=>{var W6=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]);R_.exports=W6});var I_=E((Ige,P_)=>{var X6=(t,e,n,i)=>{let s=e[0],r=e[1];return t[0]=s+i*(n[0]-s),t[1]=r+i*(n[1]-r),t};P_.exports=X6});var N_=E((Lge,L_)=>{var Y6=(t,e,n)=>(t[0]=Math.max(e[0],n[0]),t[1]=Math.max(e[1],n[1]),t);L_.exports=Y6});var O_=E((Nge,F_)=>{var Z6=(t,e,n)=>(t[0]=Math.min(e[0],n[0]),t[1]=Math.min(e[1],n[1]),t);F_.exports=Z6});var B_=E((Fge,U_)=>{var j6=(t,e,n)=>(t[0]=e[0]*n[0],t[1]=e[1]*n[1],t);U_.exports=j6});var z_=E((Oge,k_)=>{var J6=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t);k_.exports=J6});var Hp=E((Uge,q_)=>{var K6=(t,e,n,i)=>{let s=e[0]-n[0],r=e[1]-n[1],o=Math.cos(i),a=Math.sin(i);return t[0]=s*o-r*a+n[0],t[1]=s*a+r*o+n[1],t};q_.exports=K6});var G_=E((Bge,V_)=>{var{TAU:Q6}=nt(),e7=yc(),t7=Hp(),n7=(t,e)=>t7(t,e,e7(),Q6/4);V_.exports=n7});var $_=E((kge,H_)=>{var i7=(t,e)=>{let n=e[0],i=e[1],s=n*n+i*i;return s>0&&(s=1/Math.sqrt(s)),t[0]=n*s,t[1]=i*s,t};H_.exports=i7});var X_=E((zge,W_)=>{var s7=(t,e,n)=>(t[0]=e[0]*n,t[1]=e[1]*n,t);W_.exports=s7});var Z_=E((qge,Y_)=>{var r7=(t,e,n)=>(t[0]=Math.round(e[0]/n)*n+0,t[1]=Math.round(e[1]/n)*n+0,t);Y_.exports=r7});var J_=E((Vge,j_)=>{var o7=(t,e)=>{let n=e[0]-t[0],i=e[1]-t[1];return n*n+i*i};j_.exports=o7});var Q_=E((Gge,K_)=>{var a7=t=>{let e=t[0],n=t[1];return e*e+n*n};K_.exports=a7});var tb=E((Hge,eb)=>{var c7=(t,e,n)=>(t[0]=e[0]-n[0],t[1]=e[1]-n[1],t);eb.exports=c7});var ib=E(($ge,nb)=>{var l7=t=>`[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;nb.exports=l7});var rb=E((Wge,sb)=>{var u7=(t,e,n)=>{let i=e[0],s=e[1];return t[0]=n[0]*i+n[4]*s+n[12],t[1]=n[1]*i+n[5]*s+n[13],t};sb.exports=u7});var We=E((Xge,ob)=>{ob.exports={abs:Qy(),add:t_(),angle:s_(),angleDegrees:o_(),angleRadians:ph(),clone:l_(),copy:h_(),create:yc(),cross:d_(),distance:m_(),divide:x_(),dot:y_(),equals:b_(),fromAngleDegrees:M_(),fromAngleRadians:Gp(),fromScalar:w_(),fromValues:C_(),length:D_(),lerp:I_(),max:N_(),min:O_(),multiply:B_(),negate:z_(),normal:G_(),normalize:$_(),rotate:Hp(),scale:X_(),snap:Z_(),squaredDistance:J_(),squaredLength:Q_(),subtract:tb(),toString:ib(),transform:rb()}});var cb=E((Yge,ab)=>{var $p=We(),h7=vc(),f7=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.length;if(e<3)throw new Error("the given points must define a closed geometry with three or more points");$p.equals(t[0],t[e-1])&&--e;let n=[],i=t[e-1];for(let s=0;s<e;s++){let r=t[s];n.push([$p.clone(i),$p.clone(r)]),i=r}return h7(n)};ab.exports=f7});var hb=E((Zge,ub)=>{var d7=yt(),lb=We(),p7=vc(),m7=t=>{if(t[0]!==0)throw new Error("invalid compact binary data");let e=p7();e.transforms=d7.clone(t.slice(1,17));for(let n=21;n<t.length;n+=4){let i=lb.fromValues(t[n+0],t[n+1]),s=lb.fromValues(t[n+2],t[n+3]);e.sides.push([i,s])}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};ub.exports=m7});var Wp=E((jge,fb)=>{var g7=t=>!!(t&&typeof t=="object"&&"sides"in t&&"transforms"in t&&Array.isArray(t.sides)&&"length"in t.transforms);fb.exports=g7});var mb=E((Jge,pb)=>{var db=yt(),mh=We(),x7=t=>(db.isIdentity(t.transforms)||(t.sides=t.sides.map(e=>{let n=mh.transform(mh.create(),e[0],t.transforms),i=mh.transform(mh.create(),e[1],t.transforms);return[n,i]}),t.transforms=db.create()),t);pb.exports=x7});var Fo=E((Kge,gb)=>{var v7=mb(),y7=t=>v7(t).sides;gb.exports=y7});var Xp=E((Qge,xb)=>{var _7=vc(),b7=Fo(),S7=t=>{let n=b7(t).map(i=>[i[1],i[0]]);return n.reverse(),_7(n)};xb.exports=S7});var Yp=E((e1e,vb)=>{var _c=We(),E7=Fo(),M7=t=>{let e=new Map,n=i=>{let s=i.toString();return e.has(s)?e.get(s):(e.set(s,i),i)};return t.map(i=>i.map(n))},A7=t=>{let e=new Map;return M7(t).forEach(i=>{e.has(i[0])?e.get(i[0]).push(i):e.set(i[0],[i])}),e},w7=t=>{let e=A7(E7(t)),n=[];for(;;){let i;for(let[o,a]of e){if(i=a.shift(),!i){e.delete(o);continue}break}if(i===void 0)break;let s=[],r=i[0];for(;;){s.push(i[0]);let o=i[1];if(o===r)break;let a=e.get(o);if(!a)throw new Error(`geometry is not closed at vertex ${o}`);let c=T7(i,a);a.length===0&&e.delete(o),i=c}s.length>0&&s.push(s.shift()),n.push(s)}return e.clear(),n},T7=(t,e)=>{if(e.length===1)return e.pop();let n=_c.create(),i=_c.angleDegrees(_c.subtract(n,t[1],t[0])),s,r;e.forEach((a,c)=>{let u=_c.angleDegrees(_c.subtract(n,a[1],a[0]))-i;u<-180&&(u+=360),u>=180&&(u-=360),(r===void 0||u>s)&&(r=c,s=u)});let o=e[r];return e.splice(r,1),o};vb.exports=w7});var _b=E((t1e,yb)=>{var C7=Fo(),R7=t=>{let n=C7(t).map(i=>i[0]);return n.length>0&&n.push(n.shift()),n};yb.exports=R7});var Eb=E((n1e,Sb)=>{var bb=We(),D7=Fo(),P7=t=>{let e=D7(t),n="geom2 ("+e.length+` sides):
[
`;return e.forEach(i=>{n+="  ["+bb.toString(i[0])+", "+bb.toString(i[1])+`]
`}),n+=`]
`,n};Sb.exports=P7});var Ab=E((i1e,Mb)=>{var I7=t=>{let e=t.sides,n=t.transforms,i=[-1,-1,-1,-1];t.color&&(i=t.color);let s=new Float32Array(21+e.length*4);s[0]=0,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=i[0],s[18]=i[1],s[19]=i[2],s[20]=i[3];for(let r=0;r<e.length;r++){let o=r*4+21,a=e[r][0],c=e[r][1];s[o+0]=a[0],s[o+1]=a[1],s[o+2]=c[0],s[o+3]=c[1]}return s};Mb.exports=I7});var Cb=E((s1e,Tb)=>{var wb=yt(),L7=Xp(),N7=(t,e)=>{let n=wb.multiply(wb.create(),t,e.transforms),i=Object.assign({},e,{transforms:n});return t[0]*t[5]-t[4]*t[1]<0?L7(i):i};Tb.exports=N7});var Db=E((r1e,Rb)=>{var F7=We(),O7=Wp(),U7=Yp(),B7=t=>{if(!O7(t))throw new Error("invalid geom2 structure");if(U7(t),t.sides.forEach(e=>{if(F7.equals(e[0],e[1]))throw new Error(`geom2 self-edge ${e[0]}`)}),!t.transforms.every(Number.isFinite))throw new Error(`geom2 invalid transforms ${t.transforms}`)};Rb.exports=B7});var Ge=E((o1e,Pb)=>{Pb.exports={clone:jv(),create:vc(),fromPoints:cb(),fromCompactBinary:hb(),isA:Wp(),reverse:Xp(),toOutlines:Yp(),toPoints:_b(),toSides:Fo(),toString:Eb(),toCompactBinary:Ab(),transform:Cb(),validate:Db()}});var Lb=E((a1e,Ib)=>{var k7=t=>Object.assign({},t);Ib.exports=k7});var Oo=E((c1e,Nb)=>{var z7=yt(),q7=t=>(t===void 0&&(t=[]),{polygons:t,transforms:z7.create()});Nb.exports=q7});var Bb=E((l1e,Ub)=>{var V7=No(),Fb=xc(),Ob=Vp(),G7=(t,e,n)=>{let i=[],s=[],r=[];Fb(i,n,e),Fb(s,t,e);let o=Ob(V7(r,s,i)),a=Ob(i);if(a===0)throw Error("a and b are the same point");return o/a},H7=(t,e,n)=>Math.sqrt(G7(t,e,n));Ub.exports=H7});var qb=E((u1e,zb)=>{var $7=No(),W7=dh(),kb=xc(),X7=(t,e,n,i)=>{let s=[0,0,0];return kb(t,e,n),kb(s,n,i),$7(t,t,s),W7(t,t)};zb.exports=X7});var Gb=E((h1e,Vb)=>{var Zp=class{constructor(){this.head=null,this.tail=null}clear(){this.head=this.tail=null}insertBefore(e,n){n.prev=e.prev,n.next=e,n.prev?n.prev.next=n:this.head=n,e.prev=n}insertAfter(e,n){n.prev=e,n.next=e.next,n.next?n.next.prev=n:this.tail=n,e.next=n}add(e){this.head?this.tail.next=e:this.head=e,e.prev=this.tail,e.next=null,this.tail=e}addAll(e){for(this.head?this.tail.next=e:this.head=e,e.prev=this.tail;e.next;)e=e.next;this.tail=e}remove(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev}removeChain(e,n){e.prev?e.prev.next=n.next:this.head=n.next,n.next?n.next.prev=e.prev:this.tail=e.prev}first(){return this.head}isEmpty(){return!this.head}};Vb.exports=Zp});var $b=E((f1e,Hb)=>{var jp=class{constructor(e,n){this.point=e,this.index=n,this.next=null,this.prev=null,this.face=null}};Hb.exports=jp});var Xb=E((d1e,Wb)=>{var Y7=Op(),Z7=qp(),Jp=class{constructor(e,n){this.vertex=e,this.face=n,this.next=null,this.prev=null,this.opposite=null}head(){return this.vertex}tail(){return this.prev?this.prev.vertex:null}length(){return this.tail()?Y7(this.tail().point,this.head().point):-1}lengthSquared(){return this.tail()?Z7(this.tail().point,this.head().point):-1}setOpposite(e){this.opposite=e,e.opposite=this}};Wb.exports=Jp});var jb=E((p1e,Zb)=>{var Kp=Np(),j7=Fp(),J7=No(),Qp=mc(),K7=Up(),Q7=dh(),gh=zp(),e0=xc(),t0=Xb(),Yb=0,eV=1,n0=2,i0=class t{constructor(){this.normal=[],this.centroid=[],this.offset=0,this.outside=null,this.mark=Yb,this.edge=null,this.nVertices=0}getEdge(e){if(typeof e!="number")throw Error("requires a number");let n=this.edge;for(;e>0;)n=n.next,e-=1;for(;e<0;)n=n.prev,e+=1;return n}computeNormal(){let e=this.edge,n=e.next,i=n.next,s=e0([],n.head().point,e.head().point),r=[],o=[];for(this.nVertices=2,this.normal=[0,0,0];i!==e;)j7(o,s),e0(s,i.head().point,e.head().point),Kp(this.normal,this.normal,J7(r,o,s)),i=i.next,this.nVertices+=1;this.area=K7(this.normal),this.normal=gh(this.normal,this.normal,1/this.area)}computeNormalMinArea(e){if(this.computeNormal(),this.area<e){let n,i=0,s=this.edge;do{let u=s.lengthSquared();u>i&&(n=s,i=u),s=s.next}while(s!==this.edge);let r=n.tail().point,o=n.head().point,a=e0([],o,r),c=Math.sqrt(i);gh(a,a,1/c);let l=Qp(this.normal,a);gh(a,a,-l),Kp(this.normal,this.normal,a),Q7(this.normal,this.normal)}}computeCentroid(){this.centroid=[0,0,0];let e=this.edge;do Kp(this.centroid,this.centroid,e.head().point),e=e.next;while(e!==this.edge);gh(this.centroid,this.centroid,1/this.nVertices)}computeNormalAndCentroid(e){typeof e<"u"?this.computeNormalMinArea(e):this.computeNormal(),this.computeCentroid(),this.offset=Qp(this.normal,this.centroid)}distanceToPlane(e){return Qp(this.normal,e)-this.offset}connectHalfEdges(e,n){let i;if(e.opposite.face===n.opposite.face){let s=n.opposite.face,r;e===this.edge&&(this.edge=n),s.nVertices===3?(r=n.opposite.prev.opposite,s.mark=n0,i=s):(r=n.opposite.next,s.edge===r.prev&&(s.edge=r),r.prev=r.prev.prev,r.prev.next=r),n.prev=e.prev,n.prev.next=n,n.setOpposite(r),s.computeNormalAndCentroid()}else e.next=n,n.prev=e;return i}mergeAdjacentFaces(e,n){let i=e.opposite,s=i.face;n.push(s),s.mark=n0;let r=e.prev,o=e.next,a=i.prev,c=i.next;for(;r.opposite.face===s;)r=r.prev,c=c.next;for(;o.opposite.face===s;)o=o.next,a=a.prev;let l;for(l=c;l!==a.next;l=l.next)l.face=this;this.edge=o;let u;return u=this.connectHalfEdges(a,o),u&&n.push(u),u=this.connectHalfEdges(r,c),u&&n.push(u),this.computeNormalAndCentroid(),n}collectIndices(){let e=[],n=this.edge;do e.push(n.head().index),n=n.next;while(n!==this.edge);return e}static createTriangle(e,n,i,s=0){let r=new t,o=new t0(e,r),a=new t0(n,r),c=new t0(i,r);return o.next=c.prev=a,a.next=o.prev=c,c.next=a.prev=o,r.edge=o,r.computeNormalAndCentroid(s),r}};Zb.exports={VISIBLE:Yb,NON_CONVEX:eV,DELETED:n0,Face:i0}});var tS=E((m1e,eS)=>{var s0=mc(),tV=Bb(),nV=qb(),Jb=Gb(),iV=$b(),{Face:vs,VISIBLE:Uo,NON_CONVEX:Kb,DELETED:sV}=jb(),rV=1,Qb=2,r0=class{constructor(e){if(!Array.isArray(e))throw TypeError("input is not a valid array");if(e.length<4)throw Error("cannot build a simplex out of <4 points");this.tolerance=-1,this.nFaces=0,this.nPoints=e.length,this.faces=[],this.newFaces=[],this.claimed=new Jb,this.unclaimed=new Jb,this.vertices=[];for(let n=0;n<e.length;n+=1)this.vertices.push(new iV(e[n],n));this.discardedFaces=[],this.vertexPointIndices=[]}addVertexToFace(e,n){e.face=n,n.outside?this.claimed.insertBefore(n.outside,e):this.claimed.add(e),n.outside=e}removeVertexFromFace(e,n){e===n.outside&&(e.next&&e.next.face===n?n.outside=e.next:n.outside=null),this.claimed.remove(e)}removeAllVerticesFromFace(e){if(e.outside){let n=e.outside;for(;n.next&&n.next.face===e;)n=n.next;return this.claimed.removeChain(e.outside,n),n.next=null,e.outside}}deleteFaceVertices(e,n){let i=this.removeAllVerticesFromFace(e);if(i)if(!n)this.unclaimed.addAll(i);else{let s;for(let r=i;r;r=s)s=r.next,n.distanceToPlane(r.point)>this.tolerance?this.addVertexToFace(r,n):this.unclaimed.add(r)}}resolveUnclaimedPoints(e){let n=this.unclaimed.first();for(let i=n;i;i=n){n=i.next;let s=this.tolerance,r;for(let o=0;o<e.length;o+=1){let a=e[o];if(a.mark===Uo){let c=a.distanceToPlane(i.point);if(c>s&&(s=c,r=a),s>1e3*this.tolerance)break}}r&&this.addVertexToFace(i,r)}}computeExtremes(){let e=[],n=[],i=[],s=[],r,o;for(r=0;r<3;r+=1)i[r]=s[r]=this.vertices[0];for(r=0;r<3;r+=1)e[r]=n[r]=this.vertices[0].point[r];for(r=1;r<this.vertices.length;r+=1){let a=this.vertices[r],c=a.point;for(o=0;o<3;o+=1)c[o]<e[o]&&(e[o]=c[o],i[o]=a);for(o=0;o<3;o+=1)c[o]>n[o]&&(n[o]=c[o],s[o]=a)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(e[0]),Math.abs(n[0]))+Math.max(Math.abs(e[1]),Math.abs(n[1]))+Math.max(Math.abs(e[2]),Math.abs(n[2]))),[i,s]}createInitialSimplex(){let e=this.vertices,[n,i]=this.computeExtremes(),s,r,o,a,c=0,l=0;for(o=0;o<3;o+=1){let p=i[o].point[o]-n[o].point[o];p>c&&(c=p,l=o)}let u=n[l],f=i[l];for(c=0,o=0;o<this.vertices.length;o+=1){let p=this.vertices[o];if(p!==u&&p!==f){let x=tV(p.point,u.point,f.point);x>c&&(c=x,s=p)}}let h=nV([],u.point,f.point,s.point),d=s0(u.point,h);for(c=-1,o=0;o<this.vertices.length;o+=1){let p=this.vertices[o];if(p!==u&&p!==f&&p!==s){let x=Math.abs(s0(h,p.point)-d);x>c&&(c=x,r=p)}}let g=[];if(s0(r.point,h)-d<0)for(g.push(vs.createTriangle(u,f,s),vs.createTriangle(r,f,u),vs.createTriangle(r,s,f),vs.createTriangle(r,u,s)),o=0;o<3;o+=1){let p=(o+1)%3;g[o+1].getEdge(2).setOpposite(g[0].getEdge(p)),g[o+1].getEdge(1).setOpposite(g[p+1].getEdge(0))}else for(g.push(vs.createTriangle(u,s,f),vs.createTriangle(r,u,f),vs.createTriangle(r,f,s),vs.createTriangle(r,s,u)),o=0;o<3;o+=1){let p=(o+1)%3;g[o+1].getEdge(2).setOpposite(g[0].getEdge((3-o)%3)),g[o+1].getEdge(0).setOpposite(g[p+1].getEdge(1))}for(o=0;o<4;o+=1)this.faces.push(g[o]);for(o=0;o<e.length;o+=1){let p=e[o];if(p!==u&&p!==f&&p!==s&&p!==r){c=this.tolerance;let x;for(a=0;a<4;a+=1){let m=g[a].distanceToPlane(p.point);m>c&&(c=m,x=g[a])}x&&this.addVertexToFace(p,x)}}}reindexFaceAndVertices(){let e=[];for(let n=0;n<this.faces.length;n+=1){let i=this.faces[n];i.mark===Uo&&e.push(i)}this.faces=e}collectFaces(e){let n=[];for(let i=0;i<this.faces.length;i+=1){if(this.faces[i].mark!==Uo)throw Error("attempt to include a destroyed face in the hull");let s=this.faces[i].collectIndices();if(e)n.push(s);else for(let r=0;r<s.length-2;r+=1)n.push([s[0],s[r+1],s[r+2]])}return n}nextVertexToAdd(){if(!this.claimed.isEmpty()){let e,n,i=0,s=this.claimed.first().face;for(n=s.outside;n&&n.face===s;n=n.next){let r=s.distanceToPlane(n.point);r>i&&(i=r,e=n)}return e}}computeHorizon(e,n,i,s){this.deleteFaceVertices(i),i.mark=sV;let r;n?r=n.next:r=n=i.getEdge(0);do{let o=r.opposite,a=o.face;a.mark===Uo&&(a.distanceToPlane(e)>this.tolerance?this.computeHorizon(e,o,a,s):s.push(r)),r=r.next}while(r!==n)}addAdjoiningFace(e,n){let i=vs.createTriangle(e,n.tail(),n.head());return this.faces.push(i),i.getEdge(-1).setOpposite(n.opposite),i.getEdge(0)}addNewFaces(e,n){this.newFaces=[];let i,s;for(let r=0;r<n.length;r+=1){let o=n[r],a=this.addAdjoiningFace(e,o);i?a.next.setOpposite(s):i=a,this.newFaces.push(a.face),s=a}i.next.setOpposite(s)}oppositeFaceDistance(e){return e.face.distanceToPlane(e.opposite.face.centroid)}doAdjacentMerge(e,n){let i=e.edge,s=!0,r=0;do{if(r>=e.nVertices)throw Error("merge recursion limit exceeded");let o=i.opposite.face,a=!1;if(n===Qb?(this.oppositeFaceDistance(i)>-this.tolerance||this.oppositeFaceDistance(i.opposite)>-this.tolerance)&&(a=!0):e.area>o.area?this.oppositeFaceDistance(i)>-this.tolerance?a=!0:this.oppositeFaceDistance(i.opposite)>-this.tolerance&&(s=!1):this.oppositeFaceDistance(i.opposite)>-this.tolerance?a=!0:this.oppositeFaceDistance(i)>-this.tolerance&&(s=!1),a){let c=e.mergeAdjacentFaces(i,[]);for(let l=0;l<c.length;l+=1)this.deleteFaceVertices(c[l],e);return!0}i=i.next,r+=1}while(i!==e.edge);return s||(e.mark=Kb),!1}addVertexToHull(e){let n=[];this.unclaimed.clear(),this.removeVertexFromFace(e,e.face),this.computeHorizon(e.point,null,e.face,n),this.addNewFaces(e,n);for(let i=0;i<this.newFaces.length;i+=1){let s=this.newFaces[i];if(s.mark===Uo)for(;this.doAdjacentMerge(s,rV););}for(let i=0;i<this.newFaces.length;i+=1){let s=this.newFaces[i];if(s.mark===Kb)for(s.mark=Uo;this.doAdjacentMerge(s,Qb););}this.resolveUnclaimedPoints(this.newFaces)}build(){let e;for(this.createInitialSimplex();e=this.nextVertexToAdd();)this.addVertexToHull(e);this.reindexFaceAndVertices()}};eS.exports=r0});var o0=E((g1e,nS)=>{var oV=tS(),aV=(t,e={})=>{let n=new oV(t);return n.build(),n.collectFaces(e.skipTriangulation)};nS.exports=aV});var Or=E((x1e,iS)=>{var cV=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});iS.exports=cV});var rS=E((v1e,sS)=>{var lV=Or(),uV=xe(),hV=(...t)=>{let e,n;return t.length===1?(e=lV(),n=t[0]):(e=t[0],n=t[1]),e.vertices=n.vertices.map(i=>uV.clone(i)),e};sS.exports=hV});var aS=E((y1e,oS)=>{var fV=xe(),dV=Or(),pV=t=>{let e=t.map(n=>fV.clone(n));return dV(e)};oS.exports=pV});var lS=E((_1e,cS)=>{var mV=Or(),gV=(t,e)=>{let n=mV(t);return n.plane=e,n};cS.exports=gV});var bc=E((b1e,uS)=>{var xV=()=>[0,0,0,0];uS.exports=xV});var a0=E((S1e,hS)=>{var vV=bc(),yV=t=>{let e=vV();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};hS.exports=yV});var c0=E((E1e,fS)=>{var _V=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t);fS.exports=_V});var l0=E((M1e,dS)=>{var bV=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3];dS.exports=bV});var u0=E((A1e,pS)=>{var SV=(t,e)=>(t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t);pS.exports=SV});var f0=E((w1e,mS)=>{var h0=xe(),EV=(t,e,n)=>{let i=h0.normalize(h0.create(),e),s=h0.dot(n,i);return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=s,t};mS.exports=EV});var d0=E((T1e,gS)=>{var MV=bc(),AV=(t,e,n,i)=>{let s=MV();return s[0]=t,s[1]=e,s[2]=n,s[3]=i,s};gS.exports=AV});var vS=E((C1e,xS)=>{var Jn=xe(),wV=f0(),TV=(t,...e)=>{t[0]=0,t[1]=0,t[2]=0,t[3]=0;let n=e.length;e.forEach(d=>{Jn.add(t,t,d)}),Jn.scale(t,t,1/n);let i=0,s=0,r=0,o=0,a=0,c=0,l=Jn.create();e.forEach(d=>{Jn.subtract(l,d,t),i+=l[0]*l[0],s+=l[0]*l[1],r+=l[0]*l[2],o+=l[1]*l[1],a+=l[1]*l[2],c+=l[2]*l[2]}),i/=n,s/=n,r/=n,o/=n,a/=n,c/=n,l[0]=0,l[1]=0,l[2]=0;let u=Jn.create(),f=o*c-a*a;u[0]=f,u[1]=r*a-s*c,u[2]=s*a-r*o;let h=f*f;return Jn.add(l,l,Jn.scale(u,u,h)),f=i*c-r*r,u[0]=r*a-s*c,u[1]=f,u[2]=s*r-a*i,h=f*f,Jn.dot(l,u)<0&&(h=-h),Jn.add(l,l,Jn.scale(u,u,h)),f=i*o-s*s,u[0]=s*a-r*o,u[1]=s*r-a*i,u[2]=f,h=f*f,Jn.dot(l,u)<0&&(h=-h),Jn.add(l,l,Jn.scale(u,u,h)),wV(t,l,t)};xS.exports=TV});var p0=E((R1e,yS)=>{var Vi=xe(),CV=(t,...e)=>{let n=e.length,i=Vi.create(),s=Vi.create(),r=o=>{let a=e[o],c=e[(o+1)%n],l=e[(o+2)%n];return Vi.subtract(i,c,a),Vi.subtract(s,l,a),Vi.cross(i,i,s),Vi.normalize(i,i),i};return t[0]=0,t[1]=0,t[2]=0,n===3?Vi.copy(t,r(0)):(e.forEach((o,a)=>{Vi.add(t,t,r(a))}),Vi.normalize(t,t)),t[3]=Vi.dot(t,e[0]),t};yS.exports=CV});var bS=E((D1e,_S)=>{var{EPS:m0}=nt(),Mn=xe(),RV=(t,e,n,i)=>{let s=Mn.subtract(Mn.create(),n,e),r=Mn.subtract(Mn.create(),i,e);Mn.length(s)<m0&&(s=Mn.orthogonal(s,r)),Mn.length(r)<m0&&(r=Mn.orthogonal(r,s));let o=Mn.cross(Mn.create(),s,r);Mn.length(o)<m0&&(r=Mn.orthogonal(r,s),o=Mn.cross(o,s,r)),o=Mn.normalize(o,o);let a=Mn.dot(o,e);return t[0]=o[0],t[1]=o[1],t[2]=o[2],t[3]=a,t};_S.exports=RV});var ES=E((P1e,SS)=>{var DV=xe(),PV=(t,e)=>{let n=e[0]*t[0]+e[1]*t[1]+e[2]*t[2]-t[3],i=e[0]-n*t[0],s=e[1]-n*t[1],r=e[2]-n*t[2];return DV.fromValues(i,s,r)};SS.exports=PV});var g0=E((I1e,MS)=>{var IV=xe(),LV=(t,e)=>IV.dot(t,e)-t[3];MS.exports=LV});var x0=E((L1e,AS)=>{var NV=t=>`(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;AS.exports=NV});var TS=E((N1e,wS)=>{var FV=yt(),An=xe(),OV=p0(),UV=u0(),BV=(t,e,n)=>{let i=FV.isMirroring(n),s=An.orthogonal(An.create(),e),r=An.cross(s,e,s),o=An.cross(An.create(),e,r),a=An.fromScalar(An.create(),e[3]);An.multiply(a,a,e);let c=An.add(An.create(),a,r),l=An.add(An.create(),a,o);return a=An.transform(a,a,n),c=An.transform(c,c,n),l=An.transform(l,l,n),OV(t,a,c,l),i&&UV(t,t),t};wS.exports=BV});var Ai=E((F1e,CS)=>{CS.exports={clone:a0(),copy:c0(),create:bc(),equals:l0(),flip:u0(),fromNormalAndPoint:f0(),fromValues:d0(),fromNoisyPoints:vS(),fromPoints:p0(),fromPointsRandom:bS(),projectionOfPoint:ES(),signedDistanceToPoint:g0(),toString:x0(),transform:TS()}});var PS=E((O1e,DS)=>{var RS=Ai(),kV=Or(),zV=t=>{let e=t.vertices.slice().reverse(),n=kV(e);return t.plane&&(n.plane=RS.flip(RS.create(),t.plane)),n};DS.exports=zV});var v0=E((U1e,IS)=>{var qV=t=>!!(t&&typeof t=="object"&&"vertices"in t&&Array.isArray(t.vertices));IS.exports=qV});var y0=E((B1e,NS)=>{var LS=Ai(),Ur=xe(),VV=t=>GV(t.vertices),GV=t=>{let e=t.length;if(e>2){let n=LS.fromPoints(LS.create(),...t),i=t[e-2],s=t[e-1];for(let r=0;r<e;r++){let o=t[r];if(!HV(i,s,o,n))return!1;i=s,s=o}}return!0},HV=(t,e,n,i)=>{let s=Ur.cross(Ur.create(),Ur.subtract(Ur.create(),e,t),Ur.subtract(Ur.create(),n,e));return Ur.dot(s,i)>=0};NS.exports=VV});var xh=E((k1e,OS)=>{var FS=Ai(),$V=t=>(t.plane||(t.plane=FS.fromPoints(FS.create(),...t.vertices)),t.plane);OS.exports=$V});var _0=E((z1e,US)=>{var WV=xh(),XV=t=>{let e=t.vertices.length;if(e<3)return 0;let n=t.vertices,i=WV(t),s=Math.abs(i[0]),r=Math.abs(i[1]),o=Math.abs(i[2]);if(s+r+o===0)return 0;let a=3;s>r&&s>o?a=1:r>o&&(a=2);let c=0,l=0,u=1,f=2;switch(a){case 1:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][1]*(n[f][2]-n[l][2]);c+=n[0][1]*(n[1][2]-n[e-1][2]),c/=2*i[0];break;case 2:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][2]*(n[f][0]-n[l][0]);c+=n[0][2]*(n[1][0]-n[e-1][0]),c/=2*i[1];break;case 3:default:for(u=1;u<e;u++)l=u-1,f=(u+1)%e,c+=n[u][0]*(n[f][1]-n[l][1]);c+=n[0][0]*(n[1][1]-n[e-1][1]),c/=2*i[2];break}return c};US.exports=XV});var kS=E((q1e,BS)=>{var Sc=xe(),YV=t=>{let e=t.vertices,n=e.length,i=n===0?Sc.create():Sc.clone(e[0]),s=Sc.clone(i);for(let r=1;r<n;r++)Sc.min(i,i,e[r]),Sc.max(s,s,e[r]);return[i,s]};BS.exports=YV});var qS=E((V1e,zS)=>{var ZV=(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3];zS.exports=ZV});var GS=E((G1e,VS)=>{var jV=(t,e)=>(t[0]=e,t[1]=e,t[2]=e,t[3]=e,t);VS.exports=jV});var $S=E((H1e,HS)=>{var JV=(t,e,n)=>{let[i,s,r,o]=e;return t[0]=n[0]*i+n[4]*s+n[8]*r+n[12]*o,t[1]=n[1]*i+n[5]*s+n[9]*r+n[13]*o,t[2]=n[2]*i+n[6]*s+n[10]*r+n[14]*o,t[3]=n[3]*i+n[7]*s+n[11]*r+n[15]*o,t};HS.exports=JV});var b0=E(($1e,WS)=>{WS.exports={clone:a0(),copy:c0(),create:bc(),dot:qS(),equals:l0(),fromScalar:GS(),fromValues:d0(),toString:x0(),transform:$S()}});var ZS=E((W1e,YS)=>{var KV=b0(),XS=new WeakMap,QV=t=>{let e=XS.get(t);if(e)return e;let n=t.vertices,i=KV.create();if(n.length===0)return i[0]=0,i[1]=0,i[2]=0,i[3]=0,i;let s=n[0],r=s,o=s,a=s,c=s,l=s;n.forEach(d=>{s[0]>d[0]&&(s=d),r[1]>d[1]&&(r=d),o[2]>d[2]&&(o=d),a[0]<d[0]&&(a=d),c[1]<d[1]&&(c=d),l[2]<d[2]&&(l=d)}),i[0]=(s[0]+a[0])*.5,i[1]=(r[1]+c[1])*.5,i[2]=(o[2]+l[2])*.5;let u=i[0]-a[0],f=i[1]-c[1],h=i[2]-l[2];return i[3]=Math.sqrt(u*u+f*f+h*h),XS.set(t,i),i};YS.exports=QV});var JS=E((X1e,jS)=>{var S0=xe(),e9=t=>{let e=0,n=t.vertices,i=S0.create();for(let s=0;s<n.length-2;s++)S0.cross(i,n[s+1],n[s+2]),e+=S0.dot(n[0],i);return e/=6,e};jS.exports=e9});var QS=E((Y1e,KS)=>{var t9=t=>t.vertices;KS.exports=t9});var tE=E((Z1e,eE)=>{var n9=xe(),i9=t=>{let e="poly3: vertices: [";return t.vertices.forEach(n=>{e+=`${n9.toString(n)}, `}),e+="]",e};eE.exports=i9});var sE=E((j1e,iE)=>{var s9=yt(),nE=xe(),r9=Or(),o9=(t,e)=>{let n=e.vertices.map(i=>nE.transform(nE.create(),i,t));return s9.isMirroring(t)&&n.reverse(),r9(n)};iE.exports=o9});var oE=E((J1e,rE)=>{var a9=g0(),{NEPS:c9}=nt(),l9=xe(),u9=v0(),h9=y0(),f9=_0(),d9=xh(),p9=t=>{if(!u9(t))throw new Error("invalid poly3 structure");if(t.vertices.length<3)throw new Error(`poly3 not enough vertices ${t.vertices.length}`);if(f9(t)<=0)throw new Error("poly3 area must be greater than zero");for(let e=0;e<t.vertices.length;e++)if(l9.equals(t.vertices[e],t.vertices[(e+1)%t.vertices.length]))throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);if(!h9(t))throw new Error("poly3 must be convex");if(t.vertices.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`poly3 invalid vertex ${e}`)}),t.vertices.length>3){let e=d9(t);t.vertices.forEach(n=>{let i=Math.abs(a9(e,n));if(i>c9)throw new Error(`poly3 must be coplanar: vertex ${n} distance ${i}`)})}};rE.exports=p9});var Je=E((K1e,aE)=>{aE.exports={clone:rS(),create:Or(),fromPoints:aS(),fromPointsAndPlane:lS(),invert:PS(),isA:v0(),isConvex:y0(),measureArea:_0(),measureBoundingBox:kS(),measureBoundingSphere:ZS(),measureSignedVolume:JS(),plane:xh(),toPoints:QS(),toString:tE(),transform:sE(),validate:oE()}});var lE=E((Q1e,cE)=>{var m9=o0(),g9=Oo(),x9=Je(),v9=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let n=m9(t,{skipTriangulation:!0}).map(i=>{let s=i.map(r=>t[r]);return x9.create(s)});return g9(n)};cE.exports=v9});var hE=E((exe,uE)=>{var y9=Je(),_9=Oo(),b9=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");let e=t.map((i,s)=>y9.create(i));return _9(e)};uE.exports=b9});var dE=E((txe,fE)=>{var S9=xe(),E9=yt(),M9=Je(),A9=Oo(),w9=t=>{if(t[0]!==1)throw new Error("invalid compact binary data");let e=A9();e.transforms=E9.clone(t.slice(1,17));let n=t[21],i=22,s=t.length-n*3;for(;s<t.length;){let r=t[i];i++;let o=[];for(let a=0;a<r;a++)o.push(S9.fromValues(t[s],t[s+1],t[s+2])),s+=3;e.polygons.push(M9.create(o))}return t[17]>=0&&(e.color=[t[17],t[18],t[19],t[20]]),e};fE.exports=w9});var gE=E((nxe,mE)=>{var pE=yt(),T9=Je(),C9=t=>(pE.isIdentity(t.transforms)||(t.polygons=t.polygons.map(e=>T9.transform(t.transforms,e)),t.transforms=pE.create()),t);mE.exports=C9});var Bo=E((ixe,xE)=>{var R9=gE(),D9=t=>R9(t).polygons;xE.exports=D9});var yE=E((sxe,vE)=>{var P9=Je(),I9=Oo(),L9=Bo(),N9=t=>{let n=L9(t).map(i=>P9.invert(i));return I9(n)};vE.exports=N9});var vh=E((rxe,_E)=>{var F9=t=>!!(t&&typeof t=="object"&&"polygons"in t&&"transforms"in t&&Array.isArray(t.polygons)&&"length"in t.transforms);_E.exports=F9});var SE=E((oxe,bE)=>{var{EPS:O9}=nt(),U9=xe(),B9=vh(),k9=Bo(),z9=Je(),q9=t=>{if(!B9(t))throw new Error("isConvex requires a geom3 geometry");let e=k9(t);if(e.length===0)return!0;let n=[],i=new Set;for(let s=0;s<e.length;s++){let r=e[s].vertices;for(let o=0;o<r.length;o++){let a=r[o],c=`${a[0]},${a[1]},${a[2]}`;i.has(c)||(i.add(c),n.push(a))}}for(let s=0;s<e.length;s++){let r=z9.plane(e[s]);for(let o=0;o<n.length;o++){let a=n[o];if(U9.dot(r,a)-r[3]>O9)return!1}}return!0};bE.exports=q9});var ME=E((axe,EE)=>{var V9=Je(),G9=Bo(),H9=t=>G9(t).map(i=>V9.toPoints(i));EE.exports=H9});var wE=E((cxe,AE)=>{var $9=Je(),W9=Bo(),X9=t=>{let e=W9(t),n="geom3 ("+e.length+` polygons):
`;return e.forEach(i=>{n+="  "+$9.toString(i)+`
`}),n};AE.exports=X9});var CE=E((lxe,TE)=>{var Y9=Je(),Z9=t=>{let e=t.polygons,n=t.transforms,i=e.length,s=e.reduce((l,u)=>l+u.vertices.length,0),r=[-1,-1,-1,-1];t.color&&(r=t.color);let o=new Float32Array(22+i+s*3);o[0]=1,o[1]=n[0],o[2]=n[1],o[3]=n[2],o[4]=n[3],o[5]=n[4],o[6]=n[5],o[7]=n[6],o[8]=n[7],o[9]=n[8],o[10]=n[9],o[11]=n[10],o[12]=n[11],o[13]=n[12],o[14]=n[13],o[15]=n[14],o[16]=n[15],o[17]=r[0],o[18]=r[1],o[19]=r[2],o[20]=r[3],o[21]=s;let a=22,c=a+i;return e.forEach(l=>{let u=Y9.toPoints(l);o[a]=u.length,a++;for(let f=0;f<u.length;f++){let h=u[f];o[c+0]=h[0],o[c+1]=h[1],o[c+2]=h[2],c+=3}}),o};TE.exports=Z9});var PE=E((uxe,DE)=>{var RE=yt(),j9=(t,e)=>{let n=RE.multiply(RE.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};DE.exports=j9});var LE=E((hxe,IE)=>{var J9=Je(),K9=vh(),Q9=t=>{if(!K9(t))throw new Error("invalid geom3 structure");if(t.polygons.forEach(J9.validate),eG(t),!t.transforms.every(Number.isFinite))throw new Error(`geom3 invalid transforms ${t.transforms}`)},eG=t=>{let e=new Map;t.polygons.forEach(({vertices:i})=>{i.forEach((s,r)=>{let o=`${s}`,a=`${i[(r+1)%i.length]}`,c=`${o}/${a}`,l=e.has(c)?e.get(c):0;e.set(c,l+1)})});let n=[];if(e.forEach((i,s)=>{let r=s.split("/").reverse().join("/"),o=e.get(r);i!==o&&n.push(s.replace("/"," -> "))}),n.length>0)throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`)};IE.exports=Q9});var Be=E((fxe,NE)=>{NE.exports={clone:Lb(),create:Oo(),fromPointsConvex:lE(),fromPoints:hE(),fromCompactBinary:dE(),invert:yE(),isA:vh(),isConvex:SE(),toPoints:ME(),toPolygons:Bo(),toString:wE(),toCompactBinary:CE(),transform:PE(),validate:LE()}});var yh=E((dxe,FE)=>{var tG=t=>Object.assign({},t);FE.exports=tG});var E0=E((pxe,UE)=>{var{EPS:OE}=nt(),nG=We(),iG=yh(),sG=t=>{if(t.isClosed)return t;let e=iG(t);if(e.isClosed=!0,e.points.length>1){let n=e.points,i=n[0],s=n[n.length-1];for(;nG.distance(i,s)<OE*OE&&(n.pop(),n.length!==1);)s=n[n.length-1]}return e};UE.exports=sG});var Ec=E((mxe,BE)=>{var rG=yt(),oG=t=>(t===void 0&&(t=[]),{points:t,isClosed:!1,transforms:rG.create()});BE.exports=oG});var _h=E((gxe,qE)=>{var{EPS:kE}=nt(),zE=We(),aG=E0(),cG=Ec(),lG=(t,e)=>{let n={closed:!1},{closed:i}=Object.assign({},n,t),s=cG();if(s.points=e.map(r=>zE.clone(r)),s.points.length>1){let r=s.points[0],o=s.points[s.points.length-1];zE.distance(r,o)<kE*kE&&(i=!0)}return i===!0&&(s=aG(s)),s};qE.exports=lG});var $E=E((xxe,HE)=>{var VE=yt(),GE=We(),uG=t=>(VE.isIdentity(t.transforms)||(t.points=t.points.map(e=>GE.transform(GE.create(),e,t.transforms)),t.transforms=VE.create()),t);HE.exports=uG});var Br=E((vxe,WE)=>{var hG=$E(),fG=t=>hG(t).points;WE.exports=fG});var YE=E((yxe,XE)=>{var{TAU:bh}=nt(),Zt=We(),dG=_h(),pG=Br(),mG=(t,e)=>{let n={radius:[0,0],xaxisrotation:0,clockwise:!1,large:!1,segments:16},{endpoint:i,radius:s,xaxisrotation:r,clockwise:o,large:a,segments:c}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("endpoint must be an array of X and Y values");if(i.length<2)throw new Error("endpoint must contain X and Y values");if(i=Zt.clone(i),!Array.isArray(s))throw new Error("radius must be an array of X and Y values");if(s.length<2)throw new Error("radius must contain X and Y values");if(c<4)throw new Error("segments must be four or more");let l=1e5;if(e.isClosed)throw new Error("the given path cannot be closed");let u=pG(e);if(u.length<1)throw new Error("the given path must contain one or more points (as the starting point for the arc)");let f=s[0],h=s[1],d=u[u.length-1];f=Math.round(f*l)/l,h=Math.round(h*l)/l,i=Zt.fromValues(Math.round(i[0]*l)/l,Math.round(i[1]*l)/l);let g=!o,p=[];if(f===0||h===0)p.push(i);else{f=Math.abs(f),h=Math.abs(h);let m=r,b=Math.cos(m),S=Math.sin(m),y=Zt.subtract(Zt.create(),d,i);Zt.scale(y,y,.5);let M=Math.round((b*y[0]+S*y[1])*l)/l,A=Math.round((-S*y[0]+b*y[1])*l)/l,w=Zt.fromValues(M,A),T=w[0]*w[0]/(f*f)+w[1]*w[1]/(h*h);if(T>1){let V=Math.sqrt(T);f*=V,h*=V,f=Math.round(f*l)/l,h=Math.round(h*l)/l}let v=Math.sqrt((f*f*h*h-f*f*w[1]*w[1]-h*h*w[0]*w[0])/(f*f*w[1]*w[1]+h*h*w[0]*w[0]));g===a&&(v=-v);let _=Zt.fromValues(f*w[1]/h,-h*w[0]/f);Zt.scale(_,_,v);let R=Zt.fromValues(b*_[0]-S*_[1],S*_[0]+b*_[1]);R=Zt.add(R,R,Zt.scale(Zt.create(),Zt.add(Zt.create(),d,i),.5));let D=Zt.fromValues((w[0]-_[0])/f,(w[1]-_[1])/h),L=Zt.fromValues((-w[0]-_[0])/f,(-w[1]-_[1])/h),N=Zt.angleRadians(D),F=Zt.angleRadians(L)-N;F=F%bh,!g&&F>0?F-=bh:g&&F<0&&(F+=bh);let W=Math.floor(c*(Math.abs(F)/bh));W<1&&(W=1);for(let V=1;V<W;V++){let K=N+V/W*F,ie=Math.cos(K),le=Math.sin(K),Ce=Zt.fromValues(b*f*ie-S*h*le,S*f*ie+b*h*le);Zt.add(Ce,Ce,R),p.push(Ce)}W&&p.push(t.endpoint)}return p=u.concat(p),dG({},p)};XE.exports=mG});var M0=E((_xe,ZE)=>{var gG=_h(),xG=Br(),{equals:vG}=We(),yG=(...t)=>{let e=!1,n=[];return t.forEach((i,s)=>{let r=xG(i).slice();if(n.length>0&&r.length>0&&vG(r[0],n[n.length-1])&&r.shift(),r.length>0&&e)throw new Error(`Cannot concatenate to a closed path; check the ${s}th path`);e=i.isClosed,n=n.concat(r)}),gG({closed:e},n)};ZE.exports=yG});var A0=E((bxe,jE)=>{var _G=M0(),bG=Ec(),SG=(t,e)=>_G(e,bG(t));jE.exports=SG});var KE=E((Sxe,JE)=>{var{TAU:EG}=nt(),Kn=We(),MG=We(),AG=A0(),wG=Br(),TG=(t,e)=>{let n={segments:16},{controlPoints:i,segments:s}=Object.assign({},n,t);if(!Array.isArray(i))throw new Error("controlPoints must be an array of one or more points");if(i.length<1)throw new Error("controlPoints must be an array of one or more points");if(s<4)throw new Error("segments must be four or more");if(e.isClosed)throw new Error("the given geometry cannot be closed");let r=wG(e);if(r.length<1)throw new Error("the given path must contain one or more points (as the starting point for the bezier curve)");if(i=i.slice(),i[0]===null){if(i.length<2)throw new Error("a null control point must be passed with one more control points");let A=r[r.length-2];if("lastBezierControlPoint"in e&&(A=e.lastBezierControlPoint),!Array.isArray(A))throw new Error("the given path must contain TWO or more points if given a null control point");let w=Kn.scale(Kn.create(),r[r.length-1],2);Kn.subtract(w,w,A),i[0]=w}i.unshift(r[r.length-1]);let a=i.length-1,c=[],l=1;for(let A=0;A<=a;++A)A>0&&(l*=A),c.push(l);let u=[];for(let A=0;A<=a;++A){let w=c[a]/(c[A]*c[a-A]);u.push(w)}let f=Kn.create(),h=Kn.create(),d=MG.create(),g=A=>{let w=1,T=Math.pow(1-A,a),v=A!==1?1/(1-A):1,_=Kn.create();for(let R=0;R<=a;++R){R===a&&(T=1);let D=u[R]*w*T,L=Kn.scale(f,i[R],D);Kn.add(_,_,L),w*=A,T*=v}return _},p=[],x=[],m=a+1;for(let A=0;A<m;++A){let w=A/(m-1),T=g(w);p.push(T),x.push(w)}let b=1,S=EG/s,y=Math.sin(S);for(;b<p.length-1;){let A=Kn.subtract(f,p[b],p[b-1]);Kn.normalize(A,A);let w=Kn.subtract(h,p[b+1],p[b]);Kn.normalize(w,w);let T=Kn.cross(d,A,w);if(Math.abs(T[2])>y){let v=x[b-1],_=x[b+1],R=v+(_-v)*1/3,D=v+(_-v)*2/3,L=g(R),N=g(D);p.splice(b,1,L,N),x.splice(b,1,R,D),b--,b<1&&(b=1)}else++b}p.shift();let M=AG(p,e);return M.lastBezierControlPoint=i[i.length-2],M};JE.exports=TG});var tM=E((Exe,eM)=>{var CG=We(),QE=Br(),RG=(t,e)=>{if(t.isClosed!==e.isClosed||t.points.length!==e.points.length)return!1;let n=QE(t),i=QE(e),s=n.length,r=0;do{let o=!1;for(let a=0;a<s;a++)if(!CG.equals(n[a],i[(a+r)%s])){o=!0;break}if(o===!1)return!0;if(!t.isClosed)return!1}while(++r<s);return!1};eM.exports=RG});var iM=E((Mxe,nM)=>{var DG=yt(),PG=We(),IG=Ec(),LG=t=>{if(t[0]!==2)throw new Error("invalid compact binary data");let e=IG();e.transforms=DG.clone(t.slice(1,17)),e.isClosed=!!t[17];for(let n=22;n<t.length;n+=2){let i=PG.fromValues(t[n],t[n+1]);e.points.push(i)}return t[18]>=0&&(e.color=[t[18],t[19],t[20],t[21]]),e};nM.exports=LG});var w0=E((Axe,sM)=>{var NG=t=>!!(t&&typeof t=="object"&&"points"in t&&"transforms"in t&&"isClosed"in t&&Array.isArray(t.points)&&"length"in t.transforms);sM.exports=NG});var oM=E((wxe,rM)=>{var FG=yh(),OG=t=>{let e=FG(t);return e.points=t.points.slice().reverse(),e};rM.exports=OG});var cM=E((Txe,aM)=>{var UG=We(),BG=Br(),kG=t=>{let e=BG(t),n="path ("+e.length+" points, "+t.isClosed+`):
[
`;return e.forEach(i=>{n+="  "+UG.toString(i)+`,
`}),n+=`]
`,n};aM.exports=kG});var uM=E((Cxe,lM)=>{var zG=t=>{let e=t.points,n=t.transforms,i=[-1,-1,-1,-1];t.color&&(i=t.color);let s=new Float32Array(22+e.length*2);s[0]=2,s[1]=n[0],s[2]=n[1],s[3]=n[2],s[4]=n[3],s[5]=n[4],s[6]=n[5],s[7]=n[6],s[8]=n[7],s[9]=n[8],s[10]=n[9],s[11]=n[10],s[12]=n[11],s[13]=n[12],s[14]=n[13],s[15]=n[14],s[16]=n[15],s[17]=t.isClosed?1:0,s[18]=i[0],s[19]=i[1],s[20]=i[2],s[21]=i[3];for(let r=0;r<e.length;r++){let o=r*2+22,a=e[r];s[o]=a[0],s[o+1]=a[1]}return s};lM.exports=zG});var dM=E((Rxe,fM)=>{var hM=yt(),qG=(t,e)=>{let n=hM.multiply(hM.create(),t,e.transforms);return Object.assign({},e,{transforms:n})};fM.exports=qG});var mM=E((Dxe,pM)=>{var VG=We(),GG=w0(),HG=t=>{if(!GG(t))throw new Error("invalid path2 structure");if(t.points.length>1){for(let e=0;e<t.points.length;e++)if(VG.equals(t.points[e],t.points[(e+1)%t.points.length]))throw new Error(`path2 duplicate points ${t.points[e]}`)}if(t.points.forEach(e=>{if(!e.every(Number.isFinite))throw new Error(`path2 invalid point ${e}`)}),!t.transforms.every(Number.isFinite))throw new Error(`path2 invalid transforms ${t.transforms}`)};pM.exports=HG});var mt=E((Pxe,gM)=>{gM.exports={appendArc:YE(),appendBezier:KE(),appendPoints:A0(),clone:yh(),close:E0(),concat:M0(),create:Ec(),equals:tM(),fromPoints:_h(),fromCompactBinary:iM(),isA:w0(),reverse:oM(),toPoints:Br(),toString:cM(),toCompactBinary:uM(),transform:dM(),validate:mM()}});var SM=E((Ixe,bM)=>{var $G=Ne(),xM=Ge(),vM=Be(),yM=mt(),_M=Je(),WG=(t,e)=>{let n=xM.clone(e);return n.color=t,n},XG=(t,e)=>{let n=vM.clone(e);return n.color=t,n},YG=(t,e)=>{let n=yM.clone(e);return n.color=t,n},ZG=(t,e)=>{let n=_M.clone(e);return n.color=t,n},jG=(t,...e)=>{if(!Array.isArray(t))throw new Error("color must be an array");if(t.length<3)throw new Error("color must contain R, G and B values");if(t.length===3&&(t=[t[0],t[1],t[2],1]),e=$G(e),e.length===0)throw new Error("wrong number of arguments");let n=e.map(i=>xM.isA(i)?WG(t,i):vM.isA(i)?XG(t,i):yM.isA(i)?YG(t,i):_M.isA(i)?ZG(t,i):(i.color=t,i));return n.length===1?n[0]:n};bM.exports=jG});var T0=E((Lxe,EM)=>{var JG={black:[0,0,0],silver:[.7529411764705882,.7529411764705882,.7529411764705882],gray:[.5019607843137255,.5019607843137255,.5019607843137255],white:[1,1,1],maroon:[.5019607843137255,0,0],red:[1,0,0],purple:[.5019607843137255,0,.5019607843137255],fuchsia:[1,0,1],green:[0,.5019607843137255,0],lime:[0,1,0],olive:[.5019607843137255,.5019607843137255,0],yellow:[1,1,0],navy:[0,0,.5019607843137255],blue:[0,0,1],teal:[0,.5019607843137255,.5019607843137255],aqua:[0,1,1],aliceblue:[.9411764705882353,.9725490196078431,1],antiquewhite:[.9803921568627451,.9215686274509803,.8431372549019608],aquamarine:[.4980392156862745,1,.8313725490196079],azure:[.9411764705882353,1,1],beige:[.9607843137254902,.9607843137254902,.8627450980392157],bisque:[1,.8941176470588236,.7686274509803922],blanchedalmond:[1,.9215686274509803,.803921568627451],blueviolet:[.5411764705882353,.16862745098039217,.8862745098039215],brown:[.6470588235294118,.16470588235294117,.16470588235294117],burlywood:[.8705882352941177,.7215686274509804,.5294117647058824],cadetblue:[.37254901960784315,.6196078431372549,.6274509803921569],chartreuse:[.4980392156862745,1,0],chocolate:[.8235294117647058,.4117647058823529,.11764705882352941],coral:[1,.4980392156862745,.3137254901960784],cornflowerblue:[.39215686274509803,.5843137254901961,.9294117647058824],cornsilk:[1,.9725490196078431,.8627450980392157],crimson:[.8627450980392157,.0784313725490196,.23529411764705882],cyan:[0,1,1],darkblue:[0,0,.5450980392156862],darkcyan:[0,.5450980392156862,.5450980392156862],darkgoldenrod:[.7215686274509804,.5254901960784314,.043137254901960784],darkgray:[.6627450980392157,.6627450980392157,.6627450980392157],darkgreen:[0,.39215686274509803,0],darkgrey:[.6627450980392157,.6627450980392157,.6627450980392157],darkkhaki:[.7411764705882353,.7176470588235294,.4196078431372549],darkmagenta:[.5450980392156862,0,.5450980392156862],darkolivegreen:[.3333333333333333,.4196078431372549,.1843137254901961],darkorange:[1,.5490196078431373,0],darkorchid:[.6,.19607843137254902,.8],darkred:[.5450980392156862,0,0],darksalmon:[.9137254901960784,.5882352941176471,.47843137254901963],darkseagreen:[.5607843137254902,.7372549019607844,.5607843137254902],darkslateblue:[.2823529411764706,.23921568627450981,.5450980392156862],darkslategray:[.1843137254901961,.30980392156862746,.30980392156862746],darkslategrey:[.1843137254901961,.30980392156862746,.30980392156862746],darkturquoise:[0,.807843137254902,.8196078431372549],darkviolet:[.5803921568627451,0,.8274509803921568],deeppink:[1,.0784313725490196,.5764705882352941],deepskyblue:[0,.7490196078431373,1],dimgray:[.4117647058823529,.4117647058823529,.4117647058823529],dimgrey:[.4117647058823529,.4117647058823529,.4117647058823529],dodgerblue:[.11764705882352941,.5647058823529412,1],firebrick:[.6980392156862745,.13333333333333333,.13333333333333333],floralwhite:[1,.9803921568627451,.9411764705882353],forestgreen:[.13333333333333333,.5450980392156862,.13333333333333333],gainsboro:[.8627450980392157,.8627450980392157,.8627450980392157],ghostwhite:[.9725490196078431,.9725490196078431,1],gold:[1,.8431372549019608,0],goldenrod:[.8549019607843137,.6470588235294118,.12549019607843137],greenyellow:[.6784313725490196,1,.1843137254901961],grey:[.5019607843137255,.5019607843137255,.5019607843137255],honeydew:[.9411764705882353,1,.9411764705882353],hotpink:[1,.4117647058823529,.7058823529411765],indianred:[.803921568627451,.3607843137254902,.3607843137254902],indigo:[.29411764705882354,0,.5098039215686274],ivory:[1,1,.9411764705882353],khaki:[.9411764705882353,.9019607843137255,.5490196078431373],lavender:[.9019607843137255,.9019607843137255,.9803921568627451],lavenderblush:[1,.9411764705882353,.9607843137254902],lawngreen:[.48627450980392156,.9882352941176471,0],lemonchiffon:[1,.9803921568627451,.803921568627451],lightblue:[.6784313725490196,.8470588235294118,.9019607843137255],lightcoral:[.9411764705882353,.5019607843137255,.5019607843137255],lightcyan:[.8784313725490196,1,1],lightgoldenrodyellow:[.9803921568627451,.9803921568627451,.8235294117647058],lightgray:[.8274509803921568,.8274509803921568,.8274509803921568],lightgreen:[.5647058823529412,.9333333333333333,.5647058823529412],lightgrey:[.8274509803921568,.8274509803921568,.8274509803921568],lightpink:[1,.7137254901960784,.7568627450980392],lightsalmon:[1,.6274509803921569,.47843137254901963],lightseagreen:[.12549019607843137,.6980392156862745,.6666666666666666],lightskyblue:[.5294117647058824,.807843137254902,.9803921568627451],lightslategray:[.4666666666666667,.5333333333333333,.6],lightslategrey:[.4666666666666667,.5333333333333333,.6],lightsteelblue:[.6901960784313725,.7686274509803922,.8705882352941177],lightyellow:[1,1,.8784313725490196],limegreen:[.19607843137254902,.803921568627451,.19607843137254902],linen:[.9803921568627451,.9411764705882353,.9019607843137255],magenta:[1,0,1],mediumaquamarine:[.4,.803921568627451,.6666666666666666],mediumblue:[0,0,.803921568627451],mediumorchid:[.7294117647058823,.3333333333333333,.8274509803921568],mediumpurple:[.5764705882352941,.4392156862745098,.8588235294117647],mediumseagreen:[.23529411764705882,.7019607843137254,.44313725490196076],mediumslateblue:[.4823529411764706,.40784313725490196,.9333333333333333],mediumspringgreen:[0,.9803921568627451,.6039215686274509],mediumturquoise:[.2823529411764706,.8196078431372549,.8],mediumvioletred:[.7803921568627451,.08235294117647059,.5215686274509804],midnightblue:[.09803921568627451,.09803921568627451,.4392156862745098],mintcream:[.9607843137254902,1,.9803921568627451],mistyrose:[1,.8941176470588236,.8823529411764706],moccasin:[1,.8941176470588236,.7098039215686275],navajowhite:[1,.8705882352941177,.6784313725490196],oldlace:[.9921568627450981,.9607843137254902,.9019607843137255],olivedrab:[.4196078431372549,.5568627450980392,.13725490196078433],orange:[1,.6470588235294118,0],orangered:[1,.27058823529411763,0],orchid:[.8549019607843137,.4392156862745098,.8392156862745098],palegoldenrod:[.9333333333333333,.9098039215686274,.6666666666666666],palegreen:[.596078431372549,.984313725490196,.596078431372549],paleturquoise:[.6862745098039216,.9333333333333333,.9333333333333333],palevioletred:[.8588235294117647,.4392156862745098,.5764705882352941],papayawhip:[1,.9372549019607843,.8352941176470589],peachpuff:[1,.8549019607843137,.7254901960784313],peru:[.803921568627451,.5215686274509804,.24705882352941178],pink:[1,.7529411764705882,.796078431372549],plum:[.8666666666666667,.6274509803921569,.8666666666666667],powderblue:[.6901960784313725,.8784313725490196,.9019607843137255],rosybrown:[.7372549019607844,.5607843137254902,.5607843137254902],royalblue:[.2549019607843137,.4117647058823529,.8823529411764706],saddlebrown:[.5450980392156862,.27058823529411763,.07450980392156863],salmon:[.9803921568627451,.5019607843137255,.4470588235294118],sandybrown:[.9568627450980393,.6431372549019608,.3764705882352941],seagreen:[.1803921568627451,.5450980392156862,.3411764705882353],seashell:[1,.9607843137254902,.9333333333333333],sienna:[.6274509803921569,.3215686274509804,.17647058823529413],skyblue:[.5294117647058824,.807843137254902,.9215686274509803],slateblue:[.41568627450980394,.35294117647058826,.803921568627451],slategray:[.4392156862745098,.5019607843137255,.5647058823529412],slategrey:[.4392156862745098,.5019607843137255,.5647058823529412],snow:[1,.9803921568627451,.9803921568627451],springgreen:[0,1,.4980392156862745],steelblue:[.27450980392156865,.5098039215686274,.7058823529411765],tan:[.8235294117647058,.7058823529411765,.5490196078431373],thistle:[.8470588235294118,.7490196078431373,.8470588235294118],tomato:[1,.38823529411764707,.2784313725490196],turquoise:[.25098039215686274,.8784313725490196,.8156862745098039],violet:[.9333333333333333,.5098039215686274,.9333333333333333],wheat:[.9607843137254902,.8705882352941177,.7019607843137254],whitesmoke:[.9607843137254902,.9607843137254902,.9607843137254902],yellowgreen:[.6039215686274509,.803921568627451,.19607843137254902]};EM.exports=JG});var AM=E((Nxe,MM)=>{var KG=T0(),QG=t=>KG[t.toLowerCase()];MM.exports=QG});var TM=E((Fxe,wM)=>{var eH=t=>{if(t=t.replace("#",""),t.length<6)throw new Error("the given notation must contain 3 or more hex values");let e=parseInt(t.substring(0,2),16)/255,n=parseInt(t.substring(2,4),16)/255,i=parseInt(t.substring(4,6),16)/255;if(t.length>=8){let s=parseInt(t.substring(6,8),16)/255;return[e,n,i,s]}return[e,n,i]};wM.exports=eH});var C0=E((Oxe,CM)=>{var tH=(t,e,n)=>(n<0&&(n+=1),n>1&&(n-=1),n<.16666666666666666?t+(e-t)*6*n:n<.5?e:n<.6666666666666666?t+(e-t)*(.6666666666666666-n)*6:t);CM.exports=tH});var DM=E((Uxe,RM)=>{var nH=Ne(),R0=C0(),iH=(...t)=>{if(t=nH(t),t.length<3)throw new Error("values must contain H, S and L values");let e=t[0],n=t[1],i=t[2],s=i,r=i,o=i;if(n!==0){let a=i<.5?i*(1+n):i+n-i*n,c=2*i-a;s=R0(c,a,e+1/3),r=R0(c,a,e),o=R0(c,a,e-1/3)}if(t.length>3){let a=t[3];return[s,r,o,a]}return[s,r,o]};RM.exports=iH});var IM=E((Bxe,PM)=>{var sH=Ne(),rH=(...t)=>{if(t=sH(t),t.length<3)throw new Error("values must contain H, S and V values");let e=t[0],n=t[1],i=t[2],s=0,r=0,o=0,a=Math.floor(e*6),c=e*6-a,l=i*(1-n),u=i*(1-c*n),f=i*(1-(1-c)*n);switch(a%6){case 0:s=i,r=f,o=l;break;case 1:s=u,r=i,o=l;break;case 2:s=l,r=i,o=f;break;case 3:s=l,r=u,o=i;break;case 4:s=f,r=l,o=i;break;case 5:s=i,r=l,o=u;break}if(t.length>3){let h=t[3];return[s,r,o,h]}return[s,r,o]};PM.exports=rH});var NM=E((kxe,LM)=>{var oH=Ne(),aH=(...t)=>{if(t=oH(t),t.length<3)throw new Error("values must contain R, G and B values");let e=t[0]*255,n=t[1]*255,i=t[2]*255,s=`#${Number(16777216+e*65536+n*256+i).toString(16).substring(1,7)}`;return t.length>3&&(s=s+Number(t[3]*255).toString(16)),s};LM.exports=aH});var OM=E((zxe,FM)=>{var cH=Ne(),lH=(...t)=>{if(t=cH(t),t.length<3)throw new Error("values must contain R, G and B values");let e=t[0],n=t[1],i=t[2],s=Math.max(e,n,i),r=Math.min(e,n,i),o,a,c=(s+r)/2;if(s===r)o=a=0;else{let l=s-r;switch(a=c>.5?l/(2-s-r):l/(s+r),s){case e:o=(n-i)/l+(n<i?6:0);break;case n:o=(i-e)/l+2;break;case i:o=(e-n)/l+4;break}o/=6}if(t.length>3){let l=t[3];return[o,a,c,l]}return[o,a,c]};FM.exports=lH});var BM=E((qxe,UM)=>{var uH=Ne(),hH=(...t)=>{if(t=uH(t),t.length<3)throw new Error("values must contain R, G and B values");let e=t[0],n=t[1],i=t[2],s=Math.max(e,n,i),r=Math.min(e,n,i),o,a=s,c=s-r,l=s===0?0:c/s;if(s===r)o=0;else{switch(s){case e:o=(n-i)/c+(n<i?6:0);break;case n:o=(i-e)/c+2;break;case i:o=(e-n)/c+4;break}o/=6}if(t.length>3){let u=t[3];return[o,l,a,u]}return[o,l,a]};UM.exports=hH});var zM=E((Vxe,kM)=>{kM.exports={colorize:SM(),colorNameToRgb:AM(),cssColors:T0(),hexToRgb:TM(),hslToRgb:DM(),hsvToRgb:IM(),hueToColorComponent:C0(),rgbToHex:NM(),rgbToHsl:OM(),rgbToHsv:BM()}});var GM=E((Gxe,VM)=>{var fH=t=>{if(!Array.isArray(t))throw new Error("Bezier points must be a valid array/");if(t.length<2)throw new Error("Bezier points must contain at least 2 values.");let e=dH(t);return{points:t,pointType:e,dimensions:e==="float_single"?0:t[0].length,permutations:qM(t.length-1),tangentPermutations:qM(t.length-2)}},dH=function(t){let e=null;return t.forEach(n=>{let i="";if(Number.isFinite(n))i="float_single";else if(Array.isArray(n))n.forEach(s=>{if(!Number.isFinite(s))throw new Error("Bezier point values must all be numbers.")}),i="float_"+n.length;else throw new Error("Bezier points must all be numbers or arrays of number.");if(e==null)e=i;else if(e!==i)throw new Error("Bezier points must be either all numbers or all arrays of numbers of the same size.")}),e},qM=function(t){let e=[];for(let n=0;n<=t;n++)e.push(D0(t)/(D0(n)*D0(t-n)));return e},D0=function(t){let e=1;for(let n=2;n<=t;n++)e*=n;return e};VM.exports=fH});var P0=E((Hxe,$M)=>{var pH=(t,e)=>{if(t<0||t>1)throw new Error("Bezier valueAt() input must be between 0 and 1");if(e.pointType==="float_single")return HM(e,e.points,t);{let n=[];for(let i=0;i<e.dimensions;i++){let s=[];for(let r=0;r<e.points.length;r++)s.push(e.points[r][i]);n.push(HM(e,s,t))}return n}},HM=function(t,e,n){let i=e.length-1,s=0;for(let r=0;r<=i;r++)s+=t.permutations[r]*Math.pow(1-n,i-r)*Math.pow(n,r)*e[r];return s};$M.exports=pH});var YM=E(($xe,XM)=>{var mH=(t,e)=>{if(t<0||t>1)throw new Error("Bezier tangentAt() input must be between 0 and 1");if(e.pointType==="float_single")return WM(e,e.points,t);{let n=[];for(let i=0;i<e.dimensions;i++){let s=[];for(let r=0;r<e.points.length;r++)s.push(e.points[r][i]);n.push(WM(e,s,t))}return n}},WM=function(t,e,n){let i=e.length-1,s=0;for(let r=0;r<i;r++){let o=i*(e[r+1]-e[r]);s+=t.tangentPermutations[r]*Math.pow(1-n,i-1-r)*Math.pow(n,r)*o}return s};XM.exports=mH});var Sh=E((Wxe,jM)=>{var ZM=P0(),gH=(t,e)=>{let n=0,i=[0],s=ZM(0,e);for(let r=1;r<=t;r++){let o=ZM(r/t,e);n+=xH(o,s),i.push(n),s=o}return i},xH=(t,e)=>{if(Number.isFinite(t)&&Number.isFinite(e))return Math.abs(t-e);if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)throw new Error("The operands must have the same number of dimensions.");let n=0;for(let i=0;i<t.length;i++)n+=(e[i]-t[i])*(e[i]-t[i]);return Math.sqrt(n)}else throw new Error("The operands must be of the same type, either number or array.")};jM.exports=gH});var KM=E((Xxe,JM)=>{var vH=Sh(),yH=(t,e)=>vH(t,e)[t];JM.exports=yH});var eA=E((Yxe,QM)=>{var _H=Sh(),bH=(t,e)=>{let n={distance:0,segments:100},{distance:i,segments:s}=Object.assign({},n,t),r=_H(s,e),o=0,a=s;for(;o<=a;){let d=Math.floor(o+(a-o)/2),g=r[d]-i;if(g<0)o=d+1;else if(g>0)a=d-1;else{a=d;break}}let c=a;if(r[c]===i)return c/s;let l=r[c],f=r[c+1]-l,h=(i-l)/f;return(c+h)/s};QM.exports=bH});var nA=E((Zxe,tA)=>{tA.exports={create:GM(),valueAt:P0(),tangentAt:YM(),lengths:Sh(),length:KM(),arcLengthToT:eA()}});var sA=E((jxe,iA)=>{iA.exports={bezier:nA()}});var Mc=E((Jxe,rA)=>{var SH=t=>{let e=0;for(let n=0;n<t.length;n++){let i=(n+1)%t.length;e+=t[n][0]*t[i][1],e-=t[i][0]*t[n][1]}return e/2};rA.exports=SH});var I0=E((Kxe,oA)=>{var EH=Mc(),MH=t=>EH(t.vertices);oA.exports=MH});var L0=E((Qxe,aA)=>{var AH=t=>((t===void 0||t.length<3)&&(t=[]),{vertices:t});aA.exports=AH});var N0=E((eve,cA)=>{var wH=L0(),TH=t=>{let e=t.vertices.slice().reverse();return wH(e)};cA.exports=TH});var uA=E((tve,lA)=>{var CH=I0(),RH=N0(),DH=(t,e)=>{if(t.length===0)return 0;let n=e.vertices;return n.length<3?0:(CH(e)<0&&(e=RH(e)),t.reduce((s,r)=>s+PH(r,n),0)===t.length?1:0)},PH=(t,e)=>{let n=e.length,i=t[0],s=t[1],r=e[n-1],o=e[0],a=r[1]>s,c=0,l=0;for(let u=n+1;--u;){let f=o[1]>s;if(a!==f){let h=r[0]>i,d=o[0]>i;(h&&d||o[0]-(o[1]-s)*(r[0]-o[0])/(r[1]-o[1])>=i)&&(c=!c)}a=f,r=o,o=e[++l]}return c};lA.exports=DH});var Eh=E((nve,hA)=>{hA.exports={arePointsInside:uA(),create:L0(),flip:N0(),measureArea:I0()}});var Mh=E((ive,fA)=>{fA.exports={geom2:Ge(),geom3:Be(),path2:mt(),poly2:Eh(),poly3:Je()}});var Ah=E((sve,dA)=>{var IH=()=>[0,1,0];dA.exports=IH});var mA=E((rve,pA)=>{var LH=Ah(),NH=t=>{let e=LH();return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};pA.exports=NH});var wh=E((ove,gA)=>{var F0=We(),FH=t=>{let e=F0.normal(F0.create(),t);return F0.negate(e,e),e};gA.exports=FH});var Ac=E((ave,vA)=>{var xA=We(),OH=t=>xA.scale(xA.create(),t,t[2]);vA.exports=OH});var _A=E((cve,yA)=>{var wc=We(),UH=wh(),BH=Ac(),kH=(t,e)=>{let n=BH(t),i=UH(t),s=wc.subtract(wc.create(),e,n),r=wc.dot(s,i);return wc.scale(s,i,r),wc.add(s,s,n),s};yA.exports=kH});var O0=E((lve,bA)=>{var zH=(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t);bA.exports=zH});var EA=E((uve,SA)=>{var qH=We(),VH=(t,e)=>{let n=qH.dot(e,t);return n=Math.abs(n-t[2]),n};SA.exports=VH});var AA=E((hve,MA)=>{var GH=(t,e)=>t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2];MA.exports=GH});var U0=E((fve,wA)=>{var Tc=We(),HH=(t,e,n)=>{let i=Tc.subtract(Tc.create(),n,e);Tc.normal(i,i),Tc.normalize(i,i);let s=Tc.dot(e,i);return t[0]=i[0],t[1]=i[1],t[2]=s,t};wA.exports=HH});var B0=E((dve,TA)=>{var $H=Ah(),WH=(t,e,n)=>{let i=$H();return i[0]=t,i[1]=e,i[2]=n,i};TA.exports=WH});var Th=E((pve,CA)=>{var{NEPS:k0}=nt(),XH=(t,e)=>Math.abs(t[0]-e[0])<=k0&&Math.abs(t[1]-e[1])<=k0&&Math.abs(t[2]-e[2])<=k0;CA.exports=XH});var z0=E((mve,RA)=>{var YH=(t,e,n)=>{let i=n-t[1],s=e[1]-t[1];s<0&&(i=-i,s=-s);let r;return i<=0?r=0:i>=s?r=1:s<1e-10?r=.5:r=i/s,t[0]+r*(e[0]-t[0])};RA.exports=YH});var q0=E((gve,DA)=>{var ZH=(t,e,n,i)=>{if(t[0]===e[0]&&t[1]===e[1]||n[0]===i[0]&&n[1]===i[1])return;let s=(i[1]-n[1])*(e[0]-t[0])-(i[0]-n[0])*(e[1]-t[1]);if(Math.abs(s)<Number.MIN_VALUE)return;let r=((i[0]-n[0])*(t[1]-n[1])-(i[1]-n[1])*(t[0]-n[0]))/s,o=((e[0]-t[0])*(t[1]-n[1])-(e[1]-t[1])*(t[0]-n[0]))/s;if(r<0||r>1||o<0||o>1)return;let a=t[0]+r*(e[0]-t[0]),c=t[1]+r*(e[1]-t[1]);return[a,c]};DA.exports=ZH});var IA=E((xve,PA)=>{var jH=(t,e,n,i,s,r)=>{let a=1/(t*i-e*n),c=s*i-e*r,l=-s*n+t*r;return c*=a,l*=a,[c,l]};PA.exports=jH});var ko=E((vve,LA)=>{LA.exports={aboutEqualNormals:Th(),area:Mc(),cos:an().cos,interpolateBetween2DPointsForY:z0(),intersect:q0(),sin:an().sin,solve2Linear:IA()}});var FA=E((yve,NA)=>{var JH=We(),{solve2Linear:KH}=ko(),QH=(t,e)=>{let n=KH(t[0],t[1],e[0],e[1],t[2],e[2]);return JH.clone(n)};NA.exports=QH});var BA=E((_ve,UA)=>{var OA=We(),e$=O0(),t$=B0(),n$=(t,e)=>{let n=OA.negate(OA.create(),e),i=-e[2];return e$(t,t$(n[0],n[1],i))};UA.exports=n$});var zA=E((bve,kA)=>{var i$=t=>`line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;kA.exports=i$});var GA=E((Sve,VA)=>{var qA=We(),s$=U0(),r$=Ac(),o$=wh(),a$=(t,e,n)=>{let i=r$(e),s=o$(e);return qA.transform(i,i,n),qA.transform(s,s,n),s$(t,i,s)};VA.exports=a$});var $A=E((Eve,HA)=>{var c$=Ac(),l$=(t,e)=>{let n=(t[2]-t[1]*e)/t[0];return Number.isNaN(n)&&(n=c$(t)[0]),n};HA.exports=l$});var Ch=E((Mve,WA)=>{WA.exports={clone:mA(),closestPoint:_A(),copy:O0(),create:Ah(),direction:wh(),distanceToPoint:EA(),equals:AA(),fromPoints:U0(),fromValues:B0(),intersectPointOfLines:FA(),origin:Ac(),reverse:BA(),toString:zA(),transform:GA(),xAtY:$A()}});var V0=E((Ave,YA)=>{var XA=xe(),u$=()=>[XA.fromValues(0,0,0),XA.fromValues(0,0,1)];YA.exports=u$});var JA=E((wve,jA)=>{var ZA=xe(),h$=V0(),f$=t=>{let e=h$();return ZA.copy(e[0],t[0]),ZA.copy(e[1],t[1]),e};jA.exports=f$});var G0=E((Tve,KA)=>{var kr=xe(),d$=(t,e)=>{let n=t[0],i=t[1],s=kr.dot(kr.subtract(kr.create(),e,n),i),r=kr.dot(i,i),o=s/r,a=kr.scale(kr.create(),i,o);return kr.add(a,a,n),a};KA.exports=d$});var tw=E((Cve,ew)=>{var QA=xe(),p$=(t,e)=>(QA.copy(t[0],e[0]),QA.copy(t[1],e[1]),t);ew.exports=p$});var iw=E((Rve,nw)=>{var m$=t=>t[1];nw.exports=m$});var rw=E((Dve,sw)=>{var H0=xe(),g$=G0(),x$=(t,e)=>{let n=g$(t,e),i=H0.subtract(H0.create(),e,n);return H0.length(i)};sw.exports=x$});var cw=E((Pve,aw)=>{var ow=xe(),v$=(t,e)=>!(!ow.equals(t[1],e[1])||!ow.equals(t[0],e[0]));aw.exports=v$});var zo=E((Ive,lw)=>{var Rh=xe(),y$=(t,e,n)=>{let i=Rh.normalize(Rh.create(),n);return Rh.copy(t[0],e),Rh.copy(t[1],i),t};lw.exports=y$});var hw=E((Lve,uw)=>{var zr=xe(),{solve2Linear:$0}=ko(),{EPS:_$}=nt(),b$=zo(),S$=(t,e,n)=>{let i=zr.cross(zr.create(),e,n),s=zr.length(i);if(s<_$)throw new Error("parallel planes do not intersect");s=1/s,i=zr.scale(i,i,s);let r=Math.abs(i[0]),o=Math.abs(i[1]),a=Math.abs(i[2]),c,l;return r>=o&&r>=a?(l=$0(e[1],e[2],n[1],n[2],e[3],n[3]),c=zr.fromValues(0,l[0],l[1])):o>=r&&o>=a?(l=$0(e[0],e[2],n[0],n[2],e[3],n[3]),c=zr.fromValues(l[0],0,l[1])):(l=$0(e[0],e[1],n[0],n[1],e[3],n[3]),c=zr.fromValues(l[0],l[1],0)),b$(t,c,i)};uw.exports=S$});var pw=E((Nve,dw)=>{var fw=xe(),E$=zo(),M$=(t,e,n)=>{let i=fw.subtract(fw.create(),n,e);return E$(t,e,i)};dw.exports=M$});var gw=E((Fve,mw)=>{var qo=xe(),A$=(t,e)=>{let n=e,i=e[3],s=t[0],r=t[1],o=(i-qo.dot(n,s))/qo.dot(n,r);return qo.add(qo.create(),s,qo.scale(qo.create(),r,o))};mw.exports=A$});var vw=E((Ove,xw)=>{var w$=t=>t[0];xw.exports=w$});var _w=E((Uve,yw)=>{var W0=xe(),T$=zo(),C$=(t,e)=>{let n=W0.clone(e[0]),i=W0.negate(W0.create(),e[1]);return T$(t,n,i)};yw.exports=C$});var Sw=E((Bve,bw)=>{var R$=t=>{let e=t[0],n=t[1];return`line3: point: (${e[0].toFixed(7)}, ${e[1].toFixed(7)}, ${e[2].toFixed(7)}) direction: (${n[0].toFixed(7)}, ${n[1].toFixed(7)}, ${n[2].toFixed(7)})`};bw.exports=R$});var Mw=E((kve,Ew)=>{var Vo=xe(),D$=zo(),P$=(t,e,n)=>{let i=e[0],s=e[1],r=Vo.add(Vo.create(),i,s),o=Vo.transform(Vo.create(),i,n),a=Vo.transform(r,r,n),c=Vo.subtract(a,a,o);return D$(t,o,c)};Ew.exports=P$});var ww=E((zve,Aw)=>{Aw.exports={clone:JA(),closestPoint:G0(),copy:tw(),create:V0(),direction:iw(),distanceToPoint:rw(),equals:cw(),fromPlanes:hw(),fromPointAndDirection:zo(),fromPoints:pw(),intersectPointOfLineAndPlane:gw(),origin:vw(),reverse:_w(),toString:Sw(),transform:Mw()}});var Cw=E((qve,Tw)=>{Tw.exports={constants:nt(),line2:Ch(),line3:ww(),mat4:yt(),plane:Ai(),utils:ko(),vec2:We(),vec3:xe(),vec4:b0()}});var X0=E((Vve,Pw)=>{var I$=Ne(),Rw=Ge(),Dw=Be(),L$=mt(),N$=Je(),Dh=new WeakMap,F$=()=>0,O$=t=>{let e=Dh.get(t);return e||(e=Rw.toSides(t).reduce((i,s)=>i+(s[0][0]*s[1][1]-s[0][1]*s[1][0]),0),e*=.5,Dh.set(t,e),e)},U$=t=>{let e=Dh.get(t);return e||(e=Dw.toPolygons(t).reduce((i,s)=>i+N$.measureArea(s),0),Dh.set(t,e),e)},B$=(...t)=>{if(t=I$(t),t.length===0)throw new Error("wrong number of arguments");let e=t.map(n=>L$.isA(n)?F$(n):Rw.isA(n)?O$(n):Dw.isA(n)?U$(n):0);return e.length===1?e[0]:e};Pw.exports=B$});var Lw=E((Gve,Iw)=>{var k$=Ne(),z$=X0(),q$=(...t)=>{if(t=k$(t),t.length===0)throw new Error("measureAggregateArea: no geometries supplied");let e=z$(t);return t.length===1?e:e.reduce((i,s)=>i+s,0)};Iw.exports=q$});var Ys=E((Hve,Bw)=>{var V$=Ne(),Gi=We(),Cc=xe(),Fw=Ge(),Ow=Be(),Uw=mt(),Nw=Je(),Go=new WeakMap,G$=t=>{let e=Go.get(t);if(e)return e;let n=Uw.toPoints(t),i;n.length===0?i=Gi.create():i=Gi.clone(n[0]);let s=Gi.clone(i);return n.forEach(r=>{Gi.min(i,i,r),Gi.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],Go.set(t,e),e},H$=t=>{let e=Go.get(t);if(e)return e;let n=Fw.toPoints(t),i;n.length===0?i=Gi.create():i=Gi.clone(n[0]);let s=Gi.clone(i);return n.forEach(r=>{Gi.min(i,i,r),Gi.max(s,s,r)}),i=[i[0],i[1],0],s=[s[0],s[1],0],e=[i,s],Go.set(t,e),e},$$=t=>{let e=Go.get(t);if(e)return e;let n=Ow.toPolygons(t),i=Cc.create();if(n.length>0){let r=Nw.toPoints(n[0]);Cc.copy(i,r[0])}let s=Cc.clone(i);return n.forEach(r=>{Nw.toPoints(r).forEach(o=>{Cc.min(i,i,o),Cc.max(s,s,o)})}),i=[i[0],i[1],i[2]],s=[s[0],s[1],s[2]],e=[i,s],Go.set(t,e),e},W$=(...t)=>{if(t=V$(t),t.length===0)throw new Error("wrong number of arguments");let e=t.map(n=>Uw.isA(n)?G$(n):Fw.isA(n)?H$(n):Ow.isA(n)?$$(n):[[0,0,0],[0,0,0]]);return e.length===1?e[0]:e};Bw.exports=W$});var Ph=E(($ve,kw)=>{var X$=Ne(),Y$=kp(),Z$=Bp(),j$=Ys(),J$=(...t)=>{if(t=X$(t),t.length===0)throw new Error("measureAggregateBoundingBox: no geometries supplied");let e=j$(t);if(t.length===1)return e;let n=[[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE],[-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]];return e.reduce((i,s)=>(i=[Y$(i[0],i[0],s[0]),Z$(i[1],i[1],s[1])],i),n)};kw.exports=J$});var Y0=E((Wve,zw)=>{var{EPS:K$}=nt(),Q$=(t,e)=>{let n=0;for(let i=0;i<e;i++)n+=t[1][i]-t[0][i];return K$*n/e};zw.exports=Q$});var Vw=E((Xve,qw)=>{var eW=Ne(),tW=Ph(),nW=Y0(),{geom2:iW,geom3:sW,path2:rW}=Mh(),oW=(...t)=>{if(t=eW(t),t.length===0)throw new Error("measureAggregateEpsilon: no geometries supplied");let e=tW(t),n=0;return n=t.reduce((i,s)=>rW.isA(s)||iW.isA(s)?Math.max(i,2):sW.isA(s)?Math.max(i,3):0,n),nW(e,n)};qw.exports=oW});var Z0=E((Yve,$w)=>{var aW=Ne(),cW=Ge(),Hw=Be(),lW=mt(),uW=Je(),Gw=new WeakMap,hW=()=>0,fW=()=>0,dW=t=>{let e=Gw.get(t);return e||(e=Hw.toPolygons(t).reduce((i,s)=>i+uW.measureSignedVolume(s),0),Gw.set(t,e),e)},pW=(...t)=>{if(t=aW(t),t.length===0)throw new Error("wrong number of arguments");let e=t.map(n=>lW.isA(n)?hW(n):cW.isA(n)?fW(n):Hw.isA(n)?dW(n):0);return e.length===1?e[0]:e};$w.exports=pW});var Xw=E((Zve,Ww)=>{var mW=Ne(),gW=Z0(),xW=(...t)=>{if(t=mW(t),t.length===0)throw new Error("measureAggregateVolume: no geometries supplied");let e=gW(t);return t.length===1?e:e.reduce((i,s)=>i+s,0)};Ww.exports=xW});var eT=E((jve,Qw)=>{var vW=Ne(),Zw=We(),Ln=xe(),jw=Ge(),Jw=Be(),Kw=mt(),Yw=Je(),Ho=new WeakMap,yW=t=>{let e=Ho.get(t);if(e!==void 0)return e;let n=Ln.create(),i=0,s=Kw.toPoints(t);if(s.length>0){let r=0,o=Ln.create();s.forEach(a=>{Ln.add(n,n,Ln.fromVec2(o,a,0)),r++}),Ln.scale(n,n,1/r),s.forEach(a=>{i=Math.max(i,Zw.squaredDistance(n,a))}),i=Math.sqrt(i)}return e=[n,i],Ho.set(t,e),e},_W=t=>{let e=Ho.get(t);if(e!==void 0)return e;let n=Ln.create(),i=0,s=jw.toSides(t);if(s.length>0){let r=0,o=Ln.create();s.forEach(a=>{Ln.add(n,n,Ln.fromVec2(o,a[0],0)),r++}),Ln.scale(n,n,1/r),s.forEach(a=>{i=Math.max(i,Zw.squaredDistance(n,a[0]))}),i=Math.sqrt(i)}return e=[n,i],Ho.set(t,e),e},bW=t=>{let e=Ho.get(t);if(e!==void 0)return e;let n=Ln.create(),i=0,s=Jw.toPolygons(t);if(s.length>0){let r=0;s.forEach(o=>{Yw.toPoints(o).forEach(a=>{Ln.add(n,n,a),r++})}),Ln.scale(n,n,1/r),s.forEach(o=>{Yw.toPoints(o).forEach(a=>{i=Math.max(i,Ln.squaredDistance(n,a))})}),i=Math.sqrt(i)}return e=[n,i],Ho.set(t,e),e},SW=(...t)=>{t=vW(t);let e=t.map(n=>Kw.isA(n)?yW(n):jw.isA(n)?_W(n):Jw.isA(n)?bW(n):[[0,0,0],0]);return e.length===1?e[0]:e};Qw.exports=SW});var nT=E((Jve,tT)=>{var EW=Ne(),MW=Ys(),AW=(...t)=>{t=EW(t);let e=t.map(n=>{let i=MW(n);return[i[0][0]+(i[1][0]-i[0][0])/2,i[0][1]+(i[1][1]-i[0][1])/2,i[0][2]+(i[1][2]-i[0][2])/2]});return e.length===1?e[0]:e};tT.exports=AW});var oT=E((Kve,rT)=>{var wW=Ne(),Hi=xe(),iT=Ge(),sT=Be(),Ih=new WeakMap,TW=t=>{let e=Ih.get(t);if(e!==void 0)return e;let n=iT.toSides(t),i=0,s=0,r=0;if(n.length>0){for(let a=0;a<n.length;a++){let c=n[a][0],l=n[a][1],u=c[0]*l[1]-c[1]*l[0];i+=u,s+=(c[0]+l[0])*u,r+=(c[1]+l[1])*u}i/=2;let o=1/(i*6);s*=o,r*=o}return e=Hi.fromValues(s,r,0),Ih.set(t,e),e},CW=t=>{let e=Ih.get(t);if(e!==void 0)return e;e=Hi.create();let n=sT.toPolygons(t);if(n.length===0)return e;let i=0,s=Hi.create();return n.forEach(r=>{let o=r.vertices;for(let a=0;a<o.length-2;a++){Hi.cross(s,o[a+1],o[a+2]);let c=Hi.dot(o[0],s)/6;i+=c,Hi.add(s,o[0],o[a+1]),Hi.add(s,s,o[a+2]);let l=Hi.scale(s,s,1/4*c);Hi.add(e,e,l)}}),Hi.scale(e,e,1/i),Ih.set(t,e),e},RW=(...t)=>{t=wW(t);let e=t.map(n=>iT.isA(n)?TW(n):sT.isA(n)?CW(n):[0,0,0]);return e.length===1?e[0]:e};rT.exports=RW});var cT=E((Qve,aT)=>{var DW=Ne(),PW=Ys(),IW=(...t)=>{t=DW(t);let e=t.map(n=>{let i=PW(n);return[i[1][0]-i[0][0],i[1][1]-i[0][1],i[1][2]-i[0][2]]});return e.length===1?e[0]:e};aT.exports=IW});var ys=E((e2e,lT)=>{var LW=Ne(),{geom2:NW,geom3:FW,path2:OW}=Mh(),j0=Y0(),J0=Ys(),UW=t=>j0(J0(t),2),BW=t=>j0(J0(t),2),kW=t=>j0(J0(t),3),zW=(...t)=>{if(t=LW(t),t.length===0)throw new Error("wrong number of arguments");let e=t.map(n=>OW.isA(n)?UW(n):NW.isA(n)?BW(n):FW.isA(n)?kW(n):0);return e.length===1?e[0]:e};lT.exports=zW});var hT=E((t2e,uT)=>{uT.exports={measureAggregateArea:Lw(),measureAggregateBoundingBox:Ph(),measureAggregateEpsilon:Vw(),measureAggregateVolume:Xw(),measureArea:X0(),measureBoundingBox:Ys(),measureBoundingSphere:eT(),measureCenter:nT(),measureCenterOfMass:oT(),measureDimensions:cT(),measureEpsilon:ys(),measureVolume:Z0()}});var jt=E((n2e,fT)=>{var qW=(t,e)=>Array.isArray(t)&&t.length>=e?t.every(n=>Number.isFinite(n)):!1,VW=(t,e)=>Number.isFinite(t)&&t>e,GW=(t,e)=>Number.isFinite(t)&&t>=e;fT.exports={isNumberArray:qW,isGT:VW,isGTE:GW}});var mT=E((i2e,pT)=>{var{EPS:dT,TAU:$o}=nt(),_s=We(),HW=mt(),{isGT:$W,isGTE:K0,isNumberArray:WW}=jt(),XW=t=>{let e={center:[0,0],radius:1,startAngle:0,endAngle:$o,makeTangent:!1,segments:32},{center:n,radius:i,startAngle:s,endAngle:r,makeTangent:o,segments:a}=Object.assign({},e,t);if(!WW(n,2))throw new Error("center must be an array of X and Y values");if(!$W(i,0))throw new Error("radius must be greater than zero");if(!K0(s,0))throw new Error("startAngle must be positive");if(!K0(r,0))throw new Error("endAngle must be positive");if(!K0(a,4))throw new Error("segments must be four or more");s=s%$o,r=r%$o;let c=$o;s<r&&(c=r-s),s>r&&(c=r+($o-s));let l=Math.acos((i*i+i*i-dT*dT)/(2*i*i)),u=_s.clone(n),f,h=[];if(c<l)f=_s.fromAngleRadians(_s.create(),s),_s.scale(f,f,i),_s.add(f,f,u),h.push(f);else{let d=Math.floor(a*(Math.abs(c)/$o)),g=d*.5/c;g>.25&&(g=.25);let p=o?d+2:d;for(let x=0;x<=p;x++){let m=x;o&&(m=(x-1)*(d-2*g)/d+g,m<0&&(m=0),m>d&&(m=d));let b=s+m*(c/d);f=_s.fromAngleRadians(_s.create(),b),_s.scale(f,f,i),_s.add(f,f,u),h.push(f)}}return HW.fromPoints({closed:!1},h)};pT.exports=XW});var tm=E((s2e,yT)=>{var{EPS:gT,TAU:Zs}=nt(),Q0=We(),xT=Ge(),{sin:YW,cos:ZW}=an(),{isGTE:em,isNumberArray:vT}=jt(),jW=t=>{let e={center:[0,0],radius:[1,1],startAngle:0,endAngle:Zs,segments:32},{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!vT(n,2))throw new Error("center must be an array of X and Y values");if(!vT(i,2))throw new Error("radius must be an array of X and Y values");if(!i.every(d=>d>=0))throw new Error("radius values must be positive");if(!em(s,0))throw new Error("startAngle must be positive");if(!em(r,0))throw new Error("endAngle must be positive");if(!em(o,3))throw new Error("segments must be three or more");if(i[0]===0||i[1]===0)return xT.create();s=s%Zs,r=r%Zs;let a=Zs;s<r&&(a=r-s),s>r&&(a=r+(Zs-s));let c=Math.min(i[0],i[1]),l=Math.acos((c*c+c*c-gT*gT)/(2*c*c));if(a<l)throw new Error("startAngle and endAngle do not define a significant rotation");o=Math.floor(o*(a/Zs));let u=Q0.clone(n),f=a/o,h=[];o=a<Zs?o+1:o;for(let d=0;d<o;d++){let g=f*d+s,p=Q0.fromValues(i[0]*ZW(g),i[1]*YW(g));Q0.add(p,u,p),h.push(p)}return a<Zs&&h.push(u),xT.fromPoints(h)};yT.exports=jW});var nm=E((r2e,_T)=>{var{TAU:JW}=nt(),KW=tm(),{isGTE:QW}=jt(),eX=t=>{let e={center:[0,0],radius:1,startAngle:0,endAngle:JW,segments:32},{center:n,radius:i,startAngle:s,endAngle:r,segments:o}=Object.assign({},e,t);if(!QW(i,0))throw new Error("radius must be positive");return i=[i,i],KW({center:n,radius:i,startAngle:s,endAngle:r,segments:o})};_T.exports=eX});var Lh=E((o2e,ET)=>{var bT=Be(),tX=Je(),{isNumberArray:ST}=jt(),nX=t=>{let e={center:[0,0,0],size:[2,2,2]},{center:n,size:i}=Object.assign({},e,t);if(!ST(n,3))throw new Error("center must be an array of X, Y and Z values");if(!ST(i,3))throw new Error("size must be an array of width, depth and height values");if(!i.every(r=>r>=0))throw new Error("size values must be positive");return i[0]===0||i[1]===0||i[2]===0?bT.create():bT.create([[[0,4,6,2],[-1,0,0]],[[1,3,7,5],[1,0,0]],[[0,1,5,4],[0,-1,0]],[[2,6,7,3],[0,1,0]],[[0,2,3,1],[0,0,-1]],[[4,5,7,6],[0,0,1]]].map(r=>{let o=r[0].map(a=>[n[0]+i[0]/2*(2*!!(a&1)-1),n[1]+i[1]/2*(2*!!(a&2)-1),n[2]+i[2]/2*(2*!!(a&4)-1)]);return tX.create(o)}))};ET.exports=nX});var AT=E((a2e,MT)=>{var iX=Lh(),{isGTE:sX}=jt(),rX=t=>{let e={center:[0,0,0],size:2},{center:n,size:i}=Object.assign({},e,t);if(!sX(i,0))throw new Error("size must be positive");return i=[i,i,i],iX({center:n,size:i})};MT.exports=rX});var rm=E((c2e,TT)=>{var{EPS:wT,TAU:js}=nt(),cn=xe(),oX=Be(),aX=Je(),{sin:cX,cos:lX}=an(),{isGT:uX,isGTE:im,isNumberArray:sm}=jt(),hX=t=>{let e={center:[0,0,0],height:2,startRadius:[1,1],startAngle:0,endRadius:[1,1],endAngle:js,segments:32},{center:n,height:i,startRadius:s,startAngle:r,endRadius:o,endAngle:a,segments:c}=Object.assign({},e,t);if(!sm(n,3))throw new Error("center must be an array of X, Y and Z values");if(!uX(i,0))throw new Error("height must be greater then zero");if(!sm(s,2))throw new Error("startRadius must be an array of X and Y values");if(!s.every(v=>v>=0))throw new Error("startRadius values must be positive");if(!sm(o,2))throw new Error("endRadius must be an array of X and Y values");if(!o.every(v=>v>=0))throw new Error("endRadius values must be positive");if(o.every(v=>v===0)&&s.every(v=>v===0))throw new Error("at least one radius must be positive");if(!im(r,0))throw new Error("startAngle must be positive");if(!im(a,0))throw new Error("endAngle must be positive");if(!im(c,4))throw new Error("segments must be four or more");r=r%js,a=a%js;let l=js;r<a&&(l=a-r),r>a&&(l=a+(js-r));let u=Math.min(s[0],s[1],o[0],o[1]),f=Math.acos((u*u+u*u-wT*wT)/(2*u*u));if(l<f)throw new Error("startAngle and endAngle do not define a significant rotation");let h=Math.floor(c*(l/js)),d=cn.fromValues(0,0,-(i/2)),g=cn.fromValues(0,0,i/2),p=cn.subtract(cn.create(),g,d),x=cn.fromValues(1,0,0),m=cn.fromValues(0,1,0),b=cn.create(),S=cn.create(),y=cn.create(),M=(v,_,R)=>{let D=_*l+r;return cn.scale(b,x,R[0]*lX(D)),cn.scale(S,m,R[1]*cX(D)),cn.add(b,b,S),cn.scale(y,p,v),cn.add(y,y,d),cn.add(cn.create(),b,y)},A=(...v)=>{let _=v.map(R=>cn.add(cn.create(),R,n));return aX.create(_)},w=[];for(let v=0;v<h;v++){let _=v/h,R=(v+1)/h;l===js&&v===h-1&&(R=0),o[0]===s[0]&&o[1]===s[1]?(w.push(A(d,M(0,R,o),M(0,_,o))),w.push(A(M(0,R,o),M(1,R,o),M(1,_,o),M(0,_,o))),w.push(A(g,M(1,_,o),M(1,R,o)))):(s[0]>0&&s[1]>0&&w.push(A(d,M(0,R,s),M(0,_,s))),(s[0]>0||s[1]>0)&&w.push(A(M(0,_,s),M(0,R,s),M(1,_,o))),o[0]>0&&o[1]>0&&w.push(A(g,M(1,_,o),M(1,R,o))),(o[0]>0||o[1]>0)&&w.push(A(M(1,_,o),M(0,R,s),M(1,R,o))))}return l<js&&(w.push(A(d,M(0,0,s),g)),w.push(A(M(0,0,s),M(1,0,o),g)),w.push(A(d,g,M(0,1,s))),w.push(A(M(0,1,s),g,M(1,1,o)))),oX.create(w)};TT.exports=hX});var om=E((l2e,CT)=>{var fX=Be(),dX=rm(),{isGTE:pX}=jt(),mX=t=>{let e={center:[0,0,0],height:2,radius:1,segments:32},{center:n,height:i,radius:s,segments:r}=Object.assign({},e,t);if(!pX(s,0))throw new Error("radius must be positive");return i===0||s===0?fX.create():dX({center:n,height:i,startRadius:[s,s],endRadius:[s,s],segments:r})};CT.exports=mX});var am=E((u2e,FT)=>{var{TAU:RT}=nt(),Se=xe(),DT=Be(),PT=Je(),{sin:IT,cos:LT}=an(),{isGTE:gX,isNumberArray:NT}=jt(),xX=t=>{let e={center:[0,0,0],radius:[1,1,1],segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!NT(n,3))throw new Error("center must be an array of X, Y and Z values");if(!NT(i,3))throw new Error("radius must be an array of X, Y and Z values");if(!i.every(g=>g>=0))throw new Error("radius values must be positive");if(!gX(s,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return DT.create();let o=Se.scale(Se.create(),Se.normalize(Se.create(),r[0]),i[0]),a=Se.scale(Se.create(),Se.normalize(Se.create(),r[1]),i[1]),c=Se.scale(Se.create(),Se.normalize(Se.create(),r[2]),i[2]),l=Math.round(s/4),u,f=[],h=Se.create(),d=Se.create();for(let g=0;g<=s;g++){let p=RT*g/s,x=Se.add(Se.create(),Se.scale(h,o,LT(p)),Se.scale(d,a,IT(p)));if(g>0){let m,b;for(let S=0;S<=l;S++){let y=RT/4*S/l,M=LT(y),A=IT(y);if(S>0){let w=[],T;T=Se.subtract(Se.create(),Se.scale(h,u,m),Se.scale(d,c,b)),w.push(Se.add(T,T,n)),T=Se.subtract(Se.create(),Se.scale(h,x,m),Se.scale(d,c,b)),w.push(Se.add(T,T,n)),S<l&&(T=Se.subtract(Se.create(),Se.scale(h,x,M),Se.scale(d,c,A)),w.push(Se.add(T,T,n))),T=Se.subtract(Se.create(),Se.scale(h,u,M),Se.scale(d,c,A)),w.push(Se.add(T,T,n)),f.push(PT.create(w)),w=[],T=Se.add(Se.create(),Se.scale(h,u,m),Se.scale(d,c,b)),w.push(Se.add(Se.create(),n,T)),T=Se.add(T,Se.scale(h,x,m),Se.scale(d,c,b)),w.push(Se.add(Se.create(),n,T)),S<l&&(T=Se.add(T,Se.scale(h,x,M),Se.scale(d,c,A)),w.push(Se.add(Se.create(),n,T))),T=Se.add(T,Se.scale(h,u,M),Se.scale(d,c,A)),w.push(Se.add(Se.create(),n,T)),w.reverse(),f.push(PT.create(w))}m=M,b=A}}u=x}return DT.create(f)};FT.exports=xX});var cm=E((h2e,UT)=>{var vX=Be(),yX=Je(),{isNumberArray:OT}=jt(),_X=t=>{let e={points:[],faces:[],colors:void 0,orientation:"outward"},{points:n,faces:i,colors:s,orientation:r}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and faces must be arrays");if(n.length<3)throw new Error("three or more points are required");if(i.length<1)throw new Error("one or more faces are required");if(s){if(!Array.isArray(s))throw new Error("colors must be an array");if(s.length!==i.length)throw new Error("faces and colors must have the same length")}n.forEach((a,c)=>{if(!OT(a,3))throw new Error(`point ${c} must be an array of X, Y, Z values`)}),i.forEach((a,c)=>{if(a.length<3)throw new Error(`face ${c} must contain 3 or more indexes`);if(!OT(a,a.length))throw new Error(`face ${c} must be an array of numbers`)}),r!=="outward"&&i.forEach(a=>a.reverse());let o=i.map((a,c)=>{let l=yX.create(a.map(u=>n[u]));return s&&s[c]&&(l.color=s[c]),l});return vX.create(o)};UT.exports=_X});var GT=E((f2e,VT)=>{var BT=yt(),kT=xe(),zT=Be(),bX=cm(),{isGTE:qT}=jt(),SX=t=>{let e={radius:1,frequency:6},{radius:n,frequency:i}=Object.assign({},e,t);if(!qT(n,0))throw new Error("radius must be positive");if(!qT(i,6))throw new Error("frequency must be six or more");if(n===0)return zT.create();i=Math.floor(i/6);let s=[[.850651,0,-.525731],[.850651,-0,.525731],[-.850651,-0,.525731],[-.850651,0,-.525731],[0,-.525731,.850651],[0,.525731,.850651],[0,.525731,-.850651],[0,-.525731,-.850651],[-.525731,-.850651,-0],[.525731,-.850651,-0],[.525731,.850651,0],[-.525731,.850651,0]],r=[[0,9,1],[1,10,0],[6,7,0],[10,6,0],[7,9,0],[5,1,4],[4,1,9],[5,10,1],[2,8,3],[3,11,2],[2,5,4],[4,8,2],[2,11,5],[3,7,6],[6,11,3],[8,7,3],[9,8,4],[11,10,5],[10,11,6],[8,9,7]],o=(h,d,g)=>{let p=h[0],x=h[1],m=h[2],b=g,S=[],y=[];for(let M=0;M<d;M++)for(let A=0;A<d-M;A++){let w=M/d,T=(M+1)/d,v=A/(d-M),_=(A+1)/(d-M),R=d-M-1?A/(d-M-1):1,D=[];D[0]=a(a(p,x,v),m,w),D[1]=a(a(p,x,_),m,w),D[2]=a(a(p,x,R),m,T);for(let L=0;L<3;L++){let N=kT.length(D[L]);for(let B=0;B<3;B++)D[L][B]/=N}if(S.push(D[0],D[1],D[2]),y.push([b,b+1,b+2]),b+=3,A<d-M-1){let L=d-M-1?(A+1)/(d-M-1):1;D[0]=a(a(p,x,_),m,w),D[1]=a(a(p,x,L),m,T),D[2]=a(a(p,x,R),m,T);for(let N=0;N<3;N++){let B=kT.length(D[N]);for(let F=0;F<3;F++)D[N][F]/=B}S.push(D[0],D[1],D[2]),y.push([b,b+1,b+2]),b+=3}}return{points:S,triangles:y,offset:b}},a=(h,d,g)=>{let p=1-g,x=[];for(let m=0;m<3;m++)x[m]=h[m]*p+d[m]*g;return x},c=[],l=[],u=0;for(let h=0;h<r.length;h++){let d=o([s[r[h][0]],s[r[h][1]],s[r[h][2]]],i,u);c=c.concat(d.points),l=l.concat(d.triangles),u=d.offset}let f=bX({points:c,faces:l,orientation:"inward"});return n!==1&&(f=zT.transform(BT.fromScaling(BT.create(),[n,n,n]),f)),f};VT.exports=SX});var $T=E((d2e,HT)=>{var EX=mt(),MX=t=>{if(!Array.isArray(t))throw new Error("points must be an array");return EX.fromPoints({},t)};HT.exports=MX});var XT=E((p2e,WT)=>{var Nh=Ge(),AX=t=>{let e={points:[],paths:[],orientation:"counterclockwise"},{points:n,paths:i,orientation:s}=Object.assign({},e,t);if(!(Array.isArray(n)&&Array.isArray(i)))throw new Error("points and paths must be arrays");let r=n;Array.isArray(n[0])&&(Array.isArray(n[0][0])||(r=[n])),r.forEach((u,f)=>{if(!Array.isArray(u))throw new Error("list of points "+f+" must be an array");if(u.length<3)throw new Error("list of points "+f+" must contain three or more points");u.forEach((h,d)=>{if(!Array.isArray(h))throw new Error("list of points "+f+", point "+d+" must be an array");if(h.length<2)throw new Error("list of points "+f+", point "+d+" must contain by X and Y values")})});let o=i;if(i.length===0){let u=0;o=r.map(f=>f.map(h=>u++))}let a=[];r.forEach(u=>u.forEach(f=>a.push(f)));let c=[];o.forEach(u=>{let f=u.map(d=>a[d]),h=Nh.fromPoints(f);c=c.concat(Nh.toSides(h))});let l=Nh.create(c);return s==="clockwise"&&(l=Nh.reverse(l)),l};WT.exports=AX});var Fh=E((m2e,jT)=>{var Js=We(),YT=Ge(),{isNumberArray:ZT}=jt(),wX=t=>{let e={center:[0,0],size:[2,2]},{center:n,size:i}=Object.assign({},e,t);if(!ZT(n,2))throw new Error("center must be an array of X and Y values");if(!ZT(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(a=>a>=0))throw new Error("size values must be positive");if(i[0]===0||i[1]===0)return YT.create();let s=[i[0]/2,i[1]/2],r=[s[0],-s[1]],o=[Js.subtract(Js.create(),n,s),Js.add(Js.create(),n,r),Js.add(Js.create(),n,s),Js.subtract(Js.create(),n,r)];return YT.fromPoints(o)};jT.exports=wX});var s5=E((g2e,i5)=>{var{EPS:Oh,TAU:Rc}=nt(),lm=We(),Wt=xe(),JT=Be(),Wo=Je(),{sin:TX,cos:CX}=an(),{isGTE:KT,isNumberArray:QT}=jt(),RX=Lh(),e5=(t,e,n,i,s,r)=>{let o=Rc/4*s/i,a=CX(o),c=TX(o),l=i-s,u=n*a,f=e[2]-(n-n*c);r||(f=n-n*c-e[2]),u=u>Oh?u:0;let h=Wt.add(Wt.create(),t,[e[0]-n,e[1]-n,f]),d=Wt.add(Wt.create(),t,[n-e[0],e[1]-n,f]),g=Wt.add(Wt.create(),t,[n-e[0],n-e[1],f]),p=Wt.add(Wt.create(),t,[e[0]-n,n-e[1],f]),x=[],m=[],b=[],S=[];for(let y=0;y<=l;y++){let M=l>0?Rc/4*y/l:0,A=lm.fromAngleRadians(lm.create(),M);lm.scale(A,A,u);let w=Wt.fromVec2(Wt.create(),A);x.push(Wt.add(Wt.create(),h,w)),Wt.rotateZ(w,w,[0,0,0],Rc/4),m.push(Wt.add(Wt.create(),d,w)),Wt.rotateZ(w,w,[0,0,0],Rc/4),b.push(Wt.add(Wt.create(),g,w)),Wt.rotateZ(w,w,[0,0,0],Rc/4),S.push(Wt.add(Wt.create(),p,w))}return r?[x,m,b,S]:(x.reverse(),m.reverse(),b.reverse(),S.reverse(),[S,b,m,x])},t5=(t,e)=>{let n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i];for(let o=0;o<s.length-1;o++)n.push(Wo.create([s[o],s[o+1],r[o]])),o<r.length-1&&n.push(Wo.create([r[o],s[o+1],r[o+1]]))}return n},n5=(t,e)=>{let n=[];for(let i=0;i<t.length;i++){let s=t[i],r=e[i],o=s[s.length-1],a=r[r.length-1],c=(i+1)%t.length;s=t[c],r=e[c];let l=s[0],u=r[0];n.push(Wo.create([o,l,u,a]))}return n},DX=(t,e)=>{t=[t[3],t[2],t[1],t[0]],t=t.map(r=>r.slice().reverse());let n=[];t.forEach(r=>{r.forEach(o=>n.push(o))});let i=[];e.forEach(r=>{r.forEach(o=>i.push(o))});let s=[];for(let r=0;r<i.length;r++){let o=(r+1)%i.length;s.push(Wo.create([n[r],n[o],i[o],i[r]]))}return s},PX=t=>{let e={center:[0,0,0],size:[2,2,2],roundRadius:.2,segments:32},{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!QT(n,3))throw new Error("center must be an array of X, Y and Z values");if(!QT(i,3))throw new Error("size must be an array of X, Y and Z values");if(!i.every(l=>l>=0))throw new Error("size values must be positive");if(!KT(s,0))throw new Error("roundRadius must be positive");if(!KT(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0||i[2]===0)return JT.create();if(s===0)return RX({center:n,size:i});if(i=i.map(l=>l/2),s>i[0]-Oh||s>i[1]-Oh||s>i[2]-Oh)throw new Error("roundRadius must be smaller than the radius of all dimensions");r=Math.floor(r/4);let o=null,a=null,c=[];for(let l=0;l<=r;l++){let u=e5(n,i,s,r,l,!0),f=e5(n,i,s,r,l,!1);if(l===0&&(c=c.concat(DX(f,u))),o&&(c=c.concat(t5(o,u),n5(o,u))),a&&(c=c.concat(t5(a,f),n5(a,f))),l===r){let h=u.map(d=>d[0]);c.push(Wo.create(h)),h=f.map(d=>d[0]),c.push(Wo.create(h))}o=u,a=f}return JT.create(c)};i5.exports=PX});var u5=E((x2e,l5)=>{var{EPS:IX,TAU:r5}=nt(),ce=xe(),o5=Be(),LX=Je(),{sin:a5,cos:c5}=an(),{isGTE:Uh,isNumberArray:NX}=jt(),FX=om(),OX=t=>{let e={center:[0,0,0],height:2,radius:1,roundRadius:.2,segments:32},{center:n,height:i,radius:s,roundRadius:r,segments:o}=Object.assign({},e,t);if(!NX(n,3))throw new Error("center must be an array of X, Y and Z values");if(!Uh(i,0))throw new Error("height must be positive");if(!Uh(s,0))throw new Error("radius must be positive");if(!Uh(r,0))throw new Error("roundRadius must be positive");if(r>s)throw new Error("roundRadius must be smaller than the radius");if(!Uh(o,4))throw new Error("segments must be four or more");if(i===0||s===0)return o5.create();if(r===0)return FX({center:n,height:i,radius:s});let a=[0,0,-(i/2)],c=[0,0,i/2],l=ce.subtract(ce.create(),c,a),u=ce.length(l);if(2*r>u-IX)throw new Error("height must be larger than twice roundRadius");let f;Math.abs(l[0])>Math.abs(l[1])?f=ce.fromValues(0,1,0):f=ce.fromValues(1,0,0);let h=ce.scale(ce.create(),ce.normalize(ce.create(),l),r),d=ce.scale(ce.create(),ce.normalize(ce.create(),ce.cross(ce.create(),h,f)),s),g=ce.scale(ce.create(),ce.normalize(ce.create(),ce.cross(ce.create(),d,h)),s);ce.add(a,a,h),ce.subtract(c,c,h);let p=Math.floor(.25*o),x=A=>{let w=A.map(T=>ce.add(T,T,n));return LX.create(w)},m=[],b=ce.create(),S=ce.create(),y;for(let A=0;A<=o;A++){let w=r5*A/o,T=ce.add(ce.create(),ce.scale(b,d,c5(w)),ce.scale(S,g,a5(w)));if(A>0){let v=[];v.push(ce.add(ce.create(),a,T)),v.push(ce.add(ce.create(),a,y)),v.push(ce.add(ce.create(),c,y)),v.push(ce.add(ce.create(),c,T)),m.push(x(v));let _,R;for(let D=0;D<=p;D++){let L=r5/4*D/p,N=c5(L),B=a5(L);if(D>0){v=[];let F;F=ce.add(ce.create(),a,ce.subtract(b,ce.scale(b,y,_),ce.scale(S,h,R))),v.push(F),F=ce.add(ce.create(),a,ce.subtract(b,ce.scale(b,T,_),ce.scale(S,h,R))),v.push(F),D<p&&(F=ce.add(ce.create(),a,ce.subtract(b,ce.scale(b,T,N),ce.scale(S,h,B))),v.push(F)),F=ce.add(ce.create(),a,ce.subtract(b,ce.scale(b,y,N),ce.scale(S,h,B))),v.push(F),m.push(x(v)),v=[],F=ce.add(ce.create(),ce.scale(b,y,_),ce.scale(S,h,R)),ce.add(F,F,c),v.push(F),F=ce.add(ce.create(),ce.scale(b,T,_),ce.scale(S,h,R)),ce.add(F,F,c),v.push(F),D<p&&(F=ce.add(ce.create(),ce.scale(b,T,N),ce.scale(S,h,B)),ce.add(F,F,c),v.push(F)),F=ce.add(ce.create(),ce.scale(b,y,N),ce.scale(S,h,B)),ce.add(F,F,c),v.push(F),v.reverse(),m.push(x(v))}_=N,R=B}}y=T}return o5.create(m)};l5.exports=OX});var g5=E((v2e,m5)=>{var{EPS:h5,TAU:Bh}=nt(),It=We(),f5=Ge(),{isGTE:d5,isNumberArray:p5}=jt(),UX=Fh(),BX=t=>{let e={center:[0,0],size:[2,2],roundRadius:.2,segments:32},{center:n,size:i,roundRadius:s,segments:r}=Object.assign({},e,t);if(!p5(n,2))throw new Error("center must be an array of X and Y values");if(!p5(i,2))throw new Error("size must be an array of X and Y values");if(!i.every(p=>p>=0))throw new Error("size values must be positive");if(!d5(s,0))throw new Error("roundRadius must be positive");if(!d5(r,4))throw new Error("segments must be four or more");if(i[0]===0||i[1]===0)return f5.create();if(s===0)return UX({center:n,size:i});if(i=i.map(p=>p/2),s>i[0]-h5||s>i[1]-h5)throw new Error("roundRadius must be smaller than the radius of all dimensions");let o=Math.floor(r/4),a=It.add(It.create(),n,[i[0]-s,i[1]-s]),c=It.add(It.create(),n,[s-i[0],i[1]-s]),l=It.add(It.create(),n,[s-i[0],s-i[1]]),u=It.add(It.create(),n,[i[0]-s,s-i[1]]),f=[],h=[],d=[],g=[];for(let p=0;p<=o;p++){let x=Bh/4*p/o,m=It.fromAngleRadians(It.create(),x);It.scale(m,m,s),f.push(It.add(It.create(),a,m)),It.rotate(m,m,It.create(),Bh/4),h.push(It.add(It.create(),c,m)),It.rotate(m,m,It.create(),Bh/4),d.push(It.add(It.create(),l,m)),It.rotate(m,m,It.create(),Bh/4),g.push(It.add(It.create(),u,m))}return f5.fromPoints(f.concat(h,d,g))};m5.exports=BX});var um=E((y2e,x5)=>{var kX=am(),{isGTE:zX}=jt(),qX=t=>{let e={center:[0,0,0],radius:1,segments:32,axes:[[1,0,0],[0,-1,0],[0,0,1]]},{center:n,radius:i,segments:s,axes:r}=Object.assign({},e,t);if(!zX(i,0))throw new Error("radius must be positive");return i=[i,i,i],kX({center:n,radius:i,segments:s,axes:r})};x5.exports=qX});var y5=E((_2e,v5)=>{var VX=Fh(),{isGTE:GX}=jt(),HX=t=>{let e={center:[0,0],size:2},{center:n,size:i}=Object.assign({},e,t);if(!GX(i,0))throw new Error("size must be positive");return i=[i,i],VX({center:n,size:i})};v5.exports=HX});var E5=E((b2e,S5)=>{var{TAU:b5}=nt(),Dc=We(),$X=Ge(),{isGT:WX,isGTE:kh,isNumberArray:XX}=jt(),YX=(t,e)=>t>0&&e>1&&e<t/2?Math.cos(Math.PI*e/t)/Math.cos(Math.PI*(e-1)/t):0,_5=(t,e,n,i)=>{let s=b5/t,r=[];for(let o=0;o<t;o++){let a=Dc.fromAngleRadians(Dc.create(),s*o+n);Dc.scale(a,a,e),Dc.add(a,i,a),r.push(a)}return r},ZX=t=>{let e={center:[0,0],vertices:5,outerRadius:1,innerRadius:0,density:2,startAngle:0},{center:n,vertices:i,outerRadius:s,innerRadius:r,density:o,startAngle:a}=Object.assign({},e,t);if(!XX(n,2))throw new Error("center must be an array of X and Y values");if(!kh(i,2))throw new Error("vertices must be two or more");if(!WX(s,0))throw new Error("outerRadius must be greater than zero");if(!kh(r,0))throw new Error("innerRadius must be greater than zero");if(!kh(a,0))throw new Error("startAngle must be greater than zero");if(i=Math.floor(i),o=Math.floor(o),a=a%b5,r===0){if(!kh(o,2))throw new Error("density must be two or more");r=s*YX(i,o)}let c=Dc.clone(n),l=_5(i,s,a,c),u=_5(i,r,a+Math.PI/i,c),f=[];for(let h=0;h<i;h++)f.push(l[h]),f.push(u[h]);return $X.fromPoints(f)};S5.exports=ZX});var Xo=E((S2e,R5)=>{var jX=Ne(),M5=yt(),A5=Ai(),w5=Ge(),T5=Be(),C5=mt(),zh=(t,...e)=>{let n={origin:[0,0,0],normal:[0,0,1]},{origin:i,normal:s}=Object.assign({},n,t);if(e=jX(e),e.length===0)throw new Error("wrong number of arguments");let r=A5.fromNormalAndPoint(A5.create(),s,i);if(Number.isNaN(r[0]))throw new Error("the given origin and normal do not define a proper plane");let o=M5.mirrorByPlane(M5.create(),r),a=e.map(c=>C5.isA(c)?C5.transform(o,c):w5.isA(c)?w5.transform(o,c):T5.isA(c)?T5.transform(o,c):c);return a.length===1?a[0]:a},JX=(...t)=>zh({normal:[1,0,0]},t),KX=(...t)=>zh({normal:[0,1,0]},t),QX=(...t)=>zh({normal:[0,0,1]},t);R5.exports={mirror:zh,mirrorX:JX,mirrorY:KX,mirrorZ:QX}});var hm=E((E2e,P5)=>{var D5=Ai(),qr=xe(),eY=t=>{let e=t.edges;if(e.length<3)throw new Error("slices must have 3 or more edges to calculate a plane");let n=e.reduce((o,a)=>qr.add(qr.create(),o,a[0]),qr.create());qr.scale(n,n,1/e.length);let i,s=0;e.forEach(o=>{if(!qr.equals(o[0],o[1])){let a=qr.squaredDistance(n,o[0]);a>s&&(i=o,s=a)}});let r=e.find(o=>qr.equals(o[1],i[0]));return D5.fromPoints(D5.create(),r[0],i[0],i[1])};P5.exports=eY});var Ks=E((M2e,I5)=>{var tY=t=>(t||(t=[]),{edges:t});I5.exports=tY});var F5=E((A2e,N5)=>{var nY=Ks(),L5=xe(),iY=(...t)=>{let e,n;return t.length===1?(e=nY(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[L5.clone(i[0]),L5.clone(i[1])]),e};N5.exports=iY});var U5=E((w2e,O5)=>{var sY=xe(),rY=(t,e)=>{let n=t.edges,i=e.edges;return n.length!==i.length?!1:n.reduce((r,o,a)=>{let c=i[a],l=sY.squaredDistance(o[0],c[0]);return r&&l<Number.EPSILON},!0)};O5.exports=rY});var k5=E((T2e,B5)=>{var qh=xe(),oY=Ks(),aY=t=>{if(!Array.isArray(t))throw new Error("the given points must be an array");if(t.length<3)throw new Error("the given points must contain THREE or more points");let e=[],n=t[t.length-1];return t.forEach(i=>{i.length===2&&e.push([qh.fromVec2(qh.create(),n),qh.fromVec2(qh.create(),i)]),i.length===3&&e.push([n,i]),n=i}),oY(e)};B5.exports=aY});var q5=E((C2e,z5)=>{var Vh=xe(),cY=Ks(),lY=t=>{if(!Array.isArray(t))throw new Error("the given sides must be an array");let e=[];return t.forEach(n=>{e.push([Vh.fromVec2(Vh.create(),n[0]),Vh.fromVec2(Vh.create(),n[1])])}),cY(e)};z5.exports=lY});var G5=E((R2e,V5)=>{var uY=t=>!!(t&&typeof t=="object"&&"edges"in t&&Array.isArray(t.edges));V5.exports=uY});var $5=E((D2e,H5)=>{var hY=Ks(),fY=(...t)=>{let e,n;return t.length===1?(e=hY(),n=t[0]):(e=t[0],n=t[1]),e.edges=n.edges.map(i=>[i[1],i[0]]),e};H5.exports=fY});var X5=E((P2e,W5)=>{var dY=t=>t.edges;W5.exports=dY});var Z5=E((I2e,Y5)=>{var pY=(t,e)=>{let n,i,s,r,o,a=1;do{i=t,t=null;let c=null;for(o=0;i;){o++,s=i;let l=0;for(n=0;n<a&&(l++,s=s.nextZ,!!s);n++);let u=a;for(;l>0||u>0&&s;)l!==0&&(u===0||!s||e(i)<=e(s))?(r=i,i=i.nextZ,l--):(r=s,s=s.nextZ,u--),c?c.nextZ=r:t=r,r.prevZ=c,c=r;i=s}c.nextZ=null,a*=2}while(o>1);return t};Y5.exports=pY});var fm=E((L2e,j5)=>{var mY=Z5(),Gh=class{constructor(e,n,i){this.i=e,this.x=n,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}},gY=(t,e,n,i)=>{let s=new Gh(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s},xY=t=>{t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)};j5.exports={Node:Gh,insertNode:gY,removeNode:xY,sortLinked:mY}});var Hh=E((N2e,J5)=>{var vY=(t,e,n,i,s,r,o,a)=>(s-o)*(e-a)-(t-o)*(r-a)>=0&&(t-o)*(i-a)-(n-o)*(e-a)>=0&&(n-o)*(r-a)-(s-o)*(i-a)>=0,yY=(t,e,n)=>(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y);J5.exports={area:yY,pointInTriangle:vY}});var dm=E((F2e,n3)=>{var{Node:K5,insertNode:Q5,removeNode:Wh}=fm(),{area:Nn}=Hh(),_Y=(t,e,n,i,s)=>{let r;if(s===wY(t,e,n,i)>0)for(let o=e;o<n;o+=i)r=Q5(o,t[o],t[o+1],r);else for(let o=n-i;o>=e;o-=i)r=Q5(o,t[o],t[o+1],r);return r&&Xh(r,r.next)&&(Wh(r),r=r.next),r},e3=(t,e)=>{if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Xh(n,n.next)||Nn(n.prev,n,n.next)===0)){if(Wh(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e},bY=(t,e,n)=>{let i=t;do{let s=i.prev,r=i.next.next;!Xh(s,r)&&t3(s,i,i.next,r)&&Pc(s,r)&&Pc(r,s)&&(e.push(s.i/n),e.push(i.i/n),e.push(r.i/n),Wh(i),Wh(i.next),i=t=r),i=i.next}while(i!==t);return e3(i)},SY=(t,e)=>{let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&t3(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1},Pc=(t,e)=>Nn(t.prev,t,t.next)<0?Nn(t,e,t.next)>=0&&Nn(t,t.prev,e)>=0:Nn(t,e,t.prev)<0||Nn(t,t.next,e)<0,EY=(t,e)=>{let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i},MY=(t,e)=>{let n=new K5(t.i,t.x,t.y),i=new K5(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i},AY=(t,e)=>t.next.i!==e.i&&t.prev.i!==e.i&&!SY(t,e)&&(Pc(t,e)&&Pc(e,t)&&EY(t,e)&&(Nn(t.prev,t,e.prev)||Nn(t,e.prev,e))||Xh(t,e)&&Nn(t.prev,t,t.next)>0&&Nn(e.prev,e,e.next)>0),t3=(t,e,n,i)=>{let s=Math.sign(Nn(t,e,n)),r=Math.sign(Nn(t,e,i)),o=Math.sign(Nn(n,i,t)),a=Math.sign(Nn(n,i,e));return!!(s!==r&&o!==a||s===0&&$h(t,n,e)||r===0&&$h(t,i,e)||o===0&&$h(n,t,i)||a===0&&$h(n,e,i))},$h=(t,e,n)=>e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y),wY=(t,e,n,i)=>{let s=0;for(let r=e,o=n-i;r<n;r+=i)s+=(t[o]-t[r])*(t[r+1]+t[o+1]),o=r;return s},Xh=(t,e)=>t.x===e.x&&t.y===e.y;n3.exports={cureLocalIntersections:bY,filterPoints:e3,isValidDiagonal:AY,linkedPolygon:_Y,locallyInside:Pc,splitPolygon:MY}});var r3=E((O2e,s3)=>{var{filterPoints:pm,linkedPolygon:TY,locallyInside:CY,splitPolygon:RY}=dm(),{area:i3,pointInTriangle:DY}=Hh(),PY=(t,e,n,i)=>{let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,c=r<o-1?e[r+1]*i:t.length,l=TY(t,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(FY(l))}s.sort((r,o)=>r.x-o.x);for(let r=0;r<s.length;r++)n=IY(s[r],n),n=pm(n,n.next);return n},IY=(t,e)=>{let n=LY(t,e);if(!n)return e;let i=RY(n,t),s=pm(n,n.next);return pm(i,i.next),e===n?s:e},LY=(t,e)=>{let n=e,i=t.x,s=t.y,r=-1/0,o;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let f=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=i&&f>r){if(r=f,f===i){if(s===n.y)return n;if(s===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!o)return null;if(i===r)return o;let a=o,c=o.x,l=o.y,u=1/0;n=o;do{if(i>=n.x&&n.x>=c&&i!==n.x&&DY(s<l?i:r,s,c,l,s<l?r:i,s,n.x,n.y)){let f=Math.abs(s-n.y)/(i-n.x);CY(n,t)&&(f<u||f===u&&(n.x>o.x||n.x===o.x&&NY(o,n)))&&(o=n,u=f)}n=n.next}while(n!==a);return o},NY=(t,e)=>i3(t.prev,t,e.prev)<0&&i3(e.next,t,t.next)<0,FY=t=>{let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n};s3.exports=PY});var a3=E((U2e,o3)=>{var OY=r3(),{removeNode:UY,sortLinked:BY}=fm(),{cureLocalIntersections:kY,filterPoints:Yh,isValidDiagonal:zY,linkedPolygon:qY,splitPolygon:VY}=dm(),{area:Vr,pointInTriangle:Ic}=Hh(),GY=(t,e,n=2)=>{let i=e&&e.length,s=i?e[0]*n:t.length,r=qY(t,0,s,n,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,f;if(i&&(r=OY(t,e,r,n)),t.length>80*n){a=l=t[0],c=u=t[1];for(let h=n;h<s;h+=n){let d=t[h],g=t[h+1];d<a&&(a=d),g<c&&(c=g),d>l&&(l=d),g>u&&(u=g)}f=Math.max(l-a,u-c),f=f!==0?1/f:0}return Lc(r,o,n,a,c,f),o},Lc=(t,e,n,i,s,r,o)=>{if(!t)return;!o&&r&&XY(t,i,s,r);let a=t,c,l;for(;t.prev!==t.next;){if(c=t.prev,l=t.next,r?$Y(t,i,s,r):HY(t)){e.push(c.i/n),e.push(t.i/n),e.push(l.i/n),UY(t),t=l.next,a=l.next;continue}if(t=l,t===a){o?o===1?(t=kY(Yh(t),e,n),Lc(t,e,n,i,s,r,2)):o===2&&WY(t,e,n,i,s,r):Lc(Yh(t),e,n,i,s,r,1);break}}},HY=t=>{let e=t.prev,n=t,i=t.next;if(Vr(e,n,i)>=0)return!1;let s=t.next.next;for(;s!==t.prev;){if(Ic(e.x,e.y,n.x,n.y,i.x,i.y,s.x,s.y)&&Vr(s.prev,s,s.next)>=0)return!1;s=s.next}return!0},$Y=(t,e,n,i)=>{let s=t.prev,r=t,o=t.next;if(Vr(s,r,o)>=0)return!1;let a=s.x<r.x?s.x<o.x?s.x:o.x:r.x<o.x?r.x:o.x,c=s.y<r.y?s.y<o.y?s.y:o.y:r.y<o.y?r.y:o.y,l=s.x>r.x?s.x>o.x?s.x:o.x:r.x>o.x?r.x:o.x,u=s.y>r.y?s.y>o.y?s.y:o.y:r.y>o.y?r.y:o.y,f=mm(a,c,e,n,i),h=mm(l,u,e,n,i),d=t.prevZ,g=t.nextZ;for(;d&&d.z>=f&&g&&g.z<=h;){if(d!==t.prev&&d!==t.next&&Ic(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Vr(d.prev,d,d.next)>=0||(d=d.prevZ,g!==t.prev&&g!==t.next&&Ic(s.x,s.y,r.x,r.y,o.x,o.y,g.x,g.y)&&Vr(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;d&&d.z>=f;){if(d!==t.prev&&d!==t.next&&Ic(s.x,s.y,r.x,r.y,o.x,o.y,d.x,d.y)&&Vr(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;g&&g.z<=h;){if(g!==t.prev&&g!==t.next&&Ic(s.x,s.y,r.x,r.y,o.x,o.y,g.x,g.y)&&Vr(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0},WY=(t,e,n,i,s,r)=>{let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zY(o,a)){let c=VY(o,a);o=Yh(o,o.next),c=Yh(c,c.next),Lc(o,e,n,i,s,r),Lc(c,e,n,i,s,r);return}a=a.next}o=o.next}while(o!==t)},XY=(t,e,n,i)=>{let s=t;do s.z===null&&(s.z=mm(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,BY(s,r=>r.z)},mm=(t,e,n,i,s)=>(t=32767*(t-n)*s,e=32767*(e-i)*s,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1);o3.exports=GY});var l3=E((B2e,c3)=>{var{area:YY}=ko(),{toOutlines:ZY}=Ge(),{arePointsInside:jY}=Eh(),JY=t=>{let e=ZY(t),n=[],i=[];e.forEach((o,a)=>{let c=YY(o);c<0?i.push(a):c>0&&n.push(a)});let s=[],r=[];return n.forEach((o,a)=>{let c=e[o];s[a]=[],i.forEach((l,u)=>{let f=e[l];jY([f[0]],{vertices:c})&&(s[a].push(l),r[u]||(r[u]=[]),r[u].push(a))})}),i.forEach((o,a)=>{if(r[a]&&r[a].length>1){let c=KY(r[a],l=>s[l].length);r[a].forEach((l,u)=>{u!==c&&(s[l]=s[l].filter(f=>f!==o))})}}),s.map((o,a)=>({solid:e[n[a]],holes:o.map(c=>e[c])}))},KY=(t,e)=>{let n,i;return t.forEach((s,r)=>{let o=e(s);(i===void 0||o<i)&&(n=r,i=o)}),n};c3.exports=JY});var f3=E((k2e,h3)=>{var QY=Ge(),u3=Ai(),eZ=We(),hn=xe(),tZ=hm(),nZ=l3(),gm=class{constructor(e){this.plane=tZ(e);let n=hn.orthogonal(hn.create(),this.plane),i=hn.cross(hn.create(),this.plane,n);this.v=hn.normalize(i,i),this.u=hn.cross(hn.create(),this.v,this.plane),this.basisMap=new Map;let s=e.edges.map(o=>o.map(a=>this.to2D(a))),r=QY.create(s);this.roots=nZ(r)}to2D(e){let n=eZ.fromValues(hn.dot(e,this.u),hn.dot(e,this.v));return this.basisMap.set(n,e),n}to3D(e){let n=this.basisMap.get(e);if(n)return n;{console.log("Warning: point not in original slice");let i=hn.scale(hn.create(),this.u,e[0]),s=hn.scale(hn.create(),this.v,e[1]),r=hn.scale(hn.create(),u3,u3[3]),o=hn.add(i,i,r);return hn.add(s,s,o)}}};h3.exports=gm});var p3=E((z2e,d3)=>{var iZ=Je(),sZ=a3(),rZ=f3(),oZ=t=>{let e=new rZ(t),n=[];return e.roots.forEach(({solid:i,holes:s})=>{let r=i.length,o=[];s.forEach((f,h)=>{o.push(r),r+=f.length});let a=[i,...s].flat(),c=a.flat(),l=f=>e.to3D(a[f]),u=sZ(c,o);for(let f=0;f<u.length;f+=3){let h=u.slice(f,f+3).map(l);n.push(iZ.fromPointsAndPlane(h,e.plane))}}),n};d3.exports=oZ});var x3=E((q2e,g3)=>{var m3=xe(),aZ=t=>t.reduce((e,n)=>e+=`[${m3.toString(n[0])}, ${m3.toString(n[1])}], `,""),cZ=t=>`[${aZ(t.edges)}]`;g3.exports=cZ});var y3=E((V2e,v3)=>{var Zh=xe(),lZ=Ks(),uZ=(t,e)=>{let n=e.edges.map(i=>[Zh.transform(Zh.create(),i[0],t),Zh.transform(Zh.create(),i[1],t)]);return lZ(n)};v3.exports=uZ});var Gr=E((G2e,_3)=>{_3.exports={calculatePlane:hm(),clone:F5(),create:Ks(),equals:U5(),fromPoints:k5(),fromSides:q5(),isA:G5(),reverse:$5(),toEdges:X5(),toPolygons:p3(),toString:x3(),transform:y3()}});var E3=E((H2e,S3)=>{var b3=xe(),hZ=Ks(),fZ=t=>{if(!t.edges)return t;let e=t.edges,n=new Map,i=new Map;e=e.filter(o=>!b3.equals(o[0],o[1])),e.forEach(o=>{let a=o[0].toString(),c=o[1].toString();n.set(a,o[0]),n.set(c,o[1]),i.set(a,(i.get(a)||0)+1),i.set(c,(i.get(c)||0)-1)});let s=[],r=[];return i.forEach((o,a)=>{o<0&&s.push(a),o>0&&r.push(a)}),s.forEach(o=>{let a=n.get(o),c=1/0,l;r.forEach(u=>{let f=n.get(u),h=b3.distance(a,f);h<c&&(c=h,l=f)}),console.warn(`slice.repair: repairing vertex gap ${a} to ${l} distance ${c}`),e=e.map(u=>u[0].toString()===o?[l,u[1]]:u[1].toString()===o?[u[0],l]:u)}),hZ(e)};S3.exports=fZ});var R3=E(($2e,C3)=>{var{EPS:M3}=nt(),Yo=xe(),jh=Je(),A3=Gr(),xm=(t,e)=>t===e?t:t<e?xm(e,t):e===1?1:e===0?t:xm(e,t%e),dZ=(t,e)=>t*e/xm(t,e),w3=(t,e)=>{let n=t/e.length;if(n===1)return e;let i=Yo.fromValues(n,n,n),s=Yo.create(),r=[];return e.forEach(o=>{Yo.subtract(s,o[1],o[0]),Yo.divide(s,s,i);let a=o[0];for(let c=1;c<=n;++c){let l=Yo.add(Yo.create(),a,s);r.push([a,l]),a=l}}),r},T3=M3*M3/2*Math.sin(Math.PI/3),pZ=(t,e)=>{let n=A3.toEdges(t),i=A3.toEdges(e);if(n.length!==i.length){let r=dZ(n.length,i.length);r!==n.length&&(n=w3(r,n)),r!==i.length&&(i=w3(r,i))}let s=[];return n.forEach((r,o)=>{let a=i[o],c=jh.create([r[0],r[1],a[1]]),l=jh.measureArea(c);Number.isFinite(l)&&l>T3&&s.push(c);let u=jh.create([r[0],a[1],a[0]]),f=jh.measureArea(u);Number.isFinite(f)&&f>T3&&s.push(u)}),s};C3.exports=pZ});var Nc=E((W2e,L3)=>{var D3=yt(),P3=Ge(),mZ=Be(),vm=Je(),Qs=Gr(),gZ=E3(),I3=R3(),xZ=(t,e,n)=>{let i=null;return P3.isA(n)&&(i=Qs.fromSides(P3.toSides(n))),vm.isA(n)&&(i=Qs.fromPoints(vm.toPoints(n))),t===0||t===1?Qs.transform(D3.fromTranslation(D3.create(),[0,0,t]),i):null},vZ=(t,e)=>{let n={numberOfSlices:2,capStart:!0,capEnd:!0,close:!1,repair:!0,callback:xZ},{numberOfSlices:i,capStart:s,capEnd:r,close:o,repair:a,callback:c}=Object.assign({},n,t);if(i<2)throw new Error("numberOfSlices must be 2 or more");a&&(e=gZ(e));let l=i-1,u=null,f=null,h=null,d=[];for(let g=0;g<i;g++){let p=c(g/l,g,e);if(p){if(!Qs.isA(p))throw new Error("the callback function must return slice objects");if(Qs.toEdges(p).length===0)throw new Error("the callback function must return slices with one or more edges");if(h){let m=I3(h,p);for(let b=0;b<m.length;b++)d.push(m[b])}g===0&&(u=p),g===i-1&&(f=p),h=p}}if(r){let g=Qs.toPolygons(f);for(let p=0;p<g.length;p++)d.push(g[p])}if(s){let g=Qs.toPolygons(u).map(vm.invert);for(let p=0;p<g.length;p++)d.push(g[p])}if(!s&&!r&&o&&!Qs.equals(f,u)){let g=I3(f,u);for(let p=0;p<g.length;p++)d.push(g[p])}return mZ.create(d)};L3.exports=vZ});var _m=E((X2e,N3)=>{var{TAU:Qn}=nt(),Zo=yt(),{mirrorX:yZ}=Xo(),Jh=Ge(),ym=Gr(),_Z=Nc(),bZ=(t,e)=>{let n={segments:12,startAngle:0,angle:Qn,overflow:"cap"},{segments:i,startAngle:s,angle:r,overflow:o}=Object.assign({},n,t);if(i<3)throw new Error("segments must be greater then 3");s=Math.abs(s)>Qn?s%Qn:s,r=Math.abs(r)>Qn?r%Qn:r;let a=s+r;if(a=Math.abs(a)>Qn?a%Qn:a,a<s){let y=s;s=a,a=y}let c=a-s;if(c<=0&&(c=Qn),Math.abs(c)<Qn){let y=Qn/i;i=Math.floor(Math.abs(c)/y),Math.abs(c)>i*y&&i++}let l=Jh.toSides(e);if(l.length===0)throw new Error("the given geometry cannot be empty");let u=l.filter(y=>y[0][0]<0),f=l.filter(y=>y[0][0]>=0);u.length>0&&f.length>0&&o==="cap"&&(u.length>f.length?(l=l.map(y=>{let M=y[0],A=y[1];return M=[Math.min(M[0],0),M[1]],A=[Math.min(A[0],0),A[1]],[M,A]}),e=Jh.create(l),e=yZ(e)):f.length>=u.length&&(l=l.map(y=>{let M=y[0],A=y[1];return M=[Math.max(M[0],0),M[1]],A=[Math.max(A[0],0),A[1]],[M,A]}),e=Jh.create(l)));let d=c/i,g=Math.abs(c)<Qn,p=ym.fromSides(Jh.toSides(e));ym.reverse(p,p);let x=Zo.create(),m=Zo.fromXRotation(Zo.create(),Qn/4),b=Zo.create(),S=(y,M,A)=>{let w=d*M+s;return c===Qn&&M===i&&(w=s),Zo.fromZRotation(b,w),Zo.multiply(x,b,m),ym.transform(x,A)};return t={numberOfSlices:i+1,capStart:g,capEnd:g,close:!g,callback:S},_Z(t,p)};N3.exports=bZ});var jo=E((Y2e,k3)=>{var SZ=Ne(),F3=yt(),O3=Ge(),U3=Be(),B3=mt(),Kh=(t,...e)=>{if(!Array.isArray(t))throw new Error("angles must be an array");if(e=SZ(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);let n=t[2],i=t[1],s=t[0],r=F3.fromTaitBryanRotation(F3.create(),n,i,s),o=e.map(a=>B3.isA(a)?B3.transform(r,a):O3.isA(a)?O3.transform(r,a):U3.isA(a)?U3.transform(r,a):a);return o.length===1?o[0]:o},EZ=(t,...e)=>Kh([t,0,0],e),MZ=(t,...e)=>Kh([0,t,0],e),AZ=(t,...e)=>Kh([0,0,t],e);k3.exports={rotate:Kh,rotateX:EZ,rotateY:MZ,rotateZ:AZ}});var er=E((Z2e,H3)=>{var wZ=Ne(),z3=yt(),q3=Ge(),V3=Be(),G3=mt(),Qh=(t,...e)=>{if(!Array.isArray(t))throw new Error("offset must be an array");if(e=wZ(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(0);let n=z3.fromTranslation(z3.create(),t),i=e.map(s=>G3.isA(s)?G3.transform(n,s):q3.isA(s)?q3.transform(n,s):V3.isA(s)?V3.transform(n,s):s);return i.length===1?i[0]:i},TZ=(t,...e)=>Qh([t,0,0],e),CZ=(t,...e)=>Qh([0,t,0],e),RZ=(t,...e)=>Qh([0,0,t],e);H3.exports={translate:Qh,translateX:TZ,translateY:CZ,translateZ:RZ}});var W3=E((j2e,$3)=>{var{TAU:DZ}=nt(),PZ=_m(),{rotate:IZ}=jo(),{translate:LZ}=er(),NZ=nm(),{isGT:bm,isGTE:Sm}=jt(),FZ=t=>{let e={innerRadius:1,innerSegments:32,outerRadius:4,outerSegments:32,innerRotation:0,startAngle:0,outerRotation:DZ},{innerRadius:n,innerSegments:i,outerRadius:s,outerSegments:r,innerRotation:o,startAngle:a,outerRotation:c}=Object.assign({},e,t);if(!bm(n,0))throw new Error("innerRadius must be greater than zero");if(!Sm(i,3))throw new Error("innerSegments must be three or more");if(!bm(s,0))throw new Error("outerRadius must be greater than zero");if(!Sm(r,3))throw new Error("outerSegments must be three or more");if(!Sm(a,0))throw new Error("startAngle must be positive");if(!bm(c,0))throw new Error("outerRotation must be greater than zero");if(n>=s)throw new Error("inner circle is too large to rotate about the outer circle");let l=NZ({radius:n,segments:i});return o!==0&&(l=IZ([0,0,o],l)),l=LZ([s,0],l),PZ({startAngle:a,angle:c,segments:r},l)};$3.exports=FZ});var Y3=E((J2e,X3)=>{var{NEPS:Jo}=nt(),Fc=We(),OZ=Ge(),{isNumberArray:UZ}=jt(),Em=(t,e,n)=>Math.acos((t*t+e*e-n*n)/(2*t*e)),BZ=(t,e,n)=>e>Jo?Math.sqrt(t*t+n*n-2*t*n*Math.cos(e)):Math.sqrt((t-n)*(t-n)+t*n*e*e*(1-e*e/12)),kZ=t=>{if(Math.abs(t[0]+t[1]+t[2]-Math.PI)>Jo)throw new Error("AAA triangles require angles that sum to PI");let n=t[0],i=t[1],s=Math.PI-n-i,r=1,o=r/Math.sin(s)*Math.sin(n),a=r/Math.sin(s)*Math.sin(i);return Ko(n,i,s,o,a,r)},zZ=t=>{let e=t[0],n=t[1],i=Math.PI+Jo-e-n;if(i<Jo)throw new Error("AAS triangles require angles that sum to PI");let s=t[2],r=s/Math.sin(e)*Math.sin(n),o=s/Math.sin(e)*Math.sin(i);return Ko(e,n,i,s,r,o)},qZ=t=>{let e=t[0],n=t[2],i=Math.PI+Jo-e-n;if(i<Jo)throw new Error("ASA triangles require angles that sum to PI");let s=t[1],r=s/Math.sin(i)*Math.sin(e),o=s/Math.sin(i)*Math.sin(n);return Ko(e,n,i,r,o,s)},VZ=t=>{let e=t[0],n=t[1],i=t[2],s=BZ(e,n,i),r=Em(s,e,i),o=Math.PI-r-n;return Ko(r,n,o,i,s,e)},GZ=t=>{let e=t[0],n=t[1],i=t[2],s=Math.asin(n*Math.sin(i)/e),r=Math.PI-s-i,o=e/Math.sin(i)*Math.sin(r);return Ko(s,r,i,n,o,e)},HZ=t=>{let e=t[1],n=t[2],i=t[0];if(e+n<=i||n+i<=e||i+e<=n)throw new Error("SSS triangle is incorrect, as the longest side is longer than the sum of the other sides");let s=Em(n,i,e),r=Em(i,e,n),o=Math.PI-s-r;return Ko(s,r,o,e,n,i)},Ko=(t,e,n,i,s,r)=>{let o=Fc.fromValues(0,0),a=Fc.fromValues(r,0),c=Fc.fromValues(i,0);return Fc.add(c,Fc.rotate(c,c,[0,0],Math.PI-e),a),OZ.fromPoints([o,a,c])},$Z=t=>{let e={type:"SSS",values:[1,1,1]},{type:n,values:i}=Object.assign({},e,t);if(typeof n!="string")throw new Error("triangle type must be a string");if(n=n.toUpperCase(),!((n[0]==="A"||n[0]==="S")&&(n[1]==="A"||n[1]==="S")&&(n[2]==="A"||n[2]==="S")))throw new Error("triangle type must contain three letters; A or S");if(!UZ(i,3))throw new Error("triangle values must contain three values");if(!i.every(s=>s>0))throw new Error("triangle values must be greater than zero");switch(n){case"AAA":return kZ(i);case"AAS":return zZ(i);case"ASA":return qZ(i);case"SAS":return VZ(i);case"SSA":return GZ(i);case"SSS":return HZ(i);default:throw new Error("invalid triangle type, try again")}};X3.exports=$Z});var j3=E((K2e,Z3)=>{Z3.exports={arc:mT(),circle:nm(),cube:AT(),cuboid:Lh(),cylinder:om(),cylinderElliptic:rm(),ellipse:tm(),ellipsoid:am(),geodesicSphere:GT(),line:$T(),polygon:XT(),polyhedron:cm(),rectangle:Fh(),roundedCuboid:s5(),roundedCylinder:u5(),roundedRectangle:g5(),sphere:um(),square:y5(),star:E5(),torus:W3(),triangle:Y3()}});var K3=E((Q2e,J3)=>{J3.exports={height:14,32:[16],33:[10,5,21,5,7,void 0,5,2,4,1,5,0,6,1,5,2],34:[16,4,21,4,14,void 0,12,21,12,14],35:[21,11,25,4,-7,void 0,17,25,10,-7,void 0,4,12,18,12,void 0,3,6,17,6],36:[20,8,25,8,-4,void 0,12,25,12,-4,void 0,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],37:[24,21,21,3,0,void 0,8,21,10,19,10,17,9,15,7,14,5,14,3,16,3,18,4,20,6,21,8,21,10,20,13,19,16,19,19,20,21,21,void 0,17,7,15,6,14,4,14,2,16,0,18,0,20,1,21,3,21,5,19,7,17,7],38:[26,23,12,23,13,22,14,21,14,20,13,19,11,17,6,15,3,13,1,11,0,7,0,5,1,4,2,3,4,3,6,4,8,5,9,12,13,13,14,14,16,14,18,13,20,11,21,9,20,8,18,8,16,9,13,11,10,16,3,18,1,20,0,22,0,23,1,23,2],39:[10,5,19,4,20,5,21,6,20,6,18,5,16,4,15],40:[14,11,25,9,23,7,20,5,16,4,11,4,7,5,2,7,-2,9,-5,11,-7],41:[14,3,25,5,23,7,20,9,16,10,11,10,7,9,2,7,-2,5,-5,3,-7],42:[16,8,21,8,9,void 0,3,18,13,12,void 0,13,18,3,12],43:[26,13,18,13,0,void 0,4,9,22,9],44:[10,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],45:[26,4,9,22,9],46:[10,5,2,4,1,5,0,6,1,5,2],47:[22,20,25,2,-7],48:[20,9,21,6,20,4,17,3,12,3,9,4,4,6,1,9,0,11,0,14,1,16,4,17,9,17,12,16,17,14,20,11,21,9,21],49:[20,6,17,8,18,11,21,11,0],50:[20,4,16,4,17,5,19,6,20,8,21,12,21,14,20,15,19,16,17,16,15,15,13,13,10,3,0,17,0],51:[20,5,21,16,21,10,13,13,13,15,12,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],52:[20,13,21,3,7,18,7,void 0,13,21,13,0],53:[20,15,21,5,21,4,12,5,13,8,14,11,14,14,13,16,11,17,8,17,6,16,3,14,1,11,0,8,0,5,1,4,2,3,4],54:[20,16,18,15,20,12,21,10,21,7,20,5,17,4,12,4,7,5,3,7,1,10,0,11,0,14,1,16,3,17,6,17,7,16,10,14,12,11,13,10,13,7,12,5,10,4,7],55:[20,17,21,7,0,void 0,3,21,17,21],56:[20,8,21,5,20,4,18,4,16,5,14,7,13,11,12,14,11,16,9,17,7,17,4,16,2,15,1,12,0,8,0,5,1,4,2,3,4,3,7,4,9,6,11,9,12,13,13,15,14,16,16,16,18,15,20,12,21,8,21],57:[20,16,14,15,11,13,9,10,8,9,8,6,9,4,11,3,14,3,15,4,18,6,20,9,21,10,21,13,20,15,18,16,14,16,9,15,4,13,1,10,0,8,0,5,1,4,3],58:[10,5,14,4,13,5,12,6,13,5,14,void 0,5,2,4,1,5,0,6,1,5,2],59:[10,5,14,4,13,5,12,6,13,5,14,void 0,6,1,5,0,4,1,5,2,6,1,6,-1,5,-3,4,-4],60:[24,20,18,4,9,20,0],61:[26,4,12,22,12,void 0,4,6,22,6],62:[24,4,18,20,9,4,0],63:[18,3,16,3,17,4,19,5,20,7,21,11,21,13,20,14,19,15,17,15,15,14,13,13,12,9,10,9,7,void 0,9,2,8,1,9,0,10,1,9,2],64:[27,18,13,17,15,15,16,12,16,10,15,9,14,8,11,8,8,9,6,11,5,14,5,16,6,17,8,void 0,12,16,10,14,9,11,9,8,10,6,11,5,void 0,18,16,17,8,17,6,19,5,21,5,23,7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12,21,9,20,7,19,5,17,4,15,3,12,3,9,4,6,5,4,7,2,9,1,12,0,15,0,18,1,20,2,21,3,void 0,19,16,18,8,18,6,19,5],65:[18,9,21,1,0,void 0,9,21,17,0,void 0,4,7,14,7],66:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,void 0,4,11,13,11,16,10,17,9,18,7,18,4,17,2,16,1,13,0,4,0],67:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5],68:[21,4,21,4,0,void 0,4,21,11,21,14,20,16,18,17,16,18,13,18,8,17,5,16,3,14,1,11,0,4,0],69:[19,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11,void 0,4,0,17,0],70:[18,4,21,4,0,void 0,4,21,17,21,void 0,4,11,12,11],71:[21,18,16,17,18,15,20,13,21,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,18,8,void 0,13,8,18,8],72:[22,4,21,4,0,void 0,18,21,18,0,void 0,4,11,18,11],73:[8,4,21,4,0],74:[16,12,21,12,5,11,2,10,1,8,0,6,0,4,1,3,2,2,5,2,7],75:[21,4,21,4,0,void 0,18,21,4,7,void 0,9,12,18,0],76:[17,4,21,4,0,void 0,4,0,16,0],77:[24,4,21,4,0,void 0,4,21,12,0,void 0,20,21,12,0,void 0,20,21,20,0],78:[22,4,21,4,0,void 0,4,21,18,0,void 0,18,21,18,0],79:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21],80:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13,10,4,10],81:[22,9,21,7,20,5,18,4,16,3,13,3,8,4,5,5,3,7,1,9,0,13,0,15,1,17,3,18,5,19,8,19,13,18,16,17,18,15,20,13,21,9,21,void 0,12,4,18,-2],82:[21,4,21,4,0,void 0,4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13,11,4,11,void 0,11,11,18,0],83:[20,17,18,15,20,12,21,8,21,5,20,3,18,3,16,4,14,5,13,7,12,13,10,15,9,16,8,17,6,17,3,15,1,12,0,8,0,5,1,3,3],84:[16,8,21,8,0,void 0,1,21,15,21],85:[22,4,21,4,6,5,3,7,1,10,0,12,0,15,1,17,3,18,6,18,21],86:[18,1,21,9,0,void 0,17,21,9,0],87:[24,2,21,7,0,void 0,12,21,7,0,void 0,12,21,17,0,void 0,22,21,17,0],88:[20,3,21,17,0,void 0,17,21,3,0],89:[18,1,21,9,11,9,0,void 0,17,21,9,11],90:[20,17,21,3,0,void 0,3,21,17,21,void 0,3,0,17,0],91:[14,4,25,4,-7,void 0,5,25,5,-7,void 0,4,25,11,25,void 0,4,-7,11,-7],92:[14,0,21,14,-3],93:[14,9,25,9,-7,void 0,10,25,10,-7,void 0,3,25,10,25,void 0,3,-7,10,-7],94:[16,6,15,8,18,10,15,void 0,3,12,8,17,13,12,void 0,8,17,8,0],95:[16,0,-2,16,-2],96:[10,6,21,5,20,4,18,4,16,5,15,6,16,5,17],97:[19,15,14,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],98:[19,4,21,4,0,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],99:[18,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],100:[19,15,21,15,0,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],101:[18,3,8,15,8,15,10,14,12,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],102:[12,10,21,8,21,6,20,5,17,5,0,void 0,2,14,9,14],103:[19,15,14,15,-2,14,-5,13,-6,11,-7,8,-7,6,-6,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],104:[19,4,21,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],105:[8,3,21,4,20,5,21,4,22,3,21,void 0,4,14,4,0],106:[10,5,21,6,20,7,21,6,22,5,21,void 0,6,14,6,-3,5,-6,3,-7,1,-7],107:[17,4,21,4,0,void 0,14,14,4,4,void 0,8,8,15,0],108:[8,4,21,4,0],109:[30,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0,void 0,15,10,18,13,20,14,23,14,25,13,26,10,26,0],110:[19,4,14,4,0,void 0,4,10,7,13,9,14,12,14,14,13,15,10,15,0],111:[19,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3,16,6,16,8,15,11,13,13,11,14,8,14],112:[19,4,14,4,-7,void 0,4,11,6,13,8,14,11,14,13,13,15,11,16,8,16,6,15,3,13,1,11,0,8,0,6,1,4,3],113:[19,15,14,15,-7,void 0,15,11,13,13,11,14,8,14,6,13,4,11,3,8,3,6,4,3,6,1,8,0,11,0,13,1,15,3],114:[13,4,14,4,0,void 0,4,8,5,11,7,13,9,14,12,14],115:[17,14,11,13,13,10,14,7,14,4,13,3,11,4,9,6,8,11,7,13,6,14,4,14,3,13,1,10,0,7,0,4,1,3,3],116:[12,5,21,5,4,6,1,8,0,10,0,void 0,2,14,9,14],117:[19,4,14,4,4,5,1,7,0,10,0,12,1,15,4,void 0,15,14,15,0],118:[16,2,14,8,0,void 0,14,14,8,0],119:[22,3,14,7,0,void 0,11,14,7,0,void 0,11,14,15,0,void 0,19,14,15,0],120:[17,3,14,14,0,void 0,14,14,3,0],121:[16,2,14,8,0,void 0,14,14,8,0,6,-4,4,-6,2,-7,1,-7],122:[17,14,14,3,0,void 0,3,14,14,14,void 0,3,0,14,0],123:[14,9,25,7,24,6,23,5,21,5,19,6,17,7,16,8,14,8,12,6,10,void 0,7,24,6,22,6,20,7,18,8,17,9,15,9,13,8,11,4,9,8,7,9,5,9,3,8,1,7,0,6,-2,6,-4,7,-6,void 0,6,8,8,6,8,4,7,2,6,1,5,-1,5,-3,6,-5,7,-6,9,-7],124:[8,4,25,4,-7],125:[14,5,25,7,24,8,23,9,21,9,19,8,17,7,16,6,14,6,12,8,10,void 0,7,24,8,22,8,20,7,18,6,17,5,15,5,13,6,11,10,9,6,7,5,5,5,3,6,1,7,0,8,-2,8,-4,7,-6,void 0,8,8,6,6,6,4,7,2,8,1,9,-1,9,-3,8,-5,7,-6,5,-7],126:[24,3,6,3,8,4,11,6,12,8,12,10,11,14,8,16,7,18,7,20,8,21,10,void 0,3,8,4,10,6,11,8,11,10,10,14,7,16,6,18,6,20,7,21,10,21,12]}});var Mm=E((eye,Q3)=>{var WZ=K3(),XZ={xOffset:0,yOffset:0,input:"?",align:"left",font:WZ,height:14,lineSpacing:2.142857142857143,letterSpacing:1,extrudeOffset:0},YZ=(t,e)=>{!e&&typeof t=="string"&&(t={input:t}),t=t||{};let n=Object.assign({},XZ,t);return n.input=e||n.input,n};Q3.exports=YZ});var Am=E((tye,eC)=>{var ZZ=Mm(),jZ=(t,e)=>{let{xOffset:n,yOffset:i,input:s,font:r,height:o,extrudeOffset:a}=ZZ(t,e),c=s.charCodeAt(0);(!c||!r[c])&&(c=63);let l=[].concat(r[c]),u=(o-a)/r.height,f=a/2,h=l.shift()*u,d=[],g=[];for(let p=0,x=l.length;p<x;p+=2){let m=u*l[p]+n,b=u*l[p+1]+i+f;if(l[p]!==void 0){g.push([m,b]);continue}d.push(g),g=[],p--}return g.length&&d.push(g),{width:h,height:o,segments:d}};eC.exports=jZ});var iC=E((nye,nC)=>{var JZ=Am(),KZ=Mm(),tC=(t,e)=>{let{x:n,y:i}=Object.assign({x:0,y:0},t||{}),s=e.segments,r=null,o=null;for(let a=0,c=s.length;a<c;a++){r=s[a];for(let l=0,u=r.length;l<u;l++)o=r[l],r[l]=[o[0]+n,o[1]+i]}return e},QZ=(t,e)=>{let{xOffset:n,yOffset:i,input:s,font:r,height:o,align:a,extrudeOffset:c,lineSpacing:l,letterSpacing:u}=KZ(t,e),[f,h]=[n,i],d,g,p,x,m,b,S={width:0,segments:[]},y=[],M=[],A=0,w=f,T=()=>{y.push(S),A=Math.max(A,S.width),S={width:0,segments:[]}};for(d=0,g=s.length;d<g;d++){if(p=s[d],x=JZ({xOffset:f,yOffset:h,font:r,height:o,extrudeOffset:c},p),p===`
`){f=w,h-=x.height*l,T();continue}m=x.width*u,S.width+=m,f+=m,p!==" "&&(S.segments=S.segments.concat(x.segments))}for(S.segments.length&&T(),d=0,g=y.length;d<g;d++)S=y[d],A>S.width&&(b=A-S.width,a==="right"?S=tC({x:b},S):a==="center"&&(S=tC({x:b/2},S))),M=M.concat(S.segments);return M};nC.exports=QZ});var rC=E((iye,sC)=>{sC.exports={vectorChar:Am(),vectorText:iC()}});var Qo=E((sye,oC)=>{var ej=Ge(),tj=Be(),nj=mt(),ij=t=>{let e;for(let n of t){let i=0;if(ej.isA(n)&&(i=1),tj.isA(n)&&(i=2),nj.isA(n)&&(i=3),e&&i!==e)return!1;e=i}return!0};oC.exports=ij});var cC=E((rye,aC)=>{var sj=t=>t*.017453292519943295;aC.exports=sj});var wm=E((oye,lC)=>{var rj=(t,e)=>t-e;lC.exports=rj});var hC=E((aye,uC)=>{var oj=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){let r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}t.splice(i,0,e)};uC.exports=oj});var pC=E((cye,dC)=>{var{TAU:fC}=nt(),aj=(t,e,n)=>{let i=e>0?t*fC/e:0,s=n>0?fC/n:0;return Math.ceil(Math.max(i,s,4))};dC.exports=aj});var gC=E((lye,mC)=>{var cj=t=>t*57.29577951308232;mC.exports=cj});var Tm=E((uye,xC)=>{xC.exports={areAllShapesTheSameType:Qo(),degToRad:cC(),flatten:Ne(),fnNumberSort:wm(),insertSorted:hC(),radiusToSegments:pC(),radToDeg:gC()}});var ef=E((hye,yC)=>{var vC=We(),lj=Ge(),uj=(t,e)=>{if(e.vertices.length<4)return null;let n=[],i=e.vertices.filter((o,a)=>o[2]>0?(n.push(a),!0):!1);if(i.length!==2)throw new Error("Assertion failed: fromFakePolygon: not enough points found");let s=i.map(o=>{let a=Math.round(o[0]/t)*t+0,c=Math.round(o[1]/t)*t+0;return vC.fromValues(a,c)});if(vC.equals(s[0],s[1]))return null;let r=n[1]-n[0];if(r===1||r===3)r===1&&s.reverse();else throw new Error("Assertion failed: fromFakePolygon: unknown index ordering");return s},hj=(t,e)=>{let n=e.map(i=>uj(t,i)).filter(i=>i!==null);return lj.create(n)};yC.exports=hj});var tf=E((fye,_C)=>{var tr=xe(),fj=Ge(),dj=Be(),pj=Je(),mj=(t,e,n)=>{let i=[tr.fromVec2(tr.create(),n[0],t),tr.fromVec2(tr.create(),n[1],t),tr.fromVec2(tr.create(),n[1],e),tr.fromVec2(tr.create(),n[0],e)];return pj.create(i)},gj=(t,e)=>{let i=fj.toSides(e).map(r=>mj(t.z0,t.z1,r));return dj.create(i)};_C.exports=gj});var MC=E((dye,EC)=>{var bC=yt(),xj=We(),Jt=xe(),SC=function(t,e){arguments.length<2&&(e=Jt.orthogonal(Jt.create(),t)),this.v=Jt.normalize(Jt.create(),Jt.cross(Jt.create(),t,e)),this.u=Jt.cross(Jt.create(),this.v,t),this.plane=t,this.planeorigin=Jt.scale(Jt.create(),t,t[3])};SC.prototype={getProjectionMatrix:function(){return bC.fromValues(this.u[0],this.v[0],this.plane[0],0,this.u[1],this.v[1],this.plane[1],0,this.u[2],this.v[2],this.plane[2],0,0,0,-this.plane[3],1)},getInverseProjectionMatrix:function(){let t=Jt.scale(Jt.create(),this.plane,this.plane[3]);return bC.fromValues(this.u[0],this.u[1],this.u[2],0,this.v[0],this.v[1],this.v[2],0,this.plane[0],this.plane[1],this.plane[2],0,t[0],t[1],t[2],1)},to2D:function(t){return xj.fromValues(Jt.dot(t,this.u),Jt.dot(t,this.v))},to3D:function(t){let e=Jt.scale(Jt.create(),this.u,t[0]),n=Jt.scale(Jt.create(),this.v,t[1]),i=Jt.add(e,e,this.planeorigin);return Jt.add(n,n,i)}};EC.exports=SC});var TC=E((pye,wC)=>{var{EPS:bs}=nt(),nr=Ch(),wi=We(),vj=MC(),ea=z0(),{insertSorted:yj,fnNumberSort:_j}=Tm(),AC=Je(),bj=t=>{if(t.length<2)return t;let e=[],n=t.length,i=AC.plane(t[0]),s=new vj(i),r=[],o=[],a=new Map,c=new Map,l=new Map,u=10/bs;for(let g=0;g<n;g++){let p=t[g],x=[],m=p.vertices.length,b=-1;if(m>0){let S,y;for(let M=0;M<m;M++){let A=s.to2D(p.vertices[M]),w=Math.floor(A[1]*u),T;l.has(w)?T=l.get(w):l.has(w+1)?T=l.get(w+1):l.has(w-1)?T=l.get(w-1):(T=A[1],l.set(w,A[1])),A=wi.fromValues(A[0],T),x.push(A);let v=A[1];(M===0||v<S)&&(S=v,b=M),(M===0||v>y)&&(y=v);let _=c.get(v);_||(_={},c.set(v,_)),_[g]=!0}if(S>=y)x=[],m=0,b=-1;else{let M=a.get(S);M||(M=[],a.set(S,M)),M.push(g)}}x.reverse(),b=m-b-1,r.push(x),o.push(b)}let f=[];c.forEach((g,p)=>f.push(p)),f.sort(_j);let h=[],d=[];for(let g=0;g<f.length;g++){let p=[],x=f[g],m=c.get(x),b=0;for(let y=0;y<h.length;++y){let M=h[y],A=M.polygonindex;if(m[A]){let w=r[A],T=w.length,v=M.leftvertexindex,_=M.rightvertexindex;for(;;){let D=v+1;if(D>=T&&(D=0),w[D][1]!==x)break;v=D}let R=_-1;if(R<0&&(R=T-1),w[R][1]===x&&(_=R),v!==M.leftvertexindex&&v===_)M._remove=!0,b++;else{M.leftvertexindex=v,M.rightvertexindex=_,M.topleft=w[v],M.topright=w[_];let D=v+1;D>=T&&(D=0),M.bottomleft=w[D];let L=_-1;L<0&&(L=T-1),M.bottomright=w[L]}}}b>0&&(h=h.filter(y=>!y._remove));let S;if(g>=f.length-1)h=[],S=null;else{S=Number(f[g+1]);let y=.5*(x+S),M=a.get(x);for(let A in M){let w=M[A],T=r[w],v=T.length,_=o[w],R=_;for(;;){let F=R+1;if(F>=v&&(F=0),T[F][1]!==x||F===_)break;R=F}let D=_;for(;;){let F=D-1;if(F<0&&(F=v-1),T[F][1]!==x||F===R)break;D=F}let L=R+1;L>=v&&(L=0);let N=D-1;N<0&&(N=v-1);let B={polygonindex:w,leftvertexindex:R,rightvertexindex:D,topleft:T[R],topright:T[D],bottomleft:T[L],bottomright:T[N]};yj(h,B,(F,W)=>{let V=ea(F.topleft,F.bottomleft,y),K=ea(W.topleft,W.bottomleft,y);return V>K?1:V<K?-1:0})}}for(let y in h){let M=h[y],A=ea(M.topleft,M.bottomleft,x),w=wi.fromValues(A,x);A=ea(M.topright,M.bottomright,x);let T=wi.fromValues(A,x);A=ea(M.topleft,M.bottomleft,S);let v=wi.fromValues(A,S);A=ea(M.topright,M.bottomright,S);let _=wi.fromValues(A,S),R={topleft:w,topright:T,bottomleft:v,bottomright:_,leftline:nr.fromPoints(nr.create(),w,v),rightline:nr.fromPoints(nr.create(),_,T)};if(p.length>0){let D=p[p.length-1],L=wi.distance(R.topleft,D.topright),N=wi.distance(R.bottomleft,D.bottomright);L<bs&&N<bs&&(R.topleft=D.topleft,R.leftline=D.leftline,R.bottomleft=D.bottomleft,p.splice(p.length-1,1))}p.push(R)}if(g>0){let y=new Set,M=new Set;for(let A=0;A<p.length;A++){let w=p[A];for(let T=0;T<d.length;T++)if(!M.has(T)){let v=d[T];if(wi.distance(v.bottomleft,w.topleft)<bs&&wi.distance(v.bottomright,w.topright)<bs){M.add(T);let _=nr.direction(w.leftline),R=nr.direction(v.leftline),D=_[0]-R[0],L=nr.direction(w.rightline),N=nr.direction(v.rightline),B=L[0]-N[0],F=Math.abs(D)<bs,W=Math.abs(B)<bs,V=F||D>=0,K=W||B>=0;V&&K&&(w.outpolygon=v.outpolygon,w.leftlinecontinues=F,w.rightlinecontinues=W,y.add(T));break}}}for(let A=0;A<d.length;A++)if(!y.has(A)){let w=d[A];w.outpolygon.rightpoints.push(w.bottomright),wi.distance(w.bottomright,w.bottomleft)>bs&&w.outpolygon.leftpoints.push(w.bottomleft),w.outpolygon.leftpoints.reverse();let v=w.outpolygon.rightpoints.concat(w.outpolygon.leftpoints).map(R=>s.to3D(R)),_=AC.fromPointsAndPlane(v,i);_.vertices.length&&e.push(_)}}for(let y=0;y<p.length;y++){let M=p[y];M.outpolygon?(M.leftlinecontinues||M.outpolygon.leftpoints.push(M.topleft),M.rightlinecontinues||M.outpolygon.rightpoints.push(M.topright)):(M.outpolygon={leftpoints:[],rightpoints:[]},M.outpolygon.leftpoints.push(M.topleft),wi.distance(M.topleft,M.topright)>bs&&M.outpolygon.rightpoints.push(M.topright))}d=p}return e};wC.exports=bj});var ta=E((mye,RC)=>{var CC=Be(),Sj=Je(),{NEPS:Ej}=nt(),Mj=TC(),Aj=t=>{if(t.isRetesselated)return t;let e=CC.toPolygons(t).map((r,o)=>({vertices:r.vertices,plane:Sj.plane(r),index:o})),n=wj(e),i=[];n.forEach(r=>{if(Array.isArray(r)){let o=Mj(r);for(let a=0;a<o.length;a++)i.push(o[a])}else i.push(r)});let s=CC.create(i);return s.isRetesselated=!0,s},wj=t=>{let e=[t],n=[];for(let s=3;s>=0;s--){let r=[],o=s===3?15e-9:Ej;e.forEach(a=>{a.sort(Tj(s,o));let c=0;for(let l=1;l<a.length;l++)a[l].plane[s]-a[c].plane[s]>o&&(l-c===1?n.push(a[c]):r.push(a.slice(c,l)),c=l);a.length-c===1?n.push(a[c]):r.push(a.slice(c))}),e=r}let i=[];return e.forEach(s=>{s[0]&&(i[s[0].index]=s)}),n.forEach(s=>{i[s.index]=s}),i},Tj=(t,e)=>(n,i)=>n.plane[t]-i.plane[t]>e?1:i.plane[t]-n.plane[t]>e?-1:0;RC.exports=Aj});var nf=E((gye,PC)=>{var{EPS:na}=nt(),DC=Ys(),Cj=(t,e)=>{if(t.polygons.length===0||e.polygons.length===0)return!1;let n=DC(t),i=n[0],s=n[1],r=DC(e),o=r[0],a=r[1];return!(o[0]-s[0]>na||i[0]-a[0]>na||o[1]-s[1]>na||i[1]-a[1]>na||o[2]-s[2]>na||i[2]-a[2]>na)};PC.exports=Cj});var NC=E((xye,LC)=>{var IC=Ai(),Rj=Je(),Cm=class t{constructor(e){this.plane=null,this.front=null,this.back=null,this.polygontreenodes=[],this.parent=e}invert(){let e=[this],n;for(let i=0;i<e.length;i++){n=e[i],n.plane&&(n.plane=IC.flip(IC.create(),n.plane)),n.front&&e.push(n.front),n.back&&e.push(n.back);let s=n.front;n.front=n.back,n.back=s}}clipPolygons(e,n){let i={node:this,polygontreenodes:e},s,r=[];do{if(s=i.node,e=i.polygontreenodes,s.plane){let o=s.plane,a=[],c=[],l=n?a:c,u=e.length;for(let h=0;h<u;h++){let d=e[h];d.isRemoved()||d.splitByPlane(o,l,a,c,a)}s.front&&c.length>0&&r.push({node:s.front,polygontreenodes:c});let f=a.length;if(s.back&&f>0)r.push({node:s.back,polygontreenodes:a});else for(let h=0;h<f;h++)a[h].remove()}i=r.pop()}while(i!==void 0)}clipTo(e,n){let i=this,s=[];do i.polygontreenodes.length>0&&e.rootnode.clipPolygons(i.polygontreenodes,n),i.front&&s.push(i.front),i.back&&s.push(i.back),i=s.pop();while(i!==void 0)}addPolygonTreeNodes(e){let n={node:this,polygontreenodes:e},i=[];do{let s=n.node,r=n.polygontreenodes;if(r.length===0){n=i.pop();continue}if(!s.plane){let l=0;l=Math.floor(r.length/2);let u=r[l].getPolygon();s.plane=Rj.plane(u)}let o=[],a=[],c=r.length;for(let l=0;l<c;++l)r[l].splitByPlane(s.plane,s.polygontreenodes,a,o,a);o.length>0&&(s.front||(s.front=new t(s)),c===o.length&&a.length===0?s.front.polygontreenodes=o:i.push({node:s.front,polygontreenodes:o})),a.length>0&&(s.back||(s.back=new t(s)),c===a.length&&o.length===0?s.back.polygontreenodes=a:i.push({node:s.back,polygontreenodes:a})),n=i.pop()}while(n!==void 0)}};LC.exports=Cm});var OC=E((vye,FC)=>{var ia=xe(),Dj=(t,e,n)=>{let i=ia.subtract(ia.create(),n,e),s=(t[3]-ia.dot(t,e))/ia.dot(t,i);return Number.isNaN(s)&&(s=0),s>1&&(s=1),s<0&&(s=0),ia.scale(i,i,s),ia.add(i,e,i),i};FC.exports=Dj});var kC=E((yye,BC)=>{var{EPS:sf}=nt(),Pj=Ai(),Dm=xe(),Rm=Je(),Ij=OC(),Lj=sf*sf,UC=t=>{let e=[],n=t[t.length-1];for(let i=0;i<t.length;i++){let s=t[i];Dm.squaredDistance(s,n)>=Lj&&e.push(s),n=s}return e},Nj=(t,e)=>{let n={type:null,front:null,back:null},i=e.vertices,s=i.length,r=Rm.plane(e);if(Pj.equals(r,t))n.type=0;else{let o=!1,a=!1,c=[],l=-sf;for(let u=0;u<s;u++){let f=Dm.dot(t,i[u])-t[3],h=f<l;c.push(h),f>sf&&(o=!0),f<l&&(a=!0)}if(!o&&!a){let u=Dm.dot(t,r);n.type=u>=0?0:1}else if(!a)n.type=2;else if(!o)n.type=3;else{n.type=4;let u=[],f=[],h=c[0];for(let d=0;d<s;d++){let g=i[d],p=d+1;p>=s&&(p=0);let x=c[p];if(h===x)h?f.push(g):u.push(g);else{let m=i[p],b=Ij(t,g,m);h?(f.push(g),f.push(b),u.push(b)):(u.push(g),u.push(b),f.push(b))}h=x}if(u.length>=3){let d=UC(u);d.length>=3&&(n.front=Rm.fromPointsAndPlane(d,r))}if(f.length>=3){let d=UC(f);d.length>=3&&(n.back=Rm.fromPointsAndPlane(d,r))}}}return n};BC.exports=Nj});var VC=E((_ye,qC)=>{var{EPS:Fj}=nt(),Oj=xe(),zC=Je(),Uj=kC(),Pm=class t{constructor(e,n){this.parent=e,this.children=[],this.polygon=n,this.removed=!1}addPolygons(e){if(!this.isRootNode())throw new Error("Assertion failed");let n=this;e.forEach(i=>{n.addChild(i)})}remove(){this.removed||(this.removed=!0,this.polygon=null,this.parent.recursivelyInvalidatePolygon())}isRemoved(){return this.removed}isRootNode(){return!this.parent}invert(){if(!this.isRootNode())throw new Error("Assertion failed");this.invertSub()}getPolygon(){if(!this.polygon)throw new Error("Assertion failed");return this.polygon}getPolygons(e){if(this.isRootNode()&&this.children.length>0){let c=[];for(let l=0;l<this.children.length;l++)this.children[l].removed||c.push(this.children[l]);this.children=c}let n=[this],i=[n],s,r,o,a;for(s=0;s<i.length;++s)for(n=i[s],r=0,o=n.length;r<o;r++)a=n[r],a.polygon?e.push(a.polygon):a.children.length>0&&i.push(a.children)}splitByPlane(e,n,i,s,r){if(this.children.length){let o=[this.children],a,c,l,u,f;for(a=0;a<o.length;a++)for(f=o[a],c=0,l=f.length;c<l;c++)u=f[c],u.children.length>0?o.push(u.children):u._splitByPlane(e,n,i,s,r)}else this._splitByPlane(e,n,i,s,r)}_splitByPlane(e,n,i,s,r){let o=this.polygon;if(o){let a=zC.measureBoundingSphere(o),c=a[3]+Fj,l=a,u=Oj.dot(e,l)-e[3];if(u>c)s.push(this);else if(u<-c)r.push(this);else{let f=Uj(e,o);switch(f.type){case 0:n.push(this);break;case 1:i.push(this);break;case 2:s.push(this);break;case 3:r.push(this);break;case 4:if(f.front){let h=this.addChild(f.front);s.push(h)}if(f.back){let h=this.addChild(f.back);r.push(h)}break}}}}addChild(e){let n=new t(this,e);return this.children.push(n),n}invertSub(){let e=[this],n=[e],i,s,r,o;for(i=0;i<n.length;i++)for(e=n[i],s=0,r=e.length;s<r;s++)o=e[s],o.polygon&&(o.polygon=zC.invert(o.polygon)),o.children.length>0&&n.push(o.children)}recursivelyInvalidatePolygon(){this.polygon=null,this.parent&&this.parent.recursivelyInvalidatePolygon()}clear(){let e=[this],n=[e];for(let i=0;i<n.length;++i){e=n[i];let s=e.length;for(let r=0;r<s;r++){let o=e[r];o.polygon&&(o.polygon=null),o.parent&&(o.parent=null),o.children.length>0&&n.push(o.children),o.children=[]}}}toString(){let e="",n=[this],i=[n],s,r,o,a;for(s=0;s<i.length;++s){n=i[s];let c=" ".repeat(s);for(r=0,o=n.length;r<o;r++)a=n[r],e+=`${c}PolygonTreeNode (${a.isRootNode()}): ${a.children.length}`,a.polygon?e+=`
 ${c}polygon: ${a.polygon.vertices}
`:e+=`
`,a.children.length>0&&i.push(a.children)}return e}};qC.exports=Pm});var HC=E((bye,GC)=>{var Bj=NC(),kj=VC(),Im=class{constructor(e){this.polygonTree=new kj,this.rootnode=new Bj(null),e&&this.addPolygons(e)}invert(){this.polygonTree.invert(),this.rootnode.invert()}clipTo(e,n=!1){this.rootnode.clipTo(e,n)}allPolygons(){let e=[];return this.polygonTree.getPolygons(e),e}addPolygons(e){let n=new Array(e.length);for(let i=0;i<e.length;i++)n[i]=this.polygonTree.addChild(e[i]);this.rootnode.addPolygonTreeNodes(n)}clear(){this.polygonTree.clear()}toString(){return"Tree: "+this.polygonTree.toString("")}};GC.exports=Im});var rf=E((Sye,$C)=>{$C.exports={Tree:HC()}});var YC=E((Eye,XC)=>{var of=Be(),zj=nf(),{Tree:WC}=rf(),qj=(t,e)=>{if(!zj(t,e))return of.create();let n=new WC(of.toPolygons(t)),i=new WC(of.toPolygons(e));n.invert(),i.clipTo(n),i.invert(),n.clipTo(i),i.clipTo(n),n.addPolygons(i.allPolygons()),n.invert();let s=n.allPolygons();return of.create(s)};XC.exports=qj});var Lm=E((Mye,ZC)=>{var Vj=Ne(),Gj=ta(),Hj=YC(),$j=(...t)=>{t=Vj(t);let e=t.shift();return t.forEach(n=>{e=Hj(e,n)}),e=Gj(e),e};ZC.exports=$j});var JC=E((Aye,jC)=>{var Wj=Ne(),Xj=Be(),Yj=ys(),Zj=ef(),jj=tf(),Jj=Lm(),Kj=(...t)=>{t=Wj(t);let e=t.map(s=>jj({z0:-1,z1:1},s)),n=Jj(e),i=Yj(n);return Zj(i,Xj.toPolygons(n))};jC.exports=Kj});var QC=E((wye,KC)=>{var Qj=Ne(),eJ=Qo(),tJ=Ge(),nJ=Be(),iJ=JC(),sJ=Lm(),rJ=(...t)=>{if(t=Qj(t),t.length===0)throw new Error("wrong number of arguments");if(!eJ(t))throw new Error("only intersect of the types are supported");let e=t[0];return tJ.isA(e)?iJ(t):nJ.isA(e)?sJ(t):e};KC.exports=rJ});var af=E((Tye,eR)=>{var oJ=Je(),aJ=o0(),cJ=t=>aJ(t,{skipTriangulation:!0}).map(i=>{let s=i.map(r=>t[r]);return oJ.create(s)});eR.exports=cJ});var Nm=E((Cye,nR)=>{var sa=Be(),lJ=nf(),{Tree:tR}=rf(),uJ=(t,e)=>{if(!lJ(t,e))return hJ(t,e);let n=new tR(sa.toPolygons(t)),i=new tR(sa.toPolygons(e));n.clipTo(i,!1),i.clipTo(n),i.invert(),i.clipTo(n),i.invert();let s=n.allPolygons().concat(i.allPolygons());return sa.create(s)},hJ=(t,e)=>{let n=sa.toPolygons(t);return n=n.concat(sa.toPolygons(e)),sa.create(n)};nR.exports=uJ});var cf=E((Rye,iR)=>{var fJ=Ne(),dJ=ta(),pJ=Nm(),mJ=(...t)=>{t=fJ(t);let e;for(e=1;e<t.length;e+=2)t.push(pJ(t[e-1],t[e]));let n=t[e-1];return n=dJ(n),n};iR.exports=mJ});var Fm=E((Dye,aR)=>{var gJ=Ne(),$i=Be(),Oc=Je(),xJ=af(),vJ=cf(),yJ=(...t)=>{if(t=gJ(t),t.length!==2)throw new Error("minkowskiSum requires exactly two geometries");let[e,n]=t;if(!$i.isA(e)||!$i.isA(n))throw new Error("minkowskiSum requires geom3 geometries");let i=$i.isConvex(e),s=$i.isConvex(n);if(i&&s)return oR(e,n);if(!i&&s)return sR(e,n);if(i&&!s)return sR(n,e);throw new Error("minkowskiSum of two non-convex geometries is not yet supported")},sR=(t,e)=>{let n=_J(t);if(n.length===0)return $i.create();let i=n.map(s=>oR(s,e));return i.length===1?i[0]:vJ(i)},_J=t=>{let e=$i.toPolygons(t);if(e.length===0)return[];let n=[];for(let i=0;i<e.length;i++){let s=e[i],r=s.vertices,o=0,a=0,c=0;for(let p=0;p<r.length;p++)o+=r[p][0],a+=r[p][1],c+=r[p][2];o/=r.length,a/=r.length,c/=r.length;let l=Oc.plane(s),u=l[0],f=l[1],h=l[2],d=.1,g=[o-u*d,a-f*d,c-h*d];for(let p=1;p<r.length-1;p++){let x=r[0],m=r[p],b=r[p+1],S=bJ(g,x,m,b);n.push($i.create(S))}}return n},bJ=(t,e,n,i)=>[Oc.create([t,n,e]),Oc.create([t,e,i]),Oc.create([e,n,i]),Oc.create([n,t,i])],oR=(t,e)=>{let n=rR(t),i=rR(e);if(n.length===0||i.length===0)return $i.create();let s=[];for(let o=0;o<n.length;o++){let a=n[o];for(let c=0;c<i.length;c++){let l=i[c];s.push([a[0]+l[0],a[1]+l[1],a[2]+l[2]])}}let r=xJ(s);return $i.create(r)},rR=t=>{let e=new Set,n=[],i=$i.toPolygons(t);for(let s=0;s<i.length;s++){let r=i[s].vertices;for(let o=0;o<r.length;o++){let a=r[o],c=`${a[0]},${a[1]},${a[2]}`;e.has(c)||(e.add(c),n.push(a))}}return n};aR.exports=yJ});var uR=E((Pye,lR)=>{var Om=xe(),SJ=ys(),cR=Be(),EJ=t=>t.sort((e,n)=>e-n).filter((e,n,i)=>!n||e!==i[n-1]),MJ=(t,e,n)=>{let i=`${e}`,s=t.get(i);s===void 0?t.set(i,[n]):s.push(n)},AJ=(t,e)=>{let n=`${e}`;return t.get(n)},wJ=t=>{let e=SJ(t),n=cR.toPolygons(t),i=n.length,s=new Map,r=Om.create();n.forEach((u,f)=>{u.vertices.forEach(h=>{MJ(s,Om.snap(r,h,e),f)})});let o=n.map(u=>{let f=[];return u.vertices.forEach(h=>{f=f.concat(AJ(s,Om.snap(r,h,e)))}),{e:1,d:EJ(f)}});s.clear();let a=0,c=o.length;for(let u=0;u<c;u++){let f=o[u];if(f.e>0){let h=new Array(i);h[u]=!0;do a=0,h.forEach((d,g)=>{let p=o[g];if(p.e>0){p.e=-1;for(let x=0;x<p.d.length;x++)h[p.d[x]]=!0;a++}});while(a>0);f.indexes=h}}let l=[];for(let u=0;u<c;u++)if(o[u].indexes){let f=[];o[u].indexes.forEach((h,d)=>f.push(n[d])),l.push(cR.create(f))}return l};lR.exports=wJ});var fR=E((Iye,hR)=>{var TJ=Ne(),CJ=Be(),RJ=uR(),DJ=(...t)=>{if(t=TJ(t),t.length===0)throw new Error("wrong number of arguments");let e=t.map(n=>CJ.isA(n)?RJ(n):n);return e.length===1?e[0]:e};hR.exports=DJ});var mR=E((Lye,pR)=>{var lf=Be(),PJ=nf(),{Tree:dR}=rf(),IJ=(t,e)=>{if(!PJ(t,e))return lf.clone(t);let n=new dR(lf.toPolygons(t)),i=new dR(lf.toPolygons(e));n.invert(),n.clipTo(i),i.clipTo(n,!0),n.addPolygons(i.allPolygons()),n.invert();let s=n.allPolygons();return lf.create(s)};pR.exports=IJ});var Um=E((Nye,gR)=>{var LJ=Ne(),NJ=ta(),FJ=mR(),OJ=(...t)=>{t=LJ(t);let e=t.shift();return t.forEach(n=>{e=FJ(e,n)}),e=NJ(e),e};gR.exports=OJ});var vR=E((Fye,xR)=>{var UJ=Ne(),BJ=Be(),kJ=ys(),zJ=ef(),qJ=tf(),VJ=Um(),GJ=(...t)=>{t=UJ(t);let e=t.map(s=>qJ({z0:-1,z1:1},s)),n=VJ(e),i=kJ(n);return zJ(i,BJ.toPolygons(n))};xR.exports=GJ});var _R=E((Oye,yR)=>{var HJ=Ne(),$J=Qo(),WJ=Ge(),XJ=Be(),YJ=vR(),ZJ=Um(),jJ=(...t)=>{if(t=HJ(t),t.length===0)throw new Error("wrong number of arguments");if(!$J(t))throw new Error("only subtract of the types are supported");let e=t[0];return WJ.isA(e)?YJ(t):XJ.isA(e)?ZJ(t):e};yR.exports=jJ});var Bm=E((Uye,bR)=>{var JJ=Ne(),KJ=Be(),QJ=ys(),eK=ef(),tK=tf(),nK=cf(),iK=(...t)=>{t=JJ(t);let e=t.map(s=>tK({z0:-1,z1:1},s)),n=nK(e),i=QJ(n);return eK(i,KJ.toPolygons(n))};bR.exports=iK});var uf=E((Bye,SR)=>{var sK=Ne(),rK=Qo(),oK=Ge(),aK=Be(),cK=Bm(),lK=cf(),uK=(...t)=>{if(t=sK(t),t.length===0)throw new Error("wrong number of arguments");if(!rK(t))throw new Error("only unions of the same type are supported");let e=t[0];return oK.isA(e)?cK(t):aK.isA(e)?lK(t):e};SR.exports=uK});var MR=E((kye,ER)=>{ER.exports={intersect:QC(),minkowski:Fm(),scission:fR(),subtract:_R(),union:uf()}});var Bc=E((zye,wR)=>{var{EPS:hK,TAU:fK}=nt(),AR=q0(),Uc=Ch(),qt=We(),dK=Mc(),pK=(t,e)=>{let n={delta:1,corners:"edge",closed:!1,segments:16},{delta:i,corners:s,closed:r,segments:o}=Object.assign({},n,t);if(Math.abs(i)<hK)return e;let a=t.closed?dK(e):1;a===0&&(a=1);let c=a>0&&i>=0||a<0&&i<0;i=Math.abs(i);let l=null,u=[],f=[],h=qt.create(),d=e.length;for(let g=0;g<d;g++){let p=(g+1)%d,x=e[g],m=e[p];c?qt.subtract(h,x,m):qt.subtract(h,m,x),qt.normal(h,h),qt.normalize(h,h),qt.scale(h,h,i);let b=qt.add(qt.create(),x,h),S=qt.add(qt.create(),m,h),y=[b,S];if(l!=null&&(r||!r&&p!==0)){let M=AR(l[0],l[1],y[0],y[1]);M?(u.pop(),y[0]=M):f.push({c:x,s0:l,s1:y})}l=[b,S],!(p===0&&!r)&&(u.push(y[0]),u.push(y[1]))}if(r&&l!=null){let g=u[0],p=u[1],x=AR(l[0],l[1],g,p);if(x)u[0]=x,u.pop();else{let m=e[0],b=[g,p];f.push({c:m,s0:l,s1:b})}}if(s==="edge"){let g=new Map;u.forEach((m,b)=>g.set(m,b));let p=Uc.create(),x=Uc.create();f.forEach(m=>{Uc.fromPoints(p,m.s0[0],m.s0[1]),Uc.fromPoints(x,m.s1[0],m.s1[1]);let b=Uc.intersectPointOfLines(p,x);if(Number.isFinite(b[0])&&Number.isFinite(b[1])){let S=m.s0[1],y=g.get(S);u[y]=b,u[(y+1)%u.length]=void 0}else{let S=m.s1[0],y=g.get(S);u[y]=void 0}}),u=u.filter(m=>m!==void 0)}if(s==="round"){let g=Math.floor(o/4),p=qt.create();f.forEach(x=>{let m=qt.angle(qt.subtract(p,x.s1[0],x.c));if(m-=qt.angle(qt.subtract(p,x.s0[1],x.c)),c&&m<0&&(m=m+Math.PI,m<0&&(m=m+Math.PI)),!c&&m>0&&(m=m-Math.PI,m>0&&(m=m-Math.PI)),m!==0){g=Math.floor(o*(Math.abs(m)/fK));let b=m/g,S=qt.angle(qt.subtract(p,x.s0[1],x.c)),y=[];for(let M=1;M<g;M++){let A=S+b*M,w=qt.fromAngleRadians(qt.create(),A);qt.scale(w,w,i),qt.add(w,w,x.c),y.push(w)}if(y.length>0){let M=x.s0[1],A=u.findIndex(w=>qt.equals(M,w));A=(A+1)%u.length,u.splice(A,0,...y)}}else{let b=x.s1[0],S=u.findIndex(y=>qt.equals(b,y));u.splice(S,1)}})}return u};wR.exports=pK});var CR=E((qye,TR)=>{var hf=Ge(),mK=Bc(),gK=(t,e)=>{let n={delta:1,corners:"edge",segments:16},{delta:i,corners:s,segments:r}=Object.assign({},n,t);if(!(s==="edge"||s==="chamfer"||s==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');let c=hf.toOutlines(e).map(l=>(t={delta:i,corners:s,closed:!0,segments:r},mK(t,l))).reduce((l,u)=>l.concat(hf.toSides(hf.fromPoints(u))),[]);return hf.create(c)};TR.exports=gK});var PR=E((Vye,DR)=>{var RR=yt(),xK=xe(),vK=Be(),kc=Je(),yK=(t,e)=>{xK.dot(kc.plane(e),t)>0&&(e=kc.invert(e));let i=[e],s=kc.transform(RR.fromTranslation(RR.create(),t),e),r=e.vertices.length;for(let o=0;o<r;o++){let a=o<r-1?o+1:0,c=kc.create([e.vertices[o],s.vertices[o],s.vertices[a],e.vertices[a]]);i.push(c)}return i.push(kc.invert(s)),vK.create(i)};DR.exports=yK});var NR=E((Gye,LR)=>{var{EPS:_K,TAU:km}=nt(),IR=yt(),Tt=xe(),bK=wm(),zm=Be(),Hr=Je(),SK=um(),EK=ta(),qm=Nm(),MK=PR(),AK=(t,e,n)=>{let i=e.toString();if(t.has(i))t.get(i)[1].push(n);else{let s=[e,[n]];t.set(i,s)}},wK=(t,e,n)=>{let i=e[0].toString(),s=e[1].toString(),r=i<s?`${i},${s}`:`${s},${i}`;if(t.has(r))t.get(r)[1].push(n);else{let o=[e,[n]];t.set(r,o)}},Vm=(t,e)=>{t.findIndex(i=>i===e)<0&&t.push(e)},TK=(t,e)=>{let n={delta:1,segments:12},{delta:i,segments:s}=Object.assign({},n,t),r=zm.create(),o=new Map,a=new Map,c=Tt.create(),l=Tt.create();return zm.toPolygons(e).forEach((f,h)=>{let d=Tt.scale(Tt.create(),Hr.plane(f),2*i),g=Hr.transform(IR.fromTranslation(IR.create(),Tt.scale(Tt.create(),d,-.5)),f),p=MK(d,g);r=qm(r,p);let x=f.vertices;for(let m=0;m<x.length;m++){AK(o,x[m],Hr.plane(f));let b=(m+1)%x.length,S=[x[m],x[b]];wK(a,S,Hr.plane(f))}}),a.forEach(f=>{let h=f[0],d=f[1],g=h[0],p=h[1],x=Tt.subtract(Tt.create(),p,g);Tt.normalize(x,x);let m=d[0],b=Tt.cross(Tt.create(),m,x),S=[];for(let R=0;R<s;R++)Vm(S,R*km/s);for(let R=0,D=d.length;R<D;R++){let L=d[R],N=Tt.dot(b,L),B=Tt.dot(m,L),F=Math.atan2(N,B);F<0&&(F+=km),Vm(S,F),F=Math.atan2(-N,-B),F<0&&(F+=km),Vm(S,F)}S=S.sort(bK);let y=S.length,M,A,w=[],T=[],v=[];for(let R=-1;R<y;R++){let D=S[R<0?R+y:R],L=Math.sin(D),N=Math.cos(D);Tt.scale(c,m,N*i),Tt.scale(l,b,L*i),Tt.add(c,c,l);let B=Tt.add(Tt.create(),g,c),F=Tt.add(Tt.create(),p,c),W=!1;if(R>=0&&Tt.distance(B,M)<_K&&(W=!0),!W){if(R>=0){w.push(B),T.push(F);let V=[A,F,B,M],K=Hr.create(V);v.push(K)}M=B,A=F}}T.reverse(),v.push(Hr.create(w)),v.push(Hr.create(T));let _=zm.create(v);r=qm(r,_)}),o.forEach(f=>{let h=f[0],d=f[1],g=d[0],p=null,x=0;for(let y=1;y<d.length;y++){let M=d[y],A=Tt.cross(c,g,M),w=Tt.length(A);w>.05&&w>x&&(x=w,p=M)}p||(p=Tt.orthogonal(c,g));let m=Tt.cross(c,g,p);Tt.normalize(m,m);let b=Tt.cross(l,m,g),S=SK({center:[h[0],h[1],h[2]],radius:i,segments:s,axes:[g,m,b]});r=qm(r,S)}),EK(r)};LR.exports=TK});var OR=E((Hye,FR)=>{var CK=Be(),RK=uf(),DK=NR(),PK=(t,e)=>{let n={delta:1,corners:"round",segments:12},{delta:i,corners:s,segments:r}=Object.assign({},n,t);if(s!=="round")throw new Error('corners must be "round" for 3D geometries');if(CK.toPolygons(e).length===0)throw new Error("the given geometry cannot be empty");t={delta:i,corners:s,segments:r};let a=DK(t,e);return RK(e,a)};FR.exports=PK});var kR=E(($ye,BR)=>{var IK=Mc(),Fn=We(),ra=Ge(),zc=mt(),UR=Bc(),LK=t=>{let{external:e,internal:n}=t;IK(e)<0?e=e.reverse():n=n.reverse();let i=zc.fromPoints({closed:!0},e),s=zc.fromPoints({closed:!0},n),r=ra.toSides(ra.fromPoints(zc.toPoints(i))),o=ra.toSides(ra.fromPoints(zc.toPoints(s)));return r.push(...o),ra.create(r)},NK=(t,e,n,i)=>{let{points:s,external:r,internal:o}=t,a=Math.floor(e/2),c=[],l=[];if(n==="round"&&a>0){let f=Math.PI/a,h=s[s.length-1],d=Fn.angle(Fn.subtract(Fn.create(),r[r.length-1],h)),g=s[0],p=Fn.angle(Fn.subtract(Fn.create(),o[0],g));for(let x=1;x<a;x++){let m=d+f*x,b=Fn.fromAngleRadians(Fn.create(),m);Fn.scale(b,b,i),Fn.add(b,b,h),c.push(b),m=p+f*x,b=Fn.fromAngleRadians(Fn.create(),m),Fn.scale(b,b,i),Fn.add(b,b,g),l.push(b)}}let u=[];return u.push(...r,...c,...o.reverse(),...l),ra.fromPoints(u)},FK=(t,e)=>{t=Object.assign({},{delta:1,corners:"edge",segments:16},t);let{delta:i,corners:s,segments:r}=t;if(i<=0)throw new Error("the given delta must be positive for paths");if(!(s==="edge"||s==="chamfer"||s==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');let o=e.isClosed,a=zc.toPoints(e);if(a.length===0)throw new Error("the given geometry cannot be empty");let c={points:a,external:UR({delta:i,corners:s,segments:r,closed:o},a),internal:UR({delta:-i,corners:s,segments:r,closed:o},a)};return e.isClosed?LK(c):NK(c,r,s,i)};BR.exports=FK});var ff=E((Wye,zR)=>{var OK=Ne(),UK=Ge(),BK=Be(),kK=mt(),zK=CR(),qK=OR(),VK=kR(),GK=(t,...e)=>{if(e=OK(e),e.length===0)throw new Error("wrong number of arguments");let n=e.map(i=>kK.isA(i)?VK(t,i):UK.isA(i)?zK(t,i):BK.isA(i)?qK(t,i):i);return n.length===1?n[0]:n};zR.exports=GK});var GR=E((Xye,VR)=>{var df=Ge(),qR=Eh(),HK=Bc(),$K=(t,e)=>{let n={delta:1,corners:"edge",segments:0},{delta:i,corners:s,segments:r}=Object.assign({},n,t);if(!(s==="edge"||s==="chamfer"||s==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');let o=df.toOutlines(e),c=o.map(l=>(t={delta:o.reduce((h,d)=>h+qR.arePointsInside(l,qR.create(d)),0)%2===0?i:-i,corners:s,closed:!0,segments:r},HK(t,l))).reduce((l,u)=>l.concat(df.toSides(df.fromPoints(u))),[]);return df.create(c)};VR.exports=$K});var WR=E((Yye,$R)=>{var HR=mt(),WK=Bc(),XK=(t,e)=>{let n={delta:1,corners:"edge",closed:e.isClosed,segments:16},{delta:i,corners:s,closed:r,segments:o}=Object.assign({},n,t);if(!(s==="edge"||s==="chamfer"||s==="round"))throw new Error('corners must be "edge", "chamfer", or "round"');t={delta:i,corners:s,closed:r,segments:o};let a=WK(t,HR.toPoints(e));return HR.fromPoints({closed:r},a)};$R.exports=XK});var YR=E((Zye,XR)=>{var YK=Ne(),ZK=Ge(),jK=mt(),JK=GR(),KK=WR(),QK=(t,...e)=>{if(e=YK(e),e.length===0)throw new Error("wrong number of arguments");let n=e.map(i=>jK.isA(i)?KK(t,i):ZK.isA(i)?JK(t,i):i);return n.length===1?n[0]:n};XR.exports=QK});var jR=E((jye,ZR)=>{ZR.exports={expand:ff(),offset:YR()}});var Vc=E((Jye,JR)=>{var qc=yt(),Gm=xe(),eQ=Ge(),Hm=Gr(),tQ=Nc(),nQ=(t,e)=>{let n={offset:[0,0,1],twistAngle:0,twistSteps:12,repair:!0},{offset:i,twistAngle:s,twistSteps:r,repair:o}=Object.assign({},n,t);if(r<1)throw new Error("twistSteps must be 1 or more");s===0&&(r=1);let a=Gm.clone(i),c=eQ.toSides(e);if(c.length===0)throw new Error("the given geometry cannot be empty");let l=Hm.fromSides(c);a[2]<0&&Hm.reverse(l,l);let u=qc.create(),f=(h,d,g)=>{let p=d/r*s,x=Gm.scale(Gm.create(),a,d/r);return qc.multiply(u,qc.fromZRotation(u,p),qc.fromTranslation(qc.create(),x)),Hm.transform(u,g)};return t={numberOfSlices:r+1,capStart:!0,capEnd:!0,repair:o,callback:f},tQ(t,l)};JR.exports=nQ});var QR=E((Kye,KR)=>{var iQ=Ge(),sQ=mt(),rQ=Vc(),oQ=(t,e)=>{if(!e.isClosed)throw new Error("extruded path must be closed");let n=sQ.toPoints(e),i=iQ.fromPoints(n);return rQ(t,i)};KR.exports=oQ});var tD=E((Qye,eD)=>{var aQ=Ne(),cQ=Ge(),lQ=mt(),uQ=Vc(),hQ=QR(),fQ=(t,...e)=>{let n={height:1,twistAngle:0,twistSteps:1,repair:!0},{height:i,twistAngle:s,twistSteps:r,repair:o}=Object.assign({},n,t);if(e=aQ(e),e.length===0)throw new Error("wrong number of arguments");t={offset:[0,0,i],twistAngle:s,twistSteps:r,repair:o};let a=e.map(c=>lQ.isA(c)?hQ(t,c):cQ.isA(c)?uQ(t,c):c);return a.length===1?a[0]:a};eD.exports=fQ});var iD=E((e_e,nD)=>{var dQ=mt(),pQ=ff(),mQ=Vc(),gQ=(t,e)=>{let n={size:1,height:1},{size:i,height:s}=Object.assign({},n,t);if(t.delta=i,t.offset=[0,0,s],dQ.toPoints(e).length===0)throw new Error("the given geometry cannot be empty");let o=pQ(t,e);return mQ(t,o)};nD.exports=gQ});var rD=E((t_e,sD)=>{var{area:xQ}=ko(),$m=Ge(),vQ=mt(),yQ=ff(),_Q=Vc(),bQ=(t,e)=>{let n={size:1,height:1},{size:i,height:s}=Object.assign({},n,t);t.delta=i,t.offset=[0,0,s];let r=$m.toOutlines(e);if(r.length===0)throw new Error("the given geometry cannot be empty");let a=r.map(l=>(xQ(l)<0&&l.reverse(),yQ(t,vQ.fromPoints({closed:!0},l)))).reduce((l,u)=>l.concat($m.toSides(u)),[]),c=$m.create(a);return _Q(t,c)};sD.exports=bQ});var aD=E((n_e,oD)=>{var SQ=Ne(),EQ=Ge(),MQ=mt(),AQ=iD(),wQ=rD(),TQ=(t,...e)=>{let n={size:1,height:1},{size:i,height:s}=Object.assign({},n,t);if(e=SQ(e),e.length===0)throw new Error("wrong number of arguments");if(i<=0)throw new Error("size must be positive");if(s<=0)throw new Error("height must be positive");let r=e.map(o=>MQ.isA(o)?AQ(t,o):EQ.isA(o)?wQ(t,o):o);return r.length===1?r[0]:r};oD.exports=TQ});var lD=E((i_e,cD)=>{var{TAU:Gc}=nt(),Wi=yt(),CQ=Ge(),RQ=Nc(),Wm=Gr(),DQ=(t,e)=>{let n={angle:Gc,startAngle:0,pitch:10,height:0,endOffset:0,segmentsPerRotation:32},{angle:i,startAngle:s,pitch:r,height:o,endOffset:a,segmentsPerRotation:c}=Object.assign({},n,t);if(o!=0&&(r=o/(i/Gc)),c<3)throw new Error("The number of segments per rotation needs to be at least 3.");let u=CQ.toSides(e);if(u.length===0)throw new Error("The given geometry cannot be empty");let f=u.filter(b=>b[0][0]>=0),h=Wm.fromSides(u);f.length===0&&(h=Wm.reverse(h));let d=Math.round(c/Gc*Math.abs(i)),g=d>=2?d:2,p=Wi.create(),x=Wi.create(),m=(b,S,y)=>{let M=s+i/g*S,A=a/g*S,w=(M-s)/Gc*r;return Wi.multiply(p,Wi.fromTranslation(Wi.create(),[A,0,w*Math.sign(i)]),Wi.fromXRotation(Wi.create(),-Gc/4*Math.sign(i))),Wi.multiply(x,Wi.fromZRotation(Wi.create(),M),p),Wm.transform(x,y)};return RQ({numberOfSlices:g+1,callback:m},h)};cD.exports=DQ});var mD=E((s_e,pD)=>{var PQ=Ne(),uD=Th(),Xm=Ai(),hD=yt(),fD=Ge(),dD=Be(),oa=Je(),IQ=ys(),LQ=Bm(),NQ=(t,e)=>{let n=Xm.fromNormalAndPoint(Xm.create(),t.axis,t.origin);if(Number.isNaN(n[0])||Number.isNaN(n[1])||Number.isNaN(n[2])||Number.isNaN(n[3]))throw new Error("project: invalid axis or origin");let i=IQ(e),s=i*i*Math.sqrt(3)/4;if(i===0)return fD.create();let r=dD.toPolygons(e),o=[];for(let c=0;c<r.length;c++){let l=r[c].vertices.map(h=>Xm.projectionOfPoint(n,h)),u=oa.create(l),f=oa.plane(u);uD(n,f)&&(oa.measureArea(u)<s||o.push(u))}if(!uD(n,[0,0,1])){let c=hD.fromVectorRotation(hD.create(),n,[0,0,1]);o=o.map(l=>oa.transform(c,l))}o=o.sort((c,l)=>oa.measureArea(l)-oa.measureArea(c));let a=o.map(c=>fD.fromPoints(c.vertices));return LQ(a)},FQ=(t,...e)=>{let n={axis:[0,0,1],origin:[0,0,0]},{axis:i,origin:s}=Object.assign({},n,t);if(e=PQ(e),e.length===0)throw new Error("wrong number of arguments");t={axis:i,origin:s};let r=e.map(o=>dD.isA(o)?NQ(t,o):o);return r.length===1?r[0]:r};pD.exports=FQ});var xD=E((r_e,gD)=>{gD.exports={extrudeFromSlices:Nc(),extrudeLinear:tD(),extrudeRectangular:aD(),extrudeRotate:_m(),extrudeHelical:lD(),project:mD(),slice:Gr()}});var pf=E((o_e,yD)=>{var vD=We(),OQ=t=>{let e=vD.fromValues(1/0,1/0);t.forEach(s=>{(s[1]<e[1]||s[1]===e[1]&&s[0]<e[0])&&(e=s)});let n=[];t.forEach(s=>{let r=BQ(s[1]-e[1],s[0]-e[0]),o=vD.squaredDistance(s,e);n.push({point:s,angle:r,distSq:o})}),n.sort((s,r)=>s.angle!==r.angle?s.angle-r.angle:s.distSq-r.distSq);let i=[];return n.forEach(s=>{let r=i.length;for(;r>1&&UQ(i[r-2],i[r-1],s.point)<=Number.EPSILON;)i.pop(),r=i.length;i.push(s.point)}),i},UQ=(t,e,n)=>(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0]),BQ=(t,e)=>t===0&&e===0?-1/0:-e/t;yD.exports=OQ});var mf=E((a_e,ED)=>{var _D=Ge(),bD=Be(),SD=mt(),kQ=t=>{let e=new Set,n=[],i=s=>{let r=s.toString();e.has(r)||(n.push(s),e.add(r))};return t.forEach(s=>{_D.isA(s)?_D.toPoints(s).forEach(i):bD.isA(s)?bD.toPoints(s).forEach(r=>r.forEach(i)):SD.isA(s)&&SD.toPoints(s).forEach(i)}),n};ED.exports=kQ});var AD=E((c_e,MD)=>{var zQ=Ne(),qQ=mt(),VQ=pf(),GQ=mf(),HQ=(...t)=>{t=zQ(t);let e=GQ(t),n=VQ(e);return qQ.fromPoints({closed:!0},n)};MD.exports=HQ});var CD=E((l_e,TD)=>{var $Q=Ne(),wD=Ge(),WQ=pf(),XQ=mf(),YQ=(...t)=>{t=$Q(t);let e=XQ(t),n=WQ(e);return n.length<3?wD.create():wD.fromPoints(n)};TD.exports=YQ});var PD=E((u_e,DD)=>{var ZQ=Ne(),RD=Be(),jQ=mf(),JQ=af(),KQ=(...t)=>{t=ZQ(t);let e=jQ(t);return e.length===0?RD.create():RD.create(JQ(e))};DD.exports=KQ});var Ym=E((h_e,ID)=>{var QQ=Ne(),eee=Qo(),tee=Ge(),nee=Be(),iee=mt(),see=AD(),ree=CD(),oee=PD(),aee=(...t)=>{if(t=QQ(t),t.length===0)throw new Error("wrong number of arguments");if(!eee(t))throw new Error("only hulls of the same type are supported");let e=t[0];return iee.isA(e)?see(t):tee.isA(e)?ree(t):nee.isA(e)?oee(t):e};ID.exports=aee});var ND=E((f_e,LD)=>{var cee=Ne(),lee=uf(),uee=Ym(),hee=(...t)=>{if(t=cee(t),t.length<2)throw new Error("wrong number of arguments");let e=[];for(let n=1;n<t.length;n++)e.push(uee(t[n-1],t[n]));return lee(e)};LD.exports=hee});var OD=E((d_e,FD)=>{FD.exports={hull:Ym(),hullChain:ND(),hullPoints2:pf(),hullPoints3:af()}});var BD=E((p_e,UD)=>{UD.exports={minkowskiSum:Fm()}});var jm=E((m_e,zD)=>{var Zm=xe(),kD=Je(),fee=(t,e)=>{let n=Math.abs(kD.measureArea(e));return Number.isFinite(n)&&n>t},dee=(t,e)=>{let n=e.map(s=>{let r=s.vertices.map(c=>Zm.snap(Zm.create(),c,t)),o=[];for(let c=0;c<r.length;c++){let l=(c+1)%r.length;Zm.equals(r[c],r[l])||o.push(r[c])}let a=kD.create(o);return s.color&&(a.color=s.color),a}),i=t*t*Math.sqrt(3)/4;return n=n.filter(s=>fee(i,s)),n};zD.exports=dee});var GD=E((g_e,VD)=>{var pee=Th(),aa=xe(),gf=Je(),mee=t=>{let e=gf.toPoints(t),n=[];for(let i=0;i<e.length;i++){let s=(i+1)%e.length,r={v1:e[i],v2:e[s]};n.push(r)}for(let i=0;i<n.length;i++){let s=(i+1)%e.length;n[i].next=n[s],n[s].prev=n[i]}return n},gee=(t,e)=>{let n=`${e.v1}:${e.v2}`;t.set(n,e)},Jm=(t,e)=>{let n=`${e.v1}:${e.v2}`;t.delete(n)},xee=(t,e)=>{let n=`${e.v2}:${e.v1}`;return t.get(n)},vee=(t,e,n)=>{let i=t.prev.v1,s=t.prev.v2,r=e.next.v2,o=qD(i,s,r,n);i=e.prev.v1,s=e.prev.v2,r=t.next.v2;let a=qD(i,s,r,n);return[o,a]},yee=aa.create(),_ee=aa.create(),qD=(t,e,n,i)=>{let s=aa.subtract(yee,e,t),r=aa.subtract(_ee,n,e);return aa.cross(s,s,r),aa.dot(s,i)},bee=t=>{let e,n=[];for(;t.next;){let i=t.next;n.push(t.v1),t.v1=null,t.v2=null,t.next=null,t.prev=null,t=i}return n.length>0&&(e=gf.create(n)),e},See=t=>{if(t.length<2)return t;let e=t[0].plane,n=t.slice(),i=new Map;for(;n.length>0;){let r=n.shift(),o=mee(r);for(let a=0;a<o.length;a++){let c=o[a],l=xee(i,c);if(l){let u=vee(c,l,e);if(u[0]>=0&&u[1]>=0){let f=l.next,h=c.next;c.prev.next=l.next,c.next.prev=l.prev,l.prev.next=c.next,l.next.prev=c.prev,c.v1=null,c.v2=null,c.next=null,c.prev=null,Jm(i,l),l.v1=null,l.v2=null,l.next=null,l.prev=null;let d=(g,p,x)=>{let m={v1:x.v1,v2:p.v2,next:p.next,prev:x.prev};x.prev.next=m,p.next.prev=m,Jm(g,p),p.v1=null,p.v2=null,p.next=null,p.prev=null,Jm(g,x),x.v1=null,x.v2=null,x.next=null,x.prev=null};u[0]===0&&d(i,f,f.prev),u[1]===0&&d(i,h,h.prev)}}else c.next&&gee(i,c)}}let s=[];return i.forEach(r=>{let o=bee(r);o&&s.push(o)}),i.clear(),s},Eee=(t,e)=>Math.abs(t[3]-e[3])<15e-8?pee(t,e):!1,Mee=(t,e)=>{let n=[];e.forEach(s=>{let r=n.find(o=>Eee(o[0],gf.plane(s)));r?r[1].push(s):n.push([gf.plane(s),[s]])});let i=[];return n.forEach(s=>{let r=s[1],o=See(r);i=i.concat(o)}),i};VD.exports=Mee});var XD=E((x_e,WD)=>{var HD=nt(),Xi=xe(),Aee=Je(),ir=!1,vn=t=>`${t}`,$D=(t,e,n,i,s,r)=>{let o=vn(i),a=vn(s);if(ir&&o===a)throw new Error("assert failed");let c=`${o}/${a}`,l=`${a}/${o}`;if(t.has(l))return xf(t,e,n,s,i,null),null;let u={vertex0:i,vertex1:s,polygonindex:r};return t.has(c)?t.get(c).push(u):t.set(c,[u]),e.has(o)?e.get(o).push(c):e.set(o,[c]),n.has(a)?n.get(a).push(c):n.set(a,[c]),c},xf=(t,e,n,i,s,r)=>{let o=vn(i),a=vn(s),c=`${o}/${a}`;if(ir&&!t.has(c))throw new Error("assert failed");let l=-1,u=t.get(c);for(let f=0;f<u.length;f++){let h=u[f],d=vn(h.vertex0);if(d===o&&(d=vn(h.vertex1),d===a&&!(r!==null&&h.polygonindex!==r))){l=f;break}}if(ir&&l<0)throw new Error("assert failed");if(u.splice(l,1),u.length===0&&t.delete(c),l=e.get(o).indexOf(c),ir&&l<0)throw new Error("assert failed");if(e.get(o).splice(l,1),e.get(o).length===0&&e.delete(o),l=n.get(a).indexOf(c),ir&&l<0)throw new Error("assert failed");n.get(a).splice(l,1),n.get(a).length===0&&n.delete(a)},wee=t=>{let e=new Map;for(let n=0;n<t.length;n++){let i=t[n],s=i.vertices.length;if(s>=3){let r=i.vertices[0],o=vn(r);for(let a=0;a<s;a++){let c=a+1;c===s&&(c=0);let l=i.vertices[c],u=vn(l),f=`${o}/${u}`,h=`${u}/${o}`;if(e.has(h)){let d=e.get(h);d.splice(-1,1),d.length===0&&e.delete(h)}else{let d={vertex0:r,vertex1:l,polygonindex:n};e.has(f)?e.get(f).push(d):e.set(f,[d])}r=l,o=u}}else console.warn("warning: invalid polygon found during insertTjunctions")}if(e.size>0){let n=new Map,i=new Map,s=new Map;for(let[o,a]of e)s.set(o,!0),a.forEach(c=>{let l=vn(c.vertex0),u=vn(c.vertex1);n.has(l)?n.get(l).push(o):n.set(l,[o]),i.has(u)?i.get(u).push(o):i.set(u,[o])});let r=t.slice(0);for(;e.size!==0;){for(let a of e.keys())s.set(a,!0);let o=!1;for(;;){let a=Array.from(s.keys());if(a.length===0)break;let c=a[0],l=!0;if(e.has(c)){let u=e.get(c);if(ir&&u.length===0)throw new Error("assert failed");let f=u[0];for(let h=0;h<2;h++){let d=h===0?f.vertex0:f.vertex1,g=h===0?f.vertex1:f.vertex0,p=vn(d),x=vn(g),m=[];h===0?i.has(p)&&(m=i.get(p)):n.has(p)&&(m=n.get(p));for(let b=0;b<m.length;b++){let S=m[b],y=e.get(S)[0],M=h===0?y.vertex0:y.vertex1,A=h===0?y.vertex1:y.vertex0,w=vn(M),T=vn(A);if(ir&&T!==p)throw new Error("assert failed");if(w===x){xf(e,n,i,d,g,null),xf(e,n,i,g,d,null),l=!1,h=2,o=!0;break}else{let v=d,_=g,R=M,D=Xi.subtract(Xi.create(),R,v),L=Xi.dot(Xi.subtract(Xi.create(),_,v),D)/Xi.dot(D,D);if(L>0&&L<1){let N=Xi.scale(Xi.create(),D,L);if(Xi.add(N,N,v),Xi.squaredDistance(N,_)<HD.EPS*HD.EPS){let F=y.polygonindex,W=r[F],V=vn(y.vertex1),K=-1;for(let He=0;He<W.vertices.length;He++)if(vn(W.vertices[He])===V){K=He;break}if(ir&&K<0)throw new Error("assert failed");let ie=W.vertices.slice(0);ie.splice(K,0,g);let le=Aee.create(ie);r[F]=le,xf(e,n,i,y.vertex0,y.vertex1,F);let Ce=$D(e,n,i,y.vertex0,g,F),Ke=$D(e,n,i,g,y.vertex1,F);Ce!==null&&s.set(Ce,!0),Ke!==null&&s.set(Ke,!0),l=!1,h=2,o=!0;break}}}}}}l&&s.delete(c)}if(!o)break}t=r}return e.clear(),t};WD.exports=wee});var ZD=E((v_e,YD)=>{var Km=xe(),Qm=Je(),Tee=(t,e,n)=>{let i=e.vertices.length;if(i>3){if(i>4){let o=[0,0,0];e.vertices.forEach(a=>Km.add(o,o,a)),Km.snap(o,Km.divide(o,o,[i,i,i]),t);for(let a=0;a<i;a++){let c=Qm.create([o,e.vertices[a],e.vertices[(a+1)%i]]);e.color&&(c.color=e.color),n.push(c)}return}let s=Qm.create([e.vertices[0],e.vertices[1],e.vertices[2]]),r=Qm.create([e.vertices[0],e.vertices[2],e.vertices[3]]);e.color&&(s.color=e.color,r.color=e.color),n.push(s,r);return}n.push(e)},Cee=(t,e)=>{let n=[];return e.forEach(i=>{Tee(t,i,n)}),n};YD.exports=Cee});var KD=E((y_e,JD)=>{var Ree=Ne(),Dee=ys(),Pee=Ge(),jD=Be(),Iee=mt(),Lee=jm(),Nee=GD(),Fee=XD(),Oee=ZD(),Uee=(t,e)=>e,Bee=(t,e)=>e,kee=(t,e)=>{let n={snap:!1,simplify:!1,triangulate:!1},{snap:i,simplify:s,triangulate:r}=Object.assign({},n,t),o=Dee(e),a=jD.toPolygons(e);i&&(a=Lee(o,a)),s&&(a=Nee(o,a)),r&&(a=Fee(a),a=Oee(o,a));let c=Object.assign({},e);return c.polygons=a,c},zee=(t,...e)=>{if(e=Ree(e),e.length===0)throw new Error("wrong number of arguments");let n=e.map(i=>{if(Iee.isA(i))return Uee(t,i);if(Pee.isA(i))return Bee(t,i);if(jD.isA(i))return kee(t,i);throw new Error("invalid geometry")});return n.length===1?n[0]:n};JD.exports=zee});var eP=E((__e,QD)=>{var qee=Ne(),$r=We(),eg=Ge(),tg=Be(),ng=mt(),ig=ys(),Vee=jm(),Gee=t=>{let e=ig(t),i=ng.toPoints(t).map(s=>$r.snap($r.create(),s,e));return ng.create(i)},Hee=t=>{let e=ig(t),i=eg.toSides(t).map(s=>[$r.snap($r.create(),s[0],e),$r.snap($r.create(),s[1],e)]);return i=i.filter(s=>!$r.equals(s[0],s[1])),eg.create(i)},$ee=t=>{let e=ig(t),n=tg.toPolygons(t),i=Vee(e,n);return tg.create(i)},Wee=(...t)=>{if(t=qee(t),t.length===0)throw new Error("wrong number of arguments");let e=t.map(n=>ng.isA(n)?Gee(n):eg.isA(n)?Hee(n):tg.isA(n)?$ee(n):n);return e.length===1?e[0]:e};QD.exports=Wee});var nP=E((b_e,tP)=>{tP.exports={generalize:KD(),snap:eP(),retessellate:ta()}});var sP=E((S_e,iP)=>{var Xee=(t,e,n)=>{for(t=t.slice();t.length<n;)t.push(e);return t};iP.exports=Xee});var lP=E((E_e,cP)=>{var Yee=Ne(),rP=sP(),aP=Ph(),{translate:Zee}=er(),jee=t=>{if(!Array.isArray(t.modes)||t.modes.length>3)throw new Error("align(): modes must be an array of length <= 3");if(t.modes=rP(t.modes,"none",3),t.modes.filter(e=>["center","max","min","none"].includes(e)).length!==3)throw new Error('align(): all modes must be one of "center", "max" or "min"');if(!Array.isArray(t.relativeTo)||t.relativeTo.length>3)throw new Error("align(): relativeTo must be an array of length <= 3");if(t.relativeTo=rP(t.relativeTo,0,3),t.relativeTo.filter(e=>Number.isFinite(e)||e==null).length!==3)throw new Error("align(): all relativeTo values must be a number, or null.");if(typeof t.grouped!="boolean")throw new Error("align(): grouped must be a boolean value.");return t},Jee=(t,e,n)=>{for(let i=0;i<3;i++)t[i]==null&&(e[i]==="center"?t[i]=(n[0][i]+n[1][i])/2:e[i]==="max"?t[i]=n[1][i]:e[i]==="min"&&(t[i]=n[0][i]));return t},oP=(t,e,n)=>{let i=aP(t),s=[0,0,0];for(let r=0;r<3;r++)e[r]==="center"?s[r]=n[r]-(i[0][r]+i[1][r])/2:e[r]==="max"?s[r]=n[r]-i[1][r]:e[r]==="min"&&(s[r]=n[r]-i[0][r]);return Zee(s,t)},Kee=(t,...e)=>{t=Object.assign({},{modes:["center","center","min"],relativeTo:[0,0,0],grouped:!1},t),t=jee(t);let{modes:i,relativeTo:s,grouped:r}=t;if(e=Yee(e),e.length===0)throw new Error("align(): No geometries were provided to act upon");if(s.filter(o=>o==null).length){let o=aP(e);s=Jee(s,i,o)}return r?e=oP(e,i,s):e=e.map(o=>oP(o,i,s)),e.length===1?e[0]:e};cP.exports=Kee});var Hc=E((M_e,uP)=>{var Qee=Ne(),ete=Ge(),tte=Be(),nte=mt(),ite=Ys(),{translate:ste}=er(),sg=(t,e)=>{let n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t),r=ite(e),o=[0,0,0];return i[0]&&(o[0]=s[0]-(r[0][0]+(r[1][0]-r[0][0])/2)),i[1]&&(o[1]=s[1]-(r[0][1]+(r[1][1]-r[0][1])/2)),i[2]&&(o[2]=s[2]-(r[0][2]+(r[1][2]-r[0][2])/2)),ste(o,e)},vf=(t,...e)=>{let n={axes:[!0,!0,!0],relativeTo:[0,0,0]},{axes:i,relativeTo:s}=Object.assign({},n,t);if(e=Qee(e),e.length===0)throw new Error("wrong number of arguments");if(s.length!==3)throw new Error("relativeTo must be an array of length 3");t={axes:i,relativeTo:s};let r=e.map(o=>nte.isA(o)||ete.isA(o)||tte.isA(o)?sg(t,o):o);return r.length===1?r[0]:r},rte=(...t)=>vf({axes:[!0,!1,!1]},t),ote=(...t)=>vf({axes:[!1,!0,!1]},t),ate=(...t)=>vf({axes:[!1,!1,!0]},t);uP.exports={center:vf,centerX:rte,centerY:ote,centerZ:ate}});var $c=E((A_e,mP)=>{var cte=Ne(),hP=yt(),fP=Ge(),dP=Be(),pP=mt(),yf=(t,...e)=>{if(!Array.isArray(t))throw new Error("factors must be an array");if(e=cte(e),e.length===0)throw new Error("wrong number of arguments");for(t=t.slice();t.length<3;)t.push(1);if(t[0]<=0||t[1]<=0||t[2]<=0)throw new Error("factors must be positive");let n=hP.fromScaling(hP.create(),t),i=e.map(s=>pP.isA(s)?pP.transform(n,s):fP.isA(s)?fP.transform(n,s):dP.isA(s)?dP.transform(n,s):s);return i.length===1?i[0]:i},lte=(t,...e)=>yf([t,1,1],e),ute=(t,...e)=>yf([1,t,1],e),hte=(t,...e)=>yf([1,1,t],e);mP.exports={scale:yf,scaleX:lte,scaleY:ute,scaleZ:hte}});var _P=E((w_e,yP)=>{var fte=Ne(),gP=Ge(),xP=Be(),vP=mt(),dte=(t,...e)=>{if(e=fte(e),e.length===0)throw new Error("wrong number of arguments");let n=e.map(i=>vP.isA(i)?vP.transform(t,i):gP.isA(i)?gP.transform(t,i):xP.isA(i)?xP.transform(t,i):i);return n.length===1?n[0]:n};yP.exports=dte});var SP=E((T_e,bP)=>{bP.exports={align:lP(),center:Hc().center,centerX:Hc().centerX,centerY:Hc().centerY,centerZ:Hc().centerZ,mirror:Xo().mirror,mirrorX:Xo().mirrorX,mirrorY:Xo().mirrorY,mirrorZ:Xo().mirrorZ,rotate:jo().rotate,rotateX:jo().rotateX,rotateY:jo().rotateY,rotateZ:jo().rotateZ,scale:$c().scale,scaleX:$c().scaleX,scaleY:$c().scaleY,scaleZ:$c().scaleZ,transform:_P(),translate:er().translate,translateX:er().translateX,translateY:er().translateY,translateZ:er().translateZ}});var At=E((C_e,EP)=>{EP.exports={colors:zM(),curves:sA(),geometries:Mh(),maths:Cw(),measurements:hT(),primitives:j3(),text:rC(),utils:Tm(),booleans:MR(),expansions:jR(),extrusions:xD(),hulls:OD(),minkowski:BD(),modifiers:nP(),transforms:SP()}});var og=E((R_e,MP)=>{var rg=class t{constructor(e,n){if(n=n||{},this.size=0,this.type="",this.isClosed=!1,this.encoding="utf8",this.buffer=null,this.length=0,!e||!Array.isArray(e))return;e.forEach(r=>{typeof r=="string"?this.length+=r.length:r instanceof ArrayBuffer&&(this.length+=r.byteLength)}),n.type&&(this.type=n.type.toLowerCase()),n.endings,n.encoding&&(this.encoding=n.encoding.toLowerCase()),n.length&&(this.length=n.length);let i,s;this.buffer=Buffer.allocUnsafe(this.length);for(let r=0;r<e.length;r++)switch(typeof e[r]){case"string":i=this.buffer.write(e[r],this.size,this.encoding),this.size=this.size+i;break;case"object":if(s=e[r],s instanceof ArrayBuffer){let o=new DataView(s);for(let a=0;a<s.byteLength;a++){let c=o.getUint8(a);i=this.buffer.writeUInt8(c,this.size,!1),this.size++}}break;default:break}}asBuffer(){return this.buffer.slice(0,this.size)}arrayBuffer(){return this.buffer.slice(0,this.size)}slice(e,n,i){return e=e||0,n=n||this.size,i=i||"",new t}stream(){return null}text(){return""}close(){this.isClosed||(this.isClosed=!0)}toString(){return""}};MP.exports=rg});var ag=E((D_e,AP)=>{var pte=og(),mte=()=>typeof window<"u"?window.Blob:pte;AP.exports=mte});var TP=E((P_e,wP)=>{var gte=ag(),xte=gte(),vte=t=>{let{data:e,mimeType:n}=t;return new xte(e,{type:n})};wP.exports=vte});var RP=E((I_e,CP)=>{var cg=class{constructor(e){this._buffer=e,this._pos=0}readInt8(){return this._decodeInt(8,!0)}readUInt8(){return this._decodeInt(8,!1)}readInt16(){return this._decodeInt(16,!0)}readUInt16(){return this._decodeInt(16,!1)}readInt32(){return this._decodeInt(32,!0)}readUInt32(){return this._decodeInt(32,!1)}readFloat(){return this._decodeFloat(23,8)}readDouble(){return this._decodeFloat(52,11)}readChar(){return this.readString(1)}readString(e){this._checkSize(e*8);let n=this._buffer.substr(this._pos,e);return this._pos+=e,n}seek(e){this._pos=e,this._checkSize(0)}getPosition(){return this._pos}getSize(){return this._buffer.length}_decodeFloat(e,n){let i=e+n+1,s=i>>3;this._checkSize(i);let r=Math.pow(2,n-1)-1,o=this._readBits(e+n,1,s),a=this._readBits(e,n,s),c=0,l=2,u=0,f=0;do{let h=this._readByte(++u,s);f=e%8||8;let d=1<<f;for(;d>>=1;)h&d&&(c+=1/l),l*=2}while(e-=f);return this._pos+=s,a===(r<<1)+1?c?NaN:o?-1/0:1/0:(1+o*-2)*(a||c?a?Math.pow(2,a-r)*(1+c):Math.pow(2,-r+1)*c:0)}_decodeInt(e,n){let i=this._readBits(0,e,e/8),s=Math.pow(2,e),r=n&&i>=s/2?i-s:i;return this._pos+=e/8,r}_shl(e,n){for(++n;--n;e=((e%=2147483648)&1073741824)===1073741824?e*2:(e-1073741824)*2+2147483647+1);return e}_readByte(e,n){return this._buffer.charCodeAt(this._pos+n-e-1)&255}_readBits(e,n,i){let s=(e+n)%8,r=e%8,o=i-(e>>3)-1,a=i+(-(e+n)>>3),c=o-a,l=this._readByte(o,i)>>r&(1<<(c?8-r:n))-1;for(c&&s&&(l+=(this._readByte(a++,i)&(1<<s)-1)<<(c--<<3)-r);c;)l+=this._shl(this._readByte(a++,i),(c--<<3)-r);return l}_checkSize(e){this._pos+Math.ceil(e/8)<this._buffer.length}};CP.exports=cg});var PP=E((L_e,DP)=>{var yte=(t,e="utf-8")=>typeof t=="string"?t:new TextDecoder(e).decode(new Uint8Array(t));DP.exports=yte});var Ss=E((N_e,IP)=>{IP.exports={convertToBlob:TP(),makeBlob:ag(),BinaryReader:RP(),Blob:og(),ensureString:PP()}});var NP=E((F_e,LP)=>{"use strict";var _te=t=>t&&Object.prototype.toString.call(t)==="[object Object]";function bte(t){if(!(t>0))return n=>n;var e=" ".repeat(t);return n=>{if(typeof n!="string")return n;let i=n.split(`
`);return i.length===1?e+n:i.map(s=>s.trim()===""?s:e+s).join(`
`)}}var Ste=t=>t.split(`
`).filter(e=>e.trim()!=="").join(`
`);function Ete(t,e){let n=e>0?`
`:"",i=bte(e);function s(r){let o="",a=!0,c;return r.some((u,f,h)=>{if(f===0)return c="<"+u,h.length===1;if(f===1){if(_te(u)){if(Object.keys(u).map(d=>{let g=u[d];Array.isArray(g)&&(g=g.join(" ")),c+=" "+d+'="'+g+'"'}),h.length===2)return!0;c+=">";return}c+=">"}switch(typeof u){case"string":case"number":case"boolean":case"undefined":o+=u+n;return}a=!1,o+=s(u)})?c+"/>"+n:a?c+Ste(o)+"</"+r[0]+">"+n:c+n+i(o)+"</"+r[0]+">"+n}return s(t)}LP.exports=Ete});var UP=E((O_e,OP)=>{var FP=t=>t.reduce((e,n)=>Array.isArray(n)?e.concat(FP(n)):e.concat(n),[]);OP.exports=FP});var kP=E((U_e,BP)=>{var Mte=(t,e)=>t-e;BP.exports=Mte});var qP=E((B_e,zP)=>{var Ate=t=>{if(!(!Array.isArray(t)||t.length===0))return t[0]};zP.exports=Ate});var GP=E((k_e,VP)=>{var wte=(t,e,n)=>{let i=0,s=t.length;for(;s>i;){let r=Math.floor((i+s)/2),o=t[r];n(e,o)>0?i=r+1:s=r}return t.splice(i,0,e),t};VP.exports=wte});var $P=E((z_e,HP)=>{var Tte=(t,e)=>{if(!(!Array.isArray(t)||t.length<e))return t[e]};HP.exports=Tte});var XP=E((q_e,WP)=>{var Cte=(t,e,n)=>{for(t=t.slice();t.length<n;)t.push(e);return t};WP.exports=Cte});var ZP=E((V_e,YP)=>{var Rte=t=>Array.isArray(t)?t:t==null?[]:[t];YP.exports=Rte});var Ti=E((G_e,jP)=>{jP.exports={flatten:UP(),fnNumberSort:kP(),head:qP(),insertSorted:GP(),nth:$P(),padToLength:XP(),toArray:ZP()}});var lg=E((H_e,KP)=>{var Dte=NP(),{geometries:_f,modifiers:Pte}=At(),{flatten:Ite,toArray:Lte}=Ti(),Nte="application/amf+xml",Fte=(t,...e)=>{t=Object.assign({},{statusCallback:null,unit:"millimeter"},t),e=Ite(e);let i=e.filter(o=>_f.geom3.isA(o));if(i.length===0)throw new Error("only 3D geometries can be serialized to AMF");e.length!==i.length&&console.warn("some objects could not be serialized to AMF"),i=Lte(Pte.generalize({snap:!0,triangulate:!0},i)),t.statusCallback&&t.statusCallback({progress:0});let s=["amf",{unit:t.unit,version:"1.1"},["metadata",{type:"author"},"Created by JSCAD"]];s=s.concat(Ote(i,t));let r=`<?xml version="1.0" encoding="UTF-8"?>
${Dte(s,2)}`;return t&&t.statusCallback&&t.statusCallback({progress:100}),[r]},Ote=(t,e)=>{let n=[];return t.forEach((i,s)=>{_f.geom3.toPolygons(i).length>0&&(e.id=s,n.push(Ute(i,e)))}),n},Ute=(t,e)=>["object",{id:e.id},Bte(t,e)],Bte=(t,e)=>{let n=["mesh",{},kte(t,e)];return n=n.concat(Vte(t,e)),n},kte=(t,e)=>{let n=["vertices",{}],i=[];return _f.geom3.toPolygons(t).forEach(r=>{for(let o=0;o<r.vertices.length;o++)i.push(zte(r.vertices[o],e))}),n.concat(i)},zte=(t,e)=>["vertex",{},qte(t,e)],qte=(t,e)=>["coordinates",{},["x",{},t[0]],["y",{},t[1]],["z",{},t[2]]],Vte=(t,e)=>{let n=JP(t.color),i=_f.geom3.toPolygons(t),s=[],r=["volume",{}];n&&r.push(n);let o=0;return i.forEach(a=>{if(a.vertices.length<3)return;let c=Hte(a,o,e);r=r.concat(c),o+=a.vertices.length}),s.push(r),s},JP=t=>t?(t.length<4&&t.push(1),["color",{},["r",{},t[0]],["g",{},t[1]],["b",{},t[2]],["a",{},t[3]]]):null,Gte=(t,e)=>{let n=t.color;return JP(n)},Hte=(t,e,n)=>{let i=Gte(t,n),s=[];for(let r=0;r<t.vertices.length-2;r++)i?s.push(["triangle",{},i,["v1",{},e],["v2",{},e+r+1],["v3",{},e+r+2]]):s.push(["triangle",{},["v1",{},e],["v2",{},e+r+1],["v3",{},e+r+2]]);return s};KP.exports={serialize:Fte,mimeType:Nte}});var eI=E(($_e,QP)=>{var $te=function(){return`  0
SECTION
  2
HEADER
  9
$ACADVER
  1
AC1027
  9
$ACADMAINTVER
 70
8
  9
$DWGCODEPAGE
  3
ANSI_1252
  9
$LASTSAVEDBY
  1
unknown
  9
$REQUIREDVERSIONS
160
0
  9
$INSBASE
 10
0.0
 20
0.0
 30
0.0
  9
$EXTMIN
 10
1e+20
 20
1e+20
 30
1e+20
  9
$EXTMAX
 10
-1e+20
 20
-1e+20
 30
-1e+20
  9
$LIMMIN
 10
0.0
 20
0.0
  9
$LIMMAX
 10
12.0
 20
9.0
  9
$ORTHOMODE
 70
0
  9
$REGENMODE
 70
1
  9
$FILLMODE
 70
1
  9
$QTEXTMODE
 70
0
  9
$MIRRTEXT
 70
0
  9
$LTSCALE
 40
1.0
  9
$ATTMODE
 70
1
  9
$TEXTSIZE
 40
0.2
  9
$TRACEWID
 40
0.05
  9
$TEXTSTYLE
  7
Notes
  9
$CLAYER
  8
0
  9
$CELTYPE
  6
ByLayer
  9
$CECOLOR
 62
256
  9
$CELTSCALE
 40
1.0
  9
$DISPSILH
 70
0
  9
$DIMSCALE
 40
1.0
  9
$DIMASZ
 40
3.0
  9
$DIMEXO
 40
1.5
  9
$DIMDLI
 40
6.0
  9
$DIMRND
 40
0.0
  9
$DIMDLE
 40
0.0
  9
$DIMEXE
 40
3.0
  9
$DIMTP
 40
0.0
  9
$DIMTM
 40
0.0
  9
$DIMTXT
 40
3.0
  9
$DIMCEN
 40
3.0
  9
$DIMTSZ
 40
0.0
  9
$DIMTOL
 70
0
  9
$DIMLIM
 70
0
  9
$DIMTIH
 70
0
  9
$DIMTOH
 70
0
  9
$DIMSE1
 70
0
  9
$DIMSE2
 70
0
  9
$DIMTAD
 70
1
  9
$DIMZIN
 70
3
  9
$DIMBLK
  1

  9
$DIMASO
 70
1
  9
$DIMSHO
 70
1
  9
$DIMPOST
  1

  9
$DIMAPOST
  1

  9
$DIMALT
 70
0
  9
$DIMALTD
 70
2
  9
$DIMALTF
 40
25.4
  9
$DIMLFAC
 40
1.0
  9
$DIMTOFL
 70
0
  9
$DIMTVP
 40
0.0
  9
$DIMTIX
 70
0
  9
$DIMSOXD
 70
0
  9
$DIMSAH
 70
0
  9
$DIMBLK1
  1

  9
$DIMBLK2
  1

  9
$DIMSTYLE
  2
Civil-Metric
  9
$DIMCLRD
 70
0
  9
$DIMCLRE
 70
0
  9
$DIMCLRT
 70
0
  9
$DIMTFAC
 40
1.0
  9
$DIMGAP
 40
2.0
  9
$DIMJUST
 70
0
  9
$DIMSD1
 70
0
  9
$DIMSD2
 70
0
  9
$DIMTOLJ
 70
1
  9
$DIMTZIN
 70
0
  9
$DIMALTZ
 70
0
  9
$DIMALTTZ
 70
0
  9
$DIMUPT
 70
0
  9
$DIMDEC
 70
2
  9
$DIMTDEC
 70
2
  9
$DIMALTU
 70
2
  9
$DIMALTTD
 70
2
  9
$DIMTXSTY
  7
Standard
  9
$DIMAUNIT
 70
0
  9
$DIMADEC
 70
2
  9
$DIMALTRND
 40
0.0
  9
$DIMAZIN
 70
2
  9
$DIMDSEP
 70
46
  9
$DIMATFIT
 70
3
  9
$DIMFRAC
 70
1
  9
$DIMLDRBLK
  1

  9
$DIMLUNIT
 70
2
  9
$DIMLWD
 70
-2
  9
$DIMLWE
 70
-2
  9
$DIMTMOVE
 70
0
  9
$DIMFXL
 40
1.0
  9
$DIMFXLON
 70
0
  9
$DIMJOGANG
 40
0.785398163397
  9
$DIMTFILL
 70
0
  9
$DIMTFILLCLR
 70
0
  9
$DIMARCSYM
 70
0
  9
$DIMLTYPE
  6

  9
$DIMLTEX1
  6

  9
$DIMLTEX2
  6

  9
$DIMTXTDIRECTION
 70
0
  9
$LUNITS
 70
2
  9
$LUPREC
 70
4
  9
$SKETCHINC
 40
0.1
  9
$FILLETRAD
 40
0.0
  9
$AUNITS
 70
4
  9
$AUPREC
 70
5
  9
$MENU
  1
.
  9
$ELEVATION
 40
0.0
  9
$PELEVATION
 40
0.0
  9
$THICKNESS
 40
0.0
  9
$LIMCHECK
 70
0
  9
$CHAMFERA
 40
0.0
  9
$CHAMFERB
 40
0.0
  9
$CHAMFERC
 40
0.0
  9
$CHAMFERD
 40
0.0
  9
$SKPOLY
 70
0
  9
$TDCREATE
 40
2457986.69756
  9
$TDUCREATE
 40
2455631.2632
  9
$TDUPDATE
 40
2457986.69756
  9
$TDUUPDATE
 40
2456436.43179
  9
$TDINDWG
 40
0.0003490741
  9
$TDUSRTIMER
 40
0.0003487153
  9
$USRTIMER
 70
1
  9
$ANGBASE
 50
0.0
  9
$ANGDIR
 70
0
  9
$PDMODE
 70
0
  9
$PDSIZE
 40
0.0
  9
$PLINEWID
 40
0.0
  9
$SPLFRAME
 70
0
  9
$SPLINETYPE
 70
6
  9
$SPLINESEGS
 70
8
  9
$HANDSEED
  5
5C7
  9
$SURFTAB1
 70
6
  9
$SURFTAB2
 70
6
  9
$SURFTYPE
 70
6
  9
$SURFU
 70
6
  9
$SURFV
 70
6
  9
$UCSBASE
  2

  9
$UCSNAME
  2

  9
$UCSORG
 10
0.0
 20
0.0
 30
0.0
  9
$UCSXDIR
 10
1.0
 20
0.0
 30
0.0
  9
$UCSYDIR
 10
0.0
 20
1.0
 30
0.0
  9
$UCSORTHOREF
  2

  9
$UCSORTHOVIEW
 70
0
  9
$UCSORGTOP
 10
0.0
 20
0.0
 30
0.0
  9
$UCSORGBOTTOM
 10
0.0
 20
0.0
 30
0.0
  9
$UCSORGLEFT
 10
0.0
 20
0.0
 30
0.0
  9
$UCSORGRIGHT
 10
0.0
 20
0.0
 30
0.0
  9
$UCSORGFRONT
 10
0.0
 20
0.0
 30
0.0
  9
$UCSORGBACK
 10
0.0
 20
0.0
 30
0.0
  9
$PUCSBASE
  2

  9
$PUCSNAME
  2

  9
$PUCSORG
 10
0.0
 20
0.0
 30
0.0
  9
$PUCSXDIR
 10
1.0
 20
0.0
 30
0.0
  9
$PUCSYDIR
 10
0.0
 20
1.0
 30
0.0
  9
$PUCSORTHOREF
  2

  9
$PUCSORTHOVIEW
 70
0
  9
$PUCSORGTOP
 10
0.0
 20
0.0
 30
0.0
  9
$PUCSORGBOTTOM
 10
0.0
 20
0.0
 30
0.0
  9
$PUCSORGLEFT
 10
0.0
 20
0.0
 30
0.0
  9
$PUCSORGRIGHT
 10
0.0
 20
0.0
 30
0.0
  9
$PUCSORGFRONT
 10
0.0
 20
0.0
 30
0.0
  9
$PUCSORGBACK
 10
0.0
 20
0.0
 30
0.0
  9
$USERI1
 70
0
  9
$USERI2
 70
0
  9
$USERI3
 70
0
  9
$USERI4
 70
0
  9
$USERI5
 70
0
  9
$USERR1
 40
0.0
  9
$USERR2
 40
0.0
  9
$USERR3
 40
0.0
  9
$USERR4
 40
0.0
  9
$USERR5
 40
0.0
  9
$WORLDVIEW
 70
1
  9
$SHADEDGE
 70
3
  9
$SHADEDIF
 70
70
  9
$TILEMODE
 70
1
  9
$MAXACTVP
 70
64
  9
$PINSBASE
 10
0.0
 20
0.0
 30
0.0
  9
$PLIMCHECK
 70
0
  9
$PEXTMIN
 10
0.628866766397
 20
0.799999952316
 30
0.0
  9
$PEXTMAX
 10
9.02886638493
 20
7.19999957085
 30
0.0
  9
$PLIMMIN
 10
-0.700541819174
 20
-0.228100386192
  9
$PLIMMAX
 10
10.2994579405
 20
8.27189937351
  9
$UNITMODE
 70
0
  9
$VISRETAIN
 70
1
  9
$PLINEGEN
 70
0
  9
$PSLTSCALE
 70
1
  9
$TREEDEPTH
 70
3020
  9
$CMLSTYLE
  2
Standard
  9
$CMLJUST
 70
0
  9
$CMLSCALE
 40
1.0
  9
$PROXYGRAPHICS
 70
1
  9
$MEASUREMENT
 70
1
  9
$CELWEIGHT
370
-1
  9
$ENDCAPS
280
0
  9
$JOINSTYLE
280
0
  9
$LWDISPLAY
290
0
  9
$INSUNITS
 70
4
  9
$HYPERLINKBASE
  1

  9
$STYLESHEET
  1

  9
$XEDIT
290
1
  9
$CEPSNTYPE
380
0
  9
$PSTYLEMODE
290
1
  9
$FINGERPRINTGUID
  2
{39DB1BDD-BC6C-46D3-A333-DFCC0DC4782D}
  9
$VERSIONGUID
  2
{69EEBB2D-7039-498F-9366-3F994E4A07E7}
  9
$EXTNAMES
290
1
  9
$PSVPSCALE
 40
0.0
  9
$OLESTARTUP
290
0
  9
$SORTENTS
280
127
  9
$INDEXCTL
280
0
  9
$HIDETEXT
280
1
  9
$XCLIPFRAME
280
0
  9
$HALOGAP
280
0
  9
$OBSCOLOR
 70
257
  9
$OBSLTYPE
280
0
  9
$INTERSECTIONDISPLAY
280
0
  9
$INTERSECTIONCOLOR
 70
257
  9
$DIMASSOC
280
2
  9
$PROJECTNAME
  1

  9
$CAMERADISPLAY
290
0
  9
$LENSLENGTH
 40
50.0
  9
$CAMERAHEIGHT
 40
0.0
  9
$STEPSPERSEC
 40
2.0
  9
$STEPSIZE
 40
6.0
  9
$3DDWFPREC
 40
2.0
  9
$PSOLWIDTH
 40
0.25
  9
$PSOLHEIGHT
 40
4.0
  9
$LOFTANG1
 40
1.57079632679
  9
$LOFTANG2
 40
1.57079632679
  9
$LOFTMAG1
 40
0.0
  9
$LOFTMAG2
 40
0.0
  9
$LOFTPARAM
 70
7
  9
$LOFTNORMALS
280
1
  9
$LATITUDE
 40
37.795
  9
$LONGITUDE
 40
-122.394
  9
$NORTHDIRECTION
 40
0.0
  9
$TIMEZONE
 70
-8000
  9
$LIGHTGLYPHDISPLAY
280
1
  9
$TILEMODELIGHTSYNCH
280
1
  9
$CMATERIAL
347
96
  9
$SOLIDHIST
280
1
  9
$SHOWHIST
280
1
  9
$DWFFRAME
280
2
  9
$DGNFRAME
280
0
  9
$REALWORLDSCALE
290
1
  9
$INTERFERECOLOR
 62
1
  9
$INTERFEREOBJVS
345
A3
  9
$INTERFEREVPVS
346
A0
  9
$CSHADOW
280
0
  9
$SHADOWPLANELOCATION
 40
0.0
  0
ENDSEC`},Wte=function(){return`  0
SECTION
  2
CLASSES
  0
CLASS
  1
ACDBDICTIONARYWDFLT
  2
AcDbDictionaryWithDefault
  3
ObjectDBX Classes
 90
0
 91
1
280
0
281
0
  0
CLASS
  1
DICTIONARYVAR
  2
AcDbDictionaryVar
  3
ObjectDBX Classes
 90
0
 91
15
280
0
281
0
  0
CLASS
  1
TABLESTYLE
  2
AcDbTableStyle
  3
ObjectDBX Classes
 90
4095
 91
1
280
0
281
0
  0
CLASS
  1
MATERIAL
  2
AcDbMaterial
  3
ObjectDBX Classes
 90
1153
 91
3
280
0
281
0
  0
CLASS
  1
VISUALSTYLE
  2
AcDbVisualStyle
  3
ObjectDBX Classes
 90
4095
 91
26
280
0
281
0
  0
CLASS
  1
SCALE
  2
AcDbScale
  3
ObjectDBX Classes
 90
1153
 91
17
280
0
281
0
  0
CLASS
  1
MLEADERSTYLE
  2
AcDbMLeaderStyle
  3
ACDB_MLEADERSTYLE_CLASS
 90
4095
 91
3
280
0
281
0
  0
CLASS
  1
CELLSTYLEMAP
  2
AcDbCellStyleMap
  3
ObjectDBX Classes
 90
1152
 91
2
280
0
281
0
  0
CLASS
  1
EXACXREFPANELOBJECT
  2
ExAcXREFPanelObject
  3
EXAC_ESW
 90
1025
 91
0
280
0
281
0
  0
CLASS
  1
NPOCOLLECTION
  2
AcDbImpNonPersistentObjectsCollection
  3
ObjectDBX Classes
 90
1153
 91
0
280
0
281
0
  0
CLASS
  1
LAYER_INDEX
  2
AcDbLayerIndex
  3
ObjectDBX Classes
 90
0
 91
0
280
0
281
0
  0
CLASS
  1
SPATIAL_INDEX
  2
AcDbSpatialIndex
  3
ObjectDBX Classes
 90
0
 91
0
280
0
281
0
  0
CLASS
  1
IDBUFFER
  2
AcDbIdBuffer
  3
ObjectDBX Classes
 90
0
 91
0
280
0
281
0
  0
CLASS
  1
DIMASSOC
  2
AcDbDimAssoc
  3
"AcDbDimAssoc|Product Desc:     AcDim ARX App For Dimension|Company:          Autodesk, Inc.|WEB Address:      www.autodesk.com"
 90
0
 91
0
280
0
281
0
  0
CLASS
  1
ACDBSECTIONVIEWSTYLE
  2
AcDbSectionViewStyle
  3
ObjectDBX Classes
 90
1025
 91
1
280
0
281
0
  0
CLASS
  1
ACDBDETAILVIEWSTYLE
  2
AcDbDetailViewStyle
  3
ObjectDBX Classes
 90
1025
 91
1
280
0
281
0
  0
CLASS
  1
IMAGEDEF
  2
AcDbRasterImageDef
  3
ISM
 90
0
 91
1
280
0
281
0
  0
CLASS
  1
RASTERVARIABLES
  2
AcDbRasterVariables
  3
ISM
 90
0
 91
1
280
0
281
0
  0
CLASS
  1
IMAGEDEF_REACTOR
  2
AcDbRasterImageDefReactor
  3
ISM
 90
1
 91
1
280
0
281
0
  0
CLASS
  1
IMAGE
  2
AcDbRasterImage
  3
ISM
 90
2175
 91
1
280
0
281
1
  0
CLASS
  1
PDFDEFINITION
  2
AcDbPdfDefinition
  3
ObjectDBX Classes
 90
1153
 91
1
280
0
281
0
  0
CLASS
  1
PDFUNDERLAY
  2
AcDbPdfReference
  3
ObjectDBX Classes
 90
4095
 91
1
280
0
281
1
  0
CLASS
  1
DWFDEFINITION
  2
AcDbDwfDefinition
  3
ObjectDBX Classes
 90
1153
 91
2
280
0
281
0
  0
CLASS
  1
DWFUNDERLAY
  2
AcDbDwfReference
  3
ObjectDBX Classes
 90
1153
 91
1
280
0
281
1
  0
CLASS
  1
DGNDEFINITION
  2
AcDbDgnDefinition
  3
ObjectDBX Classes
 90
1153
 91
2
280
0
281
0
  0
CLASS
  1
DGNUNDERLAY
  2
AcDbDgnReference
  3
ObjectDBX Classes
 90
1153
 91
1
280
0
281
1
  0
ENDSEC`},Xte=function(){return`  0
SECTION
  2
TABLES
  0
TABLE
  2
VPORT
  5
8
330
0
100
AcDbSymbolTable
 70
0
  0
ENDTAB
  0
TABLE
  2
LTYPE
  5
5F
330
0
100
AcDbSymbolTable
 70
7
  0
LTYPE
  5
14
330
5F
100
AcDbSymbolTableRecord
100
AcDbLinetypeTableRecord
  2
ByBlock
 70
0
  3

 72
65
 73
0
 40
0.0
  0
LTYPE
  5
15
330
5F
100
AcDbSymbolTableRecord
100
AcDbLinetypeTableRecord
  2
ByLayer
 70
0
  3

 72
65
 73
0
 40
0.0
  0
LTYPE
  5
16
330
5F
100
AcDbSymbolTableRecord
100
AcDbLinetypeTableRecord
  2
Continuous
 70
0
  3
Solid line
 72
65
 73
0
 40
0.0
  0
LTYPE
  5
1B1
330
5F
100
AcDbSymbolTableRecord
100
AcDbLinetypeTableRecord
  2
CENTER
 70
0
  3
Center ____ _ ____ _ ____ _ ____ _ ____ _ ____
 72
65
 73
4
 40
2.0
 49
1.25
 74
0
 49
-0.25
 74
0
 49
0.25
 74
0
 49
-0.25
 74
0
  0
LTYPE
  5
1B2
330
5F
100
AcDbSymbolTableRecord
100
AcDbLinetypeTableRecord
  2
DASHED
 70
0
  3
Dashed __ __ __ __ __ __ __ __ __ __ __ __ __ _
 72
65
 73
2
 40
0.75
 49
0.5
 74
0
 49
-0.25
 74
0
  0
LTYPE
  5
1B3
330
5F
100
AcDbSymbolTableRecord
100
AcDbLinetypeTableRecord
  2
PHANTOM
 70
0
  3
Phantom ______  __  __  ______  __  __  ______
 72
65
 73
6
 40
2.5
 49
1.25
 74
0
 49
-0.25
 74
0
 49
0.25
 74
0
 49
-0.25
 74
0
 49
0.25
 74
0
 49
-0.25
 74
0
  0
LTYPE
  5
39E
330
5F
100
AcDbSymbolTableRecord
100
AcDbLinetypeTableRecord
  2
HIDDEN
 70
0
  3
Hidden __ __ __ __ __ __ __ __ __ __ __ __ __ __
 72
65
 73
2
 40
9.525
 49
6.35
 74
0
 49
-3.175
 74
0
  0
ENDTAB
  0
TABLE
  2
LAYER
  5
2
330
0
100
AcDbSymbolTable
 70
3
  0
LAYER
  5
10
330
2
100
AcDbSymbolTableRecord
100
AcDbLayerTableRecord
  2
0
 70
0
  6
Continuous
370
-3
390
F
347
98
348
0
  0
LAYER
  5
1B4
330
2
100
AcDbSymbolTableRecord
100
AcDbLayerTableRecord
  2
View Port
 70
0
  6
Continuous
290
0
370
-3
390
F
347
98
348
0
  0
LAYER
  5
21D
330
2
100
AcDbSymbolTableRecord
100
AcDbLayerTableRecord
  2
Defpoints
 70
0
  6
Continuous
290
0
370
-3
390
F
347
98
348
0
  0
ENDTAB
  0
TABLE
  2
STYLE
  5
3
330
0
100
AcDbSymbolTable
 70
3
  0
STYLE
  5
11
330
3
100
AcDbSymbolTableRecord
100
AcDbTextStyleTableRecord
  2
Standard
 70
0
 40
0.0
 41
1.0
 50
0.0
 71
0
 42
0.2
  3
arial.ttf
  4

  0
STYLE
  5
DC
330
3
100
AcDbSymbolTableRecord
100
AcDbTextStyleTableRecord
  2
Annotative
 70
0
 40
0.0
 41
1.0
 50
0.0
 71
0
 42
0.2
  3
arial.ttf
  4

  0
STYLE
  5
178
330
3
100
AcDbSymbolTableRecord
100
AcDbTextStyleTableRecord
  2
Notes
 70
0
 40
3.0
 41
1.0
 50
0.0
 71
0
 42
0.2
  3
arial.ttf
  4

  0
ENDTAB
  0
TABLE
  2
VIEW
  5
6
330
0
100
AcDbSymbolTable
 70
0
  0
ENDTAB
  0
TABLE
  2
UCS
  5
7
330
0
100
AcDbSymbolTable
 70
0
  0
ENDTAB
  0
TABLE
  2
APPID
  5
9
330
0
100
AcDbSymbolTable
 70
12
  0
APPID
  5
12
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD
 70
0
  0
APPID
  5
DD
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
AcadAnnoPO
 70
0
  0
APPID
  5
DE
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
AcadAnnotative
 70
0
  0
APPID
  5
DF
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD_DSTYLE_DIMJAG
 70
0
  0
APPID
  5
E0
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD_DSTYLE_DIMTALN
 70
0
  0
APPID
  5
107
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD_MLEADERVER
 70
0
  0
APPID
  5
1B5
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
AcAecLayerStandard
 70
0
  0
APPID
  5
1BA
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD_EXEMPT_FROM_CAD_STANDARDS
 70
0
  0
APPID
  5
237
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD_DSTYLE_DIMBREAK
 70
0
  0
APPID
  5
28E
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD_PSEXT
 70
0
  0
APPID
  5
4B0
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
ACAD_NAV_VCDISPLAY
 70
0
  0
APPID
  5
4E3
330
9
100
AcDbSymbolTableRecord
100
AcDbRegAppTableRecord
  2
HATCHBACKGROUNDCOLOR
 70
0
  0
ENDTAB
  0
TABLE
  2
DIMSTYLE
  5
A
330
0
100
AcDbSymbolTable
 70
3
100
AcDbDimStyleTable
 71
3
340
242
340
27
340
E1
  0
DIMSTYLE
105
27
330
A
100
AcDbSymbolTableRecord
100
AcDbDimStyleTableRecord
  2
Standard
 70
0
 41
3.0
 42
2.0
 43
9.0
 44
5.0
140
3.0
141
2.0
147
2.0
340
11
1001
ACAD_DSTYLE_DIMJAG
1070
388
1040
38.0
1001
ACAD_DSTYLE_DIMBREAK
1070
391
1040
90.0
1001
ACAD_DSTYLE_DIMTALN
1070
392
1070
0
  0
DIMSTYLE
105
E1
330
A
100
AcDbSymbolTableRecord
100
AcDbDimStyleTableRecord
  2
Annotative
 70
0
 40
0.0
 41
3.0
 42
2.5
 43
10.0
 44
5.0
140
3.0
141
2.0
147
2.0
340
11
1001
AcadAnnotative
1000
AnnotativeData
1002
{
1070
1
1070
1
1002
}
1001
ACAD_DSTYLE_DIMJAG
1070
388
1040
38.0
1001
ACAD_DSTYLE_DIMBREAK
1070
391
1040
90.0
1001
ACAD_DSTYLE_DIMTALN
1070
392
1070
0
  0
DIMSTYLE
105
242
330
A
100
AcDbSymbolTableRecord
100
AcDbDimStyleTableRecord
  2
Civil-Metric
 70
0
 41
3.0
 42
1.5
 43
6.0
 44
3.0
 73
0
 74
0
 77
1
 78
3
 79
2
140
3.0
141
3.0
147
2.0
179
2
271
2
272
2
276
1
340
11
1001
ACAD_DSTYLE_DIMBREAK
1070
391
1040
3.0
1001
ACAD_DSTYLE_DIMJAG
1070
388
1040
38.0
1001
ACAD_DSTYLE_DIMTALN
1070
392
1070
0
  0
ENDTAB
  0
TABLE
  2
BLOCK_RECORD
  5
1
330
0
100
AcDbSymbolTable
 70
4
  0
BLOCK_RECORD
  5
1F
330
1
100
AcDbSymbolTableRecord
100
AcDbBlockTableRecord
  2
*Model_Space
340
530
 70
0
280
1
281
0
  0
BLOCK_RECORD
  5
58
330
1
100
AcDbSymbolTableRecord
100
AcDbBlockTableRecord
  2
*Paper_Space
340
531
 70
0
280
1
281
0
  0
BLOCK_RECORD
  5
238
330
1
100
AcDbSymbolTableRecord
100
AcDbBlockTableRecord
  2
_ArchTick
340
0
 70
0
280
1
281
0
  0
BLOCK_RECORD
  5
23C
330
1
100
AcDbSymbolTableRecord
100
AcDbBlockTableRecord
  2
_Open30
340
0
 70
0
280
1
281
0
  0
ENDTAB
  0
ENDSEC`},Yte=function(){return`  0
SECTION
  2
BLOCKS
  0
BLOCK
  5
23A
330
238
100
AcDbEntity
  8
0
100
AcDbBlockBegin
  2
_ArchTick
 70
0
 10
0.0
 20
0.0
 30
0.0
  3
_ArchTick
  1

  0
ENDBLK
  5
23B
330
238
100
AcDbEntity
  8
0
100
AcDbBlockEnd
  0
BLOCK
  5
20
330
1F
100
AcDbEntity
  8
0
100
AcDbBlockBegin
  2
*Model_Space
 70
0
 10
0.0
 20
0.0
 30
0.0
  3
*Model_Space
  1

  0
ENDBLK
  5
21
330
1F
100
AcDbEntity
  8
0
100
AcDbBlockEnd
  0
BLOCK
  5
5A
330
58
100
AcDbEntity
 67
1
  8
0
100
AcDbBlockBegin
  2
*Paper_Space
 70
0
 10
0.0
 20
0.0
 30
0.0
  3
*Paper_Space
  1

  0
ENDBLK
  5
5B
330
58
100
AcDbEntity
 67
1
  8
0
100
AcDbBlockEnd
  0
BLOCK
  5
240
330
23C
100
AcDbEntity
  8
0
100
AcDbBlockBegin
  2
_Open30
 70
0
 10
0.0
 20
0.0
 30
0.0
  3
_Open30
  1

  0
ENDBLK
  5
241
330
23C
100
AcDbEntity
  8
0
100
AcDbBlockEnd
  0
ENDSEC`},Zte=function(){return`  0
SECTION
  2
OBJECTS
  0
DICTIONARY
  5
C
330
0
100
AcDbDictionary
281
1
  3
ACAD_COLOR
350
524
  3
ACAD_GROUP
350
525
  3
ACAD_LAYOUT
350
526
  3
ACAD_MATERIAL
350
527
  3
ACAD_MLEADERSTYLE
350
528
  3
ACAD_MLINESTYLE
350
529
  3
ACAD_PLOTSETTINGS
350
52A
  3
ACAD_PLOTSTYLENAME
350
52C
  3
ACAD_SCALELIST
350
52D
  3
ACAD_TABLESTYLE
350
52E
  3
ACAD_VISUALSTYLE
350
52F
  0
DICTIONARY
  5
524
330
C
100
AcDbDictionary
281
1
  0
DICTIONARY
  5
525
330
C
100
AcDbDictionary
281
1
  0
DICTIONARY
  5
526
330
C
100
AcDbDictionary
281
1
  3
Model
350
530
  3
Layout1
350
531
  0
DICTIONARY
  5
527
330
C
100
AcDbDictionary
281
1
  0
DICTIONARY
  5
528
330
C
100
AcDbDictionary
281
1
  0
DICTIONARY
  5
529
330
C
100
AcDbDictionary
281
1
  0
DICTIONARY
  5
52A
330
C
100
AcDbDictionary
281
1
  0
ACDBPLACEHOLDER
  5
52B
330
52C
  0
ACDBDICTIONARYWDFLT
  5
52C
330
C
100
AcDbDictionary
281
1
  3
Normal
350
52B
100
AcDbDictionaryWithDefault
340
52B
  0
DICTIONARY
  5
52D
330
C
100
AcDbDictionary
281
1
  0
DICTIONARY
  5
52E
330
C
100
AcDbDictionary
281
1
  0
DICTIONARY
  5
52F
330
C
100
AcDbDictionary
281
1
  0
LAYOUT
  5
530
330
526
100
AcDbPlotSettings
  1

  2
DWFx ePlot (XPS Compatible).pc3
  4
ANSI_A_(8.50_x_11.00_Inches)
  6

 40
5.8
 41
17.8
 42
5.8
 43
17.8
 44
215.9
 45
279.4
 46
0.0
 47
0.0
 48
0.0
 49
0.0
140
0.0
141
0.0
142
1.0
143
14.53
 70
11952
 72
0
 73
1
 74
0
  7

 75
0
147
0.069
148
114.98
149
300.29
100
AcDbLayout
  1
Model
 70
1
 71
0
 10
0.0
 20
0.0
 11
12.0
 21
9.0
 12
0.0
 22
0.0
 32
0.0
 14
0.0
 24
0.0
 34
0.0
 15
0.0
 25
0.0
 35
0.0
146
0.0
 13
0.0
 23
0.0
 33
0.0
 16
1.0
 26
0.0
 36
0.0
 17
0.0
 27
1.0
 37
0.0
 76
0
330
1F
  0
LAYOUT
  5
531
330
526
100
AcDbPlotSettings
  1

  2
DWFx ePlot (XPS Compatible).pc3
  4
ANSI_A_(8.50_x_11.00_Inches)
  6

 40
5.8
 41
17.8
 42
5.8
 43
17.8
 44
215.9
 45
279.4
 46
0.0
 47
0.0
 48
0.0
 49
0.0
140
0.0
141
0.0
142
1.0
143
1.0
 70
688
 72
0
 73
1
 74
5
  7
acad.ctb
 75
16
147
1.0
148
0.0
149
0.0
100
AcDbLayout
  1
Layout1
 70
1
 71
1
 10
-0.7
 20
-0.23
 11
10.3
 21
8.27
 12
0.0
 22
0.0
 32
0.0
 14
0.63
 24
0.8
 34
0.0
 15
9.0
 25
7.2
 35
0.0
146
0.0
 13
0.0
 23
0.0
 33
0.0
 16
1.0
 26
0.0
 36
0.0
 17
0.0
 27
1.0
 37
0.0
 76
0
330
58
  0
ENDSEC`};QP.exports={dxfHeaders:$te,dxfClasses:Wte,dxfTables:Xte,dxfBlocks:Yte,dxfObjects:Zte}});var nI=E((W_e,tI)=>{var jte=[[0,0,0,255],[255,0,0,255],[255,255,0,255],[0,255,0,255],[0,255,255,255],[0,0,255,255],[255,0,255,255],[255,255,255,255],[128,128,128,255],[192,192,192,255],[255,0,0,255],[255,127,127,255],[165,0,0,255],[165,82,82,255],[127,0,0,255],[127,63,63,255],[76,0,0,255],[76,38,38,255],[38,0,0,255],[38,19,19,255],[255,63,0,255],[255,159,127,255],[165,41,0,255],[165,103,82,255],[127,31,0,255],[127,79,63,255],[76,19,0,255],[76,47,38,255],[38,9,0,255],[38,28,19,255],[255,127,0,255],[255,191,127,255],[165,82,0,255],[165,124,82,255],[127,63,0,255],[127,95,63,255],[76,38,0,255],[76,57,38,255],[38,19,0,255],[38,28,19,255],[255,191,0,255],[255,223,127,255],[165,124,0,255],[165,145,82,255],[127,95,0,255],[127,111,63,255],[76,57,0,255],[76,66,38,255],[38,28,0,255],[38,33,19,255],[255,255,0,255],[255,255,127,255],[165,165,0,255],[165,165,82,255],[127,127,0,255],[127,127,63,255],[76,76,0,255],[76,76,38,255],[38,38,0,255],[38,38,19,255],[191,255,0,255],[223,255,127,255],[124,165,0,255],[145,165,82,255],[95,127,0,255],[111,127,63,255],[57,76,0,255],[66,76,38,255],[28,38,0,255],[33,38,19,255],[127,255,0,255],[191,255,127,255],[82,165,0,255],[124,165,82,255],[63,127,0,255],[95,127,63,255],[38,76,0,255],[57,76,38,255],[19,38,0,255],[28,38,19,255],[63,255,0,255],[159,255,127,255],[41,165,0,255],[103,165,82,255],[31,127,0,255],[79,127,63,255],[19,76,0,255],[47,76,38,255],[9,38,0,255],[23,38,19,255],[0,255,0,255],[125,255,127,255],[0,165,0,255],[82,165,82,255],[0,127,0,255],[63,127,63,255],[0,76,0,255],[38,76,38,255],[0,38,0,255],[19,38,19,255],[0,255,63,255],[127,255,159,255],[0,165,41,255],[82,165,103,255],[0,127,31,255],[63,127,79,255],[0,76,19,255],[38,76,47,255],[0,38,9,255],[19,88,23,255],[0,255,127,255],[127,255,191,255],[0,165,82,255],[82,165,124,255],[0,127,63,255],[63,127,95,255],[0,76,38,255],[38,76,57,255],[0,38,19,255],[19,88,28,255],[0,255,191,255],[127,255,223,255],[0,165,124,255],[82,165,145,255],[0,127,95,255],[63,127,111,255],[0,76,57,255],[38,76,66,255],[0,38,28,255],[19,88,88,255],[0,255,255,255],[127,255,255,255],[0,165,165,255],[82,165,165,255],[0,127,127,255],[63,127,127,255],[0,76,76,255],[38,76,76,255],[0,38,38,255],[19,88,88,255],[0,191,255,255],[127,223,255,255],[0,124,165,255],[82,145,165,255],[0,95,127,255],[63,111,217,255],[0,57,76,255],[38,66,126,255],[0,28,38,255],[19,88,88,255],[0,127,255,255],[127,191,255,255],[0,82,165,255],[82,124,165,255],[0,63,127,255],[63,95,127,255],[0,38,76,255],[38,57,126,255],[0,19,38,255],[19,28,88,255],[0,63,255,255],[127,159,255,255],[0,41,165,255],[82,103,165,255],[0,31,127,255],[63,79,127,255],[0,19,76,255],[38,47,126,255],[0,9,38,255],[19,23,88,255],[0,0,255,255],[127,127,255,255],[0,0,165,255],[82,82,165,255],[0,0,127,255],[63,63,127,255],[0,0,76,255],[38,38,126,255],[0,0,38,255],[19,19,88,255],[63,0,255,255],[159,127,255,255],[41,0,165,255],[103,82,165,255],[31,0,127,255],[79,63,127,255],[19,0,76,255],[47,38,126,255],[9,0,38,255],[23,19,88,255],[127,0,255,255],[191,127,255,255],[165,0,82,255],[124,82,165,255],[63,0,127,255],[95,63,127,255],[38,0,76,255],[57,38,126,255],[19,0,38,255],[28,19,88,255],[191,0,255,255],[223,127,255,255],[124,0,165,255],[142,82,165,255],[95,0,127,255],[111,63,127,255],[57,0,76,255],[66,38,76,255],[28,0,38,255],[88,19,88,255],[255,0,255,255],[255,127,255,255],[165,0,165,255],[165,82,165,255],[127,0,127,255],[127,63,127,255],[76,0,76,255],[76,38,76,255],[38,0,38,255],[88,19,88,255],[255,0,191,255],[255,127,223,255],[165,0,124,255],[165,82,145,255],[127,0,95,255],[127,63,111,255],[76,0,57,255],[76,38,66,255],[38,0,28,255],[88,19,88,255],[255,0,127,255],[255,127,191,255],[165,0,82,255],[165,82,124,255],[127,0,63,255],[127,63,95,255],[76,0,38,255],[76,38,57,255],[38,0,19,255],[88,19,28,255],[255,0,63,255],[255,127,159,255],[165,0,41,255],[165,82,103,255],[127,0,31,255],[127,63,79,255],[76,0,19,255],[76,38,47,255],[38,0,9,255],[88,19,23,255],[0,0,0,255],[101,101,101,255],[102,102,102,255],[153,153,153,255],[204,204,204,255],[255,255,255,255]];tI.exports=jte});var dg=E((X_e,sI)=>{var{geometries:Jte,modifiers:Kte}=At(),{geom3:bf,geom2:ug,path2:hg}=Jte,{flatten:Qte,toArray:ene}=Ti(),{dxfHeaders:tne,dxfClasses:nne,dxfTables:ine,dxfBlocks:sne,dxfObjects:rne}=eI(),one=nI(),ane="application/dxf",cne=(t,...e)=>{if(t=Object.assign({},{geom2To:"lwpolyline",geom3To:"3dface",pathTo:"lwpolyline",statusCallback:null,colorIndex:one},t),t.entityId=0,e=Qte(e),e=e.filter(s=>bf.isA(s)||ug.isA(s)||hg.isA(s)),e.length===0)throw new Error("only JSCAD geometries can be serialized to DXF");return e=ene(Kte.generalize({snap:!0,triangulate:!0},e)),[`999
Created by JSCAD
${tne(t)}
${nne(t)}
${ine(t)}
${sne(t)}
${lne(e,t)}
${rne(t)}
  0
EOF
`]},lne=(t,e)=>{let n=t.map((s,r)=>{if(ug.isA(s)){let o=s.color,a=s.name,l=ug.toOutlines(s).map(u=>({closed:!0,points:u,color:o,name:a}));return e.geom2To==="polyline"?une(l,e):iI(l,e)}if(bf.isA(s))return e.geom3To==="polyline"?pne(s,e):hne(s,e);if(hg.isA(s)){let o=s.color,a=s.name,c={closed:s.isClosed,points:hg.toPoints(s),color:o,name:a};return iI([c],e)}return""}),i=`  0
SECTION
  2
ENTITIES
`;return n.forEach(s=>{s&&(i+=s)}),i+=`  0
ENDSEC`,i},iI=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});let n="";return t.forEach((i,s)=>{if(i.points.length<1)return;let r=i.points.length+(i.closed?1:0);n+=`  0
LWPOLYLINE
  5
${sr(e)}
  100
AcDbEntity
  3
${fg(i,e)}
  8
0
  67
0
  62
${Wc(i,e)}
  100
AcDbPolyline
  90
${r}
  70
${i.closed?1:0}
`;for(let o=0;o<r;o++){let a=o;a>=i.points.length&&(a-=i.points.length);let c=i.points[a];n+=`  10
${c[0]}
  20
${c[1]}
`}e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),e.statusCallback&&e.statusCallback({progress:100}),[n]},une=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});let n="";return t.forEach((i,s)=>{let r=i.points.length+(i.closed?1:0);n+=`  0
POLYLINE
  5
${sr(e)}
  100
AcDbEntity
  3
${fg(i,e)}
  8
0
  62
${Wc(i,e)}
  100
AcDb2dPolyline
`;for(let o=0;o<r;o++){let a=o;a>=i.points.length&&(a-=i.points.length);let c=i.points[a];n+=`  0
VERTEX
  5
${sr(e)}
  100
AcDbEntity
  8
0
  100
AcDbVertex
  100
AcDb2dVertex
 10
${c[0]}
 20
${c[1]}
`}n+=`  0
SEQEND
  5
${sr(e)}
  100
AcDbEntity
`,e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),e.statusCallback&&e.statusCallback({progress:100}),[n]},hne=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});let n="",i=bf.toPolygons(t),s=Wc(t,e);return i.forEach((r,o)=>{let a=r.color?Wc(r,e):s;fne(r).forEach((l,u)=>{n+=dne(l,e,a)})}),e.statusCallback&&e.statusCallback({progress:100}),[n]},fne=t=>{let e=t.vertices.length-2;if(e<1)return[];let n=t.vertices[0],i=[];for(let s=0;s<e;s++)i.push([n,t.vertices[s+1],t.vertices[s+2]]);return i},dne=(t,e,n)=>{let i=t[0],s=t[1],r=t[2],o=t[2];return`  0
3DFACE
  5
${sr(e)}
  100
AcDbEntity
  8
0
  62
${n}
  100
AcDbFace
  70
0
  10
${i[0]}
  20
${i[1]}
  30
${i[2]}
  11
${s[0]}
  21
${s[1]}
  31
${s[2]}
  12
${r[0]}
  22
${r[1]}
  32
${r[2]}
  13
${o[0]}
  23
${o[1]}
  33
${o[2]}
`},pne=(t,e)=>{let n="",i=mne(bf.toPolygons(t));return i.faces.length>0&&(n+=`  0
POLYLINE
  5
${sr(e)}
  100
AcDbEntity
  3
${fg(t,e)}
  8
0
  62
${Wc(t,e)}
  100
AcDb3dPolyline
  70
64
  71
${i.vertices.length}
  72
${i.faces.length}
`,i.vertices.forEach(s=>{n+=`  0
VERTEX
  5
${sr(e)}
  100
AcDbEntity
  8
0
  100
AcDbVertex
  100
AcDb3dPolylineVertex
  10
${s[0]}
  20
${s[1]}
  30
${s[2]}
  70
192
`}),i.faces.forEach(s=>{n+=`  0
VERTEX
  5
${sr(e)}
  100
AcDbEntity
  8
0
  100
AcDbVertex
  100
AcDb3dPolylineVertex
  10
0
  20
0
  30
0
  70
128
  71
${s[0]}
  72
${s[1]}
  73
${s[2]}
  74
${s[3]}
`})),[n]},mne=t=>{let e=[],n=[];for(let i=0;i<t.length;++i){let s=t[i],r=[];for(let o=0;o<s.vertices.length;++o){let a=s.vertices[o];n.push([a[0],a[1],a[2]]),r.push(n.length)}for(;r.length<4;)r.push(0);e.push(r)}return{faces:e,vertices:n}},sr=t=>{t.entityId++;let e="00000"+t.entityId.toString(16).toUpperCase();return"CAD"+e.substr(e.length-5)},fg=(t,e)=>{if(t.name)return t.name;let n="00000"+e.entityId.toString(16).toUpperCase();return"CAD"+n.substr(n.length-5)},Wc=(t,e)=>{let n=256;if(t.color){let i=Math.floor(t.color[0]*255),s=Math.floor(t.color[1]*255),r=Math.floor(t.color[2]*255),o=e.colorIndex,a=765;for(let c=1;c<o.length;c++){let l=o[c],u=Math.abs(i-l[0])+Math.abs(s-l[1])+Math.abs(r-l[2]);if(u<a){if(n=c,u===0)break;a=u}}}return n};sI.exports={serialize:cne,mimeType:ane}});var pg=E((Y_e,rI)=>{var{utils:gne}=At(),xne=(t,e)=>{switch(t){case"transforms":case"plane":return Array.from(e);case"points":case"vertices":return e.map(n=>Array.from(n));case"sides":return e.map(n=>[Array.from(n[0]),Array.from(n[1])]);default:break}return e},vne=(t,...e)=>{t=Object.assign({},{statusCallback:null},t),e=gne.flatten(e),t.statusCallback&&t.statusCallback({progress:0});let i=JSON.stringify(e,xne);return t.statusCallback&&t.statusCallback({progress:100}),[i]},yne="application/json";rI.exports={serialize:vne,mimeType:yne}});var mg=E((Z_e,uI)=>{var{colors:oI,geometries:aI,modifiers:_ne}=At(),{flatten:bne,toArray:Sne}=Ti(),Ene="application/object",Mne=(t,...e)=>{t=Object.assign({},{statusCallback:null,triangulate:!0},t),e=bne(e);let i=e.filter(a=>aI.geom3.isA(a));if(i.length===0)throw new Error("only 3D geometries can be serialized to OBJ");e.length!==i.length&&console.warn("some objects could not be serialized to OBJ"),i=Sne(_ne.generalize({snap:!0,triangulate:t.triangulate},i)),t.statusCallback&&t.statusCallback({progress:0});let s=`# Wavefront OBJ file generated by JSCAD
`,r=new Map,o="default";return i.forEach((a,c)=>{t.statusCallback&&t.statusCallback({progress:100*c/i.length}),s+=`
`;let l=lI(a),u=aI.geom3.toPolygons(a).filter(f=>f.vertices.length>=3);u.forEach(f=>{f.vertices.forEach(h=>{let d=cI(h);if(!r.has(d)){let g=r.size+1;r.set(d,g),s+=`${d}
`}})}),s+=`
`,u.forEach(f=>{let h=f.vertices.map(g=>r.get(cI(g))),d=lI(f)||l||"default";d!==o&&(s+=`usemtl ${d}
`,o=d),s+=`f ${h.join(" ")}
`})}),t.statusCallback&&t.statusCallback({progress:100}),[s]},cI=t=>`v ${t[0]} ${t[1]} ${t[2]}`,lI=t=>{let e;if(t.color){let n=t.color[0],i=t.color[1],s=t.color[2],r=765;for(let o in oI.cssColors){let a=oI.cssColors[o],c=Math.abs(n-a[0])+Math.abs(i-a[1])+Math.abs(s-a[2]);if(c<r){if(e=o,c===0)break;r=c}}}return e};uI.exports={serialize:Mne,mimeType:Ene}});var fI=E((j_e,hI)=>{var{geometries:gg}=At(),Ane=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});let n=new ArrayBuffer(4),i=new Int32Array(n,0,1),s=new Int8Array(n,0,4);if(i[0]=287454020,s[0]!==68)throw new Error("Binary STL output is currently only supported on little-endian (Intel) processors");let r=0,o=0;t.forEach((x,m)=>{gg.geom3.toPolygons(x).forEach(S=>{let y=S.vertices.length,M=y>=3?y-2:0;r+=M,o+=1})});let a=new Uint8Array(80);for(let x=0;x<80;x++)a[x]=65;let c=new Uint32Array(1);c[0]=r;let l=new ArrayBuffer(50*r),u=new Int8Array(l),f=new ArrayBuffer(50),h=new Int8Array(f),d=new Float32Array(f,0,12),g=new Uint16Array(f,48,1),p=0;return t.forEach(x=>{gg.geom3.toPolygons(x).forEach((b,S)=>{let y=b.vertices,M=y.length,A=gg.poly3.plane(b);for(let w=0;w<M-2;w++){d[0]=A[0],d[1]=A[1],d[2]=A[2];let T=3;for(let v=0;v<3;v++){let _=v+(v>0?w:0),R=y[_];d[T++]=R[0],d[T++]=R[1],d[T++]=R[2]}g[0]=0,u.set(h,p),p+=50}e.statusCallback&&e.statusCallback({progress:100*S/o})})}),e.statusCallback&&e.statusCallback({progress:100}),[a.buffer,c.buffer,l]};hI.exports={serializeBinary:Ane}});var gI=E((J_e,mI)=>{var{geometries:dI}=At(),wne=(t,e)=>{e.statusCallback&&e.statusCallback({progress:0});let n=`solid JSCAD
${Tne(t,e)}
endsolid JSCAD
`;return e.statusCallback&&e.statusCallback({progress:100}),[n]},Tne=(t,e)=>{let n=[];return t.forEach((i,s)=>{n.push(Cne(i,e)),e.statusCallback&&e.statusCallback({progress:100*s/t.length})}),n.join(`
`)},Cne=(t,e)=>{let n=[];return dI.geom3.toPolygons(t).forEach((s,r)=>{n.push(Rne(s))}),n.join(`
`)},pI=t=>`${t[0]} ${t[1]} ${t[2]}`,xg=t=>`vertex ${pI(t)}`,Rne=t=>{let e=[];if(t.vertices.length>=3){let n=xg(t.vertices[0]);for(let i=0;i<t.vertices.length-2;i++){let s=`facet normal ${pI(dI.poly3.plane(t))}
outer loop
${n}
${xg(t.vertices[i+1])}
${xg(t.vertices[i+2])}
endloop
endfacet`;e.push(s)}}return e.join(`
`)};mI.exports={serializeText:wne}});var vg=E((K_e,xI)=>{var{geometries:Dne,modifiers:Pne}=At(),{flatten:Ine,toArray:Lne}=Ti(),{serializeBinary:Nne}=fI(),{serializeText:Fne}=gI(),One="application/sla",Une=(t,...e)=>{t=Object.assign({},{binary:!0,statusCallback:null},t),e=Ine(e);let i=e.filter(s=>Dne.geom3.isA(s));if(i.length===0)throw new Error("only 3D geometries can be serialized to STL");return e.length!==i.length&&console.warn("some objects could not be serialized to STL"),i=Lne(Pne.generalize({snap:!0,triangulate:!0},i)),t.binary?Nne(i,t):Fne(i,t)};xI.exports={mimeType:One,serialize:Une}});var yI=E((Q_e,vI)=>{"use strict";var Bne=t=>t&&Object.prototype.toString.call(t)==="[object Object]";function kne(t){if(!(t>0))return n=>n;var e=" ".repeat(t);return n=>{if(typeof n!="string")return n;let i=n.split(`
`);return i.length===1?e+n:i.map(s=>s.trim()===""?s:e+s).join(`
`)}}var zne=t=>t.split(`
`).filter(e=>e.trim()!=="").join(`
`);function qne(t,e){let n=e>0?`
`:"",i=kne(e);function s(r){let o="",a=!0,c;return r.some((u,f,h)=>{if(f===0)return c="<"+u,h.length===1;if(f===1){if(Bne(u)){if(Object.keys(u).map(d=>{let g=u[d];Array.isArray(g)&&(g=g.join(" ")),c+=" "+d+'="'+g+'"'}),h.length===2)return!0;c+=">";return}c+=">"}switch(typeof u){case"string":case"number":case"boolean":case"undefined":o+=u+n;return}a=!1,o+=s(u)})?c+"/>"+n:a?c+zne(o)+"</"+r[0]+">"+n:c+n+i(o)+"</"+r[0]+">"+n}return s(t)}vI.exports=qne});var _I=E((ebe,Vne)=>{Vne.exports={name:"@jscad/svg-serializer",version:"2.3.21",description:"SVG Serializer for JSCAD",homepage:"https://openjscad.xyz/",repository:"https://github.com/jscad/OpenJSCAD.org",main:"index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava --verbose --timeout 2m './tests/*.test.js'"},contributors:[{name:"Rene K. Mueller",url:"http://renekmueller.com"},{name:"z3dev",url:"http://www.z3d.jp"},{name:"Mark 'kaosat-dev' Moissette",url:"http://kaosat.net"}],keywords:["openjscad","jscad","export","serializer","svg"],license:"MIT",dependencies:{"@jscad/modeling":"2.13.0",onml:"1.3.0"},devDependencies:{ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var yg=E((tbe,MI)=>{var{geometries:ca,maths:bI,measurements:Gne,utils:Hne}=At(),$ne=yI(),Wne=_I().version,Xne="image/svg+xml",Yne=(t,...e)=>{t=Object.assign({},{unit:"mm",decimals:1e4,version:Wne,statusCallback:null},t),e=Hne.flatten(e);let i=e.filter(l=>ca.geom2.isA(l)||ca.path2.isA(l));if(i.length===0)throw new Error("only 2D geometries can be serialized to SVG");e.length!==i.length&&console.warn("some objects could not be serialized to SVG"),t.statusCallback&&t.statusCallback({progress:0});let s=Zne(i),r=0,o=0;s&&(r=Math.round((s[1][0]-s[0][0])*t.decimals)/t.decimals,o=Math.round((s[1][1]-s[0][1])*t.decimals)/t.decimals);let a=["svg",{width:r+t.unit,height:o+t.unit,viewBox:"0 0 "+r+" "+o,fill:"none","fill-rule":"evenodd","stroke-width":"0.1px",version:"1.1",baseProfile:"tiny",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}];s&&(a=a.concat(jne(i,s,t)));let c=`<?xml version="1.0" encoding="UTF-8"?>
<!-- Created by JSCAD SVG Serializer -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">
${$ne(a,2)}`;return t.statusCallback&&t.statusCallback({progress:100}),[c]},Zne=t=>{let e=Gne.measureBoundingBox(t);return t.length===1?e:e.reduce((i,s)=>(bI.vec3.min(i[0],i[0],s[0]),bI.vec3.max(i[1],i[1],s[1]),i),[[0,0,0],[0,0,0]])},jne=(t,e,n)=>{let i=0-e[0][0],s=0-e[1][1],r=[];return t.forEach((o,a)=>{n.statusCallback&&n.statusCallback({progress:100*a/t.length}),ca.geom2.isA(o)&&r.push(Kne(o,[i,s],n)),ca.path2.isA(o)&&r.push(eie([o],[i,s],n))}),r},Jne=(t,e,n,i)=>{let s=t-n,r=e-i;return t===n&&e===n?[t,e]:t===n?[t,i-r]:e===i?[n- -s,e]:[n- -s,i-r]},Kne=(t,e,n)=>{let s=ca.geom2.toOutlines(t).map(r=>ca.path2.fromPoints({closed:!0},r));return n.color="black",t.color&&(n.color=EI(t.color)),n.id=null,t.id&&(n.id=t.id),n.class=null,t.class&&(n.class=t.class),Qne(s,e,n)},Qne=(t,e,n)=>{let i="";t.forEach(r=>i+=SI(r,e,n));let s={fill:n.color,d:i};return n.id&&(s.id=n.id),n.class&&(s.class=n.class),["g",["path",s]]},eie=(t,e,n)=>t.reduce((i,s,r)=>{let o={d:SI(s,e,n)};return s.color&&(o.stroke=EI(s.color)),s.id&&(o.id=s.id),s.class&&(o.class=s.class),i.concat([["path",o]])},["g"]),SI=(t,e,n)=>{let i="",s=t.points.length+(t.isClosed?1:0);for(let r=0;r<s;r++){let o=r;o>=t.points.length&&(o-=t.points.length);let a=t.points[o],c=[a[0]+e[0],a[1]+e[1]],l=Jne(c[0],c[1],0,0),u=Math.round(l[0]*n.decimals)/n.decimals,f=Math.round(l[1]*n.decimals)/n.decimals;r>0?i+=`L${u} ${f}`:i+=`M${u} ${f}`}return i},EI=t=>`rgba(${t[0]*255},${t[1]*255},${t[2]*255},${t[3]})`;MI.exports={serialize:Yne,mimeType:Xne}});var wI=E((nbe,AI)=>{"use strict";var tie=t=>t&&Object.prototype.toString.call(t)==="[object Object]";function nie(t){if(!(t>0))return n=>n;var e=" ".repeat(t);return n=>{if(typeof n!="string")return n;let i=n.split(`
`);return i.length===1?e+n:i.map(s=>s.trim()===""?s:e+s).join(`
`)}}var iie=t=>t.split(`
`).filter(e=>e.trim()!=="").join(`
`);function sie(t,e){let n=e>0?`
`:"",i=nie(e);function s(r){let o="",a=!0,c;return r.some((u,f,h)=>{if(f===0)return c="<"+u,h.length===1;if(f===1){if(tie(u)){if(Object.keys(u).map(d=>{let g=u[d];Array.isArray(g)&&(g=g.join(" ")),c+=" "+d+'="'+g+'"'}),h.length===2)return!0;c+=">";return}c+=">"}switch(typeof u){case"string":case"number":case"boolean":case"undefined":o+=u+n;return}a=!1,o+=s(u)})?c+"/>"+n:a?c+iie(o)+"</"+r[0]+">"+n:c+n+i(o)+"</"+r[0]+">"+n}return s(t)}AI.exports=sie});var Mg=E((ibe,DI)=>{var{geometries:rie,modifiers:oie}=At(),{geom2:_g,geom3:Ef,path2:bg,poly2:CI,poly3:aie}=rie,{flatten:cie}=Ti(),lie=wI(),uie="model/x3d+xml",TI=new Map,hie=(t,...e)=>{if(t=Object.assign({},{color:[0,0,1,1],shininess:.03125,smooth:!1,decimals:1e3,metadata:!0,unit:"millimeter",statusCallback:null},t),e=cie(e),e=e.filter(r=>Ef.isA(r)||_g.isA(r)||bg.isA(r)),e.length===0)throw new Error("expected one or more geom3/geom2/path2 objects");t.statusCallback&&t.statusCallback({progress:0});let i=["X3D",{profile:"Interchange",version:"3.3","xmlns:xsd":"http://www.w3.org/2001/XMLSchema-instance","xsd:noNamespaceSchemaLocation":"http://www.web3d.org/specifications/x3d-3.3.xsd"}];t.metadata?i.push(["head",{},["meta",{name:"creator",content:"Created by JSCAD"}],["meta",{name:"reference",content:"https://www.openjscad.xyz"}],["meta",{name:"created",content:new Date().toISOString()}]]):i.push(["head",{},["meta",{name:"creator",content:"Created by JSCAD"}]]),i=i.concat(fie(e,t));let s=`<?xml version="1.0" encoding="UTF-8"?>
${lie(i,2)}`;return t&&t.statusCallback&&t.statusCallback({progress:100}),[s]},fie=(t,e)=>{let n=[];t.forEach((r,o)=>{e.statusCallback&&e.statusCallback({progress:100*o/t.length}),Ef.isA(r)&&(r=oie.generalize({snap:!0,triangulate:!0},r),Ef.toPolygons(r).length>0&&n.push(gie(r,e))),_g.isA(r)&&n.push(pie(r,e)),bg.isA(r)&&n.push(die(r,e))});let i=["Transform",{rotation:"1 0 0 -1.5708"},...n];return[["Scene",{},i]]},die=(t,e)=>{let n=bg.toPoints(t).slice();n.length>1&&t.isClosed&&n.push(n[0]);let i=["Shape",Sg(t),RI(CI.create(n),e)];return t.color&&i.push(Eg(t,"emissiveColor",e)),i},pie=(t,e)=>{let n=_g.toOutlines(t),i=["Group",{}];return n.forEach(s=>{s.length>1&&s.push(s[0]);let r=["Shape",Sg(t),RI(CI.create(s),e)];t.color&&r.push(Eg(t,"emissiveColor",e)),i.push(r)}),i},Sg=(t,e={})=>(t.id&&Object.assign(e,{DEF:mie(t.id)}),e),mie=t=>{let e=TI.get(t)||0;return TI.set(t,e+1),e>0&&console.warn(`Warning: object.id set as DEF but not unique. ${t} set ${e+1} times.`),t},RI=(t,e)=>["Polyline2D",{lineSegments:t.vertices.map(i=>`${i[0]} ${i[1]}`).join(" ")}],Eg=(t,e,n)=>{let s=t.color.slice(0,3).join(" "),r=Sf(1-t.color[3],n),o={[e]:s,transparency:r};return e==="diffuseColor"&&Object.assign(o,{specularColor:"0.2 0.2 0.2",shininess:n.shininess}),["Appearance",["Material",o]]},gie=(t,e)=>{let n=["Shape",Sg(t),xie(t,e)],i=["Appearance",{},["Material"]];return t.color&&(i=Eg(t,"diffuseColor",e)),n.push(i),n},xie=(t,e)=>{let n=vie(t,e),i=_ie(n,e),s=i[0].join(" "),r=i[1].join(" "),o=i[2].join(" "),a=["IndexedTriangleSet",{ccw:"true",colorPerVertex:"false",normalPerVertex:e.smooth,solid:"false",index:s},["Coordinate",{point:r}]];return t.color||a.push(["Color",{color:o}]),a},vie=(t,e)=>{let n=[];return Ef.toPolygons(t).forEach(s=>{let r=s.vertices[0];for(let o=s.vertices.length-3;o>=0;o--){let a=aie.fromPoints([r,s.vertices[o+1],s.vertices[o+2]]),c=e.color;t.color&&(c=t.color),s.color&&(c=s.color),a.color=c,n.push(a)}}),n},yie=(t,e)=>{let n=e.color;return t.color&&(n=t.color),`${n[0]} ${n[1]} ${n[2]}`},Sf=(t,e)=>Math.round(t*e.decimals)/e.decimals,_ie=(t,e)=>{let n=[],i=[],s=[],r=new Map;return t.forEach(o=>{let a=[],c=o.vertices.length;for(let l=0;l<c;l++){let u=o.vertices[l],f=`${u[0]},${u[1]},${u[2]}`;if(!r.has(f)){let h=Sf(u[0],e),d=Sf(u[1],e),g=Sf(u[2],e);i.push(`${h} ${d} ${g}`),r.set(f,i.length-1)}a.push(r.get(f))}n.push(a.join(" ")),s.push(yie(o,e))}),r.clear(),[n,i,s]};DI.exports={serialize:hie,mimeType:uie}});var LI=E(II=>{"use strict";var PI={};II.default=(function(t,e,n,i,s){var r=new Worker(PI[e]||(PI[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(o){var a=o.data,c=a.$e$;if(c){var l=new Error(c[0]);l.code=c[1],l.stack=c[2],s(l,null)}else s(null,a)},r.postMessage(n,i),r})});var $g=E(Fe=>{"use strict";var bie=LI(),ct=Uint8Array,yn=Uint16Array,da=Uint32Array,pa=new ct([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ma=new ct([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Xc=new ct([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),OI=function(t,e){for(var n=new yn(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var s=new da(n[30]),i=1;i<30;++i)for(var r=n[i];r<n[i+1];++r)s[r]=r-n[i]<<5|i;return[n,s]},UI=OI(pa,2),Ig=UI[0],Cf=UI[1];Ig[28]=258,Cf[258]=28;var BI=OI(ma,0),kI=BI[0],wg=BI[1],Yc=new yn(32768);for(ft=0;ft<32768;++ft)Es=(ft&43690)>>>1|(ft&21845)<<1,Es=(Es&52428)>>>2|(Es&13107)<<2,Es=(Es&61680)>>>4|(Es&3855)<<4,Yc[ft]=((Es&65280)>>>8|(Es&255)<<8)>>>1;var Es,ft,ui=(function(t,e,n){for(var i=t.length,s=0,r=new yn(e);s<i;++s)t[s]&&++r[t[s]-1];var o=new yn(e);for(s=0;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(n){a=new yn(1<<e);var c=15-e;for(s=0;s<i;++s)if(t[s])for(var l=s<<4|t[s],u=e-t[s],f=o[t[s]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)a[Yc[f]>>>c]=l}else for(a=new yn(i),s=0;s<i;++s)t[s]&&(a[s]=Yc[o[t[s]-1]++]>>>15-t[s]);return a}),As=new ct(288);for(ft=0;ft<144;++ft)As[ft]=8;var ft;for(ft=144;ft<256;++ft)As[ft]=9;var ft;for(ft=256;ft<280;++ft)As[ft]=7;var ft;for(ft=280;ft<288;++ft)As[ft]=8;var ft,ha=new ct(32);for(ft=0;ft<32;++ft)ha[ft]=5;var ft,zI=ui(As,9,0),qI=ui(As,9,1),VI=ui(ha,5,0),GI=ui(ha,5,1),Af=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},li=function(t,e,n){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&n},wf=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},jc=function(t){return(t+7)/8|0},hi=function(t,e,n){(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length);var i=new(t.BYTES_PER_ELEMENT==2?yn:t.BYTES_PER_ELEMENT==4?da:ct)(n-e);return i.set(t.subarray(e,n)),i};Fe.FlateErrorCode={UnexpectedEOF:0,InvalidBlockType:1,InvalidLengthLiteral:2,InvalidDistance:3,StreamFinished:4,NoStreamHandler:5,InvalidHeader:6,NoCallback:7,InvalidUTF8:8,ExtraFieldTooLong:9,InvalidDate:10,FilenameTooLong:11,StreamFinishing:12,InvalidZipData:13,UnknownCompressionMethod:14};var HI=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Te=function(t,e,n){var i=new Error(e||HI[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,Te),!n)throw i;return i},Jc=function(t,e,n){var i=t.length;if(!i||n&&n.f&&!n.l)return e||new ct(0);var s=!e||n,r=!n||n.i;n||(n={}),e||(e=new ct(i*3));var o=function(Z){var Q=e.length;if(Z>Q){var pe=new ct(Math.max(Q*2,Z));pe.set(e),e=pe}},a=n.f||0,c=n.p||0,l=n.b||0,u=n.l,f=n.d,h=n.m,d=n.n,g=i*8;do{if(!u){a=li(t,c,1);var p=li(t,c+1,3);if(c+=3,p)if(p==1)u=qI,f=GI,h=9,d=5;else if(p==2){var S=li(t,c,31)+257,y=li(t,c+10,15)+4,M=S+li(t,c+5,31)+1;c+=14;for(var A=new ct(M),w=new ct(19),T=0;T<y;++T)w[Xc[T]]=li(t,c+T*3,7);c+=y*3;for(var v=Af(w),_=(1<<v)-1,R=ui(w,v,1),T=0;T<M;){var D=R[li(t,c,_)];c+=D&15;var x=D>>>4;if(x<16)A[T++]=x;else{var L=0,N=0;for(x==16?(N=3+li(t,c,3),c+=2,L=A[T-1]):x==17?(N=3+li(t,c,7),c+=3):x==18&&(N=11+li(t,c,127),c+=7);N--;)A[T++]=L}}var B=A.subarray(0,S),F=A.subarray(S);h=Af(B),d=Af(F),u=ui(B,h,1),f=ui(F,d,1)}else Te(1);else{var x=jc(c)+4,m=t[x-4]|t[x-3]<<8,b=x+m;if(b>i){r&&Te(0);break}s&&o(l+m),e.set(t.subarray(x,b),l),n.b=l+=m,n.p=c=b*8,n.f=a;continue}if(c>g){r&&Te(0);break}}s&&o(l+131072);for(var W=(1<<h)-1,V=(1<<d)-1,K=c;;K=c){var L=u[wf(t,c)&W],ie=L>>>4;if(c+=L&15,c>g){r&&Te(0);break}if(L||Te(2),ie<256)e[l++]=ie;else if(ie==256){K=c,u=null;break}else{var le=ie-254;if(ie>264){var T=ie-257,Ce=pa[T];le=li(t,c,(1<<Ce)-1)+Ig[T],c+=Ce}var Ke=f[wf(t,c)&V],He=Ke>>>4;Ke||Te(3),c+=Ke&15;var F=kI[He];if(He>3){var Ce=ma[He];F+=wf(t,c)&(1<<Ce)-1,c+=Ce}if(c>g){r&&Te(0);break}s&&o(l+131072);for(var ke=l+le;l<ke;l+=4)e[l]=e[l-F],e[l+1]=e[l+1-F],e[l+2]=e[l+2-F],e[l+3]=e[l+3-F];l=ke}}n.l=u,n.p=K,n.b=l,n.f=a,u&&(a=1,n.m=h,n.d=f,n.n=d)}while(!a);return l==e.length?e:hi(e,0,l)},Yi=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>>8},la=function(t,e,n){n<<=e&7;var i=e/8|0;t[i]|=n,t[i+1]|=n>>>8,t[i+2]|=n>>>16},Tf=function(t,e){for(var n=[],i=0;i<t.length;++i)t[i]&&n.push({s:i,f:t[i]});var s=n.length,r=n.slice();if(!s)return[Ms,0];if(s==1){var o=new ct(n[0].s+1);return o[n[0].s]=1,[o,1]}n.sort(function(M,A){return M.f-A.f}),n.push({s:-1,f:25001});var a=n[0],c=n[1],l=0,u=1,f=2;for(n[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=s-1;)a=n[n[l].f<n[f].f?l++:f++],c=n[l!=u&&n[l].f<n[f].f?l++:f++],n[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var h=r[0].s,i=1;i<s;++i)r[i].s>h&&(h=r[i].s);var d=new yn(h+1),g=Rf(n[u-1],d,0);if(g>e){var i=0,p=0,x=g-e,m=1<<x;for(r.sort(function(A,w){return d[w.s]-d[A.s]||A.f-w.f});i<s;++i){var b=r[i].s;if(d[b]>e)p+=m-(1<<g-d[b]),d[b]=e;else break}for(p>>>=x;p>0;){var S=r[i].s;d[S]<e?p-=1<<e-d[S]++-1:++i}for(;i>=0&&p;--i){var y=r[i].s;d[y]==e&&(--d[y],++p)}g=e}return[new ct(d),g]},Rf=function(t,e,n){return t.s==-1?Math.max(Rf(t.l,e,n+1),Rf(t.r,e,n+1)):e[t.s]=n},Tg=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new yn(++e),i=0,s=t[0],r=1,o=function(c){n[i++]=c},a=1;a<=e;++a)if(t[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=t[a]}return[n.subarray(0,i),e]},ua=function(t,e){for(var n=0,i=0;i<e.length;++i)n+=t[i]*e[i];return n},Df=function(t,e,n){var i=n.length,s=jc(e+2);t[s]=i&255,t[s+1]=i>>>8,t[s+2]=t[s]^255,t[s+3]=t[s+1]^255;for(var r=0;r<i;++r)t[s+r+4]=n[r];return(s+4+i)*8},Cg=function(t,e,n,i,s,r,o,a,c,l,u){Yi(e,u++,n),++s[256];for(var f=Tf(s,15),h=f[0],d=f[1],g=Tf(r,15),p=g[0],x=g[1],m=Tg(h),b=m[0],S=m[1],y=Tg(p),M=y[0],A=y[1],w=new yn(19),T=0;T<b.length;++T)w[b[T]&31]++;for(var T=0;T<M.length;++T)w[M[T]&31]++;for(var v=Tf(w,7),_=v[0],R=v[1],D=19;D>4&&!_[Xc[D-1]];--D);var L=l+5<<3,N=ua(s,As)+ua(r,ha)+o,B=ua(s,h)+ua(r,p)+o+14+3*D+ua(w,_)+(2*w[16]+3*w[17]+7*w[18]);if(L<=N&&L<=B)return Df(e,u,t.subarray(c,c+l));var F,W,V,K;if(Yi(e,u,1+(B<N)),u+=2,B<N){F=ui(h,d,0),W=h,V=ui(p,x,0),K=p;var ie=ui(_,R,0);Yi(e,u,S-257),Yi(e,u+5,A-1),Yi(e,u+10,D-4),u+=14;for(var T=0;T<D;++T)Yi(e,u+3*T,_[Xc[T]]);u+=3*D;for(var le=[b,M],Ce=0;Ce<2;++Ce)for(var Ke=le[Ce],T=0;T<Ke.length;++T){var He=Ke[T]&31;Yi(e,u,ie[He]),u+=_[He],He>15&&(Yi(e,u,Ke[T]>>>5&127),u+=Ke[T]>>>12)}}else F=zI,W=As,V=VI,K=ha;for(var T=0;T<a;++T)if(i[T]>255){var He=i[T]>>>18&31;la(e,u,F[He+257]),u+=W[He+257],He>7&&(Yi(e,u,i[T]>>>23&31),u+=pa[He]);var ke=i[T]&31;la(e,u,V[ke]),u+=K[ke],ke>3&&(la(e,u,i[T]>>>5&8191),u+=ma[ke])}else la(e,u,F[i[T]]),u+=W[i[T]];return la(e,u,F[256]),u+W[256]},$I=new da([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ms=new ct(0),WI=function(t,e,n,i,s,r){var o=t.length,a=new ct(i+o+5*(1+Math.ceil(o/7e3))+s),c=a.subarray(i,a.length-s),l=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var f=u+65535;f>=o&&(c[l>>3]=r),l=Df(c,l+1,t.subarray(u,f))}else{for(var h=$I[e-1],d=h>>>13,g=h&8191,p=(1<<n)-1,x=new yn(32768),m=new yn(p+1),b=Math.ceil(n/3),S=2*b,y=function(St){return(t[St]^t[St+1]<<b^t[St+2]<<S)&p},M=new da(25e3),A=new yn(288),w=new yn(32),T=0,v=0,u=0,_=0,R=0,D=0;u<o;++u){var L=y(u),N=u&32767,B=m[L];if(x[N]=B,m[L]=N,R<=u){var F=o-u;if((T>7e3||_>24576)&&F>423){l=Cg(t,c,0,M,A,w,v,_,D,u-D,l),_=T=v=0,D=u;for(var W=0;W<286;++W)A[W]=0;for(var W=0;W<30;++W)w[W]=0}var V=2,K=0,ie=g,le=N-B&32767;if(F>2&&L==y(u-le))for(var Ce=Math.min(d,F)-1,Ke=Math.min(32767,u),He=Math.min(258,F);le<=Ke&&--ie&&N!=B;){if(t[u+V]==t[u+V-le]){for(var ke=0;ke<He&&t[u+ke]==t[u+ke-le];++ke);if(ke>V){if(V=ke,K=le,ke>Ce)break;for(var Z=Math.min(le,ke-2),Q=0,W=0;W<Z;++W){var pe=u-le+W+32768&32767,ze=x[pe],Ee=pe-ze+32768&32767;Ee>Q&&(Q=Ee,B=pe)}}}N=B,B=x[N],le+=N-B+32768&32767}if(K){M[_++]=268435456|Cf[V]<<18|wg[K];var ot=Cf[V]&31,Qt=wg[K]&31;v+=pa[ot]+ma[Qt],++A[257+ot],++w[Qt],R=u+V,++T}else M[_++]=t[u],++A[t[u]]}}l=Cg(t,c,r,M,A,w,v,_,D,u-D,l),!r&&l&7&&(l=Df(c,l+1,Ms))}return hi(a,0,i+jc(l)+s)},XI=(function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,i=9;--i;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t})(),ga=function(){var t=-1;return{p:function(e){for(var n=t,i=0;i<e.length;++i)n=XI[n&255^e[i]]^n>>>8;t=n},d:function(){return~t}}},Lg=function(){var t=1,e=0;return{p:function(n){for(var i=t,s=e,r=n.length|0,o=0;o!=r;){for(var a=Math.min(o+2655,r);o<a;++o)s+=i+=n[o];i=(i&65535)+15*(i>>16),s=(s&65535)+15*(s>>16)}t=i,e=s},d:function(){return t%=65521,e%=65521,(t&255)<<24|t>>>8<<16|(e&255)<<8|e>>>8}}},Wr=function(t,e,n,i,s){return WI(t,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):12+e.mem,n,i,!s)},Kc=function(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n},NI=function(t,e,n){for(var i=t(),s=t.toString(),r=s.slice(s.indexOf("[")+1,s.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var a=i[o],c=r[o];if(typeof a=="function"){e+=";"+c+"=";var l=a.toString();if(a.prototype)if(l.indexOf("[native code]")!=-1){var u=l.indexOf(" ",8)+1;e+=l.slice(u,l.indexOf("(",u))}else{e+=l;for(var f in a.prototype)e+=";"+c+".prototype."+f+"="+a.prototype[f].toString()}else e+=l}else n[c]=a}return[e,n]},Mf=[],Sie=function(t){var e=[];for(var n in t)t[n].buffer&&e.push((t[n]=new t[n].constructor(t[n])).buffer);return e},YI=function(t,e,n,i){var s;if(!Mf[n]){for(var r="",o={},a=t.length-1,c=0;c<a;++c)s=NI(t[c],r,o),r=s[0],o=s[1];Mf[n]=NI(t[a],r,o)}var l=Kc({},Mf[n][1]);return bie.default(Mf[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",n,l,Sie(l),i)},xa=function(){return[ct,yn,da,pa,ma,Xc,Ig,kI,qI,GI,Yc,HI,ui,Af,li,wf,jc,hi,Te,Jc,ba,ar,Ng]},va=function(){return[ct,yn,da,pa,ma,Xc,Cf,wg,zI,As,VI,ha,Yc,$I,Ms,ui,Yi,la,Tf,Rf,Tg,ua,Df,Cg,jc,hi,WI,Wr,Qc,ar]},ZI=function(){return[Fg,Ug,gt,ga,XI]},jI=function(){return[Og,QI]},JI=function(){return[Bg,gt,Lg]},KI=function(){return[eL]},ar=function(t){return postMessage(t,[t.buffer])},Ng=function(t){return t&&t.size&&new ct(t.size)},ya=function(t,e,n,i,s,r){var o=YI(n,i,s,function(a,c){o.terminate(),r(a,c)});return o.postMessage([t,e],e.consume?[t.buffer]:[]),function(){o.terminate()}},fi=function(t){return t.ondata=function(e,n){return postMessage([e,n],[e.buffer])},function(e){return t.push(e.data[0],e.data[1])}},_a=function(t,e,n,i,s){var r,o=YI(t,i,s,function(a,c){a?(o.terminate(),e.ondata.call(e,a)):(c[1]&&o.terminate(),e.ondata.call(e,a,c[0],c[1]))});o.postMessage(n),e.push=function(a,c){e.ondata||Te(5),r&&e.ondata(Te(4,0,1),null,!!c),o.postMessage([a,r=c],[a.buffer])},e.terminate=function(){o.terminate()}},wn=function(t,e){return t[e]|t[e+1]<<8},Xt=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},Ag=function(t,e){return Xt(t,e)+Xt(t,e+4)*4294967296},gt=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8},Fg=function(t,e){var n=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&gt(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),n){t[3]=8;for(var i=0;i<=n.length;++i)t[i+10]=n.charCodeAt(i)}},Og=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&Te(6,"invalid gzip data");var e=t[3],n=10;e&4&&(n+=t[10]|(t[11]<<8)+2);for(var i=(e>>3&1)+(e>>4&1);i>0;i-=!t[n++]);return n+(e&2)},QI=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},Ug=function(t){return 10+(t.filename&&t.filename.length+1||0)},Bg=function(t,e){var n=e.level,i=n==0?0:n<6?1:n==9?3:2;t[0]=120,t[1]=i<<6|(i?32-2*i:1)},eL=function(t){((t[0]&15)!=8||t[0]>>>4>7||(t[0]<<8|t[1])%31)&&Te(6,"invalid zlib data"),t[1]&32&&Te(6,"invalid zlib data: preset dictionaries not supported")};function kg(t,e){return!e&&typeof t=="function"&&(e=t,t={}),this.ondata=e,t}var Zi=(function(){function t(e,n){!n&&typeof e=="function"&&(n=e,e={}),this.ondata=n,this.o=e||{}}return t.prototype.p=function(e,n){this.ondata(Wr(e,this.o,0,0,!n),n)},t.prototype.push=function(e,n){this.ondata||Te(5),this.d&&Te(4),this.d=n,this.p(e,n||!1)},t})();Fe.Deflate=Zi;var tL=(function(){function t(e,n){_a([va,function(){return[fi,Zi]}],this,kg.call(this,e,n),function(i){var s=new Zi(i.data);onmessage=fi(s)},6)}return t})();Fe.AsyncDeflate=tL;function nL(t,e,n){return n||(n=e,e={}),typeof n!="function"&&Te(7),ya(t,e,[va],function(i){return ar(Qc(i.data[0],i.data[1]))},0,n)}Fe.deflate=nL;function Qc(t,e){return Wr(t,e||{},0,0)}Fe.deflateSync=Qc;var On=(function(){function t(e){this.s={},this.p=new ct(0),this.ondata=e}return t.prototype.e=function(e){this.ondata||Te(5),this.d&&Te(4);var n=this.p.length,i=new ct(n+e.length);i.set(this.p),i.set(e,n),this.p=i},t.prototype.c=function(e){this.d=this.s.i=e||!1;var n=this.s.b,i=Jc(this.p,this.o,this.s);this.ondata(hi(i,n,this.s.b),this.d),this.o=hi(i,this.s.b-32768),this.s.b=this.o.length,this.p=hi(this.p,this.s.p/8|0),this.s.p&=7},t.prototype.push=function(e,n){this.e(e),this.c(n)},t})();Fe.Inflate=On;var zg=(function(){function t(e){this.ondata=e,_a([xa,function(){return[fi,On]}],this,0,function(){var n=new On;onmessage=fi(n)},7)}return t})();Fe.AsyncInflate=zg;function qg(t,e,n){return n||(n=e,e={}),typeof n!="function"&&Te(7),ya(t,e,[xa],function(i){return ar(ba(i.data[0],Ng(i.data[1])))},1,n)}Fe.inflate=qg;function ba(t,e){return Jc(t,e)}Fe.inflateSync=ba;var Pf=(function(){function t(e,n){this.c=ga(),this.l=0,this.v=1,Zi.call(this,e,n)}return t.prototype.push=function(e,n){Zi.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e),this.l+=e.length;var i=Wr(e,this.o,this.v&&Ug(this.o),n&&8,!n);this.v&&(Fg(i,this.o),this.v=0),n&&(gt(i,i.length-8,this.c.d()),gt(i,i.length-4,this.l)),this.ondata(i,n)},t})();Fe.Gzip=Pf;Fe.Compress=Pf;var iL=(function(){function t(e,n){_a([va,ZI,function(){return[fi,Zi,Pf]}],this,kg.call(this,e,n),function(i){var s=new Pf(i.data);onmessage=fi(s)},8)}return t})();Fe.AsyncGzip=iL;Fe.AsyncCompress=iL;function sL(t,e,n){return n||(n=e,e={}),typeof n!="function"&&Te(7),ya(t,e,[va,ZI,function(){return[If]}],function(i){return ar(If(i.data[0],i.data[1]))},2,n)}Fe.gzip=sL;Fe.compress=sL;function If(t,e){e||(e={});var n=ga(),i=t.length;n.p(t);var s=Wr(t,e,Ug(e),8),r=s.length;return Fg(s,e),gt(s,r-8,n.d()),gt(s,r-4,i),s}Fe.gzipSync=If;Fe.compressSync=If;var Lf=(function(){function t(e){this.v=1,On.call(this,e)}return t.prototype.push=function(e,n){if(On.prototype.e.call(this,e),this.v){var i=this.p.length>3?Og(this.p):4;if(i>=this.p.length&&!n)return;this.p=this.p.subarray(i),this.v=0}n&&(this.p.length<8&&Te(6,"invalid gzip data"),this.p=this.p.subarray(0,-8)),On.prototype.c.call(this,n)},t})();Fe.Gunzip=Lf;var rL=(function(){function t(e){this.ondata=e,_a([xa,jI,function(){return[fi,On,Lf]}],this,0,function(){var n=new Lf;onmessage=fi(n)},9)}return t})();Fe.AsyncGunzip=rL;function oL(t,e,n){return n||(n=e,e={}),typeof n!="function"&&Te(7),ya(t,e,[xa,jI,function(){return[Nf]}],function(i){return ar(Nf(i.data[0]))},3,n)}Fe.gunzip=oL;function Nf(t,e){return Jc(t.subarray(Og(t),-8),e||new ct(QI(t)))}Fe.gunzipSync=Nf;var Rg=(function(){function t(e,n){this.c=Lg(),this.v=1,Zi.call(this,e,n)}return t.prototype.push=function(e,n){Zi.prototype.push.call(this,e,n)},t.prototype.p=function(e,n){this.c.p(e);var i=Wr(e,this.o,this.v&&2,n&&4,!n);this.v&&(Bg(i,this.o),this.v=0),n&&gt(i,i.length-4,this.c.d()),this.ondata(i,n)},t})();Fe.Zlib=Rg;var Eie=(function(){function t(e,n){_a([va,JI,function(){return[fi,Zi,Rg]}],this,kg.call(this,e,n),function(i){var s=new Rg(i.data);onmessage=fi(s)},10)}return t})();Fe.AsyncZlib=Eie;function Mie(t,e,n){return n||(n=e,e={}),typeof n!="function"&&Te(7),ya(t,e,[va,JI,function(){return[Dg]}],function(i){return ar(Dg(i.data[0],i.data[1]))},4,n)}Fe.zlib=Mie;function Dg(t,e){e||(e={});var n=Lg();n.p(t);var i=Wr(t,e,2,4);return Bg(i,e),gt(i,i.length-4,n.d()),i}Fe.zlibSync=Dg;var Ff=(function(){function t(e){this.v=1,On.call(this,e)}return t.prototype.push=function(e,n){if(On.prototype.e.call(this,e),this.v){if(this.p.length<2&&!n)return;this.p=this.p.subarray(2),this.v=0}n&&(this.p.length<4&&Te(6,"invalid zlib data"),this.p=this.p.subarray(0,-4)),On.prototype.c.call(this,n)},t})();Fe.Unzlib=Ff;var aL=(function(){function t(e){this.ondata=e,_a([xa,KI,function(){return[fi,On,Ff]}],this,0,function(){var n=new Ff;onmessage=fi(n)},11)}return t})();Fe.AsyncUnzlib=aL;function cL(t,e,n){return n||(n=e,e={}),typeof n!="function"&&Te(7),ya(t,e,[xa,KI,function(){return[Of]}],function(i){return ar(Of(i.data[0],Ng(i.data[1])))},5,n)}Fe.unzlib=cL;function Of(t,e){return Jc((eL(t),t.subarray(2,-4)),e)}Fe.unzlibSync=Of;var lL=(function(){function t(e){this.G=Lf,this.I=On,this.Z=Ff,this.ondata=e}return t.prototype.push=function(e,n){if(this.ondata||Te(5),this.s)this.s.push(e,n);else{if(this.p&&this.p.length){var i=new ct(this.p.length+e.length);i.set(this.p),i.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var s=this,r=function(){s.ondata.apply(s,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(r):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(r):new this.Z(r),this.s.push(this.p,n),this.p=null}}},t})();Fe.Decompress=lL;var Aie=(function(){function t(e){this.G=rL,this.I=zg,this.Z=aL,this.ondata=e}return t.prototype.push=function(e,n){lL.prototype.push.call(this,e,n)},t})();Fe.AsyncDecompress=Aie;function wie(t,e,n){return n||(n=e,e={}),typeof n!="function"&&Te(7),t[0]==31&&t[1]==139&&t[2]==8?oL(t,e,n):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?qg(t,e,n):cL(t,e,n)}Fe.decompress=wie;function Tie(t,e){return t[0]==31&&t[1]==139&&t[2]==8?Nf(t,e):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?ba(t,e):Of(t,e)}Fe.decompressSync=Tie;var Vg=function(t,e,n,i){for(var s in t){var r=t[s],o=e+s,a=i;Array.isArray(r)&&(a=Kc(i,r[1]),r=r[0]),r instanceof ct?n[o]=[r,a]:(n[o+="/"]=[new ct(0),a],Vg(r,o,n,i))}},FI=typeof TextEncoder<"u"&&new TextEncoder,Pg=typeof TextDecoder<"u"&&new TextDecoder,uL=0;try{Pg.decode(Ms,{stream:!0}),uL=1}catch{}var hL=function(t){for(var e="",n=0;;){var i=t[n++],s=(i>127)+(i>223)+(i>239);if(n+s>t.length)return[e,hi(t,n-1)];s?s==3?(i=((i&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):s&1?e+=String.fromCharCode((i&31)<<6|t[n++]&63):e+=String.fromCharCode((i&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(i)}},Cie=(function(){function t(e){this.ondata=e,uL?this.t=new TextDecoder:this.p=Ms}return t.prototype.push=function(e,n){if(this.ondata||Te(5),n=!!n,this.t){this.ondata(this.t.decode(e,{stream:!0}),n),n&&(this.t.decode().length&&Te(8),this.t=null);return}this.p||Te(4);var i=new ct(this.p.length+e.length);i.set(this.p),i.set(e,this.p.length);var s=hL(i),r=s[0],o=s[1];n?(o.length&&Te(8),this.p=null):this.p=o,this.ondata(r,n)},t})();Fe.DecodeUTF8=Cie;var Rie=(function(){function t(e){this.ondata=e}return t.prototype.push=function(e,n){this.ondata||Te(5),this.d&&Te(4),this.ondata(or(e),this.d=n||!1)},t})();Fe.EncodeUTF8=Rie;function or(t,e){if(e){for(var n=new ct(t.length),i=0;i<t.length;++i)n[i]=t.charCodeAt(i);return n}if(FI)return FI.encode(t);for(var s=t.length,r=new ct(t.length+(t.length>>1)),o=0,a=function(u){r[o++]=u},i=0;i<s;++i){if(o+5>r.length){var c=new ct(o+8+(s-i<<1));c.set(r),r=c}var l=t.charCodeAt(i);l<128||e?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|t.charCodeAt(++i)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return hi(r,0,o)}Fe.strToU8=or;function Gg(t,e){if(e){for(var n="",i=0;i<t.length;i+=16384)n+=String.fromCharCode.apply(null,t.subarray(i,i+16384));return n}else{if(Pg)return Pg.decode(t);var s=hL(t),r=s[0],o=s[1];return o.length&&Te(8),r}}Fe.strFromU8=Gg;var fL=function(t){return t==1?3:t<6?2:t==9?1:0},dL=function(t,e){return e+30+wn(t,e+26)+wn(t,e+28)},pL=function(t,e,n){var i=wn(t,e+28),s=Gg(t.subarray(e+46,e+46+i),!(wn(t,e+8)&2048)),r=e+46+i,o=Xt(t,e+20),a=n&&o==4294967295?mL(t,r):[o,Xt(t,e+24),Xt(t,e+42)],c=a[0],l=a[1],u=a[2];return[wn(t,e+10),c,l,s,r+wn(t,e+30)+wn(t,e+32),u]},mL=function(t,e){for(;wn(t,e)!=1;e+=4+wn(t,e+2));return[Ag(t,e+12),Ag(t,e+4),Ag(t,e+20)]},rr=function(t){var e=0;if(t)for(var n in t){var i=t[n].length;i>65535&&Te(9),e+=i+4}return e},fa=function(t,e,n,i,s,r,o,a){var c=i.length,l=n.extra,u=a&&a.length,f=rr(l);gt(t,e,o!=null?33639248:67324752),e+=4,o!=null&&(t[e++]=20,t[e++]=n.os),t[e]=20,e+=2,t[e++]=n.flag<<1|(r==null&&8),t[e++]=s&&8,t[e++]=n.compression&255,t[e++]=n.compression>>8;var h=new Date(n.mtime==null?Date.now():n.mtime),d=h.getFullYear()-1980;if((d<0||d>119)&&Te(10),gt(t,e,d<<25|h.getMonth()+1<<21|h.getDate()<<16|h.getHours()<<11|h.getMinutes()<<5|h.getSeconds()>>>1),e+=4,r!=null&&(gt(t,e,n.crc),gt(t,e+4,r),gt(t,e+8,n.size)),gt(t,e+12,c),gt(t,e+14,f),e+=16,o!=null&&(gt(t,e,u),gt(t,e+6,n.attrs),gt(t,e+10,o),e+=14),t.set(i,e),e+=c,f)for(var g in l){var p=l[g],x=p.length;gt(t,e,+g),gt(t,e+2,x),t.set(p,e+4),e+=4+x}return u&&(t.set(a,e),e+=u),e},Hg=function(t,e,n,i,s){gt(t,e,101010256),gt(t,e+8,n),gt(t,e+10,n),gt(t,e+12,i),gt(t,e+16,s)},Zc=(function(){function t(e){this.filename=e,this.c=ga(),this.size=0,this.compression=0}return t.prototype.process=function(e,n){this.ondata(null,e,n)},t.prototype.push=function(e,n){this.ondata||Te(5),this.c.p(e),this.size+=e.length,n&&(this.crc=this.c.d()),this.process(e,n||!1)},t})();Fe.ZipPassThrough=Zc;var Die=(function(){function t(e,n){var i=this;n||(n={}),Zc.call(this,e),this.d=new Zi(n,function(s,r){i.ondata(null,s,r)}),this.compression=8,this.flag=fL(n.level)}return t.prototype.process=function(e,n){try{this.d.push(e,n)}catch(i){this.ondata(i,null,n)}},t.prototype.push=function(e,n){Zc.prototype.push.call(this,e,n)},t})();Fe.ZipDeflate=Die;var Pie=(function(){function t(e,n){var i=this;n||(n={}),Zc.call(this,e),this.d=new tL(n,function(s,r,o){i.ondata(s,r,o)}),this.compression=8,this.flag=fL(n.level),this.terminate=this.d.terminate}return t.prototype.process=function(e,n){this.d.push(e,n)},t.prototype.push=function(e,n){Zc.prototype.push.call(this,e,n)},t})();Fe.AsyncZipDeflate=Pie;var Iie=(function(){function t(e){this.ondata=e,this.u=[],this.d=1}return t.prototype.add=function(e){var n=this;if(this.ondata||Te(5),this.d&2)this.ondata(Te(4+(this.d&1)*8,0,1),null,!1);else{var i=or(e.filename),s=i.length,r=e.comment,o=r&&or(r),a=s!=e.filename.length||o&&r.length!=o.length,c=s+rr(e.extra)+30;s>65535&&this.ondata(Te(11,0,1),null,!1);var l=new ct(c);fa(l,0,e,i,a);var u=[l],f=function(){for(var x=0,m=u;x<m.length;x++){var b=m[x];n.ondata(null,b,!1)}u=[]},h=this.d;this.d=0;var d=this.u.length,g=Kc(e,{f:i,u:a,o,t:function(){e.terminate&&e.terminate()},r:function(){if(f(),h){var x=n.u[d+1];x?x.r():n.d=1}h=1}}),p=0;e.ondata=function(x,m,b){if(x)n.ondata(x,m,b),n.terminate();else if(p+=m.length,u.push(m),b){var S=new ct(16);gt(S,0,134695760),gt(S,4,e.crc),gt(S,8,p),gt(S,12,e.size),u.push(S),g.c=p,g.b=c+p+16,g.crc=e.crc,g.size=e.size,h&&g.r(),h=1}else h&&f()},this.u.push(g)}},t.prototype.end=function(){var e=this;if(this.d&2){this.ondata(Te(4+(this.d&1)*8,0,1),null,!0);return}this.d?this.e():this.u.push({r:function(){e.d&1&&(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},t.prototype.e=function(){for(var e=0,n=0,i=0,s=0,r=this.u;s<r.length;s++){var o=r[s];i+=46+o.f.length+rr(o.extra)+(o.o?o.o.length:0)}for(var a=new ct(i+22),c=0,l=this.u;c<l.length;c++){var o=l[c];fa(a,e,o,o.f,o.u,o.c,n,o.o),e+=46+o.f.length+rr(o.extra)+(o.o?o.o.length:0),n+=o.b}Hg(a,e,this.u.length,i,n),this.ondata(null,a,!0),this.d=2},t.prototype.terminate=function(){for(var e=0,n=this.u;e<n.length;e++){var i=n[e];i.t()}this.d=2},t})();Fe.Zip=Iie;function Lie(t,e,n){n||(n=e,e={}),typeof n!="function"&&Te(7);var i={};Vg(t,"",i,e);var s=Object.keys(i),r=s.length,o=0,a=0,c=r,l=new Array(r),u=[],f=function(){for(var x=0;x<u.length;++x)u[x]()},h=function(x,m){Uf(function(){n(x,m)})};Uf(function(){h=n});var d=function(){var x=new ct(a+22),m=o,b=a-o;a=0;for(var S=0;S<c;++S){var y=l[S];try{var M=y.c.length;fa(x,a,y,y.f,y.u,M);var A=30+y.f.length+rr(y.extra),w=a+A;x.set(y.c,w),fa(x,o,y,y.f,y.u,M,a,y.m),o+=16+A+(y.m?y.m.length:0),a=w+M}catch(T){return h(T,null)}}Hg(x,o,l.length,b,m),h(null,x)};r||d();for(var g=function(x){var m=s[x],b=i[m],S=b[0],y=b[1],M=ga(),A=S.length;M.p(S);var w=or(m),T=w.length,v=y.comment,_=v&&or(v),R=_&&_.length,D=rr(y.extra),L=y.level==0?0:8,N=function(B,F){if(B)f(),h(B,null);else{var W=F.length;l[x]=Kc(y,{size:A,crc:M.d(),c:F,f:w,m:_,u:T!=m.length||_&&v.length!=R,compression:L}),o+=30+T+D+W,a+=76+2*(T+D)+(R||0)+W,--r||d()}};if(T>65535&&N(Te(11,0,1),null),!L)N(null,S);else if(A<16e4)try{N(null,Qc(S,y))}catch(B){N(B,null)}else u.push(nL(S,y,N))},p=0;p<c;++p)g(p);return f}Fe.zip=Lie;function Nie(t,e){e||(e={});var n={},i=[];Vg(t,"",n,e);var s=0,r=0;for(var o in n){var a=n[o],c=a[0],l=a[1],u=l.level==0?0:8,f=or(o),h=f.length,d=l.comment,g=d&&or(d),p=g&&g.length,x=rr(l.extra);h>65535&&Te(11);var m=u?Qc(c,l):c,b=m.length,S=ga();S.p(c),i.push(Kc(l,{size:c.length,crc:S.d(),c:m,f,m:g,u:h!=o.length||g&&d.length!=p,o:s,compression:u})),s+=30+h+x+b,r+=76+2*(h+x)+(p||0)+b}for(var y=new ct(r+22),M=s,A=r-s,w=0;w<i.length;++w){var f=i[w];fa(y,f.o,f,f.f,f.u,f.c.length);var T=30+f.f.length+rr(f.extra);y.set(f.c,f.o+T),fa(y,s,f,f.f,f.u,f.c.length,f.o,f.m),s+=16+T+(f.m?f.m.length:0)}return Hg(y,s,i.length,A,M),y}Fe.zipSync=Nie;var gL=(function(){function t(){}return t.prototype.push=function(e,n){this.ondata(null,e,n)},t.compression=0,t})();Fe.UnzipPassThrough=gL;var Fie=(function(){function t(){var e=this;this.i=new On(function(n,i){e.ondata(null,n,i)})}return t.prototype.push=function(e,n){try{this.i.push(e,n)}catch(i){this.ondata(i,null,n)}},t.compression=8,t})();Fe.UnzipInflate=Fie;var Oie=(function(){function t(e,n){var i=this;n<32e4?this.i=new On(function(s,r){i.ondata(null,s,r)}):(this.i=new zg(function(s,r,o){i.ondata(s,r,o)}),this.terminate=this.i.terminate)}return t.prototype.push=function(e,n){this.i.terminate&&(e=hi(e,0)),this.i.push(e,n)},t.compression=8,t})();Fe.AsyncUnzipInflate=Oie;var Uie=(function(){function t(e){this.onfile=e,this.k=[],this.o={0:gL},this.p=Ms}return t.prototype.push=function(e,n){var i=this;if(this.onfile||Te(5),this.p||Te(4),this.c>0){var s=Math.min(this.c,e.length),r=e.subarray(0,s);if(this.c-=s,this.d?this.d.push(r,!this.c):this.k[0].push(r),e=e.subarray(s),e.length)return this.push(e,n)}else{var o=0,a=0,c=void 0,l=void 0;this.p.length?e.length?(l=new ct(this.p.length+e.length),l.set(this.p),l.set(e,this.p.length)):l=this.p:l=e;for(var u=l.length,f=this.c,h=f&&this.d,d=function(){var m,b=Xt(l,a);if(b==67324752){o=1,c=a,g.d=null,g.c=0;var S=wn(l,a+6),y=wn(l,a+8),M=S&2048,A=S&8,w=wn(l,a+26),T=wn(l,a+28);if(u>a+30+w+T){var v=[];g.k.unshift(v),o=2;var _=Xt(l,a+18),R=Xt(l,a+22),D=Gg(l.subarray(a+30,a+=30+w),!M);_==4294967295?(m=A?[-2]:mL(l,a),_=m[0],R=m[1]):A&&(_=-1),a+=T,g.c=_;var L,N={name:D,compression:y,start:function(){if(N.ondata||Te(5),!_)N.ondata(null,Ms,!0);else{var B=i.o[y];B||N.ondata(Te(14,"unknown compression type "+y,1),null,!1),L=_<0?new B(D):new B(D,_,R),L.ondata=function(K,ie,le){N.ondata(K,ie,le)};for(var F=0,W=v;F<W.length;F++){var V=W[F];L.push(V,!1)}i.k[0]==v&&i.c?i.d=L:L.push(Ms,!0)}},terminate:function(){L&&L.terminate&&L.terminate()}};_>=0&&(N.size=_,N.originalSize=R),g.onfile(N)}return"break"}else if(f){if(b==134695760)return c=a+=12+(f==-2&&8),o=3,g.c=0,"break";if(b==33639248)return c=a-=4,o=3,g.c=0,"break"}},g=this;a<u-4;++a){var p=d();if(p==="break")break}if(this.p=Ms,f<0){var x=o?l.subarray(0,c-12-(f==-2&&8)-(Xt(l,c-16)==134695760&&4)):l.subarray(0,a);h?h.push(x,!!o):this.k[+(o==2)].push(x)}if(o&2)return this.push(l.subarray(a),n);this.p=l.subarray(a)}n&&(this.c&&Te(13),this.p=null)},t.prototype.register=function(e){this.o[e.compression]=e},t})();Fe.Unzip=Uie;var Uf=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(t){t()};function Bie(t,e,n){n||(n=e,e={}),typeof n!="function"&&Te(7);var i=[],s=function(){for(var p=0;p<i.length;++p)i[p]()},r={},o=function(p,x){Uf(function(){n(p,x)})};Uf(function(){o=n});for(var a=t.length-22;Xt(t,a)!=101010256;--a)if(!a||t.length-a>65558)return o(Te(13,0,1),null),s;var c=wn(t,a+8);if(c){var l=c,u=Xt(t,a+16),f=u==4294967295;if(f){if(a=Xt(t,a-12),Xt(t,a)!=101075792)return o(Te(13,0,1),null),s;l=c=Xt(t,a+32),u=Xt(t,a+48)}for(var h=e&&e.filter,d=function(p){var x=pL(t,u,f),m=x[0],b=x[1],S=x[2],y=x[3],M=x[4],A=x[5],w=dL(t,A);u=M;var T=function(_,R){_?(s(),o(_,null)):(R&&(r[y]=R),--c||o(null,r))};if(!h||h({name:y,size:b,originalSize:S,compression:m}))if(!m)T(null,hi(t,w,w+b));else if(m==8){var v=t.subarray(w,w+b);if(b<32e4)try{T(null,ba(v,new ct(S)))}catch(_){T(_,null)}else i.push(qg(v,{size:S},T))}else T(Te(14,"unknown compression type "+m,1),null);else T(null,null)},g=0;g<l;++g)d(g)}else o(null,{});return s}Fe.unzip=Bie;function kie(t,e){for(var n={},i=t.length-22;Xt(t,i)!=101010256;--i)(!i||t.length-i>65558)&&Te(13);var s=wn(t,i+8);if(!s)return{};var r=Xt(t,i+16),o=r==4294967295;o&&(i=Xt(t,i-12),Xt(t,i)!=101075792&&Te(13),s=Xt(t,i+32),r=Xt(t,i+48));for(var a=e&&e.filter,c=0;c<s;++c){var l=pL(t,r,o),u=l[0],f=l[1],h=l[2],d=l[3],g=l[4],p=l[5],x=dL(t,p);r=g,(!a||a({name:d,size:f,originalSize:h,compression:u}))&&(u?u==8?n[d]=ba(t.subarray(x,x+f),new ct(h)):Te(14,"unknown compression type "+u):n[d]=hi(t,x,x+f))}return n}Fe.unzipSync=kie});var vL=E((obe,xL)=>{"use strict";function zie(t){return t&&Object.prototype.toString.call(t)==="[object Object]"}function qie(t){var e=" ".repeat(t);return function(n){var i,s=[];return typeof n!="string"?n:(i=n.split(`
`),i.length===1?e+n:(i.forEach(function(r){if(r.trim()===""){s.push(r);return}s.push(e+r)}),s.join(`
`)))}}function Vie(t){var e=t.split(`
`),n=[];return e.forEach(function(i){i.trim()!==""&&n.push(i)}),n.join(`
`)}function Gie(t,e){var n="",i=function(r){return r};e>0&&(n=`
`,i=qie(e));function s(r){var o,a,c,l;return a="",l=!0,c=r.some(function(u,f,h){if(f===0)return o="<"+u,h.length===1?!0:void 0;if(f===1)if(zie(u)){if(Object.keys(u).forEach(function(d){o+=" "+d+'="'+u[d]+'"'}),h.length===2)return!0;o+=">";return}else o+=">";switch(typeof u){case"string":case"number":case"boolean":case"undefined":a+=u+n;return}l=!1,a+=s(u)}),c?o+"/>"+n:l?o+Vie(a)+"</"+r[0]+">"+n:o+n+i(a)+"</"+r[0]+">"+n}return s(t)}xL.exports=Gie});var Xg=E((abe,_L)=>{var Hie=$g().zipSync,Wg=$g().strToU8,$ie=vL(),{colors:yL,geometries:el,modifiers:Wie}=At(),{flatten:Xie,toArray:Yie}=Ti(),Zie="model/3mf",jie="3mf",Jie=(t,...e)=>{t=Object.assign({},{unit:"millimeter",metadata:!0,defaultcolor:[1,.6274509803921569,0,1],compress:!0},t),e=Xie(e);let i=e.filter(o=>el.geom3.isA(o));if(i.length===0)throw new Error("only 3D geometries can be serialized to 3MF");e.length!==i.length&&console.warn("some objects could not be serialized to 3MF"),e=Yie(Wie.generalize({snap:!0,triangulate:!0},i));let s=["model",{unit:t.unit,"xml:lang":"und"},["metadata",{name:"Application"},"JSCAD"]];t.metadata&&s.push(["metadata",{name:"CreationDate"},new Date().toISOString()]),s.push(ese(e,t)),s.push(ise(e,t));let r=`<?xml version="1.0" encoding="UTF-8"?>
${$ie(s,2)}`;if(t.compress){let o={"3D":{"3dmodel.model":Wg(r)},_rels:{".rels":Wg(Qie)},"[Content_Types].xml":Wg(Kie)};return[Hie(o,{comment:"created by JSCAD"}).buffer]}return[r]},Kie=`<?xml version="1.0" encoding="UTF-8" ?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml">
  </Default>
  <Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml">
  </Default>
</Types>`,Qie=`<?xml version="1.0" encoding="UTF-8" ?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel">
  </Relationship>
</Relationships>`,ese=(t,e)=>{let n=["resources",{},tse(t,e)];return n=n.concat(nse(t,e)),n},tse=(t,e)=>{let n=["basematerials",{id:"0"}],i=[];return t.forEach((s,r)=>{let o=yL.rgbToHex(e.defaultcolor).toUpperCase();s.color&&(o=yL.rgbToHex(s.color).toUpperCase()),i.push(["base",{name:`mat${r}`,displaycolor:o}])}),n=n.concat(i),n},nse=(t,e)=>{let n=[];return t.forEach((i,s)=>{el.geom3.isA(i)&&el.geom3.toPolygons(i).length>0&&(e.id=s,n.push(sse(i,e)))}),n},ise=(t,e)=>{let n=["build",{}],i=[];return t.forEach((s,r)=>{i.push(["item",{objectid:`${r+1}`}])}),n=n.concat(i),n},sse=(t,e)=>{let n=t.name?t.name:`Part ${e.id}`;return["object",{id:`${e.id+1}`,type:"model",pid:"0",pindex:`${e.id}`,name:n},rse(t,e)]},rse=(t,e)=>["mesh",{},ose(t,e),cse(t,e)],ose=(t,e)=>{let n=["vertices",{}],i=[];return el.geom3.toPolygons(t).forEach(r=>{for(let o=0;o<r.vertices.length;o++)i.push(ase(r.vertices[o],e))}),n.concat(i)},ase=(t,e)=>["vertex",{x:t[0],y:t[1],z:t[2]}],cse=(t,e)=>{let n=0,i=el.geom3.toPolygons(t),s=["triangles",{}];return i.forEach(r=>{if(r.vertices.length<3)return;let o=lse(r,n);s=s.concat(o),n+=r.vertices.length}),s},lse=(t,e)=>{let n=[];for(let i=0;i<t.vertices.length-2;i++){let s=["triangle",{v1:e,v2:e+i+1,v3:e+i+2}];n.push(s)}return n};_L.exports={serialize:Jie,mimeType:Zie,fileExtension:jie}});var SL=E((cbe,bL)=>{var{geometries:Yg}=At(),Tn={stl:{displayName:"STL (Binary)",description:"STereoLithography, Binary",extension:"stl",mimetype:"application/sla",deserializable:!0,convertGeom3:!1,convertGeom2:!1},stla:{displayName:"STL (ASCII)",description:"STereoLithography, ASCII",extension:"stl",mimetype:"application/sla",deserializable:!1,convertGeom3:!0,convertGeom2:!1},stlb:{displayName:"STL (Binary)",description:"STereoLithography, Binary",extension:"stl",mimetype:"application/sla",deserializable:!1,convertGeom3:!0,convertGeom2:!1},amf:{displayName:"AMF (experimental)",description:"Additive Manufacturing File Format",extension:"amf",mimetype:"application/amf+xml",deserializable:!0,convertGeom3:!0,convertGeom2:!1},dxf:{displayName:"DXF (ASCII)",description:"AutoCAD Drawing Exchange Format",extension:"dxf",mimetype:"application/dxf",deserializable:!0,convertGeom3:!0,convertGeom2:!0},jscad:{displayName:"JSCAD",description:"JSCAD Design Source",extension:"jscad",mimetype:"application/javascript",deserializable:!0,convertGeom3:!0,convertGeom2:!0},json:{displayName:"json",description:"JavaScript Object Notation Format",extension:"json",mimetype:"application/json",deserializable:!0,convertGeom3:!0,convertGeom2:!0},js:{displayName:"js",description:"JavaScript Source",extension:"js",mimetype:"application/javascript",deserializable:!0,convertGeom3:!0,convertGeom2:!0},obj:{displayName:"OBJ",description:"Wavefront OBJ File",extension:"obj",mimetype:"text/plain",deserializable:!0,convertGeom3:!0,convertGeom2:!1},svg:{displayName:"SVG",description:"Scalable Vector Graphics Format",extension:"svg",mimetype:"image/svg+xml",deserializable:!0,convertGeom3:!1,convertGeom2:!0},x3d:{displayName:"X3D",description:"X3D File Format",extension:"x3d",mimetype:"model/x3d+xml",deserializable:!0,convertGeom3:!0,convertGeom2:!0},"3mf":{displayName:"3MF",description:"3D Manufacturing Format",extension:"3mf",mimetype:"model/3mf",deserializable:!1,convertGeom3:!0,convertGeom2:!1}},use=["amf","js","jscad","obj","scad","stl","dxf","svg","ttf","woff"],hse=t=>{let e=[],n=!1,i=!1;for(let s=0;s<t.length;s++)Yg.geom3.isA(t[s])&&(n=!0),(Yg.geom2.isA(t[s])||Yg.path2.isA(t[s]))&&(i=!0);for(let s in Tn){if(n&&Tn[s].convertGeom3===!0){e[e.length]=s;continue}i&&Tn[s].convertGeom2===!0&&(e[e.length]=s)}return e},fse=()=>{let t=[];for(let e in Tn)(Tn[e].convertGeom3===!0||Tn[e].convertGeom2===!0)&&t.indexOf(Tn[e].extension)<0&&t.push(Tn[e].extension);return t},dse=()=>{let t=[];for(let e in Tn)(Tn[e].convertGeom3===!0||Tn[e].convertGeom2===!0)&&t.push(e);return t},pse=()=>{let t=[];for(let e in Tn)Tn[e].deserializable===!0&&t.push(Tn[e].extension);return t};bL.exports={formats:Tn,conversionFormats:use,supportedInputExtensions:pse,supportedOutputExtensions:fse,supportedOutputFormats:dse,supportedFormatsForObjects:hse}});var wL=E((lbe,AL)=>{var{toArray:EL}=Ti(),{formats:ML}=SL(),mse=lg(),gse=dg(),xse=pg(),vse=mg(),Bf=vg(),yse=yg(),_se=Mg(),bse=Xg(),Sse=(t,e)=>{let n={format:void 0,version:"0.0.0"},{format:i,version:s}=Object.assign({},n,e),r={producer:"JSCAD "+s,date:new Date,version:s},o={amf:mse,stl:Bf,stla:{mimeType:Bf.mimeType,serialize:(u,f)=>Bf.serialize(Object.assign({},{binary:!1},u),f)},stlb:Bf,dxf:gse,obj:vse,svg:yse,x3d:_se,"3mf":bse,json:xse,js:{mimeType:ML.js.mimetype,serialize:(u,f)=>EL(f)},jscad:{mimeType:ML.jscad.mimetype,serialize:(u,f)=>EL(f)},undefined:()=>{throw new Error("Not supported : only jscad, stl, amf, dxf, svg or json as output format")}},a=Object.assign({},r,e),c=o[i].serialize(a,t),l=o[i].mimeType;return{data:c,mimeType:l}};AL.exports=Sse});var TL=E((ube,Ese)=>{Ese.exports={name:"@jscad/amf-deserializer",version:"2.3.13",description:"AMF Deserializer for JSCAD",repository:"https://github.com/jscad/OpenJSCAD.org/",main:"src/index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava --verbose --timeout 2m 'tests/**/*.test.js'"},contributors:[{name:"Rene K. Mueller",url:"http://renekmueller.com"},{name:"z3dev",url:"http://www.z3d.jp"},{name:"Mark 'kaosat-dev' Moissette",url:"http://kaosat.net"}],keywords:["openjscad","jscad","import","deserializer","amf"],license:"MIT",dependencies:{"@jscad/io-utils":"2.0.33","@jscad/modeling":"2.13.0",saxes:"5.0.1"},devDependencies:{ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var Zg=E((hbe,DL)=>{var{maths:CL,geometries:RL}=At(),tl,Mse=(t,e)=>{if(tl&&tl.id===e)return tl;for(let n=0;n<t.length;n++)if(t[n].id&&t[n].id===e)return tl=t[n],tl;return null},ji=(t,e)=>{for(let n=0;n<t.length;n++)if(t[n].type===e)return t[n].value;return null},nl=t=>{for(let e=0;e<t.length;e++){let n=t[e];if(n.type==="color"){let i=parseFloat(ji(n.objects,"r")),s=parseFloat(ji(n.objects,"g")),r=parseFloat(ji(n.objects,"b")),o=parseFloat(ji(n.objects,"a"));return Number.isNaN(i)&&(i=1),Number.isNaN(s)&&(s=1),Number.isNaN(r)&&(r=1),Number.isNaN(o)&&(o=1),[i,s,r,o]}}return null},Ase=(t,e)=>{let n=Mse(t,e);return n?nl(n.objects):null},wse=(t,e,n,i)=>{let s=[],r=[],o=[],a=n.amfMaterials,c=(p,x)=>{if(p.type==="coordinates"){let m=parseFloat(ji(p.objects,"x")),b=parseFloat(ji(p.objects,"y")),S=parseFloat(ji(p.objects,"z"));s.push([m,b,S])}},l=(p,x)=>{p.type==="vertex"&&p.objects.forEach(c)},u=(p,x)=>{if(p.type==="triangle"){let m=parseInt(ji(p.objects,"v1")),b=parseInt(ji(p.objects,"v2")),S=parseInt(ji(p.objects,"v3"));r.push([m,b,S]);let y=nl(p.objects);y?o.push(y):o.push(f)}},f=null,h=(p,x)=>{switch(p.type){case"vertices":p.objects.forEach(l);break;case"volume":f=nl(p.objects),p.materialid&&(f=Ase(a,p.materialid)),p.objects.forEach(u);break;default:break}},d=(p,x)=>{p.type==="mesh"&&p.objects.forEach(h)};if(i.instantiate===!0){let p=i.amf.scale,x=p!==1?([A,w,T])=>CL.vec3.fromValues(A*p,w*p,T*p):A=>CL.vec3.clone(A);t.objects.forEach(d);let m=nl(t.objects),b=r.length,S=s.length,y=[];for(let A=0;A<b;A++){let w=[];for(let _=0;_<r[A].length;_++)r[A][_]<0||r[A][_]>=S||w.push(x(s[r[A][_]]));let T=RL.poly3.fromPoints(w),v=o[A]?o[A]:void 0;v&&(T.color=v),y.push(T)}let M=RL.geom3.create(y);return m&&(M=M.color=m),M}let g="";if(t.objects.length>0){t.objects.forEach(d);let p=nl(t.objects),x=r.length,m=s.length;g+=`
// Object ${t.id}
//  faces   : ${x}
//  vertices: ${m}
const createObject${t.id} = () => {
  let polygons = []
  let polygon
`;for(let S=0;S<x;S++){g+=`  polygon = geometries.poly3.fromPoints([
`;for(let M=0;M<r[S].length;M++)r[S][M]<0||r[S][M]>=m||(g+=`      [${s[r[S][M]]}],
`);g+=`  ])
`;let y=o[S];y&&(g+=`  polygon.color = [${y}]
`),g+=`  polygons.push(polygon)
`}g+=`  let shape = geometries.geom3.create(polygons)
`;let b=i.scale?i.scale:1;b!==1&&(g+=`  shape = transforms.scale([${b},${b},${b}], shape)
`),p&&(g+=`  shape = colors.colorize([${p}], shape)
`),g+=`  return shape
}
`}return g};DL.exports=wse});var IL=E(Lt=>{"use strict";Object.defineProperty(Lt,"__esModule",{value:!0});Lt.CHAR=`	
\r -\uD7FF\uE000-\uFFFD\u{10000}-\u{10FFFF}`;Lt.S=` 	\r
`;Lt.NAME_START_CHAR=":A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}";Lt.NAME_CHAR="-"+Lt.NAME_START_CHAR+".0-9\xB7\u0300-\u036F\u203F-\u2040";Lt.CHAR_RE=new RegExp("^["+Lt.CHAR+"]$","u");Lt.S_RE=new RegExp("^["+Lt.S+"]+$","u");Lt.NAME_START_CHAR_RE=new RegExp("^["+Lt.NAME_START_CHAR+"]$","u");Lt.NAME_CHAR_RE=new RegExp("^["+Lt.NAME_CHAR+"]$","u");Lt.NAME_RE=new RegExp("^["+Lt.NAME_START_CHAR+"]["+Lt.NAME_CHAR+"]*$","u");Lt.NMTOKEN_RE=new RegExp("^["+Lt.NAME_CHAR+"]+$","u");var jg=9,Jg=10,Kg=13,Qg=32;Lt.S_LIST=[Qg,Jg,Kg,jg];function Tse(t){return t>=Qg&&t<=55295||t===Jg||t===Kg||t===jg||t>=57344&&t<=65533||t>=65536&&t<=1114111}Lt.isChar=Tse;function Cse(t){return t===Qg||t===Jg||t===Kg||t===jg}Lt.isS=Cse;function PL(t){return t>=65&&t<=90||t>=97&&t<=122||t===58||t===95||t===8204||t===8205||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=767||t>=880&&t<=893||t>=895&&t<=8191||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}Lt.isNameStartChar=PL;function Rse(t){return PL(t)||t>=48&&t<=57||t===45||t===46||t===183||t>=768&&t<=879||t>=8255&&t<=8256}Lt.isNameChar=Rse});var BL=E(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.CHAR="-\uD7FF\uE000-\uFFFD\u{10000}-\u{10FFFF}";xt.RESTRICTED_CHAR="-\b\v\f-\x7F-\x84\x86-\x9F";xt.S=` 	\r
`;xt.NAME_START_CHAR=":A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}";xt.NAME_CHAR="-"+xt.NAME_START_CHAR+".0-9\xB7\u0300-\u036F\u203F-\u2040";xt.CHAR_RE=new RegExp("^["+xt.CHAR+"]$","u");xt.RESTRICTED_CHAR_RE=new RegExp("^["+xt.RESTRICTED_CHAR+"]$","u");xt.S_RE=new RegExp("^["+xt.S+"]+$","u");xt.NAME_START_CHAR_RE=new RegExp("^["+xt.NAME_START_CHAR+"]$","u");xt.NAME_CHAR_RE=new RegExp("^["+xt.NAME_CHAR+"]$","u");xt.NAME_RE=new RegExp("^["+xt.NAME_START_CHAR+"]["+xt.NAME_CHAR+"]*$","u");xt.NMTOKEN_RE=new RegExp("^["+xt.NAME_CHAR+"]+$","u");var LL=9,NL=10,FL=13,OL=32;xt.S_LIST=[OL,NL,FL,LL];function Dse(t){return t>=1&&t<=55295||t>=57344&&t<=65533||t>=65536&&t<=1114111}xt.isChar=Dse;function Pse(t){return t>=1&&t<=8||t===11||t===12||t>=14&&t<=31||t>=127&&t<=132||t>=134&&t<=159}xt.isRestrictedChar=Pse;function Ise(t){return t===9||t===10||t===13||t>31&&t<127||t===133||t>159&&t<=55295||t>=57344&&t<=65533||t>=65536&&t<=1114111}xt.isCharAndNotRestricted=Ise;function Lse(t){return t===OL||t===NL||t===FL||t===LL}xt.isS=Lse;function UL(t){return t>=65&&t<=90||t>=97&&t<=122||t===58||t===95||t===8204||t===8205||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=767||t>=880&&t<=893||t>=895&&t<=8191||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}xt.isNameStartChar=UL;function Nse(t){return UL(t)||t>=48&&t<=57||t===45||t===46||t===183||t>=768&&t<=879||t>=8255&&t<=8256}xt.isNameChar=Nse});var zL=E(Un=>{"use strict";Object.defineProperty(Un,"__esModule",{value:!0});Un.NC_NAME_START_CHAR="A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}";Un.NC_NAME_CHAR="-"+Un.NC_NAME_START_CHAR+".0-9\xB7\u0300-\u036F\u203F-\u2040";Un.NC_NAME_START_CHAR_RE=new RegExp("^["+Un.NC_NAME_START_CHAR+"]$","u");Un.NC_NAME_CHAR_RE=new RegExp("^["+Un.NC_NAME_CHAR+"]$","u");Un.NC_NAME_RE=new RegExp("^["+Un.NC_NAME_START_CHAR+"]["+Un.NC_NAME_CHAR+"]*$","u");function kL(t){return t>=65&&t<=90||t===95||t>=97&&t<=122||t>=192&&t<=214||t>=216&&t<=246||t>=248&&t<=767||t>=880&&t<=893||t>=895&&t<=8191||t>=8204&&t<=8205||t>=8304&&t<=8591||t>=11264&&t<=12271||t>=12289&&t<=55295||t>=63744&&t<=64975||t>=65008&&t<=65533||t>=65536&&t<=983039}Un.isNCNameStartChar=kL;function Fse(t){return kL(t)||t===45||t===46||t>=48&&t<=57||t===183||t>=768&&t<=879||t>=8255&&t<=8256}Un.isNCNameChar=Fse});var Wf=E($f=>{"use strict";Object.defineProperty($f,"__esModule",{value:!0});var wa=IL(),Ose=BL(),d1=zL(),Bn=wa.isS,Use=wa.isChar,il=wa.isNameStartChar,qL=wa.isNameChar,tN=wa.S_LIST,Bse=wa.NAME_RE,kse=Ose.isChar,zse=d1.isNCNameStartChar,qse=d1.isNCNameChar,Vse=d1.NC_NAME_RE,Hf="http://www.w3.org/XML/1998/namespace",Aa="http://www.w3.org/2000/xmlns/",Gse={__proto__:null,xml:Hf,xmlns:Aa},Hse={__proto__:null,amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},Ft=-1,Ji=-2,VL=0,$se=1,e1=2,Wse=3,Sa=4,Xse=5,Yse=6,Zse=7,t1=8,jse=9,Jse=10,Kse=11,Qse=12,Cn=13,kf=14,n1=15,ere=16,i1=17,tre=18,nre=19,s1=20,ire=21,sre=22,rre=23,GL=24,r1=25,zf=26,HL=27,ore=28,are=29,$L=30,cre=31,lre=32,Xr=33,ure=34,o1=35,sl=36,a1=37,hre=38,WL=39,XL=40,fre=41,YL=42,dre=43,pre=44,c1=9,Ci=10,l1=13,ZL=32,jL=33,nN=34,rl=38,iN=39,qf=45,Vf=47,mre=59,cr=60,Ea=61,sn=62,fn=63,sN=91,Ma=93,JL=133,KL=8232,Gf=t=>t===nN||t===iN,rN=[nN,iN],gre=[...rN,sN,sn],xre=[...rN,cr,Ma],vre=[Ea,fn,...tN],yre=[...tN,sn,rl,cr];function h1(t,e,n){switch(e){case"xml":n!==Hf&&t.fail(`xml prefix must be bound to ${Hf}.`);break;case"xmlns":n!==Aa&&t.fail(`xmlns prefix must be bound to ${Aa}.`);break;default:}switch(n){case Aa:t.fail(e===""?`the default namespace may not be set to ${n}.`:`may not assign a prefix (even "xmlns") to the URI ${Aa}.`);break;case Hf:switch(e){case"xml":break;case"":t.fail(`the default namespace may not be set to ${n}.`);break;default:t.fail("may not assign the xml namespace to another prefix.")}break;default:}}function _re(t,e){for(let n of Object.keys(e))h1(t,n,e[n])}var bre=t=>Vse.test(t),Sre=t=>Bse.test(t),Yr=0,QL=1,u1=2;$f.EVENTS=["xmldecl","text","processinginstruction","doctype","comment","opentagstart","attribute","opentag","closetag","cdata","error","end","ready"];var eN={xmldecl:"xmldeclHandler",text:"textHandler",processinginstruction:"piHandler",doctype:"doctypeHandler",comment:"commentHandler",opentagstart:"openTagStartHandler",attribute:"attributeHandler",opentag:"openTagHandler",closetag:"closeTagHandler",cdata:"cdataHandler",error:"errorHandler",end:"endHandler",ready:"readyHandler"},f1=class{constructor(e){this.opt=e??{},this.fragmentOpt=!!this.opt.fragment;let n=this.xmlnsOpt=!!this.opt.xmlns;if(this.trackPosition=this.opt.position!==!1,this.fileName=this.opt.fileName,n){this.nameStartCheck=zse,this.nameCheck=qse,this.isName=bre,this.processAttribs=this.processAttribsNS,this.pushAttrib=this.pushAttribNS,this.ns=Object.assign({__proto__:null},Gse);let i=this.opt.additionalNamespaces;i!=null&&(_re(this,i),Object.assign(this.ns,i))}else this.nameStartCheck=il,this.nameCheck=qL,this.isName=Sre,this.processAttribs=this.processAttribsPlain,this.pushAttrib=this.pushAttribPlain;this.stateTable=[this.sBegin,this.sBeginWhitespace,this.sDoctype,this.sDoctypeQuote,this.sDTD,this.sDTDQuoted,this.sDTDOpenWaka,this.sDTDOpenWakaBang,this.sDTDComment,this.sDTDCommentEnding,this.sDTDCommentEnded,this.sDTDPI,this.sDTDPIEnding,this.sText,this.sEntity,this.sOpenWaka,this.sOpenWakaBang,this.sComment,this.sCommentEnding,this.sCommentEnded,this.sCData,this.sCDataEnding,this.sCDataEnding2,this.sPIFirstChar,this.sPIRest,this.sPIBody,this.sPIEnding,this.sXMLDeclNameStart,this.sXMLDeclName,this.sXMLDeclEq,this.sXMLDeclValueStart,this.sXMLDeclValue,this.sXMLDeclSeparator,this.sXMLDeclEnding,this.sOpenTag,this.sOpenTagSlash,this.sAttrib,this.sAttribName,this.sAttribNameSawWhite,this.sAttribValue,this.sAttribValueQuoted,this.sAttribValueClosed,this.sAttribValueUnquoted,this.sCloseTag,this.sCloseTagSawWhite],this._init()}get closed(){return this._closed}_init(){var e;this.openWakaBang="",this.text="",this.name="",this.piTarget="",this.entity="",this.q=null,this.tags=[],this.tag=null,this.topNS=null,this.chunk="",this.chunkPosition=0,this.i=0,this.prevI=0,this.carriedFromPrevious=void 0,this.forbiddenState=Yr,this.attribList=[];let{fragmentOpt:n}=this;this.state=n?Cn:VL,this.reportedTextBeforeRoot=this.reportedTextAfterRoot=this.closedRoot=this.sawRoot=n,this.xmlDeclPossible=!n,this.xmlDeclExpects=["version"],this.entityReturnState=void 0;let{defaultXMLVersion:i}=this.opt;if(i===void 0){if(this.opt.forceXMLVersion===!0)throw new Error("forceXMLVersion set but defaultXMLVersion is not set");i="1.0"}this.setXMLVersion(i),this.positionAtNewLine=0,this.doctype=!1,this._closed=!1,this.xmlDecl={version:void 0,encoding:void 0,standalone:void 0},this.line=1,this.column=0,this.ENTITIES=Object.create(Hse),(e=this.readyHandler)===null||e===void 0||e.call(this)}get position(){return this.chunkPosition+this.i}get columnIndex(){return this.position-this.positionAtNewLine}on(e,n){this[eN[e]]=n}off(e){this[eN[e]]=void 0}makeError(e){var n;let i=(n=this.fileName)!==null&&n!==void 0?n:"";return this.trackPosition&&(i.length>0&&(i+=":"),i+=`${this.line}:${this.column}`),i.length>0&&(i+=": "),new Error(i+e)}fail(e){let n=this.makeError(e),i=this.errorHandler;if(i===void 0)throw n;return i(n),this}write(e){if(this.closed)return this.fail("cannot write after close; assign an onready handler.");let n=!1;e===null?(n=!0,e=""):typeof e=="object"&&(e=e.toString()),this.carriedFromPrevious!==void 0&&(e=`${this.carriedFromPrevious}${e}`,this.carriedFromPrevious=void 0);let i=e.length,s=e.charCodeAt(i-1);!n&&(s===l1||s>=55296&&s<=56319)&&(this.carriedFromPrevious=e[i-1],i--,e=e.slice(0,i));let{stateTable:r}=this;for(this.chunk=e,this.i=0;this.i<i;)r[this.state].call(this);return this.chunkPosition+=i,n?this.end():this}close(){return this.write(null)}getCode10(){let{chunk:e,i:n}=this;if(this.prevI=n,this.i=n+1,n>=e.length)return Ft;let i=e.charCodeAt(n);if(this.column++,i<55296){if(i>=ZL||i===c1)return i;switch(i){case Ci:return this.line++,this.column=0,this.positionAtNewLine=this.position,Ci;case l1:return e.charCodeAt(n+1)===Ci&&(this.i=n+2),this.line++,this.column=0,this.positionAtNewLine=this.position,Ji;default:return this.fail("disallowed character."),i}}if(i>56319)return i>=57344&&i<=65533||this.fail("disallowed character."),i;let s=65536+(i-55296)*1024+(e.charCodeAt(n+1)-56320);return this.i=n+2,s>1114111&&this.fail("disallowed character."),s}getCode11(){let{chunk:e,i:n}=this;if(this.prevI=n,this.i=n+1,n>=e.length)return Ft;let i=e.charCodeAt(n);if(this.column++,i<55296){if(i>31&&i<127||i>159&&i!==KL||i===c1)return i;switch(i){case Ci:return this.line++,this.column=0,this.positionAtNewLine=this.position,Ci;case l1:{let r=e.charCodeAt(n+1);(r===Ci||r===JL)&&(this.i=n+2)}case JL:case KL:return this.line++,this.column=0,this.positionAtNewLine=this.position,Ji;default:return this.fail("disallowed character."),i}}if(i>56319)return i>=57344&&i<=65533||this.fail("disallowed character."),i;let s=65536+(i-55296)*1024+(e.charCodeAt(n+1)-56320);return this.i=n+2,s>1114111&&this.fail("disallowed character."),s}getCodeNorm(){let e=this.getCode();return e===Ji?Ci:e}unget(){this.i=this.prevI,this.column--}captureTo(e){let{i:n}=this,{chunk:i}=this;for(;;){let s=this.getCode(),r=s===Ji,o=r?Ci:s;if(o===Ft||e.includes(o))return this.text+=i.slice(n,this.prevI),o;r&&(this.text+=`${i.slice(n,this.prevI)}
`,n=this.i)}}captureToChar(e){let{i:n}=this,{chunk:i}=this;for(;;){let s=this.getCode();switch(s){case Ji:this.text+=`${i.slice(n,this.prevI)}
`,n=this.i,s=Ci;break;case Ft:return this.text+=i.slice(n),!1;default:}if(s===e)return this.text+=i.slice(n,this.prevI),!0}}captureNameChars(){let{chunk:e,i:n}=this;for(;;){let i=this.getCode();if(i===Ft)return this.name+=e.slice(n),Ft;if(!qL(i))return this.name+=e.slice(n,this.prevI),i===Ji?Ci:i}}skipSpaces(){for(;;){let e=this.getCodeNorm();if(e===Ft||!Bn(e))return e}}setXMLVersion(e){this.currentXMLVersion=e,e==="1.0"?(this.isChar=Use,this.getCode=this.getCode10):(this.isChar=kse,this.getCode=this.getCode11)}sBegin(){this.chunk.charCodeAt(0)===65279&&(this.i++,this.column++),this.state=$se}sBeginWhitespace(){let e=this.i,n=this.skipSpaces();switch(this.prevI!==e&&(this.xmlDeclPossible=!1),n){case cr:if(this.state=n1,this.text.length!==0)throw new Error("no-empty text at start");break;case Ft:break;default:this.unget(),this.state=Cn,this.xmlDeclPossible=!1}}sDoctype(){var e;let n=this.captureTo(gre);switch(n){case sn:{(e=this.doctypeHandler)===null||e===void 0||e.call(this,this.text),this.text="",this.state=Cn,this.doctype=!0;break}case Ft:break;default:this.text+=String.fromCodePoint(n),n===sN?this.state=Sa:Gf(n)&&(this.state=Wse,this.q=n)}}sDoctypeQuote(){let e=this.q;this.captureToChar(e)&&(this.text+=String.fromCodePoint(e),this.q=null,this.state=e1)}sDTD(){let e=this.captureTo(xre);e!==Ft&&(this.text+=String.fromCodePoint(e),e===Ma?this.state=e1:e===cr?this.state=Yse:Gf(e)&&(this.state=Xse,this.q=e))}sDTDQuoted(){let e=this.q;this.captureToChar(e)&&(this.text+=String.fromCodePoint(e),this.state=Sa,this.q=null)}sDTDOpenWaka(){let e=this.getCodeNorm();switch(this.text+=String.fromCodePoint(e),e){case jL:this.state=Zse,this.openWakaBang="";break;case fn:this.state=Kse;break;default:this.state=Sa}}sDTDOpenWakaBang(){let e=String.fromCodePoint(this.getCodeNorm()),n=this.openWakaBang+=e;this.text+=e,n!=="-"&&(this.state=n==="--"?t1:Sa,this.openWakaBang="")}sDTDComment(){this.captureToChar(qf)&&(this.text+="-",this.state=jse)}sDTDCommentEnding(){let e=this.getCodeNorm();this.text+=String.fromCodePoint(e),this.state=e===qf?Jse:t1}sDTDCommentEnded(){let e=this.getCodeNorm();this.text+=String.fromCodePoint(e),e===sn?this.state=Sa:(this.fail("malformed comment."),this.state=t1)}sDTDPI(){this.captureToChar(fn)&&(this.text+="?",this.state=Qse)}sDTDPIEnding(){let e=this.getCodeNorm();this.text+=String.fromCodePoint(e),e===sn&&(this.state=Sa)}sText(){this.tags.length!==0?this.handleTextInRoot():this.handleTextOutsideRoot()}sEntity(){let{i:e}=this,{chunk:n}=this;e:for(;;)switch(this.getCode()){case Ji:this.entity+=`${n.slice(e,this.prevI)}
`,e=this.i;break;case mre:{let{entityReturnState:i}=this,s=this.entity+n.slice(e,this.prevI);this.state=i;let r;s===""?(this.fail("empty entity name."),r="&;"):(r=this.parseEntity(s),this.entity=""),(i!==Cn||this.textHandler!==void 0)&&(this.text+=r);break e}case Ft:this.entity+=n.slice(e);break e;default:}}sOpenWaka(){let e=this.getCode();if(il(e))this.state=ure,this.unget(),this.xmlDeclPossible=!1;else switch(e){case Vf:this.state=dre,this.xmlDeclPossible=!1;break;case jL:this.state=ere,this.openWakaBang="",this.xmlDeclPossible=!1;break;case fn:this.state=rre;break;default:this.fail("disallowed character in tag name"),this.state=Cn,this.xmlDeclPossible=!1}}sOpenWakaBang(){switch(this.openWakaBang+=String.fromCodePoint(this.getCodeNorm()),this.openWakaBang){case"[CDATA[":!this.sawRoot&&!this.reportedTextBeforeRoot&&(this.fail("text data outside of root node."),this.reportedTextBeforeRoot=!0),this.closedRoot&&!this.reportedTextAfterRoot&&(this.fail("text data outside of root node."),this.reportedTextAfterRoot=!0),this.state=s1,this.openWakaBang="";break;case"--":this.state=i1,this.openWakaBang="";break;case"DOCTYPE":this.state=e1,(this.doctype||this.sawRoot)&&this.fail("inappropriately located doctype declaration."),this.openWakaBang="";break;default:this.openWakaBang.length>=7&&this.fail("incorrect syntax.")}}sComment(){this.captureToChar(qf)&&(this.state=tre)}sCommentEnding(){var e;let n=this.getCodeNorm();n===qf?(this.state=nre,(e=this.commentHandler)===null||e===void 0||e.call(this,this.text),this.text=""):(this.text+=`-${String.fromCodePoint(n)}`,this.state=i1)}sCommentEnded(){let e=this.getCodeNorm();e!==sn?(this.fail("malformed comment."),this.text+=`--${String.fromCodePoint(e)}`,this.state=i1):this.state=Cn}sCData(){this.captureToChar(Ma)&&(this.state=ire)}sCDataEnding(){let e=this.getCodeNorm();e===Ma?this.state=sre:(this.text+=`]${String.fromCodePoint(e)}`,this.state=s1)}sCDataEnding2(){var e;let n=this.getCodeNorm();switch(n){case sn:{(e=this.cdataHandler)===null||e===void 0||e.call(this,this.text),this.text="",this.state=Cn;break}case Ma:this.text+="]";break;default:this.text+=`]]${String.fromCodePoint(n)}`,this.state=s1}}sPIFirstChar(){let e=this.getCodeNorm();this.nameStartCheck(e)?(this.piTarget+=String.fromCodePoint(e),this.state=GL):e===fn||Bn(e)?(this.fail("processing instruction without a target."),this.state=e===fn?zf:r1):(this.fail("disallowed character in processing instruction name."),this.piTarget+=String.fromCodePoint(e),this.state=GL)}sPIRest(){let{chunk:e,i:n}=this;for(;;){let i=this.getCodeNorm();if(i===Ft){this.piTarget+=e.slice(n);return}if(!this.nameCheck(i)){this.piTarget+=e.slice(n,this.prevI);let s=i===fn;s||Bn(i)?this.piTarget==="xml"?(this.xmlDeclPossible||this.fail("an XML declaration must be at the start of the document."),this.state=s?Xr:HL):this.state=s?zf:r1:(this.fail("disallowed character in processing instruction name."),this.piTarget+=String.fromCodePoint(i));break}}}sPIBody(){if(this.text.length===0){let e=this.getCodeNorm();e===fn?this.state=zf:Bn(e)||(this.text=String.fromCodePoint(e))}else this.captureToChar(fn)&&(this.state=zf)}sPIEnding(){var e;let n=this.getCodeNorm();if(n===sn){let{piTarget:i}=this;i.toLowerCase()==="xml"&&this.fail("the XML declaration must appear at the start of the document."),(e=this.piHandler)===null||e===void 0||e.call(this,{target:i,body:this.text}),this.piTarget=this.text="",this.state=Cn}else n===fn?this.text+="?":(this.text+=`?${String.fromCodePoint(n)}`,this.state=r1);this.xmlDeclPossible=!1}sXMLDeclNameStart(){let e=this.skipSpaces();if(e===fn){this.state=Xr;return}e!==Ft&&(this.state=ore,this.name=String.fromCodePoint(e))}sXMLDeclName(){let e=this.captureTo(vre);if(e===fn){this.state=Xr,this.name+=this.text,this.text="",this.fail("XML declaration is incomplete.");return}if(Bn(e)||e===Ea){if(this.name+=this.text,this.text="",!this.xmlDeclExpects.includes(this.name))switch(this.name.length){case 0:this.fail("did not expect any more name/value pairs.");break;case 1:this.fail(`expected the name ${this.xmlDeclExpects[0]}.`);break;default:this.fail(`expected one of ${this.xmlDeclExpects.join(", ")}`)}this.state=e===Ea?$L:are}}sXMLDeclEq(){let e=this.getCodeNorm();if(e===fn){this.state=Xr,this.fail("XML declaration is incomplete.");return}Bn(e)||(e!==Ea&&this.fail("value required."),this.state=$L)}sXMLDeclValueStart(){let e=this.getCodeNorm();if(e===fn){this.state=Xr,this.fail("XML declaration is incomplete.");return}Bn(e)||(Gf(e)?this.q=e:(this.fail("value must be quoted."),this.q=ZL),this.state=cre)}sXMLDeclValue(){let e=this.captureTo([this.q,fn]);if(e===fn){this.state=Xr,this.text="",this.fail("XML declaration is incomplete.");return}if(e===Ft)return;let n=this.text;switch(this.text="",this.name){case"version":{this.xmlDeclExpects=["encoding","standalone"];let i=n;this.xmlDecl.version=i,/^1\.[0-9]+$/.test(i)?this.opt.forceXMLVersion||this.setXMLVersion(i):this.fail("version number must match /^1\\.[0-9]+$/.");break}case"encoding":/^[A-Za-z][A-Za-z0-9._-]*$/.test(n)||this.fail("encoding value must match /^[A-Za-z0-9][A-Za-z0-9._-]*$/."),this.xmlDeclExpects=["standalone"],this.xmlDecl.encoding=n;break;case"standalone":n!=="yes"&&n!=="no"&&this.fail('standalone value must match "yes" or "no".'),this.xmlDeclExpects=[],this.xmlDecl.standalone=n;break;default:}this.name="",this.state=lre}sXMLDeclSeparator(){let e=this.getCodeNorm();if(e===fn){this.state=Xr;return}Bn(e)||(this.fail("whitespace required."),this.unget()),this.state=HL}sXMLDeclEnding(){var e;this.getCodeNorm()===sn?(this.piTarget!=="xml"?this.fail("processing instructions are not allowed before root."):this.name!=="version"&&this.xmlDeclExpects.includes("version")&&this.fail("XML declaration must contain a version."),(e=this.xmldeclHandler)===null||e===void 0||e.call(this,this.xmlDecl),this.name="",this.piTarget=this.text="",this.state=Cn):this.fail("The character ? is disallowed anywhere in XML declarations."),this.xmlDeclPossible=!1}sOpenTag(){var e;let n=this.captureNameChars();if(n===Ft)return;let i=this.tag={name:this.name,attributes:Object.create(null)};switch(this.name="",this.xmlnsOpt&&(this.topNS=i.ns=Object.create(null)),(e=this.openTagStartHandler)===null||e===void 0||e.call(this,i),this.sawRoot=!0,!this.fragmentOpt&&this.closedRoot&&this.fail("documents may contain only one root."),n){case sn:this.openTag();break;case Vf:this.state=o1;break;default:Bn(n)||this.fail("disallowed character in tag name."),this.state=sl}}sOpenTagSlash(){this.getCode()===sn?this.openSelfClosingTag():(this.fail("forward-slash in opening tag not followed by >."),this.state=sl)}sAttrib(){let e=this.skipSpaces();e!==Ft&&(il(e)?(this.unget(),this.state=a1):e===sn?this.openTag():e===Vf?this.state=o1:this.fail("disallowed character in attribute name."))}sAttribName(){let e=this.captureNameChars();e===Ea?this.state=WL:Bn(e)?this.state=hre:e===sn?(this.fail("attribute without value."),this.pushAttrib(this.name,this.name),this.name=this.text="",this.openTag()):e!==Ft&&this.fail("disallowed character in attribute name.")}sAttribNameSawWhite(){let e=this.skipSpaces();switch(e){case Ft:return;case Ea:this.state=WL;break;default:this.fail("attribute without value."),this.text="",this.name="",e===sn?this.openTag():il(e)?(this.unget(),this.state=a1):(this.fail("disallowed character in attribute name."),this.state=sl)}}sAttribValue(){let e=this.getCodeNorm();Gf(e)?(this.q=e,this.state=XL):Bn(e)||(this.fail("unquoted attribute value."),this.state=YL,this.unget())}sAttribValueQuoted(){let{q:e,chunk:n}=this,{i}=this;for(;;)switch(this.getCode()){case e:this.pushAttrib(this.name,this.text+n.slice(i,this.prevI)),this.name=this.text="",this.q=null,this.state=fre;return;case rl:this.text+=n.slice(i,this.prevI),this.state=kf,this.entityReturnState=XL;return;case Ci:case Ji:case c1:this.text+=`${n.slice(i,this.prevI)} `,i=this.i;break;case cr:this.text+=n.slice(i,this.prevI),this.fail("disallowed character.");return;case Ft:this.text+=n.slice(i);return;default:}}sAttribValueClosed(){let e=this.getCodeNorm();Bn(e)?this.state=sl:e===sn?this.openTag():e===Vf?this.state=o1:il(e)?(this.fail("no whitespace between attributes."),this.unget(),this.state=a1):this.fail("disallowed character in attribute name.")}sAttribValueUnquoted(){let e=this.captureTo(yre);switch(e){case rl:this.state=kf,this.entityReturnState=YL;break;case cr:this.fail("disallowed character.");break;case Ft:break;default:this.text.includes("]]>")&&this.fail('the string "]]>" is disallowed in char data.'),this.pushAttrib(this.name,this.text),this.name=this.text="",e===sn?this.openTag():this.state=sl}}sCloseTag(){let e=this.captureNameChars();e===sn?this.closeTag():Bn(e)?this.state=pre:e!==Ft&&this.fail("disallowed character in closing tag.")}sCloseTagSawWhite(){switch(this.skipSpaces()){case sn:this.closeTag();break;case Ft:break;default:this.fail("disallowed character in closing tag.")}}handleTextInRoot(){let{i:e,forbiddenState:n}=this,{chunk:i,textHandler:s}=this;e:for(;;)switch(this.getCode()){case cr:{if(this.state=n1,s!==void 0){let{text:r}=this,o=i.slice(e,this.prevI);r.length!==0?(s(r+o),this.text=""):o.length!==0&&s(o)}n=Yr;break e}case rl:this.state=kf,this.entityReturnState=Cn,s!==void 0&&(this.text+=i.slice(e,this.prevI)),n=Yr;break e;case Ma:switch(n){case Yr:n=QL;break;case QL:n=u1;break;case u1:break;default:throw new Error("impossible state")}break;case sn:n===u1&&this.fail('the string "]]>" is disallowed in char data.'),n=Yr;break;case Ji:s!==void 0&&(this.text+=`${i.slice(e,this.prevI)}
`),e=this.i,n=Yr;break;case Ft:s!==void 0&&(this.text+=i.slice(e));break e;default:n=Yr}this.forbiddenState=n}handleTextOutsideRoot(){let{i:e}=this,{chunk:n,textHandler:i}=this,s=!1;e:for(;;){let r=this.getCode();switch(r){case cr:{if(this.state=n1,i!==void 0){let{text:o}=this,a=n.slice(e,this.prevI);o.length!==0?(i(o+a),this.text=""):a.length!==0&&i(a)}break e}case rl:this.state=kf,this.entityReturnState=Cn,i!==void 0&&(this.text+=n.slice(e,this.prevI)),s=!0;break e;case Ji:i!==void 0&&(this.text+=`${n.slice(e,this.prevI)}
`),e=this.i;break;case Ft:i!==void 0&&(this.text+=n.slice(e));break e;default:Bn(r)||(s=!0)}}s&&(!this.sawRoot&&!this.reportedTextBeforeRoot&&(this.fail("text data outside of root node."),this.reportedTextBeforeRoot=!0),this.closedRoot&&!this.reportedTextAfterRoot&&(this.fail("text data outside of root node."),this.reportedTextAfterRoot=!0))}pushAttribNS(e,n){var i;let{prefix:s,local:r}=this.qname(e),o={name:e,prefix:s,local:r,value:n};if(this.attribList.push(o),(i=this.attributeHandler)===null||i===void 0||i.call(this,o),s==="xmlns"){let a=n.trim();this.currentXMLVersion==="1.0"&&a===""&&this.fail("invalid attempt to undefine prefix in XML 1.0"),this.topNS[r]=a,h1(this,r,a)}else if(e==="xmlns"){let a=n.trim();this.topNS[""]=a,h1(this,"",a)}}pushAttribPlain(e,n){var i;let s={name:e,value:n};this.attribList.push(s),(i=this.attributeHandler)===null||i===void 0||i.call(this,s)}end(){var e,n;this.sawRoot||this.fail("document must contain a root element.");let{tags:i}=this;for(;i.length>0;){let r=i.pop();this.fail(`unclosed tag: ${r.name}`)}this.state!==VL&&this.state!==Cn&&this.fail("unexpected end.");let{text:s}=this;return s.length!==0&&((e=this.textHandler)===null||e===void 0||e.call(this,s),this.text=""),this._closed=!0,(n=this.endHandler)===null||n===void 0||n.call(this),this._init(),this}resolve(e){var n,i;let s=this.topNS[e];if(s!==void 0)return s;let{tags:r}=this;for(let o=r.length-1;o>=0;o--)if(s=r[o].ns[e],s!==void 0)return s;return s=this.ns[e],s!==void 0?s:(i=(n=this.opt).resolvePrefix)===null||i===void 0?void 0:i.call(n,e)}qname(e){let n=e.indexOf(":");if(n===-1)return{prefix:"",local:e};let i=e.slice(n+1),s=e.slice(0,n);return(s===""||i===""||i.includes(":"))&&this.fail(`malformed name: ${e}.`),{prefix:s,local:i}}processAttribsNS(){var e;let{attribList:n}=this,i=this.tag;{let{prefix:o,local:a}=this.qname(i.name);i.prefix=o,i.local=a;let c=i.uri=(e=this.resolve(o))!==null&&e!==void 0?e:"";o!==""&&(o==="xmlns"&&this.fail('tags may not have "xmlns" as prefix.'),c===""&&(this.fail(`unbound namespace prefix: ${JSON.stringify(o)}.`),i.uri=o))}if(n.length===0)return;let{attributes:s}=i,r=new Set;for(let o of n){let{name:a,prefix:c,local:l}=o,u,f;c===""?(u=a==="xmlns"?Aa:"",f=a):(u=this.resolve(c),u===void 0&&(this.fail(`unbound namespace prefix: ${JSON.stringify(c)}.`),u=c),f=`{${u}}${l}`),r.has(f)&&this.fail(`duplicate attribute: ${f}.`),r.add(f),o.uri=u,s[a]=o}this.attribList=[]}processAttribsPlain(){let{attribList:e}=this,n=this.tag.attributes;for(let{name:i,value:s}of e)n[i]!==void 0&&this.fail(`duplicate attribute: ${i}.`),n[i]=s;this.attribList=[]}openTag(){var e;this.processAttribs();let{tags:n}=this,i=this.tag;i.isSelfClosing=!1,(e=this.openTagHandler)===null||e===void 0||e.call(this,i),n.push(i),this.state=Cn,this.name=""}openSelfClosingTag(){var e,n,i;this.processAttribs();let{tags:s}=this,r=this.tag;r.isSelfClosing=!0,(e=this.openTagHandler)===null||e===void 0||e.call(this,r),(n=this.closeTagHandler)===null||n===void 0||n.call(this,r),(this.tag=(i=s[s.length-1])!==null&&i!==void 0?i:null)===null&&(this.closedRoot=!0),this.state=Cn,this.name=""}closeTag(){let{tags:e,name:n}=this;if(this.state=Cn,this.name="",n===""){this.fail("weird empty close tag."),this.text+="</>";return}let i=this.closeTagHandler,s=e.length;for(;s-- >0;){let r=this.tag=e.pop();if(this.topNS=r.ns,i?.(r),r.name===n)break;this.fail("unexpected close tag.")}s===0?this.closedRoot=!0:s<0&&(this.fail(`unmatched closing tag: ${n}.`),this.text+=`</${n}>`)}parseEntity(e){if(e[0]!=="#"){let i=this.ENTITIES[e];return i!==void 0?i:(this.fail(this.isName(e)?"undefined entity.":"disallowed character in entity name."),`&${e};`)}let n=NaN;return e[1]==="x"&&/^#x[0-9a-f]+$/i.test(e)?n=parseInt(e.slice(2),16):/^#[0-9]+$/.test(e)&&(n=parseInt(e.slice(1),10)),this.isChar(n)?String.fromCodePoint(n):(this.fail("malformed character entity."),`&${e};`)}};$f.SaxesParser=f1});var aN=E((gbe,oN)=>{var Ere=t=>{let e={type:"mesh"};return e.objects=[],e},Mre=t=>{let e={type:"vertices"};return e.objects=[],e},Are=t=>{let e={type:"coordinates"};return e.objects=[],e},wre=t=>{let e={type:"normal"};return e.objects=[],e},Tre=t=>({type:"x",value:"0"}),Cre=t=>({type:"y",value:"0"}),Rre=t=>({type:"z",value:"0"}),Dre=t=>{let e={type:"volume"};return t.materialid&&(e.materialid=t.materialid),e.objects=[],e},Pre=t=>{let e={type:"triangle"};return e.objects=[],e},Ire=t=>({type:"v1",value:"0"}),Lre=t=>({type:"v2",value:"0"}),Nre=t=>({type:"v3",value:"0"}),Fre=t=>{let e={type:"vertex"};return e.objects=[],e},Ore=t=>{let e={type:"edge"};return e.objects=[],e},Ure=t=>{let e={type:"metadata"};return t.type&&(e.mtype=t.type),t.id&&(e.id=t.id),e},Bre=t=>{let e={type:"material"};return t.id&&(e.id=t.id),e.objects=[],e},kre=t=>{let e={type:"color"};return e.objects=[],e},zre=t=>({type:"r",value:"1"}),qre=t=>({type:"g",value:"1"}),Vre=t=>({type:"b",value:"1"}),Gre=t=>({type:"a",value:"1"}),Hre=t=>{let e={type:"map"};return t.gtexid&&(e.gtexid=t.gtexid),t.btexid&&(e.btexid=t.btexid),t.rtexid&&(e.rtexid=t.rtexid),e.objects=[],e},$re=t=>({type:"u1",value:"0"}),Wre=t=>({type:"u2",value:"0"}),Xre=t=>({type:"u3",value:"0"});oN.exports={amfMesh:Ere,amfVertices:Mre,amfCoordinates:Are,amfX:Tre,amfY:Cre,amfZ:Rre,amfNormal:wre,amfVolume:Dre,amfTriangle:Pre,amfV1:Ire,amfV2:Lre,amfV3:Nre,amfVertex:Fre,amfEdge:Ore,amfMetadata:Ure,amfMaterial:Bre,amfColor:kre,amfR:zre,amfG:qre,amfB:Vre,amfA:Gre,amfMap:Hre,amfU1:$re,amfU2:Wre,amfU3:Xre}});var Xf=E((xbe,cN)=>{var Yre=25.4000508001016;cN.exports={inchMM:Yre}});var x1=E((vbe,vN)=>{var Zre=Wf(),{amfMesh:jre,amfVertices:Jre,amfCoordinates:Kre,amfX:lN,amfY:uN,amfZ:hN,amfNormal:Qre,amfVolume:eoe,amfTriangle:toe,amfV1:fN,amfV2:dN,amfV3:pN,amfVertex:noe,amfEdge:ioe,amfMetadata:soe,amfMaterial:roe,amfColor:ooe,amfR:aoe,amfG:coe,amfB:loe,amfA:uoe,amfMap:mN,amfU1:p1,amfU2:m1,amfU3:g1}=aN(),{inchMM:gN}=Xf(),Yf=null,Ot=0,Ki=[],ws=[],hoe=[],foe=[],xN=null,doe=t=>{let e={type:"amf",unit:"mm",scale:1};switch(t.unit&&(e.unit=t.unit.toLowerCase()),e.unit.toLowerCase()){case"inch":e.scale=gN;break;case"foot":e.scale=gN*12;break;case"meter":e.scale=1e3;break;case"micron":e.scale=.001;break;case"millimeter":default:break}return e.objects=[],e},poe=t=>{let e={type:"object",id:`JSCAD${Ki.length}`};return t.id&&(e.id=t.id),e.objects=[],e},moe=(t,e)=>{let n=new Zre.SaxesParser;n.on("error",i=>{console.log(`ERROR: AMF file line ${i.line}, column ${i.column}, bad character [${i.c}]`)}),n.on("opentag",i=>{let s={AMF:doe,OBJECT:a=>{let c=poe(a);return Ot===0&&(Ot=1),c},MESH:jre,VERTICES:Jre,VERTEX:noe,EDGE:ioe,VOLUME:eoe,MATERIAL:a=>{let c=roe(a);return Ot===0&&(Ot=2),c},TEXTURE:a=>{Ot===0&&(Ot=3)},CONSTELLATION:a=>{Ot===0&&(Ot=4)},METADATA:a=>{let c=soe(a);return Ot===0&&(Ot=5),c},COORDINATES:Kre,NORMAL:Qre,NX:lN,X:lN,NY:uN,Y:uN,NZ:hN,Z:hN,TRIANGLE:toe,V1:fN,VTEX1:fN,V2:dN,VTEX2:dN,V3:pN,VTEX3:pN,COLOR:ooe,R:aoe,G:coe,B:loe,A:uoe,MAP:mN,TEXMAP:mN,U1:p1,UTEX1:p1,WTEX1:p1,U2:m1,UTEX2:m1,WTEX2:m1,U3:g1,UTEX3:g1,WTEX3:g1,COMPOSITE:()=>{},undefined:()=>console.log(`WARNING: unsupported AMF element: ${i.name}`)},r=i.name.toUpperCase(),o=s[r]?s[r](i.attributes,{amfObjects:Ki}):null;if(o){switch(Ot){case 0:"objects"in o&&Ki.push(o);break;case 1:if(Ki.length>0){let a=Ki.pop();"objects"in a&&a.objects.push(o),Ki.push(a),"objects"in o&&Ki.push(o)}break;case 2:if(o.type==="material")ws.push(o);else if(ws.length>0){let a=ws.pop();"objects"in a&&a.objects.push(o),ws.push(a),"objects"in o&&ws.push(o)}break;case 3:break;case 4:break;case 5:break;default:console.log("WARNING: invalid AMF definition");break}Yf=o}}),n.on("closetag",i=>{switch(i.name.toUpperCase()){case"AMF":case"OBJECT":case"MESH":case"VERTICES":case"VERTEX":case"EDGE":case"COORDINATES":case"NORMAL":case"VOLUME":case"TRIANGLE":case"MATERIAL":case"COLOR":case"MAP":case"TEXMAP":break;case"TEXTURE":Ot===3&&(Ot=0);return;case"CONSTELLATION":Ot===4&&(Ot=0);return;case"METADATA":Ot===5&&(Ot=0);return;default:return}let r=null;switch(Ot){case 0:case 1:Ki.length>0&&(r=Ki.pop(),r.type==="object"&&(Ot=0)),Ki.length===0&&(xN=r);break;case 2:ws.length>0&&(r=ws.pop(),r.type==="material"&&(ws.push(r),Ot=0));break;case 3:Ot=0;break;case 4:Ot=0;break;case 5:Ot=0;break;default:break}}),n.on("text",i=>{i!==null&&(i=i.trim(),i.length>0&&Yf&&Ot!==0&&(Yf.value=i,Yf=null))}),n.on("end",()=>{}),n.write(t).close()},goe=(t,e)=>(moe(t,e),{amfObj:xN,amfMaterials:ws,amfTextures:hoe,amfConstels:foe});vN.exports=goe});var _N=E((ybe,yN)=>{var xoe=Zg(),voe=x1(),yoe=(t,e)=>{let n={pxPmm:Xf().pxPmm};t=Object.assign({},n,t);let{version:i,pxPmm:s,addMetaData:r,filename:o}=t;t&&t.statusCallback&&t.statusCallback({progress:0});let{amfObj:a,amfMaterials:c,amfTextures:l,amfConstels:u}=voe(e,s),f=r?`//
// Produced by JSCAD IO Library : AMF Deserializer (${i})
// date: ${new Date}
// source: ${o}
//
`:"";if(!a)throw new Error("AMF parsing failed, no valid AMF data retrieved");return t&&t.statusCallback&&t.statusCallback({progress:50}),f+=_oe(a,{amfMaterials:c,amfTextures:l,amfConstels:u}),t&&t.statusCallback&&t.statusCallback({progress:100}),f},_oe=(t,e)=>{if(t.type!=="amf"||!t.objects)throw new Error("AMF parsing failed, malformed");let n="",i=t.objects,s=e.amfMaterials,r=(o,a)=>{switch(o.type){case"object":n+=xoe(o,a,e,{instantiate:!1,scale:t.scale});break;case"metadata":break;case"material":break;default:console.log("WARNING: unknown object type: "+o.type);break}};n=`// Objects  : ${i.length}
// Materials: ${s.length}
// Scale    : ${t.scale} from Units (${t.unit})

const {colors, geometries, transforms} = require('@jscad/modeling')

const main = () => {
  let objects = []
`;for(let o=0;o<i.length;o++){let a=i[o];a.type==="object"&&(n+=`  objects.push(createObject${a.id}())
`)}return n+=`  return objects
}
`,i.forEach(r),n+=`module.exports = {main}
`,n};yN.exports=yoe});var SN=E((_be,bN)=>{var boe=Zg(),Soe=x1(),Eoe=(t,e)=>{let n={pxPmm:Xf().pxPmm};t=Object.assign({},n,t);let{pxPmm:i}=t,{amfObj:s,amfMaterials:r,amfTextures:o,amfConstels:a}=Soe(e,i);if(!s)throw new Error("AMF parsing failed, no valid AMF data retrieved");return Moe(s,{amfMaterials:r,amfTextures:o,amfConstels:a})},Moe=(t,e)=>t.objects.filter(i=>i.type==="object").map((i,s)=>boe(i,s,e,{amf:t,instantiate:!0}));bN.exports=Eoe});var MN=E((bbe,EN)=>{var{ensureString:Aoe}=Ss(),woe=TL().version,Toe=_N(),Coe=SN(),Roe=(t,e)=>(t=Object.assign({},{filename:"amf",output:"script",version:woe,addMetaData:!0},t),e=Aoe(e),t.output==="script"?Toe(t,e):Coe(t,e)),Doe="amf";EN.exports={deserialize:Roe,extension:Doe}});var AN=E((Sbe,Poe)=>{Poe.exports={name:"@jscad/dxf-deserializer",version:"2.3.30",description:"DXF Deserializer for JSCAD",homepage:"https://openjscad.xyz/",repository:"https://github.com/jscad/OpenJSCAD.org",main:"index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava --verbose --timeout 2m './tests/test*.js'"},contributors:[{name:"z3dev",url:"http://www.z3d.jp"},{name:"Mark 'kaosat-dev' Moissette",url:"http://kaosat.net"}],keywords:["openjscad","jscad","import","deserializer","dxf"],license:"MIT",dependencies:{"@jscad/io-utils":"2.0.33","@jscad/modeling":"2.13.0"},devDependencies:{ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var v1=E((Ebe,wN)=>{var Ioe=[[0,"etyp"],[1,"text"],[2,"name"],[3,"nam1"],[5,"hdle"],[6,"ltyp"],[7,"lsty"],[8,"lnam"],[9,"vari"],[10,"pptx"],[11,"sptx"],[12,"tptx"],[13,"fptx"],[20,"ppty"],[21,"spty"],[22,"tpty"],[23,"fpty"],[30,"pptz"],[31,"sptz"],[32,"tptz"],[33,"fptz"],[38,"elev"],[39,"lthk"],[40,"swid"],[41,"ewid"],[42,"bulg"],[43,"cwid"],[48,"lscl"],[50,"ang0"],[51,"ang1"],[60,"visb"],[62,"cnmb"],[67,"spac"],[70,"lflg"],[71,"fvia"],[72,"fvib"],[73,"fvic"],[74,"fvid"],[75,"cflg"],[90,"vlen"],[91,"slen"],[92,"plen"],[93,"flen"],[94,"elen"],[95,"clen"],[100,"sbnm"],[210,"etrx"],[220,"etry"],[230,"etrz"]],Loe=new Map(Ioe),Noe=t=>Loe.get(t),Foe=[[0,"none"],[1,"inches"],[2,"feet"],[3,"miles"],[4,"millimeters"],[5,"centimeters"],[6,"meters"],[7,"kilometers"],[8,"microinches"],[9,"mils"],[10,"yards"],[11,"angstroms"],[12,"nanometers"],[13,"microns"],[14,"decimeters"],[15,"dekameters"],[16,"hectometers"],[17,"gigameters"],[18,"astrounits"],[19,"lightyears"],[20,"parsecs"]],Ooe=0,Uoe=256;wN.exports={drawingUnits:Foe,BYBLOCK:Ooe,BYLAYER:Uoe,getTLA:Noe}});var CN=E((Mbe,TN)=>{var Boe=[[0,0,0,255],[255,0,0,255],[255,255,0,255],[0,255,0,255],[0,255,255,255],[0,0,255,255],[255,0,255,255],[255,255,255,255],[128,128,128,255],[192,192,192,255],[255,0,0,255],[255,127,127,255],[165,0,0,255],[165,82,82,255],[127,0,0,255],[127,63,63,255],[76,0,0,255],[76,38,38,255],[38,0,0,255],[38,19,19,255],[255,63,0,255],[255,159,127,255],[165,41,0,255],[165,103,82,255],[127,31,0,255],[127,79,63,255],[76,19,0,255],[76,47,38,255],[38,9,0,255],[38,28,19,255],[255,127,0,255],[255,191,127,255],[165,82,0,255],[165,124,82,255],[127,63,0,255],[127,95,63,255],[76,38,0,255],[76,57,38,255],[38,19,0,255],[38,28,19,255],[255,191,0,255],[255,223,127,255],[165,124,0,255],[165,145,82,255],[127,95,0,255],[127,111,63,255],[76,57,0,255],[76,66,38,255],[38,28,0,255],[38,33,19,255],[255,255,0,255],[255,255,127,255],[165,165,0,255],[165,165,82,255],[127,127,0,255],[127,127,63,255],[76,76,0,255],[76,76,38,255],[38,38,0,255],[38,38,19,255],[191,255,0,255],[223,255,127,255],[124,165,0,255],[145,165,82,255],[95,127,0,255],[111,127,63,255],[57,76,0,255],[66,76,38,255],[28,38,0,255],[33,38,19,255],[127,255,0,255],[191,255,127,255],[82,165,0,255],[124,165,82,255],[63,127,0,255],[95,127,63,255],[38,76,0,255],[57,76,38,255],[19,38,0,255],[28,38,19,255],[63,255,0,255],[159,255,127,255],[41,165,0,255],[103,165,82,255],[31,127,0,255],[79,127,63,255],[19,76,0,255],[47,76,38,255],[9,38,0,255],[23,38,19,255],[0,255,0,255],[125,255,127,255],[0,165,0,255],[82,165,82,255],[0,127,0,255],[63,127,63,255],[0,76,0,255],[38,76,38,255],[0,38,0,255],[19,38,19,255],[0,255,63,255],[127,255,159,255],[0,165,41,255],[82,165,103,255],[0,127,31,255],[63,127,79,255],[0,76,19,255],[38,76,47,255],[0,38,9,255],[19,88,23,255],[0,255,127,255],[127,255,191,255],[0,165,82,255],[82,165,124,255],[0,127,63,255],[63,127,95,255],[0,76,38,255],[38,76,57,255],[0,38,19,255],[19,88,28,255],[0,255,191,255],[127,255,223,255],[0,165,124,255],[82,165,145,255],[0,127,95,255],[63,127,111,255],[0,76,57,255],[38,76,66,255],[0,38,28,255],[19,88,88,255],[0,255,255,255],[127,255,255,255],[0,165,165,255],[82,165,165,255],[0,127,127,255],[63,127,127,255],[0,76,76,255],[38,76,76,255],[0,38,38,255],[19,88,88,255],[0,191,255,255],[127,223,255,255],[0,124,165,255],[82,145,165,255],[0,95,127,255],[63,111,217,255],[0,57,76,255],[38,66,126,255],[0,28,38,255],[19,88,88,255],[0,127,255,255],[127,191,255,255],[0,82,165,255],[82,124,165,255],[0,63,127,255],[63,95,127,255],[0,38,76,255],[38,57,126,255],[0,19,38,255],[19,28,88,255],[0,63,255,255],[127,159,255,255],[0,41,165,255],[82,103,165,255],[0,31,127,255],[63,79,127,255],[0,19,76,255],[38,47,126,255],[0,9,38,255],[19,23,88,255],[0,0,255,255],[127,127,255,255],[0,0,165,255],[82,82,165,255],[0,0,127,255],[63,63,127,255],[0,0,76,255],[38,38,126,255],[0,0,38,255],[19,19,88,255],[63,0,255,255],[159,127,255,255],[41,0,165,255],[103,82,165,255],[31,0,127,255],[79,63,127,255],[19,0,76,255],[47,38,126,255],[9,0,38,255],[23,19,88,255],[127,0,255,255],[191,127,255,255],[165,0,82,255],[124,82,165,255],[63,0,127,255],[95,63,127,255],[38,0,76,255],[57,38,126,255],[19,0,38,255],[28,19,88,255],[191,0,255,255],[223,127,255,255],[124,0,165,255],[142,82,165,255],[95,0,127,255],[111,63,127,255],[57,0,76,255],[66,38,76,255],[28,0,38,255],[88,19,88,255],[255,0,255,255],[255,127,255,255],[165,0,165,255],[165,82,165,255],[127,0,127,255],[127,63,127,255],[76,0,76,255],[76,38,76,255],[38,0,38,255],[88,19,88,255],[255,0,191,255],[255,127,223,255],[165,0,124,255],[165,82,145,255],[127,0,95,255],[127,63,111,255],[76,0,57,255],[76,38,66,255],[38,0,28,255],[88,19,88,255],[255,0,127,255],[255,127,191,255],[165,0,82,255],[165,82,124,255],[127,0,63,255],[127,63,95,255],[76,0,38,255],[76,38,57,255],[38,0,19,255],[88,19,28,255],[255,0,63,255],[255,127,159,255],[165,0,41,255],[165,82,103,255],[127,0,31,255],[127,63,79,255],[76,0,19,255],[76,38,47,255],[38,0,9,255],[88,19,23,255],[0,0,0,255],[101,101,101,255],[102,102,102,255],[153,153,153,255],[204,204,204,255],[255,255,255,255]];TN.exports=Boe});var RN=E(Zf=>{(function(t){t.reader=function(h){return new e(h)},t.STATES=["start","end","error"];function e(h){let d=this;d.options=h||{},d.trackPosition=d.options.track!==!1,d.trackPosition&&(d.line=d.column=d.c=0)}e.prototype={on:function(h,d){let g=this;g["on"+h]=d},absorb:function(h,d){this.absorbers===void 0&&(this.absorbers=new Map),this.absorbers.set(h,d)},write:function(h){let d=this;return a(d,h),d},close:function(){let h=this;return h.isclosed=!0,h}};let n=h=>o(h,"onstart",h.data),i=(h,d,g)=>{if(h.absorbers!==void 0){let p=h.absorbers.get(d);p!==void 0&&p(h,d,g)}},s=(h,d)=>(h.trackPosition&&(d+=`
Line: ${h.line}
Column: ${h.column}
Char: ${h.c}`),d=new Error(d),h.error=d,o(h,"onerror",d)),r=h=>o(h,"onend",h.data),o=(h,d,g)=>{let p=d.toString();return h[p]&&h[p](h,g),h},a=(h,d)=>{if(h.error)throw h.error;if(h.isclosed)return s(h,"Cannot write after close");if(n(h),d===null)return r(h);h.group=null,h.value=null,h.error=null,h.position=0,h.line=0,h.column=0;let g=0,p="",x="";for(;h.error===null&&(p=f(d,g++),!!p);)h.trackPosition&&(h.position++,p===`
`?(h.line++,h.column=0):h.column++),p===`
`?(c(h,x),x=""):x+=p;return r(h),h},c=(h,d)=>{d=d.trim(),h.group===null?(l(h,d),h.value=null):u(h,d),h.group!==null&&h.value!==null&&(i(h,h.group,h.value),h.group=null,h.value=null)},l=(h,d)=>{let g=parseInt(d);isNaN(g)?(s(h,"Invalid group (int)"),h.group=null):h.group=g},u=(h,d)=>{h.options.strict,h.value=d},f=(h,d)=>h&&h.length>d?h.charAt(d):""})(typeof Zf>"u"?Zf.dxf={}:Zf)});var y1=E((wbe,PN)=>{var{BYBLOCK:koe,BYLAYER:zoe}=v1(),DN=(t,e)=>{let n=t.lnam||"0";for(let i of e)if(i.name===n)return i;return null},qoe=(t,e)=>{let n=t.cnmb||-1;if(n===zoe){n=-1;let i=DN(t,e);i!==null&&(n=i.cnmb||-1)}return n},Voe=(t,e)=>{let n=t%e;return Math.floor(n>=0?n:n+e)},Goe=(t,e)=>{if(t<1)return null;t=Voe(t,e.length);let n=e[t];return[n[0]/255,n[1]/255,n[2]/255,n[3]/255]};PN.exports={findLayer:DN,getColor:Goe,getColorNumber:qoe}});var S1=E((Tbe,FN)=>{var{geometries:ln,maths:Vt,primitives:Zr}=At(),Hoe=1e-5,{getColor:_1,getColorNumber:b1}=y1(),LN=(t,e,n)=>{let i=[];if(i.push(Vt.vec3.fromValues(t.pptx,t.ppty,t.pptz)),i.push(Vt.vec3.fromValues(t.sptx,t.spty,t.sptz)),i.push(Vt.vec3.fromValues(t.tptx,t.tpty,t.tptz)),t.fptx){let a=!1;t.tptx!==t.fptx&&(a=!0),t.tpty!==t.fpty&&(a=!0),t.tptz!==t.fptz&&(a=!0),a&&i.push(Vt.vec3.fromValues(t.fptx,t.fpty,t.fptz))}let s=b1(t,e),r=_1(s,n.colorindex),o=ln.poly3.create(i);return r&&(o.color=r),o},$oe=(t,e,n)=>{if(t.pptz===t.sptz&&t.pptz===0){let r=Vt.vec2.fromValues(t.pptx,t.ppty),o=Vt.vec2.fromValues(t.sptx,t.spty);return Zr.line([r,o])}let i=Vt.vec3.fromValues(t.pptx,t.ppty,t.pptz),s=Vt.vec3.fromValues(t.sptx,t.spty,t.sptz);return Zr.line([i,s])},NN=t=>{let e=parseInt("00000000000100000",2),n=parseInt("00000000001000000",2),i=parseInt("00000000010000000",2),s=t.lflg,r={};return(s&e)===e||(s&n)===n?r.vec=Vt.vec3.fromValues(t.pptx,t.ppty,t.pptz):(s&i)===i?(r.vec=Vt.vec3.fromValues(t.pptx,t.ppty,t.pptz),r.fvia=t.fvia,r.fvib=t.fvib,r.fvic=t.fvic,r.fvid=t.fvid):(r.vec=Vt.vec2.fromValues(t.pptx,t.ppty),r.bulg=t.bulg),r},IN=(t,e,n,i)=>{if(i===0)t=ln.path2.appendPoints([[e,n]],t);else{let s=ln.path2.toPoints(t),r=s[s.length-1],o=Vt.vec2.fromValues(e,n),c=Vt.vec2.distance(r,o)*((1+Math.pow(i,2))/(4*i)),l=i<0,u=!1,f=Math.atan(i)*4;t=ln.path2.appendArc({endpoint:[e,n],radius:[c,c],xaxisrotation:f,clockwise:l,large:u,segments:16},t)}return t},Woe=(t,e,n)=>{let i=parseInt("00000000000000001",2),s=t.vlen,r=t.pptxs,o=t.pptys,a=t.bulgs,c=t.lflg,l=ln.path2.create(),u=(c&i)===i;if(s===r.length&&s===o.length&&s===a.length)r.forEach((f,h,d)=>{let g=0;h>0&&(g=a[h-1]),l=IN(l,r[h],o[h],g)});else return l;return u&&!l.isClosed&&(l=IN(l,r[0],o[0],a[s-1]),l=ln.path2.close(l)),l},Xoe=(t,e,n)=>{let i=t.lthk,s=t.pptx,r=t.ppty,o=t.swid,a=t.ang0;a=a*.017453292519943295;let c=t.ang1;c=c*.017453292519943295;let l=16;return i===0?Zr.arc({center:[s,r],radius:o,startAngle:a,endAngle:c,segments:l}):Zr.arc({center:[s,r],radius:o,startAngle:a,endAngle:c,segments:l})},Yoe=(t,e,n)=>{let i=t.lthk,s=t.pptx,r=t.ppty,o=t.swid,a=b1(t,e),c=_1(a,n.colorindex),l=16;if(i===0){let h=Zr.circle({center:[s,r],radius:o,segments:l});return c&&(h.color=c),h}let f=Zr.circle({center:[s,r],radius:o,segments:l}).extrude({offset:[0,0,i]});return c&&(f.color=c),f},Zoe=(t,e,n)=>{let i=t.pptx,s=t.ppty,r=t.pptz,o=t.sptx,a=t.spty,c=t.sptz,l=t.swid,u=16;if(r===0&&c===0){let f=Vt.vec2.fromValues(0,0),h=Vt.vec2.fromValues(o,a),d=Vt.vec2.distance(f,h),g=d*l,p=Math.atan2(a,o)*180/Math.PI;p<Hoe&&(p=0),p=p*.017453292519943295;let x=Zr.ellipse({center:[0,0],radius:[d,g],segments:u}),m=Vt.mat4.fromZRotation(Vt.mat4.create(),p);return Vt.mat4.multiply(m,m,Vt.mat4.fromTranslation(Vt.mat4.create(),[i,s,0])),ln.geom2.transform(m,x)}},joe=t=>{let e=[],n=0;for(;n<t.length;){let i=t[n++],s=[];for(;i>0;)s.push(t[n++]),i--;e.push(s)}return e},Joe=(t,e,n)=>{let i=[],s=0;for(;s<t.length;){let r=t[s],o=e[s],a=n[s];i.push([r,o,a]),s++}return i},Koe=(t,e,n)=>{let i=t.vlen,s=t.pptxs,r=t.pptys,o=t.pptzs,a=t.flen,c=t.fvals,l=b1(t,e),u=_1(l,n.colorindex),f=[];if(i===s.length&&i===r.length&&i===o.length&&a===c.length){let h=joe(c),d=Joe(s,r,o),g=0;for(;g<h.length;){let p=h[g],x=[],m=0;for(;m<p.length;){let S=p[m],y=Vt.vec3.clone(d[S]);x.push(y),m++}n.dxf.angdir===1&&(x=x.reverse());let b=ln.poly3.create(x);u&&(b.color=u),f.push(b),g++}}return ln.geom3.create(f)},Qoe=t=>{let e=parseInt("00000000000000001",2),n=parseInt("00000000000001000",2),i=parseInt("00000000000010000",2),s=parseInt("00000000000100000",2),r=parseInt("00000000001000000",2),o=t.lflg,a=null;return(o&n)===n?a=null:(o&i)===i||(o&r)===r?(a=ln.geom3.create(),a.closedM=(o&e)===e,a.closedN=(o&s)===s):(a=ln.path2.create(),a.closedM=(o&e)===e),"cnmb"in t&&(a.cnmb=t.cnmb),a},Ri=(t,e,n,i,s)=>{if(ln.path2.isA(e)){let r=i.map(o=>o.vec);t.push(ln.path2.fromPoints({closed:e.closed},r))}return ln.geom3.isA(e)&&t.push(ln.geom3.create(n)),null},eae=(t,e)=>{let n=[],i=null,s=[],r=[],o=[],a=null;for(let c of t.objstack)if(a=null,"type"in c){switch(c.type){case"dxf":break;case"layer":i=Ri(r,i,s,o,e),n.push(c);break;case"variable":i=Ri(r,i,s,o,e);break;case"3dface":a=LN(c,n,e),i===null&&(i=ln.geom3.create());break;case"mesh":i=Ri(r,i,s,o,e),r.push(Koe(c,n,e));break;case"arc":i=Ri(r,i,s,o,e),r.push(Xoe(c,n,e));break;case"circle":i=Ri(r,i,s,o,e),r.push(Yoe(c,n,e));break;case"ellipse":i=Ri(r,i,s,o,e),r.push(Zoe(c,n,e));break;case"line":i=Ri(r,i,s,o,e),r.push($oe(c,n,e));break;case"polyline":i=Ri(r,i,s,o,e),i===null&&(i=Qoe(c));break;case"vertex":a=NN(c);break;case"seqend":i=Ri(r,i,s,o,e);break;case"lwpolyline":i=Ri(r,i,s,o,e),r.push(Woe(c,n,e));break;default:break}ln.poly3.isA(a)&&s.push(a),a&&"vec"in a&&a.vec.length===3&&o.push(a),a&&"vec"in a&&a.vec.length===2&&o.push(a)}return i=Ri(r,i,s,o,e),r};FN.exports={instantiatePolygon:LN,instantiateVector:NN,instantiateAsciiDxf:eae}});var qN=E((Cbe,zN)=>{var{maths:Pi,geometries:Ta}=At(),{instantiatePolygon:tae,instantiateVector:nae}=S1(),{findLayer:iae,getColor:jr,getColorNumber:Jr}=y1(),ON=t=>`${t[0]},${t[1]}`,E1=t=>`${t[0]},${t[1]},${t[2]}`,BN=t=>{let e=Ta.poly3.toPoints(t),n="createPolygon([";return e.forEach(i=>{n+=`[${E1(i)}],`}),n+=`],${sae(t)})`,n},sae=t=>{let e="null";if("color"in t){let n=t.color;e=`[${n[0]},${n[1]},${n[2]},${n[3]}]`}return e},rae=(t,e,n)=>{let i=t.name,s=Jr(t,e),r=jr(s,n.colorindex),o="";if(!t.pptz||t.pptz===t.sptz&&t.pptz===0){let a=Pi.vec2.fromValues(t.pptx,t.ppty),c=Pi.vec2.fromValues(t.sptx,t.spty);o=`  let ${i} = primitives.line([[${ON(a)}],[${ON(c)}]])
`}else{let a=Pi.vec3.fromValues(t.pptx,t.ppty,t.pptz),c=Pi.vec3.fromValues(t.sptx,t.spty,t.sptz);o=`  let ${i} = primitives.line([[${E1(a)}],[${E1(c)}]])
`}r&&(o+=`  ${i} = colors.colorize([${r[0]}, ${r[1]}, ${r[2]}, 1], ${i})
`),t.script=o,Ts(t,e)},UN=(t,e,n,i,s,r)=>{if(i===0)return`geometries.path2.appendPoints([[${e},${n}]], ${t})
`;let o=Pi.vec2.fromValues(s,r),a=Pi.vec2.fromValues(e,n),l=Pi.vec2.distance(o,a)*((1+Math.pow(i,2))/(4*i)),u=i<0,f=!1,h=Math.atan(i)*4;return`geometries.path2.appendArc({endpoint: [${e},${n}],radius: [${l},${l}],xaxisrotation: ${h},clockwise: ${u},large: ${f},segments: 16}, ${t})
`},kN=(t,e,n)=>{let i=parseInt("00000000000000001",2),s=t.vlen,r=t.pptxs,o=t.pptys,a=t.bulgs,c=t.lflg,l=t.name,u=Jr(t,e),f=jr(u,n.colorindex),h=`  let ${l} = geometries.path2.create()
`,d=(c&i)===i;if(s===r.length&&s===o.length&&s===a.length){h+=`  ${l} = geometries.path2.appendPoints([[${r[0]}, ${o[0]}]], ${l})
`;for(let g=0;g<r.length;g++){let p=(g+1)%r.length,x=r[p],m=o[p],b=r[g],S=o[g],y=a[g];p!==0?h+=`  ${l} = ${UN(l,x,m,y,b,S)}`:y!==0&&(h+=`  ${l} = ${UN(l,x,m,y,b,S)}`)}}else return;d?h+=`  ${l} = geometries.path2.close(${l})
`:h+=`
`,f&&(h+=`  ${l} = colors.colorize([${f[0]}, ${f[1]}, ${f[2]}, 1], ${l})
`),t.script=h,Ts(t,e)},oae=(t,e,n)=>{let i=t.lthk,s=t.pptx,r=t.ppty,o=t.swid,a=t.ang0,c=t.ang1,l=t.name,u=Jr(t,e),f=jr(u,n.colorindex);a*=.017453292519943295,c*=.017453292519943295;let h=16;if(i===0){let g=`  let ${l} = primitives.arc({center: [${s}, ${r}], radius: ${o}, startAngle: ${a}, endAngle: ${c}, segements: ${h}})
`;f&&(g+=`  ${l} = colors.colorize([${f[0]}, ${f[1]}, ${f[2]}, 1], ${l})
`),t.script=g,Ts(t,e);return}let d=`  let ${l} = primitives.arc({center: [${s}, ${r}], radius: ${o}, startAngle: ${a}, endAngle: ${c}, segements: ${h}})
`;f&&(d+=`  ${l} = colors.colorize([${f[0]}, ${f[1]}, ${f[2]}, 1], ${l})
`),t.script=d,Ts(t,e)},aae=(t,e,n)=>{let i=t.lthk,s=t.pptx,r=t.ppty,o=t.swid,a=t.name,c=Jr(t,e),l=jr(c,n.colorindex),u=16;if(i===0){let h=`  let ${a} = primitives.circle({center: [${s}, ${r}], radius: ${o}, segments: ${u}})
`;l&&(h+=`  ${a} = colors.colorize([${l[0]}, ${l[1]}, ${l[2]}, 1], ${a})
`),t.script=h,Ts(t,e);return}let f=`  let ${a} = primitives.circle({center: [${s}, ${r}], radius: ${o}, segments: ${u}}).extrude({offset: [0,0,${i}]}))
`;l&&(f+=`  ${a} = colors.colorize([${l[0]}, ${l[1]}, ${l[2]}, 1], ${a})
`),t.script=f,Ts(t,e)},cae=(t,e,n)=>{let i=t.pptx,s=t.ppty,r=t.pptz,o=t.sptx,a=t.spty,c=t.sptz,l=t.swid,u=t.name,f=Jr(t,e),h=jr(f,n.colorindex),d=16;if(r===0&&c===0){let g=Pi.vec2.fromValues(0,0),p=Pi.vec2.fromValues(o,a),x=Pi.vec2.distance(g,p),m=x*l,b=Math.atan2(a,o),S=`  let ${u} = primitives.ellipse({center: [0, 0, 0], radius: [${x}, ${m}], segments: ${d}})
  let ${u}matrix = maths.mat4.multiply(maths.mat4.create(), maths.mat4.fromTranslation(maths.mat4.create(), [${i}, ${s}, 0]), maths.mat4.fromZRotation(maths.mat4.create(), ${b}))
  ${u} = geometries.geom2.transform(${u}matrix, ${u})
`;h&&(S+=`  ${u} = colors.colorize([${h[0]}, ${h[1]}, ${h[2]}, 1], ${u})
`),t.script=S,Ts(t,e)}},lae=t=>{let e=[],n=0;for(;n<t.length;){let i=t[n++],s=[];for(;i>0;)s.push(t[n++]),i--;e.push(s)}return e},uae=(t,e,n)=>{let i=[],s=0;for(;s<t.length;){let r=t[s],o=e[s],a=n[s];i.push([r,o,a]),s++}return i},hae=(t,e,n)=>{let i=t.vlen,s=t.pptxs,r=t.pptys,o=t.pptzs,a=t.flen,c=t.fvals,l=Jr(t,e),u=jr(l,n.colorindex),f=[];if(i===s.length&&i===r.length&&i===o.length)if(a===c.length){let g=lae(c),p=uae(s,r,o),x=0;for(;x<g.length;){let m=g[x],b=[],S=0;for(;S<m.length;){let M=m[S],A=Pi.vec3.clone(p[M]);b.push(A),S++}n.dxf.angdir===1&&(b=b.reverse());let y=Ta.poly3.create(b);u&&(y.color=u),f.push(y),x++}}else console.warn("invalid mesh: faces");else console.warn("invalid mesh: vertices");let h=t.name,d=`  const ${h}_polygons = [
`;for(let g of f)d+="    "+BN(g)+`,
`;return d+=`  ]
  let ${h} = geometries.geom3.create(${h}_polygons)
`,t.script=d,Ts(t,e),null},fae=t=>{for(let n of t)if(n.name==="0")return n;let e={type:"layer"};return e.lnam="layer0",e.name="0",e.lscl=1,e.visb=0,e.spac=0,e.objects=[],t.push(e),e},Ts=(t,e)=>{let n=iae(t,e);n===null&&(n=fae(e)),"objects"in n||(n.objects=[]),n.objects.push(t)},dae=t=>{let e=parseInt("00000000000000001",2),n=parseInt("00000000000001000",2),i=parseInt("00000000000010000",2),s=parseInt("00000000000100000",2),r=parseInt("00000000001000000",2),o=t.lflg,a=null;return(o&n)===n?a={type:"3dline",isclosed:(o&e)===e}:(o&i)===i?(a={type:"3dpolymesh"},a.fvia=t.fvia,a.fvib=t.fvib,a.closedM=(o&e)===e,a.closedN=(o&s)===s):(o&r)===r?(a={type:"3dpolyfaces"},a.fvia=t.fvia,a.fvib=t.fvib):a={type:"2dline",isclosed:(o&e)===e},"cnmb"in t&&(a.cnmb=t.cnmb),"lnam"in t&&(a.lnam=t.lnam),a},pae=(t,e,n,i,s)=>{let r=(l,u)=>{let f=(l-1)*e+(u-1);return n[f].vec},o=[];if(t*e!==n.length||t<2|e<2)return o;let c=1;for(;c<t;){let l=1;for(;l<e;){let u=r(c,l),f=r(c+1,l),h=r(c+1,l+1),d=r(c,l+1),g=[u,f,h,d];s.dxf.angdir===1&&(g=g.reverse());let p=Ta.poly3.create(g),x=Ta.poly3.plane(p);Number.isFinite(x[3])&&(i&&(p.color=i),o.push(p)),l++}c++}return o},mae=(t,e,n,i,s)=>{let r=[];if(t+e!==n.length)return r;let o=t;for(;o<n.length;){let a=n[o],c=[Math.abs(a.fvia),Math.abs(a.fvib),Math.abs(a.fvic),Math.abs(a.fvid)],l=[];if(c[0]>0&&(a=n[c[0]-1],l.push(a.vec),c[1]>0&&(a=n[c[1]-1],l.push(a.vec),c[2]>0&&(a=n[c[2]-1],l.push(a.vec),c[3]>0&&(a=n[c[3]-1],l.push(a.vec))))),l.length>2){s.dxf.angdir===1&&(l=l.reverse());let u=Ta.poly3.create(l);r.push(u)}o++}return r},gae=(t,e,n,i)=>{t.vlen=n.length,t.pptxs=[],t.pptys=[],t.bulgs=[];for(let s of n)t.pptxs.push(s.vec[0]),t.pptys.push(s.vec[1]),t.bulgs.push(s.bulg);return t.isclosed?t.lflg=parseInt("00000000000000001",2):t.lflg=0,kN(t,e,i),null},Di=(t,e,n,i)=>{if(t===null)return null;let s=t.type,r=Jr(t,e),o=jr(r,i.colorindex);if(s==="2dline")return gae(t,e,n,i);if(s==="3dline")return null;if(s==="3dpolymesh"){let l=t.fvia,u=t.fvib;n=pae(l,u,n,o,i)}if(s==="3dpolyfaces"&&"fvia"in t){let l=t.fvia,u=t.fvib;n=mae(l,u,n,o,i)}let a=t.name,c=`  const ${a}_polygons = [
`;for(let l of n)c+="    "+BN(l)+`,
`;return c+=`  ]
  let ${a} = geometries.geom3.create(${a}_polygons)
`,o&&(c+=`  ${a}.color = [${o}]
`),t.script=c,Ts(t,e),null},xae=t=>{let n=`function ${t.lnam||"Unknown"}() {
`;for(let i of t.objects)n+=i.script;n+="  return [";for(let i of t.objects)n+=i.name+",";return n+=`]
}
`,n},vae=(t,e)=>{switch(t.name||"Unknown"){case"$ANGDIR":"lflg"in t&&(e.dxf.angdir=t.lflg);break;default:break}},yae=(t,e)=>{let n=[],i=null,s=[],r=0,o=null;for(let c of t.objstack)if(o=null,"type"in c){if(!("name"in c))c.name="jscad"+r,r=r+1;else{let l=c.name;l=l.replace(/ /g,"_"),l=l.replace(/-/g,"_"),l=l.replace(/\./g,"_"),c.name=l}switch(c.type){case"dxf":break;case"layer":i=Di(i,n,s,e),s=[],c.objects=[],c.lnam="layer"+n.length,n.push(c);break;case"variable":i=Di(i,n,s,e),s=[],vae(c,e);break;case"3dface":o=tae(c,n,e),i===null&&(i={type:"3dfaces"},i.name="jscad"+r,r=r+1);break;case"mesh":i=Di(i,n,s,e),s=[],hae(c,n,e);break;case"arc":i=Di(i,n,s,e),s=[],oae(c,n,e);break;case"circle":i=Di(i,n,s,e),s=[],aae(c,n,e);break;case"ellipse":i=Di(i,n,s,e),s=[],cae(c,n,e);break;case"line":i=Di(i,n,s,e),s=[],rae(c,n,e);break;case"polyline":i=Di(i,n,s,e),s=[],i===null&&(i=dae(c),i.name="jscad"+r,r=r+1);break;case"vertex":o=nae(c);break;case"seqend":i=Di(i,n,s,e),s=[];break;case"lwpolyline":i=Di(i,n,s,e),s=[],kN(c,n,e);break;default:break}Ta.poly3.isA(o)&&s.push(o),o&&"vec"in o&&o.vec.length===3&&s.push(o),o&&"vec"in o&&o.vec.length===2&&s.push(o)}i=Di(i,n,s,e);let a=`const {colors, geometries, maths, primitives, transforms} = require('@jscad/modeling')

const main = () => {
  let layers = []
  return layers.concat(`;return n.forEach(c=>{let l=c.lnam||"Unknown";a+=`${l}(),`}),a+=`[])
}
`,a+=`
function createPolygon(listofpoints, color) {
  let polygon = geometries.poly3.fromPoints(listofpoints)
  if (color) polygon.color = color
  return polygon
}
`,n.forEach(c=>{a+=xae(c)}),a+=`module.exports = {main}
`,a};zN.exports=yae});var $N=E((Rbe,HN)=>{var{ensureString:_ae}=Ss(),bae=AN().version,{BYLAYER:Cs,getTLA:J}=v1(),Sae=CN(),Eae=RN(),{instantiateAsciiDxf:Mae}=S1(),Aae=qN(),wae=(t,e)=>{if(t.options.strict===!0)throw e;console.log(`error: line ${e.line}, column ${e.column}, bad character [${e.c}]`)},Tae=(t,e)=>{},Cae=(t,e)=>{},Rae=(t,e,n)=>{let i=null;switch(n){case"LAYER":i={type:"layer"},i[J(48)]=1,i[J(60)]=0,i[J(67)]=0,t.objstack.push(i);break;case"LINE":i={type:"line"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(210)]=0,i[J(220)]=0,i[J(230)]=0,t.objstack.push(i);break;case"LWPOLYLINE":i={type:"lwpolyline"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(38)]=0,i[J(39)]=0,i[J(43)]=0,i[J(70)]=0,i[J(90)]=0,i[J(210)]=0,i[J(220)]=0,i[J(230)]=1,t.objstack.push(i);break;case"MESH":i={type:"mesh"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(91)]=0,i[J(92)]=0,i[J(93)]=0,i[J(94)]=0,i[J(95)]=0,i.state=0,t.objstack.push(i);break;case"POLYLINE":i={type:"polyline"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(10)]=0,i[J(20)]=0,i[J(30)]=0,i[J(39)]=0,i[J(40)]=0,i[J(41)]=0,i[J(70)]=0,i[J(71)]=0,i[J(72)]=0,i[J(73)]=0,i[J(74)]=0,i[J(75)]=0,i[J(210)]=0,i[J(220)]=0,i[J(230)]=1,t.objstack.push(i);break;case"ARC":i={type:"arc"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(39)]=0,i[J(210)]=0,i[J(220)]=0,i[J(230)]=1,t.objstack.push(i);break;case"CIRCLE":i={type:"circle"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(39)]=0,i[J(210)]=0,i[J(220)]=0,i[J(230)]=1,t.objstack.push(i);break;case"ELLIPSE":i={type:"ellipse"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(210)]=0,i[J(220)]=0,i[J(230)]=1,t.objstack.push(i);break;case"VERTEX":i={type:"vertex"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(10)]=0,i[J(20)]=0,i[J(30)]=0,i[J(40)]=0,i[J(41)]=0,i[J(42)]=0,i[J(70)]=0,i[J(71)]=0,i[J(72)]=0,i[J(73)]=0,i[J(74)]=0,t.objstack.push(i);break;case"3DFACE":i={type:"3dface"},i[J(48)]=1,i[J(60)]=0,i[J(62)]=Cs,i[J(67)]=0,i[J(70)]=0,t.objstack.push(i);break;case"SEQEND":i={type:"seqend"},t.objstack.push(i);break;default:i={},t.objstack.push(i);break}},Dae=(t,e,n)=>{let i={type:"variable",name:n};t.objstack.push(i)},Qi=(t,e,n)=>{let i=t.objstack.pop();"type"in i&&(i[J(e)]=parseFloat(n)),t.objstack.push(i)},kn=(t,e,n)=>{let i=t.objstack.pop();"type"in i&&(i[J(e)]=parseFloat(n)),t.objstack.push(i)},Pae=(t,e,n)=>{let i=t.objstack.pop();"type"in i&&(i.type==="lwpolyline"?(i.pptxs===void 0&&(i.pptxs=[],i.bulgs=[]),i.pptxs.push(parseFloat(n)),i.bulgs.push(0)):i.type==="mesh"?(i.pptxs===void 0&&(i.pptxs=[]),i.pptxs.push(parseFloat(n))):i[J(e)]=parseFloat(n)),t.objstack.push(i)},Iae=(t,e,n)=>{let i=t.objstack.pop();"type"in i&&(i.type==="lwpolyline"||i.type==="mesh"?(i.pptys===void 0&&(i.pptys=[]),i.pptys.push(parseFloat(n))):i[J(e)]=parseFloat(n)),t.objstack.push(i)},Lae=(t,e,n)=>{let i=t.objstack.pop();"type"in i&&(i.type==="mesh"?(i.pptzs===void 0&&(i.pptzs=[]),i.pptzs.push(parseFloat(n))):i[J(e)]=parseFloat(n)),t.objstack.push(i)},Nae=(t,e,n)=>{let i=t.objstack.pop();if("type"in i)if(i.type==="lwpolyline"){let s=i.bulgs;s!==void 0&&i.pptxs.length===s.length&&(s[s.length-1]=parseFloat(n))}else i[J(e)]=parseFloat(n);t.objstack.push(i)},ol=(t,e,n)=>{let i=t.objstack.pop();if("type"in i)if(i.type==="mesh"){let s=i.state;switch(e){case 91:i[J(e)]=parseFloat(n),i.state=1;break;case 92:s===1?(i.vlen=parseFloat(n),i.state=2):(i.plen=parseFloat(n),i.state=6);break;case 93:i[J(e)]=parseFloat(n),i.state=3;break;case 94:i[J(e)]=parseFloat(n),i.state=4;break;case 95:i[J(e)]=parseFloat(n),i.state=5;break;default:i.state=7;break}}else i[J(e)]=parseFloat(n);t.objstack.push(i)},Fae=(t,e,n)=>{let i=t.objstack.pop();if("type"in i)if(i.type==="mesh")switch(i.state){case 3:i.fvals===void 0&&(i.fvals=[]),i.fvals.push(parseFloat(n));break;case 4:i.evals===void 0&&(i.evals=[]),i.evals.push(parseFloat(n));break;default:break}else i[J(e)]=parseFloat(n);t.objstack.push(i)},jf=(t,e,n)=>{let i=t.objstack.pop();"type"in i&&(i[J(e)]=n),t.objstack.push(i)},VN=(t,e,n)=>{let i=t.objstack.pop();"type"in i&&i[J(e)]===void 0&&(i[J(e)]=n),t.objstack.push(i)},GN=(t,e)=>{let n=Eae.reader(e);return n.on("error",wae),n.on("start",Tae),n.on("end",Cae),n.absorb(0,Rae),n.absorb(1,jf),n.absorb(2,VN),n.absorb(3,VN),n.absorb(6,jf),n.absorb(7,jf),n.absorb(8,jf),n.absorb(9,Dae),n.absorb(10,Pae),n.absorb(11,kn),n.absorb(12,kn),n.absorb(13,kn),n.absorb(20,Iae),n.absorb(21,kn),n.absorb(22,kn),n.absorb(23,kn),n.absorb(30,Lae),n.absorb(31,kn),n.absorb(32,kn),n.absorb(33,kn),n.absorb(39,kn),n.absorb(40,kn),n.absorb(41,kn),n.absorb(42,Nae),n.absorb(50,kn),n.absorb(51,kn),n.absorb(62,Qi),n.absorb(70,Qi),n.absorb(71,Qi),n.absorb(72,Qi),n.absorb(73,Qi),n.absorb(74,Qi),n.absorb(75,Qi),n.absorb(90,Fae),n.absorb(91,ol),n.absorb(92,ol),n.absorb(93,ol),n.absorb(94,ol),n.absorb(95,ol),n.absorb(210,Qi),n.absorb(220,Qi),n.absorb(230,Qi),n.objstack=[],n.objstack.push({type:"dxf"}),n.write(t).close(),n},Oae=(t,e)=>{let n=GN(t,e);return Mae(n,e)},Uae=(t,e)=>{let n=GN(t,e),i=`// Produced by JSCAD IO Library : DXF Deserializer (${e.version})

`;return i+=Aae(n,e),i},Bae=(t,e)=>(t=Object.assign({},{filename:"dxf",version:bae,output:"script",strict:!0,colorindex:Sae,dxf:{angdir:0,insunits:4,pfacevmax:4}},t),e=_ae(e),t.output==="script"?Uae(e,t):Oae(e,t)),kae="dxf";HN.exports={deserialize:Bae,extension:kae}});var WN=E((Dbe,zae)=>{zae.exports={name:"@jscad/json-deserializer",version:"2.0.34",description:"JSON Deserializer for JSCAD",homepage:"https://openjscad.xyz/",repository:"https://github.com/jscad/OpenJSCAD.org",main:"index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava 'tests/*.test.js' --verbose --timeout 2m"},contributors:[{name:"z3dev",url:"http://www.z3d.jp"},{name:"Mark 'kaosat-dev' Moissette",url:"http://kaosat.net"}],keywords:["openjscad","jscad","import","deserializer","json"],license:"MIT",dependencies:{"@jscad/array-utils":"2.1.4","@jscad/io-utils":"2.0.33"},devDependencies:{"@jscad/modeling":"2.13.0",ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var YN=E((Pbe,XN)=>{var{flatten:qae,toArray:Vae}=Ti(),{ensureString:Gae}=Ss(),Hae=WN().version,$ae=(t,e)=>{t=Object.assign({},{filename:"json",output:"script",version:Hae,addMetaData:!0},t),e=Gae(e);let i=JSON.parse(e);return i=qae(Vae(i)),t.output==="script"?Wae(t,i):i},Wae=(t,e)=>{let{addMetaData:n,filename:i,version:s}=t,r=n?`//
// Produced by JSCAD IO Library : JSON Deserializer (${s})
// date: ${new Date}
// source: ${i}
//
`:"";return r+=`
const { geometries } = require('@jscad/modeling')

const main = () => {
  const objects = [${Xae(e)} ]
  return objects
}

${Yae(e)}

module.exports = { main }
`,r},Xae=t=>t.reduce((e,n,i)=>e+` json${i},`,""),Yae=t=>t.reduce((e,n,i)=>e+Zae(n,i),""),Zae=(t,e)=>`const json${e} = ${JSON.stringify(t)}
`,jae="json";XN.exports={deserialize:$ae,extension:jae}});var ZN=E((Ibe,Jae)=>{Jae.exports={name:"@jscad/obj-deserializer",version:"2.0.33",description:"OBJ Deserializer for JSCAD",homepage:"https://openjscad.xyz/",repository:"https://github.com/jscad/OpenJSCAD.org",main:"index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava --verbose --timeout 2m './tests/*.test.js'"},contributors:[{name:"Rene K. Mueller",url:"http://renekmueller.com"},{name:"z3dev",url:"http://www.z3d.jp"},{name:"Mark 'kaosat-dev' Moissette",url:"http://kaosat.net"}],keywords:["openjscad","jscad","import","deserializer","obj"],license:"MIT",dependencies:{"@jscad/io-utils":"2.0.33","@jscad/modeling":"2.13.0"},devDependencies:{ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var JN=E((Lbe,jN)=>{var{colors:Kae,primitives:Qae}=At(),{ensureString:ece}=Ss(),tce=ZN().version,nce=(t,e)=>{t=Object.assign({},{filename:"obj",output:"script",orientation:"outward",version:tce,addMetaData:!0},t);let{output:i}=t;e=ece(e),t&&t.statusCallback&&t.statusCallback({progress:0});let{positions:s,groups:r}=ice(e,t),o=i==="script"?uce(s,r,t):sce(s,r,t);return t&&t.statusCallback&&t.statusCallback({progress:100}),o},ice=(t,e)=>{let n=[],i=[],s=null;n.push({faces:[],colors:[],name:"default",line:0});let r=(u,f)=>{let h={faces:[],colors:[],name:""};f&&f.length>0&&(h.name=f.join(" ")),n.push(h)},o=(u,f)=>{let h=parseFloat(f[0]),d=parseFloat(f[1]),g=parseFloat(f[2]);i.push([h,d,g])},a=(u,f)=>{let h=f.map(g=>{let p=g.match(/[0-9+\-eE]+/g),x=parseInt(p[0]);return x<0?x=i.length+x:x--,x}),d=n.pop();d.faces.push(h),d.colors.push(s),n.push(d)},c=(u,f)=>{if(s=null,f&&f.length>0){let h=Kae.colorNameToRgb(f[0]);h&&(s=[h[0],h[1],h[2],1])}},l=t.split(/\n/);for(let u=0;u<l.length;u++){let f=l[u].trim();if(f&&f.length>0){let h=f.match(/\S+/g);if(h){let d=h[0];switch(h=h.slice(1),d){case"g":r(d,h);break;case"v":o(d,h);break;case"f":a(d,h);break;case"usemtl":c(d,h);break}}}}return n=n.filter(u=>u.faces.length>0),{positions:i,groups:n}},sce=(t,e,n)=>e.map(s=>Qae.polyhedron({orientation:n.orientation,points:t,faces:s.faces,colors:s.colors})),rce=t=>{let e=`  let points = [
`;return t.forEach(n=>e+=`    [${n}],
`),e+="  ]",e},oce=t=>{let e=`  let faces = [
`;return t.forEach(n=>e+=`    [${n}],
`),e+="  ]",e},ace=t=>{let e=`  let colors = [
`;return t.forEach(n=>{n?e+=`    [${n}],
`:e+=`    null,
`}),e+="  ]",e},cce=t=>{let e="";return t.forEach((n,i)=>e+=`    group${i}(points), // ${n.name}
`),e},lce=(t,e)=>{let n="";return t.forEach((i,s)=>{let r=i.faces,o=i.colors;n+=`
// group : ${i.name}
// faces: ${r.length}
`,n+=`const group${s} = (points) => {
${oce(r)}
${ace(o)}
  return primitives.polyhedron({ orientation: '${e.orientation}', points, faces, colors })
}
`}),n},uce=(t,e,n)=>{let{filename:i,addMetaData:s,version:r}=n,o=s?`//
// Produced by JSCAD IO Library : OBJ Deserializer (${r})
// date: ${new Date}
// source: ${i}
//
  `:"";return o+=`const {primitives} = require('@jscad/modeling')

// groups: ${e.length}
// points: ${t.length}
const main = () => {
  // points are common to all geometries
${rce(t)}

  let geometries = [
${cce(e)}  ]
  return geometries
}

${lce(e,n)}
module.exports = {main}
`,o},hce="obj";jN.exports={deserialize:nce,extension:hce}});var KN=E((Nbe,fce)=>{fce.exports={name:"@jscad/stl-deserializer",version:"2.1.30",description:"STL Deserializer for JSCAD",homepage:"https://openjscad.xyz/",repository:"https://github.com/jscad/OpenJSCAD.org",main:"index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava --verbose --timeout 2m './tests/*.test.js'"},contributors:[{name:"Rene K. Mueller",url:"http://renekmueller.com"},{name:"z3dev",url:"http://www.z3d.jp"},{name:"Mark 'kaosat-dev' Moissette",url:"http://kaosat.net"}],keywords:["openjscad","jscad","import","deserializer","stl"],license:"MIT",dependencies:{"@jscad/io-utils":"2.0.33","@jscad/modeling":"2.13.0"},devDependencies:{ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var eF=E((Fbe,QN)=>{var{maths:zn,primitives:dce}=At(),{BinaryReader:pce}=Ss(),mce=KN().version,gce=(t,e)=>{t=Object.assign({},{filename:"stl",version:mce,addMetaData:!0,output:"script"},t),t&&t.statusCallback&&t.statusCallback({progress:0});let{filename:i,version:s,output:r,addMetaData:o}=t;e=vce(e)?xce(e):e;let a=_ce(e);t&&t.statusCallback&&t.statusCallback({progress:33});let c=({vertices:g,triangles:p,normals:x,colors:m,index:b})=>wce(g,p,null,m,b),l=({vertices:g,triangles:p,normals:x,colors:m})=>Ace(g,p,null,m);t&&t.statusCallback&&t.statusCallback({progress:66});let d=(r==="script"?bce:Sce)((a?Ece:Mce)(e,i,s,r==="script"?c:l),o,s,i);return t&&t.statusCallback&&t.statusCallback({progress:100}),d},xce=t=>{let e="",n=new Uint8Array(t),i=n.byteLength;for(let s=0;s<i;s++)e+=String.fromCharCode(n[s]);return e},vce=t=>t.byteLength!==void 0&&typeof t.slice=="function",yce=t=>{if(typeof t!="string"){let e=new Uint8Array(t),n="";for(let i=0;i<t.byteLength;i++)n+=String.fromCharCode(e[i]);return n}return t},_ce=t=>{let e=/vertex[\s]+([-+]?[0-9]+\.?[0-9]*([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+[\s]+([-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)+/g,n=yce(t);return e.exec(n)===null},bce=(t,e,n,i)=>{let s="";return e&&(s=`
  //
  // producer: JSCAD STL Deserializer ${n}
  // date: ${new Date}
  // source: ${i}
  // objects: ${t.length}
  //
  `),s+=`const {primitives} = require('@jscad/modeling')
`,s+=t.join(`
`),s+=`
const main = () => {
 return [${t.map((r,o)=>`solid${o+1}()`)}]
}

module.exports = {main}
`,s},Sce=t=>t,Ece=(t,e,n,i)=>{let s=[],r=[],o=[],a=[],c=0,l=0,u=null,f=parseInt("01000000000000000",2),h=parseInt("00000000000011111",2),d=parseInt("00000001111100000",2),g=parseInt("00111110000000000",2),p=new pce(t),x=0,m=0,b=0,S=0,y=0,M=0;for(let w=0;w<80;w++)switch(x){case 6:b=p.readUInt8(),x+=1;continue;case 7:S=p.readUInt8(),x+=1;continue;case 8:y=p.readUInt8(),x+=1;continue;case 9:M=p.readUInt8(),x+=1;continue;default:switch(m=p.readChar(),m){case"C":case"O":case"L":case"R":case"=":x+=1;break;default:break}break}x===10&&(u=[b/255,S/255,y/255,M/255]);let A=p.readUInt32();for(let w=0;w<A;w++){let T=[];T.push(p.readFloat()),T.push(p.readFloat()),T.push(p.readFloat());let v=[];v.push(p.readFloat()),v.push(p.readFloat()),v.push(p.readFloat());let _=[];_.push(p.readFloat()),_.push(p.readFloat()),_.push(p.readFloat());let R=[];R.push(p.readFloat()),R.push(p.readFloat()),R.push(p.readFloat());let D=0;for(let F=0;F<3;F++)isNaN(v[F])&&D++,isNaN(_[F])&&D++,isNaN(R[F])&&D++,isNaN(T[F])&&D++;D>0&&console.log("bad triangle vertice coords/normal: ",D),l+=D;let L=[];L.push(c++),L.push(c++),L.push(c++);let N=p.readUInt16(),B=null;if(x===10){let F=N&f,W=(N&h)/31,V=((N&d)>>>5)/31,K=((N&g)>>>10)/31;F===0?B=[W,V,K,255]:B=u,a.push(B)}if(D===0){let F=zn.vec3.subtract(zn.vec3.create(),_,v),W=zn.vec3.subtract(zn.vec3.create(),R,v),V=zn.vec3.cross(zn.vec3.create(),F,W);if(zn.vec3.dot(T,V)>0){let ie=R;R=v,v=ie}}s.push(v),s.push(_),s.push(R),r.push(L),o.push(T)}return l&&console.warn(`WARNING: import errors: ${l} (some triangles might be misaligned or missing)`),[i({vertices:s,triangles:r,normals:o,colors:a,index:1})]},Mce=(t,e,n,i)=>{let s=0,r=t.split("endsolid"),o=[];for(let a=1;a<r.length;a++){let c=/\bfacet[\s\S]*?endloop/mgi,l=[],u=[],f=[],h=[],d=0,g=0,p=t.match(c);if(p!=null){for(let x=0;x<p.length;x++){let b=/\bfacet\s+normal\s+(\S+)\s+(\S+)\s+(\S+)\s+outer\s+loop\s+vertex\s+(\S+)\s+(\S+)\s+(\S+)\s+vertex\s+(\S+)\s+(\S+)\s+(\S+)\s+vertex\s+(\S+)\s+(\S+)\s+(\S+)\s*/mgi.exec(p[x]);if(b==null)continue;if(b.length!==13){console.log("Failed to parse "+p[x]);break}let S=0;for(let _=0;_<b.length;_++)b[_]==="NaN"&&(console.log("bad normal or triangle vertice #"+s+" "+_+": '"+b[_]+"', skipped"),S++);if(g+=S,S)continue;let y=1,M=[];M.push(parseFloat(b[y++])),M.push(parseFloat(b[y++])),M.push(parseFloat(b[y++]));let A=[];A.push(parseFloat(b[y++])),A.push(parseFloat(b[y++])),A.push(parseFloat(b[y++]));let w=[];w.push(parseFloat(b[y++])),w.push(parseFloat(b[y++])),w.push(parseFloat(b[y++]));let T=[];T.push(parseFloat(b[y++])),T.push(parseFloat(b[y++])),T.push(parseFloat(b[y++]));let v=[];if(v.push(d++),v.push(d++),v.push(d++),S===0){let _=zn.vec3.subtract(zn.vec3.create(),w,A),R=zn.vec3.subtract(zn.vec3.create(),T,A),D=zn.vec3.cross(zn.vec3.create(),_,R);if(zn.vec3.dot(M,D)>0){let N=T;T=A,A=N}}l.push(A),l.push(w),l.push(T),f.push(M),u.push(v),s++}g&&console.warn(`WARNING: import errors: ${g} (some triangles might be misaligned or missing)`),o.push(i({vertices:l,triangles:u,colors:h,index:a}))}}return o},Ace=(t,e,n,i)=>{i&&e.length!==i.length&&(i=void 0);let s={orientation:"inward",points:t,faces:e,colors:i};return dce.polyhedron(s)},wce=(t,e,n,i,s)=>{let r=`
//
// solid ${s} : ${t.length} points, ${e.length} faces, ${i.length} colors
//
const solid${s} = () => {
`;r+=`  const points = [
`;for(let o=0;o<t.length;o++)r+=`    [${t[o]}],
`;r+=`  ]
`,r+=`  const faces = [
`;for(let o=0;o<e.length;o++)r+=`    [${e[o]}],
`;if(r+=`  ]
`,i&&e.length===i.length){r+=`  const colors = [
`;for(let o=0;o<i.length;o++)r+=`    [${i[o]}],
`;r+=`  ]
`}else r+=`  const colors = null
`;return r+=`  return primitives.polyhedron({points, faces, colors, orientation: 'inside'})
}
`,r},Tce="stl";QN.exports={deserialize:gce,extension:Tce}});var tF=E((Obe,Cce)=>{Cce.exports={name:"@jscad/svg-deserializer",version:"2.5.14",description:"SVG Deserializer for JSCAD",homepage:"https://openjscad.xyz/",repository:"https://github.com/jscad/OpenJSCAD.org",main:"src/index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava --verbose --timeout 2m './tests/*.test.js'"},contributors:[{name:"Rene K. Mueller",url:"http://renekmueller.com"},{name:"z3dev",url:"http://www.z3d.jp"},{name:"Mark 'kaosat-dev' Moissette",url:"http://kaosat.net"}],keywords:["openjscad","jscad","import","deserializer","svg"],license:"MIT",dependencies:{"@jscad/array-utils":"2.1.4","@jscad/io-utils":"2.0.33","@jscad/modeling":"2.13.0",saxes:"5.0.1"},devDependencies:{ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var Jf=E((Ube,nF)=>{var Rce=3.5433073656147536,Dce=1/(1/.03937),Pce=1/(1/.03937/72),Ice=1/(1/.03937/72*12),Lce=.2822222,Nce={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};nF.exports={pxPmm:Rce,inchMM:Dce,ptMM:Pce,pcMM:Ice,cssPxUnit:Lce,svgColors:Nce}});var al=E((Bbe,sF)=>{var{inchMM:Fce,ptMM:Oce,pcMM:Uce,svgColors:iF}=Jf(),Bce=(t,e)=>[t[0]/e[0],0-t[1]/e[1]],kce=(t,e,n)=>{if(t.indexOf("%")<0)return Kf(t,e[0]);let i=parseFloat(t);return isNaN(i)?0:i===0?i:(i=i/100*n,i=i/e[0],Math.round(i*1e5)/1e5)},zce=(t,e,n)=>{if(t.indexOf("%")<0)return Kf(t,e[1]);let i=parseFloat(t);return isNaN(i)?0:i===0?i:(i=i/100*n,i=i/e[1],Math.round(i*1e5)/1e5)},qce=(t,e,n)=>{if(t.indexOf("%")<0)return Kf(t,e[1]);let i=parseFloat(t);return isNaN(i)?0:(i===0||(i=i/100*n,i=i/e[0]),i)},Kf=(t,e)=>{let n=parseFloat(t);return isNaN(n)?0:(n===0||t.search(/EM/i)>0||t.search(/EX/i)>0||t.search(/MM/i)>0||(t.search(/CM/i)>0?n=n*10:t.search(/IN/i)>0?n=n/Fce:t.search(/PT/i)>0?n=n/Oce:t.search(/PC/i)>0?n=n/Uce:n=n/e),n)},Vce=t=>{let e;if(t=t.toLowerCase(),t in iF)e=iF[t],e=[e[0]/255,e[1]/255,e[2]/255];else if(t[0]==="#")t.length===4&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),t.length===7&&(e=[parseInt("0x"+t.slice(1,3))/255,parseInt("0x"+t.slice(3,5))/255,parseInt("0x"+t.slice(5,7))/255]);else{let i=/rgb\(.+,.+,.+\)/.exec(t);i!==null&&(i=i[0],i=i.slice(i.indexOf("(")+1,i.indexOf(")")),e=i.split(","),i.indexOf("%")>0?(e=[parseInt(e[0]),parseInt(e[1]),parseInt(e[2])],e=[e[0]/100,e[1]/100,e[2]/100]):(e=[parseInt(e[0]),parseInt(e[1]),parseInt(e[2])],e=[e[0]/255,e[1]/255,e[2]/255]))}return e},Gce=(t,e)=>{if("style"in t){let n=t.style+";",i=e+"\\s*:\\s*(\\S+);",r=new RegExp(i,"i").exec(n);if(r!==null){r=r[0];let o=r.indexOf(":")+1;for(;r[o]===" ";)o++;return r=r.slice(o,r.indexOf(";")),r}}},Hce=(t,e,n,i)=>{let s=t-n,r=e-i;return t===n&&e===n?[t,e]:t===n?[t,i+-r]:e===i?[n+-s,e]:[n+-s,i+-r]},$ce=(t,e)=>{let n=t.length;for(;n>0;){let i=t[n-1];if(e in i)return i[e];n--}},Wce=(t,e)=>{let n=null;return t==="path"?e.stroke?n=[e.stroke[0],e.stroke[1],e.stroke[2],1]:e.fill&&(n=[e.fill[0],e.fill[1],e.fill[2],1]):e.fill?n=[e.fill[0],e.fill[1],e.fill[2],1]:e.stroke&&(n=[e.stroke[0],e.stroke[1],e.stroke[2],1]),n};sF.exports={svg2cag:Bce,cagLengthX:kce,cagLengthY:zce,cagLengthP:qce,css2cag:Kf,cagColor:Vce,cssStyle:Gce,reflect:Hce,groupValue:$ce,svgColorForTarget:Wce}});var cF=E((kbe,aF)=>{var{cagColor:cl,cssStyle:Qf,css2cag:rF}=al(),{pxPmm:M1}=Jf(),Ii=(t,e)=>{"id"in e&&(t.id=e.id),"position"in e&&(t.position=e.position)},Li=(t,e)=>{if("display"in e&&(t.visible=e.display),"color"in e&&(t.fill=cl(e.color),t.stroke=t.fill),"opacity"in e&&(t.opacity=e.opacity),"fill"in e)t.fill=cl(e.fill);else{let n=Qf(e,"fill");n&&(t.fill=cl(n))}if("fill-opacity"in e&&(t.opacity=e["fill-opacity"]),"stroke-width"in e)t.strokeWidth=e["stroke-width"];else{let n=Qf(e,"stroke-width");n&&(t.strokeWidth=n)}if("stroke"in e)t.stroke=cl(e.stroke);else{let n=Qf(e,"stroke");n&&(t.stroke=cl(n))}"stroke-opacity"in e&&(t.strokeOpacity=e["stroke-opacity"])},A1=/\w+\(.+\)/i,Rs=(t,e)=>{let n=null;if("transform"in e)n=e.transform;else{let i=Qf(e,"transform");i&&(n=i)}if(n!==null){t.transforms=[];let i=A1.exec(n);for(;i!==null;){let s=A1.lastIndex,r=n.indexOf(")")+1,o=n.slice(s,r);o=o.trim();let a=o.slice(0,o.indexOf("(")),c=o.slice(o.indexOf("(")+1,o.indexOf(")")).trim();c.indexOf(",")>0?c=c.split(","):c=c.split(" ");let l;switch(a){case"translate":c.length===1&&c.push(0),l={translate:[c[0],c[1]]},t.transforms.push(l);break;case"scale":c.length===1&&c.push(c[0]),l={scale:[c[0],c[1]]},t.transforms.push(l);break;case"rotate":l={rotate:c},t.transforms.push(l);break;default:break}n=n.slice(r,n.length),i=A1.exec(n)}}},Xce=/([\d.-]+)[\s,]+([\d.-]+)[\s,]+([\d.-]+)[\s,]+([\d.-]+)/i,Yce=(t,{customPxPmm:e})=>{let n={type:"svg",x:0,y:0,width:"100%",height:"100%",strokeWidth:"1"};if(n.unitsPmm=[M1,M1],"pxpmm"in t&&(n.pxPmm=t.pxpmm,n.unitsPmm=[n.pxPmm,n.pxPmm]),"width"in t&&(n.width=t.width),"height"in t&&(n.height=t.height),"viewBox"in t){let i=t.viewBox.trim(),s=Xce.exec(i);if(s!==null&&(n.viewX=parseFloat(s[1]),n.viewY=parseFloat(s[2]),n.viewW=parseFloat(s[3]),n.viewH=parseFloat(s[4])),n.width.indexOf("%")<0){let r=rF(n.width,e);r=n.viewW/r,n.unitsPmm[0]=r}else{let r=n.unitsPmm[0]*(parseFloat(n.width)/100);n.unitsPmm[0]=r}if(n.height.indexOf("%")<0){let r=rF(n.height,M1);r=n.viewH/r,n.unitsPmm[1]=r}else{let r=n.unitsPmm[1]*(parseFloat(n.height)/100);n.unitsPmm[1]=r}}else n.viewX=0,n.viewY=0,n.viewW=1920/n.unitsPmm[0],n.viewH=1080/n.unitsPmm[1];return n.viewP=Math.sqrt(n.viewW*n.viewW+n.viewH*n.viewH)/Math.SQRT2,Ii(n,t),Li(n,t),n.objects=[],n},Zce=t=>{let e={type:"ellipse",cx:"0",cy:"0",rx:"0",ry:"0"};return"cx"in t&&(e.cx=t.cx),"cy"in t&&(e.cy=t.cy),"rx"in t&&(e.rx=t.rx),"ry"in t&&(e.ry=t.ry),Rs(e,t),Ii(e,t),Li(e,t),e},jce=t=>{let e={type:"line",x1:"0",y1:"0",x2:"0",y2:"0"};return"x1"in t&&(e.x1=t.x1),"y1"in t&&(e.y1=t.y1),"x2"in t&&(e.x2=t.x2),"y2"in t&&(e.y2=t.y2),Rs(e,t),Ii(e,t),Li(e,t),e},oF=t=>{let e=[],n=/([\d\-+.]+)[\s,]+([\d\-+.]+)[\s,]*/i;t=t.trim();let i=n.exec(t);for(;i!==null;){let s=i[0],r=n.lastIndex+s.length;s={x:i[1],y:i[2]},e.push(s),t=t.slice(r,t.length),i=n.exec(t)}return e},Jce=t=>{let e={type:"polyline"};return Rs(e,t),Ii(e,t),Li(e,t),"points"in t&&(e.points=oF(t.points)),e},Kce=t=>{let e={type:"polygon"};return Rs(e,t),Ii(e,t),Li(e,t),"points"in t&&(e.points=oF(t.points)),e},Qce=t=>{let e={type:"rect",x:"0",y:"0",rx:"0",ry:"0",width:"0",height:"0"};return"x"in t&&(e.x=t.x),"y"in t&&(e.y=t.y),"rx"in t&&(e.rx=t.rx,"ry"in t||(e.ry=e.rx)),"ry"in t&&(e.ry=t.ry,"rx"in t||(e.rx=e.ry)),e.rx!==e.ry&&console.log("Warning: Unsupported RECT with rx and ry radius"),"width"in t&&(e.width=t.width),"height"in t&&(e.height=t.height),Rs(e,t),Ii(e,t),Li(e,t),e},ele=t=>{let e={type:"circle",x:"0",y:"0",radius:"0"};return"cx"in t&&(e.x=t.cx),"cy"in t&&(e.y=t.cy),"r"in t&&(e.radius=t.r),Rs(e,t),Ii(e,t),Li(e,t),e},tle=t=>{let e={type:"group"};if(Rs(e,t),Ii(e,t),Li(e,t),"x"in t||"y"in t){let n="0",i="0";"x"in t&&(n=t.x),"y"in t&&(i=t.y),"transforms"in e||(e.transforms=[]);let s={translate:[n,i]};e.transforms.push(s)}return e.objects=[],e},nle=t=>{let e={type:"path"};if(Rs(e,t),Ii(e,t),Li(e,t),e.commands=[],"d"in t){let n=null,i="",s=0,r=t.d.length,o=t.position[1]-r-2;for(;s<r;){let a=t.d[s];switch(a){case"-":i.length>0&&(n.p.push(i),i=""),i+=a;break;case".":i.length>0&&i.indexOf(".")>=0&&(n.p.push(i),i=""),i+=a;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":i+=a;break;case"a":case"A":case"c":case"C":case"h":case"H":case"l":case"L":case"v":case"V":case"m":case"M":case"q":case"Q":case"s":case"S":case"t":case"T":case"z":case"Z":n!==null&&(i.length>0&&(n.p.push(i),i=""),e.commands.push(n)),n={c:a,p:[],pos:s+o};break;case",":case" ":case`
`:n!==null&&i.length>0&&(n.p.push(i),i="");break;default:break}s++}s===r&&n!==null&&(i.length>0&&n.p.push(i),e.commands.push(n))}return e},ile=(t,{svgObjects:e})=>{let n={type:"group"};if(Rs(n,t),Ii(n,t),Li(n,t),"x"in t||"y"in t){let i="0",s="0";"x"in t&&(i=t.x),"y"in t&&(s=t.y),"transforms"in n||(n.transforms=[]);let r={translate:[i,s]};n.transforms.push(r)}if(n.objects=[],"xlink:href"in t){let i=t["xlink:href"];i[0]==="#"&&(i=i.slice(1,i.length)),e[i]!==void 0&&(i=e[i],i=JSON.parse(JSON.stringify(i)),n.objects.push(i))}return n};aF.exports={svgCore:Ii,svgPresentation:Li,svgSvg:Yce,svgRect:Qce,svgCircle:ele,svgEllipse:Zce,svgLine:jce,svgPolyline:Jce,svgPolygon:Kce,svgGroup:tle,svgPath:nle,svgUse:ile}});var uF=E((zbe,lF)=>{var{geometries:Ut,primitives:Ca}=At(),{svg2cag:st,cagLengthX:es,cagLengthY:Ds,cagLengthP:sle,reflect:lr}=al(),rle=(t,e,n)=>{let{svgUnitsPmm:i,svgUnitsX:s,svgUnitsY:r,svgUnitsV:o,svgGroups:a,target:c,segments:l,pathSelfClosed:u}=n;return{group:h=>e({target:c,segments:l},h),rect:(h,d,g,p,x,m,b)=>{let S=es(h.x,d,g),y=0-Ds(h.y,d,p),M=es(h.width,d,g),A=Ds(h.height,d,p),w=es(h.rx,d,g),T;return M>0&&A>0&&(S=S+M/2,y=y-A/2,w===0?T=Ca.rectangle({center:[S,y],size:[M,A]}):T=Ca.roundedRectangle({center:[S,y],segments:b,size:[M,A],roundRadius:w}),c==="path"&&(T=Ut.path2.fromPoints({closed:!0},Ut.geom2.toPoints(T)))),T},circle:(h,d,g,p,x,m,b)=>{let S=es(h.x,d,g),y=0-Ds(h.y,d,p),M=sle(h.radius,d,x),A;return M>0&&(A=Ca.circle({center:[S,y],segments:b,radius:M}),c==="path"&&(A=Ut.path2.fromPoints({closed:!0},Ut.geom2.toPoints(A)))),A},ellipse:(h,d,g,p,x,m,b)=>{let S=es(h.rx,d,g),y=Ds(h.ry,d,p),M=es(h.cx,d,g),A=0-Ds(h.cy,d,p),w;return S>0&&y>0&&(w=Ca.ellipse({center:[M,A],segments:b,radius:[S,y]}),c==="path"&&(w=Ut.path2.fromPoints({closed:!0},Ut.geom2.toPoints(w)))),w},line:(h,d,g,p,x)=>{let m=es(h.x1,d,g),b=0-Ds(h.y1,d,p),S=es(h.x2,d,g),y=0-Ds(h.y2,d,p);return Ca.line([[m,b],[S,y]])},polygon:(h,d,g,p)=>{let x=[];for(let m=0;m<h.points.length;m++){let b=h.points[m];if("x"in b&&"y"in b){let S=es(b.x,d,g),y=0-Ds(b.y,d,p);x.push([S,y])}}return c==="geom2"?Ut.geom2.fromPoints(x):Ut.path2.fromPoints({},x)},polyline:(h,d,g,p,x)=>{let m=[];for(let S=0;S<h.points.length;S++){let y=h.points[S];if("x"in y&&"y"in y){let M=es(y.x,d,g),A=0-Ds(y.y,d,p);m.push([M,A])}}return Ca.line(m)},path:(h,d,g,p,x,m,b)=>{let S=ole(h,d,g,p,x,m,b,u),y=Object.entries(S).sort((M,A)=>M[0].localeCompare(A[0]));if(c==="geom2"){let M=[];return y.forEach(A=>{let w=A[1];if(w.isClosed){let T=Ut.path2.toPoints(w);M.push(T)}}),M.length===0?[]:Ut.geom2.create(M)}else return y.map(M=>M[1])}}[t.type](t,i,s,r,o,a,l)};lF.exports=rle;var ts=(t,e)=>e?Ut.path2.appendPoints(t,e):Ut.path2.fromPoints({},t),ole=(t,e,n,i,s,r,o,a)=>{let c={},l="path",u=0,f=0,h=0,d=0,g=0,p=l+g,x=!1,m=0,b=0,S=0,y=0,M=()=>{g++,p=l+g,x=!1},A=()=>{c[p]||(c[p]=Ut.path2.fromPoints({},[]))};for(let w=0;w<t.commands.length;w++){let T=t.commands[w],v=T.p,_=0;switch(T.c){case"m":for(w===0&&(h=0,d=0),g>0,v.length>=_+2&&(h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]),M(),c[p]=ts([st([h,d],e)]),u=h,f=d);v.length>=_+2;)h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"M":for(g>0,v.length>=_+2&&(h=parseFloat(v[_++]),d=parseFloat(v[_++]),M(),c[p]=ts([st([h,d],e)]),u=h,f=d);v.length>=_+2;)h=parseFloat(v[_++]),d=parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"a":for(;v.length>=_+7;){let D=parseFloat(v[_++]),L=parseFloat(v[_++]),N=0-parseFloat(v[_++])*.017453292519943295,B=v[_++]==="1",F=v[_++]==="1";h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]),A(),c[p]=Ut.path2.appendArc({segments:o,endpoint:st([h,d],e),radius:st([D,L],e),xaxisrotation:N,clockwise:F,large:B},c[p])}break;case"A":for(;v.length>=_+7;){let D=parseFloat(v[_++]),L=parseFloat(v[_++]),N=0-parseFloat(v[_++])*.017453292519943295,B=v[_++]==="1",F=v[_++]==="1";h=parseFloat(v[_++]),d=parseFloat(v[_++]),A(),c[p]=Ut.path2.appendArc({segments:o,endpoint:st([h,d],e),radius:st([D,L],e),xaxisrotation:N,clockwise:F,large:B},c[p])}break;case"c":for(;v.length>=_+6;){let D=h+parseFloat(v[_++]),L=d+parseFloat(v[_++]);m=h+parseFloat(v[_++]),b=d+parseFloat(v[_++]),h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]),A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st([D,L],e),st([m,b],e),st([h,d],e)]},c[p]);let N=lr(m,b,h,d);m=N[0],b=N[1]}break;case"C":for(;v.length>=_+6;){let D=parseFloat(v[_++]),L=parseFloat(v[_++]);m=parseFloat(v[_++]),b=parseFloat(v[_++]),h=parseFloat(v[_++]),d=parseFloat(v[_++]),A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st([D,L],e),st([m,b],e),st([h,d],e)]},c[p]);let N=lr(m,b,h,d);m=N[0],b=N[1]}break;case"q":for(;v.length>=_+4;){let D=[h,d];S=h+parseFloat(v[_++]),y=d+parseFloat(v[_++]),h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]);let L=[D[0]+2/3*(S-D[0]),D[1]+2/3*(y-D[1])],N=[L[0]+1/3*(h-D[0]),L[1]+1/3*(d-D[1])];A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st(L,e),st(N,e),st([h,d],e)]},c[p]);let B=lr(S,y,h,d);S=B[0],y=B[1]}break;case"Q":for(;v.length>=_+4;){let D=[h,d];S=parseFloat(v[_++]),y=parseFloat(v[_++]),h=parseFloat(v[_++]),d=parseFloat(v[_++]);let L=[D[0]+2/3*(S-D[0]),D[1]+2/3*(y-D[1])],N=[L[0]+1/3*(h-D[0]),L[1]+1/3*(d-D[1])];A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st(L,e),st(N,e),st([h,d],e)]},c[p]);let B=lr(S,y,h,d);S=B[0],y=B[1]}break;case"t":for(;v.length>=_+2;){let D=[h,d];h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]);let L=[D[0]+2/3*(S-D[0]),D[1]+2/3*(y-D[1])],N=[L[0]+1/3*(h-D[0]),L[1]+1/3*(d-D[1])];A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st(L,e),st(N,e),st([h,d],e)]},c[p]);let B=lr(S,y,h,d);S=B[0],y=B[1]}break;case"T":for(;v.length>=_+2;){let D=[h,d];h=parseFloat(v[_++]),d=parseFloat(v[_++]);let L=[D[0]+2/3*(S-D[0]),D[1]+2/3*(y-D[1])],N=[L[0]+1/3*(h-D[0]),L[1]+1/3*(d-D[1])];A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st(L,e),st(N,e),st([h,d],e)]},c[p]);let B=lr(S,y,h,d);S=B[0],y=B[1]}break;case"s":for(;v.length>=_+4;){let D=m,L=b;m=h+parseFloat(v[_++]),b=d+parseFloat(v[_++]),h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]),A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st([D,L],e),st([m,b],e),st([h,d],e)]},c[p]);let N=lr(m,b,h,d);m=N[0],b=N[1]}break;case"S":for(;v.length>=_+4;){let D=m,L=b;m=parseFloat(v[_++]),b=parseFloat(v[_++]),h=parseFloat(v[_++]),d=parseFloat(v[_++]),A(),c[p]=Ut.path2.appendBezier({segments:o,controlPoints:[st([D,L],e),st([m,b],e),st([h,d],e)]},c[p]);let N=lr(m,b,h,d);m=N[0],b=N[1]}break;case"h":for(;v.length>=_+1;)h=h+parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"H":for(;v.length>=_+1;)h=parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"l":for(;v.length>=_+2;)h=h+parseFloat(v[_++]),d=d+parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"L":for(;v.length>=_+2;)h=parseFloat(v[_++]),d=parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"v":for(;v.length>=_+1;)d=d+parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"V":for(;v.length>=_+1;)d=parseFloat(v[_++]),c[p]=ts([st([h,d],e)],c[p]);break;case"z":case"Z":c[p]=Ut.path2.close(c[p]),h=u,d=f,x=!0;break;default:console.log("Warning: Unknown PATH command ["+T.c+"]");break}let R=D=>D==="z"||D==="Z";if(x!==!0&&c[p]&&c[p].isClosed){let D=t.commands[w+1];if(D&&!R(D.c))if(a==="trim")for(;D&&!R(D.c);)w++,D=t.commands[w+1];else if(a==="split")M();else throw new Error(`Malformed svg path at ${t.position[0]}:${T.pos}. Path closed itself with command #${w} ${T.c}${v.join(" ")}`)}}return c}});var fF=E((qbe,hF)=>{var{svg2cag:rt,cagLengthX:ns,cagLengthY:Ps,cagLengthP:ale,reflect:ur}=al(),cle=(t,e,n)=>{let{level:i,indent:s,on:r,svgUnitsPmm:o,svgUnitsX:a,svgUnitsY:c,svgUnitsV:l,svgGroups:u,target:f,segments:h}=n;return{group:g=>{let p=e({target:f,segments:h},g);return p+=`${s}${r} = levels.l${i+1}
`,p},rect:(g,p,x,m,b,S,y,M)=>{let A=ns(g.x,p,x),w=0-Ps(g.y,p,m),T=ns(g.width,p,x),v=Ps(g.height,p,m),_=ns(g.rx,p,x),R;return T>0&&v>0&&(A=(A+T/2).toFixed(4),w=(w-v/2).toFixed(4),_===0?R=`${s}${r} = primitives.rectangle({center: [${A}, ${w}], size: [${T}, ${v}]}) // line ${g.position}
`:R=`${s}${r} = primitives.roundedRectangle({center: [${A}, ${w}], segments: ${M}, size: [${T}, ${v}], roundRadius: ${_}}) // line ${g.position}
`,f==="path"&&(R+=`${s}${r} = geometries.path2.fromPoints({closed: true}, geometries.geom2.toPoints(${r}))
`)),R},circle:(g,p,x,m,b,S,y,M)=>{let A=ns(g.x,p,x),w=0-Ps(g.y,p,m),T=ale(g.radius,p,b),v;return T>0&&(v=`${s}${r} = primitives.circle({center: [${A}, ${w}], segments: ${M}, radius: ${T}}) // line ${g.position}
`,f==="path"&&(v+=`${s}${r} = geometries.path2.fromPoints({closed: true}, geometries.geom2.toPoints(${r}))
`)),v},ellipse:(g,p,x,m,b,S,y,M)=>{let A=ns(g.rx,p,x),w=Ps(g.ry,p,m),T=ns(g.cx,p,x),v=0-Ps(g.cy,p,m),_;return A>0&&w>0&&(_=`${s}${r} = primitives.ellipse({center: [${T}, ${v}], segments: ${M}, radius: [${A}, ${w}]}) // line ${g.position}
`,f==="path"&&(_+=`${s}${r} = geometries.path2.fromPoints({closed: true}, geometries.geom2.toPoints(${r}))
`)),_},line:(g,p,x,m,b)=>{let S=ns(g.x1,p,x),y=0-Ps(g.y1,p,m),M=ns(g.x2,p,x),A=0-Ps(g.y2,p,m);return`${s}${r} = primitives.line([[${S}, ${y}], [${M}, ${A}]]) // line ${g.position}
`},polygon:(g,p,x,m)=>{let b=`${s}${r} = primitives.polygon({points: [
`;for(let S=0;S<g.points.length;S++){let y=g.points[S];if("x"in y&&"y"in y){let M=ns(y.x,p,x),A=0-Ps(y.y,p,m);b+=`${s}  [${M}, ${A}],
`}}return b+=`${s}]}) // line ${g.position}
`,f==="path"&&(b+=`${s}${r} = geometries.path2.fromPoints({closed: true}, geometries.geom2.toPoints(${r}))
`),b},polyline:(g,p,x,m,b)=>{let S=`${s}${r} = geometries.path2.fromPoints({}, [
`;for(let y=0;y<g.points.length;y++){let M=g.points[y];if("x"in M&&"y"in M){let A=ns(M.x,p,x),w=0-Ps(M.y,p,m);S+=`${s}  [${A}, ${w}],
`}}return S+=`${s}]) // line ${g.position}
`,S},path:lle}[t.type](t,o,a,c,l,n,u,h)};hF.exports=cle;var lle=(t,e,n,i,s,r,o,a)=>{let{indent:c,on:l,target:u}=r,f=`${c}parts = [] // line ${t.position}
`,h=0,d=0,g=0,p=0,x=0,m=l+x,b=!1,S=0,y=0,M=0,A=0;for(let w=0;w<t.commands.length;w++){let T=t.commands[w],v=T.p;switch(T.c){case"m":for(w===0&&(g=0,p=0),x>0&&b===!1&&(f+=`${c}parts.push(${m})
`),v.length>=2&&(g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift()),x++,b=!1,m=l+x,f+=`${c}${m} = geometries.path2.fromPoints({}, [[${rt([g,p],e)}]])
`,h=g,d=p);v.length>=2;)g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([${rt([g,p],e)}], ${m})
`;break;case"M":for(x>0&&b===!1&&(f+=`${c}parts.push(${m})
`),v.length>=2&&(g=parseFloat(v.shift()),p=parseFloat(v.shift()),x++,b=!1,m=l+x,f+=`${c}${m} = geometries.path2.fromPoints({}, [[${rt([g,p],e)}]])
`,h=g,d=p);v.length>=2;)g=parseFloat(v.shift()),p=parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([${rt([g,p],e)}], ${m})
`;break;case"a":for(;v.length>=7;){let _=parseFloat(v.shift()),R=parseFloat(v.shift()),D=0-parseFloat(v.shift())*.017453292519943295,L=v.shift()==="1",N=v.shift()==="1";g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendArc({segments: ${a}, endpoint: [${rt([g,p],e)}], radius: [${rt([_,R],e)}], xaxisrotation: ${D}, clockwise: ${N}, large: ${L}}, ${m})
`}break;case"A":for(;v.length>=7;){let _=parseFloat(v.shift()),R=parseFloat(v.shift()),D=0-parseFloat(v.shift())*.017453292519943295,L=v.shift()==="1",N=v.shift()==="1";g=parseFloat(v.shift()),p=parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendArc({segments: ${a}, endpoint: [${rt([g,p],e)}], radius: [${rt([_,R],e)}], xaxisrotation: ${D}, clockwise: ${N}, large: ${L}}, ${m})
`}break;case"c":for(;v.length>=6;){let _=g+parseFloat(v.shift()),R=p+parseFloat(v.shift());S=g+parseFloat(v.shift()),y=p+parseFloat(v.shift()),g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[${rt([_,R],e)}], [${rt([S,y],e)}], [${rt([g,p],e)}]]}, ${m})
`;let D=ur(S,y,g,p);S=D[0],y=D[1]}break;case"C":for(;v.length>=6;){let _=parseFloat(v.shift()),R=parseFloat(v.shift());S=parseFloat(v.shift()),y=parseFloat(v.shift()),g=parseFloat(v.shift()),p=parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[${rt([_,R],e)}], [${rt([S,y],e)}], [${rt([g,p],e)}]]}, ${m})
`;let D=ur(S,y,g,p);S=D[0],y=D[1]}break;case"q":for(;v.length>=4;){let _=[g,p];M=g+parseFloat(v.shift()),A=p+parseFloat(v.shift()),g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift());let R=[_[0]+2/3*(M-_[0]),_[1]+2/3*(A-_[1])],D=[R[0]+1/3*(g-_[0]),R[1]+1/3*(p-_[1])];f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[${rt(R,e)}], [${rt(D,e)}], [${rt([g,p],e)}]]}, ${m})
`;let L=ur(M,A,g,p);M=L[0],A=L[1]}break;case"Q":for(;v.length>=4;){let _=[g,p];M=parseFloat(v.shift()),A=parseFloat(v.shift()),g=parseFloat(v.shift()),p=parseFloat(v.shift());let R=[_[0]+2/3*(M-_[0]),_[1]+2/3*(A-_[1])],D=[R[0]+1/3*(g-_[0]),R[1]+1/3*(p-_[1])];f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[${rt(R,e)}], [${rt(D,e)}], [${rt([g,p],e)}]]}, ${m})
`;let L=ur(M,A,g,p);M=L[0],A=L[1]}break;case"t":for(;v.length>=2;){let _=[g,p];g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift());let R=[_[0]+2/3*(M-_[0]),_[1]+2/3*(A-_[1])],D=[R[0]+1/3*(g-_[0]),R[1]+1/3*(p-_[1])];f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[[${rt(R,e)}], [${rt(D,e)}], [${rt([g,p],e)}]]}, ${m})
`;let L=ur(M,A,g,p);M=L[0],A=L[1]}break;case"T":for(;v.length>=2;){let _=[g,p];g=parseFloat(v.shift()),p=parseFloat(v.shift());let R=[_[0]+2/3*(M-_[0]),_[1]+2/3*(A-_[1])],D=[R[0]+1/3*(g-_[0]),R[1]+1/3*(p-_[1])];f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[[${rt(R,e)}], [${rt(D,e)}], [${rt([g,p],e)}]]}, ${m})
`;let L=ur(M,A,g,p);M=L[0],A=L[1]}break;case"s":for(;v.length>=4;){let _=S,R=y;S=g+parseFloat(v.shift()),y=p+parseFloat(v.shift()),g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[${rt([_,R],e)}], [${rt([S,y],e)}], [${rt([g,p],e)}]]}, ${m})
`;let D=ur(S,y,g,p);S=D[0],y=D[1]}break;case"S":for(;v.length>=4;){let _=S,R=y;S=parseFloat(v.shift()),y=parseFloat(v.shift()),g=parseFloat(v.shift()),p=parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendBezier({segments: ${a}, controlPoints: [[${rt([_,R],e)}], [${rt([S,y],e)}], [${rt([g,p],e)}]]}, ${m})
`;let D=ur(S,y,g,p);S=D[0],y=D[1]}break;case"h":for(;v.length>=1;)g=g+parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([[${rt([g,p],e)}]], ${m})
`;break;case"H":for(;v.length>=1;)g=parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([[${rt([g,p],e)}]], ${m})
`;break;case"l":for(;v.length>=2;)g=g+parseFloat(v.shift()),p=p+parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([[${rt([g,p],e)}]], ${m})
`;break;case"L":for(;v.length>=2;)g=parseFloat(v.shift()),p=parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([[${rt([g,p],e)}]], ${m})
`;break;case"v":for(;v.length>=1;)p=p+parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([[${rt([g,p],e)}]], ${m})
`;break;case"V":for(;v.length>=1;)p=parseFloat(v.shift()),f+=`${c}${m} = geometries.path2.appendPoints([[${rt([g,p],e)}]], ${m})
`;break;case"z":case"Z":f+=`${c}${m} = geometries.path2.close(${m})
`,u==="geom2"&&(f+=`${c}${m} = geometries.geom2.fromPoints(geometries.path2.toPoints(${m}))
`),f+=`${c}parts.push(${m})
`,g=h,p=d,b=!0;break;default:console.log("Warning: Unknow PATH command ["+T.c+"]");break}}return x>0&&b===!1&&(f+=`${c}parts.push(${m})
`),f+=`${c}${l} = parts
`,f}});var bF=E((Vbe,_F)=>{var ule=Wf(),{colors:hle,transforms:ll}=At(),{toArray:fle}=Ti(),{ensureString:dle}=Ss(),ple=tF().version,{cagLengthX:pF,cagLengthY:mF,svgColorForTarget:gF}=al(),{svgSvg:mle,svgRect:gle,svgCircle:xle,svgGroup:vle,svgLine:yle,svgPath:_le,svgEllipse:ble,svgPolygon:Sle,svgPolyline:Ele,svgUse:Mle}=cF(),Ale=uF(),wle=fF(),Tle=(t,e)=>{let n={addMetaData:!0,filename:"svg",output:"script",pxPmm:Jf().pxPmm,segments:32,target:"path",pathSelfClosed:"error",version:ple};return t=Object.assign({},n,t),e=dle(e),t.output==="script"?Rle(e,t):Cle(e,t)},Cle=(t,e)=>{let{pxPmm:n}=e;if(e&&e.statusCallback&&e.statusCallback({progress:0}),yF(t,n),!dl)throw new Error("SVG parsing failed, no valid SVG data retrieved");e&&e.statusCallback&&e.statusCallback({progress:50});let i=xF(e,dl);return e&&e.statusCallback&&e.statusCallback({progress:100}),i},Rle=(t,e)=>{let{filename:n,version:i,pxPmm:s,addMetaData:r}=e;if(e&&e.statusCallback&&e.statusCallback({progress:0}),yF(t,s),!dl)throw new Error("SVG parsing failed, no valid SVG data retrieved");let o=r?`//
  // producer: JSCAD SVG Deserializer ${i}
  // date: ${new Date}
  // source: ${n}
  //
`:"";o+=`const { colors, geometries, primitives, transforms } = require('@jscad/modeling')

`,e&&e.statusCallback&&e.statusCallback({progress:50});let a=vF(e,dl);return o+=a,o+=`
module.exports = { main }`,e&&e.statusCallback&&e.statusCallback({progress:100}),o},hl,fl,w1,dF=[],Rn=[],ul=[],ed=!1,dl,Kr=[1,1],xF=(t,e)=>{let{target:n,segments:i,pathSelfClosed:s}=t,r=Rn.length;Rn.push(e);let o=r;for(;o>0;)o--;let a=[],c={svgUnitsPmm:Kr,svgUnitsX:hl,svgUnitsY:fl,svgUnitsV:w1,level:r,target:n,svgGroups:Rn,segments:i,pathSelfClosed:s};for(o=0;o<e.objects.length;o++){let l=e.objects[o],u=fle(Ale(l,xF,c));u=u.map(f=>{if("transforms"in l){let d=null,g=null,p=null;for(let x=0;x<l.transforms.length;x++){let m=l.transforms[x];"rotate"in m&&(d=m),"scale"in m&&(g=m),"translate"in m&&(p=m)}if(g!==null){let x=Math.abs(g.scale[0]),m=Math.abs(g.scale[1]);f=ll.scale([x,m,1],f),x=g.scale[0],m=g.scale[1],x<0&&(f=ll.mirrorX(f)),m<0&&(f=ll.mirrorY(f))}if(d!==null){let x=0-d.rotate*.017453292519943295;f=ll.rotateZ(x,f)}if(p!==null){let x=pF(p.translate[0],Kr,hl),m=0-mF(p.translate[1],Kr,fl);f=ll.translate([x,m,0],f)}}let h=gF(n,l);return h&&(f=hle.colorize(h,f)),f}),a=a.concat(u)}return Rn.pop(),a},vF=(t,e)=>{let{target:n,segments:i}=t,s=Rn.length;Rn.push(e);let r="  ",o=s;for(;o>0;)r+="  ",o--;let a="";s===0&&(a+=`function main(params) {
  let levels = {}
  let paths = {}
  let parts
`);let c="levels.l"+s;for(a+=`${r}${c} = []
`,o=0;o<e.objects.length;o++){let l=e.objects[o],u="paths.p"+o,h=wle(l,vF,{level:s,indent:r,ln:c,on:u,svgUnitsPmm:Kr,svgUnitsX:hl,svgUnitsY:fl,svgUnitsV:w1,svgGroups:Rn,target:n,segments:i});if(a+=h,"transforms"in l){let g=null,p=null,x=null;for(let m=0;m<l.transforms.length;m++){let b=l.transforms[m];"rotate"in b&&(g=b),"scale"in b&&(p=b),"translate"in b&&(x=b)}if(p!==null){let m=Math.abs(p.scale[0]),b=Math.abs(p.scale[1]);a+=`${r}${u} = transforms.scale([${m}, ${b}, 1], ${u})
`,m=p.scale[0],b=p.scale[1],m<0&&(a+=`${r}${u} = transforms.mirrorX(${u})
`),b<0&&(a+=`${r}${u} = transforms.mirrorY(${u})
`)}if(g!==null){let m=0-g.rotate*.017453292519943295;a+=`${r}${u} = transforms.rotateZ(${m}, ${u})
`}if(x!==null){let m=pF(x.translate[0],Kr,hl),b=0-mF(x.translate[1],Kr,fl);a+=`${r}${u} = transforms.translate([${m}, ${b}, 0], ${u})
`}}let d=gF(n,l);d&&(a+=`${r}${u} = colors.colorize([${d}], ${u})
`),a+=`${r}${c} = ${c}.concat(${u})

`}return s===0&&(a+=r+"return "+c+`
`,a+=`}
`),Rn.pop(),a},yF=(t,e)=>{let n=new ule.SaxesParser;return e!==void 0&&e>n.pxPmm&&(n.pxPmm=e),n.on("error",i=>{console.log(`ERROR: SVG file, line ${n.line}, column ${n.column}`),console.log(i)}),n.on("opentag",i=>{let s={SVG:mle,G:vle,RECT:gle,CIRCLE:xle,ELLIPSE:ble,LINE:yle,POLYLINE:Ele,POLYGON:Sle,PATH:_le,USE:Mle,DEFS:()=>{ed=!0},DESC:()=>{},TITLE:()=>{},STYLE:()=>{},undefined:()=>console.log("WARNING: unsupported SVG element: "+i.name)};i.attributes.position=[n.line+1,n.column+1];let r=i.name.toUpperCase(),o=s[r]?s[r](i.attributes,{svgObjects:dF,customPxPmm:e}):void 0;if(o)if("id"in o&&(dF[o.id]=o),o.type==="svg")Rn.push(o),Kr=o.unitsPmm,hl=o.viewW,fl=o.viewH,w1=o.viewP;else if(ed===!0){if(ul.length>0){let a=ul.pop();"objects"in a&&a.objects.push(o),ul.push(a)}o.type==="group"&&ul.push(o)}else{if(Rn.length>0){let a=Rn.pop();"objects"in a&&a.objects.push(o),Rn.push(a)}o.type==="group"&&Rn.push(o)}}),n.on("closetag",i=>{let s=()=>ed===!0?ul.pop():Rn.pop(),r={SVG:s,DEFS:()=>{ed=!1},USE:s,G:s,undefined:()=>{}},o=i.name.toUpperCase(),a=r[o]?r[o]():void 0;Rn.length===0&&(dl=a)}),n.on("end",()=>{}),n.write(t).close(),n},Dle="svg";_F.exports={deserialize:Tle,extension:Dle}});var SF=E((Gbe,Ple)=>{Ple.exports={name:"@jscad/x3d-deserializer",version:"2.2.13",description:"X3D Deserializer for JSCAD",repository:"https://github.com/jscad/OpenJSCAD.org/",main:"src/index.js",scripts:{coverage:"nyc --all --reporter=html --reporter=text npm test",test:"ava --verbose --timeout 2m 'tests/**/*.test.js'"},contributors:[{name:"z3dev",url:"https://github.com/z3dev"}],keywords:["openjscad","jscad","import","deserializer","x3d"],license:"MIT",publishConfig:{access:"public"},dependencies:{"@jscad/array-utils":"2.1.4","@jscad/io-utils":"2.0.33","@jscad/modeling":"2.13.0",saxes:"5.0.1"},devDependencies:{ava:"3.15.0",nyc:"15.1.0"},gitHead:"602bb2a3a2c2c7c21315e2801804dd1ec0cbd3f8"}});var T1=E((Hbe,EF)=>{var{maths:Kt}=At(),Ile=(t,e,n,i,s)=>{let r=Kt.mat4.create(),o=Kt.mat4.create();return Kt.mat4.multiply(r,r,Kt.mat4.fromTranslation(o,s)),Kt.mat4.multiply(r,r,Kt.mat4.fromTranslation(o,t)),Kt.mat4.multiply(r,r,Kt.mat4.fromRotation(o,e[3],e)),Kt.mat4.multiply(r,r,Kt.mat4.fromRotation(o,i[3],i)),Kt.mat4.multiply(r,r,Kt.mat4.fromScaling(o,n)),Kt.mat4.multiply(r,r,Kt.mat4.fromRotation(o,i[3],Kt.vec3.negate(Kt.vec3.create(),i))),Kt.mat4.multiply(r,r,Kt.mat4.fromTranslation(o,Kt.vec3.negate(Kt.vec3.create(),t))),r};EF.exports=Ile});var Ni=E(($be,MF)=>{var{maths:Lle}=At(),lt={X3D:0,UNIT:1,META:2,SCENE:3,TRANSFORM:4,SHAPE:5,GROUP:6,APPEARANCE:7,TRIANGLESET:10,TRIANGLEFANSET:11,TRIANGLESTRIPSET:12,QUADSET:13,INDEXEDTRIANGLESET:14,INDEXEDTRIANGLEFANSET:15,INDEXEDTRIANGLESTRIPSET:16,INDEXEDQUADSET:17,ELEVATIONGRID:18,INDEXEDFACESET:19,LINESET:20,INDEXEDLINESET:21,BOX:50,CONE:51,CYLINDER:52,SPHERE:53,EXTRUSION:54,ARC2D:61,ARCCLOSE2D:62,CIRCLE2D:63,DISK2D:64,POLYLINE2D:65,RECTANGLE2D:66,TRIANGLESET2D:67,COLOR:91,COORDINATE:92,MATERIAL:93},Nle=t=>{let e={definition:lt.X3D};return e.objects=[],e},Fle=t=>{let e={definition:lt.UNIT,category:"",name:"",conversionFactor:1};return t.category&&(e.category=t.category),t.name&&(e.name=t.name),t.conversionfactor&&(e.conversionFactor=t.conversionfactor),e},Ole=t=>{let e={definition:lt.META,content:"",name:""};return t.content&&(e.content=t.content),t.name&&(e.name=t.name),e},Ule=t=>{let e={definition:lt.SCENE};return e.objects=[],e},Ble=t=>{let e={definition:lt.TRANSFORM,center:[0,0,0],rotation:[0,0,1,0],scale:[1,1,1],scaleOrientation:[0,0,1,0],translation:[0,0,0]};if(t.center){let n=Rt(t.center);n.length>2&&(e.center=n)}if(t.rotation){let n=Rt(t.rotation);n.length>3&&(e.rotation=n)}if(t.scale){let n=Rt(t.scale);n.length>2&&(e.scale=n)}if(t.scaleorientation){let n=Rt(t.scaleorientation);n.length>3&&(e.scaleOrientation=n)}if(t.translation){let n=Rt(t.translation);n.length>2&&(e.translation=n)}return e.objects=[],e},kle=t=>{let e={definition:lt.SHAPE};return e.objects=[],e},zle=t=>{let e={definition:lt.BOX,size:[2,2,2]};if(t.size){let n=Rt(t.size);n.length>2&&(e.size=n)}return e},qle=t=>{let n={definition:lt.CONE,bottomRadius:1,height:2,subdivision:32,topRadius:1e-5};return t.bottomRadius&&(n.bottomRadius=Math.max(parseFloat(t.bottomRadius),1e-5)),t.height&&(n.height=parseFloat(t.height)),t.subdivision&&(n.subdivision=parseFloat(t.subdivision)),t.topRadius&&(n.topRadius=Math.max(parseFloat(t.topRadius),1e-5)),n},Vle=t=>{let e={definition:lt.CYLINDER,height:2,radius:1,subdivision:32};return t.height&&(e.height=parseFloat(t.height)),t.radius&&(e.radius=parseFloat(t.radius)),t.subdivision&&(e.subdivision=parseFloat(t.subdivision)),e},Gle=t=>{let e={definition:lt.SPHERE,radius:1,subdivision:24};if(t.radius&&(e.radius=parseFloat(t.radius)),t.subdivision){let n=Rt(t.subdivision);n.length>1&&(e.subdivision=Math.max(...n))}return e},Hle=t=>{let e={definition:lt.EXTRUSION,ccw:!0,beginCap:!0,endCap:!0,crossSection:[[1,1],[1,-1],[-1,-1],[-1,1],[1,1]],orientations:[[0,0,1,0]],scales:[[1,1]],spine:[[0,0,0],[0,1,0]]};if(t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.beginCap&&(e.beginCap=t.beginCap.includes("TRUE")||t.beginCap.includes("true")),t.endCap&&(e.endCap=t.endCap.includes("TRUE")||t.endCap.includes("true")),t.crossSection){let n=Rt(t.crossSection),i=Math.trunc(n.length/2),s=[];for(let r=0;r<i;r++){let o=r*2;s.push([n[o],n[o+1]])}e.ccw=Lle.utils.area(s)<0,e.crossSection=s}if(t.orientation){let n=Rt(t.orientation),i=Math.trunc(n.length/4),s=[];for(let r=0;r<i;r++){let o=r*4;s.push([n[o],n[o+1],n[o+2],n[o+3]])}e.orientations=s}if(t.scale){let n=Rt(t.scale),i=Math.trunc(n.length/2),s=[];for(let r=0;r<i;r++){let o=r*2;n[o]===0&&(n[o]=1e-6),n[o+1]===0&&(n[o+1]=1e-6),s.push([n[o],n[o+1]])}e.scales=s}if(t.spine){let n=Rt(t.spine),i=Math.trunc(n.length/3),s=[];for(let r=0;r<i;r++){let o=r*3;s.push([n[o],n[o+1],n[o+2]])}e.spine=s}return e},$le=t=>{let e={definition:lt.ARC2D,endAngle:Math.PI/2,radius:1,startAngle:0,subdivision:32};return t.endAngle&&(e.endAngle=parseFloat(t.endAngle)),t.radius&&(e.radius=parseFloat(t.radius)),t.startAngle&&(e.startAngle=parseFloat(t.startAngle)),t.subdivision&&(e.subdivision=parseFloat(t.subdivision)),e},Wle=t=>{let e={definition:lt.ARCCLOSE2D,closureType:"PIE",endAngle:Math.PI/2,radius:1,startAngle:0,subdivision:32};return t.closureType&&(e.closureType=t.closureType),t.endAngle&&(e.endAngle=parseFloat(t.endAngle)),t.radius&&(e.radius=parseFloat(t.radius)),t.startAngle&&(e.startAngle=parseFloat(t.startAngle)),t.subdivision&&(e.subdivision=parseFloat(t.subdivision)),e},Xle=t=>{let e={definition:lt.CIRCLE2D,radius:1,subdivision:32};return t.radius&&(e.radius=parseFloat(t.radius)),t.subdivision&&(e.subdivision=parseFloat(t.subdivision)),e},Yle=t=>{let e={definition:lt.DISK2D,innerRadius:0,outerRadius:1,subdivision:32};return t.innerRadius&&(e.innerRadius=parseFloat(t.innerRadius)),t.outerRadius&&(e.outerRadius=parseFloat(t.outerRadius)),t.subdivision&&(e.subdivision=parseFloat(t.subdivision)),e},Zle=t=>{let e={definition:lt.POLYLINE2D,lineSegments:[]};if(t.lineSegments){let n=Rt(t.lineSegments);for(let i=0;i<n.length;i=i+2){let s=[n[i],n[i+1]];e.lineSegments.push(s)}}return e},jle=t=>{let e={definition:lt.RECTANGLE2D,size:[2,2]};if(t.size){let n=Rt(t.size);n.length>1&&(e.size=n)}return e},Jle=t=>{let e={definition:lt.TRIANGLESET2D,vertices:[]};if(t.vertices){let n=Rt(t.vertices);for(let i=0;i<n.length;i=i+2){let s=[n[i],n[i+1]];e.vertices.push(s)}}return e},Kle=t=>{let e={definition:lt.LINESET,vertexCount:[],colorPerVertex:!0};return t.vertexCount&&(e.vertexCount=Rt(t.vertexCount)),t.colorPerVertex&&(e.colorPerVertex=t.colorPerVertex.includes("TRUE")||t.colorPerVertex.includes("true")),e.objects=[],e},Qle=t=>{let e={definition:lt.INDEXEDLINESET,indexes:[],colorPerVertex:!0};if(t.coordIndex){let n=pl(t.coordIndex);e.indexes=n.filter(i=>i.length>1)}return t.colorPerVertex&&(e.colorPerVertex=t.colorPerVertex.includes("TRUE")||t.colorPerVertex.includes("true")),e.objects=[],e},eue=t=>{let e={definition:lt.COLOR,colors:[]};if(t.color){let n=Rt(t.color),i=n.length,s=Math.trunc(i/3);for(let r=0;r<s;r++){let o=r*3;e.colors.push([n[o],n[o+1],n[o+2]])}}return e},tue=t=>{let e={definition:lt.COORDINATE,points:[]};if(t.point){let n=Rt(t.point),i=n.length,s=Math.trunc(i/3);for(let r=0;r<s;r++){let o=r*3;e.points.push([n[o],n[o+1],n[o+2]])}}return e},nue=t=>{let e={definition:lt.TRIANGLESET,ccw:!0,colorPerVertex:!0};return t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),e.objects=[],e},iue=t=>{let e={definition:lt.TRIANGLEFANSET,ccw:!0,fanCount:[],colorPerVertex:!0};return t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.fanCount&&(e.fanCount=Rt(t.fanCount)),e.objects=[],e},sue=t=>{let e={definition:lt.TRIANGLESTRIPSET,ccw:!0,stripCount:[],colorPerVertex:!0};return t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.stripCount&&(e.stripCount=Rt(t.stripCount)),e.objects=[],e},rue=t=>{let e={definition:lt.QUADSET,ccw:!0,colorPerVertex:!0};return t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),e.objects=[],e},oue=t=>{let e={definition:lt.INDEXEDTRIANGLESET,ccw:!0,index:[],colorPerVertex:!0};return t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.index&&(e.index=Rt(t.index)),e.objects=[],e},aue=t=>{let e={definition:lt.INDEXEDTRIANGLEFANSET,ccw:!0,fans:[],colorPerVertex:!0};if(t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.index){let n=pl(t.index);e.fans=n.filter(i=>i.length>2)}return e.objects=[],e},cue=t=>{let e={definition:lt.INDEXEDTRIANGLESTRIPSET,ccw:!0,strips:[],colorPerVertex:!0};if(e.objects=[],t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.index){let n=pl(t.index);e.strips=n.filter(i=>i.length>2)}return e},lue=t=>{let e={definition:lt.INDEXEDQUADSET,ccw:!0,index:[],colorPerVertex:!0};return t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.index&&(e.index=Rt(t.index)),e.objects=[],e},uue=t=>{let e={definition:lt.INDEXEDFACESET,ccw:!0,convex:!0,faces:[],colorPerVertex:!0,colorIndex:null};if(t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.convex&&(e.convex=t.convex.includes("TRUE")||t.convex.includes("true")),t.coordIndex){let n=pl(t.coordIndex);e.faces=n.filter(i=>i.length>2)}if(t.colorPerVertex&&(e.colorPerVertex=t.colorPerVertex.includes("TRUE")||t.colorPerVertex.includes("true")),t.colorIndex)if(e.colorPerVertex){let n=pl(t.colorIndex);e.colorIndex=n.filter(i=>i.length>2)}else e.colorIndex=Rt(t.colorIndex);else e.colorIndex=e.faces;return e.objects=[],e},hue=t=>{let e={definition:lt.ELEVATIONGRID,xDimension:2,zDimension:2,xSpacing:1,zSpacing:1,height:[0,0,0,0],ccw:!0,solid:!1,colorPerVertex:!0};return t.xDimension&&(e.xDimension=parseFloat(t.xDimension)),t.zDimension&&(e.zDimension=parseFloat(t.zDimension)),t.xSpacing&&(e.xSpacing=parseFloat(t.xSpacing)),t.zSpacing&&(e.zSpacing=parseFloat(t.zSpacing)),t.height&&(e.height=Rt(t.height)),t.ccw&&(e.ccw=t.ccw.includes("TRUE")||t.ccw.includes("true")),t.solid&&(e.solid=t.solid.includes("TRUE")||t.solid.includes("true")),t.colorPerVertex&&(e.colorPerVertex=t.colorPerVertex.includes("TRUE")||t.colorPerVertex.includes("true")),e.objects=[],e},fue=t=>{let e={definition:lt.APPEARANCE};return e.objects=[],e},due=t=>{let e={definition:lt.MATERIAL,color:[.8,.8,.8,1]},n=1;if(t.transparency&&(n=1-t.transparency),t.diffuseColor){let i=Rt(t.diffuseColor);i.length>2&&(i.length<4&&i.push(n),e.color=i)}if(t.emissiveColor){let i=Rt(t.emissiveColor);i.length>2&&(i.length<4&&i.push(n),e.color=i)}return e},pue=t=>{let e={definition:lt.GROUP};return e.objects=[],e},Rt=t=>t.trim().replace(/,/g," ").split(/ +/).map(e=>parseFloat(e)),pl=t=>t.replace(/,/g," ").trim().split(/ -1/).map(n=>Rt(n));MF.exports={x3dTypes:lt,x3dX3D:Nle,x3dUnit:Fle,x3dMeta:Ole,x3dScene:Ule,x3dTransform:Ble,x3dShape:kle,x3dGroup:pue,x3dBox:zle,x3dCone:qle,x3dCylinder:Vle,x3dSphere:Gle,x3dExtrusion:Hle,x3dArc2D:$le,x3dArcClose2D:Wle,x3dCircle2D:Xle,x3dDisk2D:Yle,x3dPolyline2D:Zle,x3dRectangle2D:jle,x3dTriangleSet2D:Jle,x3dColor:eue,x3dCoordinate:tue,x3dTriangleSet:nue,x3dTriangleFanSet:iue,x3dTriangleStripSet:sue,x3dQuadSet:rue,x3dIndexedTriangleSet:oue,x3dIndexedTriangleFanSet:aue,x3dIndexedTriangleStripSet:cue,x3dIndexedQuadSet:lue,x3dIndexedFaceSet:uue,x3dElevationGrid:hue,x3dLineSet:Kle,x3dIndexedLineSet:Qle,x3dAppearance:fue,x3dMaterial:due}});var R1=E((Wbe,wF)=>{var{extrusions:mue,geometries:AF,maths:gue}=At(),{mat4:Dn,vec3:dt,utils:xue}=gue,{extrudeFromSlices:vue,slice:C1}=mue,yue=t=>{let e=t.length,n=dt.equals(t[0],t[e-1]),i=[];for(let s=0;s<e;s++){let r=dt.create();s===0?n?dt.normalize(r,dt.subtract(r,t[1],t[e-2])):dt.normalize(r,dt.subtract(r,t[1],t[0])):s===e-1?n?dt.normalize(r,dt.subtract(r,t[1],t[e-2])):dt.normalize(r,dt.subtract(r,t[e-1],t[e-2])):dt.normalize(r,dt.subtract(r,t[s+1],t[s-1])),i.push(r)}return i},gl=t=>t[0]+0===0&&t[1]+0===0&&t[2]+0===0,ml=(t,e,n,i)=>{let s=dt.subtract(dt.create(),i,n),r=dt.subtract(dt.create(),e,n);return dt.normalize(t,dt.cross(t,s,r))},_ue=t=>{let e=t.length,n=dt.equals(t[0],t[e-1]),i=[],s;for(let r=0;r<e;r++){let o=dt.create();r===0?n?ml(o,t[e-2],t[0],t[1]):e>2&&ml(o,t[0],t[1],t[2]):r===e-1?n?ml(o,t[e-2],t[0],t[1]):e>2&&ml(o,t[e-3],t[e-2],t[e-1]):ml(o,t[r-1],t[r],t[r+1]),s&&dt.dot(s,o)<0&&dt.negate(o,o),i.push(o),s=o}if(gl(i[0])){for(let r=1;r<i.length;r++)if(!gl(i[r])){i[0]=i[r];break}}for(let r=1;r<i.length;r++)gl(i[r])&&!gl(i[r-1])&&dt.clone(i[r],i[r-1]);return i},bue=(t,e)=>{let n=[];for(let i=0;i<t.length;i++){let s=dt.create();n.push(dt.normalize(s,dt.cross(s,t[i],e[i])))}return n},Sue=(t,e,n,i)=>(t[0]=e[0],t[1]=n[0],t[2]=i[0],t[3]=0,t[4]=e[1],t[5]=n[1],t[6]=i[1],t[7]=0,t[8]=e[2],t[9]=n[2],t[10]=i[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t),Eue=t=>{let{beginCap:e,endCap:n,crossSection:i,orientations:s,scales:r,spine:o}=Object.assign({},t);if(xue.area(i)<0&&i.reverse(),r.length===1&&(r=o.map(p=>r[0])),s.length===1&&(s=o.map(p=>s[0])),o.length!==r.length||o.length!==s.length)throw new Error(`invalid X3D specification; spine scale orientaion length must be the same; ${o.length}`);let a=AF.geom2.fromPoints(i),c=C1.fromSides(AF.geom2.toSides(a)),l=yue(o),u=_ue(o),f=bue(l,u),h=[0,1,0],d=Dn.fromVectorRotation(Dn.create(),dt.fromValues(0,0,1),h);return u.reduce((p,x)=>p&&gl(x),!0)&&(dt.subtract(h,o[1],o[0]),Dn.fromVectorRotation(d,dt.fromValues(0,0,1),h),f=f.map(p=>[1,0,0]),l=l.map(p=>[0,1,0]),u=u.map(p=>[0,0,1])),vue({numberOfSlices:o.length,capStart:e,capEnd:n,callback:function(p,x,m){let b=o[x],S=dt.fromVec2(dt.create(),r[x],1),y=s[x],M=f[x],A=l[x],w=u[x],T=Dn.fromTranslation(Dn.create(),b),v=Dn.fromScaling(Dn.create(),S),_=Sue(Dn.create(),M,A,w),R=Dn.fromRotation(Dn.create(),y[3],y),D=Dn.create();Dn.multiply(D,d,D),Dn.multiply(D,_,D),Dn.multiply(D,R,D),Dn.multiply(D,T,D);let L=m;return L=C1.transform(v,L),L=C1.transform(D,L),L}},c)};wF.exports=Eue});var hr=E((Xbe,CF)=>{var{x3dTypes:D1}=Ni(),td=(t,e)=>e.find(n=>n.definition===t),Mue=(t,e)=>{let n=td(D1.APPEARANCE,t),i;return(n&&(i=td(D1.MATERIAL,n.objects),i)||(i=td(D1.MATERIAL,t),i))&&i.color?i.color:null},TF=t=>`[${t}]`,Aue=t=>`[
    ${t.map(n=>TF(n)).join(`,
    `)}
  ]`,wue=(t,e)=>{if(!(Array.isArray(t)&&Array.isArray(e)))return null;if(t.length<0||!Array.isArray(t[0]))return console.log("ERROR: WRONG FORMAT FOR VERTEXCOLORS"),null;let n=[];for(let i=0;i<t.length;i++){let s=t[i],r=0,o=0,a=0,c=1;for(let u=0;u<s.length;u++){let f=e[s[u]];f&&(r+=f[0],o+=f[1],a+=f[2])}let l=[r/s.length,o/s.length,a/s.length,c];n.push(l)}return n},Tue=(t,e)=>Array.isArray(t)&&Array.isArray(e)?t.map(i=>e[i]?e[i]:null):null,Cue=(t,e)=>{if(!e||!Array.isArray(t.colorIndex))return null;let n=null;return t.colorPerVertex===!0?n=wue(t.colorIndex,e.colors):n=Tue(t.colorIndex,e.colors),n};CF.exports={findNode:td,findColor:Mue,createColors:Cue,pointToString:TF,pointsToString:Aue}});var I1=E((Ybe,PF)=>{var P1=At(),{createColors:RF,findNode:Ra}=hr(),{x3dTypes:Da}=Ni(),DF=(t,e)=>{let n=Ra(Da.INDEXEDLINESET,e);if(n){let i=Ra(Da.COORDINATE,n.objects),s=n.indexes,r=Ra(Da.COLOR,n.objects);if(i&&s){let o=s.map(c=>{let l=c.map(f=>i.points[f]);return l.findIndex(f=>f[2]!==0)>=0&&(console.warn("WARNING: unsupported 3D indexed line set was ignored"),l=[]),l});n.colorPerVertex===!0?n.colorIndex=s:n.colorIndex=s.map((c,l)=>l);let a=RF(n,r);return{pointsSet:o,colors:a}}}if(n=Ra(Da.LINESET,e),n){let i=Ra(Da.COORDINATE,n.objects),s=Ra(Da.COLOR,n.objects),r=n.vertexCount;if(i&&r){let o=0,a=r.map(l=>{let u=[];for(let h=0;h<l;h++)u.push(i.points[o]),o++;return u.findIndex(h=>h[2]!==0)>=0&&(console.warn("WARNING: unsupported 3D line set was ignored"),u=[]),u});if(n.colorPerVertex===!0){let l=0;n.colorIndex=r.map(u=>{let f=[];for(let h=0;h<u;h++)f.push(l),l++;return f})}else n.colorIndex=a.map((l,u)=>u);let c=RF(n,s);return{pointsSet:a,colors:c}}}return null},Rue=(t,e)=>{let n,i=DF(t,e);if(i){let{pointsSet:s,colors:r}=i;n=s.map((o,a)=>{let c;return r?c=P1.colors.colorize(r[a],P1.primitives.line(o)):c=P1.primitives.line(o),c})}return n};PF.exports={convertLine:DF,instantiateLine:Rue}});var NF=E((Zbe,LF)=>{var{pointsToString:IF}=hr(),{convertLine:Due}=I1(),Pue=(t,e)=>{let n=Due(t,e);if(n){let{pointsSet:i,colors:s}=n,r=`  let lines = []
`;return i.forEach((a,c)=>{if(s){let l=s[c];r+=`  const line${c} = colorize([${l}], primitives.line(${IF(a)}))
  lines.push(line${c})
`}else r+=`  const line${c} = primitives.line(${IF(a)})
  lines.push(line${c})
`}),{primitive:"...lines",code:r}}return null};LF.exports=Pue});var L1=E((jbe,OF)=>{var{primitives:Iue}=At(),{x3dTypes:_t}=Ni(),{findNode:bt,createColors:is}=hr(),FF=(t,e)=>{let n=bt(_t.TRIANGLESET,e);if(n){let i=bt(_t.COORDINATE,n.objects),s=bt(_t.COLOR,n.objects);if(i){let r=i.points,o=r.length,a=Math.trunc(o/3),c=[];for(let h=0;h<a;h++){let d=h*3;c.push([d,d+1,d+2])}let l=n.ccw?"outward":"inward";n.colorIndex=c;let u=is(n,s);return{type:"triangles",points:r,faces:c,colors:u,orientation:l}}}if(n=bt(_t.TRIANGLEFANSET,e),n){let i=n.fanCount,s=bt(_t.COORDINATE,n.objects),r=bt(_t.COLOR,n.objects);if(s){let o=s.points,a=i.length,c=[],l=0;for(let d=0;d<a;d++){let g=Math.trunc(i[d]);for(let p=1;p<g-1;p++)c.push([l,l+p,l+p+1]);l+=g}let u=n.ccw?"outward":"inward";n.colorIndex=c;let f=is(n,r);return{type:`triangle fans (${a})`,points:o,faces:c,colors:f,orientation:u}}}if(n=bt(_t.TRIANGLESTRIPSET,e),n){let i=n.stripCount,s=bt(_t.COORDINATE,n.objects),r=bt(_t.COLOR,n.objects);if(s){let o=s.points,a=i.length,c=[],l=0;for(let d=0;d<a;d++){let g=Math.trunc(i[d]);for(let p=0;p<g-2;p++){let x=[l+p,l+p+1,l+p+2];p%2===1&&x.reverse(),c.push(x)}l+=g}n.colorIndex=c;let u=is(n,r),f=n.ccw?"outward":"inward";return{type:`triangle strip (${a})`,points:o,faces:c,colors:u,orientation:f}}}if(n=bt(_t.QUADSET,e),n){let i=bt(_t.COORDINATE,n.objects),s=bt(_t.COLOR,n.objects);if(i){let r=i.points,o=r.length,a=Math.trunc(o/4),c=[];for(let h=0;h<a;h++){let d=h*4;c.push([d,d+1,d+2,d+3])}n.colorIndex=c;let l=is(n,s),u=n.ccw?"outward":"inward";return{type:`quad (${a})`,points:r,faces:c,colors:l,orientation:u}}}if(n=bt(_t.INDEXEDTRIANGLESET,e),n){let i=bt(_t.COORDINATE,n.objects),s=bt(_t.COLOR,n.objects),r=n.index;if(i&&r&&r.length>2){let o=i.points,a=Math.trunc(r.length/3),c=[];for(let h=0;h<a;h++){let d=h*3;c.push([r[d],r[d+1],r[d+2]])}n.colorIndex=c;let l=is(n,s),u=n.ccw?"outward":"inward";return{type:"indexed triangle",points:o,faces:c,colors:l,orientation:u}}}if(n=bt(_t.INDEXEDTRIANGLEFANSET,e),n){let i=bt(_t.COORDINATE,n.objects),s=bt(_t.COLOR,n.objects),r=n.fans;if(i&&r&&r.length>0){let o=i.points,a=r.length,c=[];for(let h=0;h<a;h++){let d=r[h],g=d.length;for(let p=1;p<g-1;p++)c.push([d[0],d[p],d[p+1]])}n.colorIndex=c;let l=is(n,s),u=n.ccw?"outward":"inward";return{type:`indexed triangle fan (${a})`,points:o,faces:c,colors:l,orientation:u}}}if(n=bt(_t.INDEXEDTRIANGLESTRIPSET,e),n){let i=bt(_t.COORDINATE,n.objects),s=bt(_t.COLOR,n.objects),r=n.strips;if(i&&r&&r.length>0){let o=i.points,a=r.length,c=[];for(let h=0;h<a;h++){let d=r[h],g=d.length;for(let p=0;p<g-2;p++){let x=[d[p],d[p+1],d[p+2]];p%2===1&&x.reverse(),c.push(x)}}n.colorIndex=c;let l=is(n,s),u=n.ccw?"outward":"inward";return{type:`indexed triangle strip (${a})`,points:o,faces:c,colors:l,orientation:u}}}if(n=bt(_t.INDEXEDQUADSET,e),n){let i=bt(_t.COORDINATE,n.objects),s=bt(_t.COLOR,n.objects),r=n.index;if(i&&r&&r.length>3){let o=i.points,a=Math.trunc(r.length/4),c=[];for(let h=0;h<a;h++){let d=h*4;c.push([r[d],r[d+1],r[d+2],r[d+3]])}n.colorIndex=c;let l=is(n,s),u=n.ccw?"outward":"inward";return{type:`indexed quad (${a})`,points:o,faces:c,colors:l,orientation:u}}}if(n=bt(_t.INDEXEDFACESET,e),n){let i=bt(_t.COORDINATE,n.objects),s=n.faces,r=bt(_t.COLOR,n.objects);if(i&&s&&s.length>0){let o=i.points,a=s.length,c=is(n,r),l=n.ccw?"outward":"inward";return{type:`indexed faces (${a})`,points:o,faces:s,colors:c,orientation:l}}}if(n=bt(_t.ELEVATIONGRID,e),n){let i=n.height,s=bt(_t.COLOR,n.objects);if(i&&i.length>0){let r=n.xDimension,o=n.xSpacing,a=n.zDimension,c=n.zSpacing,l=[],u=0;for(let p=0;p<a;++p)for(let x=0;x<r;++x){let m=x*o,b=p*c,S=i[u];u++,l.push([m,S,b])}let f=[];for(let p=0;p<a-1;++p)for(let x=0;x<r-1;++x){let m=x+p*r,b=x+1+p*r,S=x+(p+1)*r,y=x+1+(p+1)*r,M=[Math.abs(i[m]),Math.abs(i[b]),Math.abs(i[S]),Math.abs(i[y])],A=0;M[1]>=M[0]&&M[1]>=M[2]&&M[1]>=M[3]&&(A=1),M[2]>=M[0]&&M[2]>=M[1]&&M[2]>=M[3]&&(A=2),M[3]>=M[0]&&M[3]>=M[1]&&M[3]>=M[2]&&(A=3),A===0&&f.push([m,y,b],[m,S,y]),A===1&&f.push([b,S,y],[b,m,S]),A===2&&f.push([S,b,m],[S,y,b]),A===3&&f.push([y,m,S],[y,b,m])}let h=n.ccw?"outward":"inward";n.colorPerVertex===!0&&(n.colorIndex=f);let d=is(n,s);return{type:`elevation grid (${r} X ${a})`,points:l,faces:f,colors:d,orientation:h}}}return null},Lue=(t,e)=>{let n,i=FF(t,e);return i&&(n=Iue.polyhedron(i)),n};OF.exports={convertMesh:FF,instantiateMesh:Lue}});var BF=E((Jbe,UF)=>{var{pointsToString:N1}=hr(),{convertMesh:Nue}=L1(),Fue=(t,e,n,i,s)=>{let r=Array.isArray(i)?N1(i):"null",o="primitives.polyhedron({points, faces, colors, orientation})",a=`
  // 3D ${t} set: ${e.length} points, ${n.length} faces
  const points = ${N1(e)}
  const faces = ${N1(n)}
  const colors = ${r}
  const orientation = '${s}'
`;return{primitive:o,code:a}},Oue=(t,e)=>{let n=Nue(t,e);if(n){let{type:i,points:s,faces:r,colors:o,orientation:a}=n;return Fue(i,s,r,o,a)}return null};UF.exports=Oue});var qF=E((Kbe,zF)=>{var{geometries:Uue}=At(),{geom3:Bue,poly3:kue}=Uue,zue=R1(),{x3dTypes:di}=Ni(),{findNode:pi,findColor:que,pointsToString:kF}=hr(),Vue=NF(),Gue=BF(),Hue=(t,e)=>{let n=`
// shape
const createObjects${e.id} = (options) => {
  let objects = []
`,i=e.objects,s=que(i,t),r,o=pi(di.BOX,i);if(o)r=`primitives.cuboid({size: [${o.size}]})`;else if(o=pi(di.CONE,i),o)n+=`  const shape = transforms.rotateX(-Math.PI/2, primitives.cylinderElliptic({startRadius: [${o.bottomRadius},${o.bottomRadius}], height: ${o.height}, segments: ${o.subdivision}, endRadius: [${o.topRadius}, ${o.topRadius}]}))
`,r="shape";else if(o=pi(di.CYLINDER,i),o)n+=`  const shape = transforms.rotateX(-Math.PI/2, primitives.cylinder({radius: ${o.radius}, height: ${o.height}, segments: ${o.subdivision}}))
`,r="shape";else if(o=pi(di.SPHERE,i),o)r=`primitives.sphere({radius: ${o.radius}, segments: ${o.subdivision}})`;else if(o=pi(di.EXTRUSION,i),o){let c=zue(o),u=Bue.toPolygons(c).map(f=>kF(kue.toPoints(f)));n+=`  const polygons = [
  ${u.join(`,
  `)}
]
`,r="geometries.geom3.fromPoints(polygons)"}if(!r){if(o=pi(di.ARC2D,i),o)r=`primitives.arc({radius: ${o.radius}, startAngle: ${o.startAngle}, endAngle: ${o.endAngle}, segments: ${o.subdivision}})`;else if(o=pi(di.ARCCLOSE2D,i),o)o.closureType==="PIE"?r=`primitives.circle({radius: ${o.radius}, startAngle: ${o.startAngle}, endAngle: ${o.endAngle}, segments: ${o.subdivision}})`:r=`geometries.geom2.fromPoints(geometries.path2.toPoints(geometries.path2.close(primitives.arc({radius: ${o.radius}, startAngle: ${o.startAngle}, endAngle: ${o.endAngle}, segments: ${o.subdivision}}))))`;else if(o=pi(di.CIRCLE2D,i),o)r=`primitives.arc({radius: ${o.radius}, segments: ${o.subdivision}})`;else if(o=pi(di.DISK2D,i),o)o.innerRadius===o.outerRadius?r=`primitives.arc({radius: ${o.outerRadius}, segments: ${o.subdivision}})`:o.innerRadius===0?r=`primitives.circle({radius: ${o.outerRadius}, segments: ${o.subdivision}})`:r=`booleans.subtract(primitives.circle({radius: ${o.outerRadius}, segments: ${o.subdivision}}), primitives.circle({radius: ${o.innerRadius}, segments: ${o.subdivision}}))`;else if(o=pi(di.POLYLINE2D,i),o)r=`primitives.line([[${o.lineSegments.join("], [")}]])`;else if(o=pi(di.RECTANGLE2D,i),o)r=`primitives.rectangle({size: [${o.size}]})`;else if(o=pi(di.TRIANGLESET2D,i),o){let c=o.vertices.length,l=Math.trunc(c/3);n+=`
  // 2D triangle set: ${c} points, ${l} faces
  const vertices = ${kF(o.vertices)}
  const triangles = []
  for (let i = 0; i < ${l}; i = i + 3) {
    triangles.push(geometries.geom2.fromPoints([vertices[i], vertices[i + 1], vertices[i + 2]]))
  }
`,r="triangles"}}let a=Gue(t,i);return a&&(r=a.primitive,n+=a.code),a=Vue(t,i),a&&(r=a.primitive,n+=a.code),r&&(s?n+=`  objects.push(colorize([${s}], ${r}))`:n+=`  objects.push(${r})`),n+=`
  return objects
}
`,n};zF.exports=Hue});var HF=E((Qbe,GF)=>{var $ue=T1(),{x3dTypes:F1}=Ni(),Wue=qF(),Xue=(t,e)=>{let n=`
// transform
const createObjects${e.id} = (options) => {
  let objects = []
`,i=e.objects;for(let r=0;r<i.length;r++){let o=i[r];n+=`  objects.push(...createObjects${o.id}(options))
`}let s=$ue(e.center,e.rotation,e.scale,e.scaleOrientation,e.translation);return n+=`
  const matrix = [${s}]
  return applyTransform(matrix, objects)
}
`,n+=O1(t,i),n},Yue=(t,e)=>{let n=`
// group
const createObjects${e.id} = (options) => {
  let objects = []
`,i=e.objects;for(let s=0;s<i.length;s++){let r=i[s];n+=`  objects.push(...createObjects${r.id}(options))
`}return n+=`
  return objects
}
`,n+=O1(t,i),n},VF=[],Zue=(t,e)=>{if(VF.includes(e.id))return"";VF.push(e.id);let n="";switch(e.definition){case F1.TRANSFORM:n+=Xue(t,e);break;case F1.SHAPE:n+=Wue(t,e);break;case F1.GROUP:n+=Yue(t,e);break;default:console.log("WARNING: unknown definition: "+e.definition);break}return n},O1=(t,e)=>e.reduce((n,i,s)=>n+=Zue(t,i),"");GF.exports=O1});var U1=E((eSe,XF)=>{var jue=Wf(),{x3dTypes:De,x3dX3D:Jue,x3dUnit:Kue,x3dMeta:Que,x3dScene:ehe,x3dTransform:the,x3dShape:nhe,x3dGroup:$F,x3dBox:ihe,x3dCone:she,x3dCylinder:rhe,x3dSphere:ohe,x3dExtrusion:ahe,x3dArc2D:che,x3dArcClose2D:lhe,x3dCircle2D:uhe,x3dDisk2D:hhe,x3dPolyline2D:fhe,x3dRectangle2D:dhe,x3dTriangleSet2D:phe,x3dColor:mhe,x3dCoordinate:ghe,x3dTriangleSet:xhe,x3dTriangleFanSet:vhe,x3dTriangleStripSet:yhe,x3dQuadSet:_he,x3dIndexedTriangleSet:bhe,x3dIndexedTriangleFanSet:She,x3dIndexedTriangleStripSet:Ehe,x3dIndexedQuadSet:Mhe,x3dIndexedFaceSet:Ahe,x3dElevationGrid:whe,x3dLineSet:The,x3dIndexedLineSet:Che,x3dAppearance:Rhe,x3dMaterial:Dhe}=Ni(),WF={X3D:Jue,UNIT:Kue,META:Que,SCENE:ehe,TRANSFORM:the,SHAPE:nhe,GROUP:$F,STATICGROUP:$F,BOX:ihe,CONE:she,CYLINDER:rhe,SPHERE:ohe,EXTRUSION:ahe,ARC2D:che,ARCCLOSE2D:lhe,CIRCLE2D:uhe,DISK2D:hhe,POLYLINE2D:fhe,RECTANGLE2D:dhe,TRIANGLESET2D:phe,COLOR:mhe,COORDINATE:ghe,TRIANGLESET:xhe,TRIANGLEFANSET:vhe,TRIANGLESTRIPSET:yhe,QUADSET:_he,INDEXEDTRIANGLESET:bhe,INDEXEDTRIANGLEFANSET:She,INDEXEDTRIANGLESTRIPSET:Ehe,INDEXEDQUADSET:Mhe,INDEXEDFACESET:Ahe,ELEVATIONGRID:whe,LINESET:The,INDEXEDLINESET:Che,APPEARANCE:Rhe,MATERIAL:Dhe},Phe=1,Ihe=()=>("0000"+Phe++).slice(-4),Lhe=(t,e)=>{let n=new jue.SaxesParser,i=new Map,s=null,r=De.X3D,o=null,a=[],c=[],l=[],u={factor:1,name:"meters"},f={factor:1,name:"radians"};return n.on("error",h=>{console.log(`error: line ${h.line}, column ${h.column}, bad character [${h.c}]`)}),n.on("opentag",h=>{let d=h.name.toUpperCase(),g=WF[d]?WF[d](h.attributes,{x3dObjects:a}):null;if(g){if(g.id=Ihe(),h.attributes.USE){let p=h.attributes.USE;if(i.has(p)){let x=i.get(p);x.definition!==g.definition&&console.log(`WARNING: using a definition "${p}" of a different type; ${g.definition} vs ${x.definition}`),g=x}else console.log(`WARNING: definition "${p}" does not exist, using default for ${g.definition}`)}else if(h.attributes.DEF){let p=h.attributes.DEF;i.has(p)?console.log(`WARNING: redefintion of ${p} has been ignored`):i.set(p,g)}switch(g.definition){case De.SCENE:case De.TRANSFORM:case De.SHAPE:case De.APPEARANCE:case De.TRIANGLESET:case De.TRIANGLEFANSET:case De.TRIANGLESTRIPSET:case De.QUADSET:case De.INDEXEDTRIANGLESET:case De.INDEXEDTRIANGLEFANSET:case De.INDEXEDTRIANGLESTRIPSET:case De.INDEXEDQUADSET:case De.INDEXEDFACESET:case De.ELEVATIONGRID:case De.LINESET:case De.INDEXEDLINESET:case De.GROUP:r=g.definition;break;default:break}switch(r){case De.X3D:"objects"in g&&a.push(g),g.definition===De.UNIT&&(g.category==="length"&&(u.factor=g.conversionFactor,u.name=g.name),g.category==="angle"&&(f.factor=g.conversionFactor,f.name=g.name));break;case De.SCENE:case De.TRANSFORM:case De.SHAPE:case De.GROUP:case De.APPEARANCE:case De.TRIANGLESET:case De.TRIANGLEFANSET:case De.TRIANGLESTRIPSET:case De.QUADSET:case De.INDEXEDTRIANGLESET:case De.INDEXEDTRIANGLEFANSET:case De.INDEXEDTRIANGLESTRIPSET:case De.INDEXEDQUADSET:case De.INDEXEDFACESET:case De.ELEVATIONGRID:case De.LINESET:case De.INDEXEDLINESET:if(a.length>0){let p=a.pop();"objects"in p&&p.objects.push(g),a.push(p),"objects"in g&&a.push(g)}break;default:console.log("WARNING: invalid X3D definition");break}s=g}}),n.on("closetag",h=>{switch(h.name.toUpperCase()){case"X3D":case"SCENE":case"TRANSFORM":case"SHAPE":case"GROUP":case"STATICGROUP":case"APPEARANCE":case"TRIANGLESET":case"TRIANGLEFANSET":case"TRIANGLESTRIPSET":case"QUADSET":case"INDEXEDTRIANGLESET":case"INDEXEDTRIANGLEFANSET":case"INDEXEDTRIANGLESTRIPSET":case"INDEXEDQUADSET":case"INDEXEDFACESET":case"ELEVATIONGRID":case"LINESET":case"INDEXEDLINESET":break;default:return}let g=()=>{a.length>0&&(r=a[a.length-1].definition)},p=null;switch(r){case De.X3D:a.length>0&&(p=a.pop(),g()),a.length===0&&(p.length=u,p.angle=f,o=p);break;case De.SCENE:case De.TRANSFORM:case De.SHAPE:case De.GROUP:case De.APPEARANCE:case De.TRIANGLESET:case De.TRIANGLEFANSET:case De.TRIANGLESTRIPSET:case De.QUADSET:case De.INDEXEDTRIANGLESET:case De.INDEXEDTRIANGLEFANSET:case De.INDEXEDTRIANGLESTRIPSET:case De.INDEXEDQUADSET:case De.INDEXEDFACESET:case De.ELEVATIONGRID:case De.LINESET:case De.INDEXEDLINESET:a.length>0&&(p=a.pop(),g());break;default:console.log("WARNING: unhandled definition",r);break}}),n.on("text",h=>{h!==null&&(h=h.trim(),h.length>0&&s&&r!==0&&(s.value=h))}),n.on("end",()=>{}),n.write(t).close(),{x3dObj:o,x3dMaterials:c,x3dTextures:l}};XF.exports=Lhe});var B1=E((tSe,YF)=>{var Nhe=25.4000508001016;YF.exports={inchMM:Nhe}});var JF=E((nSe,jF)=>{var Fhe=HF(),{x3dTypes:ZF}=Ni(),Ohe=U1(),Uhe=(t,e)=>{let n={pxPmm:B1().pxPmm};t=Object.assign({},n,t);let{version:i,pxPmm:s,addMetaData:r,filename:o}=t;t&&t.statusCallback&&t.statusCallback({progress:0});let{x3dObj:a,x3dMaterials:c,x3dTextures:l}=Ohe(e,s),u=r?`//
// Produced by JSCAD IO Library : X3D Deserializer (${i})
// date: ${new Date}
// source: ${o}
//
`:"";if(!a)throw new Error("X3D parsing failed, no valid X3D data retrieved");return t&&t.statusCallback&&t.statusCallback({progress:50}),u+=Bhe(a,{x3dMaterials:c,x3dTextures:l}),t&&t.statusCallback&&t.statusCallback({progress:100}),u},Bhe=(t,e)=>{if(t.definition!==ZF.X3D||!t.objects)throw new Error("X3D malformed");if(t.objects.length<1||t.objects[0].definition!==ZF.SCENE)throw new Error("X3D did not define a SCENE");let i=t.objects[0].objects,s=t.length,r=t.angle,o="";o=`// Objects  : ${i.length}
// Units : ${s.name} (${s.factor})
// Angles : ${r.name} (${r.factor})

const {booleans, extrusions, geometries, maths, primitives, transforms, utils} = require('@jscad/modeling')
const { colorize } =  require('@jscad/modeling').colors

const applyTransform = (matrix, ...objects) => {
  objects = utils.flatten(objects)
  if (objects.length === 0) return objects

  return objects.map((object) => {
    const color = object.color
    object = transforms.transform(matrix, object)
    if (color) object.color = color
    return object
  })
}

const main = () => {
  let options = {}
  let objects = []
`;for(let a=0;a<i.length;a++){let c=i[a];o+=`  objects.push(...createObjects${c.id}(options))
`}return o+=`  return objects
}
`,o+=Fhe({},i),o+=`module.exports = {main}
`,o};jF.exports=Uhe});var eO=E((iSe,QF)=>{var{booleans:khe,geometries:nd,primitives:qn,transforms:KF}=At(),{x3dTypes:mi}=Ni(),{findNode:gi}=hr(),zhe=R1(),qhe=(t,e)=>{let n,i=gi(mi.BOX,e);if(i)return n=qn.cuboid({size:i.size}),n;if(i=gi(mi.CONE,e),i)return n=KF.rotateX(-Math.PI/2,qn.cylinderElliptic({startRadius:[i.bottomRadius,i.bottomRadius],height:i.height,segments:i.subdivision,endRadius:[i.topRadius,i.topRadius]})),n;if(i=gi(mi.CYLINDER,e),i)return n=KF.rotateX(-Math.PI/2,qn.cylinder({radius:i.radius,height:i.height,segments:i.subdivision})),n;if(i=gi(mi.SPHERE,e),i)return n=qn.sphere({radius:i.radius,segments:i.subdivision}),n;if(i=gi(mi.EXTRUSION,e),i)return n=zhe(i),n;if(i=gi(mi.ARC2D,e),i)return n=qn.arc({radius:i.radius,startAngle:i.startAngle,endAngle:i.endAngle,segments:i.subdivision}),n;if(i=gi(mi.ARCCLOSE2D,e),i)return i.closureType==="PIE"?n=qn.circle({radius:i.radius,startAngle:i.startAngle,endAngle:i.endAngle,segments:i.subdivision}):n=nd.geom2.fromPoints(nd.path2.toPoints(nd.path2.close(qn.arc({radius:i.radius,startAngle:i.startAngle,endAngle:i.endAngle,segments:i.subdivision})))),n;if(i=gi(mi.CIRCLE2D,e),i)return n=qn.arc({radius:i.radius,segments:i.subdivision}),n;if(i=gi(mi.DISK2D,e),i)return i.innerRadius===i.outerRadius?n=qn.arc({radius:i.outerRadius,segments:i.subdivision}):i.innerRadius===0?n=qn.circle({radius:i.outerRadius,segments:i.subdivision}):n=khe.subtract(qn.circle({radius:i.outerRadius,segments:i.subdivision}),qn.circle({radius:i.innerRadius,segments:i.subdivision})),n;if(i=gi(mi.POLYLINE2D,e),i)return n=qn.line([i.lineSegments]),n;if(i=gi(mi.RECTANGLE2D,e),i)return n=qn.rectangle({size:i.size}),n;if(i=gi(mi.TRIANGLESET2D,e),i){let s=i.vertices,r=s.length,o=Math.trunc(r/3);n=[];for(let a=0;a<o;a=a+3)n.push(nd.geom2.fromPoints([s[a],s[a+1],s[a+2]]));return n}return n};QF.exports=qhe});var nO=E((sSe,tO)=>{var{colors:Vhe,transforms:Ghe}=At(),Hhe=T1(),{x3dTypes:k1}=Ni(),{findColor:$he}=hr(),Whe=eO(),{instantiateLine:Xhe}=I1(),{instantiateMesh:Yhe}=L1(),Zhe=new Map,jhe=(t,e)=>{let n=e.objects.map(s=>z1(t,s)).filter(s=>s!=null);if(n.length===0)return null;let i=Hhe(e.center,e.rotation,e.scale,e.scaleOrientation,e.translation);return n.map(s=>{let r=s.color;return s=Ghe.transform(i,s),r&&(s.color=r),s})},Jhe=(t,e)=>{let n=e.objects,i=$he(n,t),s=Whe(t,n);return s||(s=Yhe(t,n)),s||(s=Xhe(t,n)),s||(s=null),s&&i&&(s=Vhe.colorize(i,s)),s},Khe=(t,e)=>{let n=e.objects.map(i=>z1(t,i)).filter(i=>i!=null);return n.length===0?null:n},z1=(t,e)=>{let n;switch(e.definition){case k1.TRANSFORM:n=jhe(t,e);break;case k1.SHAPE:n=Jhe(t,e);break;case k1.GROUP:n=Khe(t,e);break;default:console.log("WARNING: unknown definition: "+e.definition);break}return n},Qhe=(t,e)=>{let n=e.map(i=>z1(t,i)).filter(i=>i!=null);return Zhe.clear(),n};tO.exports=Qhe});var rO=E((rSe,sO)=>{var{flatten:efe}=Ti(),tfe=U1(),nfe=nO(),{x3dTypes:iO}=Ni(),ife=(t,e)=>{let n={pxPmm:B1().pxPmm};t=Object.assign({},n,t);let{pxPmm:i}=t;t&&t.statusCallback&&t.statusCallback({progress:0});let{x3dObj:s}=tfe(e,i);if(s.definition!==iO.X3D||!s.objects)throw new Error("X3D malformed");if(s.objects.length<1||s.objects[0].definition!==iO.SCENE)throw new Error("X3D did not define a SCENE");t&&t.statusCallback&&t.statusCallback({progress:50});let o=s.objects[0].objects,a=nfe(t,o);return t.flatten&&(a=efe(a)),t&&t.statusCallback&&t.statusCallback({progress:100}),a};sO.exports=ife});var aO=E((oSe,oO)=>{var{ensureString:sfe}=Ss(),rfe=SF().version,ofe=JF(),afe=rO(),cfe=(t,e)=>(t=Object.assign({},{filename:"x3d",output:"script",version:rfe,flatten:!0,addMetaData:!0},t),e=sfe(e),t.output==="script"?ofe(t,e):afe(t,e)),lfe="x3d";oO.exports={deserialize:cfe,extension:lfe}});var gO=E((aSe,mO)=>{var cO=MN(),lO=$N(),uO=YN(),hO=JN(),fO=eF(),dO=bF(),pO=aO(),fr={};fr[cO.extension]=cO.deserialize;fr[lO.extension]=lO.deserialize;fr[uO.extension]=uO.deserialize;fr[hO.extension]=hO.deserialize;fr[fO.extension]=fO.deserialize;fr[dO.extension]=dO.deserialize;fr[pO.extension]=pO.deserialize;mO.exports=fr});var vO=E((cSe,xO)=>{var{makeBlob:ufe,convertToBlob:hfe}=Ss(),ffe=lg(),dfe=dg(),pfe=pg(),mfe=mg(),gfe=vg(),xfe=yg(),vfe=Mg(),yfe=Xg(),_fe=wL(),bfe=gO(),Sfe=(t,e)=>hfe(_fe(t,e));xO.exports={makeBlob:ufe,solidsAsBlob:Sfe,amfSerializer:ffe,dxfSerializer:dfe,jsonSerializer:pfe,objSerializer:mfe,stlSerializer:gfe,svgSerializer:xfe,x3dSerializer:vfe,m3fSerializer:yfe,deserializers:bfe}});var Gs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ax=0,zd=1,wx=2;var qd=1,Tx=2,ki=3,fs=0,En=1,ai=2,ps=0,Sr=1,Vd=2,Gd=3,Hd=4,Cx=5,zs=100,Rx=101,Dx=102,Px=103,Ix=104,Lx=200,Nx=201,Fx=202,Ox=203,Vl=204,Gl=205,Ux=206,Bx=207,kx=208,zx=209,qx=210,Vx=211,Gx=212,Hx=213,$x=214,pu=0,mu=1,gu=2,Er=3,xu=4,vu=5,yu=6,_u=7,$d=0,Wx=1,Xx=2,ms=0,Yx=1,Zx=2,jx=3,Jx=4,Kx=5,Qx=6,ev=7;var Wd=300,Rr=301,Dr=302,bu=303,Su=304,cc=306,Hl=1e3,ks=1001,$l=1002,si=1003,tv=1004;var lc=1005;var bi=1006,Eu=1007;var $s=1008;var Mi=1009,Xd=1010,Yd=1011,Ao=1012,Mu=1013,Ws=1014,zi=1015,wo=1016,Au=1017,wu=1018,To=1020,Zd=35902,jd=35899,Jd=1021,Kd=1022,ci=1023,go=1026,Co=1027,Qd=1028,Tu=1029,ep=1030,Cu=1031;var Ru=1033,uc=33776,hc=33777,fc=33778,dc=33779,Du=35840,Pu=35841,Iu=35842,Lu=35843,Nu=36196,Fu=37492,Ou=37496,Uu=37808,Bu=37809,ku=37810,zu=37811,qu=37812,Vu=37813,Gu=37814,Hu=37815,$u=37816,Wu=37817,Xu=37818,Yu=37819,Zu=37820,ju=37821,Ju=36492,Ku=36494,Qu=36495,eh=36283,th=36284,nh=36285,ih=36286;var za=2300,Wl=2301,ql=2302,Id=2400,Ld=2401,Nd=2402;var nv=3200,iv=3201;var tp=0,sv=1,gs="",Xn="srgb",Mr="srgb-linear",qa="linear",vt="srgb";var br=7680;var Fd=519,rv=512,ov=513,av=514,np=515,cv=516,lv=517,uv=518,hv=519,Od=35044;var ip="300 es",_i=2e3,Va=2001;var Oi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tx=1234567,Ba=Math.PI/180,xo=180/Math.PI;function Ro(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function sp(t,e){return(t%e+e)%e}function KO(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function QO(t,e,n){return t!==e?(n-t)/(e-t):0}function ka(t,e,n){return(1-n)*t+n*e}function e4(t,e,n,i){return ka(t,e,1-Math.exp(-n*i))}function t4(t,e=1){return e-Math.abs(sp(t,e*2)-e)}function n4(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function i4(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function s4(t,e){return t+Math.floor(Math.random()*(e-t+1))}function r4(t,e){return t+Math.random()*(e-t)}function o4(t){return t*(.5-Math.random())}function a4(t){t!==void 0&&(tx=t);let e=tx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c4(t){return t*Ba}function l4(t){return t*xo}function u4(t){return(t&t-1)===0&&t!==0}function h4(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function f4(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function d4(t,e,n,i,s){let r=Math.cos,o=Math.sin,a=r(n/2),c=o(n/2),l=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,c*f,c*h,a*l);break;case"YZY":t.set(c*h,a*u,c*f,a*l);break;case"ZXZ":t.set(c*f,c*h,a*u,a*l);break;case"XZX":t.set(a*u,c*g,c*d,a*l);break;case"YXY":t.set(c*d,a*u,c*g,a*l);break;case"ZYZ":t.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var rp={DEG2RAD:Ba,RAD2DEG:xo,generateUUID:Ro,clamp:it,euclideanModulo:sp,mapLinear:KO,inverseLerp:QO,lerp:ka,damp:e4,pingpong:t4,smoothstep:n4,smootherstep:i4,randInt:s4,randFloat:r4,randFloatSpread:o4,seededRandom:a4,degToRad:c4,radToDeg:l4,isPowerOfTwo:u4,ceilPowerOfTwo:h4,floorPowerOfTwo:f4,setQuaternionFromProperEuler:d4,normalize:bn,denormalize:po},$e=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ri=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=d,e[n+2]=g,e[n+3]=p;return}if(f!==p||c!==h||l!==d||u!==g){let x=1-a,m=c*h+l*d+u*g+f*p,b=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){let M=Math.sqrt(S),A=Math.atan2(M,m*b);x=Math.sin(x*A)/M,a=Math.sin(a*A)/M}let y=a*b;if(c=c*x+h*y,l=l*x+d*y,u=u*x+g*y,f=f*x+p*y,x===1-a){let M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return e[n]=a*g+u*f+c*d-l*h,e[n+1]=c*g+u*h+l*f-a*d,e[n+2]=l*g+u*d+a*h-c*f,e[n+3]=u*g-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),f=a(r/2),h=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){let d=2*Math.sqrt(1+i-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-n)*u)/l,h=Math.sin(n*u)/l;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(nx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(nx.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+c*l+o*f-a*u,this.y=i+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ld=new q,nx=new ri,Ze=class t{constructor(e,n,i,s,r,o,a,c,l){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l)}set(e,n,i,s,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],p=s[0],x=s[3],m=s[6],b=s[1],S=s[4],y=s[7],M=s[2],A=s[5],w=s[8];return r[0]=o*p+a*b+c*M,r[3]=o*x+a*S+c*A,r[6]=o*m+a*y+c*w,r[1]=l*p+u*b+f*M,r[4]=l*x+u*S+f*A,r[7]=l*m+u*y+f*w,r[2]=h*p+d*b+g*M,r[5]=h*x+d*S+g*A,r[8]=h*m+d*y+g*w,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=n*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=f*p,e[1]=(s*l-u*i)*p,e[2]=(a*i-s*o)*p,e[3]=h*p,e[4]=(u*n-s*c)*p,e[5]=(s*r-a*n)*p,e[6]=d*p,e[7]=(i*c-l*n)*p,e[8]=(o*n-i*r)*p,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ud.makeScale(e,n)),this}rotate(e){return this.premultiply(ud.makeRotation(-e)),this}translate(e,n){return this.premultiply(ud.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ud=new Ze;function op(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fv(){let t=Ga("canvas");return t.style.display="block",t}var ix={};function vo(t){t in ix||(ix[t]=!0,console.warn(t))}function dv(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var sx=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rx=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p4(){let t={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=mo(s.r),s.g=mo(s.g),s.b=mo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gs?qa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Mr]:{primaries:e,whitePoint:i,transfer:qa,toXYZ:sx,fromXYZ:rx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:sx,fromXYZ:rx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),t}var ut=p4();function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var to,Xl=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{to===void 0&&(to=Ga("canvas")),to.width=e.width,to.height=e.height;let s=to.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=to}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Ga("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},m4=0,yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:m4++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(hd(s[o].image)):r.push(hd(s[o]))}else r=hd(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function hd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Xl.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var g4=0,fd=new q,Zn=class t extends Oi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=ks,s=ks,r=bi,o=$s,a=ci,c=Mi,l=t.DEFAULT_ANISOTROPY,u=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g4++}),this.uuid=Ro(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hl:e.x=e.x-Math.floor(e.x);break;case ks:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hl:e.y=e.y-Math.floor(e.y);break;case ks:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=Wd;Zn.DEFAULT_ANISOTROPY=1;var zt=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],p=c[2],x=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+x)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(l+1)/2,y=(d+1)/2,M=(m+1)/2,A=(u+h)/4,w=(f+p)/4,T=(g+x)/4;return S>y&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=A/i,r=w/i):y>M?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=T/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=w/r,s=T/r),this.set(i,s,r,n),this}let b=Math.sqrt((x-g)*(x-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(x-g)/b,this.y=(f-p)/b,this.z=(h-u)/b,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends Oi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);let s={width:e,height:n,depth:i.depth},r=new Zn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let n={minFilter:bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new yo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends Yl{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Ha=class extends Zn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zl=class extends Zn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=si,this.minFilter=si,this.wrapR=ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(xi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(xi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=xi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(La),Sl.subVectors(this.max,La),no.subVectors(e.a,La),io.subVectors(e.b,La),so.subVectors(e.c,La),Is.subVectors(io,no),Ls.subVectors(so,io),xr.subVectors(no,so);let n=[0,-Is.z,Is.y,0,-Ls.z,Ls.y,0,-xr.z,xr.y,Is.z,0,-Is.x,Ls.z,0,-Ls.x,xr.z,0,-xr.x,-Is.y,Is.x,0,-Ls.y,Ls.x,0,-xr.y,xr.x,0];return!dd(n,no,io,so,Sl)||(n=[1,0,0,0,1,0,0,0,1],!dd(n,no,io,so,Sl))?!1:(El.crossVectors(Is,Ls),n=[El.x,El.y,El.z],dd(n,no,io,so,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new q,new q,new q,new q,new q,new q,new q,new q],xi=new q,bl=new Bi,no=new q,io=new q,so=new q,Is=new q,Ls=new q,xr=new q,La=new q,Sl=new q,El=new q,vr=new q;function dd(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){vr.fromArray(t,r);let a=s.x*Math.abs(vr.x)+s.y*Math.abs(vr.y)+s.z*Math.abs(vr.z),c=e.dot(vr),l=n.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var x4=new Bi,Na=new q,pd=new q,Ar=class{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):x4.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let n=Na.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Na,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(pd)),this.expandByPoint(Na.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},os=new q,md=new q,Ml=new q,Ns=new q,gd=new q,Al=new q,xd=new q,wr=class{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=os.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,n),os.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){md.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),Ns.copy(this.origin).sub(md);let r=e.distanceTo(n)*.5,o=-this.direction.dot(Ml),a=Ns.dot(this.direction),c=-Ns.dot(Ml),l=Ns.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let p=1/u;f*=p,h*=p,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(md).addScaledVector(Ml,h),d}intersectSphere(e,n){os.subVectors(e.center,this.origin);let i=os.dot(this.direction),s=os.dot(os)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,n,i,s,r){gd.subVectors(n,e),Al.subVectors(i,e),xd.crossVectors(gd,Al);let o=this.direction.dot(xd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ns.subVectors(this.origin,e);let c=a*this.direction.dot(Al.crossVectors(Ns,Al));if(c<0)return null;let l=a*this.direction.dot(gd.cross(Ns));if(l<0||c+l>o)return null;let u=-a*Ns.dot(xd);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class t{constructor(e,n,i,s,r,o,a,c,l,u,f,h,d,g,p,x){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,c,l,u,f,h,d,g,p,x)}set(e,n,i,s,r,o,a,c,l,u,f,h,d,g,p,x){let m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=p,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/ro.setFromMatrixColumn(e,0).length(),r=1/ro.setFromMatrixColumn(e,1).length(),o=1/ro.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,g=a*u,p=a*f;n[0]=c*u,n[4]=-c*f,n[8]=l,n[1]=d+g*l,n[5]=h-p*l,n[9]=-a*c,n[2]=p-h*l,n[6]=g+d*l,n[10]=o*c}else if(e.order==="YXZ"){let h=c*u,d=c*f,g=l*u,p=l*f;n[0]=h+p*a,n[4]=g*a-d,n[8]=o*l,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=p+h*a,n[10]=o*c}else if(e.order==="ZXY"){let h=c*u,d=c*f,g=l*u,p=l*f;n[0]=h-p*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=p-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){let h=o*u,d=o*f,g=a*u,p=a*f;n[0]=c*u,n[4]=g*l-d,n[8]=h*l+p,n[1]=c*f,n[5]=p*l+h,n[9]=d*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){let h=o*c,d=o*l,g=a*c,p=a*l;n[0]=c*u,n[4]=p-h*f,n[8]=g*f+d,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=d*f+g,n[10]=h-p*f}else if(e.order==="XZY"){let h=o*c,d=o*l,g=a*c,p=a*l;n[0]=c*u,n[4]=-f,n[8]=l*u,n[1]=h*f+p,n[5]=o*u,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*u,n[10]=p*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v4,e,y4)}lookAt(e,n,i){let s=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Fs.crossVectors(i,$n),Fs.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Fs.crossVectors(i,$n)),Fs.normalize(),wl.crossVectors($n,Fs),s[0]=Fs.x,s[4]=wl.x,s[8]=$n.x,s[1]=Fs.y,s[5]=wl.y,s[9]=$n.y,s[2]=Fs.z,s[6]=wl.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],p=i[6],x=i[10],m=i[14],b=i[3],S=i[7],y=i[11],M=i[15],A=s[0],w=s[4],T=s[8],v=s[12],_=s[1],R=s[5],D=s[9],L=s[13],N=s[2],B=s[6],F=s[10],W=s[14],V=s[3],K=s[7],ie=s[11],le=s[15];return r[0]=o*A+a*_+c*N+l*V,r[4]=o*w+a*R+c*B+l*K,r[8]=o*T+a*D+c*F+l*ie,r[12]=o*v+a*L+c*W+l*le,r[1]=u*A+f*_+h*N+d*V,r[5]=u*w+f*R+h*B+d*K,r[9]=u*T+f*D+h*F+d*ie,r[13]=u*v+f*L+h*W+d*le,r[2]=g*A+p*_+x*N+m*V,r[6]=g*w+p*R+x*B+m*K,r[10]=g*T+p*D+x*F+m*ie,r[14]=g*v+p*L+x*W+m*le,r[3]=b*A+S*_+y*N+M*V,r[7]=b*w+S*R+y*B+M*K,r[11]=b*T+S*D+y*F+M*ie,r[15]=b*v+S*L+y*W+M*le,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],p=e[7],x=e[11],m=e[15];return g*(+r*c*f-s*l*f-r*a*h+i*l*h+s*a*d-i*c*d)+p*(+n*c*d-n*l*h+r*o*h-s*o*d+s*l*u-r*c*u)+x*(+n*l*f-n*a*d-r*o*f+i*o*d+r*a*u-i*l*u)+m*(-s*a*u-n*c*f+n*a*h+s*o*f-i*o*h+i*c*u)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],p=e[13],x=e[14],m=e[15],b=f*x*l-p*h*l+p*c*d-a*x*d-f*c*m+a*h*m,S=g*h*l-u*x*l-g*c*d+o*x*d+u*c*m-o*h*m,y=u*p*l-g*f*l+g*a*d-o*p*d-u*a*m+o*f*m,M=g*f*c-u*p*c-g*a*h+o*p*h+u*a*x-o*f*x,A=n*b+i*S+s*y+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return e[0]=b*w,e[1]=(p*h*r-f*x*r-p*s*d+i*x*d+f*s*m-i*h*m)*w,e[2]=(a*x*r-p*c*r+p*s*l-i*x*l-a*s*m+i*c*m)*w,e[3]=(f*c*r-a*h*r-f*s*l+i*h*l+a*s*d-i*c*d)*w,e[4]=S*w,e[5]=(u*x*r-g*h*r+g*s*d-n*x*d-u*s*m+n*h*m)*w,e[6]=(g*c*r-o*x*r-g*s*l+n*x*l+o*s*m-n*c*m)*w,e[7]=(o*h*r-u*c*r+u*s*l-n*h*l-o*s*d+n*c*d)*w,e[8]=y*w,e[9]=(g*f*r-u*p*r-g*i*d+n*p*d+u*i*m-n*f*m)*w,e[10]=(o*p*r-g*a*r+g*i*l-n*p*l-o*i*m+n*a*m)*w,e[11]=(u*a*r-o*f*r-u*i*l+n*f*l+o*i*d-n*a*d)*w,e[12]=M*w,e[13]=(u*p*s-g*f*s+g*i*h-n*p*h-u*i*x+n*f*x)*w,e[14]=(g*a*s-o*p*s-g*i*c+n*p*c+o*i*x-n*a*x)*w,e[15]=(o*f*s-u*a*s+u*i*c-n*f*c-o*i*h+n*a*h)*w,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,p=o*u,x=o*f,m=a*f,b=c*l,S=c*u,y=c*f,M=i.x,A=i.y,w=i.z;return s[0]=(1-(p+m))*M,s[1]=(d+y)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(h+m))*A,s[6]=(x+b)*A,s[7]=0,s[8]=(g+S)*w,s[9]=(x-b)*w,s[10]=(1-(h+p))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=ro.set(s[0],s[1],s[2]).length(),o=ro.set(s[4],s[5],s[6]).length(),a=ro.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vi.copy(this);let l=1/r,u=1/o,f=1/a;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=f,vi.elements[9]*=f,vi.elements[10]*=f,n.setFromRotationMatrix(vi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,n,i,s,r,o,a=_i,c=!1){let l=this.elements,u=2*r/(n-e),f=2*r/(i-s),h=(n+e)/(n-e),d=(i+s)/(i-s),g,p;if(c)g=r/(o-r),p=o*r/(o-r);else if(a===_i)g=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===Va)g=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=_i,c=!1){let l=this.elements,u=2/(n-e),f=2/(i-s),h=-(n+e)/(n-e),d=-(i+s)/(i-s),g,p;if(c)g=1/(o-r),p=o/(o-r);else if(a===_i)g=-2/(o-r),p=-(o+r)/(o-r);else if(a===Va)g=-1/(o-r),p=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},ro=new q,vi=new Ht,v4=new q(0,0,0),y4=new q(1,1,1),Fs=new q,wl=new q,$n=new q,ox=new Ht,ax=new ri,Si=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ox,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ax.setFromEuler(this),this.setFromQuaternion(ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var $a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_4=0,cx=new q,oo=new ri,as=new Ht,Tl=new q,Fa=new q,b4=new q,S4=new ri,lx=new q(1,0,0),ux=new q(0,1,0),hx=new q(0,0,1),fx={type:"added"},E4={type:"removed"},ao={type:"childadded",child:null},vd={type:"childremoved",child:null},un=class t extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_4++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new q,n=new Si,i=new ri,s=new q(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ze}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(lx,e)}rotateY(e){return this.rotateOnAxis(ux,e)}rotateZ(e){return this.rotateOnAxis(hx,e)}translateOnAxis(e,n){return cx.copy(e).applyQuaternion(this.quaternion),this.position.add(cx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(lx,e)}translateY(e){return this.translateOnAxis(ux,e)}translateZ(e){return this.translateOnAxis(hx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(as.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Tl.copy(e):Tl.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?as.lookAt(Fa,Tl,this.up):as.lookAt(Tl,Fa,this.up),this.quaternion.setFromRotationMatrix(as),s&&(as.extractRotation(s.matrixWorld),oo.setFromRotationMatrix(as),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fx),ao.child=e,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(E4),vd.child=e,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),as.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),as.multiply(e.parent.matrixWorld)),e.applyMatrix4(as),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fx),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,b4),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,S4,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(n){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};un.DEFAULT_UP=new q(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=new q,cs=new q,yd=new q,ls=new q,co=new q,lo=new q,dx=new q,_d=new q,bd=new q,Sd=new q,Ed=new zt,Md=new zt,Ad=new zt,Bs=class t{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),yi.subVectors(e,n),s.cross(yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){yi.subVectors(s,n),cs.subVectors(i,n),yd.subVectors(e,n);let o=yi.dot(yi),a=yi.dot(cs),c=yi.dot(yd),l=cs.dot(cs),u=cs.dot(yd),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ls)===null?!1:ls.x>=0&&ls.y>=0&&ls.x+ls.y<=1}static getInterpolation(e,n,i,s,r,o,a,c){return this.getBarycoord(e,n,i,s,ls)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ls.x),c.addScaledVector(o,ls.y),c.addScaledVector(a,ls.z),c)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ed.setScalar(0),Md.setScalar(0),Ad.setScalar(0),Ed.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,i),Ad.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ed,r.x),o.addScaledVector(Md,r.y),o.addScaledVector(Ad,r.z),o}static isFrontFacing(e,n,i,s){return yi.subVectors(i,n),cs.subVectors(e,n),yi.cross(cs).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),cs.subVectors(this.a,this.b),yi.cross(cs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,o,a;co.subVectors(s,i),lo.subVectors(r,i),_d.subVectors(e,i);let c=co.dot(_d),l=lo.dot(_d);if(c<=0&&l<=0)return n.copy(i);bd.subVectors(e,s);let u=co.dot(bd),f=lo.dot(bd);if(u>=0&&f<=u)return n.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(co,o);Sd.subVectors(e,r);let d=co.dot(Sd),g=lo.dot(Sd);if(g>=0&&d<=g)return n.copy(r);let p=d*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(lo,a);let x=u*g-d*f;if(x<=0&&f-u>=0&&d-g>=0)return dx.subVectors(r,s),a=(f-u)/(f-u+(d-g)),n.copy(s).addScaledVector(dx,a);let m=1/(x+p+h);return o=p*m,a=h*m,n.copy(i).addScaledVector(co,o).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Os={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ut.workingColorSpace){if(e=sp(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=wd(o,r,e+1/3),this.g=wd(o,r,e),this.b=wd(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,n=Xn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){let i=pv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return ut.workingToColorSpace(pn.copy(this),e),Math.round(it(pn.r*255,0,255))*65536+Math.round(it(pn.g*255,0,255))*256+Math.round(it(pn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(pn.copy(this),n);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Xn){ut.workingToColorSpace(pn.copy(this),e);let n=pn.r,i=pn.g,s=pn.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Os),this.setHSL(Os.h+e,Os.s+n,Os.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Os),e.getHSL(Cl);let i=ka(Os.h,Cl.h,n),s=ka(Os.s,Cl.s,n),r=ka(Os.l,Cl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new et;et.NAMES=pv;var M4=0,ds=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M4++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=Sr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(n){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wa=class extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new q,Rl=new $e,A4=0,Yn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A4++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Od,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Rl.fromBufferAttribute(this,n),Rl.applyMatrix3(e),this.setXY(n,Rl.x,Rl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=bn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=po(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=po(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=po(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}};var Xa=class extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ya=class extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var gn=class extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}},w4=0,ni=new Ht,Td=new un,uo=new q,Wn=new Bi,Oa=new Bi,on=new q,oi=class t extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w4++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(op(e)?Ya:Xa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){let a=n[r];Oa.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Wn.min,Oa.min),Wn.expandByPoint(on),on.addVectors(Wn.max,Oa.max),Wn.expandByPoint(on)):(Wn.expandByPoint(Oa.min),Wn.expandByPoint(Oa.max))}Wn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(on));if(n)for(let r=0,o=n.length;r<o;r++){let a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)on.fromBufferAttribute(a,l),c&&(uo.fromBufferAttribute(e,l),on.add(uo)),s=Math.max(s,i.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<i.count;T++)a[T]=new q,c[T]=new q;let l=new q,u=new q,f=new q,h=new $e,d=new $e,g=new $e,p=new q,x=new q;function m(T,v,_){l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,_),h.fromBufferAttribute(r,T),d.fromBufferAttribute(r,v),g.fromBufferAttribute(r,_),u.sub(l),f.sub(l),d.sub(h),g.sub(h);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(p.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),x.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),a[T].add(p),a[v].add(p),a[_].add(p),c[T].add(x),c[v].add(x),c[_].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,v=b.length;T<v;++T){let _=b[T],R=_.start,D=_.count;for(let L=R,N=R+D;L<N;L+=3)m(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new q,y=new q,M=new q,A=new q;function w(T){M.fromBufferAttribute(s,T),A.copy(M);let v=a[T];S.copy(v),S.sub(M.multiplyScalar(M.dot(v))).normalize(),y.crossVectors(A,v);let R=y.dot(c[T])<0?-1:1;o.setXYZW(T,S.x,S.y,S.z,R)}for(let T=0,v=b.length;T<v;++T){let _=b[T],R=_.start,D=_.count;for(let L=R,N=R+D;L<N;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new q,r=new q,o=new q,a=new q,c=new q,l=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),p=e.getX(h+1),x=e.getX(h+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,p),o.fromBufferAttribute(n,x),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z)}else for(let h=0,d=n.count;h<d;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)on.fromBufferAttribute(e,n),on.normalize(),e.setXYZ(n,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let p=0,x=c.length;p<x;p++){a.isInterleavedBufferAttribute?d=c[p]*a.data.stride+a.offset:d=c[p]*u;for(let m=0;m<u;m++)h[g++]=l[d++]}return new Yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,i);n.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=e(h,i);c.push(d)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(n))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},px=new Ht,yr=new wr,Dl=new Ar,mx=new q,Pl=new q,Il=new q,Ll=new q,Cd=new q,Nl=new q,gx=new q,Fl=new q,Sn=class extends un{constructor(e=new oi,n=new Wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Nl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Cd.fromBufferAttribute(f,e),o?Nl.addScaledVector(Cd,u):Nl.addScaledVector(Cd.sub(n),u))}n.add(Nl)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(r),yr.copy(e.ray).recast(e.near),!(Dl.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Dl,mx)===null||yr.origin.distanceToSquared(mx)>(e.far-e.near)**2))&&(px.copy(r).invert(),yr.copy(e.ray).applyMatrix4(px),!(i.boundingBox!==null&&yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,yr)))}_computeIntersections(e,n,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,p=h.length;g<p;g++){let x=h[g],m=o[x.materialIndex],b=Math.max(x.start,d.start),S=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let y=b,M=S;y<M;y+=3){let A=a.getX(y),w=a.getX(y+1),T=a.getX(y+2);s=Ol(this,m,e,i,l,u,f,A,w,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let x=g,m=p;x<m;x+=3){let b=a.getX(x),S=a.getX(x+1),y=a.getX(x+2);s=Ol(this,o,e,i,l,u,f,b,S,y),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,p=h.length;g<p;g++){let x=h[g],m=o[x.materialIndex],b=Math.max(x.start,d.start),S=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let y=b,M=S;y<M;y+=3){let A=y,w=y+1,T=y+2;s=Ol(this,m,e,i,l,u,f,A,w,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{let g=Math.max(0,d.start),p=Math.min(c.count,d.start+d.count);for(let x=g,m=p;x<m;x+=3){let b=x,S=x+1,y=x+2;s=Ol(this,o,e,i,l,u,f,b,S,y),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}}};function T4(t,e,n,i,s,r,o,a){let c;if(e.side===En?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===fs,a),c===null)return null;Fl.copy(a),Fl.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(Fl);return l<n.near||l>n.far?null:{distance:l,point:Fl.clone(),object:t}}function Ol(t,e,n,i,s,r,o,a,c,l){t.getVertexPosition(a,Pl),t.getVertexPosition(c,Il),t.getVertexPosition(l,Ll);let u=T4(t,e,n,i,Pl,Il,Ll,gx);if(u){let f=new q;Bs.getBarycoord(gx,Pl,Il,Ll,f),s&&(u.uv=Bs.getInterpolatedAttribute(s,a,c,l,f,new $e)),r&&(u.uv1=Bs.getInterpolatedAttribute(r,a,c,l,f,new $e)),o&&(u.normal=Bs.getInterpolatedAttribute(o,a,c,l,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new q,materialIndex:0};Bs.getNormal(Pl,Il,Ll,h.normal),u.face=h,u.barycoord=f}return u}var _o=class t extends oi{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new gn(l,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(f,2));function g(p,x,m,b,S,y,M,A,w,T,v){let _=y/w,R=M/T,D=y/2,L=M/2,N=A/2,B=w+1,F=T+1,W=0,V=0,K=new q;for(let ie=0;ie<F;ie++){let le=ie*R-L;for(let Ce=0;Ce<B;Ce++){let Ke=Ce*_-D;K[p]=Ke*b,K[x]=le*S,K[m]=N,l.push(K.x,K.y,K.z),K[p]=0,K[x]=0,K[m]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(Ce/w),f.push(1-ie/T),W+=1}}for(let ie=0;ie<T;ie++)for(let le=0;le<w;le++){let Ce=h+le+B*ie,Ke=h+le+B*(ie+1),He=h+(le+1)+B*(ie+1),ke=h+(le+1)+B*ie;c.push(Ce,Ke,ke),c.push(Ke,He,ke),V+=6}a.addGroup(d,V,v),d+=V,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Pr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function xn(t){let e={};for(let n=0;n<t.length;n++){let i=Pr(t[n]);for(let s in i)e[s]=i[s]}return e}function C4(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ap(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var mv={clone:Pr,merge:xn},R4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R4,this.fragmentShader=D4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=C4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Za=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Us=new q,xx=new $e,vx=new $e,mn=class extends Za{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,n){return this.getViewBounds(e,xx,vx),n.subVectors(vx,xx)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},ho=-90,fo=1,jl=class extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(ho,fo,e,n);s.layers=this.layers,this.add(s);let r=new mn(ho,fo,e,n);r.layers=this.layers,this.add(r);let o=new mn(ho,fo,e,n);o.layers=this.layers,this.add(o);let a=new mn(ho,fo,e,n);a.layers=this.layers,this.add(a);let c=new mn(ho,fo,e,n);c.layers=this.layers,this.add(c);let l=new mn(ho,fo,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(let l of n)this.remove(l);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Va)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,o),e.setRenderTarget(i,2,s),e.render(n,a),e.setRenderTarget(i,3,s),e.render(n,c),e.setRenderTarget(i,4,s),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5,s),e.render(n,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ja=class extends Zn{constructor(e=[],n=Rr,i,s,r,o,a,c,l,u){super(e,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Jl=class extends Ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ja(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _o(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:ps});r.uniforms.tEquirect.value=n;let o=new Sn(s,r),a=n.minFilter;return n.minFilter===$s&&(n.minFilter=bi),new jl(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}},us=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},P4={type:"move"},bo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let p of e.hand.values()){let x=n.getJointPose(p,i),m=this._getHandJoint(l,p);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P4)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}};var Ja=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Rd=new q,I4=new q,L4=new Ze,ii=class{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Rd.subVectors(i,n).cross(I4.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Rd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||L4.getNormalMatrix(e),s=this.coplanarPoint(Rd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_r=new Ar,N4=new $e(.5,.5),Ul=new q,So=class{constructor(e=new ii,n=new ii,i=new ii,s=new ii,r=new ii,o=new ii){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],p=r[9],x=r[10],m=r[11],b=r[12],S=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-o,d-u,m-g,M-b).normalize(),s[1].setComponents(l+o,d+u,m+g,M+b).normalize(),s[2].setComponents(l+a,d+f,m+p,M+S).normalize(),s[3].setComponents(l-a,d-f,m-p,M-S).normalize(),i)s[4].setComponents(c,h,x,y).normalize(),s[5].setComponents(l-c,d-h,m-x,M-y).normalize();else if(s[4].setComponents(l-c,d-h,m-x,M-y).normalize(),n===_i)s[5].setComponents(l+c,d+h,m+x,M+y).normalize();else if(n===Va)s[5].setComponents(c,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);let n=N4.distanceTo(e.center);return _r.radius=.7071067811865476+n,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ul.x=s.normal.x>0?e.max.x:e.min.x,Ul.y=s.normal.y>0?e.max.y:e.min.y,Ul.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ka=class extends ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Kl=new q,Ql=new q,yx=new Ht,Ua=new wr,Bl=new Ar,Dd=new q,_x=new q,eu=class extends un{constructor(e=new oi,n=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Kl.fromBufferAttribute(n,s-1),Ql.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Kl.distanceTo(Ql);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;yx.copy(s).invert(),Ua.copy(e.ray).applyMatrix4(yx);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let p=d,x=g-1;p<x;p+=l){let m=u.getX(p),b=u.getX(p+1),S=kl(this,e,Ua,c,m,b,p);S&&n.push(S)}if(this.isLineLoop){let p=u.getX(g-1),x=u.getX(d),m=kl(this,e,Ua,c,p,x,g-1);m&&n.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let p=d,x=g-1;p<x;p+=l){let m=kl(this,e,Ua,c,p,p+1,p);m&&n.push(m)}if(this.isLineLoop){let p=kl(this,e,Ua,c,g-1,d,g-1);p&&n.push(p)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kl(t,e,n,i,s,r,o){let a=t.geometry.attributes.position;if(Kl.fromBufferAttribute(a,s),Ql.fromBufferAttribute(a,r),n.distanceSqToSegment(Kl,Ql,Dd,_x)>i)return;Dd.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(Dd);if(!(l<e.near||l>e.far))return{distance:l,point:_x.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}var bx=new q,Sx=new q,tu=class extends eu{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)bx.fromBufferAttribute(n,s),Sx.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bx.distanceTo(Sx);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qa=class extends Zn{constructor(e,n,i=Ws,s,r,o,a=si,c=si,l,u=go,f=1){if(u!==go&&u!==Co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:n,depth:f};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},ec=class extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Tr=class t extends oi{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,f=e/a,h=n/c,d=[],g=[],p=[],x=[];for(let m=0;m<u;m++){let b=m*h-o;for(let S=0;S<l;S++){let y=S*f-r;g.push(y,-b,0),p.push(0,0,1),x.push(S/a),x.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let S=b+l*m,y=b+l*(m+1),M=b+1+l*(m+1),A=b+1+l*m;d.push(S,y,A),d.push(y,M,A)}this.setIndex(d),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(p,3)),this.setAttribute("uv",new gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var Eo=class extends ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tp,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var nu=class extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},iu=class extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zl(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function F4(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Cr=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=n[++i],e<s)break t}o=n.length;break n}if(!(e>=r)){let a=n[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)n[o]=i[r+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},su=class extends Cr{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Id,endingEnd:Id}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ld:r=e,a=2*n-i;break;case Nd:r=s.length-2,a=n+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ld:o=e,c=2*i-n;break;case Nd:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=n}let l=(i-n)*.5,u=this.valueSize;this._weightPrev=l/(n-a),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-n)/(s-n),p=g*g,x=p*g,m=-h*x+2*h*p-h*g,b=(1+h)*x+(-1.5-2*h)*p+(-.5+h)*g+1,S=(-1-d)*x+(1.5+d)*p+.5*g,y=d*x-d*p;for(let M=0;M!==a;++M)r[M]=m*o[u+M]+b*o[l+M]+S*o[c+M]+y*o[f+M];return r}},ru=class extends Cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-n)/(s-n),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},ou=class extends Cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},jn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zl(n,this.TimeBufferType),this.values=zl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:zl(e.times,Array),values:zl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new su(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case za:n=this.InterpolantFactoryMethodDiscrete;break;case Wl:n=this.InterpolantFactoryMethodLinear;break;case ql:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return za;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>n;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&F4(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){let p=n[f+g];if(p!==n[h+g]||p!==n[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let d=0;d!==i;++d)n[h+d]=n[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)n[c+l]=n[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Wl;var qs=class extends jn{constructor(e,n,i){super(e,n,i)}};qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=za;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var au=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};au.prototype.ValueTypeName="color";var cu=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};cu.prototype.ValueTypeName="number";var lu=class extends Cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-n)/(s-n),l=e*a;for(let u=l+a;l!==u;l+=4)ri.slerpFlat(r,0,o,l-a,o,l,c);return r}},tc=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new lu(this.times,this.values,this.getValueSize(),e)}};tc.prototype.ValueTypeName="quaternion";tc.prototype.InterpolantFactoryMethodSmooth=void 0;var Vs=class extends jn{constructor(e,n,i){super(e,n,i)}};Vs.prototype.ValueTypeName="string";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=za;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var uu=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};uu.prototype.ValueTypeName="vector";var hu=class{constructor(e,n,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gv=new hu,fu=class{constructor(e){this.manager=e!==void 0?e:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};fu.DEFAULT_MATERIAL_NAME="__DEFAULT";var nc=class extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},ic=class extends nc{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}},Pd=new Ht,Ex=new q,Mx=new q,Ud=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new So,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;Ex.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ex),Mx.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Mx),n.updateMatrixWorld(),Pd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sc=class extends Za{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Bd=class extends Ud{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},rc=class extends nc{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Bd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var du=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var cp="\\[\\]\\.:\\/",O4=new RegExp("["+cp+"]","g"),lp="[^"+cp+"]",U4="[^"+cp.replace("\\.","")+"]",B4=/((?:WC+[\/:])*)/.source.replace("WC",lp),k4=/(WCOD+)?/.source.replace("WCOD",U4),z4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lp),q4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lp),V4=new RegExp("^"+B4+k4+z4+q4+"$"),G4=["material","materials","bones","map"],kd=class{constructor(e,n,i){let s=i||Pt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Pt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O4,"")}static parseTrackName(e){let n=V4.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);G4.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===n||a.uuid===n)return a;let c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=kd;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rfe=new Float32Array(1);var Mo=class{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var oc=class extends tu{constructor(e=10,n=10,i=4473924,s=8947848){i=new et(i),s=new et(s);let r=n/2,o=e/n,a=e/2,c=[],l=[];for(let h=0,d=0,g=-a;h<=n;h++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let p=h===r?i:s;p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3,p.toArray(l,d),d+=3}let u=new oi;u.setAttribute("position",new gn(c,3)),u.setAttribute("color",new gn(l,3));let f=new Ka({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var ac=class extends Oi{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function up(t,e,n,i){let s=H4(i);switch(n){case Jd:return t*e;case Qd:return t*e/s.components*s.byteLength;case Tu:return t*e/s.components*s.byteLength;case ep:return t*e*2/s.components*s.byteLength;case Cu:return t*e*2/s.components*s.byteLength;case Kd:return t*e*3/s.components*s.byteLength;case ci:return t*e*4/s.components*s.byteLength;case Ru:return t*e*4/s.components*s.byteLength;case uc:case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fc:case dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pu:case Lu:return Math.max(t,16)*Math.max(e,8)/4;case Du:case Iu:return Math.max(t,8)*Math.max(e,8)/2;case Nu:case Fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ku:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case $u:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ju:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ju:case Ku:case Qu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(t/4)*Math.ceil(e/4)*8;case nh:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function H4(t){switch(t){case Mi:case Xd:return{byteLength:1,components:1};case Ao:case Yd:case wo:return{byteLength:2,components:1};case Au:case wu:return{byteLength:2,components:4};case Ws:case Mu:case zi:return{byteLength:4,components:1};case Zd:case jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zv(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function W4(t){let e=new WeakMap;function n(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=t.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=t.SHORT;else if(l instanceof Uint32Array)d=t.UNSIGNED_INT;else if(l instanceof Int32Array)d=t.INT;else if(l instanceof Int8Array)d=t.BYTE;else if(l instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){let u=c.array,f=c.updateRanges;if(t.bindBuffer(l,a),f.length===0)t.bufferSubData(l,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],p=f[d];p.start<=g.start+g.count+1?g.count=Math.max(g.count,p.start+p.count-g.start):(++h,f[h]=p)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let p=f[d];t.bufferSubData(l,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var X4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Z4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tU=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rU=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oU=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,aU=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mU=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gU=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xU=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vU=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_U=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EU="gl_FragColor = linearToOutputTexel( gl_FragColor );",MU=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TU=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RU=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NU=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kU=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$U=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,WU=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XU=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jU=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KU=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QU=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eB=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tB=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nB=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iB=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sB=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rB=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oB=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aB=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cB=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lB=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uB=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hB=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dB=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pB=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mB=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gB=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xB=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vB=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yB=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_B=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bB=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SB=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EB=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MB=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AB=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wB=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TB=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CB=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RB=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DB=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PB=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IB=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LB=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NB=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FB=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OB=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UB=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BB=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kB=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zB=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qB=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HB=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$B=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,WB=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XB=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZB=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jB=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JB=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KB=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QB=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ek=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tk=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ik=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sk=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rk=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ok=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ak=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ck=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lk=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uk=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hk=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fk=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dk=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pk=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mk=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gk=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xk=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vk=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yk=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_k=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bk=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sk=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ek=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mk=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ak=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:X4,alphahash_pars_fragment:Y4,alphamap_fragment:Z4,alphamap_pars_fragment:j4,alphatest_fragment:J4,alphatest_pars_fragment:K4,aomap_fragment:Q4,aomap_pars_fragment:eU,batching_pars_vertex:tU,batching_vertex:nU,begin_vertex:iU,beginnormal_vertex:sU,bsdfs:rU,iridescence_fragment:oU,bumpmap_pars_fragment:aU,clipping_planes_fragment:cU,clipping_planes_pars_fragment:lU,clipping_planes_pars_vertex:uU,clipping_planes_vertex:hU,color_fragment:fU,color_pars_fragment:dU,color_pars_vertex:pU,color_vertex:mU,common:gU,cube_uv_reflection_fragment:xU,defaultnormal_vertex:vU,displacementmap_pars_vertex:yU,displacementmap_vertex:_U,emissivemap_fragment:bU,emissivemap_pars_fragment:SU,colorspace_fragment:EU,colorspace_pars_fragment:MU,envmap_fragment:AU,envmap_common_pars_fragment:wU,envmap_pars_fragment:TU,envmap_pars_vertex:CU,envmap_physical_pars_fragment:kU,envmap_vertex:RU,fog_vertex:DU,fog_pars_vertex:PU,fog_fragment:IU,fog_pars_fragment:LU,gradientmap_pars_fragment:NU,lightmap_pars_fragment:FU,lights_lambert_fragment:OU,lights_lambert_pars_fragment:UU,lights_pars_begin:BU,lights_toon_fragment:zU,lights_toon_pars_fragment:qU,lights_phong_fragment:VU,lights_phong_pars_fragment:GU,lights_physical_fragment:HU,lights_physical_pars_fragment:$U,lights_fragment_begin:WU,lights_fragment_maps:XU,lights_fragment_end:YU,logdepthbuf_fragment:ZU,logdepthbuf_pars_fragment:jU,logdepthbuf_pars_vertex:JU,logdepthbuf_vertex:KU,map_fragment:QU,map_pars_fragment:eB,map_particle_fragment:tB,map_particle_pars_fragment:nB,metalnessmap_fragment:iB,metalnessmap_pars_fragment:sB,morphinstance_vertex:rB,morphcolor_vertex:oB,morphnormal_vertex:aB,morphtarget_pars_vertex:cB,morphtarget_vertex:lB,normal_fragment_begin:uB,normal_fragment_maps:hB,normal_pars_fragment:fB,normal_pars_vertex:dB,normal_vertex:pB,normalmap_pars_fragment:mB,clearcoat_normal_fragment_begin:gB,clearcoat_normal_fragment_maps:xB,clearcoat_pars_fragment:vB,iridescence_pars_fragment:yB,opaque_fragment:_B,packing:bB,premultiplied_alpha_fragment:SB,project_vertex:EB,dithering_fragment:MB,dithering_pars_fragment:AB,roughnessmap_fragment:wB,roughnessmap_pars_fragment:TB,shadowmap_pars_fragment:CB,shadowmap_pars_vertex:RB,shadowmap_vertex:DB,shadowmask_pars_fragment:PB,skinbase_vertex:IB,skinning_pars_vertex:LB,skinning_vertex:NB,skinnormal_vertex:FB,specularmap_fragment:OB,specularmap_pars_fragment:UB,tonemapping_fragment:BB,tonemapping_pars_fragment:kB,transmission_fragment:zB,transmission_pars_fragment:qB,uv_pars_fragment:VB,uv_pars_vertex:GB,uv_vertex:HB,worldpos_vertex:$B,background_vert:WB,background_frag:XB,backgroundCube_vert:YB,backgroundCube_frag:ZB,cube_vert:jB,cube_frag:JB,depth_vert:KB,depth_frag:QB,distanceRGBA_vert:ek,distanceRGBA_frag:tk,equirect_vert:nk,equirect_frag:ik,linedashed_vert:sk,linedashed_frag:rk,meshbasic_vert:ok,meshbasic_frag:ak,meshlambert_vert:ck,meshlambert_frag:lk,meshmatcap_vert:uk,meshmatcap_frag:hk,meshnormal_vert:fk,meshnormal_frag:dk,meshphong_vert:pk,meshphong_frag:mk,meshphysical_vert:gk,meshphysical_frag:xk,meshtoon_vert:vk,meshtoon_frag:yk,points_vert:_k,points_frag:bk,shadow_vert:Sk,shadow_frag:Ek,sprite_vert:Mk,sprite_frag:Ak},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},qi={basic:{uniforms:xn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:xn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:xn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:xn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:xn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:xn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:xn([ue.points,ue.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:xn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:xn([ue.common,ue.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:xn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:xn([ue.sprite,ue.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:xn([ue.common,ue.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:xn([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};qi.physical={uniforms:xn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var sh={r:0,b:0,g:0},Ir=new Si,wk=new Ht;function Tk(t,e,n,i,s,r,o){let a=new et(0),c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?n:e).get(y)),y}function p(S){let y=!1,M=g(S);M===null?m(a,c):M&&M.isColor&&(m(M,1),y=!0);let A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(S,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===cc)?(u===void 0&&(u=new Sn(new _o(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Pr(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ir.copy(y.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wk.makeRotationFromEuler(Ir)),u.material.toneMapped=ut.getTransfer(M.colorSpace)!==vt,(f!==M||h!==M.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Sn(new Tr(2,2),new Ei({name:"BackgroundMaterial",uniforms:Pr(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,y){S.getRGB(sh,ap(t)),i.buffers.color.setClear(sh.r,sh.g,sh.b,y,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(a,c)},render:p,addToRenderList:x,dispose:b}}function Ck(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(_,R,D,L,N){let B=!1,F=f(L,D,R);r!==F&&(r=F,l(r.object)),B=d(_,L,D,N),B&&g(_,L,D,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(_,R,D,L),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return t.createVertexArray()}function l(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,R,D){let L=D.wireframe===!0,N=i[_.id];N===void 0&&(N={},i[_.id]=N);let B=N[R.id];B===void 0&&(B={},N[R.id]=B);let F=B[L];return F===void 0&&(F=h(c()),B[L]=F),F}function h(_){let R=[],D=[],L=[];for(let N=0;N<n;N++)R[N]=0,D[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:L,object:_,attributes:{},index:null}}function d(_,R,D,L){let N=r.attributes,B=R.attributes,F=0,W=D.getAttributes();for(let V in W)if(W[V].location>=0){let ie=N[V],le=B[V];if(le===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function g(_,R,D,L){let N={},B=R.attributes,F=0,W=D.getAttributes();for(let V in W)if(W[V].location>=0){let ie=B[V];ie===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor));let le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),N[V]=le,F++}r.attributes=N,r.attributesNum=F,r.index=L}function p(){let _=r.newAttributes;for(let R=0,D=_.length;R<D;R++)_[R]=0}function x(_){m(_,0)}function m(_,R){let D=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;D[_]=1,L[_]===0&&(t.enableVertexAttribArray(_),L[_]=1),N[_]!==R&&(t.vertexAttribDivisor(_,R),N[_]=R)}function b(){let _=r.newAttributes,R=r.enabledAttributes;for(let D=0,L=R.length;D<L;D++)R[D]!==_[D]&&(t.disableVertexAttribArray(D),R[D]=0)}function S(_,R,D,L,N,B,F){F===!0?t.vertexAttribIPointer(_,R,D,N,B):t.vertexAttribPointer(_,R,D,L,N,B)}function y(_,R,D,L){p();let N=L.attributes,B=D.getAttributes(),F=R.defaultAttributeValues;for(let W in B){let V=B[W];if(V.location>=0){let K=N[W];if(K===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){let ie=K.normalized,le=K.itemSize,Ce=e.get(K);if(Ce===void 0)continue;let Ke=Ce.buffer,He=Ce.type,ke=Ce.bytesPerElement,Z=He===t.INT||He===t.UNSIGNED_INT||K.gpuType===Mu;if(K.isInterleavedBufferAttribute){let Q=K.data,pe=Q.stride,ze=K.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee,Q.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)x(V.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Ee=0;Ee<V.locationSize;Ee++)S(V.location+Ee,le/V.locationSize,He,ie,pe*ke,(ze+le/V.locationSize*Ee)*ke,Z)}else{if(K.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q,K.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Q=0;Q<V.locationSize;Q++)x(V.location+Q);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Q=0;Q<V.locationSize;Q++)S(V.location+Q,le/V.locationSize,He,ie,le*ke,le/V.locationSize*Q*ke,Z)}}else if(F!==void 0){let ie=F[W];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(V.location,ie);break;case 3:t.vertexAttrib3fv(V.location,ie);break;case 4:t.vertexAttrib4fv(V.location,ie);break;default:t.vertexAttrib1fv(V.location,ie)}}}}b()}function M(){T();for(let _ in i){let R=i[_];for(let D in R){let L=R[D];for(let N in L)u(L[N].object),delete L[N];delete R[D]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;let R=i[_.id];for(let D in R){let L=R[D];for(let N in L)u(L[N].object),delete L[N];delete R[D]}delete i[_.id]}function w(_){for(let R in i){let D=i[R];if(D[_.id]===void 0)continue;let L=D[_.id];for(let N in L)u(L[N].object),delete L[N];delete D[_.id]}}function T(){v(),o=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:v,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:p,enableAttribute:x,disableUnusedAttributes:b}}function Rk(t,e,n){let i;function s(l){i=l}function r(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,f){f!==0&&(t.drawArraysInstanced(i,l,u,f),n.update(u,i,f))}function a(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];n.update(d,i,1)}function c(l,u,f,h){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,h,0,f);let g=0;for(let p=0;p<f;p++)g+=u[p]*h[p];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Dk(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ci&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let T=w===wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Mi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zi&&!T)}function c(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:p,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:M,maxSamples:A}}function Pk(t){let e=this,n=null,i=0,s=!1,r=!1,o=new ii,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,p=f.clipIntersection,x=f.clipShadows,m=t.get(f);if(!s||g===null||g.length===0||r&&!x)r?u(null):l();else{let b=r?0:i,S=b*4,y=m.clippingState||null;c.value=y,y=u(g,h,S,d);for(let M=0;M!==S;++M)y[M]=n[M];m.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){let p=f!==null?f.length:0,x=null;if(p!==0){if(x=c.value,g!==!0||x===null){let m=d+p*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(x===null||x.length<m)&&(x=new Float32Array(m));for(let S=0,y=d;S!==p;++S,y+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(x,y),x[y+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,x}}function Ik(t){let e=new WeakMap;function n(o,a){return a===bu?o.mapping=Rr:a===Su&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===bu||a===Su)if(e.has(o)){let c=e.get(o).texture;return n(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Jl(c.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Po=4,xv=[.125,.215,.35,.446,.526,.582],Fr=20,hp=new sc,vv=new et,fp=null,dp=0,pp=0,mp=!1,Nr=(1+Math.sqrt(5))/2,Do=1/Nr,yv=[new q(-Nr,Do,0),new q(Nr,Do,0),new q(-Do,0,Nr),new q(Do,0,Nr),new q(0,Nr,-Do),new q(0,Nr,Do),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],Lk=new q,ah=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100,r={}){let{size:o=256,position:a=Lk}=r;fp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fp,dp,pp),this._renderer.xr.enabled=mp,e.scissorTest=!1,rh(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rr||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fp=this._renderer.getRenderTarget(),dp=this._renderer.getActiveCubeFace(),pp=this._renderer.getActiveMipmapLevel(),mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:wo,format:ci,colorSpace:Mr,depthBuffer:!1},s=_v(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_v(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nk(r)),this._blurMaterial=Fk(r,e,n)}return s}_compileMaterial(e){let n=new Sn(this._lodPlanes[0],e);this._renderer.compile(n,hp)}_sceneToCubeUV(e,n,i,s,r){let c=new mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(vv),f.toneMapping=ms,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let p=new Wa({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),x=new Sn(new _o,p),m=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(vv),m=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));let M=this._cubeSize;rh(s,y*M,S>2?M:0,M,M),f.setRenderTarget(s),m&&f.render(x,c),f.render(e,c)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=b}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Rr||e.mapping===Dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;rh(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,hp)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=yv[(s-r-1)%yv.length];this._blur(e,r-1,r,o,a)}n.autoClear=i}_blur(e,n,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Sn(this._lodPlanes[s],l),h=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fr-1),p=r/g,x=isFinite(r)?1+Math.floor(u*p):Fr;x>Fr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Fr}`);let m=[],b=0;for(let w=0;w<Fr;++w){let T=w/p,v=Math.exp(-T*T/2);m.push(v),w===0?b+=v:w<x&&(b+=2*v)}for(let w=0;w<m.length;w++)m[w]=m[w]/b;h.envMap.value=e.texture,h.samples.value=x,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-i;let y=this._sizeLods[s],M=3*y*(s>S-Po?s-S+Po:0),A=4*(this._cubeSize-y);rh(n,M,A,3*y,2*y),c.setRenderTarget(n),c.render(f,hp)}};function Nk(t){let e=[],n=[],i=[],s=t,r=t-Po+1+xv.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);n.push(a);let c=1/a;o>t-Po?c=xv[o-t+Po-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,p=3,x=2,m=1,b=new Float32Array(p*g*d),S=new Float32Array(x*g*d),y=new Float32Array(m*g*d);for(let A=0;A<d;A++){let w=A%3*2/3-1,T=A>2?0:-1,v=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];b.set(v,p*g*A),S.set(h,x*g*A);let _=[A,A,A,A,A,A];y.set(_,m*g*A)}let M=new oi;M.setAttribute("position",new Yn(b,p)),M.setAttribute("uv",new Yn(S,x)),M.setAttribute("faceIndex",new Yn(y,m)),e.push(M),s>Po&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _v(t,e,n){let i=new Ui(t,e,n);return i.texture.mapping=cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rh(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Fk(t,e,n){let i=new Float32Array(Fr),s=new q(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function bv(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Sv(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ap(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ps,depthTest:!1,depthWrite:!1})}function Ap(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ok(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===bu||c===Su,u=c===Rr||c===Dr;if(l||u){let f=e.get(a),h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new ah(t)),f=l?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(n===null&&(n=new ah(t)),f=l?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Uk(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&vo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bk(t,e,n,i){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)e.update(h[d],t.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,g=f.attributes.position,p=0;if(d!==null){let b=d.array;p=d.version;for(let S=0,y=b.length;S<y;S+=3){let M=b[S+0],A=b[S+1],w=b[S+2];h.push(M,A,A,w,w,M)}}else if(g!==void 0){let b=g.array;p=g.version;for(let S=0,y=b.length/3-1;S<y;S+=3){let M=S+0,A=S+1,w=S+2;h.push(M,A,A,w,w,M)}}else return;let x=new(op(h)?Ya:Xa)(h,1);x.version=p;let m=r.get(f);m&&e.remove(m),r.set(f,x)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function kk(t,e,n){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function c(h,d){t.drawElements(i,d,r,h*o),n.update(d,i,1)}function l(h,d,g){g!==0&&(t.drawElementsInstanced(i,d,r,h*o,g),n.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,g);let x=0;for(let m=0;m<g;m++)x+=d[m];n.update(x,i,1)}function f(h,d,g,p){if(g===0)return;let x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<h.length;m++)l(h[m]/o,d[m],p[m]);else{x.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,p,0,g);let m=0;for(let b=0;b<g;b++)m+=d[b]*p[b];n.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zk(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function qk(t,e,n){let i=new WeakMap,s=new zt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==f){let v=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",v)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let y=a.attributes.position.count*S,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*M*4*f),w=new Ha(A,y,M,f);w.type=zi,w.needsUpdate=!0;let T=S*4;for(let _=0;_<f;_++){let R=x[_],D=m[_],L=b[_],N=y*M*4*_;for(let B=0;B<R.count;B++){let F=B*T;d===!0&&(s.fromBufferAttribute(R,B),A[N+F+0]=s.x,A[N+F+1]=s.y,A[N+F+2]=s.z,A[N+F+3]=0),g===!0&&(s.fromBufferAttribute(D,B),A[N+F+4]=s.x,A[N+F+5]=s.y,A[N+F+6]=s.z,A[N+F+7]=0),p===!0&&(s.fromBufferAttribute(L,B),A[N+F+8]=s.x,A[N+F+9]=s.y,A[N+F+10]=s.z,A[N+F+11]=L.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new $e(y,M)},i.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let d=0;for(let p=0;p<l.length;p++)d+=l[p];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(t,"morphTargetBaseInfluence",g),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function Vk(t,e,n,i){let s=new WeakMap;function r(c){let l=i.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}var qv=new Zn,Ev=new Qa(1,1),Vv=new Ha,Gv=new Zl,Hv=new ja,Mv=[],Av=[],wv=new Float32Array(16),Tv=new Float32Array(9),Cv=new Float32Array(4);function Lo(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Mv[s];if(r===void 0&&(r=new Float32Array(s),Mv[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lh(t,e){let n=Av[e];n===void 0&&(n=new Int32Array(e),Av[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Gk(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Hk(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function $k(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function Wk(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function Xk(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;Cv.set(i),t.uniformMatrix2fv(this.addr,!1,Cv),tn(n,i)}}function Yk(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;Tv.set(i),t.uniformMatrix3fv(this.addr,!1,Tv),tn(n,i)}}function Zk(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;wv.set(i),t.uniformMatrix4fv(this.addr,!1,wv),tn(n,i)}}function jk(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Jk(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function Kk(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function Qk(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function ez(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tz(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function nz(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function iz(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function sz(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Ev.compareFunction=np,r=Ev):r=qv,n.setTexture2D(e||r,s)}function rz(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Gv,s)}function oz(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Hv,s)}function az(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Vv,s)}function cz(t){switch(t){case 5126:return Gk;case 35664:return Hk;case 35665:return $k;case 35666:return Wk;case 35674:return Xk;case 35675:return Yk;case 35676:return Zk;case 5124:case 35670:return jk;case 35667:case 35671:return Jk;case 35668:case 35672:return Kk;case 35669:case 35673:return Qk;case 5125:return ez;case 36294:return tz;case 36295:return nz;case 36296:return iz;case 35678:case 36198:case 36298:case 36306:case 35682:return sz;case 35679:case 36299:case 36307:return rz;case 35680:case 36300:case 36308:case 36293:return oz;case 36289:case 36303:case 36311:case 36292:return az}}function lz(t,e){t.uniform1fv(this.addr,e)}function uz(t,e){let n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function hz(t,e){let n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function fz(t,e){let n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function dz(t,e){let n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pz(t,e){let n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mz(t,e){let n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gz(t,e){t.uniform1iv(this.addr,e)}function xz(t,e){t.uniform2iv(this.addr,e)}function vz(t,e){t.uniform3iv(this.addr,e)}function yz(t,e){t.uniform4iv(this.addr,e)}function _z(t,e){t.uniform1uiv(this.addr,e)}function bz(t,e){t.uniform2uiv(this.addr,e)}function Sz(t,e){t.uniform3uiv(this.addr,e)}function Ez(t,e){t.uniform4uiv(this.addr,e)}function Mz(t,e,n){let i=this.cache,s=e.length,r=lh(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTexture2D(e[o]||qv,r[o])}function Az(t,e,n){let i=this.cache,s=e.length,r=lh(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Gv,r[o])}function wz(t,e,n){let i=this.cache,s=e.length,r=lh(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Hv,r[o])}function Tz(t,e,n){let i=this.cache,s=e.length,r=lh(n,s);en(i,r)||(t.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Vv,r[o])}function Cz(t){switch(t){case 5126:return lz;case 35664:return uz;case 35665:return hz;case 35666:return fz;case 35674:return dz;case 35675:return pz;case 35676:return mz;case 5124:case 35670:return gz;case 35667:case 35671:return xz;case 35668:case 35672:return vz;case 35669:case 35673:return yz;case 5125:return _z;case 36294:return bz;case 36295:return Sz;case 36296:return Ez;case 35678:case 36198:case 36298:case 36306:case 35682:return Mz;case 35679:case 36299:case 36307:return Az;case 35680:case 36300:case 36308:case 36293:return wz;case 36289:case 36303:case 36311:case 36292:return Tz}}var xp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cz(n.type)}},vp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Cz(n.type)}},yp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,n[a.id],i)}}},gp=/(\w+)(\])?(\[|\.)?/g;function Rv(t,e){t.seq.push(e),t.map[e.id]=e}function Rz(t,e,n){let i=t.name,s=i.length;for(gp.lastIndex=0;;){let r=gp.exec(i),o=gp.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rv(n,l===void 0?new xp(a,t,e):new vp(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new yp(a),Rv(n,f)),n=f}}}var Io=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),o=e.getUniformLocation(n,r.name);Rz(r,o,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){let a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in n&&i.push(o)}return i}};function Dv(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Dz=37297,Pz=0;function Iz(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Pv=new Ze;function Lz(t){ut._getMatrix(Pv,ut.workingColorSpace,t);let e=`mat3( ${Pv.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case qa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Iv(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Iz(t.getShaderSource(e),a)}else return r}function Nz(t,e){let n=Lz(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Fz(t,e){let n;switch(e){case Yx:n="Linear";break;case Zx:n="Reinhard";break;case jx:n="Cineon";break;case Jx:n="ACESFilmic";break;case Qx:n="AgX";break;case ev:n="Neutral";break;case Kx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var oh=new q;function Oz(){ut.getLuminanceCoefficients(oh);let t=oh.x.toFixed(4),e=oh.y.toFixed(4),n=oh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uz(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pc).join(`
`)}function Bz(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kz(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),o=r.name,a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function pc(t){return t!==""}function Lv(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zz=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(t){return t.replace(zz,Vz)}var qz=new Map;function Vz(t,e){let n=tt[e];if(n===void 0){let i=qz.get(e);if(i!==void 0)n=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _p(n)}var Gz=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(t){return t.replace(Gz,Hz)}function Hz(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ov(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $z(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Tx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Wz(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rr:case Dr:e="ENVMAP_TYPE_CUBE";break;case cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xz(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yz(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case $d:e="ENVMAP_BLENDING_MULTIPLY";break;case Wx:e="ENVMAP_BLENDING_MIX";break;case Xx:e="ENVMAP_BLENDING_ADD";break}return e}function Zz(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function jz(t,e,n,i){let s=t.getContext(),r=n.defines,o=n.vertexShader,a=n.fragmentShader,c=$z(n),l=Wz(n),u=Xz(n),f=Yz(n),h=Zz(n),d=Uz(n),g=Bz(r),p=s.createProgram(),x,m,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(pc).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(pc).join(`
`),m.length>0&&(m+=`
`)):(x=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pc).join(`
`),m=[Ov(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ms?"#define TONE_MAPPING":"",n.toneMapping!==ms?tt.tonemapping_pars_fragment:"",n.toneMapping!==ms?Fz("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Nz("linearToOutputTexel",n.outputColorSpace),Oz(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pc).join(`
`)),o=_p(o),o=Lv(o,n),o=Nv(o,n),a=_p(a),a=Lv(a,n),a=Nv(a,n),o=Fv(o),a=Fv(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",n.glslVersion===ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=b+x+o,y=b+m+a,M=Dv(s,s.VERTEX_SHADER,S),A=Dv(s,s.FRAGMENT_SHADER,y);s.attachShader(p,M),s.attachShader(p,A),n.index0AttributeName!==void 0?s.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(R){if(t.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",L=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(A)||"",B=D.trim(),F=L.trim(),W=N.trim(),V=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,p,M,A);else{let ie=Iv(s,M,"vertex"),le=Iv(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ie+`
`+le)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||W==="")&&(K=!1);K&&(R.diagnostics={runnable:V,programLog:B,vertexShader:{log:F,prefix:x},fragmentShader:{log:W,prefix:m}})}s.deleteShader(M),s.deleteShader(A),T=new Io(s,p),v=kz(s,p)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(p,Dz)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pz++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}var Jz=0,bp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Sp(e),n.set(e,i)),i}},Sp=class{constructor(e){this.id=Jz++,this.code=e,this.usedTimes=0}};function Kz(t,e,n,i,s,r,o){let a=new $a,c=new bp,l=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,_,R,D,L){let N=D.fog,B=L.geometry,F=v.isMeshStandardMaterial?D.environment:null,W=(v.isMeshStandardMaterial?n:e).get(v.envMap||F),V=W&&W.mapping===cc?W.image.height:null,K=g[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=ie!==void 0?ie.length:0,Ce=0;B.morphAttributes.position!==void 0&&(Ce=1),B.morphAttributes.normal!==void 0&&(Ce=2),B.morphAttributes.color!==void 0&&(Ce=3);let Ke,He,ke,Z;if(K){let pt=qi[K];Ke=pt.vertexShader,He=pt.fragmentShader}else Ke=v.vertexShader,He=v.fragmentShader,c.update(v),ke=c.getVertexShaderID(v),Z=c.getFragmentShaderID(v);let Q=t.getRenderTarget(),pe=t.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,ot=!!v.map,Qt=!!v.matcap,O=!!W,St=!!v.aoMap,Ye=!!v.lightMap,qe=!!v.bumpMap,_e=!!v.normalMap,Nt=!!v.displacementMap,be=!!v.emissiveMap,Qe=!!v.metalnessMap,rn=!!v.roughnessMap,$t=v.anisotropy>0,I=v.clearcoat>0,C=v.dispersion>0,G=v.iridescence>0,Y=v.sheen>0,ee=v.transmission>0,X=$t&&!!v.anisotropyMap,Re=I&&!!v.clearcoatMap,oe=I&&!!v.clearcoatNormalMap,Me=I&&!!v.clearcoatRoughnessMap,Ae=G&&!!v.iridescenceMap,se=G&&!!v.iridescenceThicknessMap,de=Y&&!!v.sheenColorMap,Ue=Y&&!!v.sheenRoughnessMap,we=!!v.specularMap,he=!!v.specularColorMap,je=!!v.specularIntensityMap,U=ee&&!!v.transmissionMap,re=ee&&!!v.thicknessMap,ae=!!v.gradientMap,ge=!!v.alphaMap,te=v.alphaTest>0,j=!!v.alphaHash,ye=!!v.extensions,Xe=ms;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xe=t.toneMapping);let Ct={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Ke,fragmentShader:He,defines:v.defines,customVertexShaderID:ke,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?t.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Mr,alphaToCoverage:!!v.alphaToCoverage,map:ot,matcap:Qt,envMap:O,envMapMode:O&&W.mapping,envMapCubeUVHeight:V,aoMap:St,lightMap:Ye,bumpMap:qe,normalMap:_e,displacementMap:h&&Nt,emissiveMap:be,normalMapObjectSpace:_e&&v.normalMapType===sv,normalMapTangentSpace:_e&&v.normalMapType===tp,metalnessMap:Qe,roughnessMap:rn,anisotropy:$t,anisotropyMap:X,clearcoat:I,clearcoatMap:Re,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:C,iridescence:G,iridescenceMap:Ae,iridescenceThicknessMap:se,sheen:Y,sheenColorMap:de,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:he,specularIntensityMap:je,transmission:ee,transmissionMap:U,thicknessMap:re,gradientMap:ae,opaque:v.transparent===!1&&v.blending===Sr&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:j,combine:v.combine,mapUv:ot&&p(v.map.channel),aoMapUv:St&&p(v.aoMap.channel),lightMapUv:Ye&&p(v.lightMap.channel),bumpMapUv:qe&&p(v.bumpMap.channel),normalMapUv:_e&&p(v.normalMap.channel),displacementMapUv:Nt&&p(v.displacementMap.channel),emissiveMapUv:be&&p(v.emissiveMap.channel),metalnessMapUv:Qe&&p(v.metalnessMap.channel),roughnessMapUv:rn&&p(v.roughnessMap.channel),anisotropyMapUv:X&&p(v.anisotropyMap.channel),clearcoatMapUv:Re&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&p(v.sheenRoughnessMap.channel),specularMapUv:we&&p(v.specularMap.channel),specularColorMapUv:he&&p(v.specularColorMap.channel),specularIntensityMapUv:je&&p(v.specularIntensityMap.channel),transmissionMapUv:U&&p(v.transmissionMap.channel),thicknessMapUv:re&&p(v.thicknessMap.channel),alphaMapUv:ge&&p(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(_e||$t),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(ot||ge),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ot&&v.map.isVideoTexture===!0&&ut.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:be&&v.emissiveMap.isVideoTexture===!0&&ut.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ai,flipSided:v.side===En,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(v){let _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)_.push(R),_.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(b(_,v),S(_,v),_.push(t.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function b(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function S(v,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),v.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){let _=g[v.type],R;if(_){let D=qi[_];R=mv.clone(D.uniforms)}else R=v.uniforms;return R}function M(v,_){let R;for(let D=0,L=u.length;D<L;D++){let N=u[D];if(N.cacheKey===_){R=N,++R.usedTimes;break}}return R===void 0&&(R=new jz(t,_,v,r),u.push(R)),R}function A(v){if(--v.usedTimes===0){let _=u.indexOf(v);u[_]=u[u.length-1],u.pop(),v.destroy()}}function w(v){c.remove(v)}function T(){c.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:T}}function Qz(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,c){t.get(o)[a]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function e8(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bv(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(f,h,d,g,p,x){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:p,group:x},t[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=p,m.group=x),e++,m}function a(f,h,d,g,p,x){let m=o(f,h,d,g,p,x);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):n.push(m)}function c(f,h,d,g,p,x){let m=o(f,h,d,g,p,x);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):n.unshift(m)}function l(f,h){n.length>1&&n.sort(f||e8),i.length>1&&i.sort(h||Uv),s.length>1&&s.sort(h||Uv)}function u(){for(let f=e,h=t.length;f<h;f++){let d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function t8(){let t=new WeakMap;function e(i,s){let r=t.get(i),o;return r===void 0?(o=new Bv,t.set(i,[o])):s>=r.length?(o=new Bv,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function n8(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new q,color:new et};break;case"SpotLight":n={position:new q,direction:new q,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function i8(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var s8=0;function r8(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o8(t){let e=new n8,n=i8(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new q);let s=new q,r=new Ht,o=new Ht;function a(l){let u=0,f=0,h=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let d=0,g=0,p=0,x=0,m=0,b=0,S=0,y=0,M=0,A=0,w=0;l.sort(r8);for(let v=0,_=l.length;v<_;v++){let R=l[v],D=R.color,L=R.intensity,N=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=D.r*L,f+=D.g*L,h+=D.b*L;else if(R.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(R.sh.coefficients[F],L);w++}else if(R.isDirectionalLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,V=n.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=R.shadow.matrix,b++}i.directional[d]=F,d++}else if(R.isSpotLight){let F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(D).multiplyScalar(L),F.distance=N,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,i.spot[p]=F;let W=R.shadow;if(R.map&&(i.spotLightMap[M]=R.map,M++,W.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[p]=W.matrix,R.castShadow){let V=n.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,i.spotShadow[p]=V,i.spotShadowMap[p]=B,y++}p++}else if(R.isRectAreaLight){let F=e.get(R);F.color.copy(D).multiplyScalar(L),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),i.rectArea[x]=F,x++}else if(R.isPointLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let W=R.shadow,V=n.get(R);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=F,g++}else if(R.isHemisphereLight){let F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(L),F.groundColor.copy(R.groundColor).multiplyScalar(L),i.hemi[m]=F,m++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let T=i.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==p||T.rectAreaLength!==x||T.hemiLength!==m||T.numDirectionalShadows!==b||T.numPointShadows!==S||T.numSpotShadows!==y||T.numSpotMaps!==M||T.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=p,i.rectArea.length=x,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+M-A,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,T.directionalLength=d,T.pointLength=g,T.spotLength=p,T.rectAreaLength=x,T.hemiLength=m,T.numDirectionalShadows=b,T.numPointShadows=S,T.numSpotShadows=y,T.numSpotMaps=M,T.numLightProbes=w,i.version=s8++)}function c(l,u){let f=0,h=0,d=0,g=0,p=0,x=u.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let S=l[m];if(S.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),f++}else if(S.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(x),d++}else if(S.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),o.identity(),r.copy(S.matrixWorld),r.premultiply(x),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(x),h++}else if(S.isHemisphereLight){let y=i.hemi[p];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(x),p++}}}return{setup:a,setupView:c,state:i}}function kv(t){let e=new o8(t),n=[],i=[];function s(u){l.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function c(u){e.setupView(n,u)}let l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function a8(t){let e=new WeakMap;function n(s,r=0){let o=e.get(s),a;return o===void 0?(a=new kv(t),e.set(s,[a])):r>=o.length?(a=new kv(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var c8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l8=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u8(t,e,n){let i=new So,s=new $e,r=new $e,o=new zt,a=new nu({depthPacking:iv}),c=new iu,l={},u=n.maxTextureSize,f={[fs]:En,[En]:fs,[ai]:ai},h=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:c8,fragmentShader:l8}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new oi;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Sn(g,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let m=this.type;this.render=function(A,w,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;let v=t.getRenderTarget(),_=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),D=t.state;D.setBlending(ps),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let L=m!==ki&&this.type===ki,N=m===ki&&this.type!==ki;for(let B=0,F=A.length;B<F;B++){let W=A[B],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let K=V.getFrameExtents();if(s.multiply(K),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,V.mapSize.y=r.y)),V.map===null||L===!0||N===!0){let le=this.type!==ki?{minFilter:si,magFilter:si}:{};V.map!==null&&V.map.dispose(),V.map=new Ui(s.x,s.y,le),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();let ie=V.getViewportCount();for(let le=0;le<ie;le++){let Ce=V.getViewport(le);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),D.viewport(o),V.updateMatrices(W,le),i=V.getFrustum(),y(w,T,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===ki&&b(V,T),V.needsUpdate=!1}m=this.type,x.needsUpdate=!1,t.setRenderTarget(v,_,R)};function b(A,w){let T=e.update(p);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ui(s.x,s.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,T,h,p,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,T,d,p,null)}function S(A,w,T,v){let _=null,R=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)_=R;else if(_=T.isPointLight===!0?c:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=_.uuid,L=w.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let B=N[L];B===void 0&&(B=_.clone(),N[L]=B,w.addEventListener("dispose",M)),_=B}if(_.visible=w.visible,_.wireframe=w.wireframe,v===ki?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:f[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let D=t.properties.get(_);D.light=T}return _}function y(A,w,T,v,_){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===ki)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let L=e.update(A),N=A.material;if(Array.isArray(N)){let B=L.groups;for(let F=0,W=B.length;F<W;F++){let V=B[F],K=N[V.materialIndex];if(K&&K.visible){let ie=S(A,K,v,_);A.onBeforeShadow(t,A,w,T,L,ie,V),t.renderBufferDirect(T,null,L,ie,A,V),A.onAfterShadow(t,A,w,T,L,ie,V)}}}else if(N.visible){let B=S(A,N,v,_);A.onBeforeShadow(t,A,w,T,L,B,null),t.renderBufferDirect(T,null,L,B,A,null),A.onAfterShadow(t,A,w,T,L,B,null)}}let D=A.children;for(let L=0,N=D.length;L<N;L++)y(D[L],w,T,v,_)}function M(A){A.target.removeEventListener("dispose",M);for(let T in l){let v=l[T],_=A.target.uuid;_ in v&&(v[_].dispose(),delete v[_])}}}var h8={[pu]:mu,[gu]:yu,[xu]:_u,[Er]:vu,[mu]:pu,[yu]:gu,[_u]:xu,[vu]:Er};function f8(t,e){function n(){let U=!1,re=new zt,ae=null,ge=new zt(0,0,0,0);return{setMask:function(te){ae!==te&&!U&&(t.colorMask(te,te,te,te),ae=te)},setLocked:function(te){U=te},setClear:function(te,j,ye,Xe,Ct){Ct===!0&&(te*=Xe,j*=Xe,ye*=Xe),re.set(te,j,ye,Xe),ge.equals(re)===!1&&(t.clearColor(te,j,ye,Xe),ge.copy(re))},reset:function(){U=!1,ae=null,ge.set(-1,0,0,0)}}}function i(){let U=!1,re=!1,ae=null,ge=null,te=null;return{setReversed:function(j){if(re!==j){let ye=e.get("EXT_clip_control");j?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=j;let Xe=te;te=null,this.setClear(Xe)}},getReversed:function(){return re},setTest:function(j){j?Q(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(j){ae!==j&&!U&&(t.depthMask(j),ae=j)},setFunc:function(j){if(re&&(j=h8[j]),ge!==j){switch(j){case pu:t.depthFunc(t.NEVER);break;case mu:t.depthFunc(t.ALWAYS);break;case gu:t.depthFunc(t.LESS);break;case Er:t.depthFunc(t.LEQUAL);break;case xu:t.depthFunc(t.EQUAL);break;case vu:t.depthFunc(t.GEQUAL);break;case yu:t.depthFunc(t.GREATER);break;case _u:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=j}},setLocked:function(j){U=j},setClear:function(j){te!==j&&(re&&(j=1-j),t.clearDepth(j),te=j)},reset:function(){U=!1,ae=null,ge=null,te=null,re=!1}}}function s(){let U=!1,re=null,ae=null,ge=null,te=null,j=null,ye=null,Xe=null,Ct=null;return{setTest:function(pt){U||(pt?Q(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(pt){re!==pt&&!U&&(t.stencilMask(pt),re=pt)},setFunc:function(pt,ss,Fi){(ae!==pt||ge!==ss||te!==Fi)&&(t.stencilFunc(pt,ss,Fi),ae=pt,ge=ss,te=Fi)},setOp:function(pt,ss,Fi){(j!==pt||ye!==ss||Xe!==Fi)&&(t.stencilOp(pt,ss,Fi),j=pt,ye=ss,Xe=Fi)},setLocked:function(pt){U=pt},setClear:function(pt){Ct!==pt&&(t.clearStencil(pt),Ct=pt)},reset:function(){U=!1,re=null,ae=null,ge=null,te=null,j=null,ye=null,Xe=null,Ct=null}}}let r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h=new WeakMap,d=[],g=null,p=!1,x=null,m=null,b=null,S=null,y=null,M=null,A=null,w=new et(0,0,0),T=0,v=!1,_=null,R=null,D=null,L=null,N=null,B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,W=0,V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=W>=2);let K=null,ie={},le=t.getParameter(t.SCISSOR_BOX),Ce=t.getParameter(t.VIEWPORT),Ke=new zt().fromArray(le),He=new zt().fromArray(Ce);function ke(U,re,ae,ge){let te=new Uint8Array(4),j=t.createTexture();t.bindTexture(U,j),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<ae;ye++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,te):t.texImage2D(re+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,te);return j}let Z={};Z[t.TEXTURE_2D]=ke(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=ke(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=ke(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=ke(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(t.DEPTH_TEST),o.setFunc(Er),qe(!1),_e(zd),Q(t.CULL_FACE),St(ps);function Q(U){u[U]!==!0&&(t.enable(U),u[U]=!0)}function pe(U){u[U]!==!1&&(t.disable(U),u[U]=!1)}function ze(U,re){return f[U]!==re?(t.bindFramebuffer(U,re),f[U]=re,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=re),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(U,re){let ae=d,ge=!1;if(U){ae=h.get(re),ae===void 0&&(ae=[],h.set(re,ae));let te=U.textures;if(ae.length!==te.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let j=0,ye=te.length;j<ye;j++)ae[j]=t.COLOR_ATTACHMENT0+j;ae.length=te.length,ge=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ge=!0);ge&&t.drawBuffers(ae)}function ot(U){return g!==U?(t.useProgram(U),g=U,!0):!1}let Qt={[zs]:t.FUNC_ADD,[Rx]:t.FUNC_SUBTRACT,[Dx]:t.FUNC_REVERSE_SUBTRACT};Qt[Px]=t.MIN,Qt[Ix]=t.MAX;let O={[Lx]:t.ZERO,[Nx]:t.ONE,[Fx]:t.SRC_COLOR,[Vl]:t.SRC_ALPHA,[qx]:t.SRC_ALPHA_SATURATE,[kx]:t.DST_COLOR,[Ux]:t.DST_ALPHA,[Ox]:t.ONE_MINUS_SRC_COLOR,[Gl]:t.ONE_MINUS_SRC_ALPHA,[zx]:t.ONE_MINUS_DST_COLOR,[Bx]:t.ONE_MINUS_DST_ALPHA,[Vx]:t.CONSTANT_COLOR,[Gx]:t.ONE_MINUS_CONSTANT_COLOR,[Hx]:t.CONSTANT_ALPHA,[$x]:t.ONE_MINUS_CONSTANT_ALPHA};function St(U,re,ae,ge,te,j,ye,Xe,Ct,pt){if(U===ps){p===!0&&(pe(t.BLEND),p=!1);return}if(p===!1&&(Q(t.BLEND),p=!0),U!==Cx){if(U!==x||pt!==v){if((m!==zs||y!==zs)&&(t.blendEquation(t.FUNC_ADD),m=zs,y=zs),pt)switch(U){case Sr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vd:t.blendFunc(t.ONE,t.ONE);break;case Gd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Sr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Gd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,S=null,M=null,A=null,w.set(0,0,0),T=0,x=U,v=pt}return}te=te||re,j=j||ae,ye=ye||ge,(re!==m||te!==y)&&(t.blendEquationSeparate(Qt[re],Qt[te]),m=re,y=te),(ae!==b||ge!==S||j!==M||ye!==A)&&(t.blendFuncSeparate(O[ae],O[ge],O[j],O[ye]),b=ae,S=ge,M=j,A=ye),(Xe.equals(w)===!1||Ct!==T)&&(t.blendColor(Xe.r,Xe.g,Xe.b,Ct),w.copy(Xe),T=Ct),x=U,v=!1}function Ye(U,re){U.side===ai?pe(t.CULL_FACE):Q(t.CULL_FACE);let ae=U.side===En;re&&(ae=!ae),qe(ae),U.blending===Sr&&U.transparent===!1?St(ps):St(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let ge=U.stencilWrite;a.setTest(ge),ge&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),be(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(U){_!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),_=U)}function _e(U){U!==Ax?(Q(t.CULL_FACE),U!==R&&(U===zd?t.cullFace(t.BACK):U===wx?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),R=U}function Nt(U){U!==D&&(F&&t.lineWidth(U),D=U)}function be(U,re,ae){U?(Q(t.POLYGON_OFFSET_FILL),(L!==re||N!==ae)&&(t.polygonOffset(re,ae),L=re,N=ae)):pe(t.POLYGON_OFFSET_FILL)}function Qe(U){U?Q(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function rn(U){U===void 0&&(U=t.TEXTURE0+B-1),K!==U&&(t.activeTexture(U),K=U)}function $t(U,re,ae){ae===void 0&&(K===null?ae=t.TEXTURE0+B-1:ae=K);let ge=ie[ae];ge===void 0&&(ge={type:void 0,texture:void 0},ie[ae]=ge),(ge.type!==U||ge.texture!==re)&&(K!==ae&&(t.activeTexture(ae),K=ae),t.bindTexture(U,re||Z[U]),ge.type=U,ge.texture=re)}function I(){let U=ie[K];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function C(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){Ke.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function Ue(U){He.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),He.copy(U))}function we(U,re){let ae=l.get(re);ae===void 0&&(ae=new WeakMap,l.set(re,ae));let ge=ae.get(U);ge===void 0&&(ge=t.getUniformBlockIndex(re,U.name),ae.set(U,ge))}function he(U,re){let ge=l.get(re).get(U);c.get(re)!==ge&&(t.uniformBlockBinding(re,ge,U.__bindingPointIndex),c.set(re,ge))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},K=null,ie={},f={},h=new WeakMap,d=[],g=null,p=!1,x=null,m=null,b=null,S=null,y=null,M=null,A=null,w=new et(0,0,0),T=0,v=!1,_=null,R=null,D=null,L=null,N=null,Ke.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:pe,bindFramebuffer:ze,drawBuffers:Ee,useProgram:ot,setBlending:St,setMaterial:Ye,setFlipSided:qe,setCullFace:_e,setLineWidth:Nt,setPolygonOffset:be,setScissorTest:Qe,activeTexture:rn,bindTexture:$t,unbindTexture:I,compressedTexImage2D:C,compressedTexImage3D:G,texImage2D:Ae,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:ee,compressedTexSubImage2D:X,compressedTexSubImage3D:Re,scissor:de,viewport:Ue,reset:je}}function d8(t,e,n,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap,f,h=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,C){return d?new OffscreenCanvas(I,C):Ga("canvas")}function p(I,C,G){let Y=1,ee=$t(I);if((ee.width>G||ee.height>G)&&(Y=G/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let X=Math.floor(Y*ee.width),Re=Math.floor(Y*ee.height);f===void 0&&(f=g(X,Re));let oe=C?g(X,Re):f;return oe.width=X,oe.height=Re,oe.getContext("2d").drawImage(I,0,0,X,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+Re+")."),oe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function x(I){return I.generateMipmaps}function m(I){t.generateMipmap(I)}function b(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(I,C,G,Y,ee=!1){if(I!==null){if(t[I]!==void 0)return t[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let X=C;if(C===t.RED&&(G===t.FLOAT&&(X=t.R32F),G===t.HALF_FLOAT&&(X=t.R16F),G===t.UNSIGNED_BYTE&&(X=t.R8)),C===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.R8UI),G===t.UNSIGNED_SHORT&&(X=t.R16UI),G===t.UNSIGNED_INT&&(X=t.R32UI),G===t.BYTE&&(X=t.R8I),G===t.SHORT&&(X=t.R16I),G===t.INT&&(X=t.R32I)),C===t.RG&&(G===t.FLOAT&&(X=t.RG32F),G===t.HALF_FLOAT&&(X=t.RG16F),G===t.UNSIGNED_BYTE&&(X=t.RG8)),C===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.RG8UI),G===t.UNSIGNED_SHORT&&(X=t.RG16UI),G===t.UNSIGNED_INT&&(X=t.RG32UI),G===t.BYTE&&(X=t.RG8I),G===t.SHORT&&(X=t.RG16I),G===t.INT&&(X=t.RG32I)),C===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.RGB8UI),G===t.UNSIGNED_SHORT&&(X=t.RGB16UI),G===t.UNSIGNED_INT&&(X=t.RGB32UI),G===t.BYTE&&(X=t.RGB8I),G===t.SHORT&&(X=t.RGB16I),G===t.INT&&(X=t.RGB32I)),C===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),G===t.UNSIGNED_INT&&(X=t.RGBA32UI),G===t.BYTE&&(X=t.RGBA8I),G===t.SHORT&&(X=t.RGBA16I),G===t.INT&&(X=t.RGBA32I)),C===t.RGB&&(G===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),C===t.RGBA){let Re=ee?qa:ut.getTransfer(Y);G===t.FLOAT&&(X=t.RGBA32F),G===t.HALF_FLOAT&&(X=t.RGBA16F),G===t.UNSIGNED_BYTE&&(X=Re===vt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(I,C){let G;return I?C===null||C===Ws||C===To?G=t.DEPTH24_STENCIL8:C===zi?G=t.DEPTH32F_STENCIL8:C===Ao&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ws||C===To?G=t.DEPTH_COMPONENT24:C===zi?G=t.DEPTH_COMPONENT32F:C===Ao&&(G=t.DEPTH_COMPONENT16),G}function M(I,C){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==si&&I.minFilter!==bi?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function A(I){let C=I.target;C.removeEventListener("dispose",A),T(C),C.isVideoTexture&&u.delete(C)}function w(I){let C=I.target;C.removeEventListener("dispose",w),_(C)}function T(I){let C=i.get(I);if(C.__webglInit===void 0)return;let G=I.source,Y=h.get(G);if(Y){let ee=Y[C.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(I),Object.keys(Y).length===0&&h.delete(G)}i.remove(I)}function v(I){let C=i.get(I);t.deleteTexture(C.__webglTexture);let G=I.source,Y=h.get(G);delete Y[C.__cacheKey],o.memory.textures--}function _(I){let C=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let ee=0;ee<C.__webglFramebuffer[Y].length;ee++)t.deleteFramebuffer(C.__webglFramebuffer[Y][ee]);else t.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)t.deleteFramebuffer(C.__webglFramebuffer[Y]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let G=I.textures;for(let Y=0,ee=G.length;Y<ee;Y++){let X=i.get(G[Y]);X.__webglTexture&&(t.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(G[Y])}i.remove(I)}let R=0;function D(){R=0}function L(){let I=R;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),R+=1,I}function N(I){let C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function B(I,C){let G=i.get(I);if(I.isVideoTexture&&Qe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){let Y=I.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,I,C);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+C)}function F(I,C){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Z(G,I,C);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+C)}function W(I,C){let G=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Z(G,I,C);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+C)}function V(I,C){let G=i.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+C)}let K={[Hl]:t.REPEAT,[ks]:t.CLAMP_TO_EDGE,[$l]:t.MIRRORED_REPEAT},ie={[si]:t.NEAREST,[tv]:t.NEAREST_MIPMAP_NEAREST,[lc]:t.NEAREST_MIPMAP_LINEAR,[bi]:t.LINEAR,[Eu]:t.LINEAR_MIPMAP_NEAREST,[$s]:t.LINEAR_MIPMAP_LINEAR},le={[rv]:t.NEVER,[hv]:t.ALWAYS,[ov]:t.LESS,[np]:t.LEQUAL,[av]:t.EQUAL,[uv]:t.GEQUAL,[cv]:t.GREATER,[lv]:t.NOTEQUAL};function Ce(I,C){if(C.type===zi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===bi||C.magFilter===Eu||C.magFilter===lc||C.magFilter===$s||C.minFilter===bi||C.minFilter===Eu||C.minFilter===lc||C.minFilter===$s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,K[C.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,K[C.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,K[C.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,ie[C.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,ie[C.minFilter]),C.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,le[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===si||C.minFilter!==lc&&C.minFilter!==$s||C.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ke(I,C){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",A));let Y=C.source,ee=h.get(Y);ee===void 0&&(ee={},h.set(Y,ee));let X=N(C);if(X!==I.__cacheKey){ee[X]===void 0&&(ee[X]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[X].usedTimes++;let Re=ee[I.__cacheKey];Re!==void 0&&(ee[I.__cacheKey].usedTimes--,Re.usedTimes===0&&v(C)),I.__cacheKey=X,I.__webglTexture=ee[X].texture}return G}function He(I,C,G){return Math.floor(Math.floor(I/G)/C)}function ke(I,C,G,Y){let X=I.updateRanges;if(X.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,C.width,C.height,G,Y,C.data);else{X.sort((se,de)=>se.start-de.start);let Re=0;for(let se=1;se<X.length;se++){let de=X[Re],Ue=X[se],we=de.start+de.count,he=He(Ue.start,C.width,4),je=He(de.start,C.width,4);Ue.start<=we+1&&he===je&&He(Ue.start+Ue.count-1,C.width,4)===he?de.count=Math.max(de.count,Ue.start+Ue.count-de.start):(++Re,X[Re]=Ue)}X.length=Re+1;let oe=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,C.width);for(let se=0,de=X.length;se<de;se++){let Ue=X[se],we=Math.floor(Ue.start/4),he=Math.ceil(Ue.count/4),je=we%C.width,U=Math.floor(we/C.width),re=he,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,je,U,re,ae,G,Y,C.data)}I.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,oe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function Z(I,C,G){let Y=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=t.TEXTURE_3D);let ee=Ke(I,C),X=C.source;n.bindTexture(Y,I.__webglTexture,t.TEXTURE0+G);let Re=i.get(X);if(X.version!==Re.__version||ee===!0){n.activeTexture(t.TEXTURE0+G);let oe=ut.getPrimaries(ut.workingColorSpace),Me=C.colorSpace===gs?null:ut.getPrimaries(C.colorSpace),Ae=C.colorSpace===gs||oe===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let se=p(C.image,!1,s.maxTextureSize);se=rn(C,se);let de=r.convert(C.format,C.colorSpace),Ue=r.convert(C.type),we=S(C.internalFormat,de,Ue,C.colorSpace,C.isVideoTexture);Ce(Y,C);let he,je=C.mipmaps,U=C.isVideoTexture!==!0,re=Re.__version===void 0||ee===!0,ae=X.dataReady,ge=M(C,se);if(C.isDepthTexture)we=y(C.format===Co,C.type),re&&(U?n.texStorage2D(t.TEXTURE_2D,1,we,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,we,se.width,se.height,0,de,Ue,null));else if(C.isDataTexture)if(je.length>0){U&&re&&n.texStorage2D(t.TEXTURE_2D,ge,we,je[0].width,je[0].height);for(let te=0,j=je.length;te<j;te++)he=je[te],U?ae&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,de,Ue,he.data):n.texImage2D(t.TEXTURE_2D,te,we,he.width,he.height,0,de,Ue,he.data);C.generateMipmaps=!1}else U?(re&&n.texStorage2D(t.TEXTURE_2D,ge,we,se.width,se.height),ae&&ke(C,se,de,Ue)):n.texImage2D(t.TEXTURE_2D,0,we,se.width,se.height,0,de,Ue,se.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){U&&re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,we,je[0].width,je[0].height,se.depth);for(let te=0,j=je.length;te<j;te++)if(he=je[te],C.format!==ci)if(de!==null)if(U){if(ae)if(C.layerUpdates.size>0){let ye=up(he.width,he.height,C.format,C.type);for(let Xe of C.layerUpdates){let Ct=he.data.subarray(Xe*ye/he.data.BYTES_PER_ELEMENT,(Xe+1)*ye/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Xe,he.width,he.height,1,de,Ct)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,se.depth,de,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,we,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,se.depth,de,Ue,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,we,he.width,he.height,se.depth,0,de,Ue,he.data)}else{U&&re&&n.texStorage2D(t.TEXTURE_2D,ge,we,je[0].width,je[0].height);for(let te=0,j=je.length;te<j;te++)he=je[te],C.format!==ci?de!==null?U?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,te,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,de,Ue,he.data):n.texImage2D(t.TEXTURE_2D,te,we,he.width,he.height,0,de,Ue,he.data)}else if(C.isDataArrayTexture)if(U){if(re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,we,se.width,se.height,se.depth),ae)if(C.layerUpdates.size>0){let te=up(se.width,se.height,C.format,C.type);for(let j of C.layerUpdates){let ye=se.data.subarray(j*te/se.data.BYTES_PER_ELEMENT,(j+1)*te/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,de,Ue,ye)}C.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Ue,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,de,Ue,se.data);else if(C.isData3DTexture)U?(re&&n.texStorage3D(t.TEXTURE_3D,ge,we,se.width,se.height,se.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Ue,se.data)):n.texImage3D(t.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,de,Ue,se.data);else if(C.isFramebufferTexture){if(re)if(U)n.texStorage2D(t.TEXTURE_2D,ge,we,se.width,se.height);else{let te=se.width,j=se.height;for(let ye=0;ye<ge;ye++)n.texImage2D(t.TEXTURE_2D,ye,we,te,j,0,de,Ue,null),te>>=1,j>>=1}}else if(je.length>0){if(U&&re){let te=$t(je[0]);n.texStorage2D(t.TEXTURE_2D,ge,we,te.width,te.height)}for(let te=0,j=je.length;te<j;te++)he=je[te],U?ae&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de,Ue,he):n.texImage2D(t.TEXTURE_2D,te,we,de,Ue,he);C.generateMipmaps=!1}else if(U){if(re){let te=$t(se);n.texStorage2D(t.TEXTURE_2D,ge,we,te.width,te.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ue,se)}else n.texImage2D(t.TEXTURE_2D,0,we,de,Ue,se);x(C)&&m(Y),Re.__version=X.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function Q(I,C,G){if(C.image.length!==6)return;let Y=Ke(I,C),ee=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+G);let X=i.get(ee);if(ee.version!==X.__version||Y===!0){n.activeTexture(t.TEXTURE0+G);let Re=ut.getPrimaries(ut.workingColorSpace),oe=C.colorSpace===gs?null:ut.getPrimaries(C.colorSpace),Me=C.colorSpace===gs||Re===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ae=C.isCompressedTexture||C.image[0].isCompressedTexture,se=C.image[0]&&C.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!Ae&&!se?de[j]=p(C.image[j],!0,s.maxCubemapSize):de[j]=se?C.image[j].image:C.image[j],de[j]=rn(C,de[j]);let Ue=de[0],we=r.convert(C.format,C.colorSpace),he=r.convert(C.type),je=S(C.internalFormat,we,he,C.colorSpace),U=C.isVideoTexture!==!0,re=X.__version===void 0||Y===!0,ae=ee.dataReady,ge=M(C,Ue);Ce(t.TEXTURE_CUBE_MAP,C);let te;if(Ae){U&&re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,je,Ue.width,Ue.height);for(let j=0;j<6;j++){te=de[j].mipmaps;for(let ye=0;ye<te.length;ye++){let Xe=te[ye];C.format!==ci?we!==null?U?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,Xe.width,Xe.height,we,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,je,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,0,0,Xe.width,Xe.height,we,he,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye,je,Xe.width,Xe.height,0,we,he,Xe.data)}}}else{if(te=C.mipmaps,U&&re){te.length>0&&ge++;let j=$t(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,je,j.width,j.height)}for(let j=0;j<6;j++)if(se){U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,we,he,de[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,de[j].width,de[j].height,0,we,he,de[j].data);for(let ye=0;ye<te.length;ye++){let Ct=te[ye].image[j].image;U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,Ct.width,Ct.height,we,he,Ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,je,Ct.width,Ct.height,0,we,he,Ct.data)}}else{U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,he,de[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,je,we,he,de[j]);for(let ye=0;ye<te.length;ye++){let Xe=te[ye];U?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,0,0,we,he,Xe.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ye+1,je,we,he,Xe.image[j])}}}x(C)&&m(t.TEXTURE_CUBE_MAP),X.__version=ee.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function pe(I,C,G,Y,ee,X){let Re=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),Me=S(G.internalFormat,Re,oe,G.colorSpace),Ae=i.get(C),se=i.get(G);if(se.__renderTarget=C,!Ae.__hasExternalTextures){let de=Math.max(1,C.width>>X),Ue=Math.max(1,C.height>>X);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,X,Me,de,Ue,C.depth,0,Re,oe,null):n.texImage2D(ee,X,Me,de,Ue,0,Re,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),be(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ee,se.__webglTexture,0,Nt(C)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ee,se.__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(I,C,G){if(t.bindRenderbuffer(t.RENDERBUFFER,I),C.depthBuffer){let Y=C.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,X=y(C.stencilBuffer,ee),Re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=Nt(C);be(C)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe,X,C.width,C.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,X,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,X,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,I)}else{let Y=C.textures;for(let ee=0;ee<Y.length;ee++){let X=Y[ee],Re=r.convert(X.format,X.colorSpace),oe=r.convert(X.type),Me=S(X.internalFormat,Re,oe,X.colorSpace),Ae=Nt(C);G&&be(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Me,C.width,C.height):be(C)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Me,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,Me,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),B(C.depthTexture,0);let ee=Y.__webglTexture,X=Nt(C);if(C.depthTexture.format===go)be(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(C.depthTexture.format===Co)be(C)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,X):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ot(I){let C=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){let Y=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){let ee=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),C.__depthDisposeCallback=ee}C.__boundDepthTexture=Y}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Y=I.texture.mipmaps;Y&&Y.length>0?Ee(C.__webglFramebuffer[0],I):Ee(C.__webglFramebuffer,I)}else if(G){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=t.createRenderbuffer(),ze(C.__webglDepthbuffer[Y],I,!1);else{let ee=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=C.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}else{let Y=I.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=t.createRenderbuffer(),ze(C.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=C.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,X)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qt(I,C,G){let Y=i.get(I);C!==void 0&&pe(Y.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&ot(I)}function O(I){let C=I.texture,G=i.get(I),Y=i.get(C);I.addEventListener("dispose",w);let ee=I.textures,X=I.isWebGLCubeRenderTarget===!0,Re=ee.length>1;if(Re||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=C.version,o.memory.textures++),X){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let Me=0;Me<C.mipmaps.length;Me++)G.__webglFramebuffer[oe][Me]=t.createFramebuffer()}else G.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<C.mipmaps.length;oe++)G.__webglFramebuffer[oe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Re)for(let oe=0,Me=ee.length;oe<Me;oe++){let Ae=i.get(ee[oe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),o.memory.textures++)}if(I.samples>0&&be(I)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){let Me=ee[oe];G.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);let Ae=r.convert(Me.format,Me.colorSpace),se=r.convert(Me.type),de=S(Me.internalFormat,Ae,se,Me.colorSpace,I.isXRRenderTarget===!0),Ue=Nt(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,de,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(G.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(X){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,C);for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)pe(G.__webglFramebuffer[oe][Me],I,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);else pe(G.__webglFramebuffer[oe],I,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(C)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let oe=0,Me=ee.length;oe<Me;oe++){let Ae=ee[oe],se=i.get(Ae),de=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,se.__webglTexture),Ce(de,Ae),pe(G.__webglFramebuffer,I,Ae,t.COLOR_ATTACHMENT0+oe,de,0),x(Ae)&&m(de)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(oe,Y.__webglTexture),Ce(oe,C),C.mipmaps&&C.mipmaps.length>0)for(let Me=0;Me<C.mipmaps.length;Me++)pe(G.__webglFramebuffer[Me],I,C,t.COLOR_ATTACHMENT0,oe,Me);else pe(G.__webglFramebuffer,I,C,t.COLOR_ATTACHMENT0,oe,0);x(C)&&m(oe),n.unbindTexture()}I.depthBuffer&&ot(I)}function St(I){let C=I.textures;for(let G=0,Y=C.length;G<Y;G++){let ee=C[G];if(x(ee)){let X=b(I),Re=i.get(ee).__webglTexture;n.bindTexture(X,Re),m(X),n.unbindTexture()}}}let Ye=[],qe=[];function _e(I){if(I.samples>0){if(be(I)===!1){let C=I.textures,G=I.width,Y=I.height,ee=t.COLOR_BUFFER_BIT,X=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(I),oe=C.length>1;if(oe)for(let Ae=0;Ae<C.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Me=I.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ae=0;Ae<C.length;Ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),oe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let se=i.get(C[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,G,Y,0,0,G,Y,ee,t.NEAREST),c===!0&&(Ye.length=0,qe.length=0,Ye.push(t.COLOR_ATTACHMENT0+Ae),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ye.push(X),qe.push(X),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ye))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<C.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Re.__webglColorRenderbuffer[Ae]);let se=i.get(C[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let C=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])}}}function Nt(I){return Math.min(s.maxSamples,I.samples)}function be(I){let C=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Qe(I){let C=o.render.frame;u.get(I)!==C&&(u.set(I,C),I.update())}function rn(I,C){let G=I.colorSpace,Y=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Mr&&G!==gs&&(ut.getTransfer(G)===vt?(Y!==ci||ee!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),C}function $t(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=Qt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=be}function p8(t,e){function n(i,s=gs){let r,o=ut.getTransfer(s);if(i===Mi)return t.UNSIGNED_BYTE;if(i===Au)return t.UNSIGNED_SHORT_4_4_4_4;if(i===wu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zd)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jd)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xd)return t.BYTE;if(i===Yd)return t.SHORT;if(i===Ao)return t.UNSIGNED_SHORT;if(i===Mu)return t.INT;if(i===Ws)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===wo)return t.HALF_FLOAT;if(i===Jd)return t.ALPHA;if(i===Kd)return t.RGB;if(i===ci)return t.RGBA;if(i===go)return t.DEPTH_COMPONENT;if(i===Co)return t.DEPTH_STENCIL;if(i===Qd)return t.RED;if(i===Tu)return t.RED_INTEGER;if(i===ep)return t.RG;if(i===Cu)return t.RG_INTEGER;if(i===Ru)return t.RGBA_INTEGER;if(i===uc||i===hc||i===fc||i===dc)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Du||i===Pu||i===Iu||i===Lu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nu||i===Fu||i===Ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Nu||i===Fu)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ou)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Uu||i===Bu||i===ku||i===zu||i===qu||i===Vu||i===Gu||i===Hu||i===$u||i===Wu||i===Xu||i===Yu||i===Zu||i===ju)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Bu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ku)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Vu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Gu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$u)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zu)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ju)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ju||i===Ku||i===Qu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ju)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ku)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===eh||i===th||i===nh||i===ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===eh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===To?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var m8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g8=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ep=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new ec(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Ei({vertexShader:m8,fragmentShader:g8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sn(new Tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends Oi{constructor(e,n){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null,p=typeof XRWebGLBinding<"u",x=new Ep,m={},b=n.getContextAttributes(),S=null,y=null,M=[],A=[],w=new $e,T=null,v=new mn;v.viewport=new zt;let _=new mn;_.viewport=new zt;let R=[v,_],D=new du,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=M[Z];return Q===void 0&&(Q=new bo,M[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=M[Z];return Q===void 0&&(Q=new bo,M[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=M[Z];return Q===void 0&&(Q=new bo,M[Z]=Q),Q.getHandSpace()};function B(Z){let Q=A.indexOf(Z.inputSource);if(Q===-1)return;let pe=M[Q];pe!==void 0&&(pe.update(Z.inputSource,Z.frame,l||o),pe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",W);for(let Z=0;Z<M.length;Z++){let Q=A[Z];Q!==null&&(A[Z]=null,M[Z].disconnect(Q))}L=null,N=null,x.reset();for(let Z in m)delete m[Z];e.setRenderTarget(S),d=null,h=null,f=null,s=null,y=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&p&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",F),s.addEventListener("inputsourceschange",W),b.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ze=null,Ee=null;b.depth&&(Ee=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=b.stencil?Co:go,ze=b.stencil?To:Ws);let ot={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ot),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ui(h.textureWidth,h.textureHeight,{format:ci,type:Mi,depthTexture:new Qa(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ui(d.framebufferWidth,d.framebufferHeight,{format:ci,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(Z){for(let Q=0;Q<Z.removed.length;Q++){let pe=Z.removed[Q],ze=A.indexOf(pe);ze>=0&&(A[ze]=null,M[ze].disconnect(pe))}for(let Q=0;Q<Z.added.length;Q++){let pe=Z.added[Q],ze=A.indexOf(pe);if(ze===-1){for(let ot=0;ot<M.length;ot++)if(ot>=A.length){A.push(pe),ze=ot;break}else if(A[ot]===null){A[ot]=pe,ze=ot;break}if(ze===-1)break}let Ee=M[ze];Ee&&Ee.connect(pe)}}let V=new q,K=new q;function ie(Z,Q,pe){V.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(pe.matrixWorld);let ze=V.distanceTo(K),Ee=Q.projectionMatrix.elements,ot=pe.projectionMatrix.elements,Qt=Ee[14]/(Ee[10]-1),O=Ee[14]/(Ee[10]+1),St=(Ee[9]+1)/Ee[5],Ye=(Ee[9]-1)/Ee[5],qe=(Ee[8]-1)/Ee[0],_e=(ot[8]+1)/ot[0],Nt=Qt*qe,be=Qt*_e,Qe=ze/(-qe+_e),rn=Qe*-qe;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(rn),Z.translateZ(Qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let $t=Qt+Qe,I=O+Qe,C=Nt-rn,G=be+(ze-rn),Y=St*O/I*$t,ee=Ye*O/I*$t;Z.projectionMatrix.makePerspective(C,G,Y,ee,$t,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,pe=Z.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),D.near=_.near=v.near=Q,D.far=_.far=v.far=pe,(L!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,N=D.far),D.layers.mask=Z.layers.mask|6,v.layers.mask=D.layers.mask&3,_.layers.mask=D.layers.mask&5;let ze=Z.parent,Ee=D.cameras;le(D,ze);for(let ot=0;ot<Ee.length;ot++)le(Ee[ot],ze);Ee.length===2?ie(D,v,_):D.projectionMatrix.copy(v.projectionMatrix),Ce(Z,D,ze)};function Ce(Z,Q,pe){pe===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(pe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(D)},this.getCameraTexture=function(Z){return m[Z]};let Ke=null;function He(Z,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){let pe=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ze=!1;pe.length!==D.cameras.length&&(D.cameras.length=0,ze=!0);for(let O=0;O<pe.length;O++){let St=pe[O],Ye=null;if(d!==null)Ye=d.getViewport(St);else{let _e=f.getViewSubImage(h,St);Ye=_e.viewport,O===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let qe=R[O];qe===void 0&&(qe=new mn,qe.layers.enable(O),qe.viewport=new zt,R[O]=qe),qe.matrix.fromArray(St.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(St.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),O===0&&(D.matrix.copy(qe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),ze===!0&&D.cameras.push(qe)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&p){f=i.getBinding();let O=f.getDepthInformation(pe[0]);O&&O.isValid&&O.texture&&x.init(O,s.renderState)}if(Ee&&Ee.includes("camera-access")&&p){e.state.unbindTexture(),f=i.getBinding();for(let O=0;O<pe.length;O++){let St=pe[O].camera;if(St){let Ye=m[St];Ye||(Ye=new ec,m[St]=Ye);let qe=f.getCameraImage(St);Ye.sourceTexture=qe}}}}for(let pe=0;pe<M.length;pe++){let ze=A[pe],Ee=M[pe];ze!==null&&Ee!==void 0&&Ee.update(ze,Q,l||o)}Ke&&Ke(Z,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let ke=new zv;ke.setAnimationLoop(He),this.setAnimationLoop=function(Z){Ke=Z},this.dispose=function(){}}},Lr=new Si,x8=new Ht;function v8(t,e){function n(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,ap(t)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,b,S,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(x,m):m.isMeshToonMaterial?(r(x,m),f(x,m)):m.isMeshPhongMaterial?(r(x,m),u(x,m)):m.isMeshStandardMaterial?(r(x,m),h(x,m),m.isMeshPhysicalMaterial&&d(x,m,y)):m.isMeshMatcapMaterial?(r(x,m),g(x,m)):m.isMeshDepthMaterial?r(x,m):m.isMeshDistanceMaterial?(r(x,m),p(x,m)):m.isMeshNormalMaterial?r(x,m):m.isLineBasicMaterial?(o(x,m),m.isLineDashedMaterial&&a(x,m)):m.isPointsMaterial?c(x,m,b,S):m.isSpriteMaterial?l(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,n(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,n(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,n(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===En&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,n(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===En&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,n(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,n(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);let b=e.get(m),S=b.envMap,y=b.envMapRotation;S&&(x.envMap.value=S,Lr.copy(y),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),x.envMapRotation.value.setFromMatrix4(x8.makeRotationFromEuler(Lr)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,x.aoMapTransform))}function o(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,n(m.map,x.mapTransform))}function a(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function c(x,m,b,S){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*b,x.scale.value=S*.5,m.map&&(x.map.value=m.map,n(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,n(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,n(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,n(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function u(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function f(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function h(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function d(x,m,b){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===En&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,m){m.matcap&&(x.matcap.value=m.matcap)}function p(x,m){let b=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function y8(t,e,n,i){let s={},r={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){let y=S.program;i.uniformBlockBinding(b,y)}function l(b,S){let y=s[b.id];y===void 0&&(g(b),y=u(b),s[b.id]=y,b.addEventListener("dispose",x));let M=S.program;i.updateUBOMapping(b,M);let A=e.render.frame;r[b.id]!==A&&(h(b),r[b.id]=A)}function u(b){let S=f();b.__bindingPointIndex=S;let y=t.createBuffer(),M=b.__size,A=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,y),y}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let S=s[b.id],y=b.uniforms,M=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let A=0,w=y.length;A<w;A++){let T=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,_=T.length;v<_;v++){let R=T[v];if(d(R,A,v,M)===!0){let D=R.__offset,L=Array.isArray(R.value)?R.value:[R.value],N=0;for(let B=0;B<L.length;B++){let F=L[B],W=p(F);typeof F=="number"||typeof F=="boolean"?(R.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,D+N,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=0,R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=0,R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=0):(F.toArray(R.__data,N),N+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(b,S,y,M){let A=b.value,w=S+"_"+y;if(M[w]===void 0)return typeof A=="number"||typeof A=="boolean"?M[w]=A:M[w]=A.clone(),!0;{let T=M[w];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return M[w]=A,!0}else if(T.equals(A)===!1)return T.copy(A),!0}return!1}function g(b){let S=b.uniforms,y=0,M=16;for(let w=0,T=S.length;w<T;w++){let v=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,R=v.length;_<R;_++){let D=v[_],L=Array.isArray(D.value)?D.value:[D.value];for(let N=0,B=L.length;N<B;N++){let F=L[N],W=p(F),V=y%M,K=V%W.boundary,ie=V+K;y+=K,ie!==0&&M-ie<W.storage&&(y+=M-ie),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=W.storage}}}let A=y%M;return A>0&&(y+=M-A),b.__size=y,b.__cache={},this}function p(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function x(b){let S=b.target;S.removeEventListener("dispose",x);let y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let b in s)t.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ch=class{constructor(e={}){let{canvas:n=fv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),p=new Int32Array(4),x=null,m=null,b=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ms,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,M=!1;this._outputColorSpace=Xn;let A=0,w=0,T=null,v=-1,_=null,R=new zt,D=new zt,L=null,N=new et(0),B=0,F=n.width,W=n.height,V=1,K=null,ie=null,le=new zt(0,0,F,W),Ce=new zt(0,0,F,W),Ke=!1,He=new So,ke=!1,Z=!1,Q=new Ht,pe=new q,ze=new zt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function Qt(){return T===null?V:1}let O=i;function St(P,k){return n.getContext(P,k)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",ge,!1),n.addEventListener("webglcontextcreationerror",te,!1),O===null){let k="webgl2";if(O=St(k,P),O===null)throw St(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ye,qe,_e,Nt,be,Qe,rn,$t,I,C,G,Y,ee,X,Re,oe,Me,Ae,se,de,Ue,we,he,je;function U(){Ye=new Uk(O),Ye.init(),we=new p8(O,Ye),qe=new Dk(O,Ye,e,we),_e=new f8(O,Ye),qe.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),Nt=new zk(O),be=new Qz,Qe=new d8(O,Ye,_e,be,qe,we,Nt),rn=new Ik(y),$t=new Ok(y),I=new W4(O),he=new Ck(O,I),C=new Bk(O,I,Nt,he),G=new Vk(O,C,I,Nt),se=new qk(O,qe,Qe),oe=new Pk(be),Y=new Kz(y,rn,$t,Ye,qe,he,oe),ee=new v8(y,be),X=new t8,Re=new a8(Ye),Ae=new Tk(y,rn,$t,_e,G,d,c),Me=new u8(y,G,qe),je=new y8(O,Nt,qe,_e),de=new Rk(O,Ye,Nt),Ue=new kk(O,Ye,Nt),Nt.programs=Y.programs,y.capabilities=qe,y.extensions=Ye,y.properties=be,y.renderLists=X,y.shadowMap=Me,y.state=_e,y.info=Nt}U();let re=new Mp(y,O);this.xr=re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=Ye.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ye.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(F,W,!1))},this.getSize=function(P){return P.set(F,W)},this.setSize=function(P,k,H=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=P,W=k,n.width=Math.floor(P*V),n.height=Math.floor(k*V),H===!0&&(n.style.width=P+"px",n.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(F*V,W*V).floor()},this.setDrawingBufferSize=function(P,k,H){F=P,W=k,V=H,n.width=Math.floor(P*H),n.height=Math.floor(k*H),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(le)},this.setViewport=function(P,k,H,$){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,k,H,$),_e.viewport(R.copy(le).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(Ce)},this.setScissor=function(P,k,H,$){P.isVector4?Ce.set(P.x,P.y,P.z,P.w):Ce.set(P,k,H,$),_e.scissor(D.copy(Ce).multiplyScalar(V).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(P){_e.setScissorTest(Ke=P)},this.setOpaqueSort=function(P){K=P},this.setTransparentSort=function(P){ie=P},this.getClearColor=function(P){return P.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(P=!0,k=!0,H=!0){let $=0;if(P){let z=!1;if(T!==null){let ne=T.texture.format;z=ne===Ru||ne===Cu||ne===Tu}if(z){let ne=T.texture.type,fe=ne===Mi||ne===Ws||ne===Ao||ne===To||ne===Au||ne===wu,ve=Ae.getClearColor(),me=Ae.getClearAlpha(),Oe=ve.r,Ve=ve.g,Pe=ve.b;fe?(g[0]=Oe,g[1]=Ve,g[2]=Pe,g[3]=me,O.clearBufferuiv(O.COLOR,0,g)):(p[0]=Oe,p[1]=Ve,p[2]=Pe,p[3]=me,O.clearBufferiv(O.COLOR,0,p))}else $|=O.COLOR_BUFFER_BIT}k&&($|=O.DEPTH_BUFFER_BIT),H&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",ge,!1),n.removeEventListener("webglcontextcreationerror",te,!1),Ae.dispose(),X.dispose(),Re.dispose(),be.dispose(),rn.dispose(),$t.dispose(),G.dispose(),he.dispose(),je.dispose(),Y.dispose(),re.dispose(),re.removeEventListener("sessionstart",Fi),re.removeEventListener("sessionend",X1),mr.stop()};function ae(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let P=Nt.autoReset,k=Me.enabled,H=Me.autoUpdate,$=Me.needsUpdate,z=Me.type;U(),Nt.autoReset=P,Me.enabled=k,Me.autoUpdate=H,Me.needsUpdate=$,Me.type=z}function te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function j(P){let k=P.target;k.removeEventListener("dispose",j),ye(k)}function ye(P){Xe(P),be.remove(P)}function Xe(P){let k=be.get(P).programs;k!==void 0&&(k.forEach(function(H){Y.releaseProgram(H)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,H,$,z,ne){k===null&&(k=Ee);let fe=z.isMesh&&z.matrixWorld.determinant()<0,ve=zO(P,k,H,$,z);_e.setMaterial($,fe);let me=H.index,Oe=1;if($.wireframe===!0){if(me=C.getWireframeAttribute(H),me===void 0)return;Oe=2}let Ve=H.drawRange,Pe=H.attributes.position,at=Ve.start*Oe,Et=(Ve.start+Ve.count)*Oe;ne!==null&&(at=Math.max(at,ne.start*Oe),Et=Math.min(Et,(ne.start+ne.count)*Oe)),me!==null?(at=Math.max(at,0),Et=Math.min(Et,me.count)):Pe!=null&&(at=Math.max(at,0),Et=Math.min(Et,Pe.count));let Gt=Et-at;if(Gt<0||Gt===1/0)return;he.setup(z,$,ve,H,me);let Dt,wt=de;if(me!==null&&(Dt=I.get(me),wt=Ue,wt.setIndex(Dt)),z.isMesh)$.wireframe===!0?(_e.setLineWidth($.wireframeLinewidth*Qt()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(z.isLine){let Le=$.linewidth;Le===void 0&&(Le=1),_e.setLineWidth(Le*Qt()),z.isLineSegments?wt.setMode(O.LINES):z.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else z.isPoints?wt.setMode(O.POINTS):z.isSprite&&wt.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)vo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))wt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Le=z._multiDrawStarts,Bt=z._multiDrawCounts,ht=z._multiDrawCount,Gn=me?I.get(me).bytesPerElement:1,eo=be.get($).currentProgram.getUniforms();for(let Hn=0;Hn<ht;Hn++)eo.setValue(O,"_gl_DrawID",Hn),wt.render(Le[Hn]/Gn,Bt[Hn])}else if(z.isInstancedMesh)wt.renderInstances(at,Gt,z.count);else if(H.isInstancedBufferGeometry){let Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Bt=Math.min(H.instanceCount,Le);wt.renderInstances(at,Gt,Bt)}else wt.render(at,Gt)};function Ct(P,k,H){P.transparent===!0&&P.side===ai&&P.forceSinglePass===!1?(P.side=En,P.needsUpdate=!0,_l(P,k,H),P.side=fs,P.needsUpdate=!0,_l(P,k,H),P.side=ai):_l(P,k,H)}this.compile=function(P,k,H=null){H===null&&(H=P),m=Re.get(H),m.init(k),S.push(m),H.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),P!==H&&P.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();let $=new Set;return P.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ne=z.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){let ve=ne[fe];Ct(ve,H,z),$.add(ve)}else Ct(ne,H,z),$.add(ne)}),m=S.pop(),$},this.compileAsync=function(P,k,H=null){let $=this.compile(P,k,H);return new Promise(z=>{function ne(){if($.forEach(function(fe){be.get(fe).currentProgram.isReady()&&$.delete(fe)}),$.size===0){z(P);return}setTimeout(ne,10)}Ye.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let pt=null;function ss(P){pt&&pt(P)}function Fi(){mr.stop()}function X1(){mr.start()}let mr=new zv;mr.setAnimationLoop(ss),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(P){pt=P,re.setAnimationLoop(P),P===null?mr.stop():mr.start()},re.addEventListener("sessionstart",Fi),re.addEventListener("sessionend",X1),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,k,T),m=Re.get(P,S.length),m.init(k),S.push(m),Q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),He.setFromProjectionMatrix(Q,_i,k.reversedDepth),Z=this.localClippingEnabled,ke=oe.init(this.clippingPlanes,Z),x=X.get(P,b.length),x.init(),b.push(x),re.enabled===!0&&re.isPresenting===!0){let ne=y.xr.getDepthSensingMesh();ne!==null&&ad(ne,k,-1/0,y.sortObjects)}ad(P,k,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(K,ie),ot=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ot&&Ae.addToRenderList(x,P),this.info.render.frame++,ke===!0&&oe.beginShadows();let H=m.state.shadowsArray;Me.render(H,P,k),ke===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=x.opaque,z=x.transmissive;if(m.setupLights(),k.isArrayCamera){let ne=k.cameras;if(z.length>0)for(let fe=0,ve=ne.length;fe<ve;fe++){let me=ne[fe];Z1($,z,P,me)}ot&&Ae.render(P);for(let fe=0,ve=ne.length;fe<ve;fe++){let me=ne[fe];Y1(x,P,me,me.viewport)}}else z.length>0&&Z1($,z,P,k),ot&&Ae.render(P),Y1(x,P,k);T!==null&&w===0&&(Qe.updateMultisampleRenderTarget(T),Qe.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(y,P,k),he.resetDefaultState(),v=-1,_=null,S.pop(),S.length>0?(m=S[S.length-1],ke===!0&&oe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function ad(P,k,H,$){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)H=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||He.intersectsSprite(P)){$&&ze.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Q);let fe=G.update(P),ve=P.material;ve.visible&&x.push(P,fe,ve,H,ze.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||He.intersectsObject(P))){let fe=G.update(P),ve=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ze.copy(P.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),ze.copy(fe.boundingSphere.center)),ze.applyMatrix4(P.matrixWorld).applyMatrix4(Q)),Array.isArray(ve)){let me=fe.groups;for(let Oe=0,Ve=me.length;Oe<Ve;Oe++){let Pe=me[Oe],at=ve[Pe.materialIndex];at&&at.visible&&x.push(P,fe,at,H,ze.z,Pe)}}else ve.visible&&x.push(P,fe,ve,H,ze.z,null)}}let ne=P.children;for(let fe=0,ve=ne.length;fe<ve;fe++)ad(ne[fe],k,H,$)}function Y1(P,k,H,$){let z=P.opaque,ne=P.transmissive,fe=P.transparent;m.setupLightsView(H),ke===!0&&oe.setGlobalState(y.clippingPlanes,H),$&&_e.viewport(R.copy($)),z.length>0&&yl(z,k,H),ne.length>0&&yl(ne,k,H),fe.length>0&&yl(fe,k,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Z1(P,k,H,$){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Ui(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?wo:Mi,minFilter:$s,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let ne=m.state.transmissionRenderTarget[$.id],fe=$.viewport||R;ne.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);let ve=y.getRenderTarget(),me=y.getActiveCubeFace(),Oe=y.getActiveMipmapLevel();y.setRenderTarget(ne),y.getClearColor(N),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),ot&&Ae.render(H);let Ve=y.toneMapping;y.toneMapping=ms;let Pe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),ke===!0&&oe.setGlobalState(y.clippingPlanes,$),yl(P,H,$),Qe.updateMultisampleRenderTarget(ne),Qe.updateRenderTargetMipmap(ne),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Et=0,Gt=k.length;Et<Gt;Et++){let Dt=k[Et],wt=Dt.object,Le=Dt.geometry,Bt=Dt.material,ht=Dt.group;if(Bt.side===ai&&wt.layers.test($.layers)){let Gn=Bt.side;Bt.side=En,Bt.needsUpdate=!0,j1(wt,H,$,Le,Bt,ht),Bt.side=Gn,Bt.needsUpdate=!0,at=!0}}at===!0&&(Qe.updateMultisampleRenderTarget(ne),Qe.updateRenderTargetMipmap(ne))}y.setRenderTarget(ve,me,Oe),y.setClearColor(N,B),Pe!==void 0&&($.viewport=Pe),y.toneMapping=Ve}function yl(P,k,H){let $=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ne=P.length;z<ne;z++){let fe=P[z],ve=fe.object,me=fe.geometry,Oe=fe.group,Ve=fe.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),ve.layers.test(H.layers)&&j1(ve,k,H,me,Ve,Oe)}}function j1(P,k,H,$,z,ne){P.onBeforeRender(y,k,H,$,z,ne),P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),z.onBeforeRender(y,k,H,$,P,ne),z.transparent===!0&&z.side===ai&&z.forceSinglePass===!1?(z.side=En,z.needsUpdate=!0,y.renderBufferDirect(H,k,$,z,P,ne),z.side=fs,z.needsUpdate=!0,y.renderBufferDirect(H,k,$,z,P,ne),z.side=ai):y.renderBufferDirect(H,k,$,z,P,ne),P.onAfterRender(y,k,H,$,z,ne)}function _l(P,k,H){k.isScene!==!0&&(k=Ee);let $=be.get(P),z=m.state.lights,ne=m.state.shadowsArray,fe=z.state.version,ve=Y.getParameters(P,z.state,ne,k,H),me=Y.getProgramCacheKey(ve),Oe=$.programs;$.environment=P.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(P.isMeshStandardMaterial?$t:rn).get(P.envMap||$.environment),$.envMapRotation=$.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Oe===void 0&&(P.addEventListener("dispose",j),Oe=new Map,$.programs=Oe);let Ve=Oe.get(me);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===fe)return K1(P,ve),Ve}else ve.uniforms=Y.getUniforms(P),P.onBeforeCompile(ve,y),Ve=Y.acquireProgram(ve,me),Oe.set(me,Ve),$.uniforms=ve.uniforms;let Pe=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),K1(P,ve),$.needsLights=VO(P),$.lightsStateVersion=fe,$.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function J1(P){if(P.uniformsList===null){let k=P.currentProgram.getUniforms();P.uniformsList=Io.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function K1(P,k){let H=be.get(P);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function zO(P,k,H,$,z){k.isScene!==!0&&(k=Ee),Qe.resetTextureUnits();let ne=k.fog,fe=$.isMeshStandardMaterial?k.environment:null,ve=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Mr,me=($.isMeshStandardMaterial?$t:rn).get($.envMap||fe),Oe=$.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,Et=!!H.morphAttributes.color,Gt=ms;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Gt=y.toneMapping);let Dt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,wt=Dt!==void 0?Dt.length:0,Le=be.get($),Bt=m.state.lights;if(ke===!0&&(Z===!0||P!==_)){let _n=P===_&&$.id===v;oe.setState($,P,_n)}let ht=!1;$.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Bt.state.version||Le.outputColorSpace!==ve||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==me||$.fog===!0&&Le.fog!==ne||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Ve||Le.morphTargets!==Pe||Le.morphNormals!==at||Le.morphColors!==Et||Le.toneMapping!==Gt||Le.morphTargetsCount!==wt)&&(ht=!0):(ht=!0,Le.__version=$.version);let Gn=Le.currentProgram;ht===!0&&(Gn=_l($,k,z));let eo=!1,Hn=!1,Ia=!1,kt=Gn.getUniforms(),ei=Le.uniforms;if(_e.useProgram(Gn.program)&&(eo=!0,Hn=!0,Ia=!0),$.id!==v&&(v=$.id,Hn=!0),eo||_!==P){_e.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),kt.setValue(O,"projectionMatrix",P.projectionMatrix),kt.setValue(O,"viewMatrix",P.matrixWorldInverse);let Pn=kt.map.cameraPosition;Pn!==void 0&&Pn.setValue(O,pe.setFromMatrixPosition(P.matrixWorld)),qe.logarithmicDepthBuffer&&kt.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&kt.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),_!==P&&(_=P,Hn=!0,Ia=!0)}if(z.isSkinnedMesh){kt.setOptional(O,z,"bindMatrix"),kt.setOptional(O,z,"bindMatrixInverse");let _n=z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),kt.setValue(O,"boneTexture",_n.boneTexture,Qe))}z.isBatchedMesh&&(kt.setOptional(O,z,"batchingTexture"),kt.setValue(O,"batchingTexture",z._matricesTexture,Qe),kt.setOptional(O,z,"batchingIdTexture"),kt.setValue(O,"batchingIdTexture",z._indirectTexture,Qe),kt.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&kt.setValue(O,"batchingColorTexture",z._colorsTexture,Qe));let ti=H.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&se.update(z,H,Gn),(Hn||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,kt.setValue(O,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ei.envMap.value=me,ei.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(ei.envMapIntensity.value=k.environmentIntensity),Hn&&(kt.setValue(O,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&qO(ei,Ia),ne&&$.fog===!0&&ee.refreshFogUniforms(ei,ne),ee.refreshMaterialUniforms(ei,$,V,W,m.state.transmissionRenderTarget[P.id]),Io.upload(O,J1(Le),ei,Qe)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Io.upload(O,J1(Le),ei,Qe),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&kt.setValue(O,"center",z.center),kt.setValue(O,"modelViewMatrix",z.modelViewMatrix),kt.setValue(O,"normalMatrix",z.normalMatrix),kt.setValue(O,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let _n=$.uniformsGroups;for(let Pn=0,cd=_n.length;Pn<cd;Pn++){let gr=_n[Pn];je.update(gr,Gn),je.bind(gr,Gn)}}return Gn}function qO(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function VO(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,k,H){let $=be.get(P);$.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),be.get(P.texture).__webglTexture=k,be.get(P.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:H,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,k){let H=be.get(P);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0};let GO=O.createFramebuffer();this.setRenderTarget=function(P,k=0,H=0){T=P,A=k,w=H;let $=!0,z=null,ne=!1,fe=!1;if(P){let me=be.get(P);if(me.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(O.FRAMEBUFFER,null),$=!1;else if(me.__webglFramebuffer===void 0)Qe.setupRenderTarget(P);else if(me.__hasExternalTextures)Qe.rebindTextures(P,be.get(P.texture).__webglTexture,be.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Pe=P.depthTexture;if(me.__boundDepthTexture!==Pe){if(Pe!==null&&be.has(Pe)&&(P.width!==Pe.image.width||P.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(P)}}let Oe=P.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(fe=!0);let Ve=be.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?z=Ve[k][H]:z=Ve[k],ne=!0):P.samples>0&&Qe.useMultisampledRTT(P)===!1?z=be.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[H]:z=Ve,R.copy(P.viewport),D.copy(P.scissor),L=P.scissorTest}else R.copy(le).multiplyScalar(V).floor(),D.copy(Ce).multiplyScalar(V).floor(),L=Ke;if(H!==0&&(z=GO),_e.bindFramebuffer(O.FRAMEBUFFER,z)&&$&&_e.drawBuffers(P,z),_e.viewport(R),_e.scissor(D),_e.setScissorTest(L),ne){let me=be.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,H)}else if(fe){let me=k;for(let Oe=0;Oe<P.textures.length;Oe++){let Ve=be.get(P.textures[Oe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Oe,Ve.__webglTexture,H,me)}}else if(P!==null&&H!==0){let me=be.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,H)}v=-1},this.readRenderTargetPixels=function(P,k,H,$,z,ne,fe,ve=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){_e.bindFramebuffer(O.FRAMEBUFFER,me);try{let Oe=P.textures[ve],Ve=Oe.format,Pe=Oe.type;if(!qe.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-$&&H>=0&&H<=P.height-z&&(P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),O.readPixels(k,H,$,z,we.convert(Ve),we.convert(Pe),ne))}finally{let Oe=T!==null?be.get(T).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(P,k,H,$,z,ne,fe,ve=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(k>=0&&k<=P.width-$&&H>=0&&H<=P.height-z){_e.bindFramebuffer(O.FRAMEBUFFER,me);let Oe=P.textures[ve],Ve=Oe.format,Pe=Oe.type;if(!qe.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,ne.byteLength,O.STREAM_READ),P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve),O.readPixels(k,H,$,z,we.convert(Ve),we.convert(Pe),0);let Et=T!==null?be.get(T).__webglFramebuffer:null;_e.bindFramebuffer(O.FRAMEBUFFER,Et);let Gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dv(O,Gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ne),O.deleteBuffer(at),O.deleteSync(Gt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,k=null,H=0){let $=Math.pow(2,-H),z=Math.floor(P.image.width*$),ne=Math.floor(P.image.height*$),fe=k!==null?k.x:0,ve=k!==null?k.y:0;Qe.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,H,0,0,fe,ve,z,ne),_e.unbindTexture()};let HO=O.createFramebuffer(),$O=O.createFramebuffer();this.copyTextureToTexture=function(P,k,H=null,$=null,z=0,ne=null){ne===null&&(z!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=z,z=0):ne=0);let fe,ve,me,Oe,Ve,Pe,at,Et,Gt,Dt=P.isCompressedTexture?P.mipmaps[ne]:P.image;if(H!==null)fe=H.max.x-H.min.x,ve=H.max.y-H.min.y,me=H.isBox3?H.max.z-H.min.z:1,Oe=H.min.x,Ve=H.min.y,Pe=H.isBox3?H.min.z:0;else{let ti=Math.pow(2,-z);fe=Math.floor(Dt.width*ti),ve=Math.floor(Dt.height*ti),P.isDataArrayTexture?me=Dt.depth:P.isData3DTexture?me=Math.floor(Dt.depth*ti):me=1,Oe=0,Ve=0,Pe=0}$!==null?(at=$.x,Et=$.y,Gt=$.z):(at=0,Et=0,Gt=0);let wt=we.convert(k.format),Le=we.convert(k.type),Bt;k.isData3DTexture?(Qe.setTexture3D(k,0),Bt=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Qe.setTexture2DArray(k,0),Bt=O.TEXTURE_2D_ARRAY):(Qe.setTexture2D(k,0),Bt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);let ht=O.getParameter(O.UNPACK_ROW_LENGTH),Gn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),eo=O.getParameter(O.UNPACK_SKIP_PIXELS),Hn=O.getParameter(O.UNPACK_SKIP_ROWS),Ia=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Pe);let kt=P.isDataArrayTexture||P.isData3DTexture,ei=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){let ti=be.get(P),_n=be.get(k),Pn=be.get(ti.__renderTarget),cd=be.get(_n.__renderTarget);_e.bindFramebuffer(O.READ_FRAMEBUFFER,Pn.__webglFramebuffer),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,cd.__webglFramebuffer);for(let gr=0;gr<me;gr++)kt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(P).__webglTexture,z,Pe+gr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(k).__webglTexture,ne,Gt+gr)),O.blitFramebuffer(Oe,Ve,fe,ve,at,Et,fe,ve,O.DEPTH_BUFFER_BIT,O.NEAREST);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||P.isRenderTargetTexture||be.has(P)){let ti=be.get(P),_n=be.get(k);_e.bindFramebuffer(O.READ_FRAMEBUFFER,HO),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,$O);for(let Pn=0;Pn<me;Pn++)kt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ti.__webglTexture,z,Pe+Pn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ti.__webglTexture,z),ei?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,_n.__webglTexture,ne,Gt+Pn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,_n.__webglTexture,ne),z!==0?O.blitFramebuffer(Oe,Ve,fe,ve,at,Et,fe,ve,O.COLOR_BUFFER_BIT,O.NEAREST):ei?O.copyTexSubImage3D(Bt,ne,at,Et,Gt+Pn,Oe,Ve,fe,ve):O.copyTexSubImage2D(Bt,ne,at,Et,Oe,Ve,fe,ve);_e.bindFramebuffer(O.READ_FRAMEBUFFER,null),_e.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ei?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(Bt,ne,at,Et,Gt,fe,ve,me,wt,Le,Dt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Bt,ne,at,Et,Gt,fe,ve,me,wt,Dt.data):O.texSubImage3D(Bt,ne,at,Et,Gt,fe,ve,me,wt,Le,Dt):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ne,at,Et,fe,ve,wt,Le,Dt.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ne,at,Et,Dt.width,Dt.height,wt,Dt.data):O.texSubImage2D(O.TEXTURE_2D,ne,at,Et,fe,ve,wt,Le,Dt);O.pixelStorei(O.UNPACK_ROW_LENGTH,ht),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Gn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,eo),O.pixelStorei(O.UNPACK_SKIP_ROWS,Hn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ia),ne===0&&k.generateMipmaps&&O.generateMipmap(Bt),_e.unbindTexture()},this.initRenderTarget=function(P){be.get(P).__webglFramebuffer===void 0&&Qe.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Qe.setTextureCube(P,0):P.isData3DTexture?Qe.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Qe.setTexture2DArray(P,0):Qe.setTexture2D(P,0),_e.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,_e.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}};var $v={type:"change"},Tp={type:"start"},Xv={type:"end"},uh=new wr,Wv=new ii,b8=Math.cos(70*rp.DEG2RAD),nn=new q,In=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wp=1e-6,hh=class extends ac{constructor(e,n=null){super(e,n),this.state=Mt.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:Hs.ROTATE,TWO:Hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new ri,this._lastTargetPosition=new q,this._quat=new ri().setFromUnitVectors(e.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mo,this._sphericalDelta=new Mo,this._scale=1,this._panOffset=new q,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new q,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=E8.bind(this),this._onPointerDown=S8.bind(this),this._onPointerUp=M8.bind(this),this._onContextMenu=P8.bind(this),this._onMouseWheel=T8.bind(this),this._onKeyDown=C8.bind(this),this._onTouchStart=R8.bind(this),this._onTouchMove=D8.bind(this),this._onMouseDown=A8.bind(this),this._onMouseMove=w8.bind(this),this._interceptControlDown=I8.bind(this),this._interceptControlUp=L8.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($v),this.update(),this.state=Mt.NONE}update(e=null){let n=this.object.position;nn.copy(n).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),n.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=nn.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new q(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new q(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(uh.origin.copy(this.object.position),uh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uh.direction))<b8?this.object.lookAt(this.target):(Wv.setFromNormalAndCoplanarPoint(this.object.up,this.target),uh.intersectPlane(Wv,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>wp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wp||this._lastTargetPosition.distanceToSquared(this.target)>wp?(this.dispatchEvent($v),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){nn.setFromMatrixColumn(n,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,n){this.screenSpacePanning===!0?nn.setFromMatrixColumn(n,1):(nn.setFromMatrixColumn(n,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;nn.copy(s).sub(this.target);let r=nn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new $e,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){let n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function S8(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function E8(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function M8(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xv),this.state=Mt.NONE;break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function A8(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Mt.DOLLY;break;case Gs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}break;case Gs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Tp)}function w8(t){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function T8(t){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(t.preventDefault(),this.dispatchEvent(Tp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Xv))}function C8(t){this.enabled!==!1&&this._handleKeyDown(t)}function R8(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Mt.TOUCH_ROTATE;break;case Hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case Hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Mt.TOUCH_DOLLY_PAN;break;case Hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Tp)}function D8(t){switch(this._trackPointer(t),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Mt.NONE}}function P8(t){this.enabled!==!1&&t.preventDefault()}function I8(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function L8(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var EO=ex(At(),1),sd=ex(vO(),1),{primitives:MO,booleans:Efe,measurements:yO,geometries:_O}=EO.default,{subtract:lSe}=Efe,AO=Math.PI*2,Mfe=t=>t*Math.PI/180,id=.8,rd={telefoon:{kind:"cilinder",diameter:70,height:65,cutMode:"angle",cutAngle:60,cutHeight:20,wall:0,segments:96},plantenpot:{kind:"kegel",bottomDiameter:65,topDiameter:85,height:75,cutMode:"angle",cutAngle:0,cutHeight:0,wall:2,segments:96},sleeve:{kind:"cilinder",diameter:80,height:110,cutMode:"angle",cutAngle:0,cutHeight:0,wall:2,openBottom:!0,segments:128},doorvoer:{kind:"ring",outerDiameter:30,innerDiameter:18,wallMode:"inner",wall:6,height:10,chamfer:.8,segments:64}};function bO(t,e=!1,n=!1){let i=t.kind==="piramide"?t.sides:t.segments,s=e?t.wall:0,r=u=>t.cutMode==="height"?t.cutHeight:t.height-Math.tan(Mfe(t.cutAngle))*u,o=u=>t.kind==="cilinder"?t.diameter/2-s:t.kind==="kegel"?(t.bottomDiameter+(t.topDiameter-t.bottomDiameter)*u/t.height)/2-s:(t.bottomSide+(t.topSide-t.bottomSide)*u/t.height)/(2*Math.sin(Math.PI/t.sides))-s/Math.sin(Math.PI/t.sides),a=(u,f)=>{let h=(t.kind==="piramide"?Math.PI/2-Math.PI/i:0)+u*AO/i,d=o(f);return[d*Math.cos(h),d*Math.sin(h),f]},c=[],l=[];for(let u=0;u<i;u++){c.push(a(u,n?0:s));let f=a(u,t.height);l.push(a(u,r(f[1])))}return{bottom:c,top:l}}function SO(t,e,n=null,i=null,s=!1){let r=[],o=[],a=d=>{let g=r.length;return r.push(...d),[...d.keys()].map(p=>g+p)},c=a(t),l=a(e),u=t.length,f=(d,g,p,x)=>{o.push([d,g,p],[d,p,x])};for(let d=0;d<u;d++){let g=(d+1)%u;f(c[d],c[g],l[g],l[d])}let h=(d,g)=>{for(let p=1;p<u-1;p++)o.push(g?[d[0],d[p],d[p+1]]:[d[0],d[p+1],d[p]])};if(!i)h(c,!1),h(l,!0);else{let d=a(n),g=a(i);if(s)for(let p=0;p<u;p++){let x=(p+1)%u;f(c[p],d[p],d[x],c[x])}else h(c,!1),h(d,!0);for(let p=0;p<u;p++){let x=(p+1)%u;f(d[x],d[p],g[p],g[x]),f(l[p],l[x],g[x],g[p])}}return MO.polyhedron({points:r,faces:o,orientation:"outward"})}function Afe(t){let e=t.outerDiameter/2,n=t.wallMode==="inner"?t.innerDiameter/2:e-t.wall,i=Math.min(t.chamfer,t.height/2,e-n),s=t.segments,r=(m,b,S)=>{let y=S*AO/s;return[m*Math.cos(y),m*Math.sin(y),b]},a=(i>0?[[e-i,0],[e,i],[e,t.height-i],[e-i,t.height]]:[[e,0],[e,t.height]]).map(([m,b])=>Array.from({length:s},(S,y)=>r(m,b,y))),c=Array.from({length:s},(m,b)=>r(n,0,b)),l=Array.from({length:s},(m,b)=>r(n,t.height,b)),u=[],f=[],h=m=>{let b=u.length;return u.push(...m),m.map((S,y)=>b+y)},d=a.map(h),g=h(c),p=h(l),x=(m,b,S,y)=>f.push([m,b,S],[m,S,y]);for(let m=0;m<d.length-1;m++)for(let b=0;b<s;b++){let S=(b+1)%s;x(d[m][b],d[m][S],d[m+1][S],d[m+1][b])}for(let m=0;m<s;m++){let b=(m+1)%s;x(g[b],g[m],p[m],p[b]),x(d[0][m],g[m],g[b],d[0][b]);let S=d[d.length-1];x(S[m],S[b],p[b],p[m])}return MO.polyhedron({points:u,faces:f,orientation:"outward"})}function wO(t){let e={cutMode:"angle",cutAngle:0,cutHeight:0,segments:64,wall:0,chamfer:0,...t};if(e.kind==="ring")return Afe(e);let n=bO(e,!1);if(!e.wall)return SO(n.bottom,n.top);let i=!!e.openBottom,s=bO(e,!0,i);return SO(n.bottom,n.top,s.bottom,s.top,i)}function TO(t){let e=[],n=(i,s,r=.1)=>{Number(t[i])>=r||e.push(`${s} moet minimaal ${String(r).replace(".",",")} mm zijn.`)};if(t.kind==="cilinder"&&(n("diameter","Diameter"),n("height","Hoogte")),t.kind==="kegel"&&(n("bottomDiameter","Onderdiameter"),n("topDiameter","Bovendiameter"),n("height","Hoogte")),t.kind==="piramide"&&(n("bottomSide","Onderzijde"),n("topSide","Bovenzijde"),n("height","Hoogte"),(!Number.isInteger(Number(t.sides))||t.sides<3||t.sides>8)&&e.push("Aantal zijden moet een geheel getal van 3 tot 8 zijn.")),t.kind==="ring"){t.wallMode!=="inner"&&t.wall>0&&t.wall<id&&e.push(`Wanddikte moet minimaal ${String(id).replace(".",",")} mm zijn.`),n("outerDiameter","Buitendiameter"),n("height","Hoogte");let i=t.wallMode==="inner"?t.innerDiameter:t.outerDiameter-2*t.wall;i>0&&i<t.outerDiameter||e.push("Binnendiameter moet groter dan 0 en kleiner dan de buitendiameter zijn."),(t.chamfer<0||t.chamfer>t.height/2)&&e.push("Afschuining moet tussen 0 en de halve hoogte liggen.")}else if(t.wall>0){t.wall<id&&e.push(`Wanddikte moet 0 (massief) of minimaal ${String(id).replace(".",",")} mm zijn.`);let i=Math.min(t.diameter||1/0,t.bottomDiameter||1/0,t.topDiameter||1/0,t.bottomSide||1/0,t.topSide||1/0);t.wall*2>=i&&e.push("Wanddikte is te groot voor de kleinste buitenmaat."),t.wall>=t.height&&e.push("Wanddikte moet kleiner zijn dan de hoogte.")}return t.kind!=="ring"&&(t.cutMode==="angle"&&(t.cutAngle<0||t.cutAngle>60)&&e.push("Snijhoek moet tussen 0 en 60 graden liggen (gemeten vanaf een vlakke bovenkant)."),t.cutMode==="height"&&(t.cutHeight<=0||t.cutHeight>=t.height)&&e.push("Snijhoogte moet tussen 0 en de hoogte liggen.")),(t.segments<16||t.segments>128||!Number.isInteger(Number(t.segments)))&&e.push("Segmenten moet een geheel getal van 16 tot 128 zijn."),e}function CO(t,e={}){let n=yO.measureBoundingBox(t),i=_O.geom3.toPolygons(t),s=0;for(let l of i)s+=Math.max(0,l.vertices.length-2);let r=new Map,o=l=>l.map(u=>(Math.abs(u)<5e-6?0:u).toFixed(5)).join(",");for(let l of i){let u=l.vertices;for(let f=0;f<u.length;f++){let h=o(u[f]),d=o(u[(f+1)%u.length]),g=h<d?`${h}|${d}`:`${d}|${h}`;r.set(g,(r.get(g)||0)+1)}}let a=[...r.values()].filter(l=>l!==2).length,c=_O.geom3.toPoints(t).flat();return{min:n[0],max:n[1],size:n[1].map((l,u)=>l-n[0][u]),volume:yO.measureVolume(t),polygons:i.length,triangles:s,openEdges:a,isClosed:a===0,vertices:c,trianglesForView:(()=>{let l=[];for(let u of i)for(let f=1;f<u.vertices.length-1;f++)l.push(...u.vertices[0],...u.vertices[f],...u.vertices[f+1]);return l})()}}function RO(t){let e=t.reduce((s,r)=>s+r.byteLength,0),n=new Uint8Array(e),i=0;for(let s of t)n.set(new Uint8Array(s),i),i+=s.byteLength;return n}function DO(t){return RO(sd.stlSerializer.serialize({binary:!0},t))}function PO(t,e="Vorm"){return RO(sd.m3fSerializer.serialize({metadata:{title:e,creator:"Tech demo 11",description:"Gemaakt met JSCAD; maten in millimeters"}},t))}var Ie=t=>document.getElementById(t),dr=(t,e=1)=>Number(t).toLocaleString("nl-NL",{maximumFractionDigits:e}),Vn=window.__demo11={ready:!1,builds:0,geometry:null,info:null,params:null,error:null},IO,LO="",V1={kind:"cilinder",diameter:50,height:40,bottomDiameter:60,topDiameter:30,bottomSide:50,topSide:30,sides:6,outerDiameter:30,innerDiameter:18,wallMode:"wall",wall:2,solid:!1,openBottom:!1,cutMode:"angle",cutAngle:25,cutHeight:20,chamfer:.8,segments:64};function wfe(){let t={kind:Ie("kind").value,wallMode:Ie("wallMode").value,cutMode:Ie("cutMode").value,solid:Ie("solid").checked,openBottom:Ie("openBottom").checked};for(let e of["diameter","height","bottomDiameter","topDiameter","bottomSide","topSide","sides","outerDiameter","innerDiameter","wall","cutAngle","cutHeight","chamfer","segments"])t[e]=Number(Ie(e).value);return t.solid&&(t.wall=0),(t.solid||t.kind==="ring")&&(t.openBottom=!1),t}function G1(t){for(let[e,n]of Object.entries(t)){let i=Ie(e);i&&(i.type==="checkbox"?i.checked=!!n:i.value=n)}NO(),H1()}function NO(){let t=Ie("kind").value;for(let e of document.querySelectorAll("[data-shape]"))e.hidden=!e.dataset.shape.split(" ").includes(t);Ie("cutSection").hidden=t==="ring",Ie("cutValue").hidden=Ie("cutMode").value!=="height",Ie("angleValue").hidden=Ie("cutMode").value!=="angle",Ie("wallLabel").textContent=Ie("wallMode").value==="inner"?"Wanddikte (informatie)":"Wanddikte (mm)",Ie("wallMode").hidden=t!=="ring",Ie("innerDiameter").closest("label").hidden=Ie("wallMode").value!=="inner",Ie("wall").disabled=t==="ring"&&Ie("wallMode").value==="inner",Ie("solid").closest("label").hidden=t==="ring",t==="ring"&&Ie("solid").checked&&(Ie("solid").checked=!1),Ie("wall").closest("label").classList.toggle("disabled",Ie("solid").checked&&t!=="ring"),(Ie("solid").checked||t==="ring")&&(Ie("openBottom").checked=!1),Ie("openBottom").closest("label").hidden=t==="ring"||Ie("solid").checked,Ie("segmentsValue").textContent=Ie("segments").value}function FO(){Ie("kind").value==="ring"&&Ie("wallMode").value==="inner"&&(Ie("wall").value=Math.max(0,(Number(Ie("outerDiameter").value)-Number(Ie("innerDiameter").value))/2).toFixed(1))}function H1(){NO();let t=wfe(),e=TO(t);if(Ie("messages").innerHTML=e.map(n=>`<div class="msg err">${n}</div>`).join(""),Ie("dlStl").disabled=Ie("dl3mf").disabled=e.length>0,Vn.error=e[0]||null,e.length){Vn.ready=!1;return}try{let n=wO(t),i=CO(n,t);if(!i.isClosed)throw new Error(`Het model heeft ${i.openEdges} open randen.`);Vn.geometry=n,Vn.info=i,Vn.params=t,Vn.builds++,Vn.ready=!0,Tfe(i);let s=i.volume/1e3;Ie("readout").innerHTML=`<b>Buitenmaten:</b> ${i.size.map(o=>dr(o,2)).join(" \xD7 ")} mm<br><b>Volume:</b> ${dr(s,1)} cm\xB3 \xB7 <b>Driehoeken:</b> ${i.triangles}<br><span class="ok-text">\u2713 Gesloten model, klaar om te slicen</span>`;let r=[];t.kind!=="ring"&&r.push(t.wall===0?["ok","Massief model. Kies een wanddikte voor een open bakje."]:["ok",t.openBottom?`Hol model met ${dr(t.wall,1)} mm wand, open bodem (kijkgat). Handig als sleeve om een tumbler of fles.`:`Hol model met ${dr(t.wall,1)} mm wand en bodem. De binnenzijde volgt de schuine snede.`]),t.kind==="ring"&&r.push(["ok",`Doorvoergat \xD8 ${dr(t.wallMode==="inner"?t.innerDiameter:t.outerDiameter-2*t.wall,1)} mm${t.chamfer?` \xB7 afschuining ${dr(t.chamfer,1)} mm`:""}.`]),Math.max(i.size[0],i.size[1])>270||i.size[2]>270?r.push(["warn","Past niet binnen 270 \xD7 270 \xD7 270 mm van de Snapmaker U1. Verklein de maten."]):r.push(["ok","Past binnen het maximale bouwvolume van de Snapmaker U1 (270 mm)."]),t.cutMode==="angle"&&t.cutAngle>40&&r.push(["warn","Bij een steile snede kan de overhang support nodig hebben. Controleer dit in je slicer."]),Ie("messages").innerHTML=r.map(([o,a])=>`<div class="msg ${o}">${a}</div>`).join("")}catch(n){console.error(n),Vn.error=n.message,Vn.ready=!1,Ie("messages").innerHTML=`<div class="msg err">Model kon niet gemaakt worden: ${n.message}</div>`,Ie("dlStl").disabled=Ie("dl3mf").disabled=!0}}var od=Ie("view"),xl=new ch({antialias:!0,preserveDrawingBuffer:!0});xl.setPixelRatio(Math.min(2,window.devicePixelRatio||1));od.prepend(xl.domElement);var vl=new Ja;vl.background=new et(15659256);var pr=new mn(35,1,.1,3e3),$1=new hh(pr,xl.domElement);$1.enableDamping=!0;vl.add(new ic(16777215,6779020,2));var OO=new rc(16777215,2.2);OO.position.set(80,180,130);vl.add(OO);var Pa=new us;Pa.rotation.x=-Math.PI/2;vl.add(Pa);var UO=new Sn(new Tr(270,270),new Eo({color:14081002,roughness:1,transparent:!0,opacity:.5}));UO.position.set(0,0,-.05);Pa.add(UO);var W1=new oc(270,27,10331846,12633818);W1.rotation.x=Math.PI/2;W1.position.z=0;Pa.add(W1);var Qr;function Tfe(t){Qr&&(Pa.remove(Qr),Qr.geometry.dispose(),Qr.material.dispose());let e=new oi;e.setAttribute("position",new gn(t.trianglesForView,3)),e.computeVertexNormals(),Qr=new Sn(e,new Eo({color:5861352,roughness:.52,metalness:.04,side:ai})),Pa.add(Qr);let n=t.size.map(i=>i.toFixed(2)).join(":");if(n!==LO){LO=n;let i=new Bi().setFromObject(Qr),s=i.getCenter(new q),r=i.getSize(new q).length();$1.target.copy(s),pr.position.copy(s).add(new q(.65,.65,1).normalize().multiplyScalar(r*1.65)),pr.near=Math.max(.1,r/100),pr.far=r*20,pr.updateProjectionMatrix()}}function BO(){let t=od.clientWidth||600,e=od.clientHeight||400;xl.setSize(t,e,!1),pr.aspect=t/e,pr.updateProjectionMatrix()}new ResizeObserver(BO).observe(od);BO();(function t(){$1.update(),xl.render(vl,pr),requestAnimationFrame(t)})();function q1(t){let e=Vn.params;return`${{cilinder:"afgeknotte-cilinder",kegel:"afgeknotte-kegel",piramide:"afgeknotte-piramide",ring:"buis-ring"}[e.kind]}-${e.wall>0?"hol-"+String(e.wall).replace(".","p")+"mm"+(e.openBottom?"-open-bodem":""):"massief"}.${t}`}function kO(t,e,n){let i=URL.createObjectURL(new Blob([t],{type:n})),s=document.createElement("a");s.href=i,s.download=e,document.body.append(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),2e3)}Ie("dlStl").onclick=()=>{if(Vn.ready){let t=DO(Vn.geometry);kO(t,q1("stl"),"model/stl"),Ie("status").textContent=`STL gedownload: ${dr(t.length/1024,0)} kB, binair, maten in mm.`}};Ie("dl3mf").onclick=()=>{if(Vn.ready){let t=PO(Vn.geometry,q1("3mf"));kO(t,q1("3mf"),"model/3mf"),Ie("status").textContent=`3MF gedownload: ${dr(t.length/1024,0)} kB. Open als \xE9\xE9n object in Snapmaker Orca.`}};Ie("reset").onclick=()=>G1(V1);Ie("form").addEventListener("input",t=>{FO(),clearTimeout(IO),IO=setTimeout(H1,80)});Ie("form").addEventListener("change",()=>{FO(),H1()});for(let t of document.querySelectorAll("[data-preset]"))t.onclick=()=>G1({...V1,...rd[t.dataset.preset],solid:rd[t.dataset.preset].wall===0,openBottom:!!rd[t.dataset.preset].openBottom});G1(V1);})();
/*! Bundled license information:

xmlchars/xml/1.0/ed5.js:
  (**
   * Character classes and associated utilities for the 5th edition of XML 1.0.
   *
   * @author Louis-Dominique Dubeau
   * @license MIT
   * @copyright Louis-Dominique Dubeau
   *)

xmlchars/xml/1.1/ed2.js:
  (**
   * Character classes and associated utilities for the 2nd edition of XML 1.1.
   *
   * @author Louis-Dominique Dubeau
   * @license MIT
   * @copyright Louis-Dominique Dubeau
   *)

xmlchars/xmlns/1.0/ed3.js:
  (**
   * Character class utilities for XML NS 1.0 edition 3.
   *
   * @author Louis-Dominique Dubeau
   * @license MIT
   * @copyright Louis-Dominique Dubeau
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
