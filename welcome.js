(() => {
'use strict';
const image=document.getElementById('demo');
const toggle=document.getElementById('toggle');
const motion=matchMedia('(prefers-reduced-motion: reduce)');
let running=false,version=0;
function play(enabled){
 running=enabled;
 image.src=enabled?`assets/demo.gif?play=${++version}`:'assets/demo-poster.png';
 toggle.textContent=enabled?'Ⅱ':'▶';
 toggle.setAttribute('aria-label',enabled?'Stop demo':'Play demo');
 toggle.title=enabled?'Stop demo':'Play demo';
}
toggle.addEventListener('click',()=>play(!running));
document.getElementById('replay').addEventListener('click',()=>play(true));
motion.addEventListener('change',e=>{if(e.matches)play(false);});
play(!motion.matches);
})();
