document.querySelectorAll('[data-print]').forEach(button=>button.addEventListener('click',()=>window.print()));
const menus=[...document.querySelectorAll('.nav-group,.mobile-navigation')];
menus.forEach(menu=>menu.addEventListener('toggle',()=>{if(menu.open)menus.filter(other=>other!==menu).forEach(other=>other.open=false);}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')menus.forEach(menu=>{if(menu.open){menu.open=false;menu.querySelector('summary').focus();}});});
document.addEventListener('click',e=>{menus.forEach(menu=>{if(!menu.contains(e.target))menu.open=false;});});
