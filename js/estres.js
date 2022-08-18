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
                document.querySelector(".tx1").innerHTML = "Stress";
                document.querySelector(".text1").innerHTML = "What is stress?";
                document.querySelector(".context").innerHTML = "Stress is the physical or mental response to an external cause, such as having many tasks or suffering from an illness. A stressor or stressor may be something that happens only once or in the short term, or it can happen repeatedly for a long time.";
                document.querySelector("#tx2").innerHTML = "What are the signs or symptoms of stress?";
                document.querySelector("#tx3").innerHTML = "Stress can cause many types of physical and emotional symptoms. Sometimes you may not realize that these symptoms are caused by stress. Here are some signs that stress may be affecting you:";
                document.querySelector("#tx4").innerHTML = "Diarrhea or constipation";
                document.querySelector("#tx5").innerHTML = "Bad memory";
                document.querySelector("#tx6").innerHTML = "Frequent pains and ailments";
                document.querySelector("#tx7").innerHTML = "Headaches";
                document.querySelector("#tx8").innerHTML = "Lack of energy or concentration";
                document.querySelector("#tx9").innerHTML = "Sexual problems";
                document.querySelector("#tx10").innerHTML = "Rigid neck or jaw";
                document.querySelector("#tx11").innerHTML = "Weariness";
                document.querySelector("#tx12").innerHTML = "Trouble sleeping or sleeping too much";
                document.querySelector("#tx13").innerHTML = "Stomach upset";
                document.querySelector("#tx14").innerHTML = "Weight loss or gain";
                document.querySelector("#tx15").innerHTML = "Types of stress";
                document.querySelector("#tx16").innerHTML = "Stress is a normal feeling. There are two main types of stress:";
                document.querySelector("#tx17").innerHTML = "Acute stress. This is short-term stress that goes away quickly. You can feel it when you press the brakes, fight with your partner, or ski on a slope. This helps you control dangerous situations. It also happens when you do something new or exciting. Everyone feels acute stress at one time or another.";
                document.querySelector("#tx18").innerHTML = "Chronic stress. This is stress that lasts for an extended period of time. You may have chronic stress if you have money problems, an unhappy marriage, or problems at work. Any type of stress that continues for weeks or months is chronic stress. You can get so used to chronic stress that you don't realize it's a problem. If you can't find ways to manage stress, it could cause health problems.";
                document.querySelector("#tx19").innerHTML = "What is academic stress and why is it generated";
                document.querySelector("#tx20").innerHTML = "Academic stress is the normal reaction we have to the various demands and demands we face at the University, such as tests, exams, papers, presentations, etc. This reaction activates us and mobilizes us to respond effectively and achieve our goals and objectives. However, sometimes, we can have too many demands at the same time, which can sharpen the response and decrease our performance.";
                document.querySelector("#tx21").innerHTML = "Academic stressors";
                document.querySelector("#tx22").innerHTML = "The demands that can give rise to stress are of two types:";
                document.querySelector("#tx23").innerHTML = "Internal Demands: that is, those that we realize ourselves when we are very self-demanding, we have high expectations of achievement, we need to maintain control and we strive in them, among others.";
                document.querySelector("#tx24").innerHTML = "External Demands: that is, those that our environment is presenting to us, among which it is worth having to deliver works and take tests and exams in a limited time; carry out group work; present in front of the course (dissertations); not understanding content addressed in the class; limited time for academic obligations, among others.";
                document.querySelector("#tx25").innerHTML = "Non-academic stressors";
                document.querySelector("#txz").innerHTML = "In addition to academics, we must consider a series of life situations that stress us out and that also affect our emotional and physical state. Below is an adaptation of the Holmes and Rahe scale, with the list of most common stressful situations:";
                document.querySelector("#tx26").innerHTML = "Personal injury or illness";
                document.querySelector("#tx27").innerHTML = "Changing a family member's health";
                document.querySelector("#tx28").innerHTML = "Addiction and/or alcoholism (own or close)";
                document.querySelector("#tx29").innerHTML = "Adding a new member to the family";
                document.querySelector("#tx30").innerHTML = "Death of a friend";
                document.querySelector("#tx31").innerHTML = "Beginning or end of academic stage";
                document.querySelector("#tx32").innerHTML = "Change in living conditions";
                document.querySelector("#tx33").innerHTML = "Change of residence";
                document.querySelector("#tx34").innerHTML = "Change of social activities";
                document.querySelector("#tx35").innerHTML = "Changing sleeping habits";


                document.querySelector("#tx36").innerHTML = "Change of eating habits";
                document.querySelector("#tx37").innerHTML = "How does stress manifest itself?";
                document.querySelector("#tx38").innerHTML = "Once you have identified the situations that generate stress, it is important to recognize how you react to them; what effects they generate in your body and in your emotions.";
                document.querySelector("#tx39").innerHTML = "Although initially stress is normal and profitable, since it helps us to activate ourselves to be able to respond to the demands and demands of the environment, over time our body and our mind are exhausted and begin to decrease in their performance.";
                document.querySelector("#tx40").innerHTML = "To prevent this drop in performance we must regulate the amount of time we keep operating under high levels of demand, a phase called resistance, which is followed by the exhaustion phase.";
                document.querySelector("#tx41").innerHTML = "If, despite exhaustion, we do not stop to rest and pause to recover energy, our body could enter a phase of chronification of the manifestations of the stress exhaustion phase.";
                document.querySelector("#tx42").innerHTML = "These manifestations can occur in various areas -physical, psychological and behavioral- and it is important to recognize them to identify them as they appear and thus be able to take preventive measures.";
                document.querySelector("#tx43").innerHTML = "Phases of stress";
                document.querySelector("#tx44").innerHTML = "Physical manifestations";
                document.querySelector("#tx45").innerHTML = "They correspond to the symptoms that are generated in our body against the usual stressors, some of them are:";
                document.querySelector("#tx46").innerHTML = "Drowsiness, increased need for sleep";
                document.querySelector("#tx47").innerHTML = "Tiredness and fatigue";
                document.querySelector("#tx48").innerHTML = "Headaches or migraines";
                document.querySelector("#tx49").innerHTML = "Stomach pain and/or irritable color";
                document.querySelector("#tx50").innerHTML = "Bruxism (jaw tension)";
                document.querySelector("#tx51").innerHTML = "Back pain";
                document.querySelector("#tx52").innerHTML = "Tachycardia or strong palpitations";
                document.querySelector("#tx53").innerHTML = "Increased or decreased appetite";
                document.querySelector("#tx54").innerHTML = "Frequent colds (low in the immune system)";
                document.querySelector("#tx55").innerHTML = "Sleep difficulties (insomnia or nightmares)";

                document.querySelector("#tx56").innerHTML = "Psychological and emotional manifestations";
                document.querySelector("#tx57").innerHTML = "These are the emotional and cognitive reactions we have in the face of stressful situations, among which are:";
                document.querySelector("#tx58").innerHTML = "Restlessness and hyperactivity";
                document.querySelector("#tx59").innerHTML = "Sadness and/or reluctance";
                document.querySelector("#tx60").innerHTML = "Constant anxiety";
                document.querySelector("#tx61").innerHTML = "Difficulty concentrating";
                document.querySelector("#tx62").innerHTML = "Difficulty thinking (going blank)";
                document.querySelector("#tx63").innerHTML = "Memory problems, frequent forgetfulness";
                document.querySelector("#tx64").innerHTML = "Frequent irritability";
                document.querySelector("#tx65").innerHTML = "Fear of not being able to meet obligations";
                document.querySelector("#tx66").innerHTML = "Low motivation for academic activities";
                document.querySelector("#tx67").innerHTML = "Frequent distress and/or urge to cry";
                document.querySelector("#tx68").innerHTML = "Prevention and coping with academic stress";
                document.querySelector("#tx69").innerHTML = "Once we identify the situations that generate stress and we know how we react to it, we need to distinguish what we are doing to prevent this from happening or mitigate the effects.";
                document.querySelector("#tx70").innerHTML = "Some of the strategies that help both to prevent the chronicity of stress and to face the manifestations in the phase of exhaustion are:";
                document.querySelector("#tx71").innerHTML = "Plan activities prioritizing each other";
                document.querySelector("#tx72").innerHTML = "Decide between various study techniquesv";
                document.querySelector("#tx73").innerHTML = "Eating healthy at stable times";
                document.querySelector("#tx74").innerHTML = "Practice sports or recreational activities";
                document.querySelector("#tx75").innerHTML = "Spend time on hobbies and hobbies";
                document.querySelector("#tx76").innerHTML = "Maintain stable sleep cycles";
                document.querySelector("#tx77").innerHTML = "Seek help and share with others";
                document.querySelector("#tx78").innerHTML = "Practice relaxation and deep breathing";
                document.querySelector("#tx79").innerHTML = "Maintain a sense of humor";
                document.querySelector("#tx80").innerHTML = "Tips to relieve stress";
                document.querySelector("#tx81").innerHTML = "Set priorities. Decide what things to do and what things you can expect and learn to say no to new tasks if you are overwhelmed.";
                document.querySelector("#tx82").innerHTML = "Stay in touch with people who can provide emotional and other support. Ask friends, family, and the community or religious organizations for help reducing stress due to work responsibilities or family matters, such as caring for a loved one";

                document.querySelector("#tx83").innerHTML = "Take time to do relaxing activities you enjoy like reading, yoga, or gardening.";
                document.querySelector("#tx84").innerHTML = "Avoid thinking obsessively about problems. Focus on what you've accomplished, not what you haven't been able to do.";
                document.querySelector("#tx85").innerHTML = "Exercise regularly. A moderate walk of just 30 minutes per day can help lift your spirits and reduce stress.";
                document.querySelector("#cite").innerHTML = "Video thanks to: Pablo Sanchez Urina on YouTube"
                document.querySelector("#tx86").innerHTML = "Stress";
                document.querySelector("#tx87").innerHTML = "What is stress?";
                document.querySelector("#tx88").innerHTML = "Symptoms of stress";
                document.querySelector("#tx89").innerHTML = "Types of stress";
                document.querySelector("#tx90").innerHTML = "Causes of stress";
                document.querySelector("#tx91").innerHTML = "Tips for stress";
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
                   document.querySelector(".tx1").innerHTML = "Estrés";
                   document.querySelector(".text1").innerHTML = "Que es Estrés?";
                   document.querySelector(".context").innerHTML = "El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad. Un factor estresante o estresante puede ser algo que ocurre una sola vez o en un corto plazo, o puede ocurrir repetidamente durante mucho tiempo.";
                   document.querySelector("#tx2").innerHTML = "¿Cuáles son los signos o síntomas del estrés?";
                   document.querySelector("#tx3").innerHTML = "El estrés puede causar muchos tipos de síntomas físicos y emocionales. A veces, es posible que no se dé cuenta de que estos síntomas son causados por el estrés. Estas son algunas señales de que el estrés puede estar afectándote:";
                   document.querySelector("#tx4").innerHTML = "Diarrea o estreñimiento";
                   document.querySelector("#tx5").innerHTML = "Mala memoria";
                   document.querySelector("#tx6").innerHTML = "Dolores y dolencias frecuentes";
                   document.querySelector("#tx7").innerHTML = "dolores de cabeza";
                   document.querySelector("#tx8").innerHTML = "Falta de energía o concentración.";
                   document.querySelector("#tx9").innerHTML = "Problemas sexuales";
                   document.querySelector("#tx10").innerHTML = "Cuello o mandíbula rígidos";
                   document.querySelector("#tx11").innerHTML = "Cansancio";
                   document.querySelector("#tx12").innerHTML = "Problemas para dormir o dormir demasiado";
                   document.querySelector("#tx13").innerHTML = "Malestar estomacal";
                   document.querySelector("#tx14").innerHTML = "Pérdida o aumento de peso";
                   document.querySelector("#tx15").innerHTML = "tipos de estrés";
                   document.querySelector("#tx16").innerHTML = "El estrés es un sentimiento normal. Hay dos tipos principales de estrés:";
                   document.querySelector("#tx17").innerHTML = "Estrés agudo. Este es un estrés a corto plazo que desaparece rápidamente. Puedes sentirlo cuando pisas los frenos, peleas con tu compañero o esquías en una pendiente. Esto le ayuda a controlar situaciones peligrosas. También sucede cuando haces algo nuevo o emocionante. Todo el mundo siente estrés agudo en un momento u otro.";
                   document.querySelector("#tx18").innerHTML = "Estrés crónico. Este es el estrés que dura un período prolongado de tiempo. Puede tener estrés crónico si tiene problemas de dinero, un matrimonio infeliz o problemas en el trabajo. Cualquier tipo de estrés que continúa durante semanas o meses es estrés crónico. Puede acostumbrarse tanto al estrés crónico que no se da cuenta de que es un problema. Si no puede encontrar formas de manejar el estrés, podría causar problemas de salud.";
                   document.querySelector("#tx19").innerHTML = "Qué es el estrés académico y por qué se genera";
                   document.querySelector("#tx20").innerHTML = "El estrés académico es la reacción normal que tenemos ante las diversas demandas y exigencias que enfrentamos en la Universidad, tales como pruebas, exámenes, trabajos, presentaciones, etc. Esta reacción nos activa y moviliza para responder de manera efectiva y lograr nuestras metas y objetivos. Sin embargo, en ocasiones, podemos tener demasiadas demandas al mismo tiempo, lo que puede agudizar la respuesta y disminuir nuestro rendimiento.";
                   document.querySelector("#tx21").innerHTML = "Estresores académicos";
                   document.querySelector("#tx22").innerHTML = "Las exigencias que pueden dar lugar al estrés son de dos tipos:";
                   document.querySelector("#tx23").innerHTML = "Exigencias Internas: es decir, aquellas que nos realizamos nosotros mismos cuando somos muy autoexigentes, tenemos altas expectativas de logro, necesitamos mantener el control y nos esforzamos en ellas, entre otras.";
                   document.querySelector("#tx24").innerHTML = "Exigencias Externas: es decir, aquellas que nos va presentando nuestro entorno, entre las Cuáles vale la pena tener que entregar trabajos y realizar pruebas y exámenes en un tiempo limitado; realizar trabajos en grupo; presente frente al curso (disertaciones); no comprender los contenidos tratados en clase; tiempo limitado por obligaciones académicas, entre otros.";
                   document.querySelector("#tx25").innerHTML = "Estresores no académicos";
                   document.querySelector("#txz").innerHTML = "Además de lo académico, debemos considerar una serie de situaciones de la vida que nos estresan y que también afectan nuestro estado emocional y físico. A continuación se muestra una adaptación de la escala de Holmes y Rahe, con la lista de situaciones estresantes más comunes:";
                   document.querySelector("#tx26").innerHTML = "lesión personal o enfermedad";
                   document.querySelector("#tx27").innerHTML = "Cambiar la salud de un miembro de la familia";
                   document.querySelector("#tx28").innerHTML = "Adicción y / o alcoholismo (propia o cercana)";
                   document.querySelector("#tx29").innerHTML = "Adición de un nuevo miembro a la familia";
                   document.querySelector("#tx30").innerHTML = "Muerte de un amigo";
                   document.querySelector("#tx31").innerHTML = "Inicio o final de etapa académica";
                   document.querySelector("#tx32").innerHTML = "Cambio en las condiciones de vida";
                   document.querySelector("#tx33").innerHTML = "Cambio en las condiciones de vida";
                   document.querySelector("#tx34").innerHTML = "Cambio de actividades sociales";
                   document.querySelector("#tx35").innerHTML = "Cambiar los hábitos de sueño";
   
   
                   document.querySelector("#tx36").innerHTML = "Cambio de hábitos alimenticios.";
                   document.querySelector("#tx37").innerHTML = "¿Cómo se manifiesta el estrés?";
                   document.querySelector("#tx38").innerHTML = "Una vez que hayas identificado las situaciones que te generan estrés, es importante reconocer cómo reaccionas ante ellas; qué efectos generan en tu cuerpo y en tus emociones.";
                   document.querySelector("#tx39").innerHTML = "Aunque inicialmente el estrés es normal y provechoso, ya que nos ayuda a activarnos para poder responder a las demandas y exigencias del entorno, con el tiempo nuestro cuerpo y nuestra mente se agotan y empiezan a disminuir en su rendimiento.";
                   document.querySelector("#tx40").innerHTML = "Para evitar esta caída en el rendimiento, debemos regular la cantidad de tiempo que mantenemos operando bajo altos niveles de demanda, una fase llamada resistencia, a la que le sigue la fase de agotamiento";
                   document.querySelector("#tx41").innerHTML = "Si, a pesar del agotamiento, no paramos a descansar y hacer una pausa para recuperar energía, nuestro organismo podría entrar en una fase de cronificación de las manifestaciones del estrés en fase de agotamiento";
                   document.querySelector("#tx42").innerHTML = "Estas manifestaciones pueden presentarse en diversos ámbitos -físico, psicológico y comportamental- y es importante reconocerlas para identificarlas a medida que aparecen y así poder tomar medidas preventivas.";
                   document.querySelector("#tx43").innerHTML = "Fases del estrés";
                   document.querySelector("#tx44").innerHTML = "Manifestaciones físicas";
                   document.querySelector("#tx45").innerHTML = "Corresponden a los síntomas que se generan en nuestro organismo frente a los estresores habituales, algunos de ellos son:";
                   document.querySelector("#tx46").innerHTML = "Somnolencia, mayor necesidad de dormir";
                   document.querySelector("#tx47").innerHTML = "Cansancio y fatiga";
                   document.querySelector("#tx48").innerHTML = "Dolores de cabeza o migrañas";
                   document.querySelector("#tx49").innerHTML = "Dolor de estómago y/o coloración irritable";
                   document.querySelector("#tx50").innerHTML = "Bruxismo (tensión de la mandíbula)";
                   document.querySelector("#tx51").innerHTML = "dolor de espalda";
                   document.querySelector("#tx52").innerHTML = "Taquicardia o palpitaciones fuertes";
                   document.querySelector("#tx53").innerHTML = "Aumento o disminución del apetito";
                   document.querySelector("#tx54").innerHTML = "Resfriados frecuentes (baja en el sistema inmunológico)";
                   document.querySelector("#tx55").innerHTML = "Dificultades para dormir (insomnio o pesadillas)";
   
                   document.querySelector("#tx56").innerHTML = "Manifestaciones psicológicas y emocionales.";
                   document.querySelector("#tx57").innerHTML = "Estas son las reacciones emocionales y cognitivas que tenemos ante situaciones estresantes, entre las que se encuentran:";
                   document.querySelector("#tx58").innerHTML = "Inquietud e hiperactividad";
                   document.querySelector("#tx59").innerHTML = "Tristeza y/o desgana";
                   document.querySelector("#tx60").innerHTML = "Ansiedad constante";
                   document.querySelector("#tx61").innerHTML = "Dificultad para concentrarse";
                   document.querySelector("#tx62").innerHTML = "Dificultad para pensar (quedarse en blanco)";
                   document.querySelector("#tx63").innerHTML = "Problemas de memoria, olvidos frecuentes";
                   document.querySelector("#tx64").innerHTML = "irritabilidad frecuente";
                   document.querySelector("#tx65").innerHTML = "Miedo a no poder cumplir con las obligaciones";
                   document.querySelector("#tx66").innerHTML = "Baja motivación por las actividades académicas.";
                   document.querySelector("#tx67").innerHTML = "Angustia frecuente y/o ganas de llorar";
                   document.querySelector("#tx68").innerHTML = "Prevención y afrontamiento del estrés académico";
                   document.querySelector("#tx69").innerHTML = "Una vez que identificamos las situaciones que generan estrés y sabemos cómo reaccionamos ante ellas, debemos distinguir qué estamos haciendo para evitar que esto suceda o mitigar los efectos.";
                   document.querySelector("#tx70").innerHTML = "Algunas de las estrategias que ayudan tanto a prevenir la cronicidad del estrés como a afrontar las manifestaciones en la fase de agotamiento son:";
                   document.querySelector("#tx71").innerHTML = "Planificar actividades priorizándose unas a otras";
                   document.querySelector("#tx72").innerHTML = "Decidir entre varias técnicas de estudio.";
                   document.querySelector("#tx73").innerHTML = "Comer sano en horarios estables ";
                   document.querySelector("#tx74").innerHTML = "Practicar actividades deportivas o recreativas";
                   document.querySelector("#tx75").innerHTML = "Dedique tiempo a pasatiempos y pasatiempos.";
                   document.querySelector("#tx76").innerHTML = "Mantener ciclos de sueño estables.";
                   document.querySelector("#tx77").innerHTML = "Busque ayuda y comparta con otros";
                   document.querySelector("#tx78").innerHTML = "Practica la relajación y la respiración profunda.";
                   document.querySelector("#tx79").innerHTML = "Mantener el sentido del humor";
                   document.querySelector("#tx80").innerHTML = "Consejos para aliviar el estrés";
                   document.querySelector("#tx81").innerHTML = "Establecer prioridades. Decide qué cosas hacer y qué cosas puedes esperar y aprende a decir no a nuevas tareas si te sientes abrumado";
                   document.querySelector("#tx82").innerHTML = "Manténgase en contacto con personas que puedan brindarle apoyo emocional y de otro tipo. Pida ayuda a amigos, familiares y a la comunidad u organizaciones religiosas para reducir el estrés debido a las responsabilidades laborales o asuntos familiares, como el cuidado de un ser querido.";
   
                   document.querySelector("#tx83").innerHTML = "Tómese el tiempo para hacer actividades relajantes que disfrute, como leer, hacer yoga o hacer jardinería.";
                   document.querySelector("#tx84").innerHTML = "Evite pensar obsesivamente en los problemas. Enfócate en lo que has logrado, no en lo que no has podido hacer.";
                   document.querySelector("#tx85").innerHTML = "Hacer ejercicio regularmente. Una caminata moderada de solo 30 minutos por día puede ayudar a levantar el ánimo y reducir el estrés.";
                   document.querySelector("#cite").innerHTML = "Video gracias a: Video gracias a: Pablo Sánchez Urina en YouTube"
                   document.querySelector("#tx86").innerHTML = "Estres";
                   document.querySelector("#tx87").innerHTML = "Que es el estres?";
                   document.querySelector("#tx88").innerHTML = "Síntomas  del estres ";
                   document.querySelector("#tx89").innerHTML = "Tipos de estres";
                   document.querySelector("#tx90").innerHTML = "Causas del estres";
                   document.querySelector("#tx91").innerHTML = "Tips para el estres";
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
                   document.querySelector(".tx1").innerHTML = "Stress";
                   document.querySelector(".text1").innerHTML = "What is stress?";
                   document.querySelector(".context").innerHTML = "Stress is the physical or mental response to an external cause, such as having many tasks or suffering from an illness. A stressor or stressor may be something that happens only once or in the short term, or it can happen repeatedly for a long time.";
                   document.querySelector("#tx2").innerHTML = "What are the signs or symptoms of stress?";
                   document.querySelector("#tx3").innerHTML = "Stress can cause many types of physical and emotional symptoms. Sometimes you may not realize that these symptoms are caused by stress. Here are some signs that stress may be affecting you:";
                   document.querySelector("#tx4").innerHTML = "Diarrhea or constipation";
                   document.querySelector("#tx5").innerHTML = "Bad memory";
                   document.querySelector("#tx6").innerHTML = "Frequent pains and ailments";
                   document.querySelector("#tx7").innerHTML = "Headaches";
                   document.querySelector("#tx8").innerHTML = "Lack of energy or concentration";
                   document.querySelector("#tx9").innerHTML = "Sexual problems";
                   document.querySelector("#tx10").innerHTML = "Rigid neck or jaw";
                   document.querySelector("#tx11").innerHTML = "Weariness";
                   document.querySelector("#tx12").innerHTML = "Trouble sleeping or sleeping too much";
                   document.querySelector("#tx13").innerHTML = "Stomach upset";
                   document.querySelector("#tx14").innerHTML = "Weight loss or gain";
                   document.querySelector("#tx15").innerHTML = "Types of stress";
                   document.querySelector("#tx16").innerHTML = "Stress is a normal feeling. There are two main types of stress:";
                   document.querySelector("#tx17").innerHTML = "Acute stress. This is short-term stress that goes away quickly. You can feel it when you press the brakes, fight with your partner, or ski on a slope. This helps you control dangerous situations. It also happens when you do something new or exciting. Everyone feels acute stress at one time or another.";
                   document.querySelector("#tx18").innerHTML = "Chronic stress. This is stress that lasts for an extended period of time. You may have chronic stress if you have money problems, an unhappy marriage, or problems at work. Any type of stress that continues for weeks or months is chronic stress. You can get so used to chronic stress that you don't realize it's a problem. If you can't find ways to manage stress, it could cause health problems.";
                   document.querySelector("#tx19").innerHTML = "What is academic stress and why is it generated";
                   document.querySelector("#tx20").innerHTML = "Academic stress is the normal reaction we have to the various demands and demands we face at the University, such as tests, exams, papers, presentations, etc. This reaction activates us and mobilizes us to respond effectively and achieve our goals and objectives. However, sometimes, we can have too many demands at the same time, which can sharpen the response and decrease our performance.";
                   document.querySelector("#tx21").innerHTML = "Academic stressors";
                   document.querySelector("#tx22").innerHTML = "The demands that can give rise to stress are of two types:";
                   document.querySelector("#tx23").innerHTML = "Internal Demands: that is, those that we realize ourselves when we are very self-demanding, we have high expectations of achievement, we need to maintain control and we strive in them, among others.";
                   document.querySelector("#tx24").innerHTML = "External Demands: that is, those that our environment is presenting to us, among which it is worth having to deliver works and take tests and exams in a limited time; carry out group work; present in front of the course (dissertations); not understanding content addressed in the class; limited time for academic obligations, among others.";
                   document.querySelector("#tx25").innerHTML = "Non-academic stressors";
                   document.querySelector("#txz").innerHTML = "In addition to academics, we must consider a series of life situations that stress us out and that also affect our emotional and physical state. Below is an adaptation of the Holmes and Rahe scale, with the list of most common stressful situations:";
                   document.querySelector("#tx26").innerHTML = "Personal injury or illness";
                   document.querySelector("#tx27").innerHTML = "Changing a family member's health";
                   document.querySelector("#tx28").innerHTML = "Addiction and/or alcoholism (own or close)";
                   document.querySelector("#tx29").innerHTML = "Adding a new member to the family";
                   document.querySelector("#tx30").innerHTML = "Death of a friend";
                   document.querySelector("#tx31").innerHTML = "Beginning or end of academic stage";
                   document.querySelector("#tx32").innerHTML = "Change in living conditions";
                   document.querySelector("#tx33").innerHTML = "Change of residence";
                   document.querySelector("#tx34").innerHTML = "Change of social activities";
                   document.querySelector("#tx35").innerHTML = "Changing sleeping habits";
   
   
                   document.querySelector("#tx36").innerHTML = "Change of eating habits";
                   document.querySelector("#tx37").innerHTML = "How does stress manifest itself?";
                   document.querySelector("#tx38").innerHTML = "Once you have identified the situations that generate stress, it is important to recognize how you react to them; what effects they generate in your body and in your emotions.";
                   document.querySelector("#tx39").innerHTML = "Although initially stress is normal and profitable, since it helps us to activate ourselves to be able to respond to the demands and demands of the environment, over time our body and our mind are exhausted and begin to decrease in their performance.";
                   document.querySelector("#tx40").innerHTML = "To prevent this drop in performance we must regulate the amount of time we keep operating under high levels of demand, a phase called resistance, which is followed by the exhaustion phase.";
                   document.querySelector("#tx41").innerHTML = "If, despite exhaustion, we do not stop to rest and pause to recover energy, our body could enter a phase of chronification of the manifestations of the stress exhaustion phase.";
                   document.querySelector("#tx42").innerHTML = "These manifestations can occur in various areas -physical, psychological and behavioral- and it is important to recognize them to identify them as they appear and thus be able to take preventive measures.";
                   document.querySelector("#tx43").innerHTML = "Phases of stress";
                   document.querySelector("#tx44").innerHTML = "Physical manifestations";
                   document.querySelector("#tx45").innerHTML = "They correspond to the symptoms that are generated in our body against the usual stressors, some of them are:";
                   document.querySelector("#tx46").innerHTML = "Drowsiness, increased need for sleep";
                   document.querySelector("#tx47").innerHTML = "Tiredness and fatigue";
                   document.querySelector("#tx48").innerHTML = "Headaches or migraines";
                   document.querySelector("#tx49").innerHTML = "Stomach pain and/or irritable color";
                   document.querySelector("#tx50").innerHTML = "Bruxism (jaw tension)";
                   document.querySelector("#tx51").innerHTML = "Back pain";
                   document.querySelector("#tx52").innerHTML = "Tachycardia or strong palpitations";
                   document.querySelector("#tx53").innerHTML = "Increased or decreased appetite";
                   document.querySelector("#tx54").innerHTML = "Frequent colds (low in the immune system)";
                   document.querySelector("#tx55").innerHTML = "Sleep difficulties (insomnia or nightmares)";
   
                   document.querySelector("#tx56").innerHTML = "Psychological and emotional manifestations";
                   document.querySelector("#tx57").innerHTML = "These are the emotional and cognitive reactions we have in the face of stressful situations, among which are:";
                   document.querySelector("#tx58").innerHTML = "Restlessness and hyperactivity";
                   document.querySelector("#tx59").innerHTML = "Sadness and/or reluctance";
                   document.querySelector("#tx60").innerHTML = "Constant anxiety";
                   document.querySelector("#tx61").innerHTML = "Difficulty concentrating";
                   document.querySelector("#tx62").innerHTML = "Difficulty thinking (going blank)";
                   document.querySelector("#tx63").innerHTML = "Memory problems, frequent forgetfulness";
                   document.querySelector("#tx64").innerHTML = "Frequent irritability";
                   document.querySelector("#tx65").innerHTML = "Fear of not being able to meet obligations";
                   document.querySelector("#tx66").innerHTML = "Low motivation for academic activities";
                   document.querySelector("#tx67").innerHTML = "Frequent distress and/or urge to cry";
                   document.querySelector("#tx68").innerHTML = "Prevention and coping with academic stress";
                   document.querySelector("#tx69").innerHTML = "Once we identify the situations that generate stress and we know how we react to it, we need to distinguish what we are doing to prevent this from happening or mitigate the effects.";
                   document.querySelector("#tx70").innerHTML = "Some of the strategies that help both to prevent the chronicity of stress and to face the manifestations in the phase of exhaustion are:";
                   document.querySelector("#tx71").innerHTML = "Plan activities prioritizing each other";
                   document.querySelector("#tx72").innerHTML = "Decide between various study techniquesv";
                   document.querySelector("#tx73").innerHTML = "Eating healthy at stable times";
                   document.querySelector("#tx74").innerHTML = "Practice sports or recreational activities";
                   document.querySelector("#tx75").innerHTML = "Spend time on hobbies and hobbies";
                   document.querySelector("#tx76").innerHTML = "Maintain stable sleep cycles";
                   document.querySelector("#tx77").innerHTML = "Seek help and share with others";
                   document.querySelector("#tx78").innerHTML = "Practice relaxation and deep breathing";
                   document.querySelector("#tx79").innerHTML = "Maintain a sense of humor";
                   document.querySelector("#tx80").innerHTML = "Tips to relieve stress";
                   document.querySelector("#tx81").innerHTML = "Set priorities. Decide what things to do and what things you can expect and learn to say no to new tasks if you are overwhelmed.";
                   document.querySelector("#tx82").innerHTML = "Stay in touch with people who can provide emotional and other support. Ask friends, family, and the community or religious organizations for help reducing stress due to work responsibilities or family matters, such as caring for a loved one";
   
                   document.querySelector("#tx83").innerHTML = "Take time to do relaxing activities you enjoy like reading, yoga, or gardening.";
                   document.querySelector("#tx84").innerHTML = "Avoid thinking obsessively about problems. Focus on what you've accomplished, not what you haven't been able to do.";
                   document.querySelector("#tx85").innerHTML = "Exercise regularly. A moderate walk of just 30 minutes per day can help lift your spirits and reduce stress.";
                   document.querySelector("#cite").innerHTML = "Video thanks to: Pablo Sanchez Urina on YouTube"
                   document.querySelector("#tx86").innerHTML = "Stress";
                   document.querySelector("#tx87").innerHTML = "What is stress?";
                   document.querySelector("#tx88").innerHTML = "Symptoms of stress";
                   document.querySelector("#tx89").innerHTML = "Types of stress";
                   document.querySelector("#tx90").innerHTML = "Causes of stress";
                   document.querySelector("#tx91").innerHTML = "Tips for stress";
               
   
           
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
                   document.querySelector(".tx1").innerHTML = "Estrés";
                   document.querySelector(".text1").innerHTML = "Que es estrés?";
                   document.querySelector(".context").innerHTML = "El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad. Un factor estresante o estresante puede ser algo que ocurre una sola vez o en un corto plazo, o puede ocurrir repetidamente durante mucho tiempo.";
                   document.querySelector("#tx2").innerHTML = "¿Cuáles son los signos o síntomas del estrés?";
                   document.querySelector("#tx3").innerHTML = "El estrés puede causar muchos tipos de síntomas físicos y emocionales. A veces, es posible que no se dé cuenta de que estos síntomas son causados por el estrés. Estas son algunas señales de que el estrés puede estar afectándote:";
                   document.querySelector("#tx4").innerHTML = "Diarrea o estreñimiento";
                   document.querySelector("#tx5").innerHTML = "Mala memoria";
                   document.querySelector("#tx6").innerHTML = "Dolores y dolencias frecuentes";
                   document.querySelector("#tx7").innerHTML = "dolores de cabeza";
                   document.querySelector("#tx8").innerHTML = "Falta de energía o concentración.";
                   document.querySelector("#tx9").innerHTML = "Problemas sexuales";
                   document.querySelector("#tx10").innerHTML = "Cuello o mandíbula rígidos";
                   document.querySelector("#tx11").innerHTML = "Cansancio";
                   document.querySelector("#tx12").innerHTML = "Problemas para dormir o dormir demasiado";
                   document.querySelector("#tx13").innerHTML = "Malestar estomacal";
                   document.querySelector("#tx14").innerHTML = "Pérdida o aumento de peso";
                   document.querySelector("#tx15").innerHTML = "tipos de estrés";
                   document.querySelector("#tx16").innerHTML = "El estrés es un sentimiento normal. Hay dos tipos principales de estrés:";
                   document.querySelector("#tx17").innerHTML = "Estrés agudo. Este es un estrés a corto plazo que desaparece rápidamente. Puedes sentirlo cuando pisas los frenos, peleas con tu compañero o esquías en una pendiente. Esto le ayuda a controlar situaciones peligrosas. También sucede cuando haces algo nuevo o emocionante. Todo el mundo siente estrés agudo en un momento u otro.";
                   document.querySelector("#tx18").innerHTML = "Estrés crónico. Este es el estrés que dura un período prolongado de tiempo. Puede tener estrés crónico si tiene problemas de dinero, un matrimonio infeliz o problemas en el trabajo. Cualquier tipo de estrés que continúa durante semanas o meses es estrés crónico. Puede acostumbrarse tanto al estrés crónico que no se da cuenta de que es un problema. Si no puede encontrar formas de manejar el estrés, podría causar problemas de salud.";
                   document.querySelector("#tx19").innerHTML = "Qué es el estrés académico y por qué se genera";
                   document.querySelector("#tx20").innerHTML = "El estrés académico es la reacción normal que tenemos ante las diversas demandas y exigencias que enfrentamos en la Universidad, tales como pruebas, exámenes, trabajos, presentaciones, etc. Esta reacción nos activa y moviliza para responder de manera efectiva y lograr nuestras metas y objetivos. Sin embargo, en ocasiones, podemos tener demasiadas demandas al mismo tiempo, lo que puede agudizar la respuesta y disminuir nuestro rendimiento.";
                   document.querySelector("#tx21").innerHTML = "Estresores académicos";
                   document.querySelector("#tx22").innerHTML = "Las exigencias que pueden dar lugar al estrés son de dos tipos:";
                   document.querySelector("#tx23").innerHTML = "Exigencias Internas: es decir, aquellas que nos realizamos nosotros mismos cuando somos muy autoexigentes, tenemos altas expectativas de logro, necesitamos mantener el control y nos esforzamos en ellas, entre otras.";
                   document.querySelector("#tx24").innerHTML = "Exigencias Externas: es decir, aquellas que nos va presentando nuestro entorno, entre las Cuáles vale la pena tener que entregar trabajos y realizar pruebas y exámenes en un tiempo limitado; realizar trabajos en grupo; presente frente al curso (disertaciones); no comprender los contenidos tratados en clase; tiempo limitado por obligaciones académicas, entre otros.";
                   document.querySelector("#tx25").innerHTML = "Estresores no académicos";
                   document.querySelector("#txz").innerHTML = "Además de lo académico, debemos considerar una serie de situaciones de la vida que nos estresan y que también afectan nuestro estado emocional y físico. A continuación se muestra una adaptación de la escala de Holmes y Rahe, con la lista de situaciones estresantes más comunes:";
                   document.querySelector("#tx26").innerHTML = "lesión personal o enfermedad";
                   document.querySelector("#tx27").innerHTML = "Cambiar la salud de un miembro de la familia";
                   document.querySelector("#tx28").innerHTML = "Adicción y / o alcoholismo (propia o cercana)";
                   document.querySelector("#tx29").innerHTML = "Adición de un nuevo miembro a la familia";
                   document.querySelector("#tx30").innerHTML = "Muerte de un amigo";
                   document.querySelector("#tx31").innerHTML = "Inicio o final de etapa académica";
                   document.querySelector("#tx32").innerHTML = "Cambio en las condiciones de vida";
                   document.querySelector("#tx33").innerHTML = "Cambio en las condiciones de vida";
                   document.querySelector("#tx34").innerHTML = "Cambio de actividades sociales";
                   document.querySelector("#tx35").innerHTML = "Cambiar los hábitos de sueño";
   
   
                   document.querySelector("#tx36").innerHTML = "Cambio de hábitos alimenticios.";
                   document.querySelector("#tx37").innerHTML = "¿Cómo se manifiesta el estrés?";
                   document.querySelector("#tx38").innerHTML = "Una vez que hayas identificado las situaciones que te generan estrés, es importante reconocer cómo reaccionas ante ellas; qué efectos generan en tu cuerpo y en tus emociones.";
                   document.querySelector("#tx39").innerHTML = "Aunque inicialmente el estrés es normal y provechoso, ya que nos ayuda a activarnos para poder responder a las demandas y exigencias del entorno, con el tiempo nuestro cuerpo y nuestra mente se agotan y empiezan a disminuir en su rendimiento.";
                   document.querySelector("#tx40").innerHTML = "Para evitar esta caída en el rendimiento, debemos regular la cantidad de tiempo que mantenemos operando bajo altos niveles de demanda, una fase llamada resistencia, a la que le sigue la fase de agotamiento";
                   document.querySelector("#tx41").innerHTML = "Si, a pesar del agotamiento, no paramos a descansar y hacer una pausa para recuperar energía, nuestro organismo podría entrar en una fase de cronificación de las manifestaciones del estrés en fase de agotamiento";
                   document.querySelector("#tx42").innerHTML = "Estas manifestaciones pueden presentarse en diversos ámbitos -físico, psicológico y comportamental- y es importante reconocerlas para identificarlas a medida que aparecen y así poder tomar medidas preventivas.";
                   document.querySelector("#tx43").innerHTML = "Fases del estrés";
                   document.querySelector("#tx44").innerHTML = "Manifestaciones físicas";
                   document.querySelector("#tx45").innerHTML = "Corresponden a los síntomas que se generan en nuestro organismo frente a los estresores habituales, algunos de ellos son:";
                   document.querySelector("#tx46").innerHTML = "Somnolencia, mayor necesidad de dormir";
                   document.querySelector("#tx47").innerHTML = "Cansancio y fatiga";
                   document.querySelector("#tx48").innerHTML = "Dolores de cabeza o migrañas";
                   document.querySelector("#tx49").innerHTML = "Dolor de estómago y/o coloración irritable";
                   document.querySelector("#tx50").innerHTML = "Bruxismo (tensión de la mandíbula)";
                   document.querySelector("#tx51").innerHTML = "dolor de espalda";
                   document.querySelector("#tx52").innerHTML = "Taquicardia o palpitaciones fuertes";
                   document.querySelector("#tx53").innerHTML = "Aumento o disminución del apetito";
                   document.querySelector("#tx54").innerHTML = "Resfriados frecuentes (baja en el sistema inmunológico)";
                   document.querySelector("#tx55").innerHTML = "Dificultades para dormir (insomnio o pesadillas)";
   
                   document.querySelector("#tx56").innerHTML = "Manifestaciones psicológicas y emocionales.";
                   document.querySelector("#tx57").innerHTML = "Estas son las reacciones emocionales y cognitivas que tenemos ante situaciones estresantes, entre las que se encuentran:";
                   document.querySelector("#tx58").innerHTML = "Inquietud e hiperactividad";
                   document.querySelector("#tx59").innerHTML = "Tristeza y/o desgana";
                   document.querySelector("#tx60").innerHTML = "Ansiedad constante";
                   document.querySelector("#tx61").innerHTML = "Dificultad para concentrarse";
                   document.querySelector("#tx62").innerHTML = "Dificultad para pensar (quedarse en blanco)";
                   document.querySelector("#tx63").innerHTML = "Problemas de memoria, olvidos frecuentes";
                   document.querySelector("#tx64").innerHTML = "irritabilidad frecuente";
                   document.querySelector("#tx65").innerHTML = "Miedo a no poder cumplir con las obligaciones";
                   document.querySelector("#tx66").innerHTML = "Baja motivación por las actividades académicas.";
                   document.querySelector("#tx67").innerHTML = "Angustia frecuente y/o ganas de llorar";
                   document.querySelector("#tx68").innerHTML = "Prevención y afrontamiento del estrés académico";
                   document.querySelector("#tx69").innerHTML = "Una vez que identificamos las situaciones que generan estrés y sabemos cómo reaccionamos ante ellas, debemos distinguir qué estamos haciendo para evitar que esto suceda o mitigar los efectos.";
                   document.querySelector("#tx70").innerHTML = "Algunas de las estrategias que ayudan tanto a prevenir la cronicidad del estrés como a afrontar las manifestaciones en la fase de agotamiento son:";
                   document.querySelector("#tx71").innerHTML = "Planificar actividades priorizándose unas a otras";
                   document.querySelector("#tx72").innerHTML = "Decidir entre varias técnicas de estudio.";
                   document.querySelector("#tx73").innerHTML = "Comer sano en horarios estables ";
                   document.querySelector("#tx74").innerHTML = "Practicar actividades deportivas o recreativas";
                   document.querySelector("#tx75").innerHTML = "Dedique tiempo a pasatiempos y pasatiempos.";
                   document.querySelector("#tx76").innerHTML = "Mantener ciclos de sueño estables.";
                   document.querySelector("#tx77").innerHTML = "Busque ayuda y comparta con otros";
                   document.querySelector("#tx78").innerHTML = "Practica la relajación y la respiración profunda.";
                   document.querySelector("#tx79").innerHTML = "Mantener el sentido del humor";
                   document.querySelector("#tx80").innerHTML = "Consejos para aliviar el estrés";
                   document.querySelector("#tx81").innerHTML = "Establecer prioridades. Decide qué cosas hacer y qué cosas puedes esperar y aprende a decir no a nuevas tareas si te sientes abrumado";
                   document.querySelector("#tx82").innerHTML = "Manténgase en contacto con personas que puedan brindarle apoyo emocional y de otro tipo. Pida ayuda a amigos, familiares y a la comunidad u organizaciones religiosas para reducir el estrés debido a las responsabilidades laborales o asuntos familiares, como el cuidado de un ser querido.";
   
                   document.querySelector("#tx83").innerHTML = "Tómese el tiempo para hacer actividades relajantes que disfrute, como leer, hacer yoga o hacer jardinería.";
                   document.querySelector("#tx84").innerHTML = "Evite pensar obsesivamente en los problemas. Enfócate en lo que has logrado, no en lo que no has podido hacer.";
                   document.querySelector("#tx85").innerHTML = "Hacer ejercicio regularmente. Una caminata moderada de solo 30 minutos por día puede ayudar a levantar el ánimo y reducir el estrés.";
                   document.querySelector("#cite").innerHTML = "Video gracias a: Video gracias a: Pablo Sánchez Urina en YouTube"
                   document.querySelector("#tx86").innerHTML = "Estrés";
                   document.querySelector("#tx87").innerHTML = "Que es el Estrés?";
                   document.querySelector("#tx88").innerHTML = "Síntomas  del Estrés ";
                   document.querySelector("#tx89").innerHTML = "Tipos de Estrés";
                   document.querySelector("#tx90").innerHTML = "Causas del Estrés";
                   document.querySelector("#tx91").innerHTML = "Tips para el Estrés";
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