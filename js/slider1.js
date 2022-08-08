let containerSlider = document.querySelector(".container-slider");
let botonIzquierdo = document.querySelector(".izquierda");
let botonDerecho = document.querySelector(".derecha");
let slider = document.querySelector(".slider");
let botones = document.querySelectorAll(".circulo");
let imagenes = ["0%", "-20%", "-40%", "-60%", "-80%"];
let imagenPresente = 0;

botones.forEach((boton, i) => {
  boton.addEventListener("click", () => {
    slider.style.transform = "translateX(" + imagenes[i] + ")";
    imagenPresente = i;
    botones.forEach((v) => {
      v.classList.remove("active-circulo");
    });
    boton.classList.add("active-circulo");
  });
});
function izquierda() {
  imagenPresente = imagenPresente - 1;
  if (imagenPresente <= 0) {
    imagenPresente = 0;
  }
  slider.style.transform = "translateX(" + imagenes[imagenPresente] + ")";
  botones.forEach((v) => {
    v.classList.remove("active-circulo");
  });
  botones[imagenPresente].classList.add("active-circulo");
}

function derecha() {
  imagenPresente = imagenPresente + 1;
  if (imagenPresente >= 4) {
    imagenPresente = 4;
  }
  slider.style.transform = "translateX(" + imagenes[imagenPresente] + ")";
  botones.forEach((v) => {
    v.classList.remove("active-circulo");
  });
  botones[imagenPresente].classList.add("active-circulo");
}
botonIzquierdo.addEventListener("click", () => {
  izquierda(imagenPresente);
});
botonDerecho.addEventListener("click", () => {
  derecha(imagenPresente);
});
modo = true;
setInterval(() => {
  if (modo) {
    imagenPresente = imagenPresente + 1;
  } else {
    imagenPresente = imagenPresente - 1;
  }

  if (imagenPresente == 4) {
    modo = false;
  } else if (imagenPresente == 0) {
    modo = true;
  }
  slider.style.transform = "translateX(" + imagenes[imagenPresente] + ")";
  botones.forEach((v) => {
    v.classList.remove("active-circulo");
  });
  botones[imagenPresente].classList.add("active-circulo");
}, 3500);
