let idioma = document.querySelector("#translate");
const img = document.createElement('img');
const image = document.createElement('img');
img.src = '../img/spain.png';
image.src = '../img/united-kingdom.png';
    traducir(localStorage);
    function traducir(idiomaStorage, input) {
        if(idiomaStorage){
            if (idiomaStorage.idioma == "en") {
                localStorage.setItem("idioma", "en")
                // login
                document.querySelector("#titleA").innerHTML = "Enter here"
                document.querySelector("#U1").innerHTML = "Institutional mail";
                document.getElementsByName('username')[0].placeholder="Enter your email here";
                document.querySelector("#P2").innerHTML = "Password"
                document.getElementsByName('password')[0].placeholder = "Enter your password"
                document.querySelector("#V1").value = "Log In"
                
                document.querySelector("#S1").innerHTML = "You do not have an account? Sign up!"
                // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);
            }
            else{
                localStorage.setItem("idioma", "es")
                //login
                document.querySelector("#titleA").innerHTML = "Ingresa aquí"
                document.querySelector("#U1").innerHTML = "Correo institucional";
                document.getElementsByName('username')[0].placeholder="Ingresa tu correo electrónico";
                document.querySelector("#P2").innerHTML = "Contraseña"
                document.getElementsByName('password')[0].placeholder = "Ingresa tu contraseña"

                document.querySelector("#V1").value = "Iniciar sesión"
                document.querySelector("#S1").innerHTML = "¿No tienes una cuenta? ¡Regístrate!"
                // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
            }
        }
        else if(input){
            if (!input.checked) {
                localStorage.setItem("idioma", "en")
                // login
                document.querySelector("#titleA").innerHTML = "Enter here"
                document.querySelector("#U1").innerHTML = "Institutional mail";
                document.getElementsByName('username')[0].placeholder="Enter your email here";
                document.querySelector("#P2").innerHTML = "Password"
                document.getElementsByName('password')[0].placeholder = "Enter your password"
                document.querySelector("#V1").value = "Log In"
                
                document.querySelector("#S1").innerHTML = "You do not have an account? Sign up!"
                // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);
            }
            else{
                localStorage.setItem("idioma", "es")
                //login
                document.querySelector("#titleA").innerHTML = "Ingresa aquí"
                document.querySelector("#U1").innerHTML = "Correo institucional";
                document.getElementsByName('username')[0].placeholder="Ingresa tu correo electrónico";
                document.querySelector("#P2").innerHTML = "Contraseña"
                document.getElementsByName('password')[0].placeholder = "Ingresa tu contraseña"
                document.querySelector("#V1").value = "Iniciar sesión"

                document.querySelector("#S1").innerHTML = "¿No tienes una cuenta? ¡Regístrate!"
                // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
            }
        }
    }



    idioma.addEventListener("click", () => {
        let input = document.querySelector("#translate");
        traducir(null, input )
       
    })