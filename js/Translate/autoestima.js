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
                    /*Parte de document querySelector en Español*/
                   document.querySelector("#first-quote").innerHTML ="Self -esteem and personal development";
                   document.querySelector("#second-quote").innerHTML ="What is the lack of self -esteem?";
                   document.querySelector("#problema1").innerHTML ="When we talk about low self -esteem or lack of self -esteem, we refer to self-esteem that does not allow the person to feel valuable or have an objective judgment about herself. That is, low self-esteem is the negative evaluation of self-concept, which makes the person feel inferior to others.A person with low self -esteem is a person who is not sure of herself, who is constantly compared to others and is afraid of saying what she thinks or feels. Low self-esteem can be a precursor to disorders such as: depression, anxiety, eating disorders or others.";
                   document.querySelector("#problema2").innerHTML ="What are the signs or symptoms of low self -esteem?";
                   document.querySelector("#problema3").innerHTML ="As self-esteem is the result of the valuation that a person has over herself, the symptoms of low self-esteem tend to differ. However, there are characteristics that are common in all people who have low self-esteem. Next, we tell you about some of them:";
                   document.querySelector("#li1").innerHTML ="Constantly compare with others";
                   document.querySelector("#li2").innerHTML ="Do not feel safe one of themselves";
                   document.querySelector("#li3").innerHTML ="Be afraid of saying what he feels or thinks";
                   document.querySelector("#li4").innerHTML ="Terror";
                   document.querySelector("#li5").innerHTML ="Want to please others all the time";
                   document.querySelector("#li6").innerHTML ="Seek the constant approval of others";
                   document.querySelector("#li7").innerHTML ="Allow the manipulation of others";
                   document.querySelector("#li8").innerHTML ="Do not accept criticism";
                   document.querySelector("#li9").innerHTML ="Difficulties to say no";
                   document.querySelector("#li10").innerHTML ="No creer en los logros propios";
                   document.querySelector("#problema4").innerHTML ="Types of self -esteem";
                   document.querySelector("#li11").innerHTML ="High and stable self -esteem: it is by far the self-esteem that all mortals want. It happens outside us, the important thing is what happens inside us, since that will make us react in one way or another and with a certain attitude.";
                   document.querySelector("#li12").innerHTML ="Low and stable self -esteem: the opposite happens with the type of low and stable self -esteem.People who have low self -esteem are people who stabilized over time, regardless of whether they are favored or not, tend to undervalue and maintain an internal dialogue with greater negative load. In this case, stability makes them people who in almost all of their days have very internalized the act that they do not give the size and are not self-efficiency in what they do, since they always have the fear of failing and doing so wrong.That leads them to have an apathetic and depressive mood.";
                   document.querySelector("#li13").innerHTML ="High and unstable self -esteem: these people have, in the same way that people with a type of high and stable self -esteem, a concept of them appropriate, valuing their abilities, strengths and weaknesses.The disadvantage is reflected in the instability and impossibility of maintaining their self -esteem in a timepassive-agreesive.";
                   document.querySelector("#li14").innerHTML ="Low and unstable self-esteem: completing the four compositions of types of self-esteem in terms of high-low and stable low and unstable self-esteem is the least flattering.In this pole, we find people with self -esteem that, in addition to decline, fluctuates in time with instability, being able to experience small moments of satisfaction and capacity for achievement, but that quickly decreases.These people are sometimes easily influenced and can make decisions to please other people and feel appreciation.That is why, they can also generate emotional dependence.";
                   document.querySelector("#problema5").innerHTML ="Causes of the lack of self -esteem";
                   document.querySelector("#problema6").innerHTML ="The causes of bad self -esteem can be stagnation in the type of life we lead, suffer some kind of emotional disorder such as depression, anxiety, some type of phobia, sleep problems that alter the usual rhythm of life.";
                   document.querySelector("#problema7").innerHTML ="Tips to improve your self -esteem";
                   document.querySelector("#li15").innerHTML ="Find and find the origin of your low self -esteem.As a good architect would tell you, you can't start the house on the roof, so to improve your self -esteem, you will first have to find the origin of everything.A advice for this? Ask yourself at least up to three times the why of your fears.";
                   document.querySelector("#li16").innerHTML ="Do it, try it even if you can fail.The human being tends to avoid and not face what he fears and causes him fear, this is the simplest, fast and easy exit in the short term, since he eliminates the anxiety that the situation causes.";
                   document.querySelector("#li17").innerHTML ="Replace your objectives with values.Sometimes not to achieve very marked and desired objectives can lead us to frustrate us and feel that we are worthless, this does not happen when the values are and not the objectives that mark our direction in life.Let's see it with a specific example: imagine that you are preparing an opposition, you have been studying and less leisure plans for months and months;In this case your values are effort, perseverance, personal overcoming, sacrifice capacity, willpower and responsibility among others.";

                   document.querySelector("#li18").innerHTML ="Identify your strengths.Today we know that each and every one of us is born with a series of qualities, innate characteristics or strengths that are our strengths, are those skills that are given especially good, the problem comes when the person with low self-esteem does not believe that has them and it also costs you a lot to identify them.";
                   document.querySelector("#cite").innerHTML = "Video thanks to: practical life on YouTube";

                   //libreria de problema
                 document.querySelector("#auto1").innerHTML ="Self-esteem and personal development";
                 document.querySelector("#auto2").innerHTML ="What is the lack of self-esteem?";
                 document.querySelector("#auto3").innerHTML ="Symptoms of low self-esteem";
                 document.querySelector("#auto4").innerHTML ="Types of self-esteem";
                 document.querySelector("#auto5").innerHTML ="Causes of low self-esteem";
                 document.querySelector("#auto6").innerHTML ="Tips to improve your self-esteem";

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
                   /*Parte de document querySelector en Español*/
                   document.querySelector("#first-quote").innerHTML ="Autoestima y desarrollo personal";
                   document.querySelector("#second-quote").innerHTML ="¿Qué es la falta de autoestima?";
                   document.querySelector("#problema1").innerHTML ="Cuando hablamos de baja autoestima o falta de autoestima, nos referimos a una autoestima que no permite a la persona sentirse valiosa o tener un juicio objetivo sobre ella misma. Es decir, la autoestima baja es la evaluación negativa del autoconcepto, lo cual hace que la persona se sienta inferior a los demás. Una persona con baja autoestima es una persona que no es segura de sí misma, que se compara constantemente con los demás y que tiene miedo a decir lo que piensa o siente. La autoestima baja puede ser un precursor de trastornos como: depresión, ansiedad, trastornos alimenticios u otros.";
                   document.querySelector("#problema2").innerHTML ="¿Cuáles son los signos o síntomas de la baja autoestima?";
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
                   document.querySelector("#li11").innerHTML ="Autoestima alta y estable: Es con diferencia la autoestima a la que todos los mortales queremos llegar y la que tal vez la que más cueste alcanzar por la propia inestabilidad de la vida, de las emociones, de las circunstancias… pero más allá de lo que suceda fuera de nosotros, lo importante es lo que sucede en nuestro interior, ya que eso nos hará reaccionar de una manera u otra y con una actitud determinada.";
                   document.querySelector("#li12").innerHTML ="Autoestima baja y estable: Sucede lo contrario con el tipo de autoestima baja y estable. Las personas que tienen una autoestima baja son personas que de manera estabilizada en el tiempo, sin importar que externamente se les favorezca o no, tienden a infravalorarse y mantienen un diálogo interno con mayor carga negativa. En este caso, la estabilidad hace que sean personas que en casi la totalidad de sus días tengan muy interiorizado el acto de que no dan la talla y no son auto-eficaces en aquello que hacen, puesto que siempre tienen el temor a fallar y hacerlo mal. Eso les lleva a tener un estado de ánimo apático y depresivo.";
                   document.querySelector("#li13").innerHTML ="Autoestima alta e inestable: Estas personas tienen, de igual manera que las personas con un tipo de autoestima alta y estable, un concepto sobre ellas mismas adecuado, valorando sus capacidades, fortalezas y debilidades. El inconveniente se refleja en la inestabilidad y en la imposibilidad que tienen de mantener su autoestima de manera estable en el tiempo, eso les lleva a encontrarse en situaciones que consideran amenazantes (posibilidad de vivir un fracaso) para su autoestima y a ejecutar una respuesta agresiva o pasivo-agresiva.";
                   document.querySelector("#li14").innerHTML ="Autoestima baja e inestable: Completando las cuatro composiciones de tipos de autoestima en cuanto a alta-baja y estable-inestable… la autoestima baja e inestable es la menos favorecedora. En este polo, encontramos a personas con una autoestima que, además de baja, fluctúa en el tiempo con inestabilidad, pudiendo experimentar pequeños momentos de satisfacción y de capacidad de logro, pero que rápidamente se disminuye. Dichas personas en ocasiones son fácilmente influenciables y pueden tomar decisiones por agradar a las demás personas y así sentir aprecio. Es por ello, que pueden además, generar dependencia emocional.";
                   document.querySelector("#problema5").innerHTML ="Causas de la falta de autoestima";
                   document.querySelector("#problema6").innerHTML ="Las causas de una mala autoestima puede ser estancamiento en el tipo de vida que llevamos, sufrir algún tipo de trastorno emocional como depresión, ansiedad, algún tipo de fobia, problemas del sueño que alteren el ritmo de vida habitual.";
                   document.querySelector("#problema7").innerHTML ="Tips para mejorar tu autoestima";
                   document.querySelector("#li15").innerHTML ="Busca y encuentra el origen de tu baja autoestima. Como te diría un buen arquitecto, no se puede empezar la casa por el tejado, así que para poder mejorar tu autoestima, primero tendrás que encontrar el origen de todo. ¿Un consejo para ello?, pregúntate por lo menos hasta en tres ocasiones el “¿por qué?” de tus miedos.";
                   document.querySelector("#li16").innerHTML ="Hazlo, inténtalo aunque puedas fracasar. El ser humano tiende a evitar y a no enfrentarse a lo que teme y le provoca miedo, esta es la salida más sencilla, rápida y fácil a corto plazo, ya que elimina la ansiedad que la situación provoca.";
                   document.querySelector("#li17").innerHTML ="Sustituye tus objetivos por valores. A veces no conseguir objetivos muy marcados y deseados puede llevar a frustrarnos y a sentir que no valemos para nada, esto no pasa cuando son los valores y no los objetivos lo que marcan nuestra dirección en la vida. Vamos a verlo con un ejemplo concreto: imagínate que te estás preparando una oposición, llevas meses y meses estudiando y haciendo menos planes de ocio; en este caso tus valores son el esfuerzo, la perseverancia, la superación personal, la capacidad de sacrificio, la fuerza de voluntad y la responsabilidad entre otros.";

                   document.querySelector("#li18").innerHTML ="Identifica tus fortalezas. A día de hoy sabemos que todos y cada uno de nosotros nacemos con una serie de cualidades, características innatas o fortalezas que son nuestros puntos fuertes, son aquellas habilidades que se te dan especialmente bien, el problema viene cuando la persona con autoestima baja no cree que las tenga y además le cuesta muchísimo identificarlas.";
                   document.querySelector("#cite").innerHTML = "Video gracias a: Vida Práctica en YouTube";

                   //libreria de problema
                 document.querySelector("#auto1").innerHTML ="Autoestima y desarrollo personal";
                 document.querySelector("#auto2").innerHTML ="¿Qué es la falta de autoestima?";
                 document.querySelector("#auto3").innerHTML ="Síntomas  de la baja autoestima";
                 document.querySelector("#auto4").innerHTML ="Tipos de autoestima";
                 document.querySelector("#auto5").innerHTML ="Causas de la baja autoestima";
                 document.querySelector("#auto6").innerHTML ="Tips para mejorar tu autoestima";

                 // footer
                 document.querySelector("#fo1").innerHTML = "Inicio"
                 document.querySelector("#fo2").innerHTML = "Sobre nosotros"
                 document.querySelector("#fo3").innerHTML = "Psicologos"
                 document.querySelector("#fo4").innerHTML = "Centros de ayuda";
                 document.querySelector(".social-text").innerHTML = "¡Nuestras redes sociales!"
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
/*Parte de document querySelector en Español*/
                   document.querySelector("#first-quote").innerHTML ="Self -esteem and personal development";
                   document.querySelector("#second-quote").innerHTML ="What is the lack of self -esteem?";
                   document.querySelector("#problema1").innerHTML ="When we talk about low self -esteem or lack of self -esteem, we refer to self-esteem that does not allow the person to feel valuable or have an objective judgment about herself. That is, low self-esteem is the negative evaluation of self-concept, which makes the person feel inferior to others.A person with low self -esteem is a person who is not sure of herself, who is constantly compared to others and is afraid of saying what she thinks or feels. Low self-esteem can be a precursor to disorders such as: depression, anxiety, eating disorders or others.";
                   document.querySelector("#problema2").innerHTML ="What are the signs or symptoms of low self -esteem?";
                   document.querySelector("#problema3").innerHTML ="As self-esteem is the result of the valuation that a person has over herself, the symptoms of low self-esteem tend to differ. However, there are characteristics that are common in all people who have low self-esteem. Next, we tell you about some of them:";
                   document.querySelector("#li1").innerHTML ="Constantly compare with others";
                   document.querySelector("#li2").innerHTML ="Do not feel safe one of themselves";
                   document.querySelector("#li3").innerHTML ="Be afraid of saying what he feels or thinks";
                   document.querySelector("#li4").innerHTML ="Terror";
                   document.querySelector("#li5").innerHTML ="Want to please others all the time";
                   document.querySelector("#li6").innerHTML ="Seek the constant approval of others";
                   document.querySelector("#li7").innerHTML ="Allow the manipulation of others";
                   document.querySelector("#li8").innerHTML ="Do not accept criticism";
                   document.querySelector("#li9").innerHTML ="Difficulties to say no";
                   document.querySelector("#li10").innerHTML ="No creer en los logros propios";
                   document.querySelector("#problema4").innerHTML ="Types of self -esteem";
                   document.querySelector("#li11").innerHTML ="High and stable self -esteem: it is by far the self-esteem that all mortals want. It happens outside us, the important thing is what happens inside us, since that will make us react in one way or another and with a certain attitude.";
                   document.querySelector("#li12").innerHTML ="Low and stable self -esteem: the opposite happens with the type of low and stable self -esteem.People who have low self -esteem are people who stabilized over time, regardless of whether they are favored or not, tend to undervalue and maintain an internal dialogue with greater negative load. In this case, stability makes them people who in almost all of their days have very internalized the act that they do not give the size and are not self-efficiency in what they do, since they always have the fear of failing and doing so wrong.That leads them to have an apathetic and depressive mood.";
                   document.querySelector("#li13").innerHTML ="High and unstable self -esteem: these people have, in the same way that people with a type of high and stable self -esteem, a concept of them appropriate, valuing their abilities, strengths and weaknesses.The disadvantage is reflected in the instability and impossibility of maintaining their self -esteem in a timepassive-agreesive.";
                   document.querySelector("#li14").innerHTML ="Low and unstable self-esteem: completing the four compositions of types of self-esteem in terms of high-low and stable low and unstable self-esteem is the least flattering.In this pole, we find people with self -esteem that, in addition to decline, fluctuates in time with instability, being able to experience small moments of satisfaction and capacity for achievement, but that quickly decreases.These people are sometimes easily influenced and can make decisions to please other people and feel appreciation.That is why, they can also generate emotional dependence.";
                   document.querySelector("#problema5").innerHTML ="Causes of the lack of self -esteem";
                   document.querySelector("#problema6").innerHTML ="The causes of bad self -esteem can be stagnation in the type of life we lead, suffer some kind of emotional disorder such as depression, anxiety, some type of phobia, sleep problems that alter the usual rhythm of life.";
                   document.querySelector("#problema7").innerHTML ="Tips to improve your self -esteem";
                   document.querySelector("#li15").innerHTML ="Find and find the origin of your low self -esteem.As a good architect would tell you, you can't start the house on the roof, so to improve your self -esteem, you will first have to find the origin of everything.A advice for this? Ask yourself at least up to three times the why of your fears.";
                   document.querySelector("#li16").innerHTML ="Do it, try it even if you can fail.The human being tends to avoid and not face what he fears and causes him fear, this is the simplest, fast and easy exit in the short term, since he eliminates the anxiety that the situation causes.";
                   document.querySelector("#li17").innerHTML ="Replace your objectives with values.Sometimes not to achieve very marked and desired objectives can lead us to frustrate us and feel that we are worthless, this does not happen when the values are and not the objectives that mark our direction in life.Let's see it with a specific example: imagine that you are preparing an opposition, you have been studying and less leisure plans for months and months;In this case your values are effort, perseverance, personal overcoming, sacrifice capacity, willpower and responsibility among others.";

                   document.querySelector("#li18").innerHTML ="Identify your strengths.Today we know that each and every one of us is born with a series of qualities, innate characteristics or strengths that are our strengths, are those skills that are given especially good, the problem comes when the person with low self-esteem does not believe that has them and it also costs you a lot to identify them.";
                   document.querySelector("#cite").innerHTML = "Video thanks to: practical life on YouTube";

                   //libreria de problema
                 document.querySelector("#auto1").innerHTML ="Self-esteem and personal development";
                 document.querySelector("#auto2").innerHTML ="What is the lack of self-esteem?";
                 document.querySelector("#auto3").innerHTML ="Symptoms of low self-esteem";
                 document.querySelector("#auto4").innerHTML ="Types of self-esteem";
                 document.querySelector("#auto5").innerHTML ="Causes of low self-esteem";
                 document.querySelector("#auto6").innerHTML ="Tips to improve your self -esteem";

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
                                      /*Parte de document querySelector en Español*/
                                      document.querySelector("#first-quote").innerHTML ="Autoestima y desarrollo personal";
                                      document.querySelector("#second-quote").innerHTML ="¿Qué es la falta de autoestima?";
                                      document.querySelector("#problema1").innerHTML ="Cuando hablamos de baja autoestima o falta de autoestima, nos referimos a una autoestima que no permite a la persona sentirse valiosa o tener un juicio objetivo sobre ella misma. Es decir, la autoestima baja es la evaluación negativa del autoconcepto, lo cual hace que la persona se sienta inferior a los demás. Una persona con baja autoestima es una persona que no es segura de sí misma, que se compara constantemente con los demás y que tiene miedo a decir lo que piensa o siente. La autoestima baja puede ser un precursor de trastornos como: depresión, ansiedad, trastornos alimenticios u otros.";
                                      document.querySelector("#problema2").innerHTML ="¿Cuáles son los signos o síntomas de la baja autoestima?";
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
                                      document.querySelector("#li11").innerHTML ="Autoestima alta y estable: Es con diferencia la autoestima a la que todos los mortales queremos llegar y la que tal vez la que más cueste alcanzar por la propia inestabilidad de la vida, de las emociones, de las circunstancias… pero más allá de lo que suceda fuera de nosotros, lo importante es lo que sucede en nuestro interior, ya que eso nos hará reaccionar de una manera u otra y con una actitud determinada.";
                                      document.querySelector("#li12").innerHTML ="Autoestima baja y estable: Sucede lo contrario con el tipo de autoestima baja y estable. Las personas que tienen una autoestima baja son personas que de manera estabilizada en el tiempo, sin importar que externamente se les favorezca o no, tienden a infravalorarse y mantienen un diálogo interno con mayor carga negativa. En este caso, la estabilidad hace que sean personas que en casi la totalidad de sus días tengan muy interiorizado el acto de que no dan la talla y no son auto-eficaces en aquello que hacen, puesto que siempre tienen el temor a fallar y hacerlo mal. Eso les lleva a tener un estado de ánimo apático y depresivo.";
                                      document.querySelector("#li13").innerHTML ="Autoestima alta e inestable: Estas personas tienen, de igual manera que las personas con un tipo de autoestima alta y estable, un concepto sobre ellas mismas adecuado, valorando sus capacidades, fortalezas y debilidades. El inconveniente se refleja en la inestabilidad y en la imposibilidad que tienen de mantener su autoestima de manera estable en el tiempo, eso les lleva a encontrarse en situaciones que consideran amenazantes (posibilidad de vivir un fracaso) para su autoestima y a ejecutar una respuesta agresiva o pasivo-agresiva.";
                                      document.querySelector("#li14").innerHTML ="Autoestima baja e inestable: Completando las cuatro composiciones de tipos de autoestima en cuanto a alta-baja y estable-inestable… la autoestima baja e inestable es la menos favorecedora. En este polo, encontramos a personas con una autoestima que, además de baja, fluctúa en el tiempo con inestabilidad, pudiendo experimentar pequeños momentos de satisfacción y de capacidad de logro, pero que rápidamente se disminuye. Dichas personas en ocasiones son fácilmente influenciables y pueden tomar decisiones por agradar a las demás personas y así sentir aprecio. Es por ello, que pueden además, generar dependencia emocional.";
                                      document.querySelector("#problema5").innerHTML ="Causas de la falta de autoestima";
                                      document.querySelector("#problema6").innerHTML ="Las causas de una mala autoestima puede ser estancamiento en el tipo de vida que llevamos, sufrir algún tipo de trastorno emocional como depresión, ansiedad, algún tipo de fobia, problemas del sueño que alteren el ritmo de vida habitual.";
                                      document.querySelector("#problema7").innerHTML ="Tips para mejorar tu autoestima";
                                      document.querySelector("#li15").innerHTML ="Busca y encuentra el origen de tu baja autoestima. Como te diría un buen arquitecto, no se puede empezar la casa por el tejado, así que para poder mejorar tu autoestima, primero tendrás que encontrar el origen de todo. ¿Un consejo para ello?, pregúntate por lo menos hasta en tres ocasiones el “¿por qué?” de tus miedos.";
                                      document.querySelector("#li16").innerHTML ="Hazlo, inténtalo aunque puedas fracasar. El ser humano tiende a evitar y a no enfrentarse a lo que teme y le provoca miedo, esta es la salida más sencilla, rápida y fácil a corto plazo, ya que elimina la ansiedad que la situación provoca.";
                                      document.querySelector("#li17").innerHTML ="Sustituye tus objetivos por valores. A veces no conseguir objetivos muy marcados y deseados puede llevar a frustrarnos y a sentir que no valemos para nada, esto no pasa cuando son los valores y no los objetivos lo que marcan nuestra dirección en la vida. Vamos a verlo con un ejemplo concreto: imagínate que te estás preparando una oposición, llevas meses y meses estudiando y haciendo menos planes de ocio; en este caso tus valores son el esfuerzo, la perseverancia, la superación personal, la capacidad de sacrificio, la fuerza de voluntad y la responsabilidad entre otros.";
                   
                                      document.querySelector("#li18").innerHTML ="Identifica tus fortalezas. A día de hoy sabemos que todos y cada uno de nosotros nacemos con una serie de cualidades, características innatas o fortalezas que son nuestros puntos fuertes, son aquellas habilidades que se te dan especialmente bien, el problema viene cuando la persona con autoestima baja no cree que las tenga y además le cuesta muchísimo identificarlas.";
                                      document.querySelector("#cite").innerHTML = "Video gracias a: Vida Práctica en YouTube";
                   
                                      //libreria de problema
                                    document.querySelector("#auto1").innerHTML ="Autoestima y desarrollo personal";
                                    document.querySelector("#auto2").innerHTML ="¿Qué es la falta de autoestima?";
                                    document.querySelector("#auto3").innerHTML ="Síntomas  de la baja autoestima";
                                    document.querySelector("#auto4").innerHTML ="Tipos de autoestima";
                                    document.querySelector("#auto5").innerHTML ="Causas de la baja autoestima";
                                    document.querySelector("#auto6").innerHTML ="Tips para mejorar tu autoestima";
                   
                                    // footer
                                    document.querySelector("#fo1").innerHTML = "Inicio"
                                    document.querySelector("#fo2").innerHTML = "Sobre nosotros"
                                    document.querySelector("#fo3").innerHTML = "Psicologos"
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