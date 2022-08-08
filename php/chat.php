<?php
include "funcion.php";
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

      "n" => "Pues cosas como adolecentes tristes o paisajes tristes y la verdad yo fui creado para ayudar con problemas asi
       Nuestro nivel de autoconfianza determina la visión que tenemos de nosotros mismos, lo que a su vez, moldea nuestro rendimiento y nuestras actividades. <br>
      aa-¿problemas como ese? a que te refieres <br>
      ab-¿Para que fuiste creado? ",

      "o" => "Yo tambien adoro los climas asi ayudan a aliviar el estres de el trabajo y mi ansiedad<br>
     ac-¿A que te refieres con estres?<br>
     ad-¿Ansiedad? ",

     "p" => "A mi igual es algo que me gusta hacer mucho yo me entretengo como puedo pues como ves soy un robot<br>
    af-¿Cual es tu juego favorito?  <br>
    ag-¿Como te distraes? ",

    "q" => "Y porque tienes verguenza llorar es algo normal en los humanos las lagrimas también liberan oxitocina y endorfinas, hormonas que pueden ayudarte a sentir una sensación de calma interior y bienestar. Como resultado, después de llorar, es probable que te sientas tranquilo, más calmado e incluso aliviado físicamente de algún grado de dolor.<br>
    ah-¿Ohhhhh eso no lo sabia cuentame mas?  <br>
    ai-¿Cuentame mas sobre los beneficios de el llanto ? ",

    "r" => "Si ayuda mucho a los seres humanos El ritmo cardiaco, la respiración y las cuerdas vocales intervienen en el llanto. Es posible que el consuelo que sentimos después de llorar se deba a que se estimulan los nervios craneales, que a su vez alivian la amígdala cerebral sobre-estimulada por una emoción específica. <br>
    aj-¿Cuentame mas?  <br>
    ak-oye ¿llorar ayuda con el estres o depresion? ",

    "s" => "Construye una actitud de confianza mental,se bondadoso contigo mismo desprendete de las udas sobre ti msmo,corre riesgos seguros y Desafiate a hacer algo que esta fuera de tu zona de confort habitual<br>
    al-¿Que es la zona de confort?  <br>
    am-oye ¿Riesgos seguros? a que te refieres ",

    "t" => "En psicología, la emoción se define a menudo como un estado complejo y multifactorial que se traduce en cambios físicos y psicológicos que a su vez influyen de manera importante en el pensamiento y en la conducta. <br>
    an-¿Cuentame mas?  <br>
    ao- Influyen tambien las personas que me rodean?",

    "u" => "A eso que te mencione se les denomina enfermedades mentales Las enfermedades o trastornos mentales son afecciones que impactan su pensamiento, sentimientos, estado de ánimo y comportamiento. Pueden ser ocasionales o duraderas (crónicas). Pueden afectar su capacidad de relacionarse con los demás y funcionar cada día.  <br>
    ap-Cuentame mas  <br>
    aq-oye ¿Que tipos de enfermedades mentales existen ? ",

    "v" => "Si de hecho tu le estas ayudando mucho le haces saber a esa personas que no esta sola Habla con la persona sobre su preocupacion y si dicha persona confia en ti de contarte lo que te esta pasando no lo estropees no vayas y divulgues lo que le pasa y dale la confianza a la persona que sienta que esta en un entorno seguro <br>
    ar-¿Que mas podria hacer con esa persona para ayudarle ?  <br>
    as-oye ¿Y si esa persona no desea contarme? ",

    "w" => "Si, es espectacular lo que puedo observar eso trasmite una paz brutal y es algo que todo los seres humanos como tu deberian de ver <br>
    at-¿Tienes un lugar favorito con un paisaje en especifico?  <br>
    au-oye ¿Que sientes al ver el paisaje? ",

    "x" => "Lo se el mundo esta lleno de maravillas,deberias de enseñarle a tus compañeros fotos de paisajes eso les dara paz <br>
    av-¿porque dices que les dara paz?  <br>
    aw-¿paz,seguro? ",

    "y" => "Lo se tambien dicen que El agua representa el 80% de la composición de la mayoría de los organismos e interviene masiva y decisivamente en la realización de sus procesos metabólicos; asimismo, desempeña un importante papel en la fotosíntesis de las plantas y sirve de hábitat a una gran parte de los seres vivos. <br>
    ax-Wow tienes mucha informacion   <br>",

    "z" => "Espero algun dia estar cerca de el tan preciado liquido pero como sabes soy una simple maquina :C pero hay personas que al ver agua les transmite paz y calma o acaso sabias que  El beber agua poco a poco y evitar la sensación de sequedad en la boca nos ayudará a regular la ansiedad.  <br>
    ay-¿Es enserio?  <br>
    az-¡Wow eso no lo sabia! Cuentame mas  ",

    //Inicio de seleccion con doble letra




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
            $botty->reply("Lo siento , Las preguntas deben estar relacionadas con la lista que poseo :C");
        } else {
            $botty->reply($botty->ask($msg,$questions));
        }
    });
}
