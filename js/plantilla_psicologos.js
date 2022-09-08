
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
               document.querySelector("#D7").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
               document.querySelector("#D8").innerHTML = "Systemic therapist, trained in Family Constellations and Systemic Pedagogy Salesian Institution Association - Don Bosco School - UDB - Ciudadela Don Bosco School Psychologist for 9th Grade and Baccalaureate."
               document.querySelector("#D11").innerHTML = "UCA El Salvador Polytechnic University ofNicaragua Center for Therapeutic Alternatives Systemic Therapist University Institution Colegio Mayor de Antioquia (Colombia)PAZRED Peace Chair Certification: Collective fabrics of memory in theWestern Antioch.El Salvador University Degree in psychology Don Bosco University"
               document.querySelector("#D12").innerHTML = "Expirience"
               document.querySelector("#D13").innerHTML = "MOP La Union - Millennium Funds II Psychologist/Facilitator in basic workshop on Masculinities. Corporation for Research and Popular Education (CIEP). Bogota Colombia. Psychologist/Facilitator in Pedagogical Processes Help in Action - CORDES FUNDESYRAM Project to reduce the health and economic impact of the covid-19 pandemic at the local level Consultancy for: Psychosocial assistance / psychological first aid, for children in confinement home and/or victims of violence due to emergency by COVID19) Consultant/Systemic Therapist/Facilitator of Psychosocial Care."
               document.querySelector("#D14").innerHTML = " University of El Salvador Bachelor's Degree in Psychology, Don Bosco University Master's Degree in Educational Research (In Progress)"
               document.querySelector("#D15").innerHTML = " Current Development Area"
               document.querySelector("#D16").innerHTML = " Salesian Institution Association - Don Bosco School UDB Ciudadela Don Bosco School Psychologist for Baccalaureate. Individual and group psychopedagogical care in virtual and face-to-face modalities for girls, boys, adolescents and their families from Colegio Don Bosco. Trainings for CDB-CFP Design and Implementation of O Programs"
               document.querySelector("#D9").innerHTML = " Association for the Performing Arts (ESCENICA)"
               document.querySelector("#D10").innerHTML = " Systemic Therapist/Facilitator/Ac Association for the Performing Arts (ESCENICA) World Vision El Salvador Project to Strengthen the Juvenile Justice System Systemic Therapist/Facilitator in a workshop to strengthen family ties."
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
               document.querySelector("#D7").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
               document.querySelector("#D8").innerHTML = "Terapeuta sistémico, entrenado en Constelaciones Familiares y Pedagogía SistémicaAsociación Institución Salesiana - Colegio Don Bosco - UDB - Ciudadela Don Bosco Psicólogo Escolar para 9° Grado y Bachillerato."
               document.querySelector("#D11").innerHTML = "UCA El Salvador  Universidad Politécnica de Nicaragua  Centro de Alternativas Terapéuticas Terapeuta Sistémico Institución Universitaria Colegio Mayor de Antioquia (Colombia) Certificación Cátedra de Paz  PAZRED: Tejidos colectivos de la memoria en el Occidente de Antioquia. Universidad de El Salvador Licenciatura en Psicología Universidad Don Bosco"
               document.querySelector("#D12").innerHTML = "Experiencia"
               document.querySelector("#D13").innerHTML = " MOP La Unión - Fondos del Milenio II Psicólogo/Facilitador en taller básico de Masculinidades. Corporación para la Investigación y la Educación Popular (CIEP). Bogotá, Colombia. Psicólogo/Facilitador en Procesos Pedagógicos Ayuda en Acción - CORDES  FUNDESYRAM Proyecto reducción del impacto sanitario y económico de la pandemia de covid-19 a nivel local Consultoría para: Asistencia psicosocial/primeros auxilios psicológicos, para niñez en confinamiento domiciliar y/o víctimas de violencia a causa de emergencia por COVID19) Consultor/Terapeuta Sistémico/Facilitador de Atención Psicosocial."
               document.querySelector("#D14").innerHTML = " Universidad de El Salvador Licenciatura en Psicología,Universidad Don Bosco Maestría en Investigación de la Educación (En Curso)"
               document.querySelector("#D15").innerHTML = " Área actual de Desarrollo"
               document.querySelector("#D16").innerHTML = "  Asociación Institución Salesiana - Colegio Don Bosco  UDB  Ciudadela Don Bosco Psicólogo Escolar para Bachillerato. Atención psicopedagógica individual y grupal en modalidades virtual y presencial para niñas, niños, adolescentes y sus familias del Colegio Don Bosco. Capacitaciones para CDB-CFP Diseño e Implementación de Programas de O "
               document.querySelector("#D9").innerHTML = " Asociación para las Artes Escénicas (ESCENICA)"
               document.querySelector("#D10").innerHTML = " Terapeuta Sistémico/Facilitador/Ac Asociación para las Artes Escénicas (ESCENICA)  World Vision El Salvador Proyecto Fortalecimiento del Sistema de Justicia Juvenil Terapeuta Sistémico/Facilitador en taller de fortalecimiento de vínculos familiares."
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
               document.querySelector("#D7").innerHTML = "Professional Experience Leader, trainer and social activist. Facilitator of experiential processes with alternative participatory ludic methodologies. Training and theatrical experience for 15 years."
               document.querySelector("#D8").innerHTML = "Systemic therapist, trained in Family Constellations and Systemic Pedagogy Salesian Institution Association - Don Bosco School - UDB - Ciudadela Don Bosco School Psychologist for 9th Grade and Baccalaureate."
               document.querySelector("#D11").innerHTML = "UCA El Salvador Polytechnic University of Nicaragua Center for Therapeutic Alternatives Systemic Therapist University Institution Colegio Mayor de Antioquia (Colombia)PAZRED Peace Chair Certification: Collective fabrics of memory in theWestern Antioch.El Salvador University Degree in psychology Don Bosco University"
               document.querySelector("#D12").innerHTML = "Expirience"
               document.querySelector("#D13").innerHTML = "MOP La Union - Millennium Funds II Psychologist/Facilitator in basic workshop on Masculinities. Corporation for Research and Popular Education (CIEP). Bogota Colombia. Psychologist/Facilitator in Pedagogical Processes Help in Action - CORDES FUNDESYRAM Project to reduce the health and economic impact of the covid-19 pandemic at the local level Consultancy for: Psychosocial assistance / psychological first aid, for children in confinement home and/or victims of violence due to emergency by COVID19) Consultant/Systemic Therapist/Facilitator of Psychosocial Care."
               document.querySelector("#D14").innerHTML = " University of El Salvador Bachelor's Degree in Psychology, Don Bosco University Master's Degree in Educational Research (In Progress)"
               document.querySelector("#D15").innerHTML = " Current Development Area"
               document.querySelector("#D16").innerHTML = " Salesian Institution Association - Don Bosco School UDB Ciudadela Don Bosco School Psychologist for Baccalaureate. Individual and group psychopedagogical care in virtual and face-to-face modalities for girls, boys, adolescents and their families from Colegio Don Bosco. Trainings for CDB-CFP Design and Implementation of O Programs"
               document.querySelector("#D9").innerHTML = " Association for the Performing Arts (ESCENICA)"
               document.querySelector("#D10").innerHTML = " Association for the Performing Arts (ESCENICA)"
               document.querySelector("#D10").innerHTML = " Systemic Therapist/Facilitator/Ac Association for the Performing Arts (ESCENICA) World Vision El Salvador Project to Strengthen the Juvenile Justice System Systemic Therapist/Facilitator in a workshop to strengthen family ties."
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
               document.querySelector("#D7").innerHTML = "Experiencia Profesional Dirigente, capacitador y activista social.Facilitador de procesos vivenciales con metodologías lúdicas participativas alternativas. Formación y experiencia teatral por 15 años."
               document.querySelector("#D8").innerHTML = "Terapeuta sistémico, entrenado en Constelaciones Familiares y Pedagogía SistémicaAsociación Institución Salesiana - Colegio Don Bosco - UDB - Ciudadela Don Bosco Psicólogo Escolar para 9° Grado y Bachillerato."
               document.querySelector("#D11").innerHTML = "UCA El Salvador  Universidad Politécnica de Nicaragua  Centro de Alternativas Terapéuticas Terapeuta Sistémico Institución Universitaria Colegio Mayor de Antioquia (Colombia) Certificación Cátedra de Paz  PAZRED: Tejidos colectivos de la memoria en el Occidente de Antioquia. Universidad de El Salvador Licenciatura en Psicología Universidad Don Bosco"
               document.querySelector("#D12").innerHTML = "Experiencia"
               document.querySelector("#D13").innerHTML = " MOP La Unión - Fondos del Milenio II Psicólogo/Facilitador en taller básico de Masculinidades. Corporación para la Investigación y la Educación Popular (CIEP). Bogotá, Colombia. Psicólogo/Facilitador en Procesos Pedagógicos Ayuda en Acción - CORDES  FUNDESYRAM Proyecto reducción del impacto sanitario y económico de la pandemia de covid-19 a nivel local Consultoría para: Asistencia psicosocial/primeros auxilios psicológicos, para niñez en confinamiento domiciliar y/o víctimas de violencia a causa de emergencia por COVID19) Consultor/Terapeuta Sistémico/Facilitador de Atención Psicosocial."
               document.querySelector("#D14").innerHTML = " Universidad de El Salvador Licenciatura en Psicología,Universidad Don Bosco Maestría en Investigación de la Educación (En Curso)"
               document.querySelector("#D15").innerHTML = " Área actual de Desarrollo"
               document.querySelector("#D16").innerHTML = "  Asociación Institución Salesiana - Colegio Don Bosco  UDB  Ciudadela Don Bosco Psicólogo Escolar para Bachillerato. Atención psicopedagógica individual y grupal en modalidades virtual y presencial para niñas, niños, adolescentes y sus familias del Colegio Don Bosco. Capacitaciones para CDB-CFP Diseño e Implementación de Programas de O "
               document.querySelector("#D9").innerHTML = " Asociación para las Artes Escénicas (ESCENICA)"
               document.querySelector("#D10").innerHTML = " Terapeuta Sistémico/Facilitador/Ac Asociación para las Artes Escénicas (ESCENICA)  World Vision El Salvador Proyecto Fortalecimiento del Sistema de Justicia Juvenil Terapeuta Sistémico/Facilitador en taller de fortalecimiento de vínculos familiares."
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

