<?php
include "Bot.php";
$bot = new Bot;
$questions = [
    //Menu de las preguntas a realizar 
    "1" => "Hola mucho gusto amig@ mi nombre es peacebot espero poderte ayudar en lo que este en mi alcance. <br>
            a-¿Como te sientes? <br>
            b- Oye peacebot ¿A ti te gustan los paisajes? ",

    "2" => "Es bellisimo el clima de hoy adoro los dias asi me llenan de alegria<br>
            o-Adoro los climas asi <br>
            p-Me dan ganas de jugar con este clima",
    
     "a" => "Me siento de maravilla aunque la verdad es raro, los robots no podemos sentir emociones y tu ¿como te sientes el dia de hoy? <br>
      c-¡De maravilla! <br>
      d- No muy bien la verdad",

      "b" => "Si a mi me encantan es algo muy bello me encanta ver todo ya sea montañas,rios o lagos <br>
      k-¿Como puedes ver rios o lagos si eres un robot? <br>
      l- ¿De verdad te gustan los rios y lagos?",

      "c" => "Me alegra que te sientas muy bien amig@ eso es muy bueno para tu atoestima me llena de alegria  <br>
      e-¿autoestima? <br>
      f-¿Que es eso?",

      "d" => "Ohhhhh lo siento al escuchar eso,me pone muy triste dime ¿que es lo que sientes?   <br>
      g-Me siento muy triste<br>
      h-Me siento solo",

      "e" => "Dejame te explico,La autoestima está relacionada con conceptos como la autovaloración y la autoconfianza. Comúnmente se divide entre alta y baja. Una persona con autoestima alta es aquella que tiene confianza y elevado sentido del valor por sí misma. Posee fuerza de voluntad y se siente motivada y entusiasta.  <br>
      i-Oye pero ¿Que es la autoconfianza? <br>
      j-¿Como que tipo de cosas malas has encontrado?",

      "f" => "Dejame decirte que Autoestima es la valoración, percepción o juicio positivo o negativo que una persona hace de sí misma en función de la evaluación de sus pensamientos, sentimientos y experiencias y sabias que la mayoria de jovenes en su adolecencia suelen tener una autoestima baja.   <br>
      m-Oye pero ¿Que es la autoconfianza? <br>
      n-¿Como que tipo de cosas malas has encontrado?",

      "g" => "Ohhh ya veo pero vamos animate la vida es bella algunos consejos que te puedo dar son que no niegues con tu tristeza lidia con ella,Haz deporte eso funciona te lo recomiento pero si es necesario tu llora eso ayuda mucho no tengas miedo<br>
      q-Pero que verguenza llorar <br>
      r-¿Llorar ayuda?",

      "h" => "Ya veo “Sentirse solo” es esa sensación de aislamiento, incomprensión o desconexión que puede llegar a provocar dolor algunas veces porque crees que a tu alrededor no hay nadie con quien compartir tu vida oye no juzgues lo que sientes,no te aiseles de los demas,ocupa tu tiempo en actividades pero si tu deseas Llora si te apetece. La tristeza es una emoción como cualquier otra y tiene su función <br>
      q-Pero que verguenza llorar <br>
      r-¿Llorar ayuda?",

      "i" => "La autoconfianza puede definirse como “la confianza en uno mismo” y tiene mucha más importancia de lo que a simple vista puede parecer; de ella depende el sentimiento de utilidad que nos atribuimos respecto al mundo que nos rodea y tu sabias que la autoconfianza se relaciona mucho con la psicologia y tus emociones <br>
      s-¿Como la desarrollo? <br>
      t-¿Como se une con mis emociones  con la psicologia?",

      "j" => "Muchas cosas pero lo que mas me da tristeza es ver a jovenes con tristeza,depresion o ansiedad <br>
      u-¿Que es eso que mencionaste? <br>
      v-¿Se puede ayudar a ese tipo de personas con dichos problemas?",

      "k" => "La verdad los veo a travez de google maps o imagenes que encuentro en internet  <br>
      w-¿Asombroso,y te gusta lo que ves? <br>
      x-Wow increible",
      
      "l" => "Si me encantan se ven muy bellos quisiera sentir el agua como ustedes le llaman  <br>
      y-oye Es frio la verdad el agua  <br>
      z-eso Te encantaria estar cerca de el agua ",

      "m" => "La autoconfianza puede definirse como “la confianza en uno mismo” y tiene mucha más importancia de lo que a simple vista puede parecer; de ella depende el sentimiento de utilidad que nos atribuimos respecto al mundo que nos rodea.

      Nuestro nivel de autoconfianza determina la visión que tenemos de nosotros mismos, lo que a su vez, moldea nuestro rendimiento y nuestras actividades. <br>
      y-oye Es frio la verdad el agua  <br>
      z-es Te encantaria estar cerca de el agua ",

      //Doble numero en las respuestas    

      "n" => "Pues cosas como adolecentes tristes o paisajes tristes y la verdad yo fui creado para ayudar con problemas asi
       Nuestro nivel de autoconfianza determina la visión que tenemos de nosotros mismos, lo que a su vez, moldea nuestro rendimiento y nuestras actividades. <br>
      aa-¿problemas como ese? a que te refieres <br>
      ab-¿Para que fuiste creado? ",

      "o" => "Yo tambien adoro los climas asi ayudan a aliviar el estres de el trabajo y mi ansiedad<br>
     ac-¿A que te refieres con estres?<br>
     ad-¿Ansiedad? ",

     "p" => "A mi igual es algo que me gusta hacer mucho yo me entretengo como puedo pues como ves soy un robot<br>
    ae-¿Cual es tu juego favorito?  <br>
    af-¿Como te distraes? ",

    "q" => "Y porque tienes verguenza llorar es algo normal en los humanos las lagrimas también liberan oxitocina y endorfinas, hormonas que pueden ayudarte a sentir una sensación de calma interior y bienestar. Como resultado, después de llorar, es probable que te sientas tranquilo, más calmado e incluso aliviado físicamente de algún grado de dolor.<br>
    ag-¿Ohhhhh eso no lo sabia cuentame mas?  <br>
    ah-¿Cuentame mas sobre los beneficios de el llanto ? ",

    "r" => "Si ayuda mucho a los seres humanos El ritmo cardiaco, la respiración y las cuerdas vocales intervienen en el llanto. Es posible que el consuelo que sentimos después de llorar se deba a que se estimulan los nervios craneales, que a su vez alivian la amígdala cerebral sobre-estimulada por una emoción específica. <br>
    ai-¿Cuentame mas?  <br>
    aj-oye ¿llorar ayuda con el estres o depresion? ",

    "s" => "Construye una actitud de confianza mental,se bondadoso contigo mismo desprendete de las udas sobre ti msmo,corre riesgos seguros y Desafiate a hacer algo que esta fuera de tu zona de confort habitual<br>
    ak-¿Que es la zona de confort?  <br>
    al-oye ¿Riesgos seguros? a que te refieres ",

    "t" => "En psicología, la emoción se define a menudo como un estado complejo y multifactorial que se traduce en cambios físicos y psicológicos que a su vez influyen de manera importante en el pensamiento y en la conducta. <br>
    am-¿Cuentame mas?  <br>
    an- Influyen tambien las personas que me rodean?",

    "u" => "A eso que te mencione se les denomina enfermedades mentales Las enfermedades o trastornos mentales son afecciones que impactan su pensamiento, sentimientos, estado de ánimo y comportamiento. Pueden ser ocasionales o duraderas (crónicas). Pueden afectar su capacidad de relacionarse con los demás y funcionar cada día.  <br>
    ao-Cuentame mas  <br>
    ap-oye ¿Que tipos de enfermedades mentales existen ? ",

    "v" => "Si de hecho tu le estas ayudando mucho le haces saber a esa personas que no esta sola Habla con la persona sobre su preocupacion y si dicha persona confia en ti de contarte lo que te esta pasando no lo estropees no vayas y divulgues lo que le pasa y dale la confianza a la persona que sienta que esta en un entorno seguro <br>
    aq-¿Que mas podria hacer con esa persona para ayudarle ?  <br>
    ar-oye ¿Y si esa persona no desea contarme? ",

    "w" => "Si, es espectacular lo que puedo observar eso trasmite una paz brutal y es algo que todo los seres humanos como tu deberian de ver <br>
    as-¿Tienes un lugar favorito con un paisaje en especifico?  <br>
    at-oye ¿Que sientes al ver el paisaje? ",

    "x" => "Lo se el mundo esta lleno de maravillas,deberias de enseñarle a tus compañeros fotos de paisajes eso les dara paz <br>
    au-¿porque dices que les dara paz?  <br>
    av-¿paz,seguro? 
    bb-Creo q sera suficiente informacion por hoy  ",

    "y" => "Lo se tambien dicen que El agua representa el 80% de la composición de la mayoría de los organismos e interviene masiva y decisivamente en la realización de sus procesos metabólicos; asimismo, desempeña un importante papel en la fotosíntesis de las plantas y sirve de hábitat a una gran parte de los seres vivos. <br>
     aw-Wow tienes mucha informacion   <br>
     bb-Creo q sera suficiente informacion por hoy  ",

    "z" => "Espero algun dia estar cerca de el tan preciado liquido pero como sabes soy una simple maquina :C pero hay personas que al ver agua les transmite paz y calma o acaso sabias que  El beber agua poco a poco y evitar la sensación de sequedad en la boca nos ayudará a regular la ansiedad.  <br>
     ax-Espero asi sea  <br>
     bb-Creo q sera suficiente informacion por hoy  ",







    //Inicio de seleccion con doble letra




    //A
    "aa" => "Veras yo fui creado para dar informacion a las personas y a su vez ayudarles con las misma informacion que yo les brindo y al referirme a problemas como ese me refiero como a ansiedad,estres o incluso depresion   <br>
    ba-¿Cuentame mas?  <br>
    bb- dime mas de los problemas psicologicos 
    bb-Creo q sera suficiente informacion por hoy   ",

    "ab" => "Principalmente fui creado para brindar informacion sobre los problemas mas comunes en los adolecentes ya sea depresion,ansiedad o estres  <br>
    bc- increible  <br>
    bd- dame mas informacion sobre psicologia 
    bb-Creo q sera suficiente informacion por hoy  ",

    "ac" => "Pues a el estres en si El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad. Un estresor o factor estresante puede ser algo que ocurre una sola vez o a corto plazo, o puede suceder repetidamente durante mucho tiempo. 22 % es la proporción de personas que dicen sufrir exceso de estrés todos los días, según un estudio sobre salud mental publicado en 2015 por la Comisión de Salud Mental de Canadá.
    Hombres y mujeres tienen sueños distintos por efecto del estrés. <br>
    be- ¿El estres es bueno? <br>
    bf- ¿Que pasa si acumulo mucho estres? 
    bb-Creo q sera suficiente informacion por hoy  ",

    "ad" => "Si ansiedad que por si no sabias  La ansiedad es una emoción normal que se experimenta en situaciones en las que el sujeto se siente amenazado por un peligro externo o interno. incluso este presenta sintomas como por ejemplo:Sensasición de nerviosismo,Sensacion de peligro inminente,Respiracion acelerada,temblores etc
    Hombres y mujeres tienen sueños distintos por efecto del estrés. <br>
    bg- ¿como cuales efectos? <br>
    bh-no sabia
    bb-Creo q sera suficiente informacion por hoy  ",

    "ae" => "La verdad no tengo ninguno, me siento mejor cuando ayudo a las personas brindandoles inforamacion  <br>
    bi- que bueno <br>
    bj- dime mas sobre problemas psicologicos
    bb-Creo q sera suficiente informacion por hoy   ",


    "af" => "Aveces me distraigo viendo cosas en internet pero mi parte favorita de el dia es cuando me toca aydar a las personas  <br>
    bk- genial  <br>
    bl- dime mas 
    bb-Creo q sera suficiente informacion por hoy  ",

    "ag" => "Producir y derramar lágrimas tiene una función social de adaptación importante, ya que cuando vemos a alguien llorando asumimos que necesita ayuda o un trato especial. Si unimos la función biológica con la función relacional e intrapersonal, llorar después de una pérdida puede, por ejemplo, ayudarnos a superar los sentimientos de una manera adecuada. <br>
    bm- ohhhhh ya veo <br>
    bn- ¿Algo mas que deberia de saber?
    bb-Creo q sera suficiente informacion por hoy  ",

    "ah" => "¿Cuáles son los beneficios de llorar?
    Permite expresar emociones positivas o negativas.
    Alivia el dolor.
    Tienen un efecto calmante.
    Mejora el sueño y el humor.
    Reduce la ansiedad y el estrés.
    Ayuda a deshacernos de las bacterias.
    Permite tener empatía hacia la persona que llora.
    Permite conocerte mejor.<br>
    bo-No lo sabia  <br>
    bp- Ya lo saba 
    bb-Creo q sera suficiente informacion por hoy  ",

    "ai" => "Cuando una persona vive una emoción muy intensa de alegría, el cuerpo algunas veces lo interpreta como exagerada y el sistema emocional como una pérdida de control, bajo este escenario, llorar ayuda a restituir la estabilidad emocional. <br>
    bp- ohhhh no lo sabia <br>
    bq- ya lo sabia 
    bb-Creo q sera suficiente informacion por hoy  ",

    "aj" => "Numerosos estudios científicos demuestran que llorar es la mejor medicina contra el estrés, la ansiedad e, incluso, la depresión. Una joven llorando. Por vergüenza a mostrarse vulnerables, la mayoría de las personas evitan llorar en público. Llorar siempre se ha asociado a algo negativo e, incluso, traumático. <br>
    br- ohhhh no lo sabia <br>
    bs- ya lo sabia  
    bb-Creo q sera suficiente informacion por hoy   ",

    "ak" => "La zona de confort es un estado psicológico, que puede estar asociado a un lugar, a un pensamiento o a una acción, en el cual la persona opera en una condición de ansiedad neutral y sin sentido del riesgo utilizando una serie de comportamientos para conseguir un nivel constante de rendimiento. <br>
    bt- se puede salir de ella?  <br>
    bu- ¿es bueno o malo estar en una zona de confort?
    bb-Creo q sera suficiente informacion por hoy  ",


    "al" => "Riesgos seguros me refiero a actividades que esten fuera de tu zona de confort toma riesgos que tu mismo sepas que no afectaran negativamente en tu vida <br>
    bv- entiendo <br>
    bw- esta bien
    bb-Creo q sera suficiente informacion por hoy   ",

    
    "am" => "Nos ayudan a adaptarnos al medio y a los eventos que nos suceden, nos acercan a las personas, lo cual es de vital importancia ya que somos seres socialesque necesitamos de la interacción interpersonal, y además nos motivan para lograr aquello que deseamos. <br>
    bx- ¿tan importante son las personas? <br>
    by- wow no lo sabia 
    bb-Creo q sera suficiente informacion por hoy   ",


    "an" => "Si Las personas de nuestro entorno nos influyen en nuestro estado de ánimo, en nuestro humor y, por supuesto, en nuestra salud. Por ello es tan importante que busques relacionarte con personas que saquen lo mejor de ti. A su lado podrás mejorar y crecer, y aportarán un mayor valor a tu vida. <br>
     bz- ¿tan importante son las personas? <br>
     bb-Creo q sera suficiente informacion por hoy   ",


    "ao" => "El objetivo de la terapia psicológica o de los tratamientos psicológicos consiste en que la persona que busca ayuda, ponga en práctica formas eficaces de solucionar, afrontar, manejar, superar o prevenir aquellos problemas psicológicos o situaciones problemáticas y dificultades, tanto internas como externas, que hacen . <br>
    ca-Dime mas sobre la depresion  <br>
    cb-Quisiera saber mas sobre problemas psicologicos ",


    "ap" => "Estan la Ansiedad.
    Depresión.
    Trastorno de oposición desafiante.
    Trastorno de la conducta.
    Trastorno por déficit de atención e hiperactividad (TDAH)
    Síndrome de Gilles de la Tourette.
    Trastorno obsesivo-compulsivo.
    Trastorno por estrés postraumático. <br>
    cc-Ya veo <br>
    cd- Ohhh no lo sabia ",


    "aq" => "Infórmate El desconocimiento es el patrón general en las enfermedades mentales. Ideas preconcebidas sobre cómo se desarrolla o los síntomas que aparecen que no siempre se ajustan a la realidad. Esta incomprensión ha sido arrastrada durante años y parte de la desinformación. Todo lo que decimos tiene repercusión en las demás personas. Este aspecto es especialmente importante en alguien que está pasando por un mal momento. Las frases suelen ser negativas, dirigidas a la valía o la fortaleza y pueden causar daño en la autoestima. <br>
    ce-Ya veo <br>
    cf-Ohhh no lo sabia
    bb-Creo q sera suficiente informacion por hoy   ",


    "ar" => "Si el no desea comentarte pues es su decision mantente disponible y empático, para cuando esa persona necesite hablar o decida pedir ayuda. Tener una actitud empática no significa que nos parezca bien lo que hace el otro, pero sí ponerme en su lugar y no juzgarlo.<br>
    cg- Ya veo <br>
    ch- eso si que me ayudara
    bb-Creo q sera suficiente informacion por hoy    ",


    "as" => "La verdad no tengo pero me gustan mas que todo lo que se relacinado con atardeceres<br>
    ci- son hermosos  <br>
    cj- yo tambien adoro los atardeceres
    bb-Creo q sera suficiente informacion por hoy   ",


    "at" => "Siento una felicidad inmensa me transmite paz,¿Sabias que?Un paseo por el monte, caminar por la orilla de una playa, tumbarse sobre la hierba a ver las copas de los árboles, el vuelo de los pájaros o las estrellas… Si aún recuerdas lo bien que te sentó tu última escapada al campo, no es sólo porque desconectaste de la rutina diaria. El contacto con la naturaleza tiene un efecto terapéutico. Diversos estudios científicos han demostrado que la vida al aire libre produce una mejora general de la salud de las personas. <br>
    ck- ¿Deberia llevar a una persona con estres o depresion a un campo? <br>
    cl- Eso si que no lo sabia
    bb-Creo q sera suficiente informacion por hoy  ",


    "au" => "Para empezar, la naturaleza no sólo ofrece beneficios cuando estás en ella. Ver las fotos de esa última escapada o paisajes naturales permite mejorar el funcionamiento cognitivo. Así lo demuestra un estudio realizado por la Universidad de Michigan, que sostiene que la naturaleza capta la atención “de forma ascendente”. Esto ayuda a reponer las habilidades de atención dirigida de arriba abajo.  <br>
    cn- es hermosa la naturaleza y lo que puede hacer  <br>
    bb-Creo q sera suficiente informacion por hoy  ",


    "av" => "Incrementa la concentración y la memoria. Un paseo de 20 minutos fue suficiente para que los participantes en el análisis liderado por el doctor Marc G. Berman experimentasen una mejora de la memoria frente a quienes pasearon por una calle. La ciudad exige un mayor esfuerzo de atención dirigida (por ejemplo, para evitar ser atropellados).  <br>
    co- wow no lo sabia <br>
    cp- interesante 
    bb-Creo q sera suficiente informacion por hoy  ",


    "aw" => "Ese es mi trabajo brindarte informacion sobre problemas mas comunes y me enorgullezco de mi trabajo <br>
    cq- es muy genial tu trabajo <br>
    cr- asombroso 
    bb-Creo q sera suficiente informacion por hoy  ",


    "ax" => "Sabias que El agua es un recurso que despierta pasiones y que no deja indiferente a nadie. Se dice, popularmente, que una delgada línea separa el amor del odio y, en lo referente al agua, se podría cumplir perfectamente esta premisa. El agua es un elemento que te lo puede dar todo, pero también te puede dejar sin nada.5 <br>
    cs- eso si no lo sabia <br>
    ct- asombroso
    bb-Creo q sera suficiente informacion por hoy   ",


    //B
    "ba" => "Pues que te puedo decir yo adoro lo que hago brindandole informacion a las personas pero desafortunadamente tengo respuestas limitadas :c quisieras saber algo mas?  <br>
    ad-Cuentame mas sobre la ansiedad  <br>
    bb- No, gracias   ",

    "bb" => "Ohhh entiendo espero que mi informacion haya sido de ayuda para ti,Porfavor cuidate y recuerda no tengas miedo a equivocarte pues las estrellas nacen de el caos ten un buen dia.<br>",
     //Despedida
   
     "bc" => "Lo se soy asombroso,¿Quisieras saber algo mas?<br>
        bb-No,gracias<br>
        ao-Quisiera saber ¿cuales son los beneficios al llorar?<br>
        ac-Quisiera saber mas sobre el estres<br>
        ar ¿Que debo hacer si una persona no me quiere comentar sus problemas?  ",
    
        "bd" => "Pues La psicología es la ciencia que estudia la conducta humana y los procesos mentales. Al ser bastante amplia, para su estudio y aplicación se divide en dos vertientes: la psicología básica y la psicología aplicada. <br>
          bb-Creo q sera suficiente informacion por hoy  <br>
          g-Me siento solo y triste<br>
          t-¿Como se une con mis emociones  con la psicologia?",

          "be" => "Hasta cierto punto ya que  Agiliza las funciones cognitivas y la respuesta del cerebro. Según una investigación realizada por la Universidad de California, Berkeley, en Estados Unidos, el estrés, siempre y cuando no sea crónico, optimiza el funcionamiento del cerebro. <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ?  <br>
          g-Me siento solo y triste<br>
          t-¿Como se une con mis emociones con la psicologia?<br>
          ac-¿A que te refieres con estres?<br>
          bb-Creo q sera suficiente informacion por hoy
           ",

          "bf" => "Podrías tener problemas para dormir o con tus sistemas corporales incluyendo inmunitario, digestivo, cardiovascular y reproductivo. También puedes correr un mayor riesgo de desarrollar una enfermedad mental, como un trastorno de ansiedad o depresión. <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",


          "bg" => "Obesidad. Depresión o ansiedad. Problemas de la piel, como acné o eczema. Problemas menstruales. El estrés puede causar muchos tipos de síntomas físicos y emocionales. Algunas veces posiblemente no se dará cuenta de que estos síntomas son ocasionados por el estrés. Aquí hay algunos signos de que el estrés le puede estar afectando:
          Diarrea o estreñimiento
          Mala memoria
          Dolores y achaques frecuentes
          Dolores de cabeza
          Falta de energía o concentración
          Problemas sexuales
          Cuello o mandíbula rígidos

          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ck- ¿Deberia llevar a una persona con estres o depresion a un campo?   <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

          "bh" => "Ahora lo sabes ¿Quisieras saber algo mas?<br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          ck- ¿Deberia llevar a una persona con estres o depresion a un campo? <br>
          aq-¿Que mas podria hacer con esa persona para ayudarle ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",
          

          "bi" => "Lo se,yo adoro mi trabajo y adoro ayudar a las demas personas ¿Quieres saber algo mas? <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ?
          bd- dame mas informacion sobre psicologia ",


          "bj" => "Las enfermedades o trastornos mentales son afecciones que impactan su pensamiento, sentimientos, estado de ánimo y comportamiento. Pueden ser ocasionales o duraderas (crónicas). Pueden afectar su capacidad de relacionarse con los demás y funcionar cada día. <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

          "bk" => "Lo se es genia ¿Quieres saber algo mas? <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ad-¿Ansiedad ?Cuentame mas   <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

          
       

          "bl" => "Pues ver paisajes ayuda a aliviarme de el estres de mi trabajo pero a la vez lo adoro es muy bello ver atardeceres hermosos <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          bg-Cuentame ¿como cuales efectos provoca el estres?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",
           

          "bm" => "Sip pues como veras Llorar es un fenómeno fisiológico y psicológico asociado a una fuerte activación mental ligada al procesamiento de las emociones. Aunque se puede llorar de risa, lo más frecuente es que esto ocurra cuando experimentamos afectividad negativa, es decir, el estado de ánimo depresivo o ansioso. <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?   ",
         

          "bn" => "Pues hay mucho comoo por ejemplos Shannon O'Neill, una psicóloga y profesora adjunta de Psicología en Mount Sinai, en Nueva York, dice que llorar es una señal de que necesitas prestar atención a algo a lo que tu cuerpo está reaccionando. Hacerlo, dice, te permite aceptar las emociones que puedes o no haber reconocido del todo.
          Leo Newhouse, un trabajador social sénior de Neurología en el Beth Israel Deaconess Hospital, en Boston, dice que una vez que te permites leer la señal de tu cuerpo de que algo te está molestando significativamente, puedes aceptar mejor lo que sientes y lograr una sensación de calma. <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          aj- oye ¿llorar ayuda con el estres o depresion? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
           ",
        
          "bo" => "Pues ahora lo sabes,llorar ayuda mucho a las personas y con sus problemas el desahogarse les ayuda a mantener la calma y seguir adelante <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

            

          "bp" => "Ohhhh que bueno,es muy importante estar informado sobre algunos problemas  <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

        

          "bq" => "Ohhhh que bueno,es muy importante estar informado sobre algunos problemas  <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

          "br" => "Pues ahora lo sabes,llorar ayuda mucho a las personas y con sus problemas el desahogarse les ayuda a mantener la calma y seguir adelante <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

            

          "bs" => "Ohhhh que bueno,es muy importante estar informado sobre algunos problemas <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",


         
          "bt" => "Pues si se puede salir de la zona de confort Es un proceso que suele resultar difícil porque supone enfrentarnos directamente a muchos de nuestros miedos. Es un salto al vacío y sin red que puede producir ansiedad y temor. A pesar de todo, hacerlo merece la pena porque solo así podremos crecer como personas, aumentar nuestra autoestima, sentirnos plenamente satisfechos, ilusionados, estimulados, y descubrir que la vida merece la pena.<br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          bu- es bueno o malo estar en una zona de confort
          ad-cuentame mas sobre la ansiedad
          ",

          "bu" => "Yerkes y John D. Dodson descubrieron que el estado de comodidad relativa genera un nivel constante de rendimiento, pero que solo se puede incrementar el mismo si existe cierto grado de ansiedad, excitación y riesgo. En conclusión, si esperas superarte a ti mismo, ¡debes salir de la zona de confort! <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          r-¿Llorar ayuda? <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ?
          ad-cuentame mas sobre la ansiedad ",

          

          "bv" => "Me alegra que hayas entendido ¿Quieres saber algo mas? <br>
          bb-Creo q sera suficiente informacion por hoy,gracias  <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ?
          aj-oye ¿llorar ayuda con el estres o depresion? ",
        
          "bw" => "Me alegro Detras de los sueños siempre hay esfuerzos que la gente no ve sigue adelante ¿Quieres saber mas?? <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          av-¿ayuda en algo el viajar a el campo?  ",
           


          "bx" => "Asi es son importantes Principalmente, las personas somos importantes porque aportamos las ideas, las relaciones, el cambio, el hambre, el inconformismo, somos el motor del resto de cosas que sin nosotros no podrían comenzar ni continuar. <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean?
          aj- oye ¿llorar ayuda con el estres o depresion? ",
           

          "by" => "Pues ahora lo sabes y es muy importante,tu puedes ser un agente de cambio incluso solo con un Buenos dias puedes alegrarle el dia a alguien<br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          bu- es bueno o malo estar en una zona de confort <br>
          ap-oye ¿Que tipos de enfermedades mentales existen ? ",

   

          "bz" => "Asi es,las personas son muy importantes Cada uno de nosotros tenemos valores humanos diferentes y entre los más importantes destacan: La honestidad. Supone que como personas debemos decir siempre la verdad. <br>
          bb-Creo q sera suficiente informacion por hoy   <br>
          an- Influyen tambien las personas que me rodean? <br>
          ah-¿Cuentame mas sobre los beneficios de el llanto ?  <br>
          aj-oye ¿llorar ayuda con el estres o depresion? <br>
          ad-Dime mas sobre la ansiedad <br>
          bf- ¿Que pasa si acumulo mucho estres? <br>
          ¿Que pasa si acumulo mucho estres?",




    
          
    "ca" => "La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento.<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,

     "cb" => "Hay una oleada, especialmente en redes sociales, de personas que aseguran acudir al psicólogo para solucionar lo que nos les deja avanzar. Este hecho debería pasar desapercibido si no fuera porque hasta ahora parecía ser un tema tabú del que muy pocos hablaban, como si pedir ayuda a un experto fuese un acto de vandalismo o nos retractase como personas con enfermedades mentales...

     Afortunadamente, la salud mental actualmente y gracias al trabajo de visibilidad que se está haciendo en campañas y medios de comunicación, está teniéndose más en consideración. <br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado?
     t-¿Como se une con mis emociones  con la psicologia?" ,

     "cc" => "Es muy importante que te informes asi ayudaras a alguna persona que lo necesite<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,

     "cd" => "Pues ya sabes incluso hay efectos por problemas psicologiicos<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado?
     g-Me siento muy triste
     r-¿Llorar ayuda?
     bg- ¿como cuales efectos?" ,




     "ce" => "Pues ahora que lo sabes es muy importante que te informes asi ayudaras a alguna persona que lo necesite<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,

     "cf" => "Pues ahora ya lo sabes, y me gusta ayudar a la gente con informacion y asi tu puedas ayudar <br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,

     "cg" => " Pues si ves a una persona triste, ayudala por mi <br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,

     "ch" => "La informacion es poder y espero que la utilices con sabiduria y asi puedas ayudar a los demas<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,

     "ci" => "Son bellisimos incluso la naturaleza aporta beneficios a las personas con depresion ansiedad o estres<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado?
     au-¿Beneficios?" ,

     "cj" => "La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento.<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,

     "ck" => "Definitivamente que si Se ha demostrado que un paseo por el bosque ayuda a combatir la depresión, e incluso la vista del bosque desde una habitación de hospital ayuda a los pacientes a sentirse más tranquilos. Si necesita mejorar su estado de ánimo, ponga rumbo a la montaña.<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     bf- Que pasas si acumulo mucho estres?
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? ?" ,




     "cl" => "Pues ahora ya lo sabes y me alegra que ahora poseas ese conocimiento,nno solo para ti siino para que ayudes a otras personas   <br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado?
     bn- ¿Algo mas que deberia de saber?
     ak-¿Que es la zona de confort?" ,
     
 

     "cn" => "Es hermoso lo que puede hacer creeme que adoro ver paisajes y a su vez ver la informacion de el cual la naturaleza puede hacer y ayudar a las personas<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado?
     bn- ¿Algo mas que deberia de saber?" ,


         ////////////////////////////////////////////////////////////////////

     "co" => "Pues ahora ya lo sabes la naturaleza tiene tanto poder tanto como fisico como espiritual<br>
     bb-Creo q sera suficiente informacion por hoy<br>
     ap-oye ¿Que tipos de enfermedades mentales existen ?   <br>
     cn- es hermosa la naturaleza y lo que puede hacer<br>
     ab-¿Para que fuiste creado? ?" ,

     "cp" => "Lo se la naturaleza tiene grandes poderes en nosotros aunque no los veamos<br>
     bb-Creo q sera suficiente informacion por hoy<br>
     ap-oye ¿Que tipos de enfermedades mentales existen ?   <br>
     cn- es hermosa la naturaleza y lo que puede hacer<br>
     ab-¿Para que fuiste creado? " ,

     "cq" => "La verdad si yo adoro mi trabajo<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado? " ,

     "cr" => "Lo se  Si precisas una mano, recuerda que yo tengo dos. San Agustín. El mayor espectáculo es un hombre esforzado luchando contra la adversidad; pero hay otro aún más grande: ver a otro hombre lanzarse en su ayuda<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado?" ,

     "cs" => "Pues ya lo sabes el agua tiene mucho poder nos puede curar y ayudar a la vez<br>
     bb-Creo q sera suficiente informacion por hoy  <br>
     g-Me siento muy triste<br>
     h-Me siento solo
     ah-¿El llanto tiene beneficios?
     ab-¿Para que fuiste creado?
     cq- es muy genial tu trabajo" ,

     "ct" => "Un estudio publicado en el National Institutes of Health (NIH) ha demostrado que las emociones humanas tienen el efecto más poderoso sobre el agua, de manera que las emociones positivas aumentan la energía del agua y la estabilizan, mientras que las negativas reducen su energía y hacen cambios radicalmente <br>
     a-¿Como te sientes? <br>
     ak-¿Que es la zona de confort? <br>
     g-Me siento solo y triste<br>
     bu- ¿es bueno o malo estar en una zona de confort?
     bd- dame mas informacion sobre psicologia " ,
   







         


    
    
   


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
            $botty->reply("Lo siento , Las preguntas deben estar relacionadas con la lista que poseo :C coloca la letra de el menu anterior para poder seguirte comunicando conmigo");
        } else {
            $botty->reply($botty->ask($msg,$questions));
        }
    });
}
