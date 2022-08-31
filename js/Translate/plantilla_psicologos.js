
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
                document.querySelector("#link1").innerHTML = "Psychologists";
                document.querySelector("#link2").innerHTML = "Frequent questions";
                document.querySelector("#link3").innerHTML = "Testimonials";
                document.querySelector("#link4").innerHTML = "About us";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Logout";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Log In";
                }
                // banner
                document.querySelector("#D1").innerHTML = "Psychologist"
                document.querySelector("#D2").innerHTML = "About me"
                document.querySelector("#D3").innerHTML = "Experience"
                document.querySelector("#D4").innerHTML = "Education"
                document.querySelector("#D5").innerHTML = "University"
                document.querySelector("#D6").innerHTML = "Contact information"
                // footer
                document.querySelector("#fo1").innerHTML = "Home"
                document.querySelector("#fo2").innerHTML = "About us"
                document.querySelector("#fo3").innerHTML = "Psychologists"
                document.querySelector("#fo4").innerHTML = "Help centers";
                document.querySelector(".social-text").innerHTML = "Our social networks!"
                // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);
            }
            else{
                localStorage.setItem("idioma", "es")
                document.querySelector("#link1").innerHTML = "Psicólogos";
                document.querySelector("#link2").innerHTML = "Preguntas Frecuentes";
                document.querySelector("#link3").innerHTML = "Testimonios";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // banner
                document.querySelector("#D1").innerHTML = "Psicologo"
                document.querySelector("#D2").innerHTML = "Sobre mí"
                document.querySelector("#D3").innerHTML = "Experiencia"
                document.querySelector("#D4").innerHTML = "Educación"
                document.querySelector("#D5").innerHTML = "Universidad"
                document.querySelector("#D6").innerHTML = "Información de contacto"
                // footer
                document.querySelector("#fo1").innerHTML = "Inicio"
                document.querySelector("#fo2").innerHTML = "Sobre nosotros"
                document.querySelector("#fo3").innerHTML = "Psicólogos"
                document.querySelector("#fo4").innerHTML = "Centros de ayuda"
                document.querySelector(".social-text").innerHTML = "¡Nuestras redes sociales!"
                // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
            }
        }
        else if(input){
            if (!input.checked) {
                localStorage.setItem("idioma", "en")
                document.querySelector("#link1").innerHTML = "Psychologists";
                document.querySelector("#link2").innerHTML = "Frequent questions";
                document.querySelector("#link3").innerHTML = "Testimonials";
                document.querySelector("#link4").innerHTML = "About us";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Logout";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Log In";
                }
                // banner
                document.querySelector("#D1").innerHTML = "Psychologist"
                document.querySelector("#D2").innerHTML = "About me"
                document.querySelector("#D3").innerHTML = "Experience"
                document.querySelector("#D4").innerHTML = "Education"
                document.querySelector("#D5").innerHTML = "University"
                document.querySelector("#D6").innerHTML = "Contact information"
                // footer
                document.querySelector("#fo1").innerHTML = "Home"
                document.querySelector("#fo2").innerHTML = "About us"
                document.querySelector("#fo3").innerHTML = "Psychologists"
                document.querySelector("#fo4").innerHTML = "Help centers";
                document.querySelector(".social-text").innerHTML = "Our social networks!"
                // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);
            }
            else{
                localStorage.setItem("idioma", "es")
                document.querySelector("#link1").innerHTML = "Psicólogos";
                document.querySelector("#link2").innerHTML = "Preguntas Frecuentes";
                document.querySelector("#link3").innerHTML = "Testimonios";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // banner
                document.querySelector("#D1").innerHTML = "Psicologo"
                document.querySelector("#D2").innerHTML = "Sobre mí"
                document.querySelector("#D3").innerHTML = "Experiencia"
                document.querySelector("#D4").innerHTML = "Educación"
                document.querySelector("#D5").innerHTML = "Universidad"
                document.querySelector("#D6").innerHTML = "Información de contacto"
                // footer
                document.querySelector("#fo1").innerHTML = "Inicio"
                document.querySelector("#fo2").innerHTML = "Sobre nosotros"
                document.querySelector("#fo3").innerHTML = "Psicólogos"
                document.querySelector("#fo4").innerHTML = "Centros de ayuda"
                document.querySelector(".social-text").innerHTML = "¡Nuestras redes sociales!"
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

