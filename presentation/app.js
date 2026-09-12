import {installSectionNavigation} from './assets/section-navigation.js';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const [benchmarks,prompts]=await Promise.all(['benchmarks.json','prompts.json'].map(x=>fetch(x).then(r=>{if(!r.ok)throw Error(x);return r.json()})));
installSectionNavigation(document.querySelector('main'));
const lottieMotions=[];const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;let paused=reduced;
const scenes=$$('[data-nav-section]');let visibleIndex=0;
const obs=new IntersectionObserver(entries=>{for(const e of entries){e.target.classList.toggle('is-visible',e.isIntersecting);if(e.isIntersecting){visibleIndex=scenes.indexOf(e.target);$$('.section-dots a').forEach((a,i)=>{a.classList.toggle('active',i===visibleIndex);if(i===visibleIndex)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')});$('#scene-position').textContent=`${String(visibleIndex+1).padStart(2,'0')} / ${scenes.length}`;$('#scene-prev').disabled=visibleIndex===0;$('#scene-next').disabled=visibleIndex===scenes.length-1;}e.target.querySelectorAll('[data-film]').forEach(v=>{if(e.isIntersecting&&!paused)v.play().catch(()=>{});else v.pause()})}},{threshold:.45});scenes.forEach(s=>obs.observe(s));
function motion(){lottieMotions.forEach(({el,anim})=>{if(paused)anim.pause();else if(el.closest('.is-visible'))anim.play()});document.body.classList.toggle('motion-paused',paused);$('#motion-toggle').setAttribute('aria-pressed',paused);$('#motion-toggle').textContent=paused?'Play motion':'Pause motion';$$('[data-film]').forEach(v=>{if(!paused&&v.closest('.is-visible'))v.play().catch(()=>{});else v.pause()})}motion();$('#motion-toggle').onclick=()=>{paused=!paused;motion()};
function goto(i){i=Math.max(0,Math.min(scenes.length-1,i));scenes[i].scrollIntoView({behavior:reduced?'instant':'smooth'});scenes[i].focus({preventScroll:true});history.replaceState(null,'','#'+scenes[i].id)}$('#scene-prev').onclick=()=>goto(visibleIndex-1);$('#scene-next').onclick=()=>goto(visibleIndex+1);
let bi=0;
const names=['DeepSeek V4.1','Astra','Sol','Grok'];
const fixedOrder=[1,2,3,0];
function renderBench(){
 const b=benchmarks[bi], words=b.title.split(' '), last=words.pop();
 $('#bench-title').innerHTML=words.join(' ')+' <em>'+(/^[A-Z]{2}/.test(last)?last:last.toLowerCase())+'.</em>';
 $('#bench-metric').textContent=b.metric;
 $('#bench-position').textContent=`${String(bi+1).padStart(2,'0')} / ${String(benchmarks.length).padStart(2,'0')}`;
 $('#bench-note').innerHTML=`<span class="benchmark-label">${b.benchmark}</span>${b.note.replace(b.benchmark+'. ','')}`;
 $('#bench-source').href=b.source;
 const negative=b.min<0;
 $('#benchmark-bars').classList.toggle('has-negative',negative);
 $('#benchmark-bars').innerHTML=fixedOrder.map(i=>{
   const v=b.values[i],height=negative?Math.abs(v)/2:v/b.max*100,anchor=negative?50:0,top=v<0;
   const logo=i===0?'deepseek':i===3?'grok':'astra';
   return `<div class="ranked-model ${i===0?'seek':''}" data-model="${names[i]}" style="--bar-color:${i===0?'#79b2ff':'#a1a7aa'}"><div class="ranked-column"><div class="ranked-fill" style="height:${height}%;${top?'top':'bottom'}:${anchor}%"><strong class="ranked-value ${top?'below':''}">${v}${b.suffix}</strong></div></div><span class="ranked-name"><img class="brand" src="assets/${logo}.svg" alt="">${names[i]}</span></div>`;
 }).join('');
 $$('[data-benchmark]').forEach((d,i)=>{d.classList.toggle('selected',i===bi);d.setAttribute('aria-pressed',i===bi)});
}
$('#bench-dots').innerHTML=benchmarks.map((b,i)=>`<button data-benchmark="${i}" aria-label="${b.title}" aria-pressed="false"></button>`).join('');$$('[data-benchmark]').forEach(b=>b.onclick=()=>{bi=+b.dataset.benchmark;renderBench()});$('#bench-next').onclick=()=>{bi=(bi+1)%benchmarks.length;renderBench()};$('#bench-prev').onclick=()=>{bi=(bi+benchmarks.length-1)%benchmarks.length;renderBench()};renderBench();
function selectGroup(button,selector){$$(selector).forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',b===button)})}
let pricePeriod='off',tokenType='output';
const apiRates={output:[50,20,.60],input:[10,4,.15],both:[60,24,.75]};
function renderPrices(){
 const prices=[...apiRates[tokenType]];if(pricePeriod==='peak')prices[2]*=2;
 ['astra','sol','seek'].forEach((m,i)=>{$('#price-'+m).textContent='$'+prices[i].toFixed(2);$$('.price-fill')[i].style.setProperty('--price-size',prices[i]/prices[0]*100+'%')});
 $('#price-unit').textContent=tokenType==='both'?'USD for 1M uncached input + 1M output tokens':`USD per 1M ${tokenType==='input'?'uncached input':'output'} tokens`;
 $('.price-chart-key').textContent=`Lower is cheaper · DeepSeek ${pricePeriod==='peak'?'peak':'off-peak'} · Sol promotional API rate`;
 $('#price-ratio').textContent=(prices[0]/prices[2]).toFixed(1)+'×';
 $('#price-ratio-label').textContent=tokenType==='both'?'lower API cost than Astra for this mix':`lower ${tokenType} token price than Astra`;
 $('#sol-ratio').textContent=(prices[1]/prices[2]).toFixed(1)+'× lower than Sol';
 $('.pricing-caveat').textContent=tokenType==='both'?'Example across requests with ≤272K input tokens each. Not a measured task saving.':'Token price, not a measured saving on a finished task.';
}
$$('[data-price]').forEach(b=>b.onclick=()=>{selectGroup(b,'[data-price]');pricePeriod=b.dataset.price;renderPrices()});
$$('[data-token]').forEach(b=>b.onclick=()=>{selectGroup(b,'[data-token]');tokenType=b.dataset.token;renderPrices()});renderPrices();
const dialog=$('#prompt-dialog');let lastFocus;const titles={spreadsheet:'Business report',documents:'Long-document analysis','agentic-os':'Agentic OS','design-continuation':'Design continuation'};function renderPrompt(){const task=$('#prompt-task').value,mode=$('#prompt-mode').value;$('#prompt-title').textContent=titles[task];$('#prompt-text').value=prompts.modes[mode]+'\n'+prompts.common+'\n'+prompts.tasks[task];$('#copy-status').textContent=''}function openPrompt(task){lastFocus=document.activeElement;$('#prompt-task').value=task||'spreadsheet';renderPrompt();dialog.showModal()}$('#prompts-open').onclick=()=>openPrompt();$$('[data-prompt]').forEach(b=>b.onclick=()=>openPrompt(b.dataset.prompt));$('#dialog-close').onclick=()=>dialog.close();dialog.onclose=()=>lastFocus?.focus();dialog.onclick=e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}};$('#prompt-task').onchange=renderPrompt;$('#prompt-mode').onchange=renderPrompt;async function copy(s){try{await navigator.clipboard.writeText(s);return true}catch{return false}}$('#copy-prompt').onclick=async()=>{$('#copy-status').textContent=await copy($('#prompt-text').value)?'Copied':'Select the prompt and copy';};

if(window.lottie){document.querySelectorAll('.lottie-check').forEach(el=>{const anim=lottie.loadAnimation({container:el,renderer:'svg',loop:false,autoplay:false,path:'assets/check-success.json'});lottieMotions.push({el,anim});const watcher=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!paused){if(reduced)anim.goToAndStop(999,true);else anim.goToAndPlay(0,true)}}),{threshold:.5});watcher.observe(el)});}

// Published release comparison. Values and labels are kept in one source file.
const releaseData=await fetch('release-benchmarks.json').then(r=>r.json());
let releaseMetric='automation',releaseVersion='new',releaseFrame=0,replayTimer=0;
const releaseLogos=['claude','astra','kimi',null,'deepseek'];
$('#release-models').innerHTML=releaseData.models.map((name,i)=>`<div class="release-model ${i===4?'seek':''}"><div class="release-plot"><div class="release-fill"><strong>0%</strong></div></div><div class="release-identity">${releaseLogos[i]?`<img class="brand" src="assets/${releaseLogos[i]}.svg" alt="">`:'<span class="glm-mark" aria-hidden="true">GLM</span>'}<span>${name}</span>${i===4?'<small id="release-version-label">V4.1</small>':''}</div></div>`).join('');
function renderRelease(animate=true){
 cancelAnimationFrame(releaseFrame);
 const row=releaseData[releaseMetric],values=[...row.values];if(releaseVersion==='old')values[4]=row.previous_deepseek;
 const bars=$$('.release-fill'),starts=bars.map(b=>+(b.dataset.value||0));
 $$('[data-version]').forEach(b=>{const chosen=b.dataset.version===releaseVersion;b.classList.toggle('selected',chosen);b.setAttribute('aria-pressed',chosen)});
 $('#release-version-label').textContent=releaseVersion==='old'?'V4':'V4.1';
 $('#release-verdict').textContent=releaseVersion==='old'?'Before the V4.1 update.':({automation:'DeepSeek leads this automation comparison.',coding:'Alongside Opus and Sol on coding.',terminal:'Near the top on terminal tasks.'}[releaseMetric]);
 const begin=performance.now(),duration=animate&&!paused&&!reduced?1000:0;
 const tick=now=>{const t=duration?Math.min((now-begin)/duration,1):1,ease=1-Math.pow(1-t,3);bars.forEach((bar,i)=>{const value=starts[i]+(values[i]-starts[i])*ease;bar.style.height=value+'%';bar.querySelector('strong').textContent=value.toFixed(1)+'%';bar.dataset.value=value;});if(t<1)releaseFrame=requestAnimationFrame(tick);};
 releaseFrame=requestAnimationFrame(tick);
}
$('#release-metric').onchange=e=>{clearTimeout(replayTimer);releaseMetric=e.target.value;renderRelease()};
$$('[data-version]').forEach(b=>b.onclick=()=>{clearTimeout(replayTimer);releaseVersion=b.dataset.version;renderRelease()});
$('#replay-release').onclick=()=>{clearTimeout(replayTimer);releaseVersion='old';renderRelease(false);replayTimer=setTimeout(()=>{releaseVersion='new';renderRelease()},paused||reduced?0:700)};
function setReleaseTab(button){
 $$('[data-release]').forEach(b=>{const on=b===button;b.classList.toggle('selected',on);b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;});
 $$('[data-release-panel]').forEach(p=>p.hidden=p.dataset.releasePanel!==button.dataset.release);
 if(button.dataset.release==='bench')renderRelease();
}
$$('[data-release]').forEach((button,i)=>{button.onclick=()=>setReleaseTab(button);button.onkeydown=e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();e.stopPropagation();const tabs=$$('[data-release]'),n=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;setReleaseTab(tabs[n]);tabs[n].focus()}});
let releaseEntered=false;new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!releaseEntered){releaseEntered=true;if(!paused&&!reduced){releaseVersion='old';renderRelease(false);replayTimer=setTimeout(()=>{releaseVersion='new';renderRelease()},700)}else renderRelease(false)}}),{threshold:.45}).observe($('#why-now'));
renderRelease(false);
document.addEventListener('visibilitychange',()=>{if(document.hidden)$$('[data-film]').forEach(v=>v.pause());else motion()});

const connectorObserver=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('is-visible',e.isIntersecting)));$$('.chapter-connector').forEach(c=>connectorObserver.observe(c));
$('#motion-toggle').addEventListener('click',()=>{clearTimeout(replayTimer);renderRelease(false)});
