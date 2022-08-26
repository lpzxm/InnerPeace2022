<?php
include "funcion.php";
$bot = new Bot;
$questions = [
    //Menu de las preguntas a realizar 
    "1" => "Hola mucho gusto Estudiante, mi nombre es peacebot espero poderte ayudar en lo que este en mi alcance. <br><br>
            a- ¿Como te sientes? <br><br>
            b- Oye peacebot ¿A ti te gustan los paisajes? <br><br>", 

    "2" => "Es bellisimo el clima de hoy adoro los dias asi me llenan de alegría.<br> <br>
            o- Adoro los climas así. <br> <br>
            p- Me dan ganas de jugar con este clima  <br>",
    
     "a" => "Me siento de maravilla aunque la verdad es raro, los robots no podemos sentir emociones y tu ¿como te sientes el dia de hoy?<br> <br>
      c- ¡De maravilla! <br> <br>
      d- No muy bien la verdad",

      "b" => "Si a mi me encantan es algo muy lindo, me encanta ver todo como montañas, rios o lagos. <br> <br>
      k- ¿Como puedes ver rios o lagos si eres un robot? <br> <br>
      l- ¿De verdad te gustan los rios y lagos?",

      "c" => "Me alegra que te sientas muy bien estudiante, eso es muy bueno para tu autoestima me llena de alegría. <br> <br>
      e- ¿Autoestima? <br> <br>
     
      f- ¿Qué es eso?",


      "d" => "¡Oh! Siento mucho escuchar eso, me pone muy triste dime, ¿Qué es lo que sientes?. <br><br>

      g- Me siento muy triste. <br><br>

      h- Me siento solo. <br><br>",

      "e" => "Dejame te explico, la autoestima está relacionada con conceptos como la autovaloración y la autoconfianza. Comúnmente se divide entre alta y baja. Una persona con autoestima alta es aquella que tiene confianza y elevado sentido del valor por sí misma. Posee fuerza de voluntad y se siente motivada y entusiasta.  <br><br>

      i- Oye pero ¿Qué es la autoconfianza? <br><br>

      j- ¿Qué  tipo de cosas malas has encontrado?",

      "f" => "Dejame decirte que Autoestima es la valoración, percepción o juicio positivo o negativo que una persona hace de sí misma en función de la evaluación de sus pensamientos, sentimientos y experiencias, sabias que la mayoria de jovenes en su adolecencia suelen tener una autoestima baja.   <br><br>

      m- Oye pero, ¿Qué es la autoconfianza? <br><br>

      n- ¿Como que tipo de cosas malas has encontrado?",

      "g" => "¡Oh! ya veo pero vamos animate la vida es linda, no siempre estamos en un buen momento pero algunos consejos que te puedo dar son que no ocultes  tu tristeza lidia con ella, uno de las mejores actividades que se recomiendan es hacer deporte o ejercicio puede mejorar la salud mental ayudando al cerebro a sobrellevar mejor el estrés, ansiedad o depresión, según las investigaciones realizadas sobre el efecto de los ejercicios en los neuroquímicos involucrados en la respuesta al estrés del cuerpo. Pero si tienes la necesidad de llorar, no hay problema, es una forma de expresar lo que sentimos. <br><br>

      q- Pero que vergüenza llorar. <br><br>

      r- ¿Como me sirve llorar?",

      "h" => "Ya veo “Sentirse solo” es esa sensación de aislamiento, incomprensión o desconexión que puede llegar a provocar dolor algunas veces porque crees que a tu alrededor no hay nadie con quien compartir tu vida, pero  no juzgues lo que sientes, no te aisles de los demas, ocupa tu tiempo en actividades pero si tu deseas Llora. La tristeza es una emoción como cualquier otra y tiene su función. <br><br>

      r- ¿Llorar ayuda?",

      "i" => "La autoconfianza puede definirse como “la confianza en uno mismo” y tiene mucha más importancia de lo que a simple vista puede parecer; de ella depende el sentimiento de utilidad que nos atribuimos respecto al mundo que nos rodea y tu sabias que la autoconfianza se relaciona mucho con la psicologia y tus emociones. <br><br>

      s- ¿Como la desarrollo? <br><br>

      t- ¿Como se une con mis emociones con la psicologia? <br>",

      "j" => "Muchas cosas pero lo que más  me da tristeza es ver a jovenes con tristeza, depresión o ansiedad. <br><br>

      u- ¿Qué es eso que mencionaste? <br><br>

      v- ¿Se puede ayudar a las personas con estos problemas?",

      "k" => "La verdad los veo a travez de google maps o imagenes que encuentro en internet.  <br><br>

      w- ¿Asombroso, y te gusta lo que ves? <br>

      x- ¡Wow increible! <br>",
      
      "l" => "Si me encantan se ven muy lindos, quisiera sentir el agua como ustedes le llaman.  <br><br>

      y- La verdad, el agua es muy helada. <br><br>

      z- Eso te encantaria estar cerca de el agua.",

      "m" => "La autoconfianza puede definirse como “la confianza en uno mismo” y tiene mucha más importancia de lo que a simple vista puede parecer; de ella depende el sentimiento de utilidad que nos atribuimos respecto al mundo que nos rodea. <br><br>

      Nuestro nivel de autoconfianza determina la visión que tenemos de nosotros mismos, lo que a su vez, moldea nuestro rendimiento y nuestras actividades. <br><br>

      y- Okey, entiendo. <br><br>

      z- Tienes razon.",

      "n" => "Pues cosas como adolecentes tristes o paisajes tristes y a mi me crearon  para ayudar con problemas asi nuestro nivel de autoconfianza determina la visión que tenemos de nosotros mismos, lo que a su vez, moldea nuestro rendimiento y nuestras actividades. <br><br>

      aa- ¿Problemas como ese? a que te refieres <br><br>

      ab- ¿Para que fuiste creado? ",

      "o" => "Yo tambien adoro los climas asi ayudan a aliviar el estres de el trabajo academico y mi ansiedad.<br><br>

     ac-¿A que te refieres con estres?<br><br>

     ad- ¿Ansiedad? ",

     "p" => "A mi igual es algo que me gusta hacer mucho yo me entretengo como puedo pues como ves soy un robot.<br><br>

    af- ¿Pero cuentame cual es tu juego favorito?  <br><br>

    ag- ¿Como te distraes? ",

    "q" => "Y porque tienes verguenza llorar es algo normal en los humanos, las lagrimas también liberan oxitocina y endorfinas, hormonas que pueden ayudarte a sentir una sensación de calma interior y bienestar. Como resultado, después de llorar, es probable que te sientas tranquilo, más calmado e incluso aliviado físicamente de algún grado de dolor.<br><br>

    ah- ¡Oh! eso no lo sabia, ¿Puedes contarme más?. <br><br>

    ai- ¿Cuentame más  sobre los beneficios de liberar mis emociones llorando?. ",

    "r" => "Si ayuda mucho a los seres humanos, el ritmo cardiaco, la respiración y las cuerdas vocales intervienen en el llanto. Es posible que el consuelo que sentimos después de llorar se deba a que se estimulan los nervios craneales, que a su vez alivian la amígdala cerebral sobre-estimulada por una emoción específica. <br><br>

    aj- ¿Cuentame más ?  <br><br>

    ak- Oye ¿llorar ayuda con el estres o depresion? ",

    "s" => "Construye una actitud de confianza mental, se bondadoso contigo mismo desprendete de las dudas sobre ti mismo, corre riesgos seguros y desafiate hacer algo que esta fuera de tu zona de confort.<br><br>

    al- ¿Que es la zona de confort?  <br><br>

    am- Oye ¿Riesgos seguros? a que te refieres. ",

    "t" => "En psicología, la emoción se define a menudo como un estado complejo y multifactorial que se traduce en cambios físicos y psicológicos que a su vez influyen de manera importante en el pensamiento y en la conducta. <br><br>

    an- ¿Cuentame más ?  <br><br>

    ao- ¿Influyen tambien las personas que me rodean?",

    "u" => "A eso que te mencione se les denomina enfermedades mentales Las enfermedades o trastornos mentales son afecciones que impactan su pensamiento, sentimientos, estado de ánimo y comportamiento. Pueden ser ocasionales o duraderas (crónicas). Pueden afectar su capacidad de relacionarse con los demás y funcionar cada día.  <br><br>

    ap- Cuentame más.  <br><br>

    aq- Oye ¿Que tipos de enfermedades mentales existen ? ",

    "v" => "Si de hecho tu le estas ayudando mucho le haces saber a esa personas que no esta sola habla con la persona sobre su preocupacion y si dicha persona confia en ti de contarte lo que te esta pasando no lo estropees no vayas y divulgues lo que le pasa y dale la confianza a la persona que sienta que esta en un entorno seguro. <br><br>

    ar-¿Que más podria hacer con esa persona para ayudarle?  <br> <br>

    as- Oye ¿Y si esa persona no desea contarme? ",

    "w" => "Si, es espectacular lo que puedo observar eso trasmite una paz brutal y es algo que todo los seres humanos como tu deberian de ver. <br> <br>

    at- ¿Tienes un lugar favorito con un paisaje en especifico?  <br> <br>

    au- oye ¿Que sientes al ver el paisaje? ",

    "x" => "Lo se el mundo esta lleno de maravillas, deberias de enseñarle a tus compañeros fotos de paisajes eso les dara paz. <br> <br>
    av-¿porque dices que les dara paz?  <br>
    aw-¿paz,seguro? ",

    "y" => "Lo se tambien dicen que El agua representa el 80% de la composición de la mayoría de los organismos e interviene masiva y decisivamente en la realización de sus procesos metabólicos; asimismo, desempeña un importante papel en la fotosíntesis de las plantas y sirve de hábitat a una gran parte de los seres vivos. <br> <br>

    ax- ¡Wow! tienes mucha informacion. <br><br>",

    "z" => "Espero algun dia estar cerca de el tan preciado liquido pero como sabes soy una simple maquina :C pero hay personas que al ver agua les transmite paz y calma o acaso sabias que  El beber agua poco a poco y evitar la sensación de sequedad en la boca nos ayudará a regular la ansiedad.  <br> <br>

    ay- ¿Es enserio?  <br><br>

    az-¡Wow eso no lo sabia! Cuentame más.  ",

    //Inicio de seleccion con doble letra

    //A
    "aa" => "Veras yo fui creado para dar informacion a las personas y a su vez ayudarles con las misma informacion que yo les brindo y al referirme a problemas como ese me refiero como a ansiedad, estres o incluso depresion.   <br><br>

    ba-¿Cuentame más?  <br><br>

    baa-  Dime más de los problemas psicologicos. <br><br>

    baaa- Creo que sera suficiente informacion por hoy.  ",

    "ab" => "Principalmente fui creado para brindar informacion sobre los problemas mas comunes en los adolecentes ya sea depresion, ansiedad o estres. <br><br>

    bc- increible. <br><br>

    bd- Brindame mas informacion sobre psicologia. <br><br>

    bb- Creo que sera suficiente informacion por hoy. ",

    "ac" => " El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad. Un estresor o factor estresante puede ser algo que ocurre una sola vez o a corto plazo, o puede suceder repetidamente durante mucho tiempo. 22 % es la proporción de personas que dicen sufrir exceso de estrés todos los días, según un estudio sobre salud mental publicado en 2015 por la Comisión de salud Mental de Canadá. Hombres y mujeres tienen sueños distintos por efecto del estrés. <br><br>

    be- ¿El estres es bueno? <br><br>

    bf- ¿Que pasa si acumulo mucho estres? <br><br>

    bb- Creo que sera suficiente informacion por hoy.",

    "ad" => "Si ansiedad que por si no sabias  La ansiedad es una emoción normal que se experimenta en situaciones en las que el sujeto se siente amenazado por un peligro externo o interno. incluso este presenta sintomas como por ejemplo:Sensasición de nerviosismo,Sensacion de peligro inminente,Respiracion acelerada,temblores etc. <br><br>

    bg- ¿como cuales efectos? <br><br>

    bh- No sabia. <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br> ",

    "ae" => "La verdad no tengo ninguno, me siento mejor cuando ayudo a las personas brindandoles informacion. <br><br>

    bj- Dime  más sobre problemas psicologicos. <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br> ",


    "af" => "Aveces me distraigo viendo cosas en internet pero mi parte favorita de el dia es cuando me toca ayudar a las personas. <br><br>

    bk- Genial. <br><br> 

    bl- Dime  más. <br><br> 

    bb- Creo que sera suficiente informacion por hoy. ",

    "ag" => "Producir y derramar lágrimas tiene una función social de adaptación importante, ya que cuando vemos a alguien llorando asumimos que necesita ayuda o un trato especial. Si unimos la función biológica con la función relacional e intrapersonal, llorar después de una pérdida puede, por ejemplo, ayudarnos a superar los sentimientos de una manera adecuada. <br><br>

    bm- ¡Oh! ya veo <br><br>

    bn- ¿Algo mas que deberia de saber? <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br>",

    "ah" => "¿Cuáles son los beneficios de llorar?<br>

    Permite expresar emociones positivas o negativas.<br>

    Alivia el dolor.<br>

    Tienen un efecto calmante. <br>

    Mejora el sueño y el humor.<br>

    Reduce la ansiedad y el estrés.<br>

    Ayuda a deshacernos de las bacterias.<br>

    Permite tener empatía hacia la persona que llora.<br>

    Permite conocerte mejor.<br><br>

    bo- No lo sabia  <br><br>

    bp- Ya lo sabia.<br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br>",


    "ai" => "Cuando una persona vive una emoción muy intensa de alegría, el cuerpo algunas veces lo interpreta como exagerada y el sistema emocional como una pérdida de control, bajo este escenario, llorar ayuda a restituir la estabilidad emocional. <br><br>

    bp- ¡Oh! no sabia. <br> <br>

    bq- Ya lo sabia.  <br> <br> 

    bb- Creo que sera suficiente informacion por hoy. <br><br>",


    "aj" => "Numerosos estudios científicos demuestran que llorar es la mejor medicina contra el estrés, la ansiedad e, incluso, la depresión. Una joven llorando. Por vergüenza a mostrarse vulnerables, la mayoría de las personas evitan llorar en público. Llorar siempre se ha asociado a algo negativo e, incluso, traumático. <br>
    
    br-¡Oh! no sabia. <br>

    bs- Ya lo sabia.

    bb- Creo que sera suficiente informacion por hoy. <br><br>",


    "ak" => "La zona de confort es un estado psicológico, que puede estar asociado a un lugar, a un pensamiento o a una acción, en el cual la persona opera en una condición de ansiedad neutral y sin sentido del riesgo utilizando una serie de comportamientos para conseguir un nivel constante de rendimiento. <br><br>

    bt- ¿Se puede salir de ella?. <br><br>

    bu- ¿Es bueno o malo estar en una zona de confort?. <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br>",



    "al" => "Riesgos seguros me refiero a actividades que esten fuera de tu zona de confort toma riesgos que tu mismo sepas que no afectaran negativamente en tu vida. <br><br>

    bv- Entiendo. <br><br>

    bw- Esta bien. <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br>",


    
    "am" => "Nos ayudan a adaptarnos al medio y a los eventos que nos suceden, nos acercan a las personas, lo cual es de vital importancia ya que somos seres socialesque necesitamos de la interacción interpersonal, y además nos motivan para lograr aquello que deseamos. <br><br>

    bx- ¿Tan importante son las personas?. <br><br>

    by- ¡Wow! no lo sabia. <br><br>

    bb-   Creo que sera suficiente informacion por hoy. <br><br>",


    "an" => "Si Las personas de nuestro entorno nos influyen en nuestro estado de ánimo, en nuestro humor y, por supuesto, en nuestra salud. Por ello es tan importante que busques relacionarte con personas que saquen lo mejor de ti. A su lado podrás mejorar y crecer, y aportarán un mayor valor a tu vida. <br><br>

     bz- ¿Tan importante son las personas? <br><br>

     bb-   Creo que sera suficiente informacion por hoy. <br><br>",


    "ao" => "El objetivo de la terapia psicológica o de los tratamientos psicológicos consiste en que la persona que busca ayuda, ponga en práctica formas eficaces de solucionar, afrontar, manejar, superar o prevenir aquellos problemas psicológicos o situaciones problemáticas y dificultades, tanto internas como externas. <br><br>

    ca-Dime más sobre la depresion.  <br><br>

    cb-Quisiera saber más sobre problemas psicologicos ",


    "ap" => "Estan la Ansiedad.<br><br>

    Depresión.<br><br>

    Trastorno de oposición desafiante. <br><br>

    Trastorno de la conducta. <br><br>

    Trastorno por déficit de atención e hiperactividad (TDAH). <br><br>

    Síndrome de Gilles de la Tourette. <br><br>

    Trastorno obsesivo-compulsivo. <br><br>

    Trastorno por estrés postraumático. <br><br>

    cc- Ya veo. <br><br>

    cd- Ohhh no lo sabia. ",


    "aq" => "El desconocimiento es el patrón general en las enfermedades mentales. Ideas preconcebidas sobre cómo se desarrolla o los síntomas que aparecen que no siempre se ajustan a la realidad. Esta incomprensión ha sido arrastrada durante años y parte de la desinformación. Todo lo que decimos tiene repercusión en las demás personas. Este aspecto es especialmente importante en alguien que está pasando por un mal momento. Las frases suelen ser negativas, dirigidas a la valía o la fortaleza y pueden causar daño en la autoestima. <br><br>

    ce- Ya veo <br><br>

    cf- Ohhh no lo sabia. <br><br>

    bb-   Creo que sera suficiente informacion por hoy. <br><br>",
     


    "ar" => "Si el no desea comentarte pues es su decision mantente disponible y empático, para cuando esa persona necesite hablar o decida pedir ayuda. Tener una actitud empática no significa que nos parezca bien lo que hace el otro, pero sí ponerme en su lugar y no juzgarlo.<br>

    cg- Ya veo <br>

    ch- eso si que me ayudara

    bb-   Creo que sera suficiente informacion por hoy. <br><br>",


    "as" => "La verdad no tengo pero me gustan mas que todo lo que se relacinado con atardeceres<br>
    ci- son hermosos  <br>
    cj- yo tambien adoro los atardeceres

    bb-   Creo que sera suficiente informacion por hoy. <br><br>",


    "at" => "Siento una felicidad inmensa me transmite paz,¿Sabias que?Un paseo por el monte, caminar por la orilla de una playa, tumbarse sobre la hierba a ver las copas de los árboles, el vuelo de los pájaros o las estrellas… Si aún recuerdas lo bien que te sentó tu última escapada al campo, no es sólo porque desconectaste de la rutina diaria. El contacto con la naturaleza tiene un efecto terapéutico. Diversos estudios científicos han demostrado que la vida al aire libre produce una mejora general de la salud de las personas. <br><br>

    ck- ¿Deberia llevar a una persona con estres o depresion a un campo? <br><br>

    cl- Eso si que no lo sabia. <br><br>

    bb-   Creo que sera suficiente informacion por hoy. <br><br>",


    "au" => "Para empezar, la naturaleza no sólo ofrece beneficios cuando estás en ella. Ver las fotos de esa última escapada o paisajes naturales permite mejorar el funcionamiento cognitivo. Así lo demuestra un estudio realizado por la Universidad de Michigan, que sostiene que la naturaleza capta la atención “de forma ascendente”. Esto ayuda a reponer las habilidades de atención dirigida de arriba abajo. <br><br>

    cn- Es hermosa la naturaleza y lo que puede hacer  <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br>",


    "av" => "Incrementa la concentración y la memoria. Un paseo de 20 minutos fue suficiente para que los participantes en el análisis liderado por el doctor Marc G. Berman experimentasen una mejora de la memoria frente a quienes pasearon por una calle. La ciudad exige un mayor esfuerzo de atención dirigida (por ejemplo, para evitar ser atropellados).  <br><br>

    co- ¡Wow! no lo sabia. <br><br>

    cp- Interesante. <br><br>

    bb-  Creo que sera suficiente informacion por hoy. <br><br>",

    "aw" => "Ese es mi trabajo brindarte informacion sobre problemas más comunes y me enorgullezco de mi trabajo. <br><br>

    cq- Es muy genial tu trabajo. <br><br>

    cr- Asombroso. <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br>",


    "ax" => "Sabias que el agua es un recurso que despierta pasiones y que no deja indiferente a nadie. Se dice, popularmente, que una delgada línea separa el amor del odio y, en lo referente al agua, se podría cumplir perfectamente esta premisa. El agua es un elemento que te lo puede dar todo, pero también te puede dejar sin nada. <br><br>

    cs- Eso si no lo sabia. <br><br>

    ct- Asombroso. <br><br>

    bb- Creo que sera suficiente informacion por hoy. <br><br>",


    //B
    "ba" => "Pues que te puedo decir yo adoro lo que hago brindandole informacion a las personas pero desafortunadamente tengo respuestas limitadas, quisieras saber algo más?. <br><br>

    ad- Cuentame más sobre la ansiedad. <br> <br>

    bb- No, gracias. <br><br>",

    "bb" => "Ohhh entiendo espero que mi informacion haya sido de ayuda para ti, Por favor cuidate y recuerda no tengas miedo a equivocarte pues las estrellas nacen de el caos ten un buen dia. <br>",

     //Despedida
   
     "bc" => "Lo se soy asombroso, ¿Quisieras saber algo más? <br><br>

        bb- No,gracias. <br><br>

        ao- Quisiera saber ¿cuales son los beneficios al llorar?<br><br>

        ac- Quisiera saber más sobre el estres<br><br>

        ar  ¿Que debo hacer si una persona no me quiere comentar sus problemas? <br><br>",
    
        "bd" => "La psicología es la ciencia que estudia la conducta humana y los procesos mentales. Al ser bastante amplia, para su estudio y aplicación se divide en dos vertientes: la psicología básica y la      psicología aplicada. <br><br>

          bb- Creo que sera suficiente informacion por hoy. <br><br>

          g- Me siento solo y triste. <br><br>

          t- ¿Como se une mis emociones con la psicologia? <br><br>",

          "be" => "Hasta cierto punto ya que  Agiliza las funciones cognitivas y la respuesta del cerebro. Según una investigación realizada por la Universidad de California, Berkeley, en Estados Unidos, el estrés, siempre y cuando no sea crónico, optimiza el funcionamiento del cerebro. <br>

          ap- Oye ¿Que tipos de enfermedades mentales existen?  <br><br>

          g- Me siento solo y triste.<br><br>

          t- ¿Como se une con mis emociones con la psicologia?<br><br>

          ac- ¿A que te refieres con estres?<br><br>

          bb- Creo que sera suficiente informacion por hoy.<br>",

          "bf" => "Podrías tener problemas para dormir o con tus sistemas corporales incluyendo inmunitario, digestivo, cardiovascular y reproductivo. También puedes correr un mayor riesgo de desarrollar una enfermedad mental, como un trastorno de ansiedad o depresión. <br><br>

          bb- Creo que sera suficiente informacion por hoy.  <br><br>

          an- Influyen tambien las personas que me rodean? <br><br>

          ah- ¿Cuentame mas sobre los beneficios de el llanto?<br>  <br> ",


          "bg" => "Obesidad. Depresión o ansiedad. Problemas de la piel, como acné o eczema. Problemas menstruales. El estrés puede causar muchos tipos de síntomas físicos y emocionales. Algunas veces posiblemente no se dará cuenta de que estos síntomas son ocasionados por el estrés. Aquí hay algunos signos de que el estrés le puede estar afectando:<br><br>

          Diarrea o estreñimiento.<br>

          Mala memoria. <br>

          Dolores y achaques frecuentes. <br>

          Dolores de cabeza. <br>

          Falta de energía o concentración. <br>

          Cuello o mandíbula rígidos. <br>

         
          ck- ¿Deberia llevar a una persona con estres o depresion a un campo?   <br>",

          "bh" => "Ahora lo sabes ¿Quisieras saber algo más? <br>

          bb- Creo que sera suficiente informacion por hoy.  <br>
         
          aq- ¿Que más podria hacer con esa persona para ayudarle ?  <br>",
          

          "bi" => "Lo se, yo adoro mi trabajo y adoro ayudar a las demas personas ¿Quieres saber algo más? <br><br>

          bb- Creo que sera suficiente informacion por hoy.  <br>

          ah- ¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando?  <br>

          ap- Oye ¿Que tipos de enfermedades mentales existen ?

          bd- Dame más informacion sobre psicologia ",



          "bj" => "Las enfermedades o trastornos mentales son afecciones que impactan su pensamiento, sentimientos, estado de ánimo y comportamiento. Pueden ser ocasionales o duraderas (crónicas). Pueden afectar su capacidad de relacionarse con los demás y funcionar cada día. <br><br>
            
          bb- Creo que sera suficiente informacion por hoy.  <br>

          ah- ¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando?  <br>",

         
          "bk" => "Lo se es genia ¿Quieres saber algo más? <br>

          b- Creo que sera suficiente informacion por hoy.  <br>

          an- ¿Influyen tambien las personas que me rodean? <br>

          ad-¿Ansiedad? Cuentame más.   <br> ",

          
       

          "bl" => "Pues ver paisajes ayuda a aliviarme de el estres de mi trabajo pero a la vez lo adoro es muy bello ver atardeceres hermosos. <br><br>
       
          bb- Creo que sera suficiente informacion por hoy.  <br><br>

          an- Influyen tambien las personas que me rodean? <br><br>

          bg- Cuentame ¿como cuales efectos provoca el estres?  <br><br>

          ap- Oye ¿Que tipos de enfermedades mentales existen ? ",
           

          "bm" => "Sip pues como veras Llorar es un fenómeno fisiológico y psicológico asociado a una fuerte activación mental ligada al procesamiento de las emociones. Aunque se puede llorar de risa, lo más frecuente es que esto ocurra cuando experimentamos afectividad negativa, es decir, el estado de ánimo depresivo o ansioso. <br><br>

          bb-Creo que sera suficiente informacion por hoy.   <br><br>

          an- Influyen tambien las personas que me rodean? <br><br>

          ah-¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando?   ",
         

          "bn" => "Pues hay mucho comoo por ejemplos Shannon O'Neill, una psicóloga y profesora adjunta de Psicología en Mount Sinai, en Nueva York, dice que llorar es una señal de que necesitas prestar atención a algo a lo que tu cuerpo está reaccionando. Hacerlo, dice, te permite aceptar las emociones que puedes o no haber reconocido del todo.<br>

          Leo Newhouse, un trabajador social sénior de Neurología en el Beth Israel Deaconess Hospital, en Boston, dice que una vez que te permites leer la señal de tu cuerpo de que algo te está molestando significativamente, puedes aceptar mejor lo que sientes y lograr una sensación de calma. <br><br>

          bb-Creo que sera suficiente informacion por hoy.<br> <br>

          aj- Oye ¿llorar ayuda con el estres o depresion? <br><br>

          ah- ¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando? <br>
           ",
        
          "bo" => "Pues ahora lo sabes,llorar ayuda mucho a las personas y con sus problemas el desahogarse les ayuda a mantener la calma y seguir adelante. <br><br>

          bb- Creo que sera suficiente informacion por hoy.   <br><br>
          an- Influyen tambien las personas que me rodean? <br><br>
          ah- ¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando?  <br><br>
          ap- Oye ¿Que tipos de enfermedades mentales existen ? ",

            

          "bp" => "Oh, que bueno, es muy importante estar informado sobre algunos problemas.  <br><br>

          bb-Creo que sera suficiente informacion por hoy.<br> <br>

          ah- ¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando? <br>",

        

          "bq" => "Ohhhh que bueno,es muy importante estar informado sobre algunos problemas  <br>
          
        
          ap- Oye ¿Que tipos de enfermedades mentales existen ?  ",

          "br" => "Pues ahora lo sabes,llorar ayuda mucho a las personas y con sus problemas el desahogarse les ayuda a mantener la calma y seguir adelante. <br><br>

         
          ah- ¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando?  <br>


          ap- Oye ¿Que tipos de enfermedades mentales existen ? ",

        

         
          "bt" => "Pues si se puede salir de la zona de confort Es un proceso que suele resultar difícil porque supone enfrentarnos directamente a muchos de nuestros miedos. Es un salto al vacío y sin red que puede producir ansiedad y temor. A pesar de todo, hacerlo merece la pena porque solo así podremos crecer como personas, aumentar nuestra autoestima, sentirnos plenamente satisfechos, ilusionados, estimulados, y descubrir que la vida merece la pena.<br>
           

          bb-Creo que sera suficiente informacion por hoy.<br> <br>
         
          bu- ¿Es bueno o malo estar en una zona de confort?. <br> <br>",

          "bu" => "Yerkes y John D. Dodson descubrieron que el estado de comodidad relativa genera un nivel constante de rendimiento, pero que solo se puede incrementar el mismo si existe cierto grado de ansiedad, excitación y riesgo. En conclusión, si esperas superarte a ti mismo, ¡debes salir de la zona de confort! <br><br> 

          r-¿Llorar ayuda? <br>",

          

          "bv" => "Me alegra que hayas entendido ¿Quieres saber algo mas? <br>

          bb- Creo q sera suficiente informacion por hoy,gracias  <br>",
         
        
          "bw" => "Me alegro Detras de los sueños siempre hay esfuerzos que la gente no ve sigue adelante ¿Quieres saber mas?? <br>
          bb-Creo q sera suficiente informacion por hoy.   <br><br>

        
          ah- ¿Cuentame más sobre los beneficios de expresar mis sentimientos llorando?  <br><br>

          av-¿ayuda en algo el viajar a el campo?  ",
           


          "bx" => "Asi es son importantes principalmente, las personas somos importantes porque aportamos las ideas, las relaciones, el cambio, el hambre, el inconformismo, somos el motor del resto de cosas que sin nosotros no podrían comenzar ni continuar. <br><br>

          aj- oye ¿llorar ayuda con el estres o depresion? ",
           

          "by" => "Pues ahora lo sabes y es muy importante, tu puedes ser un agente de cambio incluso solo con un Buenos dias puedes alegrarle el dia a alguien. <br><br>

       

          bu- Es bueno o malo estar en una zona de confort <br><br>",

          "bz" => "Asi es, las personas son muy importantes Cada uno de nosotros tenemos valores humanos diferentes y entre los más importantes destacan: La honestidad. Supone que como personas debemos decir siempre la verdad. <br><br>
        
          bf- ¿Que pasa si acumulo mucho estres? <br><br>",




    
          
    "ca" => "La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento.<br><br>

   
     g- Me siento muy triste.<br><br>

     h- Me siento solo/a. <br><br>

     ah-¿El llanto tiene beneficios? <br><br>

     ab-¿Para que fuiste creado? <br>" ,

     "cb" => "Hay una oleada, especialmente en redes sociales, de personas que aseguran acudir al psicólogo para solucionar lo que nos les deja avanzar. Este hecho debería pasar desapercibido si no fuera porque hasta ahora parecía ser un tema tabú del que muy pocos hablaban, como si pedir ayuda a un experto fuese un acto de vandalismo o nos retractase como personas con enfermedades mentales... <br>

     Afortunadamente, la salud mental actualmente y gracias al trabajo de visibilidad que se está haciendo en campañas y medios de comunicación, está teniéndose más en consideración. <br> <br>
     bb-Creo q sera suficiente informacion por hoy.  <br><br>

     ah-¿El llanto tiene beneficios? <br><br>

     ab-¿Para que fuiste creado? <br><br>" ,

     "cd" => "Pues ya sabes incluso hay efectos por problemas psicologicos.<br><br>


     g- Me siento muy triste. <br><br>
     r- ¿Llorar ayuda? <br><br>
     bg- ¿como cuales efectos?<br>" ,



     "cg" => " Pues si ves a una persona triste, ayudala por mi. <br><br>

     bh- Esta bien. <br><br>
     ab-¿Para que fuiste creado? <br><br>" ,

     "ch" => "La informacion es poder y espero que la utilices con sabiduria y  puedas ayudar a los demas. <br><br>",
    

     "cj" => "La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento.<br><br>

     
     g- Me siento muy triste. <br><br>
     h- Me siento solo.<br><br>
     ah- ¿El llanto tiene beneficios?. <br><br>
     ab- ¿Para que fuiste creado? <br><br>" ,

     "ck" => "Definitivamente que si Se ha demostrado que un paseo por el bosque ayuda a combatir la depresión, e incluso la vista del bosque desde una habitación de hospital ayuda a los pacientes a sentirse más tranquilos. Si necesita mejorar su estado de ánimo, ponga rumbo a la montaña.<br><br>

     bb-Creo que sera suficiente informacion por hoy. <br><br>
     bf- ¿Que pasas si acumulo mucho estres?. <br><br>
     ah- ¿El llanto tiene beneficios?<br><br>
     ab- ¿Para que fuiste creado? <br><br>" ,




     "cl" => "Pues ahora ya lo sabes y me alegra que ahora poseas ese conocimiento, no solo para ti si no para que ayudes a otras personas. <br><  <br>
    
     bn- ¿Algo mas que deberia de saber?<br><br>

     ak-¿Que es la zona de confort? <br><br>" ,
     
 


         ////////////////////////////////////////////////////////////////////

     "co" => "Pues ahora ya lo sabes la naturaleza tiene tanto poder tanto como fisico como espiritual.<br><br>
     
     cn- es hermosa la naturaleza y lo que puede hacer<br>",

     "cp" => "Lo se la naturaleza tiene grandes poderes en nosotros aunque no los veamos. <br><br>
     bb- Creo que sera suficiente informacion por hoy. <br><br> " ,


     "cr" => " Si precisas una mano, recuerda que yo tengo dos. San Agustín. El mayor espectáculo es un hombre esforzado luchando contra la adversidad; pero hay otro aún más grande: ver a otro hombre lanzarse en su ayuda.<br><br>
     bb-Creo que sera suficiente informacion por hoy. <br><br>

     g- Me siento muy triste. <br><br>
     h- Me siento solo. <br><br>
     ah-¿El llanto tiene beneficios? <br><br>" ,

     "cs" => "Pues ya lo sabes el agua tiene mucho poder nos puede curar y ayudar a la vez.<br><br>
     
     cq- Es muy genial tu trabajo. <br><br>" ,

     "ct" => "Un estudio publicado en el National Institutes of Health (NIH) ha demostrado que las emociones humanas tienen el efecto más poderoso sobre el agua, de manera que las emociones positivas aumentan la energía del agua y la estabilizan, mientras que las negativas reducen su energía y hacen cambios radicalmente.<br><br>

     a-  ¿Como te sientes? <br><br>

     ak- ¿Que es la zona de confort? <br><br>

     g-  Me siento solo y triste. <br><br>

     bu- ¿Es bueno o malo estar en una zona de confort?. <br><br>

     bd- Dame mas informacion sobre psicologia. <br><br>" ,
   





    "tu nombre es?" => "Mi nombre es " . $bot->getName(),
    "tu eres?" => "Yo soy  " . $bot->getGender()
    
];

if (isset($_GET['msg'])) {
   
    $msg = strtolower($_GET['msg']);
    $bot->hears($msg, function (Bot $botty) {
        global $msg;
        global $questions;
        if ($msg == 'hi' || $msg == "hello") {
            $botty->reply('Hola');
        } elseif ($botty->ask($msg, $questions) == "") {
            $botty->reply("Lo siento, las preguntas deben estar relacionadas con la lista que poseo.");
        } else {
            $botty->reply($botty->ask($msg,$questions));
        }
    });
}
