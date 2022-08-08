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
                // /*Parte de document querySelector en ingles*/
                document.querySelector("#first-quote").innerHTML ="Self-esteem and personal development.";
                document.querySelector("#second-quote").innerHTML ="What is lack of self-esteem?";
                document.querySelector("#problema1").innerHTML ="When we talk about low self-esteem or lack of self-esteem, we refer to a self-esteem that does not allow the person to feel valuable or to have an objective judgment about himself. That is, low self-esteem is the negative evaluation of the self-concept, which makes the person feel inferior to others. A person with low self-esteem is a person who is not sure of himself, who constantly compares himself to others and who is afraid to say what he thinks or feels. Low self-esteem can be a precursor to disorders such as: depression, anxiety, eating disorders or others.";
                document.querySelector("#problema2").innerHTML ="What are the signs or symptoms of low self-esteem?";
                document.querySelector("#problema3").innerHTML ="Since self-esteem is a result of a person's self-esteem, the symptoms of low self-esteem tend to differ. However, there are characteristics that are common to all people with low self-esteem. Next, we tell you about some of them:";
                document.querySelector("#li1").innerHTML ="Constantly comparing yourself to others";
                document.querySelector("#li2").innerHTML ="Not feeling sure of oneself";
                document.querySelector("#li3").innerHTML ="Being afraid to say what you feel or think";
                document.querySelector("#li4").innerHTML ="Be afraid of being wrong";
                document.querySelector("#li5").innerHTML ="Wanting to please others all the time";
                document.querySelector("#li6").innerHTML ="Seek the constant approval of others";
                document.querySelector("#li7").innerHTML ="Allow manipulation of others";
                document.querySelector("#li8").innerHTML ="Not accept criticism";
                document.querySelector("#li9").innerHTML ="Difficulty saying no";
                document.querySelector("#li10").innerHTML ="Not believing in your own achievements";
                document.querySelector("#problema4").innerHTML ="Types of self-esteem";
                document.querySelector("#li11").innerHTML ="High and stable self-esteem: It is by far the self-esteem that all mortals want to reach and that which is perhaps the most difficult to achieve due to the very instability of life, of emotions, of circumstances... but beyond what happens outside of us, the important thing is what happens inside us since that will make us react in one way or another and with a certain attitude.";
                document.querySelector("#li12").innerHTML ="Low and stable self-esteem: The opposite is true for the stable, low self-esteem type. People who have low self-esteem are people who, in a stabilized way over time, regardless of whether they are favored externally or not, tend to underestimate themselves and maintain an internal dialogue with a greater negative charge. In this case, stability means that they are people who in almost all their days have deeply internalized the act that they do not measure up and are not self-effective in what they do, since they are always afraid of failing and doing it wrong. This leads them to have an apathetic and depressive mood.";
                document.querySelector("#li13").innerHTML ="High and unstable self-esteem: These people have, in the same way as people with a high and stable type of self-esteem, an adequate concept of themselves, valuing their abilities, strengths and weaknesses. The inconvenience is reflected in the instability and in the impossibility that they have of maintaining their self-esteem in a stable manner over time, which leads them to find themselves in situations that they consider threatening (possibility of experiencing failure) for their self-esteem and to execute an aggressive response or passive-aggressiv";
                document.querySelector("#li14").innerHTML ="Low and unstable self-esteem. Completing the four compositions of self-esteem types in terms of high-low and stable-unstable… low and unstable self-esteem is the least flattering. In this pole, we find people with a self-esteem that, in addition to being low, fluctuates over time with instability, being able to experience small moments of satisfaction and ability to achieve, but which quickly decreases.These people are sometimes easily influenced and can make decisions to please other people and thus feel appreciated. That is why they can also generate emotional dependence.";
                document.querySelector("#problema5").innerHTML ="Causes of low self-esteem";
                document.querySelector("#problema6").innerHTML ="The causes of poor self-esteem can be stagnation in the type of life we lead, suffering from some type of emotional disorder such as depression, anxiety, some type of phobia, sleep problems that alter the usual rhythm of life.";
                document.querySelector("#problema7").innerHTML ="Tips to improve your self-esteem";
                document.querySelector("#li15").innerHTML ="Search and find the origin of your low self-esteem. As a good architect would tell you, you cannot start the house from the roof, so in order to improve your self-esteem, you will first have to find the origin of everything. Any advice for it? ask yourself at least three times the why?  of your fears";
                document.querySelector("#li16").innerHTML ="Do it, try even if you may fail. The human being tends to avoid and not face what he fears and causes fear, this is the simplest, fastest and easiest way out in the short term since it eliminates the anxiety that the situation causes.";
                document.querySelector("#li17").innerHTML ="Replace your goals with values Sometimes not achieving very marked and desired objectives can lead to frustration and to feeling that we are worthless, this does not happen when it is the values and not the objectives that mark our direction in life. Let's see it with a concrete example: imagine that you are preparing for an opposition, you have been studying for months and months and making fewer leisure plans; In this case, your values are effort, perseverance, self-improvement, the ability to sacrifice, willpower and responsibility, among others.";
                document.querySelector("#li18").innerHTML ="Identify your strengths. Today we know that each and every one of us is born with a series of qualities, innate characteristics or strengths that are our strengths, they are those skills that you are especially good at, the problem comes when the person with low self-esteem does not believe that he has them and also it is very difficult for him to identify them.";
                document.querySelector("#cite").innerHTML = "Video thanks to: Vida Practica on YouTube";
            
                 /*Parte de document querySelector en ingles*/
                   // footer
                document.querySelector("#fo1").innerHTML = "Home" 
                document.querySelector("#fo2").innerHTML = "About us"
                document.querySelector("#fo3").innerHTML = "Psychologists"
                document.querySelector("#fo4").innerHTML = "Help centers";
                document.querySelector(".social-text").innerHTML = "Our social networks!"
                //libreria de problema
                document.querySelector("#auto1").innerHTML ="Self-esteem and personal development";
                document.querySelector("#auto2").innerHTML ="What is lack of self-esteem?";
                document.querySelector("#auto3").innerHTML ="Symptoms of low self esteem";
                document.querySelector("#auto4").innerHTML ="Types of self-esteem";
                document.querySelector("#auto5").innerHTML ="Causes of low self-esteem";
                document.querySelector("#auto6").innerHTML ="Tips to improve your self-esteem";
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
                   document.querySelector("#first-quote").innerHTML ="Autoestima y desarrollo personal";
                   document.querySelector("#second-quote").innerHTML ="¿Qué es la falta de autoestima?";
                   document.querySelector("#problema1").innerHTML ="Cuando hablamos de baja autoestima o falta de autoestima, nos referimos a una autoestima que no permite a la persona sentirse valiosa o tener un juicio objetivo sobre ella misma. Es decir, la autoestima baja es la evaluación negativa del autoconcepto, lo cual hace que la persona se sienta inferior a los demás. Una persona con baja autoestima es una persona que no es segura de sí misma, que se compara constantemente con los demás y que tiene miedo a decir lo que piensa o siente. La autoestima baja puede ser un precursor de trastornos como: depresión, ansiedad, trastornos alimenticios u otros.";
                   document.querySelector("#problema2").innerHTML ="¿Cuales son los signos o sintomas de la baja autoestima?";
                   document.querySelector("#problema3").innerHTML ="Como la autoestima es resultado de la valoración que una persona tiene sobre ella misma, los síntomas de la baja autoestima tienden a diferir. Sin embargo, existen características que son comunes en todas las personas que tienen baja autoestima. A continuación, te contamos sobre algunas de ellas:";
                   document.querySelector("#li1").innerHTML ="Compararse constantemente con los demás";
                   document.querySelector("#li2").innerHTML ="No sentirse seguro/a de uno/a mismo/a";
                   document.querySelector("#li3").innerHTML ="Tener miedo a decir lo que siente o piensa";
                   document.querySelector("#li4").innerHTML ="Tener terror a equivocarse";
                   document.querySelector("#li5").innerHTML ="Querer complacer a los demás todo el tiempo";
                   document.querySelector("#li6").innerHTML ="Buscar la aprobación constante de los demás";
                   document.querySelector("#li7").innerHTML ="Permitir la manipulación de los demás";
                   document.querySelector("#li8").innerHTML ="No aceptar la crítica";
                   document.querySelector("#li9").innerHTML ="Dificultades para decir que no";
                   document.querySelector("#li10").innerHTML ="No creer en los logros propios";
                   document.querySelector("#problema4").innerHTML ="Tipos de autoestima";
                   document.querySelector("#li11").innerHTML ="Autoestima alta y estable: Es con diferencia la autoestima a la que todos los mortales queremos llegar y la que tal vez la que más cueste alcanzar por la propia inestabilidad de la vida, de las emociones, de las circunstancias… pero más allá de lo que suceda fuera de nosotros, lo importante es lo que sucede en nuestro interior ya que eso nos hará reaccionar de una manera u otra y con una actitud determinada.";
                   document.querySelector("#li12").innerHTML ="Autoestima baja y estable: Sucede lo contrario con el tipo de autoestima baja y estable. Las personas que tienen una autoestima baja son personas que de manera estabilizada en el tiempo, sin importar que externamente se les favorezca o no, tienden a infravalorarse y mantienen un dialogo interno con mayor carga negativa. En este caso, la estabilidad hace que sean personas que en casi la totalidad de sus días tengan muy interiorizado el acto de que no dan la talla y no son auto-eficaces en aquello que hacen, puesto que siempre tienen el temor a fallar y hacerlo mal. Eso les lleva a tener un estado de ánimo apático y depresivo.";
                   document.querySelector("#li13").innerHTML ="Autoestima alta e inestable: Estas personas tienen de igual manera que las personas con un tipo de autoestima alta y estable, un concepto sobre ellas mismas adecuado valorando sus capacidades, fortalezas y debilidades. El inconveniente se refleja en la inestabilidad y en la imposibilidad que tienen de mantener su autoestima de manera estable en el tiempo, eso les lleva a encontrarse en situaciones que consideran amenazantes (posibilidad de vivir un fracaso) para su autoestima  y a ejecutar una respuesta agresiva o pasivo-agresiva.";
                   document.querySelector("#li14").innerHTML ="Autoestima baja e inestable: Completando las cuatro composiciones de tipos de autoestima en cuanto a alta-baja y estable-inestable… la autoestima baja e inestable es la menos favorecedora. En este polo, encontramos a personas con una autoestima que además de baja, fluctúa en el tiempo con inestabilidad, pudiendo experimentar pequeños momentos de satisfacción y de capacidad de logro pero que rápidamente se disminuye. Dichas personas en ocasiones son fácilmente influenciables y pueden tomar decisiones por agradar a las demás personas y así sentir aprecio. Es por ello, que pueden además, generar dependencia emocional.";
                   document.querySelector("#problema5").innerHTML ="Causas de la falta de autoestima";
                   document.querySelector("#problema6").innerHTML ="Las causas de una mala autoestima puede ser estancamiento en el tipo de vida que llevamos, sufrir algún tipo de trastorno emocional como depresión, ansiedad, algún tipo de fobia, problemas del sueño que alteren el ritmo de vida habitual.";
                   document.querySelector("#problema7").innerHTML ="Tips para mejorar tu autoestima";
                   document.querySelector("#li15").innerHTML ="Busca y encuentra el origen de tu baja autoestima. Como te diría un buen arquitecto, no se puede empezar la casa por el tejado, así que para poder mejorar tu autoestima, primero tendrás que encontrar el origen de todo. ¿Un consejo para ello? pregúntate por lo menos hasta en tres ocasiones el “¿por qué?” de tus miedos.";
                   document.querySelector("#li16").innerHTML ="Hazlo, inténtalo aunque puedas fracasar. El ser humano tiende a evitar y a no enfrentarse a lo que teme y le provoca miedo, esta es la salida más sencilla, rápida y fácil a corto plazo ya que elimina la ansiedad que la situación provoca.";
                   document.querySelector("#li17").innerHTML ="Sustituye tus objetivos por valores. A veces no conseguir objetivos muy marcados y deseados puede llevar a frustrarnos y a sentir que no valemos para nada, esto no pasa cuando son los valores y no los objetivos lo que marcan nuestra dirección en la vida. Vamos a verlo con un ejemplo concreto: imagínate que te estás preparando una oposición, llevas meses y meses estudiando y haciendo menos planes de ocio; en este caso tus valores son el esfuerzo, la perseverancia, la superación personal, la capacidad de sacrificio, la fuerza de voluntad y la responsabilidad entre otros.";

                   document.querySelector("#li18").innerHTML ="Identifica tus fortalezas. A día de hoy sabemos que todos y cada uno de nosotros nacemos con una serie de cualidades, características innatas o fortalezas que son nuestros puntos fuertes, son aquellas habilidades que se te dan especialmente bien, el problema viene cuando la persona con autoestima baja no cree que las tenga y además le cuesta muchísimo identificarlas.";
                   document.querySelector("#cite").innerHTML = "Video gracias a: Vida Práctica en YouTube";

                   //libreria de problema
                 document.querySelector("#auto1").innerHTML ="Autoestima y desarrollo personal";
                 document.querySelector("#auto2").innerHTML ="¿Qué es la falta de autoestima?";
                 document.querySelector("#auto3").innerHTML ="Sintomas de la baja autoestima";
                 document.querySelector("#auto4").innerHTML ="Tipos de autoestima";
                 document.querySelector("#auto5").innerHTML ="Causas de la baja autoestima";
                 document.querySelector("#auto6").innerHTML ="Tips para mejorar tu autoestima";

                 // footer
                 document.querySelector("#fo1").innerHTML = "Home"
                 document.querySelector("#fo2").innerHTML = "Sobre nosotros"
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
                    document.querySelector("#first-quote").innerHTML ="Self-esteem and personal development.";
                    document.querySelector("#second-quote").innerHTML ="What is lack of self-esteem?";
                    document.querySelector("#problema1").innerHTML ="When we talk about low self-esteem or lack of self-esteem, we refer to a self-esteem that does not allow the person to feel valuable or to have an objective judgment about himself. That is, low self-esteem is the negative evaluation of the self-concept, which makes the person feel inferior to others. A person with low self-esteem is a person who is not sure of himself, who constantly compares himself to others and who is afraid to say what he thinks or feels. Low self-esteem can be a precursor to disorders such as: depression, anxiety, eating disorders or others.";
                    document.querySelector("#problema2").innerHTML ="What are the signs or symptoms of low self-esteem?";
                    document.querySelector("#problema3").innerHTML ="Since self-esteem is a result of a person's self-esteem, the symptoms of low self-esteem tend to differ. However, there are characteristics that are common to all people with low self-esteem. Next, we tell you about some of them:";
                    document.querySelector("#li1").innerHTML ="Constantly comparing yourself to others";
                    document.querySelector("#li2").innerHTML ="Not feeling sure of oneself";
                    document.querySelector("#li3").innerHTML ="Being afraid to say what you feel or think";
                    document.querySelector("#li4").innerHTML ="Be afraid of being wrong";
                    document.querySelector("#li5").innerHTML ="Wanting to please others all the time";
                    document.querySelector("#li6").innerHTML ="Seek the constant approval of others";
                    document.querySelector("#li7").innerHTML ="Allow manipulation of others";
                    document.querySelector("#li8").innerHTML ="Not accept criticism";
                    document.querySelector("#li9").innerHTML ="Difficulty saying no";
                    document.querySelector("#li10").innerHTML ="Not believing in your own achievements";
                    document.querySelector("#problema4").innerHTML ="Types of self-esteem";
                    document.querySelector("#li11").innerHTML ="High and stable self-esteem: It is by far the self-esteem that all mortals want to reach and that which is perhaps the most difficult to achieve due to the very instability of life, of emotions, of circumstances... but beyond what happens outside of us, the important thing is what happens inside us since that will make us react in one way or another and with a certain attitude.";
                    document.querySelector("#li12").innerHTML ="Low and stable self-esteem: The opposite is true for the stable, low self-esteem type. People who have low self-esteem are people who, in a stabilized way over time, regardless of whether they are favored externally or not, tend to underestimate themselves and maintain an internal dialogue with a greater negative charge. In this case, stability means that they are people who in almost all their days have deeply internalized the act that they do not measure up and are not self-effective in what they do, since they are always afraid of failing and doing it wrong. This leads them to have an apathetic and depressive mood.";
                    document.querySelector("#li13").innerHTML ="High and unstable self-esteem: These people have, in the same way as people with a high and stable type of self-esteem, an adequate concept of themselves, valuing their abilities, strengths and weaknesses. The inconvenience is reflected in the instability and in the impossibility that they have of maintaining their self-esteem in a stable manner over time, which leads them to find themselves in situations that they consider threatening (possibility of experiencing failure) for their self-esteem and to execute an aggressive response or passive-aggressiv";
                    document.querySelector("#li14").innerHTML ="Low and unstable self-esteem. Completing the four compositions of self-esteem types in terms of high-low and stable-unstable… low and unstable self-esteem is the least flattering. In this pole, we find people with a self-esteem that, in addition to being low, fluctuates over time with instability, being able to experience small moments of satisfaction and ability to achieve, but which quickly decreases.These people are sometimes easily influenced and can make decisions to please other people and thus feel appreciated. That is why they can also generate emotional dependence.";
                    document.querySelector("#problema5").innerHTML ="Causes of low self-esteem";
                    document.querySelector("#problema6").innerHTML ="The causes of poor self-esteem can be stagnation in the type of life we lead, suffering from some type of emotional disorder such as depression, anxiety, some type of phobia, sleep problems that alter the usual rhythm of life.";
                    document.querySelector("#problema7").innerHTML ="Tips to improve your self-esteem";
                    document.querySelector("#li15").innerHTML ="Search and find the origin of your low self-esteem. As a good architect would tell you, you cannot start the house from the roof, so in order to improve your self-esteem, you will first have to find the origin of everything. Any advice for it? ask yourself at least three times the why?  of your fears";
                    document.querySelector("#li16").innerHTML ="Do it, try even if you may fail. The human being tends to avoid and not face what he fears and causes fear, this is the simplest, fastest and easiest way out in the short term since it eliminates the anxiety that the situation causes.";
                    document.querySelector("#li17").innerHTML ="Replace your goals with values Sometimes not achieving very marked and desired objectives can lead to frustration and to feeling that we are worthless, this does not happen when it is the values and not the objectives that mark our direction in life. Let's see it with a concrete example: imagine that you are preparing for an opposition, you have been studying for months and months and making fewer leisure plans; In this case, your values are effort, perseverance, self-improvement, the ability to sacrifice, willpower and responsibility, among others.";
                    document.querySelector("#li18").innerHTML ="Identify your strengths. Today we know that each and every one of us is born with a series of qualities, innate characteristics or strengths that are our strengths, they are those skills that you are especially good at, the problem comes when the person with low self-esteem does not believe that he has them and also it is very difficult for him to identify them.";
                    document.querySelector("#cite").innerHTML = "Video thanks to: Vida Practica on YouTube";
            
                     /*Parte de document querySelector en ingles*/
                   // footer
                    document.querySelector("#fo1").innerHTML = "Home" 
                    document.querySelector("#fo2").innerHTML = "About us"
                    document.querySelector("#fo3").innerHTML = "Psychologists"
                    document.querySelector("#fo4").innerHTML = "Help centers"
                    document.querySelector(".social-text").innerHTML = "Our social networks!"
                    //libreria de problema
                    document.querySelector("#auto1").innerHTML ="Self-esteem and personal development";
                    document.querySelector("#auto2").innerHTML ="What is lack of self-esteem?";
                    document.querySelector("#auto3").innerHTML ="Symptoms of low self esteem";
                    document.querySelector("#auto4").innerHTML ="Types of self-esteem";
                    document.querySelector("#auto5").innerHTML ="Causes of low self-esteem";
                    document.querySelector("#auto6").innerHTML ="Tips to improve your self-esteem";
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
                   document.querySelector("#first-quote").innerHTML ="Autoestima y desarrollo personal";
                   document.querySelector("#second-quote").innerHTML ="¿Qué es la falta de autoestima?";
                   document.querySelector("#problema1").innerHTML ="Cuando hablamos de baja autoestima o falta de autoestima, nos referimos a una autoestima que no permite a la persona sentirse valiosa o tener un juicio objetivo sobre ella misma. Es decir, la autoestima baja es la evaluación negativa del autoconcepto, lo cual hace que la persona se sienta inferior a los demás. Una persona con baja autoestima es una persona que no es segura de sí misma, que se compara constantemente con los demás y que tiene miedo a decir lo que piensa o siente. La autoestima baja puede ser un precursor de trastornos como: depresión, ansiedad, trastornos alimenticios u otros.";
                   document.querySelector("#problema2").innerHTML ="¿Cuales son los signos o sintomas de la baja autoestima?";
                   document.querySelector("#problema3").innerHTML ="Como la autoestima es resultado de la valoración que una persona tiene sobre ella misma, los síntomas de la baja autoestima tienden a diferir. Sin embargo, existen características que son comunes en todas las personas que tienen baja autoestima. A continuación, te contamos sobre algunas de ellas:";
                   document.querySelector("#li1").innerHTML ="Compararse constantemente con los demás";
                   document.querySelector("#li2").innerHTML ="No sentirse seguro/a de uno/a mismo/a";
                   document.querySelector("#li3").innerHTML ="Tener miedo a decir lo que siente o piensa";
                   document.querySelector("#li4").innerHTML ="Tener terror a equivocarse";
                   document.querySelector("#li5").innerHTML ="Querer complacer a los demás todo el tiempo";
                   document.querySelector("#li6").innerHTML ="Buscar la aprobación constante de los demás";
                   document.querySelector("#li7").innerHTML ="Permitir la manipulación de los demás";
                   document.querySelector("#li8").innerHTML ="No aceptar la crítica";
                   document.querySelector("#li9").innerHTML ="Dificultades para decir que no";
                   document.querySelector("#li10").innerHTML ="No creer en los logros propios";
                   document.querySelector("#problema4").innerHTML ="Tipos de autoestima";
                   document.querySelector("#li11").innerHTML ="Autoestima alta y estable: Es con diferencia la autoestima a la que todos los mortales queremos llegar y la que tal vez la que más cueste alcanzar por la propia inestabilidad de la vida, de las emociones, de las circunstancias… pero más allá de lo que suceda fuera de nosotros, lo importante es lo que sucede en nuestro interior ya que eso nos hará reaccionar de una manera u otra y con una actitud determinada.";
                   document.querySelector("#li12").innerHTML ="Autoestima baja y estable: Sucede lo contrario con el tipo de autoestima baja y estable. Las personas que tienen una autoestima baja son personas que de manera estabilizada en el tiempo, sin importar que externamente se les favorezca o no, tienden a infravalorarse y mantienen un dialogo interno con mayor carga negativa. En este caso, la estabilidad hace que sean personas que en casi la totalidad de sus días tengan muy interiorizado el acto de que no dan la talla y no son auto-eficaces en aquello que hacen, puesto que siempre tienen el temor a fallar y hacerlo mal. Eso les lleva a tener un estado de ánimo apático y depresivo.";
                   document.querySelector("#li13").innerHTML ="Autoestima alta e inestable: Estas personas tienen de igual manera que las personas con un tipo de autoestima alta y estable, un concepto sobre ellas mismas adecuado valorando sus capacidades, fortalezas y debilidades. El inconveniente se refleja en la inestabilidad y en la imposibilidad que tienen de mantener su autoestima de manera estable en el tiempo, eso les lleva a encontrarse en situaciones que consideran amenazantes (posibilidad de vivir un fracaso) para su autoestima  y a ejecutar una respuesta agresiva o pasivo-agresiva.";
                   document.querySelector("#li14").innerHTML ="Autoestima baja e inestable: Completando las cuatro composiciones de tipos de autoestima en cuanto a alta-baja y estable-inestable… la autoestima baja e inestable es la menos favorecedora. En este polo, encontramos a personas con una autoestima que además de baja, fluctúa en el tiempo con inestabilidad, pudiendo experimentar pequeños momentos de satisfacción y de capacidad de logro pero que rápidamente se disminuye. Dichas personas en ocasiones son fácilmente influenciables y pueden tomar decisiones por agradar a las demás personas y así sentir aprecio. Es por ello, que pueden además, generar dependencia emocional.";
                   document.querySelector("#problema5").innerHTML ="Causas de la falta de autoestima";
                   document.querySelector("#problema6").innerHTML ="Las causas de una mala autoestima puede ser estancamiento en el tipo de vida que llevamos, sufrir algún tipo de trastorno emocional como depresión, ansiedad, algún tipo de fobia, problemas del sueño que alteren el ritmo de vida habitual.";
                   document.querySelector("#problema7").innerHTML ="Tips para mejorar tu autoestima";
                   document.querySelector("#li15").innerHTML ="Busca y encuentra el origen de tu baja autoestima. Como te diría un buen arquitecto, no se puede empezar la casa por el tejado, así que para poder mejorar tu autoestima, primero tendrás que encontrar el origen de todo. ¿Un consejo para ello? pregúntate por lo menos hasta en tres ocasiones el “¿por qué?” de tus miedos.";
                   document.querySelector("#li16").innerHTML ="Hazlo, inténtalo aunque puedas fracasar. El ser humano tiende a evitar y a no enfrentarse a lo que teme y le provoca miedo, esta es la salida más sencilla, rápida y fácil a corto plazo ya que elimina la ansiedad que la situación provoca.";
                   document.querySelector("#li17").innerHTML ="Sustituye tus objetivos por valores. A veces no conseguir objetivos muy marcados y deseados puede llevar a frustrarnos y a sentir que no valemos para nada, esto no pasa cuando son los valores y no los objetivos lo que marcan nuestra dirección en la vida. Vamos a verlo con un ejemplo concreto: imagínate que te estás preparando una oposición, llevas meses y meses estudiando y haciendo menos planes de ocio; en este caso tus valores son el esfuerzo, la perseverancia, la superación personal, la capacidad de sacrificio, la fuerza de voluntad y la responsabilidad entre otros.";

                   document.querySelector("#li18").innerHTML ="Identifica tus fortalezas. A día de hoy sabemos que todos y cada uno de nosotros nacemos con una serie de cualidades, características innatas o fortalezas que son nuestros puntos fuertes, son aquellas habilidades que se te dan especialmente bien, el problema viene cuando la persona con autoestima baja no cree que las tenga y además le cuesta muchísimo identificarlas.";
                   document.querySelector("#cite").innerHTML = "Video gracias a: Vida Práctica en YouTube";

                   //libreria de problema
                 document.querySelector("#auto1").innerHTML ="Autoestima y desarrollo personal";
                 document.querySelector("#auto2").innerHTML ="¿Qué es la falta de autoestima?";
                 document.querySelector("#auto3").innerHTML ="Sintomas de la baja autoestima";
                 document.querySelector("#auto4").innerHTML ="Tipos de autoestima";
                 document.querySelector("#auto5").innerHTML ="Causas de la baja autoestima";
                 document.querySelector("#auto6").innerHTML ="Tips para mejorar tu autoestima";

                 // footer
                 document.querySelector("#fo1").innerHTML = "Home"
                 document.querySelector("#fo2").innerHTML = "Sobre nosotros"
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
        traducir(null, input )
       
    })