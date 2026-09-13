// LaserFlow shader: Copyright (c) 2026 David Haz. See assets/react-bits-license.md.
// Adapted for this presentation: native WebGL, closed motion cycle, visibility pause.
const VERT = `
precision highp float;
attribute vec3 position;
void main(){
  gl_Position = vec4(position, 1.0);
}
`;
const FRAG = `
#ifdef GL_ES
#extension GL_OES_standard_derivatives : enable
#endif
precision highp float;
precision mediump int;

uniform float iTime;
uniform vec3 iResolution;
uniform vec4 iMouse;
uniform float uWispDensity;
uniform float uTiltScale;
uniform float uFlowTime;
uniform float uFogTime;
uniform float uBeamXFrac;
uniform float uBeamYFrac;
uniform float uFlowSpeed;
uniform float uVLenFactor;
uniform float uHLenFactor;
uniform float uFogIntensity;
uniform float uFogScale;
uniform float uWSpeed;
uniform float uWIntensity;
uniform float uFlowStrength;
uniform float uDecay;
uniform float uFalloffStart;
uniform float uFogFallSpeed;
uniform vec3 uColor;
uniform float uFade;
uniform float uVariant;
uniform float uCycle;

// Core beam/flare shaping and dynamics
#define PI 3.14159265359
#define TWO_PI 6.28318530718
#define EPS 1e-6
#define EDGE_SOFT (DT_LOCAL*4.0)
#define DT_LOCAL 0.0038
#define TAP_RADIUS 6
#define R_H 150.0
#define R_V 150.0
#define FLARE_HEIGHT 16.0
#define FLARE_AMOUNT 8.0
#define FLARE_EXP 2.0
#define TOP_FADE_START 0.1
#define TOP_FADE_EXP 1.0
#define FLOW_PERIOD 0.5
#define FLOW_SHARPNESS 1.5

// Wisps (animated micro-streaks) that travel along the beam
#define W_BASE_X 1.5
#define W_LAYER_GAP 0.25
#define W_LANES 10
#define W_SIDE_DECAY 0.5
#define W_HALF 0.01
#define W_AA 0.15
#define W_CELL 20.0
#define W_SEG_MIN 0.01
#define W_SEG_MAX 0.55
#define W_CURVE_AMOUNT 15.0
#define W_CURVE_RANGE (FLARE_HEIGHT - 3.0)
#define W_BOTTOM_EXP 10.0

// Volumetric fog controls
#define FOG_ON 1
#define FOG_CONTRAST 1.2
#define FOG_SPEED_U 0.1
#define FOG_SPEED_V -0.1
#define FOG_OCTAVES 5
#define FOG_BOTTOM_BIAS 0.8
#define FOG_TILT_TO_MOUSE 0.05
#define FOG_TILT_DEADZONE 0.01
#define FOG_TILT_MAX_X 0.35
#define FOG_TILT_SHAPE 1.5
#define FOG_BEAM_MIN 0.0
#define FOG_BEAM_MAX 0.75
#define FOG_MASK_GAMMA 0.5
#define FOG_EXPAND_SHAPE 12.2
#define FOG_EDGE_MIX 0.5

// Horizontal vignette for the fog volume
#define HFOG_EDGE_START 0.20
#define HFOG_EDGE_END 0.98
#define HFOG_EDGE_GAMMA 1.4
#define HFOG_Y_RADIUS 25.0
#define HFOG_Y_SOFT 60.0

// Beam extents and edge masking
#define EDGE_X0 0.22
#define EDGE_X1 0.995
#define EDGE_X_GAMMA 1.25
#define EDGE_LUMA_T0 0.0
#define EDGE_LUMA_T1 2.0
#define DITHER_STRENGTH 1.0

    float g(float x){return x<=0.00031308?12.92*x:1.055*pow(x,1.0/2.4)-0.055;}
    float bs(vec2 p,vec2 q,float powr){
        float d=distance(p,q),f=powr*uFalloffStart,r=(f*f)/(d*d+EPS);
        return powr*min(1.0,r);
    }
    float bsa(vec2 p,vec2 q,float powr,vec2 s){
        vec2 d=p-q; float dd=(d.x*d.x)/(s.x*s.x)+(d.y*d.y)/(s.y*s.y),f=powr*uFalloffStart,r=(f*f)/(dd+EPS);
        return powr*min(1.0,r);
    }
    float tri01(float x){float f=fract(x);return 1.0-abs(f*2.0-1.0);}
    float tauWf(float t,float tmin,float tmax){float a=smoothstep(tmin,tmin+EDGE_SOFT,t),b=1.0-smoothstep(tmax-EDGE_SOFT,tmax,t);return max(0.0,a*b);} 
    float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+34.123);return fract(p.x*p.y);}
    float vnoise(vec2 p){
        vec2 i=floor(p),f=fract(p);
        float a=h21(i),b=h21(i+vec2(1,0)),c=h21(i+vec2(0,1)),d=h21(i+vec2(1,1));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
    }
    float fbm2(vec2 p){
        float v=0.0,amp=0.6; mat2 m=mat2(0.86,0.5,-0.5,0.86);
        for(int i=0;i<FOG_OCTAVES;++i){v+=amp*vnoise(p); p=m*p*2.03+17.1; amp*=0.52;}
        return v;
    }
    float rGate(float x,float l){float a=smoothstep(0.0,W_AA,x),b=1.0-smoothstep(l,l+W_AA,x);return max(0.0,a*b);}
    float flareY(float y){float t=clamp(1.0-(clamp(y,0.0,FLARE_HEIGHT)/max(FLARE_HEIGHT,EPS)),0.0,1.0);return pow(t,FLARE_EXP);}

    float vWisps(vec2 uv,float topF){
    float y=uv.y,yf=(y+uFlowTime*uWSpeed)/W_CELL;
    float dRaw=clamp(uWispDensity,0.0,2.0),d=dRaw<=0.0?1.0:dRaw;
    float lanesF=floor(float(W_LANES)*min(d,1.0)+0.5); // WebGL1-safe
    int lanes=int(max(1.0,lanesF));
    float sp=min(d,1.0),ep=max(d-1.0,0.0);
    float fm=flareY(max(y,0.0)),rm=clamp(1.0-(y/max(W_CURVE_RANGE,EPS)),0.0,1.0),cm=fm*rm;
    const float G=0.05; float xS=1.0+(FLARE_AMOUNT*W_CURVE_AMOUNT*G)*cm;
    float sPix=clamp(y/R_V,0.0,1.0),bGain=pow(1.0-sPix,W_BOTTOM_EXP),sum=0.0;
    for(int s=0;s<2;++s){
        float sgn=s==0?-1.0:1.0;
        for(int i=0;i<W_LANES;++i){
            if(i>=lanes) break;
            float off=W_BASE_X+float(i)*W_LAYER_GAP,xc=sgn*(off*xS);
            float dx=abs(uv.x-xc),lat=1.0-smoothstep(W_HALF,W_HALF+W_AA,dx),amp=exp(-off*W_SIDE_DECAY);
            float seed=h21(vec2(off,sgn*17.0)),yf2=yf+seed*7.0,ci=floor(yf2),fy=fract(yf2);
            float seg=mix(W_SEG_MIN,W_SEG_MAX,h21(vec2(ci,off*2.3)));
            float spR=h21(vec2(ci,off+sgn*31.0)),seg1=rGate(fy,seg)*step(spR,sp);
            if(ep>0.0){float spR2=h21(vec2(ci*3.1+7.0,off*5.3+sgn*13.0)); float f2=fract(fy+0.5); seg1+=rGate(f2,seg*0.9)*step(spR2,ep);}
            sum+=amp*lat*seg1;
        }
    }
    float span=smoothstep(-3.0,0.0,y)*(1.0-smoothstep(R_V-6.0,R_V,y));
    return uWIntensity*sum*topF*bGain*span;
}

void mainImage(out vec4 fc,in vec2 frag){
    vec2 C=iResolution.xy*.5; float invW=1.0/max(C.x,1.0);
    vec2 sc=(512.0/iResolution.xy)*.4;
    vec2 uv=(frag-C)*sc,off=vec2(uBeamXFrac*iResolution.x*sc.x,uBeamYFrac*iResolution.y*sc.y);
    vec2 uvc = uv - off;
    float a=0.0,b=0.0;
    float basePhase=1.5*PI+uDecay*.5; float tauMin=basePhase-uDecay; float tauMax=basePhase;
    float cx=clamp(uvc.x/(R_H*uHLenFactor),-1.0,1.0),tH=clamp(TWO_PI-acos(cx),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tH+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float spd=max(abs(sin(tu)),0.02),u=clamp((basePhase-tu)/max(uDecay,EPS),0.0,1.0),env=pow(1.0-abs(u*2.0-1.0),0.8);
        vec2 p=vec2((R_H*uHLenFactor)*cos(tu),0.0);
        a+=wt*bs(uvc,p,env*spd);
    }
    float yPix=uvc.y,cy=clamp(-yPix/(R_V*uVLenFactor),-1.0,1.0),tV=clamp(TWO_PI-acos(cy),tauMin,tauMax);
    for(int k=-TAP_RADIUS;k<=TAP_RADIUS;++k){
        float tu=tV+float(k)*DT_LOCAL,wt=tauWf(tu,tauMin,tauMax); if(wt<=0.0) continue;
        float yb=(-R_V)*cos(tu),s=clamp(yb/R_V,0.0,1.0),spd=max(abs(sin(tu)),0.02);
        float env=pow(1.0-s,0.6)*spd;
        float cap=1.0-smoothstep(TOP_FADE_START,1.0,s); cap=pow(cap,TOP_FADE_EXP); env*=cap;
        float ph=s/max(FLOW_PERIOD,EPS)+uFlowTime*uFlowSpeed;
        float fl=pow(tri01(ph),FLOW_SHARPNESS);
        env*=mix(1.0-uFlowStrength,1.0,fl);
        float yp=(-R_V*uVLenFactor)*cos(tu),m=pow(smoothstep(FLARE_HEIGHT,0.0,yp),FLARE_EXP),wx=1.0+FLARE_AMOUNT*m;
        vec2 sig=vec2(wx,1.0),p=vec2(0.0,yp);
        float mask=step(0.0,yp);
        b+=wt*bsa(uvc,p,mask*env,sig);
    }
    float sPix=clamp(yPix/R_V,0.0,1.0),topA=pow(1.0-smoothstep(TOP_FADE_START,1.0,sPix),TOP_FADE_EXP);
    float L=a+b*topA;
    float w=vWisps(vec2(uvc.x,yPix),topA);
    float fog=0.0;
#if FOG_ON
    vec2 fuv=uvc*uFogScale;
    float mAct=step(1.0,length(iMouse.xy)),nx=((iMouse.x-C.x)*invW)*mAct;
    float ax = abs(nx);
    float stMag = mix(ax, pow(ax, FOG_TILT_SHAPE), 0.35);
    float st = sign(nx) * stMag * uTiltScale;
    st = clamp(st, -FOG_TILT_MAX_X, FOG_TILT_MAX_X);
    vec2 dir=normalize(vec2(st,1.0));
    fuv+=uFogTime*uFogFallSpeed*dir;
    vec2 prp=vec2(-dir.y,dir.x);
    fuv+=prp*(0.08*sin(dot(uvc,prp)*0.08+uFogTime*0.9));
    float n=fbm2(fuv+vec2(fbm2(fuv+vec2(7.3,2.1)),fbm2(fuv+vec2(-3.7,5.9)))*0.6);
    n=pow(clamp(n,0.0,1.0),FOG_CONTRAST);
    float pixW = 1.0 / max(iResolution.y, 1.0);
#ifdef GL_OES_standard_derivatives
    float wL = max(fwidth(L), pixW);
#else
    float wL = pixW;
#endif
    float m0=pow(smoothstep(FOG_BEAM_MIN - wL, FOG_BEAM_MAX + wL, L),FOG_MASK_GAMMA);
    float bm=1.0-pow(1.0-m0,FOG_EXPAND_SHAPE); bm=mix(bm*m0,bm,FOG_EDGE_MIX);
    float yP=1.0-smoothstep(HFOG_Y_RADIUS,HFOG_Y_RADIUS+HFOG_Y_SOFT,abs(yPix));
    float nxF=abs((frag.x-C.x)*invW),hE=1.0-smoothstep(HFOG_EDGE_START,HFOG_EDGE_END,nxF); hE=pow(clamp(hE,0.0,1.0),HFOG_EDGE_GAMMA);
    float hW=mix(1.0,hE,clamp(yP,0.0,1.0));
    float bBias=mix(1.0,1.0-sPix,FOG_BOTTOM_BIAS);
    float browserFogIntensity = uFogIntensity;
    browserFogIntensity *= 1.8;
    float radialFade = 1.0 - smoothstep(0.0, 0.7, length(uvc) / 120.0);
    float safariFog = n * browserFogIntensity * bBias * bm * hW * radialFade;
    fog = safariFog;
#endif
    float LF=L+fog;
    float dith=(h21(frag)-0.5)*(DITHER_STRENGTH/255.0);
    float tone=g(LF+w);
    vec3 col=tone*uColor+dith;
    float alpha=clamp(g(L+w*0.6)+dith*0.6,0.0,1.0);
    float nxE=abs((frag.x-C.x)*invW),xF=pow(clamp(1.0-smoothstep(EDGE_X0,EDGE_X1,nxE),0.0,1.0),EDGE_X_GAMMA);
    float scene=LF+max(0.0,w)*0.5,hi=smoothstep(EDGE_LUMA_T0,EDGE_LUMA_T1,scene);
    float eM=mix(xF,1.0,hi);
    col*=eM; alpha*=eM;
    col*=uFade; alpha*=uFade;
    // Continuous ribbons use only integer phase harmonics: identical position AND
    // velocity at each 24-second wrap. Pointer light reveals the existing texture.
    vec2 q=frag/iResolution.xy;
    vec2 mouse=iMouse.xy/iResolution.xy;
    float aspect=iResolution.x/iResolution.y;
    float hover=exp(-dot((q-mouse)*vec2(aspect,1.0),(q-mouse)*vec2(aspect,1.0))*18.0)*iMouse.z;
    vec3 river=vec3(0.0);
    float variant=smoothstep(0.1,0.9,uVariant);
    float tidal=smoothstep(1.1,1.9,uVariant);
    for(int lane=0;lane<24;lane++){
      float f=float(lane)/23.0;
      float x=q.x;
      float turn=uCycle+f*1.4;
      float y=.285+.046*sin(x*6.3+turn)+.022*sin(x*13.0-uCycle*2.0+f*1.8);
      y+=(f-.5)*(.068+.052*sin(x*4.8+uCycle));
      float fan=.255+.072*sin(x*5.2-uCycle+f*.7)+.034*cos(x*9.0+uCycle*2.0+f);
      fan+=(f-.5)*(.095+.105*sin(x*5.0-uCycle));
      y=mix(y,fan,tidal);
      float dist=abs(q.y-y);
      float bright=.35+.65*pow(.5+.5*sin(x*17.0-uCycle*3.0+f*8.0),3.0);
      float thin=exp(-dist*dist/0.0000007);
      float glow=exp(-dist*dist/0.00007)*.08;
      vec3 tint=mix(vec3(.025,.12,.48),vec3(.32,.7,1.0),pow(f,2.0));
      river+=(thin*.21+glow)*tint*bright;
    }
    float edge=smoothstep(0.0,.12,q.x)*(1.0-smoothstep(.9,1.0,q.x));
    river*=edge*(1.0+hover*2.8);
    col*=mix(1.12,.36,variant);
    col+=river*variant*2.7;
    col*=1.0+hover*1.9;
    col+=vec3(.025,.07,.16)*hover*(.12+min(tone,1.0)*.6);
    col=vec3(1.0)-exp(-max(col,vec3(0.0))*1.25);
    fc=vec4(col,alpha);
}

void main(){
  vec4 fc;
  mainImage(fc, gl_FragCoord.xy);
  gl_FragColor = fc;
}
`;
const canvas = document.querySelector('#fusion-beam');
const cover = canvas.closest('section');
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const lightfallFilm = cover.querySelector('[data-lightfall-film]');
let filmReady = false, filmInView = true;
function syncLightfall(){
  if(!lightfallFilm)return;
  const play=selected===0&&filmInView&&!document.hidden&&!reduced.matches&&!document.body.classList.contains('motion-paused');
  lightfallFilm.autoplay=play;
  if(play)lightfallFilm.play().catch(()=>{});else lightfallFilm.pause();
}
if(lightfallFilm){
  lightfallFilm.muted=true;
  if(lightfallFilm.readyState>=2){filmReady=true;cover.classList.add('lightfall-film-ready')}
  lightfallFilm.addEventListener('play',()=>{if(selected!==0||!filmInView||document.hidden||reduced.matches)lightfallFilm.pause()});
  lightfallFilm.addEventListener('loadeddata',()=>{filmReady=true;cover.classList.add('lightfall-film-ready');syncLightfall()});
  lightfallFilm.addEventListener('error',()=>{filmReady=false;cover.classList.remove('lightfall-film-ready')});
  lightfallFilm.addEventListener('timeupdate',()=>{lightfallFilm.dataset.playbackSeconds=lightfallFilm.currentTime.toFixed(2)});
  document.addEventListener('visibilitychange',syncLightfall);
  reduced.addEventListener('change',syncLightfall);
}

const variants=['lightfall','river','tidal'];
let selected=variants.indexOf(new URLSearchParams(location.search).get('beam'));
if(selected<0)selected=0;
let variantValue=selected,pointerX=.5,pointerY=.4,pointerActive=0,targetX=.5,targetY=.4,targetActive=0;
const buttons=[...document.querySelectorAll('[data-light]')];
function setVariant(index,save=false){selected=index;canvas.dataset.variant=variants[index];cover.dataset.lightVariant=variants[index];syncLightfall();buttons.forEach((b,i)=>b.setAttribute('aria-pressed',i===index));if(save){const url=new URL(location.href);url.searchParams.set('beam',variants[index]);history.replaceState(null,'',url)}}
buttons.forEach((button,i)=>button.addEventListener('click',()=>setVariant(i,true)));
setVariant(selected);
cover.addEventListener('pointermove',e=>{const rect=canvas.getBoundingClientRect();targetX=Math.max(0,Math.min(1,(e.clientX-rect.left)/rect.width));targetY=Math.max(0,Math.min(1,1-(e.clientY-rect.top)/rect.height));targetActive=1;});
cover.addEventListener('pointerleave',()=>{targetActive=0});
let gl, frame, program, inView = true, elapsed = 0, previous = 0;
function start() {
  gl = canvas.getContext('webgl', {alpha: false, antialias: false, depth: false, powerPreference: 'low-power'});
  if (!gl) return;
  gl.getExtension('OES_standard_derivatives');
  const compile = (type, source) => {
    const shader = gl.createShader(type); gl.shaderSource(shader, source); gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
    return shader;
  };
  program = gl.createProgram();
  gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);
  const buffer = gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,0,3,-1,0,-1,3,0]), gl.STATIC_DRAW);
  const attr = gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,3,gl.FLOAT,false,0,0);
  const uniforms = Object.fromEntries([...FRAG.matchAll(/uniform\s+\w+\s+(\w+);/g)].map(m => [m[1], gl.getUniformLocation(program,m[1])]));
  const settings = {uWispDensity:1.3,uTiltScale:.06,uBeamXFrac:0,uBeamYFrac:-.25,uFlowSpeed:.3,uVLenFactor:2,uHLenFactor:1.15,uFogIntensity:.46,uFogScale:.24,uWSpeed:8,uWIntensity:2.9,uFlowStrength:.24,uDecay:1.1,uFalloffStart:1.22,uFogFallSpeed:.5,uFade:1};
  for (const [k,v] of Object.entries(settings)) gl.uniform1f(uniforms[k],v);
  gl.uniform4f(uniforms.iMouse,0,0,0,0);
  const render = () => {
    const phase = (elapsed % 24000) / 24000 * Math.PI * 2;
    // Readable playback state for checking that the visible loop keeps advancing.
    const second = String(Math.floor(elapsed / 1000));
    if(canvas.dataset.elapsedSeconds!==second){
      canvas.dataset.elapsedSeconds=second;
      canvas.dataset.loopCount=String(Math.floor(elapsed/24000));
    }
    // The approved film carries Lightfall. River and Tidal retain their shader.
    if(selected===0&&filmReady&&variantValue<.01)return;
    gl.uniform1f(uniforms.uCycle,phase);gl.uniform1f(uniforms.uVariant,variantValue);
    gl.uniform4f(uniforms.iMouse,pointerX*canvas.width,pointerY*canvas.height,pointerActive,0);
    // Returns to the exact same state with zero velocity at the loop boundary.
    const clock = 4 + 3.4 * (1 - Math.cos(phase));
    gl.uniform1f(uniforms.iTime,clock);gl.uniform1f(uniforms.uFlowTime,clock);gl.uniform1f(uniforms.uFogTime,clock*.65);
    const color = [.25,.46,1];
    gl.uniform3f(uniforms.uColor,...color);
    gl.drawArrays(gl.TRIANGLES,0,3);
  };
  const resize = () => {
    const ratio = Math.min(devicePixelRatio, 1);
    canvas.width = Math.round(canvas.clientWidth*ratio);canvas.height=Math.round(canvas.clientHeight*ratio);
    gl.viewport(0,0,canvas.width,canvas.height);gl.uniform3f(uniforms.iResolution,canvas.width,canvas.height,ratio);render();
  };
  new ResizeObserver(resize).observe(canvas);resize();
  cover.classList.add('beam-ready');canvas.dataset.renderer='webgl';
  const tick = now => {
    const dt=Math.min(now-previous,50);previous=now;
    if (inView && !document.hidden) {
      const ease=1-Math.exp(-dt/150);
      pointerX+=(targetX-pointerX)*ease;pointerY+=(targetY-pointerY)*ease;pointerActive+=(targetActive-pointerActive)*ease;variantValue+=(selected-variantValue)*ease;
      if(!reduced.matches&&!document.body.classList.contains('motion-paused'))elapsed+=dt;
      cover.style.setProperty('--light-x',(pointerX*100).toFixed(2)+'%');
      cover.style.setProperty('--light-y',((1-pointerY)*100).toFixed(2)+'%');
      cover.style.setProperty('--light-active',pointerActive.toFixed(3));
      render();canvas.dataset.pointerActive=pointerActive.toFixed(2);
    }
    frame=requestAnimationFrame(tick);
  };
  previous=performance.now();frame=requestAnimationFrame(tick);

}
new IntersectionObserver(es=>{inView=es[0].isIntersecting;filmInView=inView;syncLightfall();},{threshold:0}).observe(cover);
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(frame);cover.classList.remove('beam-ready');canvas.dataset.renderer='fallback';});
canvas.addEventListener('webglcontextrestored',()=>{try{start()}catch{cover.classList.remove('beam-ready')}});
try {start();} catch (error) {console.warn('Beam fallback:',error.message);canvas.dataset.renderer='fallback';}
