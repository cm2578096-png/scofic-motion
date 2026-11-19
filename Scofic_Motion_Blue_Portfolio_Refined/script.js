const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰'}));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
// Service cards respond to clicks as well as hover, with an accessible active state.
document.querySelectorAll('.service-card').forEach(card=>card.addEventListener('click',()=>{const wasActive=card.classList.contains('active');document.querySelectorAll('.service-card').forEach(item=>{item.classList.remove('active');item.setAttribute('aria-pressed','false')});if(!wasActive){card.classList.add('active');card.setAttribute('aria-pressed','true')}else{card.setAttribute('aria-pressed','false')}}));
// Subtle pointer tilt on the hero poster and portfolio cards.
const tiltItems=document.querySelectorAll('.hero-poster,.project-visual');
tiltItems.forEach(item=>{item.addEventListener('pointermove',e=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=item.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;item.style.transform=`perspective(700px) rotateX(${-y*5}deg) rotateY(${x*6}deg) translateY(-3px)`});item.addEventListener('pointerleave',()=>{item.style.transform=''})});

// Keep project playback inside the portfolio and pause other clips when a visitor starts one.
document.querySelectorAll('video').forEach(video=>video.addEventListener('play',()=>{document.querySelectorAll('video').forEach(other=>{if(other!==video)other.pause()})}));
