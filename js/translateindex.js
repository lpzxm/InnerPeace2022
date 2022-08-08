
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
                // banner
                document.querySelector("#pal1").innerHTML = "Welcome ";
                document.querySelector("#pal2").innerHTML = "to the page of mental Salesianity ";
                // document.querySelector("#contenido1").innerHTML = "Welcome to the page of mental salesianity"
                document.querySelector("#contenido2").innerHTML = "My satisfaction is to see you happy - Don Bosco"
                document.querySelector("#boton1").innerHTML = "We go!"
                // Servicios psicologicos cards}
                // Ansiedadcard
                document.querySelector("#title1").innerHTML = "Psychology services we treat"
                document.querySelector("#ansiedad").innerHTML = "Anxiety"
                document.querySelector("#ansiedad_ask").innerHTML = "What's anxiety?"
                document.querySelector("#ansiedad_info").innerHTML = "Anxiety is a feeling of fear, dread and restlessness. It can make you sweat, feel restless and tense, and have a palpitation. It can be a normal reaction to stress. For example, you may feel anxious when faced with a difficult problem at work, before taking an exam, etc."
                document.querySelector("#ansiedadbtn").value = "Read more"
                // Depresioncard
                document.querySelector("#depresion").innerHTML = "Depression"
                document.querySelector("#depresion_ask").innerHTML = "What is depression?"
                document.querySelector("#depresion_info").innerHTML = "Clinical depression is a serious and common illness that affects us physically and mentally in our way of feeling and thinking. Depression can make us want to withdraw from our family, friends, work, and school. It can also cause anxiety, loss of sleep, loss of appetite, and lack of interest or pleasure in doing different activities."
                document.querySelector("#deprebtn").value = "Read more"
                // Autoestimacard
                document.querySelector("#autoestima").innerHTML = "Self-esteem and personal development"
                document.querySelector("#autoestima_ask").innerHTML = "What is self-esteem and personal development?"
                document.querySelector("#autoestima_info").innerHTML = "Self-esteem is the perception or idea that a person has about himself, his worth, his abilities and how satisfied he feels with himself. Self-esteem influences the thoughts and feelings that we experience on a daily basis, and can be the main source of discomfort. In addition, self-esteem conditions the way of acting in the face of problems and challenges."
                document.querySelector("#autobtn").value = "Read more"
                // Estrescard
                document.querySelector("#estres").innerHTML = "Stress"
                document.querySelector("#estres_ask").innerHTML = "What is stress?"
                document.querySelector("#estres_info").innerHTML = "Stress can be defined as a set of physiological reactions that occur when a person suffers a state of nervous tension, product of various situations in the workplace or personal: overwork, anxiety, traumatic situations that have been experienced, etc."
                document.querySelector("#estresbtn").value = "Read more"
                // Falta de atención card
                document.querySelector("#falta").innerHTML = "Lack of attention"
                document.querySelector("#falta_ask").innerHTML = "What is inattention?"
                document.querySelector("#falta_info").innerHTML = "Attention deficit hyperactivity disorder (ADHD) is a chronic condition that affects millions of children and often continues into adulthood. ADHD includes a combination of persistent problems, such as difficulty sustaining attention, hyperactivity, and impulsive behavior."
                document.querySelector("#tdhbtn").value = "Read more"
                // intencion
                document.querySelector(".tit_intencion").innerHTML = "Inner Peace as your friend"
                document.querySelector(".desc_intencion").innerHTML = "Inner Peace aims to help students with psychological problems or illnesses through interactive solutions so that you can achieve mental growth and feel good about yourself."
                // footer
                document.querySelector("#fo1").innerHTML = "Home";
                document.querySelector("#fo2").innerHTML = "About us";
                document.querySelector("#fo3").innerHTML = "Psychologists";
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
                document.querySelector("#link2").innerHTML = "Preguntas Frecuentes";
                document.querySelector("#link3").innerHTML = "Blog";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // banner
                document.querySelector("#pal1").innerHTML = "Bienvenido ";
                document.querySelector("#pal2").innerHTML = "a la pagina de salesianidad mental";
                // document.querySelector("#contenido1").innerHTML = "Bienvenido a la pagina de salesianidad mental"
                document.querySelector("#contenido2").innerHTML = "Mi satisfacción es verte alegre - Don Bosco"
                document.querySelector("#boton1").innerHTML = "Vamos!"
                // Servicios psicologicos cards}
                // Ansiedadcard
                document.querySelector("#title1").innerHTML = "Servicios de psicologia que tratamos"
                document.querySelector("#ansiedad").innerHTML = "Ansiedad"
                document.querySelector("#ansiedad_ask").innerHTML = "¿Qué es la Ansiedad?"
                document.querySelector("#ansiedad_info").innerHTML = "La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen, etc."
                // Depresioncard
                document.querySelector("#depresion").innerHTML = "Depresión"
                document.querySelector("#depresion_ask").innerHTML = "¿Qué es la depresión?"
                document.querySelector("#depresion_info").innerHTML = "La depresión clínica, es una enfermedad grave y común que nos afecta física y mentalmente en nuestro modo de sentir y de pensar. La depresión nos puede provocar deseos de alejarnos de nuestra familia, amigos, trabajo, y escuela. Puede además causarnos ansiedad, pérdida del sueño, del apetito, y falta de interés o placer en realizar diferentes actividades."
                // Autoestimacard
                document.querySelector("#autoestima").innerHTML = "Autoestima y desarrollo personal"
                document.querySelector("#autoestima_ask").innerHTML = "¿Qué es la autoestima y el desarrollo personal?"
                document.querySelector("#autoestima_info").innerHTML = "La autoestima es la percepción o idea que una persona tiene acerca de sí mismo, su valía, sus capacidades y cómo de satisfecho se siente consigo mismo. La autoestima influye en los pensamientos y sentimientos que experimentamos a diario, pudiendo ser la principal fuente de malestar. Además, la autoestima condiciona la manera de actuar ante los problemas y los retos. "
                // Estrescard
                document.querySelector("#estres").innerHTML = "Estrés"
                document.querySelector("#estres_ask").innerHTML = "¿Qué es el estrés?"
                document.querySelector("#estres_info").innerHTML = "El estrés puede definirse como un conjunto de reacciones fisiológicas que se presentan cuando una persona sufre un estado de tensión nerviosa, producto de diversas situaciones en el ámbito laboral o personal: exceso de trabajo, ansiedad, situaciones traumáticas que se hayan vivido, etc."
                document.querySelector(".inptbtn").innerHTML = "a"
                // Falta de atención card
                document.querySelector("#falta").innerHTML = "Falta de atención"
                document.querySelector("#falta_ask").innerHTML = "¿Qué es la falta de atención?"
                document.querySelector("#falta_info").innerHTML = "El trastorno por déficit de atención e hiperactividad (TDAH) es una afección crónica que afecta a millones de niños y a menudo continúa en la edad adulta. El TDAH incluye una combinación de problemas persistentes, tales como dificultad para mantener la atención, hiperactividad y comportamiento impulsivo."
                // intencion
                document.querySelector(".tit_intencion").innerHTML = "Inner Peace como tu amigo"
                document.querySelector(".desc_intencion").innerHTML = "Inner Peace pretende ayudar a los estudiantes con problemas o padecimientos psicologicos mediante soluciones interactivas para que obtengas un crecimiento mental y te sientas bien contigo mismo"
                // footer
                document.querySelector("#fo1").innerHTML = "Inicio";
                document.querySelector("#fo2").innerHTML = "Sobre nosotros";
                document.querySelector("#fo3").innerHTML = "Psicologos";
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
                document.querySelector("#pal1").innerHTML = "Welcome ";
                document.querySelector("#pal2").innerHTML = "to the page of mental Salesianity ";
                // document.querySelector("#contenido1").innerHTML = "Welcome to the page of mental salesianity"
                document.querySelector("#contenido2").innerHTML = "My satisfaction is to see you happy - Don Bosco"
                document.querySelector("#boton1").innerHTML = "We go!"
                // Servicios psicologicos cards}
                // Ansiedadcard
                document.querySelector("#title1").innerHTML = "Psychology services we treat"
                document.querySelector("#ansiedad").innerHTML = "Anxiety"
                document.querySelector("#ansiedad_ask").innerHTML = "What's anxiety?"
                document.querySelector("#ansiedad_info").innerHTML = "Anxiety is a feeling of fear, dread and restlessness. It can make you sweat, feel restless and tense, and have a palpitation. It can be a normal reaction to stress. For example, you may feel anxious when faced with a difficult problem at work, before taking an exam, etc."
                // Depresioncard
                document.querySelector("#depresion").innerHTML = "Depression"
                document.querySelector("#depresion_ask").innerHTML = "What is depression?"
                document.querySelector("#depresion_info").innerHTML = "Clinical depression is a serious and common illness that affects us physically and mentally in our way of feeling and thinking. Depression can make us want to withdraw from our family, friends, work, and school. It can also cause anxiety, loss of sleep, loss of appetite, and lack of interest or pleasure in doing different activities."
                // Autoestimacard
                document.querySelector("#autoestima").innerHTML = "Self-esteem and personal development"
                document.querySelector("#autoestima_ask").innerHTML = "What is self-esteem and personal development?"
                document.querySelector("#autoestima_info").innerHTML = "Self-esteem is the perception or idea that a person has about himself, his worth, his abilities and how satisfied he feels with himself. Self-esteem influences the thoughts and feelings that we experience on a daily basis, and can be the main source of discomfort. In addition, self-esteem conditions the way of acting in the face of problems and challenges."
                // Estrescard
                document.querySelector("#estres").innerHTML = "Stress"
                document.querySelector("#estres_ask").innerHTML = "What is stress?"
                document.querySelector("#estres_info").innerHTML = "Stress can be defined as a set of physiological reactions that occur when a person suffers a state of nervous tension, product of various situations in the workplace or personal: overwork, anxiety, traumatic situations that have been experienced, etc."
                // Falta de atención card
                document.querySelector("#falta").innerHTML = "Lack of attention"
                document.querySelector("#falta_ask").innerHTML = "What is inattention?"
                document.querySelector("#falta_info").innerHTML = "Attention deficit hyperactivity disorder (ADHD) is a chronic condition that affects millions of children and often continues into adulthood. ADHD includes a combination of persistent problems, such as difficulty sustaining attention, hyperactivity, and impulsive behavior."
                // intencion
                document.querySelector(".tit_intencion").innerHTML = "Inner Peace as your friend"
                document.querySelector(".desc_intencion").innerHTML = "Inner Peace aims to help students with psychological problems or illnesses through interactive solutions so that you can achieve mental growth and feel good about yourself."
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
                document.querySelector("#link2").innerHTML = "Preguntas Frecuentes";
                document.querySelector("#link3").innerHTML = "Blog";
                document.querySelector("#link4").innerHTML = "Nuestra identidad";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Salir";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Entrar";
                }
                // banner
                document.querySelector("#pal1").innerHTML = "Bienvenido ";
                document.querySelector("#pal2").innerHTML = "a la pagina de salesianidad mental";
                // document.querySelector("#contenido1").innerHTML = "Bienvenido a la pagina de salesianidad mental"
                document.querySelector("#contenido2").innerHTML = "Mi satisfacción es verte alegre - Don Bosco"
                document.querySelector("#boton1").innerHTML = "Vamos!"
                // Servicios psicologicos cards}
                // Ansiedadcard
                document.querySelector("#title1").innerHTML = "Servicios de psicologia que tratamos"
                document.querySelector("#ansiedad").innerHTML = "Ansiedad"
                document.querySelector("#ansiedad_ask").innerHTML = "¿Qué es la Ansiedad?"
                document.querySelector("#ansiedad_info").innerHTML = "La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen, etc."
                // Depresioncard
                document.querySelector("#depresion").innerHTML = "Depresión"
                document.querySelector("#depresion_ask").innerHTML = "¿Qué es la depresión?"
                document.querySelector("#depresion_info").innerHTML = "La depresión clínica, es una enfermedad grave y común que nos afecta física y mentalmente en nuestro modo de sentir y de pensar. La depresión nos puede provocar deseos de alejarnos de nuestra familia, amigos, trabajo, y escuela. Puede además causarnos ansiedad, pérdida del sueño, del apetito, y falta de interés o placer en realizar diferentes actividades."
                // Autoestimacard
                document.querySelector("#autoestima").innerHTML = "Autoestima y desarrollo personal"
                document.querySelector("#autoestima_ask").innerHTML = "¿Qué es la autoestima y el desarrollo personal?"
                document.querySelector("#autoestima_info").innerHTML = "La autoestima es la percepción o idea que una persona tiene acerca de sí mismo, su valía, sus capacidades y cómo de satisfecho se siente consigo mismo. La autoestima influye en los pensamientos y sentimientos que experimentamos a diario, pudiendo ser la principal fuente de malestar. Además, la autoestima condiciona la manera de actuar ante los problemas y los retos. "
                // Estrescard
                document.querySelector("#estres").innerHTML = "Estrés"
                document.querySelector("#estres_ask").innerHTML = "¿Qué es el estrés?"
                document.querySelector("#estres_info").innerHTML = "El estrés puede definirse como un conjunto de reacciones fisiológicas que se presentan cuando una persona sufre un estado de tensión nerviosa, producto de diversas situaciones en el ámbito laboral o personal: exceso de trabajo, ansiedad, situaciones traumáticas que se hayan vivido, etc."
                document.querySelector(".inptbtn").innerHTML = "a"
                // Falta de atención card
                document.querySelector("#falta").innerHTML = "Falta de atención"
                document.querySelector("#falta_ask").innerHTML = "¿Qué es la falta de atención?"
                document.querySelector("#falta_info").innerHTML = "El trastorno por déficit de atención e hiperactividad (TDAH) es una afección crónica que afecta a millones de niños y a menudo continúa en la edad adulta. El TDAH incluye una combinación de problemas persistentes, tales como dificultad para mantener la atención, hiperactividad y comportamiento impulsivo."
                // intencion
                document.querySelector(".tit_intencion").innerHTML = "Inner Peace como tu amigo"
                document.querySelector(".desc_intencion").innerHTML = "Inner Peace pretende ayudar a los estudiantes con problemas o padecimientos psicologicos mediante soluciones interactivas para que obtengas un crecimiento mental y te sientas bien contigo mismo"
                // footer
                document.querySelector("#fo1").innerHTML = "Inicio"
                document.querySelector("#fo2").innerHTML = "Sobre nosotros"
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

