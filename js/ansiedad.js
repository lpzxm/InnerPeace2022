let idioma = document.querySelector("#translate");
const img = document.createElement('img');
const image = document.createElement('img')
img.src = '../img/spain.png'
image.src = '../img/united-kingdom.png'
    traducir(localStorage);
    function traducir(idiomaStorage, input) {
        if(idiomaStorage){
            if (idiomaStorage.idioma == "en") {
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
                // /*Parte de document querySelector en ingles*/
                document.querySelector("#first-quote").innerHTML ="The anxiety";
                document.querySelector("#second-quote").innerHTML ="What is anxiety?";
                document.querySelector("#tree-quote").innerHTML ="Anxiety is a feeling of fear, dread and restlessness. It can make you sweat, feel restless and tense, and have a palpitation. It can be a normal reaction to stress. For example, you may feel anxious when faced with a difficult problem at work, before taking a test, or before making an important decision. While anxiety can help you cope, as well as give you a boost of energy or help you focus, for people with anxiety disorders the fear is not temporary and can be overwhelming.";

                document.querySelector("#problema1").innerHTML ="What are the signs or symptoms of anxiety?";

                document.querySelector("#problema2").innerHTML ="The most common signs and symptoms of anxiety include the following:";

                document.querySelector("#li1").innerHTML ="Feeling nervous, agitated, or tense";
                document.querySelector("#li2").innerHTML ="Sense of impending danger, panic, or catastrophe";
                document.querySelector("#li3").innerHTML ="Increased heart rate";
                document.querySelector("#li4").innerHTML ="Fast breathing (hyperventilation)";
                document.querySelector("#li5").innerHTML ="Sweating";
                document.querySelector("#li6").innerHTML ="Tremors";
                document.querySelector("#li7").innerHTML ="Feeling weak or tired";
                document.querySelector("#li8").innerHTML ="Current concern";
                document.querySelector("#li9").innerHTML ="Having trouble falling asleep";
                document.querySelector("#li10").innerHTML ="Having gastrointestinal (GI) problems";
                document.querySelector("#li11").innerHTML ="Having difficulty controlling worry";
                document.querySelector("#li12").innerHTML ="Having the need to avoid situations that generate anxiety.";

                document.querySelector("#problema3").innerHTML ="Types of anxiety disorders";

                document.querySelector("#li13").innerHTML ="Agoraphobia is a type of anxiety disorder in which you fear places and situations that may cause you to panic or make you feel trapped, helpless, or ashamed, and you often try to avoid them.";
                document.querySelector("#li14").innerHTML ="Anxiety disorder due to illness includes symptoms of intense anxiety or panic that are directly caused by a physical health problem";
                document.querySelector("#li15").innerHTML ="Generalized anxiety disorder is characterized by persistent and excessive anxiety and worry about activities or events, including ordinary routine matters. The worry is out of proportion to the current situation, it is difficult to control and it affects the way you feel physically. It often occurs along with other anxiety disorders or depression.";
                document.querySelector("#li16").innerHTML ="Panic disorder involves repeated episodes of sudden feelings of anxiety and intense fear or terror that peak within minutes (panic attacks). You may have feelings of impending doom, shortness of breath, chest pain, or a fast, pounding, or fluttering heartbeat (heart palpitations). These panic attacks can cause the person to worry that they will happen again or to avoid situations in which they have happened.";
                document.querySelector("#li17").innerHTML ="Selective mutism is a consistent inability for children to speak in certain situations, such as at school, even when they can speak in other situations, such as at home with close family members. This can affect performance at school, work, or in society.";
                document.querySelector("#li18").innerHTML ="Separation anxiety disorder is a childhood disorder characterized by anxiety that is excessive for the child's developmental level and is related to separation from parents or others who perform a parental role.";
                document.querySelector("#li19").innerHTML ="Social anxiety disorder (social phobia) involves high levels of anxiety, fear, or rejection of social situations due to feelings of shame, insecurity, and worry about being judged or perceived negatively by others";
                document.querySelector("#li20").innerHTML ="Specific phobias are characterized by marked anxiety when exposed to a specific object or situation, and a desire to avoid it. In some people, phobias trigger panic attacks.";
                document.querySelector("#problema4").innerHTML ="Causes of anxiety";
                document.querySelector("#problema5").innerHTML ="For some people, anxiety may be related to a hidden health problem. In some cases, the signs and symptoms of anxiety are the first indicators of an illness. If your doctor suspects that your anxiety may have a medical cause, he or she may order tests to look for signs of the problem. Some examples of medical problems that may be related to anxiety include:";
                document.querySelector("#li21").innerHTML ="Heart disease";
                document.querySelector("#li22").innerHTML ="Diabetes";
                document.querySelector("#li23").innerHTML ="Thyroid problems, such as hyperthyroidism";
                document.querySelector("#li24").innerHTML ="Breathing disorders, such as chronic obstructive pulmonary disease (COPD) or asthma";
                document.querySelector("#li25").innerHTML ="Substance misuse or withdrawal";
                document.querySelector("#li26").innerHTML ="Withdrawal from alcohol, anti-anxiety medications (benzodiazepines), or other medications";
                document.querySelector("#li27").innerHTML ="Chronic pain or irritable bowel syndrome";
                document.querySelector("#li28").innerHTML ="Rare tumors that produce “fight or flight” hormones";
                document.querySelector("#problema6").innerHTML ="Sometimes anxiety can be a side effect of some medications. It is possible that the anxiety that afflicts you is caused by an underlying illness in the following cases:";
                document.querySelector("#li29").innerHTML ="If you don't have blood relatives (such as parents or siblings) who have anxiety disorders";
                document.querySelector("#li30").innerHTML ="If you didn't have an anxiety disorder in childhood";
                document.querySelector("#li31").innerHTML ="If you don't avoid certain things or situations because of anxiety";
                document.querySelector("#li32").innerHTML ="If the anxiety comes on suddenly without being related to life events or if you have no history of anxiety";
                document.querySelector("#problema7").innerHTML ="Tips to relieve anxiety";
                document.querySelector("#li33").innerHTML ="Get enough sleep.";
                document.querySelector("#li34").innerHTML ="Eat healthy food";
                document.querySelector("#li35").innerHTML ="Keep a regular daily schedule";
                document.querySelector("#li36").innerHTML ="Get out of the house every day.";
                document.querySelector("#li37").innerHTML ="You must do exercise all the days.";
                document.querySelector("#li38").innerHTML ="Stay away from alcohol and illicit drugs.";
                document.querySelector("#li39").innerHTML ="Talk to family or friends when you feel nervous or scared";
                //libreria de problemas
                document.querySelector("#footer00").innerHTML ="The anxiety";
                document.querySelector("#footer1").innerHTML ="What is anxiety?";
                document.querySelector("#footer2").innerHTML ="symptoms of anxiety";
                document.querySelector("#footer3").innerHTML ="types of anxiety";
                document.querySelector("#footer4").innerHTML ="Causes of anxiety";
                document.querySelector("#footer5").innerHTML ="tips for anxiety";
                /*Parte de document querySelector en ingles*/
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
                  /*Parte de document querySelector en Español*/
                  document.querySelector("#first-quote").innerHTML ="La ansiedad";
                  document.querySelector("#second-quote").innerHTML ="¿Qué es la ansiedad?";
                 document.querySelector("#tree-quote").innerHTML ="La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen o antes de tomar una decisión importante. Si bien la ansiedad puede ayudar a enfrentar una situación, además de darle un impulso de energía o ayudarle a concentrarse, para las personas con trastornos de ansiedad el miedo no es temporal y puede ser abrumadora.";
                 document.querySelector("#problema1").innerHTML ="¿Cuales son los signos o sintomas de la ansiedad?";
                 document.querySelector("#problema2").innerHTML ="Los signos y síntomas de la ansiedad más comunes incluyen los siguientes:";
                 document.querySelector("#li1").innerHTML ="Sensación de nerviosismo, agitación o tensión";
                 document.querySelector("#li2").innerHTML ="Sensación de peligro inminente, pánico o catástrofe";
                 document.querySelector("#li3").innerHTML ="Aumento del ritmo cardíaco";
                 document.querySelector("#li4").innerHTML ="Respiración acelerada (hiperventilación)";
                 document.querySelector("#li5").innerHTML ="Sudoración";
                 document.querySelector("#li6").innerHTML ="Temblores";
                 document.querySelector("#li7").innerHTML ="Sensación de debilidad o cansancio";
                 document.querySelector("#li8").innerHTML ="Preocupación actual";
                 document.querySelector("#li9").innerHTML ="Tener problemas para conciliar el sueño";
                 document.querySelector("#li10").innerHTML ="Padecer problemas gastrointestinales (GI)";
                 document.querySelector("#li11").innerHTML ="Tener dificultades para controlar las preocupaciones";
                 document.querySelector("#li12").innerHTML ="Tener la necesidad de evitar las situaciones que generan ansiedad.";
                 document.querySelector("#problema3").innerHTML ="Tipos de trastornos de ansiedad";
                 document.querySelector("#li13").innerHTML ="La agorafobia es un tipo de trastorno de ansiedad en el que temes a lugares y situaciones que pueden causarte pánico o hacerte sentir atrapado, indefenso o avergonzado y a menudo intentas evitarlos.";
                 document.querySelector("#li14").innerHTML ="El trastorno de ansiedad debido a una enfermedad incluye síntomas de ansiedad o pánico intensos que son directamente causados por un problema de salud físico";
                 document.querySelector("#li15").innerHTML ="El trastorno de ansiedad generalizada se caracteriza por una ansiedad y una preocupación persistentes y excesivas por actividades o eventos, incluso asuntos comunes de rutina. La preocupación es desproporcionada con respecto a la situación actual, es difícil de controlar y afecta la forma en que te sientes físicamente. A menudo sucede junto con otros trastornos de ansiedad o con la depresión.";
                 document.querySelector("#li16").innerHTML ="El trastorno de pánico implica episodios repetidos de sensaciones repentinas de ansiedad y miedo o terror intensos que alcanzan un nivel máximo en minutos (ataques de pánico). Puedes tener sensaciones de una catástrofe inminente, dificultad para respirar, dolor en el pecho o latidos rápidos, fuertes o como aleteos (palpitaciones cardíacas). Estos ataques de pánico pueden provocar que a la persona le preocupe que sucedan de nuevo o que evite situaciones en las que han sucedido.";
                 document.querySelector("#li17").innerHTML ="El mutismo selectivo es una incapacidad constante que tienen los niños para hablar en ciertas situaciones, como en la escuela, incluso cuando pueden hablar en otras situaciones, como en el hogar con miembros cercanos de la familia. Esto puede afectar el desempeño en la escuela, el trabajo o en la sociedad.";
                 document.querySelector("#li18").innerHTML ="El trastorno de ansiedad por separación es un trastorno de la niñez que se caracteriza por una ansiedad que es excesiva para el nivel de desarrollo del niño y que se relaciona con la separación de los padres u otras personas que cumplen una función paternal";
                 document.querySelector("#li19").innerHTML ="El trastorno de ansiedad social (fobia social) implica altos niveles de ansiedad, miedo o rechazo a situaciones sociales debido a sentimientos de vergüenza, inseguridad y preocupación por ser juzgado o percibido de manera negativa por otras personas";
                 document.querySelector("#li20").innerHTML ="Las fobias específicas se caracterizan por una notable ansiedad cuando la persona se ve expuesta a un objeto o situación específicos, y un deseo por evitarlos. En algunas personas, las fobias provocan ataques de pánico.";
                 document.querySelector("#problema4").innerHTML ="Causas de la ansiedad";
                 document.querySelector("#problema5").innerHTML ="Para algunas personas, la ansiedad puede estar relacionada con un problema de salud oculto. En algunos casos, los signos y síntomas de ansiedad son los primeros indicadores de una enfermedad. Si el médico sospecha que la ansiedad que tienes puede tener una causa médica, quizás te indique análisis para buscar los signos del problema.Algunos ejemplos de problemas médicos que pueden estar relacionados con la ansiedad incluyen los siguientes:";
                 document.querySelector("#li21").innerHTML ="Enfermedad cardíaca";
                 document.querySelector("#li22").innerHTML ="Diabetes";
                 document.querySelector("#li23").innerHTML ="Problemas de tiroides, como el hipertiroidismo";
                 document.querySelector("#li24").innerHTML ="Trastornos respiratorios, como la enfermedad pulmonar obstructiva crónica (EPOC) o el asma";
                 document.querySelector("#li25").innerHTML ="Uso inadecuado de sustancias o abstinencia";
                 document.querySelector("#li26").innerHTML ="Abstinencia del alcohol, de medicamentos contra la ansiedad (benzodiazepinas) o de otros medicamentos";
                 document.querySelector("#li27").innerHTML ="Dolor crónico o síndrome de intestino irritable";
                 document.querySelector("#li28").innerHTML ="Tumores poco frecuentes que producen hormonas de reacción de “luchar o huir”";
                 document.querySelector("#problema6").innerHTML ="En ocasiones, la ansiedad puede ser un efecto secundario de algunos medicamentos.Es posible que la ansiedad que te aqueja esté causada por una enfermedad oculta en los siguientes casos:";
                 document.querySelector("#li29").innerHTML ="Si no tienes parientes consanguíneos (como padres o hermanos) que tengan trastornos de ansiedad";
                 document.querySelector("#li30").innerHTML ="Si no tuviste un trastorno de ansiedad en la infancia";
                 document.querySelector("#li31").innerHTML ="Si no evitas ciertas cosas o situaciones a causa de la ansiedad";
                 document.querySelector("#li32").innerHTML ="Si la ansiedad se presenta de forma repentina sin estar relacionada con los eventos de la vida o si no tienes antecedentes de ansiedad";
                 document.querySelector("#problema7").innerHTML ="Tips para aliviar la ansiedad";
                 document.querySelector("#li33").innerHTML ="Duerma lo suficiente.";
                 document.querySelector("#li34").innerHTML ="Coma alimentos saludables";
                 document.querySelector("#li35").innerHTML ="Mantenga un horario diario regular";
                 document.querySelector("#li36").innerHTML ="Salga de la casa todos los días.";
                 document.querySelector("#li37").innerHTML ="Haga ejercicio todos los días.";
                 document.querySelector("#li38").innerHTML ="Manténgase alejado del alcohol y las drogas ilícitas.";
                 document.querySelector("#li39").innerHTML ="Hable con familiares o amigos cuando se sienta nervioso o asustado";
                 
                  //libreria de problemas
                document.querySelector("#footer00").innerHTML ="La ansiedad";
                document.querySelector("#footer1").innerHTML ="¿Qué es la ansiedad?";
                document.querySelector("#footer2").innerHTML ="Sintomas de la ansiedad";
                document.querySelector("#footer3").innerHTML ="Tipos de ansiedad";
                document.querySelector("#footer4").innerHTML ="Causas de la ansiedad";
                document.querySelector("#footer5").innerHTML ="Tips para la ansiedad";
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
            else if (input){
                if (!input.checked){
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
                // /*Parte de document querySelector en ingles*/
                    document.querySelector("#first-quote").innerHTML ="The anxiety";
                    document.querySelector("#second-quote").innerHTML ="What is anxiety?";
                    document.querySelector("#tree-quote").innerHTML ="Anxiety is a feeling of fear, dread and restlessness. It can make you sweat, feel restless and tense, and have a palpitation. It can be a normal reaction to stress. For example, you may feel anxious when faced with a difficult problem at work, before taking a test, or before making an important decision. While anxiety can help you cope, as well as give you a boost of energy or help you focus, for people with anxiety disorders the fear is not temporary and can be overwhelming.";

                    document.querySelector("#problema1").innerHTML ="What are the signs or symptoms of anxiety?";

                    document.querySelector("#problema2").innerHTML ="The most common signs and symptoms of anxiety include the following:";

                    document.querySelector("#li1").innerHTML ="Feeling nervous, agitated, or tense";
                    document.querySelector("#li2").innerHTML ="Sense of impending danger, panic, or catastrophe";
                    document.querySelector("#li3").innerHTML ="increased heart rate";
                    document.querySelector("#li4").innerHTML ="Fast breathing (hyperventilation)";
                    document.querySelector("#li5").innerHTML ="sweating";
                    document.querySelector("#li6").innerHTML ="tremors";
                    document.querySelector("#li7").innerHTML ="Feeling weak or tired";
                    document.querySelector("#li8").innerHTML ="current concern";
                    document.querySelector("#li9").innerHTML ="Having trouble falling asleep";
                    document.querySelector("#li10").innerHTML ="Having gastrointestinal (GI) problems";
                    document.querySelector("#li11").innerHTML ="Having difficulty controlling worry";
                    document.querySelector("#li12").innerHTML ="Having the need to avoid situations that generate anxiety.";

                    document.querySelector("#problema3").innerHTML ="Types of anxiety disorders";

                    document.querySelector("#li13").innerHTML ="Agoraphobia is a type of anxiety disorder in which you fear places and situations that may cause you to panic or make you feel trapped, helpless, or ashamed, and you often try to avoid them.";
                    document.querySelector("#li14").innerHTML ="Anxiety disorder due to illness includes symptoms of intense anxiety or panic that are directly caused by a physical health problem";
                    document.querySelector("#li15").innerHTML ="Generalized anxiety disorder is characterized by persistent and excessive anxiety and worry about activities or events, including ordinary routine matters. The worry is out of proportion to the current situation, it is difficult to control and it affects the way you feel physically. It often occurs along with other anxiety disorders or depression.";
                    document.querySelector("#li16").innerHTML ="Panic disorder involves repeated episodes of sudden feelings of anxiety and intense fear or terror that peak within minutes (panic attacks). You may have feelings of impending doom, shortness of breath, chest pain, or a fast, pounding, or fluttering heartbeat (heart palpitations). These panic attacks can cause the person to worry that they will happen again or to avoid situations in which they have happened.";
                    document.querySelector("#li17").innerHTML ="Selective mutism is a consistent inability for children to speak in certain situations, such as at school, even when they can speak in other situations, such as at home with close family members. This can affect performance at school, work, or in society.";
                    document.querySelector("#li18").innerHTML ="Separation anxiety disorder is a childhood disorder characterized by anxiety that is excessive for the child's developmental level and is related to separation from parents or others who perform a parental role.";
                    document.querySelector("#li19").innerHTML ="Social anxiety disorder (social phobia) involves high levels of anxiety, fear, or rejection of social situations due to feelings of shame, insecurity, and worry about being judged or perceived negatively by others";
                    document.querySelector("#li20").innerHTML ="Specific phobias are characterized by marked anxiety when exposed to a specific object or situation, and a desire to avoid it. In some people, phobias trigger panic attacks.";
                    document.querySelector("#problema4").innerHTML ="Causes of anxiety";
                    document.querySelector("#problema5").innerHTML ="For some people, anxiety may be related to a hidden health problem. In some cases, the signs and symptoms of anxiety are the first indicators of an illness. If your doctor suspects that your anxiety may have a medical cause, he or she may order tests to look for signs of the problem. Some examples of medical problems that may be related to anxiety include:";
                    document.querySelector("#li21").innerHTML ="Heart disease";
                    document.querySelector("#li22").innerHTML ="Diabetes";
                    document.querySelector("#li23").innerHTML ="Thyroid problems, such as hyperthyroidism";
                    document.querySelector("#li24").innerHTML ="Breathing disorders, such as chronic obstructive pulmonary disease (COPD) or asthma";
                    document.querySelector("#li25").innerHTML ="Substance misuse or withdrawal";
                    document.querySelector("#li26").innerHTML ="Withdrawal from alcohol, anti-anxiety medications (benzodiazepines), or other medications";
                    document.querySelector("#li27").innerHTML ="Chronic pain or irritable bowel syndrome";
                    document.querySelector("#li28").innerHTML ="Rare tumors that produce “fight or flight” hormones";
                    document.querySelector("#problema6").innerHTML ="Sometimes anxiety can be a side effect of some medications. It is possible that the anxiety that afflicts you is caused by an underlying illness in the following cases:";
                    document.querySelector("#li29").innerHTML ="If you don't have blood relatives (such as parents or siblings) who have anxiety disorders";
                    document.querySelector("#li30").innerHTML ="If you didn't have an anxiety disorder in childhood";
                    document.querySelector("#li31").innerHTML ="If you don't avoid certain things or situations because of anxiety";
                    document.querySelector("#li32").innerHTML ="If the anxiety comes on suddenly without being related to life events or if you have no history of anxiety";
                    document.querySelector("#problema7").innerHTML ="Tips to relieve anxiety";
                    document.querySelector("#li33").innerHTML ="Get enough sleep.";
                    document.querySelector("#li34").innerHTML ="Coma alimentos saludables";
                    document.querySelector("#li35").innerHTML ="Keep a regular daily schedule";
                    document.querySelector("#li36").innerHTML ="Get out of the house every day.";
                    document.querySelector("#li37").innerHTML ="You must do exercise all the days.";
                    document.querySelector("#li38").innerHTML ="Stay away from alcohol and illicit drugs.";
                    document.querySelector("#li39").innerHTML ="Talk to family or friends when you feel nervous or scared";

                    //aside
                    document.querySelector("#footer00").innerHTML ="The anxiety";
                    document.querySelector("#footer1").innerHTML ="What is anxiety?";
                    document.querySelector("#footer2").innerHTML ="Symptoms of anxiety";
                    document.querySelector("#footer3").innerHTML ="Types of anxiety";
                    document.querySelector("#footer4").innerHTML ="Causes of anxiety";
                    document.querySelector("#footer5").innerHTML ="Tips for anxiety";
                   // footer
                   document.querySelector("#fo1").innerHTML = "Home";
                   document.querySelector("#fo2").innerHTML = "About us";
                   document.querySelector("#fo3").innerHTML = "Psychologists";
                   document.querySelector("#fo4").innerHTML = "Help centers";
                   document.querySelector(".social-text").innerHTML = "Our social networks!";
                   // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);

                }
                else{
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
                  /*Parte de document querySelector en Español*/
                    document.querySelector("#first-quote").innerHTML ="La ansiedad";
                    document.querySelector("#second-quote").innerHTML ="¿Qué es la ansiedad?";
                    document.querySelector("#tree-quote").innerHTML ="La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen o antes de tomar una decisión importante. Si bien la ansiedad puede ayudar a enfrentar una situación, además de darle un impulso de energía o ayudarle a concentrarse, para las personas con trastornos de ansiedad el miedo no es temporal y puede ser abrumadora.";
                    document.querySelector("#problema1").innerHTML ="¿Cuales son los signos o sintomas de la ansiedad?";
                    document.querySelector("#problema2").innerHTML ="Los signos y síntomas de la ansiedad más comunes incluyen los siguientes:";
                    document.querySelector("#li1").innerHTML ="Sensación de nerviosismo, agitación o tensión";
                    document.querySelector("#li2").innerHTML ="Sensación de peligro inminente, pánico o catástrofe";
                    document.querySelector("#li3").innerHTML ="Aumento del ritmo cardíaco";
                    document.querySelector("#li4").innerHTML ="Respiración acelerada (hiperventilación)";
                    document.querySelector("#li5").innerHTML ="Sudoración";
                    document.querySelector("#li6").innerHTML ="Temblores";
                    document.querySelector("#li7").innerHTML ="Sensación de debilidad o cansancio";
                    document.querySelector("#li8").innerHTML ="Preocupación actual";
                    document.querySelector("#li9").innerHTML ="Tener problemas para conciliar el sueño";
                    document.querySelector("#li10").innerHTML ="Padecer problemas gastrointestinales (GI)";
                    document.querySelector("#li11").innerHTML ="Tener dificultades para controlar las preocupaciones";
                    document.querySelector("#li12").innerHTML ="Tener la necesidad de evitar las situaciones que generan ansiedad.";
                    document.querySelector("#problema3").innerHTML ="Tipos de trastornos de ansiedad";
                    document.querySelector("#li13").innerHTML ="La agorafobia es un tipo de trastorno de ansiedad en el que temes a lugares y situaciones que pueden causarte pánico o hacerte sentir atrapado, indefenso o avergonzado y a menudo intentas evitarlos.";
                    document.querySelector("#li14").innerHTML ="El trastorno de ansiedad debido a una enfermedad incluye síntomas de ansiedad o pánico intensos que son directamente causados por un problema de salud físico";
                    document.querySelector("#li15").innerHTML ="El trastorno de ansiedad generalizada se caracteriza por una ansiedad y una preocupación persistentes y excesivas por actividades o eventos, incluso asuntos comunes de rutina. La preocupación es desproporcionada con respecto a la situación actual, es difícil de controlar y afecta la forma en que te sientes físicamente. A menudo sucede junto con otros trastornos de ansiedad o con la depresión.";
                    document.querySelector("#li16").innerHTML ="El trastorno de pánico implica episodios repetidos de sensaciones repentinas de ansiedad y miedo o terror intensos que alcanzan un nivel máximo en minutos (ataques de pánico). Puedes tener sensaciones de una catástrofe inminente, dificultad para respirar, dolor en el pecho o latidos rápidos, fuertes o como aleteos (palpitaciones cardíacas). Estos ataques de pánico pueden provocar que a la persona le preocupe que sucedan de nuevo o que evite situaciones en las que han sucedido.";
                    document.querySelector("#li17").innerHTML ="El mutismo selectivo es una incapacidad constante que tienen los niños para hablar en ciertas situaciones, como en la escuela, incluso cuando pueden hablar en otras situaciones, como en el hogar con miembros cercanos de la familia. Esto puede afectar el desempeño en la escuela, el trabajo o en la sociedad.";
                    document.querySelector("#li18").innerHTML ="El trastorno de ansiedad por separación es un trastorno de la niñez que se caracteriza por una ansiedad que es excesiva para el nivel de desarrollo del niño y que se relaciona con la separación de los padres u otras personas que cumplen una función paternal";
                    document.querySelector("#li19").innerHTML ="El trastorno de ansiedad social (fobia social) implica altos niveles de ansiedad, miedo o rechazo a situaciones sociales debido a sentimientos de vergüenza, inseguridad y preocupación por ser juzgado o percibido de manera negativa por otras personas";
                    document.querySelector("#li20").innerHTML ="Las fobias específicas se caracterizan por una notable ansiedad cuando la persona se ve expuesta a un objeto o situación específicos, y un deseo por evitarlos. En algunas personas, las fobias provocan ataques de pánico.";
                    document.querySelector("#problema4").innerHTML ="Causas de la ansiedad";
                    document.querySelector("#problema5").innerHTML ="Para algunas personas, la ansiedad puede estar relacionada con un problema de salud oculto. En algunos casos, los signos y síntomas de ansiedad son los primeros indicadores de una enfermedad. Si el médico sospecha que la ansiedad que tienes puede tener una causa médica, quizás te indique análisis para buscar los signos del problema.Algunos ejemplos de problemas médicos que pueden estar relacionados con la ansiedad incluyen los siguientes:";
                    document.querySelector("#li21").innerHTML ="Enfermedad cardíaca";
                    document.querySelector("#li22").innerHTML ="Diabetes";
                    document.querySelector("#li23").innerHTML ="Problemas de tiroides, como el hipertiroidismo";
                    document.querySelector("#li24").innerHTML ="Trastornos respiratorios, como la enfermedad pulmonar obstructiva crónica (EPOC) o el asma";
                    document.querySelector("#li25").innerHTML ="Uso inadecuado de sustancias o abstinencia";
                    document.querySelector("#li26").innerHTML ="Abstinencia del alcohol, de medicamentos contra la ansiedad (benzodiazepinas) o de otros medicamentos";
                    document.querySelector("#li27").innerHTML ="Dolor crónico o síndrome de intestino irritable";
                    document.querySelector("#li28").innerHTML ="Tumores poco frecuentes que producen hormonas de reacción de “luchar o huir”";
                    document.querySelector("#problema6").innerHTML ="En ocasiones, la ansiedad puede ser un efecto secundario de algunos medicamentos.Es posible que la ansiedad que te aqueja esté causada por una enfermedad oculta en los siguientes casos:";
                    document.querySelector("#li29").innerHTML ="Si no tienes parientes consanguíneos (como padres o hermanos) que tengan trastornos de ansiedad";
                    document.querySelector("#li30").innerHTML ="Si no tuviste un trastorno de ansiedad en la infancia";
                    document.querySelector("#li31").innerHTML ="Si no evitas ciertas cosas o situaciones a causa de la ansiedad";
                    document.querySelector("#li32").innerHTML ="Si la ansiedad se presenta de forma repentina sin estar relacionada con los eventos de la vida o si no tienes antecedentes de ansiedad";
                    document.querySelector("#problema7").innerHTML ="Tips para aliviar la ansiedad";
                    document.querySelector("#li33").innerHTML ="Duerma lo suficiente.";
                    document.querySelector("#li34").innerHTML ="Coma alimentos saludables";
                    document.querySelector("#li35").innerHTML ="Mantenga un horario diario regular";
                    document.querySelector("#li36").innerHTML ="Salga de la casa todos los días.";
                    document.querySelector("#li37").innerHTML ="Haga ejercicio todos los días.";
                    document.querySelector("#li38").innerHTML ="Manténgase alejado del alcohol y las drogas ilícitas.";
                    document.querySelector("#li39").innerHTML ="Hable con familiares o amigos cuando se sienta nervioso o asustado";
                    
                    //aside
                    document.querySelector("#footer00").innerHTML ="La ansiedad";
                    document.querySelector("#footer1").innerHTML ="¿Qué es la ansiedad?";
                    document.querySelector("#footer2").innerHTML ="Sintomas de la ansiedad";
                    document.querySelector("#footer3").innerHTML ="Tipos de ansiedad";
                    document.querySelector("#footer4").innerHTML ="Causas de la ansiedad";
                    document.querySelector("#footer5").innerHTML ="Tips para la ansiedad";
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
        }
    



    idioma.addEventListener("click", () => {
        let input = document.querySelector("#translate");
        traducir(null, input)
       
    })
























    
