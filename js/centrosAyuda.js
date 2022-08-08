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
                // Banner
                document.querySelector("#title1").innerHTML = "Help centers in the country"
                document.querySelector("#paragraph1").innerHTML = "In this section we present the places you can turn to in the event that you suffer a crisis, whether it be anxiety, depression, stress, etc."
                
                //Inicio de centros de ayuda 
                document.querySelector("#titleA").innerHTML = "Heart & Mind Psychological Therapy Clinic"
                document.querySelector("#paragraphA").innerHTML = "Corazón & Mente offers psychological assistance, also developing investigative activities related to the practice of psychology in its various fields and psychosocial well-being.Location Extension John Paul II. John Paul II Shopping Center"
                document.querySelector("#paragraphB").innerHTML = "Psicoevalua provides clinical psychology services: individual therapy, couples therapy, anxiety and stress crisis. In addition to emotional evaluations and personal development, etc. Its intention is:It is important to learn to live life to the fullest and value ourselves as we are; seek to succeed, love, help others and achieve our goals. Therefore, this is a space where psychology is used as a tool to improve quality of life and self-determination of people.Address: Col Escalón 5 Cl Pte No 4236 Ent 81 y, 83 Avenida Nte., San Salvador"
                document.querySelector("#paragraphC").innerHTML = "Massín Psychological Clinic, offers individual therapy services, couples therapy, family therapy, psychological evaluation, clinical psychology and crisis intervention.Address: Paseo General Escalón and 85 Av. Norte House #114 Clinic 8, Colonia Escalón. San Salvador."
                document.querySelector("#paragraphD").innerHTML = "The National Psychiatric Hospital Dr. José Molina Martínez, is a national hospital in which people with psychological problems and evaluations are intervened, in addition to being a general hospital.Address: Calle la Fuente Cantón Venecia, Soyapango, San Salvador, C.A. 24-hour Emergency Service - Public Service from 7:30 a.m.- 3:30 p.m. (Uninterrupted hours)."
                document.querySelector("#paragraphE").innerHTML = "The Mental Health Clinic offers psychological care for children, adolescents and adults in all branches.Address: Located in front of the Lourdes Colón health unit.Prosalud Clinic, Francisco Menéndez Street #2-9."

                
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
                document.querySelector("#link1").innerHTML = "Psicologos";
                document.querySelector("#link2").innerHTML = "Preguntas frecuentes";
                document.querySelector("#link3").innerHTML = "Blog";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // Banner
                document.querySelector("#title1").innerHTML = "Centros de ayuda en el Pais"
                document.querySelector("#paragraph1").innerHTML = "En esta sección te presentamos los lugares a los que puedes acudir en caso de que sufras una crisis, ya sea de ansiedad, depresión, estrés, etc."
            

               //Inicio de centros de ayuda 
               document.querySelector("#titleA").innerHTML = "Heart & Mind Psychological Therapy Clinic"
               document.querySelector("#paragraphA").innerHTML = "Corazón & Mente ofrece asistencia psicológica, desarrollando también actividades de investigación relacionadas con el ejercicio de la psicología en sus diversos campos y el bienestar psicosocial.Ubicación Ampliación Juan Pablo II. Centro Comercial Juan Pablo II"
               document.querySelector("#paragraphB").innerHTML = "Psicoevalua brinda servicios de psicología clínica: terapia individual, terapia de pareja, crisis de ansiedad y estrés. Además de evaluaciones emocionales y de desarrollo personal, etc. Su intención es: Es importante aprender a vivir la vida al máximo y valorarnos tal y como somos; buscar triunfar, amar, ayudar a los demás y alcanzar nuestras metas. Por ello, este es un espacio donde se utiliza la psicología como herramienta para mejorar la calidad de vida y la autodeterminación de las personas.Dirección: Col Escalón 5 Cl Pte No 4236 Ent 81 y, 83 Avenida Nte., San Salvador"
               document.querySelector("#paragraphC").innerHTML = "Clínica Psicológica Massín, ofrece servicios de terapia individual, terapia de pareja, terapia familiar, evaluación psicológica, psicología clínica e intervención en crisis.Dirección: Paseo General Escalón y 85 Av. Casa Norte #114 Clínica 8, Colonia Escalón. San Salvador."
               document.querySelector("#paragraphD").innerHTML = "El Hospital Nacional Psiquiátrico Dr. José Molina Martínez, es un hospital nacional en el que se intervienen personas con problemas psicológicos y evaluaciones, además de ser un hospital general.Dirección: Calle la Fuente Cantón Venecia, Soyapango, San Salvador, C.A. Servicio de Urgencias 24 horas - Atención al Público de 7:30 a 15:30 horas. (Horario ininterrumpido)."
               document.querySelector("#paragraphE").innerHTML = "La Clínica de Salud Mental ofrece atención psicológica a niños, adolescentes y adultos en todas sus sucursales. Dirección: Ubicado frente a la unidad de salud Lourdes Colón. Clínica Prosalud, Calle Francisco Menéndez #2-9."
                
               // footer
                document.querySelector("#fo1").innerHTML = "Home"
                document.querySelector("#fo2").innerHTML = "Sobre nosotross"
                document.querySelector("#fo3").innerHTML = "Psicologos"
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
                // banner
                document.querySelector("#title1").innerHTML = "Help centers in the country"
                document.querySelector("#paragraph1").innerHTML = "In this section we present the places you can turn to in the event that you suffer a crisis, whether it be anxiety, depression, stress, etc."
                // Inicio de centros de ayuda
                 //Inicio de centros de ayuda 
                 document.querySelector("#titleA").innerHTML = "Heart & Mind Psychological Therapy Clinic"
                 document.querySelector("#paragraphA").innerHTML = "Corazón & Mente offers psychological assistance, also developing investigative activities related to the practice of psychology in its various fields and psychosocial well-being.Location Extension John Paul II. John Paul II Shopping Center"
                 document.querySelector("#paragraphB").innerHTML = "Psicoevalua provides clinical psychology services: individual therapy, couples therapy, anxiety and stress crisis. In addition to emotional evaluations and personal development, etc. Its intention is:It is important to learn to live life to the fullest and value ourselves as we are; seek to succeed, love, help others and achieve our goals. Therefore, this is a space where psychology is used as a tool to improve quality of life and self-determination of people.Address: Col Escalón 5 Cl Pte No 4236 Ent 81 y, 83 Avenida Nte., San Salvador"
                 document.querySelector("#paragraphC").innerHTML = "Massín Psychological Clinic, offers individual therapy services, couples therapy, family therapy, psychological evaluation, clinical psychology and crisis intervention.Address: Paseo General Escalón and 85 Av. Norte House #114 Clinic 8, Colonia Escalón. San Salvador."
                 document.querySelector("#paragraphD").innerHTML = "The National Psychiatric Hospital Dr. José Molina Martínez, is a national hospital in which people with psychological problems and evaluations are intervened, in addition to being a general hospital.Address: Calle la Fuente Cantón Venecia, Soyapango, San Salvador, C.A. 24-hour Emergency Service - Public Service from 7:30 a.m.- 3:30 p.m. (Uninterrupted hours)."
                 document.querySelector("#paragraphE").innerHTML = "The Mental Health Clinic offers psychological care for children, adolescents and adults in all branches.Address: Located in front of the Lourdes Colón health unit.Prosalud Clinic, Francisco Menéndez Street #2-9."
 
                 
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
                document.querySelector("#link1").innerHTML = "Psicologos";
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
                document.querySelector("#title1").innerHTML = "Centros de ayuda en el Pais"
                document.querySelector("#paragraph1").innerHTML = "En esta sección te presentamos los lugares a los que puedes acudir en caso de que sufras una crisis, ya sea de ansiedad, depresión, estrés, etc."
                //Inicio de centros de ayuda 
               document.querySelector("#titleA").innerHTML = "Heart & Mind Psychological Therapy Clinic"
               document.querySelector("#paragraphA").innerHTML = "Corazón & Mente ofrece asistencia psicológica, desarrollando también actividades de investigación relacionadas con el ejercicio de la psicología en sus diversos campos y el bienestar psicosocial.Ubicación Ampliación Juan Pablo II. Centro Comercial Juan Pablo II"
               document.querySelector("#paragraphB").innerHTML = "Psicoevalua brinda servicios de psicología clínica: terapia individual, terapia de pareja, crisis de ansiedad y estrés. Además de evaluaciones emocionales y de desarrollo personal, etc. Su intención es: Es importante aprender a vivir la vida al máximo y valorarnos tal y como somos; buscar triunfar, amar, ayudar a los demás y alcanzar nuestras metas. Por ello, este es un espacio donde se utiliza la psicología como herramienta para mejorar la calidad de vida y la autodeterminación de las personas.Dirección: Col Escalón 5 Cl Pte No 4236 Ent 81 y, 83 Avenida Nte., San Salvador"
               document.querySelector("#paragraphC").innerHTML = "Clínica Psicológica Massín, ofrece servicios de terapia individual, terapia de pareja, terapia familiar, evaluación psicológica, psicología clínica e intervención en crisis.Dirección: Paseo General Escalón y 85 Av. Casa Norte #114 Clínica 8, Colonia Escalón. San Salvador."
               document.querySelector("#paragraphD").innerHTML = "El Hospital Nacional Psiquiátrico Dr. José Molina Martínez, es un hospital nacional en el que se intervienen personas con problemas psicológicos y evaluaciones, además de ser un hospital general.Dirección: Calle la Fuente Cantón Venecia, Soyapango, San Salvador, C.A. Servicio de Urgencias 24 horas - Atención al Público de 7:30 a 15:30 horas. (Horario ininterrumpido)."
               document.querySelector("#paragraphE").innerHTML = "La Clínica de Salud Mental ofrece atención psicológica a niños, adolescentes y adultos en todas sus sucursales. Dirección: Ubicado frente a la unidad de salud Lourdes Colón. Clínica Prosalud, Calle Francisco Menéndez #2-9."
                // footer
                document.querySelector("#fo1").innerHTML = "Home"
                document.querySelector("#fo2").innerHTML = "Sobre nosotross"
                document.querySelector("#fo3").innerHTML = "Psicologos"
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