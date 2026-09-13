import {installSectionNavigation} from './assets/section-navigation.js';
const initialHash=location.hash;
let navigatedDuringLoad=false;
for(const event of ['pointerdown','wheel','touchstart','keydown'])window.addEventListener(event,()=>{navigatedDuringLoad=true},{once:true,passive:true});
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const [benchmarks,prompts,costData]=await Promise.all(['benchmarks.json','prompts.json','cost-comparison.json'].map(x=>fetch(x+'?v=17').then(r=>{if(!r.ok)throw Error(x);return r.json()})));
installSectionNavigation(document.querySelector('main'));
const lottieMotions=[];const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');let reduced=motionPreference.matches,paused=reduced;
const scenes=$$('[data-nav-section]');let visibleIndex=0;
const obs=new IntersectionObserver(entries=>{for(const e of entries){e.target.classList.toggle('is-visible',e.isIntersecting);if(e.isIntersecting){visibleIndex=scenes.indexOf(e.target);$$('.section-dots a').forEach((a,i)=>{a.classList.toggle('active',i===visibleIndex);if(i===visibleIndex)a.setAttribute('aria-current','step');else a.removeAttribute('aria-current')});$('#scene-position').textContent=`${String(visibleIndex+1).padStart(2,'0')} / ${scenes.length}`;$('#scene-prev').disabled=visibleIndex===0;$('#scene-next').disabled=visibleIndex===scenes.length-1;}e.target.querySelectorAll('[data-film]').forEach(v=>{if(e.isIntersecting&&!paused&&!document.hidden&&!v.closest('[hidden]'))v.play().catch(()=>{});else v.pause()})}},{threshold:.45});scenes.forEach(s=>obs.observe(s));
function syncFilms(){ $$('[data-film],[data-lightfall-film]').forEach(v=>{const hero=v.hasAttribute('data-lightfall-film'),active=!hero||v.closest('[data-light-variant]')?.dataset.lightVariant==='lightfall';const play=!paused&&!document.hidden&&active&&v.closest('.is-visible')&&!v.closest('[hidden]');if(hero)v.autoplay=!!play;if(play)v.play().catch(()=>{});else v.pause()}); }
function motion(){lottieMotions.forEach(({el,anim})=>{if(paused)anim.pause();else if(el.closest('.is-visible'))anim.play()});document.body.classList.toggle('motion-paused',paused);syncFilms()}motion();motionPreference.addEventListener('change',e=>{reduced=e.matches;paused=reduced;motion()});
function goto(i){i=Math.max(0,Math.min(scenes.length-1,i));scenes[i].scrollIntoView({behavior:reduced?'instant':'smooth'});scenes[i].focus({preventScroll:true});history.replaceState(null,'','#'+scenes[i].id)}$('#scene-prev').onclick=()=>goto(visibleIndex-1);$('#scene-next').onclick=()=>goto(visibleIndex+1);
const names=['DeepSeek V4.1','Astra 6','Sol 5.6','Grok'];
const fixedOrder=[1,2,3,0];
const silkFilm=()=>'<video class="chart-film" data-film loop muted playsinline preload="auto" poster="assets/loop-poster.jpg"><source src="assets/deepastra-smooth-v3.mp4" type="video/mp4"></video>';
function installBenchmarkCarousel(prefix,barsId,rows){
 let index=0,fullScale=prefix==='limit';
 const q=id=>$('#'+prefix+'-'+id),bars=$('#'+barsId);
 function render(){
  const b=rows[index],words=b.title.split(' '),last=words.pop();
  q('title').innerHTML=words.join(' ')+' <em>'+(/^[A-Z]{2}/.test(last)?last:last.toLowerCase())+'.</em>';
  q('metric').textContent=b.metric;q('explainer').textContent=b.description;
  q('position').textContent=`${String(index+1).padStart(2,'0')} / ${String(rows.length).padStart(2,'0')}`;
  q('note').innerHTML=`<span class="benchmark-label">${b.benchmark}</span>${b.note.replace(b.benchmark+'. ','')}`;q('source').href=b.source;
  const min=fullScale?(b.min??0):b.focus_min,max=fullScale?b.max:b.focus_max,negative=min<0,span=max-min;
  q('axis-note').textContent=(min>0?'Zoomed axis · ':'Scale · ')+min+'–'+max+(b.suffix==='%'?'%':'');
  q('scale-toggle').textContent=fullScale?'Zoom in':'Full scale';q('scale-toggle').setAttribute('aria-pressed',fullScale);
  q('scale-toggle').hidden=b.focus_min===(b.min??0)&&b.focus_max===b.max;
  q('axis').innerHTML=[max,min+span*.75,min+span*.5,min+span*.25,min].map(v=>`<span>${Number(v.toFixed(1))}${b.suffix}</span>`).join('');
  bars.classList.toggle('has-negative',negative);
  // Keep each bar and its video mounted. Changing the metric must not restart playback.
  if(!bars.children.length)bars.innerHTML=fixedOrder.map(i=>{
   const logo=i===0?'deepseek':i===3?'grok':'astra',identity=i===1?'astra-identity':i===2?'sol-identity':'';
   return `<div class="ranked-model ${i===0?'seek':''} ${identity}" data-model="${names[i]}"><div class="ranked-column"><div class="ranked-fill">${i===0?silkFilm():''}<strong class="ranked-value"></strong></div></div><span class="ranked-name"><span class="model-crest"><img class="brand" src="assets/${logo}.svg" alt=""></span><span>${names[i]}</span></span></div>`;
  }).join('');
  fixedOrder.forEach((i,position)=>{
   const v=b.values[i],height=negative?Math.abs(v)/span*100:(v-min)/span*100,anchor=negative?-min/span*100:0,top=v<0;
   const fill=bars.children[position].querySelector('.ranked-fill'),value=fill.querySelector('.ranked-value');
   fill.style.height=Math.max(0,height)+'%';fill.style.top=top?anchor+'%':'';fill.style.bottom=top?'':anchor+'%';
   value.textContent=v+b.suffix;value.classList.toggle('below',top);
  });
  q('dots').querySelectorAll('button').forEach((d,i)=>{d.classList.toggle('selected',i===index);d.setAttribute('aria-pressed',i===index)});syncFilms();
 }
 q('dots').innerHTML=rows.map((b,i)=>`<button data-benchmark="${i}" aria-label="${b.title}" aria-pressed="false"></button>`).join('');
 q('dots').querySelectorAll('button').forEach(b=>b.onclick=()=>{index=+b.dataset.benchmark;render()});
 q('next').onclick=()=>{index=(index+1)%rows.length;render()};q('prev').onclick=()=>{index=(index+rows.length-1)%rows.length;render()};
 q('scale-toggle').onclick=()=>{fullScale=!fullScale;render()};render();
}
installBenchmarkCarousel('bench','benchmark-bars',benchmarks.slice(0,4));
installBenchmarkCarousel('limit','limitation-bars',benchmarks.slice(4));
function selectGroup(button,selector){$$(selector).forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',b===button)})}
let pricePeriod='off',tokenType='output';

function setCostTab(button){
 const selected=button.dataset.costTab;
 $$('[data-cost-tab]').forEach(b=>{const on=b===button;b.classList.toggle('selected',on);b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1});
 $$('[data-cost-panel]').forEach(p=>p.hidden=p.dataset.costPanel!==selected);
 $('#cost').scrollIntoView({behavior:'instant',block:'start'});
 syncFilms();
}
$$('[data-cost-tab]').forEach((button,i)=>{
 button.onclick=()=>setCostTab(button);
 button.onkeydown=e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();e.stopPropagation();const tabs=$$('[data-cost-tab]'),n=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;setCostTab(tabs[n]);tabs[n].focus()};
});
function renderTaskCosts(){
 const costs=costData.models.map((m,i)=>m.cost_per_task_usd*(i===2&&pricePeriod==='off'?costData.deepseek_off_peak_multiplier:1));
 const counts=costs.map(c=>costData.budget_usd/c);
 const money=c=>'$'+c.toFixed(c<.2?3:2);
 $('#task-astra-cost').textContent=money(costs[0]);$('#task-seek-cost').textContent=money(costs[2]);$('#task-ratio').textContent=(costs[0]/costs[2]).toFixed(1)+'×';
 $$('[data-task-count]').forEach((el,i)=>el.textContent=(i===2?'≈':'')+counts[i].toFixed(1));
 $$('[data-task-price]').forEach((el,i)=>el.textContent=money(costs[i])+' / attempt');
 $$('#cost-budget .hero-bar-column').forEach((el,i)=>{const size=counts[i]/counts[2]*100+'%';el.style.setProperty('--size',size);el.querySelector('.hero-bar').style.setProperty('--size',size)});
 $('#task-estimate-note').textContent=pricePeriod==='off'?'Off-peak estimate: same benchmark token usage, half-price tariff.':'Published benchmark cost at DeepSeek peak rates.';
 $$('[data-cost-period]').forEach(b=>{const on=b.dataset.costPeriod===pricePeriod;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',on)});
}
$$('[data-cost-period]').forEach(b=>b.onclick=()=>{pricePeriod=b.dataset.costPeriod;const priceButton=$('[data-price="'+pricePeriod+'"]');selectGroup(priceButton,'[data-price]');renderPrices()});

const apiRates={output:[50,20,.60],input:[10,4,.15],both:[60,24,.75]};
function renderPrices(){
 renderTaskCosts();
 const prices=[...apiRates[tokenType]];if(pricePeriod==='peak')prices[2]*=2;
 ['astra','sol','seek'].forEach((m,i)=>{$('#price-'+m).textContent='$'+prices[i].toFixed(2);$$('.price-fill')[i].style.setProperty('--price-size',prices[i]/prices[0]*100+'%')});
 $('#price-unit').textContent=tokenType==='both'?'USD for 1M uncached input + 1M output tokens':`USD per 1M ${tokenType==='input'?'uncached input':'output'} tokens`;
 $('.price-chart-key').textContent=`Lower is cheaper · DeepSeek ${pricePeriod==='peak'?'peak':'off-peak'} · Sol promotional API rate`;
 $('#price-ratio').textContent=(prices[0]/prices[2]).toFixed(1)+'×';
 $('#price-ratio-label').textContent=tokenType==='both'?'lower API cost than Astra max for this mix':`lower ${tokenType} token price than Astra max`;
 $('#sol-ratio').textContent=(prices[1]/prices[2]).toFixed(1)+'× lower than Sol';
 $('.pricing-caveat').textContent=tokenType==='both'?'Example across requests with ≤272K input tokens each. Not a measured task saving.':'Token price, not a measured saving on a finished task.';
}
$$('[data-price]').forEach(b=>b.onclick=()=>{selectGroup(b,'[data-price]');pricePeriod=b.dataset.price;renderPrices()});
$$('[data-token]').forEach(b=>b.onclick=()=>{selectGroup(b,'[data-token]');tokenType=b.dataset.token;renderPrices()});renderPrices();
const dialog=$('#prompt-dialog');let lastFocus;const titles={spreadsheet:'Business report',documents:'Long-document analysis','agentic-os':'Agentic OS','design-continuation':'Design continuation'};function renderPrompt(){const task=$('#prompt-task').value,mode=$('#prompt-mode').value;$('#prompt-title').textContent=titles[task];$('#prompt-text').value=prompts.modes[mode]+'\n'+prompts.common+'\n'+prompts.tasks[task];$('#copy-status').textContent=''}function openPrompt(task){lastFocus=document.activeElement;$('#prompt-task').value=task||'spreadsheet';renderPrompt();dialog.showModal()}$('#prompts-open').onclick=()=>openPrompt();$$('[data-prompt]').forEach(b=>b.onclick=()=>openPrompt(b.dataset.prompt));$('#dialog-close').onclick=()=>dialog.close();dialog.onclose=()=>lastFocus?.focus();dialog.onclick=e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}};$('#prompt-task').onchange=renderPrompt;$('#prompt-mode').onchange=renderPrompt;async function copy(s){try{await navigator.clipboard.writeText(s);return true}catch{return false}}$('#copy-prompt').onclick=async()=>{$('#copy-status').textContent=await copy($('#prompt-text').value)?'Copied':'Select the prompt and copy';};

if(window.lottie){document.querySelectorAll('.lottie-check').forEach(el=>{const anim=lottie.loadAnimation({container:el,renderer:'svg',loop:false,autoplay:false,path:'assets/check-success.json'});lottieMotions.push({el,anim});const watcher=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting&&!paused){if(reduced)anim.goToAndStop(999,true);else anim.goToAndPlay(0,true)}}),{threshold:.5});watcher.observe(el)});}

// Published release comparison. Values and labels are kept in one source file.
const releaseData=await fetch('release-benchmarks.json?v=16').then(r=>r.json());
let releaseMetric='automation',releaseVersion='new',releaseFrame=0,replayTimer=0,releaseFullScale=false;
const releaseLogos=['claude','astra','kimi',null,'deepseek'];
$('#release-models').innerHTML=releaseData.models.map((name,i)=>`<div class="release-model ${i===4?'seek':''}"><div class="release-plot"><div class="release-fill">${i===4?silkFilm():''}<div class="release-crest">${releaseLogos[i]?`<img class="brand" src="assets/${releaseLogos[i]}.svg" alt="${name}">`:'<span class="glm-mark" aria-hidden="true">GLM</span>'}</div><strong>0%</strong></div></div><div class="release-identity"><span>${name}</span>${i===4?'<small id="release-version-label">V4.1</small>':''}</div></div>`).join('');
function renderRelease(animate=true){
 cancelAnimationFrame(releaseFrame);
 const row=releaseData[releaseMetric],values=[...row.values];if(releaseVersion==='old')values[4]=row.previous_deepseek;
 const min=releaseFullScale?0:row.focus_min,max=releaseFullScale?100:row.focus_max;
 $('#release-explainer').textContent=row.description;
 $('#release-axis-note').textContent=(min?'Zoomed axis · ':'Scale · ')+min+'–'+max+'%';
 $('#release-scale-toggle').textContent=releaseFullScale?'Zoom in':'Full scale';$('#release-scale-toggle').setAttribute('aria-pressed',releaseFullScale);
 $('.release-scale').innerHTML=[max,(min+max)/2,min].map(n=>`<span>${n}%</span>`).join('');
 const bars=$$('.release-fill'),starts=bars.map(b=>+(b.dataset.value||0));
 $$('[data-version]').forEach(b=>{const chosen=b.dataset.version===releaseVersion;b.classList.toggle('selected',chosen);b.setAttribute('aria-pressed',chosen)});
 $('#release-version-label').textContent=releaseVersion==='old'?'V4':'V4.1';
 $('#release-verdict').textContent=releaseVersion==='old'?'Before the V4.1 update.':({automation:'DeepSeek leads this automation comparison.',coding:'Alongside Opus and Sol on coding.',terminal:'Near the top on terminal tasks.'}[releaseMetric]);
 const begin=performance.now(),duration=animate&&!paused&&!reduced?1000:0;
 const tick=now=>{const t=duration?Math.min((now-begin)/duration,1):1,ease=1-Math.pow(1-t,3);bars.forEach((bar,i)=>{const value=starts[i]+(values[i]-starts[i])*ease;bar.style.height=Math.max(0,(value-min)/(max-min)*100)+'%';bar.querySelector('strong').textContent=value.toFixed(1)+'%';bar.dataset.value=value;});if(t<1)releaseFrame=requestAnimationFrame(tick);};
 releaseFrame=requestAnimationFrame(tick);
}
$('#release-metric').onchange=e=>{clearTimeout(replayTimer);releaseMetric=e.target.value;renderRelease()};
$('#release-scale-toggle').onclick=()=>{releaseFullScale=!releaseFullScale;renderRelease(false)};
$$('[data-version]').forEach(b=>b.onclick=()=>{clearTimeout(replayTimer);releaseVersion=b.dataset.version;renderRelease()});
$('#replay-release').onclick=()=>{clearTimeout(replayTimer);releaseVersion='old';renderRelease(false);replayTimer=setTimeout(()=>{releaseVersion='new';renderRelease()},paused||reduced?0:700)};
function setReleaseTab(button){
 $$('[data-release]').forEach(b=>{const on=b===button;b.classList.toggle('selected',on);b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;});
 $$('[data-release-panel]').forEach(p=>p.hidden=p.dataset.releasePanel!==button.dataset.release);
 if(button.dataset.release==='bench')renderRelease();
 syncFilms();
}
$$('[data-release]').forEach((button,i)=>{button.onclick=()=>setReleaseTab(button);button.onkeydown=e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;e.preventDefault();e.stopPropagation();const tabs=$$('[data-release]'),n=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;setReleaseTab(tabs[n]);tabs[n].focus()}});
let releaseEntered=false;new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!releaseEntered){releaseEntered=true;if(!paused&&!reduced){releaseVersion='old';renderRelease(false);replayTimer=setTimeout(()=>{releaseVersion='new';renderRelease()},700)}else renderRelease(false)}}),{threshold:.45}).observe($('#why-now'));
renderRelease(false);
document.addEventListener('visibilitychange',()=>{if(document.hidden)$$('[data-film]').forEach(v=>v.pause());else motion()});

const connectorObserver=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('is-visible',e.isIntersecting)));$$('.chapter-connector').forEach(c=>connectorObserver.observe(c));
// Align shared slide links after fonts and dynamic charts have their final layout.
document.fonts.ready.then(()=>requestAnimationFrame(()=>{
 if(initialHash&&location.hash===initialHash&&!navigatedDuringLoad)document.getElementById(initialHash.slice(1))?.scrollIntoView({behavior:'instant',block:'start'});
}));
