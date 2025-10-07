 const name = "Dilan Lionel Gutierrez Aimituma";
  const nameElement = document.getElementById("animated-name");

  let index = 0;
  let isDeleting = false;

  function type() {
    if (!isDeleting) {
      nameElement.textContent = name.slice(0, index + 1);
      index++;
      if (index === name.length) {
        isDeleting = true;
        setTimeout(type, 1500); // espera antes de borrar
        return;
      }
    } else {
      nameElement.textContent = name.slice(0, index - 1);
      index--;
      if (index === 0) {
        isDeleting = false;
      }
    }
    setTimeout(type, isDeleting ? 50 : 150); // velocidad al borrar/escribir
  }

  type();