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
                document.querySelector("#link3").innerHTML = "Blog";
                document.querySelector("#link4").innerHTML = "About us";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Logout";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Log In";
                }
                // Vision
                document.querySelector("#vision").innerHTML = "Vision"
                document.querySelector("#vi1").innerHTML = "1. We want to create value for all our students and internal staff; seeking continuous and sustainable growth from the perspective of constant innovation."
                document.querySelector("#vi2").innerHTML = "2. We always want to satisfy what our students ask of us, under the framework of quality, safety and integrity"
                document.querySelector("#vi3").innerHTML = "3. We want to improve their quality and academic development."
                // Mision
                document.querySelector("#mision").innerHTML = "Mission"
                document.querySelector("#mision_content").innerHTML = "Provide timely and effective psychological care to students with stress, anxiety and depression problems in all their dimensions, through immediate psychological assistance processes (crisis intervention, in-depth counseling, individual psychotherapy and group workshops), aimed at improve their quality of life and allow, in turn, the development of key skills for their happy development in life. Our proactive approach to developing best practices and effective treatment methods will help us achieve our raison d'être."
                // Valores-card
                document.querySelector("#valores").innerHTML = "Our values"
                document.querySelector("#card1").innerHTML = "Honesty"
                document.querySelector("#card1_content").innerHTML = "Honesty represents us, because we provide clear and concise information in order to create confidence and peace in the visitor of our page, also promoting an effective and true way out for better mental health."
                document.querySelector("#card2").innerHTML = "Responsibility"
                document.querySelector("#card2_content").innerHTML = "We carry out the process of responsibility in order to take care of all kinds of psychological cases in young people from Colegio Don Bosco and offer them a hand so that they feel good about themselves."
                document.querySelector("#card3").innerHTML = "Respect"
                document.querySelector("#card3_content").innerHTML = "The main value that identifies us above all, since we handle all your data and information with security and privacy, in addition to interacting with you in the most ethical way possible, generating faith and friendship from us to you."
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
                document.querySelector("#link3").innerHTML = "Blog";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // Vision
                document.querySelector("#vision").innerHTML = "Visión"
                document.querySelector("#vi1").innerHTML = "1. Queremos crear valor a todos nuestros estudiantes y personal interno; buscando un crecimiento continuo y sostenible bajo la óptica de la innovación constante. "
                document.querySelector("#vi2").innerHTML = "2. Queremos satisfacer lo que nuestros estudiantes nos solicitan siempre, bajo el marco de calidad, seguridad e integridad."
                document.querySelector("#vi3").innerHTML = "3. Queremos mejorar su calidad y desarrollo académico."
                // Mision
                document.querySelector("#mision").innerHTML = "Misión"
                document.querySelector("#mision_content").innerHTML = "Brindar una atención psicológica oportuna y eficaz a los estudiantes con problemas de estrés, ansiedad y depresión en todas sus dimensiones, por medio de procesos de asistencia psicológica inmediata (intervención en crisis, asesorías en profundidad, psicoterapia individual y talleres de grupo), orientados a mejorar su calidad de vida y permitir a su vez, el desarrollo de competencias clave para su desenvolvimiento feliz en la vida. Nuestro enfoque proactivo para el desarrollo de mejores prácticas y métodos eficaces de tratamiento nos ayudará a lograr nuestra razón de ser."
                // Valores-card
                document.querySelector("#valores").innerHTML = "Nuestros valores"
                document.querySelector("#card1").innerHTML = "Honestidad"
                document.querySelector("#card1_content").innerHTML = "La honestidad nos representa, debido a que brindamos información clara y concisa con el fin de crear confianza y paz en el visitante de nuestra página, también promoviendo una salida eficaz y verdadera para una mejor salud mental."
                document.querySelector("#card2").innerHTML = "Responsabilidad"
                document.querySelector("#card2_content").innerHTML = "Llevamos acabo el proceso de responsabilidad con el fin de hacernos cargo de todo tipo de caso psicológico en jóvenes del Colegio Don Bosco y brindarles una mano para que se sientan bien consigo mismos."
                document.querySelector("#card3").innerHTML = "Respeto"
                document.querySelector("#card3_content").innerHTML = "El principal valor que nos identifica ante todo, ya que manejamos con seguridad y privacidad todos tus datos e información, además de interactuar contigo de la manera más ética posible, generando fe y amistad de nosotros hacia ti."
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
                document.querySelector("#link3").innerHTML = "Blog";
                document.querySelector("#link4").innerHTML = "About us";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Logout";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Log In";
                }
                // Vision
                document.querySelector("#vision").innerHTML = "Vision"
                document.querySelector("#vi1").innerHTML = "1. We want to create value for all our students and internal staff; seeking continuous and sustainable growth from the perspective of constant innovation."
                document.querySelector("#vi2").innerHTML = "2. We always want to satisfy what our students ask of us, under the framework of quality, safety and integrity"
                document.querySelector("#vi3").innerHTML = "3. We want to improve their quality and academic development."
                // Mision
                document.querySelector("#mision").innerHTML = "Mission"
                document.querySelector("#mision_content").innerHTML = "Provide timely and effective psychological care to students with stress, anxiety and depression problems in all their dimensions, through immediate psychological assistance processes (crisis intervention, in-depth counseling, individual psychotherapy and group workshops), aimed at improve their quality of life and allow, in turn, the development of key skills for their happy development in life. Our proactive approach to developing best practices and effective treatment methods will help us achieve our raison d'être."
                // Valores-card
                document.querySelector("#valores").innerHTML = "Our values"
                document.querySelector("#card1").innerHTML = "Honesty"
                document.querySelector("#card1_content").innerHTML = "Honesty represents us, because we provide clear and concise information in order to create confidence and peace in the visitor of our page, also promoting an effective and true way out for better mental health."
                document.querySelector("#card2").innerHTML = "Responsibility"
                document.querySelector("#card2_content").innerHTML = "We carry out the process of responsibility in order to take care of all kinds of psychological cases in young people from Colegio Don Bosco and offer them a hand so that they feel good about themselves."
                document.querySelector("#card3").innerHTML = "Respect"
                document.querySelector("#card3_content").innerHTML = "The main value that identifies us above all, since we handle all your data and information with security and privacy, in addition to interacting with you in the most ethical way possible, generating faith and friendship from us to you."
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
                  document.querySelector("#link3").innerHTML = "Blog";
                  document.querySelector("#link4").innerHTML = "Nuestra identidad";
                  if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                                  // Vision
                document.querySelector("#vision").innerHTML = "Visión"
                document.querySelector("#vi1").innerHTML = "1. Queremos crear valor a todos nuestros estudiantes y personal interno; buscando un crecimiento continuo y sostenible bajo la óptica de la innovación constante. "
                document.querySelector("#vi2").innerHTML = "2. Queremos satisfacer lo que nuestros estudiantes nos solicitan siempre, bajo el marco de calidad, seguridad e integridad."
                document.querySelector("#vi3").innerHTML = "3. Queremos mejorar su calidad y desarrollo académico."
                // Mision
                document.querySelector("#mision").innerHTML = "Misión"
                document.querySelector("#mision_content").innerHTML = "Brindar una atención psicológica oportuna y eficaz a los estudiantes con problemas de estrés, ansiedad y depresión en todas sus dimensiones, por medio de procesos de asistencia psicológica inmediata (intervención en crisis, asesorías en profundidad, psicoterapia individual y talleres de grupo), orientados a mejorar su calidad de vida y permitir a su vez, el desarrollo de competencias clave para su desenvolvimiento feliz en la vida. Nuestro enfoque proactivo para el desarrollo de mejores prácticas y métodos eficaces de tratamiento nos ayudará a lograr nuestra razón de ser."
                // Valores-card
                document.querySelector("#valores").innerHTML = "Nuestros valores"
                document.querySelector("#card1").innerHTML = "Honestidad"
                document.querySelector("#card1_content").innerHTML = "La honestidad nos representa, debido a que brindamos información clara y concisa con el fin de crear confianza y paz en el visitante de nuestra página, también promoviendo una salida eficaz y verdadera para una mejor salud mental."
                document.querySelector("#card2").innerHTML = "Responsabilidad"
                document.querySelector("#card2_content").innerHTML = "Llevamos acabo el proceso de responsabilidad con el fin de hacernos cargo de todo tipo de caso psicológico en jóvenes del Colegio Don Bosco y brindarles una mano para que se sientan bien consigo mismos."
                document.querySelector("#card3").innerHTML = "Respeto"
                document.querySelector("#card3_content").innerHTML = "El principal valor que nos identifica ante todo, ya que manejamos con seguridad y privacidad todos tus datos e información, además de interactuar contigo de la manera más ética posible, generando fe y amistad de nosotros hacia ti."
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
    }



    idioma.addEventListener("click", () => {
        let input = document.querySelector("#translate");
        traducir(null, input )
       
    })