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
                // menu
                document.querySelector("#link1").innerHTML = "Psycologisht";
                document.querySelector("#link2").innerHTML = "Frequent questions";
                document.querySelector("#link3").innerHTML = "Blog";
                document.querySelector("#link4").innerHTML = "About us";
                if (document.querySelector("#Logout")) {
                    document.querySelector("#Logout").innerHTML = "Logout";
                }
                  if (document.querySelector("#Salir")) {
                    document.querySelector("#Salir").innerHTML = "Log In";
                }
                /*Parte de document querySelector en ingles*/
                document.querySelector("#tex1").innerHTML = "Lack of attention";
                document.querySelector("#tex2").innerHTML = "What is ADHD?";
                document.querySelector("#tex3").innerHTML = "Attention deficit hyperactivity disorder (ADHD) is a mental disorder that comprises a combination of persistent problems, such as difficulty paying attention, hyperactivity, and impulsive behavior. ADHD in adults can lead to unstable relationships, poor performance at work or school, low self-esteem, and other problems.";
                document.querySelector("#tex4").innerHTML = "What are the signs or symptoms of ADHD?";
                document.querySelector("#tex5").innerHTML = "Some people with ADHD have fewer symptoms as they get older, but some adults continue to have significant symptoms that interfere with daily life. For adults, some of the main features of ADHD may be difficulty paying attention, impulsiveness, and restlessness. Symptoms can range from mild to severe.";
                document.querySelector("#tex6").innerHTML = "Many adults with ADHD don't know they have it; they just know that everyday tasks can be difficult for them. Adults with ADHD may have difficulty concentrating and setting priorities, which often results in them missing deadlines and forgetting meetings or social events. Inability to control impulses can range from being impatient when waiting in line or driving in heavy traffic, to having mood swings and angry outbursts. Some of the symptoms of ADHD in adults are as follows:";
                document.querySelector("#tex7").innerHTML = "Impulsiveness";
                document.querySelector("#tex8").innerHTML = "Disorganization and trouble setting priorities";
                document.querySelector("#tex9").innerHTML = "Poor time management skills";
                document.querySelector("#tex10").innerHTML = "Trouble concentrating on a task!";
                document.querySelector("#tex11").innerHTML = "Trouble multitasking!";
                document.querySelector("#tex12").innerHTML = "Excessive activity or restlessness";
                document.querySelector("#tex13").innerHTML = "Poor planning";
                document.querySelector("#tex14").innerHTML = "Low tolerance to frustration";
                document.querySelector("#tex15").innerHTML = "Frequent mood swings";
                document.querySelector("#tex16").innerHTML = "Types of THD";
                document.querySelector("#tex17").innerHTML = "ADHD, predominantly hyperactive/impulsive presentation.Children with this type of ADHD have symptoms of hyperactivity and feel the need to constantly move. They also have difficulty controlling their impulses. They usually don't have attention problems. This presentation is seen more often in young children.";
                document.querySelector("#tex18").innerHTML = "ADHD, predominantly inattentive presentation.Children with this type of ADHD have trouble paying attention. They are easily distracted but are not impulsive or hyperactive. It is sometimes unofficially referred to as attention deficit disorder or ADD.";
                document.querySelector("#tex19").innerHTML = "ADHD, combined presentation.Children with this type of ADHD show significant problems with both hyperactivity/impulsivity and inattention. However, these hyperactive/impulsive problems may gradually lessen as adolescence approaches.";
                document.querySelector("#tex20").innerHTML = "Causes of ADHD";
                document.querySelector("#tex21").innerHTML = "Although the exact cause of ADHD is not clear, research continues. Factors that may be involved in the development of ADHD include genetics, the environment, or problems with the central nervous system at key times in development.";
                document.querySelector("#tex22").innerHTML = "Tips to treat ADHD";
                document.querySelector("#tex23").innerHTML = "Motivate yourself to get up in the morning. Some days you have a hard time getting up. At that time of the morning you are usually hungry. Think about a good breakfast and how you are going to prepare it. That will get you out of bed sooner.";

                document.querySelector("#tex24").innerHTML = "Do sports. Physical exercise greatly improves sustained attention. Even if you miss some study time, spending 1 hour 3 times a week exercising will improve your executive functions.";
                document.querySelector("#tex25").innerHTML = "Prepare outlines every day. Every day, when you sit down to study in the afternoon (even if you don't have an exam), make outlines of what you have learned at school. Highlight the different sections with colors according to their importance. When you have to prepare for the exam, study on the scheme. It will be much easier for you to memorize it.";
                document.querySelector("#tex26").innerHTML = "Study out loud. When information reaches the brain through the ear, it is more easily fixed in memory than when you only read it.";
                document.querySelector("#tex27").innerHTML = "Use checklists. Like pilots do every time they take off or land, with routine tasks, and they do them several times every day! Don't trust your memory. Make a list of tasks to leave home in the morning (material that you must put in your bag, lunch, clean up the room, brush your teeth, take the dirty clothes to their place -if you have changed-, get the keys), and one for before bed. Put them in visible places and check them every day, as if it were the first time.";
                document.querySelector("#cite").innerHTML = "Video thanks to: Psycho2go"
                document.querySelector("#aside_tit").innerHTML = "Lack of attention"
                document.querySelector("#tex28").innerHTML = "What is ADHD?";
                document.querySelector("#tex29").innerHTML = "What is ADHD?";
                document.querySelector("#tex30").innerHTML = "Types of THD";
                document.querySelector("#tex31").innerHTML = "Causes of ADHD";
                document.querySelector("#tex32").innerHTML = "Tips to treat ADHD";
              /*Parte de document querySelector en ingles*/
                   // footer
                document.querySelector("#fo1").innerHTML = "Home" 
                document.querySelector("#fo2").innerHTML = "About us"
                document.querySelector("#fo3").innerHTML = "Psycologists"
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
                   /*Parte de document querySelector en Español*/
                   document.querySelector("#tex1").innerHTML = "Falta de atención";
                   document.querySelector("#tex2").innerHTML = "¿Qué es el TDH?";
                   document.querySelector("#tex3").innerHTML = "El trastorno por déficit de atención e hiperactividad (TDAH) es un trastorno mental que comprende una combinación de problemas persistentes, como dificultad para prestar atención, hiperactividad y conducta impulsiva. El TDAH en los adultos puede llevar a relaciones inestables, mal desempeño en el trabajo o en la escuela, baja autoestima y otros problemas.";
                   document.querySelector("#tex4").innerHTML = "¿Cuáles son los signos o síntomas  del TDH?";
                   document.querySelector("#tex5").innerHTML = "Algunas personas con TDAH tienen menos síntomas a medida que envejecen, pero algunos adultos siguen teniendo síntomas importantes que interfieren en su vida diaria. En el caso de los adultos, algunas de las características principales del TDAH pueden ser dificultad para prestar atención, impulsividad e inquietud. Los síntomas pueden oscilar entre leves y graves.";
                   document.querySelector("#tex6").innerHTML = "Muchos adultos con TDAH no saben que lo tienen; solo saben que las tareas cotidianas pueden resultarles difíciles. Los adultos con TDAH pueden tener dificultades para concentrarse y establecer prioridades, lo que suele ocasionar que no cumplan con fechas límite y se olviden de reuniones o eventos sociales. La incapacidad para controlar los impulsos puede oscilar entre tener impaciencia al esperar en una fila o al conducir con mucho tránsito, y tener cambios de humor y arrebatos de ira. Algunos de los síntomas del TDAH en adultos son los siguientes:";
                   document.querySelector("#tex7").innerHTML = "Impulsividad";
                   document.querySelector("#tex8").innerHTML = "Desorganización y problemas para establecer prioridades";
                   document.querySelector("#tex9").innerHTML = "Escasas habilidades para administrar el tiempo";
                   document.querySelector("#tex10").innerHTML = "Problemas para concentrarse en una tarea";
                   document.querySelector("#tex11").innerHTML = "Problemas para realizar múltiples tareas a la vez";
                   document.querySelector("#tex12").innerHTML = "Actividad excesiva o inquietud";
                   document.querySelector("#tex13").innerHTML = "Escasa planificación";
                   document.querySelector("#tex14").innerHTML = "Baja tolerancia a la frustración";
                   document.querySelector("#tex15").innerHTML = "Cambios de humor frecuentes";
                   document.querySelector("#tex16").innerHTML = "Tipos de TDH";
                   document.querySelector("#tex17").innerHTML = "TDAH, presentación predominante hiperactiva/impulsiva.Los niños que tienen este tipo de TDAH presentan síntomas de hiperactividad y sienten la necesidad de moverse constantemente. También tienen dificultad para controlar sus impulsos. Por lo general no tienen problemas de atención. Esta presentación se ve más a menudo en niños pequeños.";
                   document.querySelector("#tex18").innerHTML = "TDAH, presentación predominante con falta de atención.Los niños que tienen este tipo de TDAH tienen dificultad para prestar atención. Se distraen con facilidad pero noson impulsivos ohiperactivos. A veces se denomina de manera no oficial como trastorno por déficit de atención o TDA.";
                   document.querySelector("#tex19").innerHTML = "TDAH, presentación combinada.Los niños que tienen este tipo de TDAH muestran problemas significativos, tanto de hiperactividad/impulsividad como de falta de atención. Sin embargo, puede que esos problemas de hiperactividad/impulsividad disminuyan gradualmente al aproximarse la adolescencia.";
                   document.querySelector("#tex20").innerHTML = "Causas del TDH";
                   document.querySelector("#tex21").innerHTML = "Aunque la causa exacta del TDAH no está clara, las investigaciones continúan. Los factores que pueden estar involucrados en el desarrollo del TDAH incluyen la genética, el medio ambiente o problemas con el sistema nervioso central en momentos clave del desarrollo.";
                   document.querySelector("#tex22").innerHTML = "Tips para tratar el TDH";
                   document.querySelector("#tex23").innerHTML = "Motívate para levantarte por la mañana. Algunos días te cuesta mucho levantarte. A esa hora de la mañana sueles tener hambre. Piensa en un buen desayuno y en cómo lo vas a preparar. Eso te sacará de la cama antes.";
   
   
   
                   document.querySelector("#tex24").innerHTML = "Haz deporte. El ejercicio físico mejora mucho la atención sostenida. Aunque pierdas algo de tiempo de estudio, dedicar 1 hora 3 veces por semana a hacer ejercicio mejorará tus funciones ejecutivas.";
                   document.querySelector("#tex25").innerHTML = "Prepara esquemas todos los días. Cada día, cuando te sientes a estudiar por la tarde (aunque no tengas examen) haz esquemas de lo que has aprendido en el colegio. Resalta con colores los diferentes apartados según su importancia. Cuando tengas que prepararte el examen estudia sobre el esquema. Te será mucho más fácil memorizarlo.";
                   document.querySelector("#tex26").innerHTML = "Estudia en voz alta. Cuando la información llega al cerebro por el oído se fija en la memoria más fácilmente que cuando sólo la lees.";
                   document.querySelector("#tex27").innerHTML = "Utiliza check-lists. Como hacen los pilotos cada vez que despegan o aterrizan, con las tareas rutinarias ¡y eso que las hacen varias veces todos los días! No te fíes de tu memoria. Haz una lista de tareas para salir de casa por la mañana (material que debes meter en la cartera, almuerzo, recoger la habitación, cepillar los dientes, llevar la ropa sucia a su sitio -si te has cambiado-, coger las llaves), y otra para antes de acostarte. Ponlas en sitios visibles y compruébalas cada día, como si fuera la primera vez.";
                   document.querySelector("#cite").innerHTML = "Video gracias a: Psycho2go"
                   document.querySelector("#aside_tit").innerHTML = "Falta de atención"
                   document.querySelector("#tex28").innerHTML = "¿Qué es el TDH?";
                   document.querySelector("#tex29").innerHTML = "Síntomas  del TDH";
                   document.querySelector("#tex30").innerHTML = "Tipos de TDH";
                   document.querySelector("#tex31").innerHTML = "Causas del TDH";
                   document.querySelector("#tex32").innerHTML = "Tips para tratar el TDH";
                
               // footer
                document.querySelector("#fo1").innerHTML = "Home"
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
                   // menu
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
                   /*Parte de document querySelector en ingles*/
                   document.querySelector("#tex1").innerHTML = "Lack of attention";
                   document.querySelector("#tex2").innerHTML = "What is ADHD?";
                   document.querySelector("#tex3").innerHTML = "Attention deficit hyperactivity disorder (ADHD) is a mental disorder that comprises a combination of persistent problems, such as difficulty paying attention, hyperactivity, and impulsive behavior. ADHD in adults can lead to unstable relationships, poor performance at work or school, low self-esteem, and other problems.";
                   document.querySelector("#tex4").innerHTML = "What are the signs or symptoms of ADHD?";
                   document.querySelector("#tex5").innerHTML = "Some people with ADHD have fewer symptoms as they get older, but some adults continue to have significant symptoms that interfere with daily life. For adults, some of the main features of ADHD may be difficulty paying attention, impulsiveness, and restlessness. Symptoms can range from mild to severe.";
                   document.querySelector("#tex6").innerHTML = "Many adults with ADHD don't know they have it; they just know that everyday tasks can be difficult for them. Adults with ADHD may have difficulty concentrating and setting priorities, which often results in them missing deadlines and forgetting meetings or social events. Inability to control impulses can range from being impatient when waiting in line or driving in heavy traffic, to having mood swings and angry outbursts. Some of the symptoms of ADHD in adults are as follows:";
                   document.querySelector("#tex7").innerHTML = "Impulsiveness";
                   document.querySelector("#tex8").innerHTML = "Disorganization and trouble setting priorities";
                   document.querySelector("#tex9").innerHTML = "Poor time management skills";
                   document.querySelector("#tex10").innerHTML = "Trouble concentrating on a task!";
                   document.querySelector("#tex11").innerHTML = "Trouble multitasking!";
                   document.querySelector("#tex12").innerHTML = "Excessive activity or restlessness";
                   document.querySelector("#tex13").innerHTML = "Poor planning";
                   document.querySelector("#tex14").innerHTML = "Low tolerance to frustration";
                   document.querySelector("#tex15").innerHTML = "Frequent mood swings";
                   document.querySelector("#tex16").innerHTML = "Types of THD";
                   document.querySelector("#tex17").innerHTML = "ADHD, predominantly hyperactive/impulsive presentation.Children with this type of ADHD have symptoms of hyperactivity and feel the need to constantly move. They also have difficulty controlling their impulses. They usually don't have attention problems. This presentation is seen more often in young children.";
                   document.querySelector("#tex18").innerHTML = "ADHD, predominantly inattentive presentation.Children with this type of ADHD have trouble paying attention. They are easily distracted but are not impulsive or hyperactive. It is sometimes unofficially referred to as attention deficit disorder or ADD.";
                   document.querySelector("#tex19").innerHTML = "ADHD, combined presentation.Children with this type of ADHD show significant problems with both hyperactivity/impulsivity and inattention. However, these hyperactive/impulsive problems may gradually lessen as adolescence approaches.";
                   document.querySelector("#tex20").innerHTML = "Causes of ADHD";
                   document.querySelector("#tex21").innerHTML = "Although the exact cause of ADHD is not clear, research continues. Factors that may be involved in the development of ADHD include genetics, the environment, or problems with the central nervous system at key times in development.";
                   document.querySelector("#tex22").innerHTML = "Tips to treat ADHD";
                   document.querySelector("#tex23").innerHTML = "Motivate yourself to get up in the morning. Some days you have a hard time getting up. At that time of the morning you are usually hungry. Think about a good breakfast and how you are going to prepare it. That will get you out of bed sooner.";
   
   
   
                   document.querySelector("#tex24").innerHTML = "Do sports. Physical exercise greatly improves sustained attention. Even if you miss some study time, spending 1 hour 3 times a week exercising will improve your executive functions.";
                   document.querySelector("#tex25").innerHTML = "Prepare outlines every day. Every day, when you sit down to study in the afternoon (even if you don't have an exam), make outlines of what you have learned at school. Highlight the different sections with colors according to their importance. When you have to prepare for the exam, study on the scheme. It will be much easier for you to memorize it.";
                   document.querySelector("#tex26").innerHTML = "Study out loud. When information reaches the brain through the ear, it is more easily fixed in memory than when you only read it.";
                   document.querySelector("#tex27").innerHTML = "Use checklists. Like pilots do every time they take off or land, with routine tasks, and they do them several times every day! Don't trust your memory. Make a list of tasks to leave home in the morning (material that you must put in your bag, lunch, clean up the room, brush your teeth, take the dirty clothes to their place -if you have changed-, get the keys), and one for before bed. Put them in visible places and check them every day, as if it were the first time.";
                   document.querySelector("#cite").innerHTML = "Video thanks to: Psycho2go"
                   document.querySelector("#aside_tit").innerHTML = "Lack of attention"
                   document.querySelector("#tex28").innerHTML = "What is ADHD?";
                   document.querySelector("#tex29").innerHTML = "What is ADHD?";
                   document.querySelector("#tex30").innerHTML = "Types of THD";
                   document.querySelector("#tex31").innerHTML = "Causes of ADHD";
                   document.querySelector("#tex32").innerHTML = "Tips to treat ADHD";
                  
                   /*Parte de document querySelector en ingles*/
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
                   /*Parte de document querySelector en Español*/
                   document.querySelector("#tex1").innerHTML = "Falta de atención";
                   document.querySelector("#tex2").innerHTML = "¿Qué es el TDH?";
                   document.querySelector("#tex3").innerHTML = "El trastorno por déficit de atención e hiperactividad (TDAH) es un trastorno mental que comprende una combinación de problemas persistentes, como dificultad para prestar atención, hiperactividad y conducta impulsiva. El TDAH en los adultos puede llevar a relaciones inestables, mal desempeño en el trabajo o en la escuela, baja autoestima y otros problemas.";
                   document.querySelector("#tex4").innerHTML = "¿Cuáles son los signos o síntomas  del TDH?";
                   document.querySelector("#tex5").innerHTML = "Algunas personas con TDAH tienen menos síntomas a medida que envejecen, pero algunos adultos siguen teniendo síntomas importantes que interfieren en su vida diaria. En el caso de los adultos, algunas de las características principales del TDAH pueden ser dificultad para prestar atención, impulsividad e inquietud. Los síntomas pueden oscilar entre leves y graves.";
                   document.querySelector("#tex6").innerHTML = "Muchos adultos con TDAH no saben que lo tienen; solo saben que las tareas cotidianas pueden resultarles difíciles. Los adultos con TDAH pueden tener dificultades para concentrarse y establecer prioridades, lo que suele ocasionar que no cumplan con fechas límite y se olviden de reuniones o eventos sociales. La incapacidad para controlar los impulsos puede oscilar entre tener impaciencia al esperar en una fila o al conducir con mucho tránsito, y tener cambios de humor y arrebatos de ira. Algunos de los síntomas del TDAH en adultos son los siguientes:";
                   document.querySelector("#tex7").innerHTML = "Impulsividad";
                   document.querySelector("#tex8").innerHTML = "Desorganización y problemas para establecer prioridades";
                   document.querySelector("#tex9").innerHTML = "Escasas habilidades para administrar el tiempo";
                   document.querySelector("#tex10").innerHTML = "Problemas para concentrarse en una tarea";
                   document.querySelector("#tex11").innerHTML = "Problemas para realizar múltiples tareas a la vez";
                   document.querySelector("#tex12").innerHTML = "Actividad excesiva o inquietud";
                   document.querySelector("#tex13").innerHTML = "Escasa planificación";
                   document.querySelector("#tex14").innerHTML = "Baja tolerancia a la frustración";
                   document.querySelector("#tex15").innerHTML = "Cambios de humor frecuentes";
                   document.querySelector("#tex16").innerHTML = "Tipos de TDH";
                   document.querySelector("#tex17").innerHTML = "TDAH, presentación predominante hiperactiva/impulsiva.Los niños que tienen este tipo de TDAH presentan síntomas de hiperactividad y sienten la necesidad de moverse constantemente. También tienen dificultad para controlar sus impulsos. Por lo general no tienen problemas de atención. Esta presentación se ve más a menudo en niños pequeños.";
                   document.querySelector("#tex18").innerHTML = "TDAH, presentación predominante con falta de atención.Los niños que tienen este tipo de TDAH tienen dificultad para prestar atención. Se distraen con facilidad pero noson impulsivos ohiperactivos. A veces se denomina de manera no oficial como trastorno por déficit de atención o TDA.";
                   document.querySelector("#tex19").innerHTML = "TDAH, presentación combinada.Los niños que tienen este tipo de TDAH muestran problemas significativos, tanto de hiperactividad/impulsividad como de falta de atención. Sin embargo, puede que esos problemas de hiperactividad/impulsividad disminuyan gradualmente al aproximarse la adolescencia.";
                   document.querySelector("#tex20").innerHTML = "Causas del TDH";
                   document.querySelector("#tex21").innerHTML = "Aunque la causa exacta del TDAH no está clara, las investigaciones continúan. Los factores que pueden estar involucrados en el desarrollo del TDAH incluyen la genética, el medio ambiente o problemas con el sistema nervioso central en momentos clave del desarrollo.";
                   document.querySelector("#tex22").innerHTML = "Tips para tratar el TDH";
                   document.querySelector("#tex23").innerHTML = "Motívate para levantarte por la mañana. Algunos días te cuesta mucho levantarte. A esa hora de la mañana sueles tener hambre. Piensa en un buen desayuno y en cómo lo vas a preparar. Eso te sacará de la cama antes.";
   
                   document.querySelector("#tex24").innerHTML = "Haz deporte. El ejercicio físico mejora mucho la atención sostenida. Aunque pierdas algo de tiempo de estudio, dedicar 1 hora 3 veces por semana a hacer ejercicio mejorará tus funciones ejecutivas.";
                   document.querySelector("#tex25").innerHTML = "Prepara esquemas todos los días. Cada día, cuando te sientes a estudiar por la tarde (aunque no tengas examen) haz esquemas de lo que has aprendido en el colegio. Resalta con colores los diferentes apartados según su importancia. Cuando tengas que prepararte el examen estudia sobre el esquema. Te será mucho más fácil memorizarlo.";
                   document.querySelector("#tex26").innerHTML = "Estudia en voz alta. Cuando la información llega al cerebro por el oído se fija en la memoria más fácilmente que cuando sólo la lees.";
                   document.querySelector("#tex27").innerHTML = "Utiliza check-lists. Como hacen los pilotos cada vez que despegan o aterrizan, con las tareas rutinarias ¡y eso que las hacen varias veces todos los días! No te fíes de tu memoria. Haz una lista de tareas para salir de casa por la mañana (material que debes meter en la cartera, almuerzo, recoger la habitación, cepillar los dientes, llevar la ropa sucia a su sitio -si te has cambiado-, coger las llaves), y otra para antes de acostarte. Ponlas en sitios visibles y compruébalas cada día, como si fuera la primera vez.";
                   document.querySelector("#cite").innerHTML = "Video gracias a: Psycho2go"
                   document.querySelector("#aside_tit").innerHTML = "Falta de atención"
                   document.querySelector("#tex28").innerHTML = "¿Qué es el TDH?";
                   document.querySelector("#tex29").innerHTML = "Sintomas del TDH";
                   document.querySelector("#tex30").innerHTML = "Tipos de TDH";
                   document.querySelector("#tex31").innerHTML = "Causas del TDH";
                   document.querySelector("#tex32").innerHTML = "Tips para tratar el TDH";
                // footer
                document.querySelector("#fo1").innerHTML = "Home"
                document.querySelector("#fo2").innerHTML = "Sobre nosotros"
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