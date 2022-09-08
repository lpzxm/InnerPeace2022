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
                // title
                document.querySelector("#psico-title").innerHTML = "Psychologists on call";
                document.querySelector("#psico-desc").innerHTML = "Colegio Don Bosco has these psychologists at your disposal and at your fingertips.";
                document.querySelector("#work1").innerHTML = "Psychologist";
                document.querySelector("#work2").innerHTML = "Psychologist";
                document.querySelector("#work3").innerHTML = "Psychologist";
                document.querySelector("#work4").innerHTML = "Psychologist";
                document.querySelector("#work5").innerHTML = "Psychologist";
                document.querySelector("#psi-desc").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc2").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc3").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc4").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc5").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#saber").innerHTML = "Know more";
                document.querySelector("#saber2").innerHTML = "Know more";
                document.querySelector("#saber3").innerHTML = "Know more";
                document.querySelector("#saber4").innerHTML = "Know more";
                document.querySelector("#saber5").innerHTML = "Know more";
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
                document.querySelector("#link2").innerHTML = "Preguntas frecuentes";
                document.querySelector("#link3").innerHTML = "Testimonios";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // title
                document.querySelector("#psico-title").innerHTML = "Psicólogos a la orden"
                document.querySelector("#psico-desc").innerHTML = "El Colegio Don Bosco cuenta con estos psicólogos a tu disponibilidad y a tu alcance."
                document.querySelector("#work1").innerHTML = "Psicólogo"
                document.querySelector("#work2").innerHTML = "Psicólogo"
                document.querySelector("#work3").innerHTML = "Psicólogo"
                document.querySelector("#work4").innerHTML = "Psicólogo"
                document.querySelector("#work5").innerHTML = "Psicólogo"
                document.querySelector("#psi-desc").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc2").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc3").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc4").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc5").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#saber").innerHTML = "Saber más";
                document.querySelector("#saber2").innerHTML = "Saber más";
                document.querySelector("#saber3").innerHTML = "Saber más";
                document.querySelector("#saber4").innerHTML = "Saber más";
                document.querySelector("#saber5").innerHTML = "Saber más";
                // footer
                document.querySelector("#fo1").innerHTML = "Inicio"
                document.querySelector("#fo2").innerHTML = "Sobre nosotros"
                document.querySelector("#fo3").innerHTML = "Psicólogos"
                document.querySelector("#fo4").innerHTML = "Centros de ayuda";
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
                // title
                document.querySelector("#psico-title").innerHTML = "Psychologists on call"
                document.querySelector("#psico-desc").innerHTML = "Colegio Don Bosco has these psychologists at your disposal and at your fingertips."
                document.querySelector("#work1").innerHTML = "Psychologist"
                document.querySelector("#work2").innerHTML = "Psychologist"
                document.querySelector("#work3").innerHTML = "Psychologist"
                document.querySelector("#work4").innerHTML = "Psychologist"
                document.querySelector("#work5").innerHTML = "Psychologist"
                document.querySelector("#psi-desc").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc2").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc3").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc4").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#psi-desc5").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
                document.querySelector("#saber").innerHTML = "Know more";
                document.querySelector("#saber2").innerHTML = "Know more";
                document.querySelector("#saber3").innerHTML = "Know more";
                document.querySelector("#saber4").innerHTML = "Know more";
                document.querySelector("#saber5").innerHTML = "Know more";
                // footer
                document.querySelector("#fo1").innerHTML = "Home"
                document.querySelector("#fo2").innerHTML = "About us"
                document.querySelector("#fo3").innerHTML = "Psychologists"
                document.querySelector("#fo4").innerHTML = "Help centers"
                document.querySelector(".social-text").innerHTML = "Our social networks!"
                // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);
            }
            else{
                localStorage.setItem("idioma", "es")
                document.querySelector("#link1").innerHTML = "Psicólogos";
                document.querySelector("#link2").innerHTML = "Preguntas frecuentes";
                document.querySelector("#link3").innerHTML = "Testimonios";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // title
                document.querySelector("#psico-title").innerHTML = "Psicologos a la orden"
                document.querySelector("#psico-desc").innerHTML = "El Colegio Don Bosco cuenta con estos psicólogos a tu disponibilidad y a tu alcance."
                document.querySelector("#work1").innerHTML = "Psicólogo"
                document.querySelector("#work2").innerHTML = "Psicólogo"
                document.querySelector("#work3").innerHTML = "Psicólogo"
                document.querySelector("#work4").innerHTML = "Psicólogo"
                document.querySelector("#work5").innerHTML = "Psicólogo"
                document.querySelector("#psi-desc").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc2").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc3").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc4").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#psi-desc5").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
                document.querySelector("#saber").innerHTML = "Saber más";
                document.querySelector("#saber2").innerHTML = "Saber más";
                document.querySelector("#saber3").innerHTML = "Saber más";
                document.querySelector("#saber4").innerHTML = "Saber más";
                document.querySelector("#saber5").innerHTML = "Saber más";
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