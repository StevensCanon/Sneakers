document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const departamento = document.getElementById("departamento").value;
        const ciudad = document.getElementById("ciudad").value;
        const direccion = document.getElementById("direccion").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
  
        if (
          nombre === "" ||
          email === "" ||
          departamento === "" ||
          ciudad === "" ||
          direccion === "" ||
          telefono === ""
        ) {
          alert("Por favor, completa todos los campos.");
          return;
        }
  

        const successAlert = document.getElementById("successAlert");
  
        if (successAlert) {
          successAlert.classList.remove("d-none");
          setTimeout(() => {
            successAlert.classList.add("d-none");
          }, 2000); 
        }
        
        contactForm.submit();
      });
    }
  });
  