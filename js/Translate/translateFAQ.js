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
                // title
                document.querySelector("#title").innerHTML = "Frequently Asked Questions"
                document.querySelector("#head_desc").innerHTML = "Welcome, in this place you will find solutions to your most frequently asked questions"
                // Acordeon
                document.querySelector("#label1").innerHTML = "What is Inner Peace?"
                document.querySelector("#label_desc1").innerHTML = "Inner Peace is a page that aims to help students of Colegio Don Bosco with psychological problems or illnesses."
                document.querySelector("#label2").innerHTML = "What is our main intention?"
                document.querySelector("#label_desc2").innerHTML = "Our main intention is to give a hand to young people who suffer from psychological ailments in the face of student stress."
                document.querySelector("#label3").innerHTML = "What information do we provide?"
                document.querySelector("#label_desc3").innerHTML = "On our website, we provide information about the most common ailments in young people and interactive solutions at your fingertips, we also have a blog with various topics to answer any questions you may have."
                document.querySelector("#label4").innerHTML = "What is or what is the bot icon that appears on my screen?"
                document.querySelector("#label_desc4").innerHTML = "The icon that appears on the right side of your screen, yes, it is a bot. It's called PeaceBot, this will be your personal assistant, with whom you can interact, from friend to friend, advising you in the best way."
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
                // title
                // title
                document.querySelector("#title").innerHTML = "Preguntas Frecuentes"
                document.querySelector("#head_desc").innerHTML = "Bienvenido, en este lugar encontraras solución a tus preguntas más frecuentes"
                // Acordeon
                document.querySelector("#label1").innerHTML = "¿Qué es Inner Peace?"
                document.querySelector("#label_desc1").innerHTML = "Inner Peace es una página que tiene como finalidad ayudar a los estudiantes del Colegio Don Bosco con problemas o padecimientos psícologicos."
                document.querySelector("#label2").innerHTML = "¿Cuál es nuestra intención principal?"
                document.querySelector("#label_desc2").innerHTML = "Nuestra intención principal es dar una mano a los jovenes que sufren de padecimientos psicologicos ante el Estrés estudiantil."
                document.querySelector("#label3").innerHTML = "¿Qué información proporcionamos?"
                document.querySelector("#label_desc4").innerHTML = "El icono que aparece al lado derecho de tu pantalla, si, es un bot. Se llama PeaceBot, este sera tu asistente personal, con el cual podras interactuar, de amigo a amigo, aconsejandote de la mejor manera."
                document.querySelector("#label4").innerHTML = "¿Qué es o para qué es el icono de bot que aparece en mi pantalla?"
                document.querySelector("#label_desc4").innerHTML = "El icono que aparece al lado derecho de tu pantalla, si, es un bot. Se llama PeaceBot, este sera tu asistente personal, con el cual podras interactuar, de amigo a amigo, aconsejandote de la mejor manera."
                // footer
                document.querySelector("#fo1").innerHTML = "Inicio"
                document.querySelector("#fo2").innerHTML = "Sobre nosotros"
                document.querySelector("#fo3").innerHTML = "Psicólogos"
                document.querySelector("#fo4").innerHTML = "Centros de ayuda";
                document.querySelector(".social-text").innerHTML = "Nuestras redes sociales!"
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
                // title
                document.querySelector("#title").innerHTML = "Frequently Asked Questions"
                document.querySelector("#head_desc").innerHTML = "Welcome, in this place you will find solutions to your most frequently asked questions"
                // Acordeon
                document.querySelector("#label1").innerHTML = "What is Inner Peace?"
                document.querySelector("#label_desc1").innerHTML = "Inner Peace is a page that aims to help students of Colegio Don Bosco with psychological problems or illnesses."
                document.querySelector("#label2").innerHTML = "What is our main intention?"
                document.querySelector("#label_desc2").innerHTML = "Our main intention is to give a hand to young people who suffer from psychological ailments in the face of student stress."
                document.querySelector("#label3").innerHTML = "What information do we provide?"
                document.querySelector("#label_desc3").innerHTML = "On our website, we provide information about the most common ailments in young people and interactive solutions at your fingertips, we also have a blog with various topics to answer any questions you may have."
                document.querySelector("#label4").innerHTML = "What is or what is the bot icon that appears on my screen?"
                document.querySelector("#label_desc4").innerHTML = "The icon that appears on the right side of your screen, yes, it is a bot. It's called PeaceBot, this will be your personal assistant, with whom you can interact, from friend to friend, advising you in the best way."
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
                // title
                // title
                document.querySelector("#title").innerHTML = "Preguntas Frecuentes"
                document.querySelector("#head_desc").innerHTML = "Bienvenido, en este lugar encontraras solución a tus preguntas más frecuentes"
                // Acordeon
                document.querySelector("#label1").innerHTML = "¿Qué es Inner Peace?"
                document.querySelector("#label_desc1").innerHTML = "Inner Peace es una página que tiene como finalidad ayudar a los estudiantes del Colegio Don Bosco con problemas o padecimientos psícologicos."
                document.querySelector("#label2").innerHTML = "¿Cuál es nuestra intención principal?"
                document.querySelector("#label_desc2").innerHTML = "Nuestra intención principal es dar una mano a los jovenes que sufren de padecimientos psicologicos ante el Estrés estudiantil."
                document.querySelector("#label3").innerHTML = "¿Qué información proporcionamos?"
                document.querySelector("#label_desc3").innerHTML = "En nuestra página web, proporcionamos información acerca de los padecimientos más comunes en los jovenes y soluciones interactivas al alcance de la mano, también contamos con un blog con temas variados para responder cualquier duda que tú tengas."
                document.querySelector("#label4").innerHTML = "¿Qué es o para qué es el icono de bot que aparece en mi pantalla?"
                document.querySelector("#label_desc4").innerHTML = "El icono que aparece al lado derecho de tu pantalla, si, es un bot. Se llama PeaceBot, este sera tu asistente personal, con el cual podras interactuar, de amigo a amigo, aconsejandote de la mejor manera."
                // footer
                document.querySelector("#fo1").innerHTML = "Inicio"
                document.querySelector("#fo2").innerHTML = "Sobre nosotross"
                document.querySelector("#fo3").innerHTML = "Psicólogos"
                document.querySelector("#fo4").innerHTML = "Centros de ayuda"
                document.querySelector(".social-text").innerHTML = "Nuestras redes sociales!"
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