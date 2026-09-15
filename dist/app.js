(() => {
 'use strict';
 const canvas=document.getElementById('scene'), ctx=canvas.getContext('2d'), story=document.querySelector('.story'), stage=document.querySelector('.stage');
 const chapters=[...document.querySelectorAll('.chapter')], buttons=[...document.querySelectorAll('[data-step]')], progressBar=document.getElementById('progress-bar');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const labels=[['EL DETALLE QUE IMPORTA','PUNTAL / DAÑO POR IMPACTO'],['UNA MIRADA EXPERTA','INSPECCIÓN / EVALUACIÓN DEL DAÑO'],['DESPUÉS DE LA INTERVENCIÓN','KIT DE EMPALME / INSTALACIÓN TERMINADA'],['EL TRABAJO BIEN HECHO','COMPROBACIÓN / INTERVENCIÓN DOCUMENTADA']];
 const images=['01-dano.webp','02-inspeccion.webp','03-intervencion.webp','04-ok.webp'].map(name=>{const im=new Image();im.src='assets/'+name;im.onload=()=>{dirty=true;requestAnimationFrame(tick)};return im});
 let target=0,current=0,active=-1,width=0,height=0,dirty=true,scheduled=false;
 function resize(){const rect=stage.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);dirty=true;update()}
 function update(){const rect=story.getBoundingClientRect();target=Math.max(0,Math.min(1,-rect.top/Math.max(1,story.offsetHeight-stage.offsetHeight)));if(!scheduled){scheduled=true;requestAnimationFrame(tick)}}
 function paint(im,opacity,zoom){if(!im.complete||!im.naturalWidth)return;const ratio=Math.max(width/im.naturalWidth,height/im.naturalHeight)*zoom;const w=im.naturalWidth*ratio,h=im.naturalHeight*ratio;const focus=width<600?.64:.5;ctx.globalAlpha=opacity;ctx.drawImage(im,(width-w)*focus,(height-h)*.52,w,h);ctx.globalAlpha=1}
 function draw(){ctx.fillStyle='#16262e';ctx.fillRect(0,0,width,height);const phase=current*3;const index=Math.min(3,Math.floor(phase));const t=phase-index;const blend=reduced?(t>.65?1:0):Math.max(0,Math.min(1,(t-.52)/.48));const smooth=blend*blend*(3-2*blend);const zoom=reduced?1:1.015+Math.sin(current*Math.PI)*.045;paint(images[index],1,zoom);if(index<3&&smooth>0)paint(images[index+1],smooth,zoom);if(!images[index].naturalWidth){const loaded=images.find(im=>im.complete&&im.naturalWidth);if(loaded)paint(loaded,1,zoom)}
 const next=Math.min(3,Math.floor(phase+.22));if(next!==active){active=next;chapters.forEach((el,i)=>{el.classList.toggle('active',i===active);el.setAttribute('aria-hidden',String(i!==active));el.inert=i!==active});buttons.forEach((b,i)=>{b.classList.toggle('current',i===active);if(i===active)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});document.getElementById('detail-label').textContent=labels[active][0];document.getElementById('detail-value').textContent=labels[active][1]}
 progressBar.style.width=(current*100)+'%';}
 function tick(){scheduled=false;current=reduced?target:current+(target-current)*.16;if(Math.abs(current-target)<.0001)current=target;draw();dirty=false;if(current!==target){scheduled=true;requestAnimationFrame(tick)}}
 buttons.forEach(button=>button.addEventListener('click',()=>{const top=story.getBoundingClientRect().top+scrollY;scrollTo({top:top+Number(button.dataset.step)/3*(story.offsetHeight-stage.offsetHeight),behavior:reduced?'instant':'smooth'})}));
 addEventListener('scroll',update,{passive:true});addEventListener('resize',resize);resize();
})();
