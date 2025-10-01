// menú móvil
const toggle = document.querySelector('.nav-toggle');
const mobile = document.querySelector('#mobile-nav');
if (toggle && mobile){
  mobile.setAttribute('aria-hidden','true');
  toggle.addEventListener('click', ()=>{
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    mobile.setAttribute('aria-hidden', expanded ? 'true' : 'false');
  });
}

// newsletter
document.querySelectorAll('.newsletter').forEach(form=>{
  const input = form.querySelector('input[type="email"]');
  const btn = form.querySelector('button');
  const msg = form.querySelector('.form-msg');
  btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( (input.value||'').trim() );
    msg.textContent = ok ? '¡Gracias por unirte!' : 'Ingresá un email válido.';
    msg.style.color = ok ? 'green' : 'crimson';
    if (ok) input.value='';
  });
});

// Modal para imagen ampliada
const clickableImages = document.querySelectorAll('.collage img, .obra-img-clickable');
const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('img-modal-img');
const modalClose = document.querySelector('.img-modal-close');

if (modal && modalImg && modalClose) {
  clickableImages.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
    });
  });
  modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
    modalImg.src = '';
  });
  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
    }
  });
}

// Efecto de animación al clickear el título principal
const mainTitle = document.getElementById('main-title');
if(mainTitle){
  mainTitle.addEventListener('click', function(){
    mainTitle.classList.add('clicked');
    setTimeout(()=>mainTitle.classList.remove('clicked'), 200);
  });
}

// Formulario de compra
const purchaseForm = document.getElementById('purchase-form');

if (purchaseForm) {
  const feedbackEl = document.getElementById('form-feedback');

  purchaseForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue

    // Validación simple (podemos hacerla más compleja si quieres)
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    if (nombre.trim() === '' || email.trim() === '') {
      feedbackEl.textContent = 'Por favor, completa todos los campos.';
      feedbackEl.style.color = 'crimson';
      return;
    }

    feedbackEl.textContent = `¡Gracias por tu compra, ${nombre}! Te enviaremos un recordatorio a ${email}.`;
    feedbackEl.style.color = 'green';
    purchaseForm.reset(); // Limpia el formulario
  });
}
