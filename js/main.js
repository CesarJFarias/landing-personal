// Menú responsive
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Cerrar el menú al hacer clic en un enlace
navMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => navMenu.classList.remove("open"))
);

// Año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Validación simple del formulario de contacto
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("formError");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    errorMsg.hidden = false;
    errorMsg.textContent = "Por favor, completá nombre, email y mensaje.";
    return;
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    errorMsg.hidden = false;
    errorMsg.textContent = "El email no parece válido.";
    return;
  }

  errorMsg.hidden = true;

  // Redirige al cliente de correo del usuario con el mensaje pre-cargado.
  const asunto = encodeURIComponent(`Contacto desde tu web - ${nombre}`);
  const cuerpo = encodeURIComponent(`${mensaje}\n\nSaludos, ${nombre}\n${email}`);
  window.location.href = `mailto:cesar51mdz@gmail.com?subject=${asunto}&body=${cuerpo}`;
});