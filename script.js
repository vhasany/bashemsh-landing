const menuButton=document.getElementById('menuButton');
const navLinks=document.getElementById('navlinks');
menuButton.addEventListener('click',()=>{const opened=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(opened));menuButton.setAttribute('aria-label',opened?'بستن منو':'باز کردن منو')});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
