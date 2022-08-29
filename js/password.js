document.querySelector('.password span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        document.querySelector("#Capa_1").style.width = "20px";
        document.querySelector("#Capa_1").style.height = "20px";
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        document.querySelector("#Capa_1").style.width = "20px";
        document.querySelector("#Capa_1").style.height = "20px";
        passwordInput.type = 'password';

    }
});

const passInput = document.querySelector("#password");
const percentBar = document.querySelector(".strength-percent span");
const passLabel = document.querySelector(".strength-label");

passInput.addEventListener("input", handlePassInput);

function handlePassInput(e) {
    if (passInput.value.length === 0) {
      passLabel.innerHTML = "Strength";
      addClass();
    } else if (passInput.value.length <= 4) {
      passLabel.innerHTML = "Weak";
      addClass("weak");
    } else if (passInput.value.length <= 7) {
      passLabel.innerHTML = "Not Bad";
      addClass("average");
    } else {
      passLabel.innerHTML = "Strong";
      addClass("strong");
    }
  }
  
  function addClass(className) {
    percentBar.classList.remove("weak");
    percentBar.classList.remove("average");
    percentBar.classList.remove("strong");
    if (className) {
      percentBar.classList.add(className);
    }
  }
