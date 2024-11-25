document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("#nav-links");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});

/* Formulario Contacto */

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Limpiar cualquier mensaje de error anterior
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";

  const fields = [
      { id: "nombre", name: "Nombre" },
      { id: "email", name: "Correo electrónico" },
      { id: "mensaje", name: "Mensaje" }
  ];

  let missingFields = [];

  // Validar los campos y aplicar clase 'error' a los que falten
  fields.forEach(function(field) {
      const input = document.getElementById(field.id);
      if (!input.value.trim()) {
          input.classList.add("error");  
          missingFields.push(field.name);  
      } else {
          input.classList.remove("error");  
      }
  });

  // Mostrar el mensaje de error si faltan campos
  if (missingFields.length > 0) {
      errorMessage.textContent = `Por favor, complete los siguientes campos: ${missingFields.join(", ")}.`;
      errorMessage.style.display = "block";  
  } else {
      alert("Formulario enviado correctamente.");
  }
});
