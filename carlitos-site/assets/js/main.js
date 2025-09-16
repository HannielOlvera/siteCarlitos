// Mobile nav toggle
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
navToggle && navToggle.addEventListener('click', ()=>{
  if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
});

// Simple lightbox for gallery
const gallery = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbClose = document.getElementById('lbClose');

if(gallery){
  gallery.addEventListener('click', e=>{
    const a = e.target.closest('a.media-item');
    if(!a) return;
    e.preventDefault();
    lbImg.src = a.href;
    lightbox.style.display = 'flex';
    lightbox.setAttribute('aria-hidden','false');
  });
}
lbClose && lbClose.addEventListener('click', ()=>{ lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; });
lightbox && lightbox.addEventListener('click', e=>{ if(e.target === lightbox) { lightbox.style.display='none'; lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; } });

// Contact form stub (no backend) — validate and show a friendly message
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', e=>{
    e.preventDefault();
    const name = contactForm.elements['name'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    if(!name || !email){ alert('Por favor completa nombre y email.'); return; }
    alert('Gracias, ' + name + '! Tu mensaje ha sido enviado (simulado).');
    contactForm.reset();
  });
}
