<?php
session_start();

if (!isset($_SESSION["usuario"])) {

    header("location:../php/acceso denegado.php");
}

function obtenerUsuario()
{

    if (isset($_SESSION["usuario"])) {
        return "salir";
    }
    return "entrar";
}

function directorioReturn()
{
    if (isset($_SESSION["usuario"])) {
        return "./auth/logout.php";
    }
    return "./InicioSesion copy.php";
}

function traducir()
{
    if (isset($_SESSION["usuario"])) {
        return "Logout";
    }
    return "Salir";
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/Chatbot.css">
    <link rel="stylesheet" href="../css/Depresionstyle.css">
    <link rel="stylesheet" href="../css/loading.css">
    <link rel="stylesheet" href="../css/scrollbar.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    <title>Inner Peace - Depresión</title>
</head>

<body>
    <!-- loading -->
    <div class="loader">
        <div class="lds-heart">
            <div></div>
        </div>
    </div>
    <!--navbar-->
    <nav>
        <input type="checkbox" name="" id="check">
        <label for="check" class="checkbtn">
            <img src="../img/hamicon.png" alt="hamicon" class="hamicon">
        </label>
        <a href="../php/Home.php" class="enlace">
            <img src="../img/logo_large.png" alt="" class="logo">
        </a>
        <ul>
            <li><a href="../php/Psicologos.php" class="navlink" id="link1">Psicologos</a></li>
            <li><a href="../php/FAQ.php" class="navlink" id="link2">Preguntas frecuentes</a></li>
            <li><a href="../php/casos clinicos.php" class="navlink" id="link3">Testimonios</a></li>
            <li><a href="../php/Identidad.php" class="navlink" id="link4">Nuestra identidad</a></li>
            <a href="<?= directorioReturn(); ?>" class="navlink" id="link5"><button class="login">
                    <div class="icono">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                        </svg>
                    </div>
                    <span id="<?= traducir(); ?>"><?= obtenerUsuario(); ?></span>
                </button></a>
        </ul>
    </nav>

    <!-- Bot chat -->
    <a href="../bot/bot.php">
        <div class="chat-bar-collapsible">
            <button id="chat-button" type="button" class="collapsible">PeaceBot 🤖</button>
        </div>
    </a>
    <div class="container-content">
        <article>
            <blockquote><a name="que es">
                    <h2 id="first-quote">¿Qué es la depresion?</h2>
                </a></blockquote>

            <p id="second-quote">Todas las personas se sienten tristes o decaídas de vez en cuando, pero estos sentimientos suelen desaparecer en poco tiempo. La depresión, también llamada “depresión clínica” o “trastorno depresivo mayor” es diferente. La depresión puede causar síntomas graves que afectan cómo se siente, piensa y coordina actividades diarias como dormir, comer o trabajar. Es una enfermedad que puede afectar a cualquier persona, sin importar la edad, la raza, los ingresos, la cultura o el nivel educativo. Hay investigaciones que sugieren que los factores genéticos, biológicos, ambientales y psicológicos desempeñan una función en la depresión.</p><br>

            <p id="tree-quote">La depresión puede ocurrir conjuntamente con otros trastornos mentales y otras enfermedades como diabetes, cáncer, enfermedad cardíaca y dolor crónico. La depresión puede empeorar estos problemas de salud y viceversa. Algunas veces, los medicamentos que se toman para estas enfermedades ocasionan efectos secundarios que contribuyen a los síntomas de la depresión.</p><br>

            <a name="tipos"></a>
            <blockquote>
                <h2 id="problema1">¿Cuáles son los diferentes tipos de depresión?</h2>
            </blockquote><br>

            <p id="problema2">Dos de los tipos frecuentes de depresión son:</p><br>

            <li id="li1">Depresión mayor, que implica síntomas de depresión la mayoría del tiempo durante por lo menos dos semanas. Estos síntomas interfieren con la capacidad para trabajar, dormir, estudiar y comer.</li><br>

            <li id="li2">Trastorno depresivo persistente (distimia), que a menudo incluye síntomas de depresión menos graves que duran mucho más tiempo, generalmente por lo menos durante 2 años.</li><br>

            <p id="li3">Otras formas de depresión incluyen las siguientes:</p><br>

            <li id="li4">Depresión perinatal, que ocurre cuando una mujer sufre de depresión mayor durante el embarazo o después del parto (depresión posparto).</li><br>

            <li id="li5">Trastorno afectivo estacional, que aparece y desaparece con las estaciones del año, y por lo general empieza a finales del otoño o principios del invierno y desaparece en la primavera y el verano.</li><br>

            <li id="li6">Depresión con síntomas de psicosis, que es una forma grave de depresión en la que una persona también muestra síntomas de psicosis, como tener creencias falsas fijas y perturbadoras (delirios) o escuchar o ver cosas que otros no pueden oír o ver (alucinaciones).</li><br>

            <p id="li7">Las personas con un diagnóstico de trastorno bipolar (anteriormente llamado depresión maníaca o enfermedad maníaco depresiva) también sufren de depresión.</p><br>

            <a name="signos"></a>
            <blockquote>
                <h2 id="problema3">¿Cuáles son los signos y los síntomas de la depresión?</h2>
            </blockquote>

            <p id="problema4">Entre los síntomas frecuentes de la depresión se incluyen los siguientes:</p><br>
            <ul>
                <li id="li8">sentimientos persistentes de tristeza, ansiedad o “vacío”;</li><br>
                <li id="li9">sentimientos de desesperanza o pesimismo;</li><br>
                <li id="li10">sentimientos de irritabilidad, frustración o intranquilidad;</li><br>
                <li id="li11">sentimientos de culpabilidad, inutilidad o impotencia;</li><br>
                <li id="li12">pérdida de interés o placer en las actividades y los pasatiempos;</li><br>
                <li id="li13">fatiga, disminución de energía o sensación de que está más lento;</li><br>
                <li id="li14">dificultad para concentrarse, recordar o tomar decisiones;</li><br>
                <li id="li15">dificultad para dormir, despertarse temprano en la mañana o dormir demasiado;</li><br>
                <li id="li16">cambios en el apetito o en el peso sin haberlos planificado;</li><br>
                <li id="li17">dolores y molestias, dolor de cabeza, calambres o problemas digestivos sin una causa física aparente, o que no se alivian ni con tratamiento;</li><br>
                <li id="li18">intentos de suicidio o pensamientos sobre la muerte o el suicidio.</li><br>
            </ul>
            <blockquote>
                <h2 id="problema5">¿Cómo se diagnostica la depresión?</h2>
            </blockquote><br>

            <p id="problema6">Para diagnosticarle depresión a una persona, esta debe presentar cinco síntomas de la enfermedad todos los días, casi todo el día, por lo menos durante dos semanas. Uno de los síntomas debe ser un estado de ánimo depresivo o la pérdida de interés o placer en casi todas las actividades. Es posible que los niños y los adolescentes se muestren irritables en lugar de tristes.</p><br>

            <p id="problema7">Si cree que es posible que usted tenga depresión, hable con su proveedor de atención médica. Los médicos de atención primaria diagnostican y tratan de manera rutinaria la depresión y refieren a las personas a profesionales de salud mental, como psicólogos o psiquiatras.</p><br>

            <p id="problema8">Durante la consulta, su médico u otro proveedor de atención médica puede preguntarle cuándo empezaron sus síntomas, cuánto duran, con qué frecuencia ocurren y si no le permiten salir o hacer sus actividades habituales. Puede ser útil tomar notas sobre sus síntomas antes de la consulta. Algunos medicamentos y ciertas afecciones, como un virus o un trastorno de la tiroides, pueden ocasionar los mismos síntomas de la depresión. Su proveedor de atención médica puede descartar estas posibilidades al realizar un examen físico y una entrevista, y al ordenar pruebas de laboratorio.</p><br>

            <!-- <video src="../Videos/y2mate.com - 8 Señales de que estás sufriendo de depresión sin siquiera saberlo_1080p.mp4" width="500" height="300" controls></video><br> --><iframe width="853" height="480" src="https://www.youtube.com/embed/sBV08qHJjAA" title="8 Señales de que estás sufriendo de depresión sin siquiera saberlo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>
            <cite id="cite">Video gracias a: GENIAL en YouTube</cite>

            <blockquote>
                <h2 id="problema9">Causas</h2>
            </blockquote><br>

            <a name="causas"></a>

            <p id="problema10">Se desconoce la causa exacta de la depresión. Al igual que sucede con muchos trastornos mentales, puede comprender diversos factores, como:</p><br>

            <p id="problema11">Diferencias biológicas. Las personas con depresión tienen cambios físicos en el cerebro. La importancia de estos cambios aún es incierta, pero con el tiempo pueden ayudar a identificar las causas.</p><br>

            <p id="problema12">Química del cerebro. Los neurotransmisores son sustancias químicas que se encuentran naturalmente en el cerebro y que probablemente desempeñan un rol en la depresión. Las investigaciones recientes indican que los cambios en la función y el efecto de estos neurotransmisores, y cómo interactúan con los neurocircuitos involucrados en mantener la estabilidad del estado de ánimo pueden tener un rol importante en la depresión y su tratamiento.</p><br>

            <p id="problema13">Hormonas. Es posible que los cambios en el equilibrio hormonal del cuerpo tengan un rol al causar o desencadenar la depresión. Los cambios hormonales pueden presentarse en el embarazo y durante las semanas o meses después del parto (posparto), y por problemas de tiroides, menopausia u otros trastornos.</p><br>

            <p id="problema14">Rasgos hereditarios. La depresión es más frecuente en las personas cuyos parientes consanguíneos también tienen este trastorno. Los investigadores están buscando genes que puedan intervenir en el origen de la depresión.</p><br>

            <blockquote>
                <h2 id="problema15">¿Es igual la depresión en todas las personas?</h2>
            </blockquote><br>

            <p id="problema16">La depresión puede afectar a las personas de diferentes maneras, según su edad.</p><br>

            <p id="problema17">Los niños con depresión pueden mostrarse ansiosos, malhumorados, fingir estar enfermos, negarse a ir a la escuela, aferrarse a sus padres o preocuparse de que uno de ellos fallezca.</p><br>

            <p id="problema18">Los niños más grandes y los adolescentes con depresión pueden tener problemas en la escuela o una baja autoestima o pueden estar callados, frustrarse fácilmente o sentirse intranquilos. También pueden tener síntomas de otros trastornos, como ansiedad y trastornos de la alimentación, déficit de atención con hiperactividad, o consumo de drogas. Los niños más grandes y adolescentes tienen una mayor probabilidad de sufrir de somnolencia excesiva (llamada hipersomnia) y un mayor apetito (llamado hiperfagia). En la adolescencia, las niñas comienzan a tener depresión con mayor frecuencia que los niños. Es posible que esto se deba a factores biológicos, hormonales y de ciclo vital que son únicos en las mujeres.</p><br>

            <p id="problema19">Los adultos jóvenes con depresión tienen una mayor probabilidad de estar irritables, quejarse de haber aumentado de peso y tener hipersomnia, así como tener una perspectiva negativa sobre la vida y el futuro. A menudo, estas personas tienen otros trastornos, como ansiedad generalizada, fobia social, trastorno de pánico y consumo de drogas.</p><br>

            <p id="problema20">Los adultos de mediana edad con depresión sufren más episodios depresivos, su libido se reduce, tienen insomnio a mitad de la noche o se despiertan en la madrugada. Es posible que también mencionen con mayor frecuencia que tienen síntomas gastrointestinales, como diarrea o estreñimiento.</p><br>

            <p id="problema21">A menudo, los adultos mayores con depresión sufren de tristeza o aflicción, o pueden tener síntomas menos evidentes. Pueden informar que sienten una carencia de emociones, en lugar de un estado de ánimo depresivo. Además, las personas mayores tienen una mayor probabilidad de presentar otras afecciones de salud o dolores que pueden causar o contribuir a la depresión. En casos graves, pueden ser notables los problemas de memoria y razonamiento (llamados pseudodemencia).</p><br>

            <blockquote>
                <h2 id="problema22">¿Cómo se trata la depresión?</h2>
            </blockquote><br>

            <p id="problema23">Por lo general, el tratamiento de la depresión incluye medicamentos, psicoterapia o ambos. Si estos tratamientos no disminuyen los síntomas, otra opción de tratamiento puede ser la terapia de estimulación cerebral. En casos más leves de depresión, el tratamiento puede empezar solo con psicoterapia y se añaden medicamentos si la persona continúa teniendo síntomas. En el caso de una depresión moderada o grave, muchos profesionales de salud mental recomiendan una combinación de medicamentos y terapia al principio del tratamiento.</p><br>

            <p id="problema24">La selección del plan de tratamiento adecuado debe basarse en las necesidades y en la situación de salud de la persona y bajo el cuidado de un proveedor de atención médica. Puede ser necesario intentar diferentes cosas para poder encontrar el tratamiento que mejor funcione para usted. </p><br>

            <blockquote>
                <h2 id="problema25">Medicamentos</h2>
            </blockquote><br>

            <p id="problema26">Los antidepresivos son medicamentos que se usan con frecuencia para tratar la depresión. Debe transcurrir cierto tiempo para que surtan efecto, por lo general, entre 4 y 8 semanas, y a menudo, los síntomas como problemas para dormir, apetito o concentración mejoran antes de que mejore el estado de ánimo. Es importante darles una oportunidad a los medicamentos antes de decidir si funcionan o no.</p><br>

            <p id="problema27">importante: Tenga presente que algunas personas, especialmente los niños, los adolescentes y los adultos jóvenes, pueden tener más pensamientos o conductas suicidas cuando toman antidepresivos, sobre todo durante las primeras semanas después de empezar a usarlos o cuando se cambian las dosis. Se debe vigilar de cerca a cualquier paciente que esté tomando antidepresivos, especialmente durante las primeras semanas del tratamiento.</p><br>
            <p id="problema28">Se dice que la depresión es resistente al tratamiento cuando una persona no mejora después de intentar con al menos dos antidepresivos. La esketamina es un medicamento más reciente aprobado por la FDA para la depresión resistente al tratamiento y se suministra como un aerosol nasal en un consultorio médico, una clínica o un hospital. A menudo, este medicamento es de acción rápida, por lo general en unas pocas horas, para aliviar los síntomas de la depresión. Por lo general, las personas continúan tomando un antidepresivo oral para mantener la mejoría lograda.</p><br>
            <p id="problema29">Otra opción para la depresión resistente al tratamiento es agregar un tipo diferente de medicamento que pueda hacer que el antidepresivo sea más eficaz, como un medicamento antipsicótico o anticonvulsivo, o bien, bupropión, un antidepresivo que funciona de forma diferente a la mayoría de los medicamentos.</p><br>
            <p id="problema30">Los medicamentos que le recete su proveedor de atención médica para la depresión pueden tener efectos secundarios, pero pueden disminuir con el tiempo. Hable con su médico sobre los efectos secundarios que tenga. No deje de tomar los medicamentos sin la ayuda de un proveedor de atención médica. Si deja de tomar su medicamento de forma abrupta, puede tener síntomas de abstinencia.</p><br>
            <blockquote>
                <h2 id="problema31">Psicoterapia</h2>
            </blockquote><br>

            <p id="problema32">La psicoterapia (también llamada “terapia de diálogo” o “consejería”) enseña a las personas con depresión nuevas formas de pensar y comportarse, y también ayuda a cambiar hábitos que contribuyen a la depresión. En la mayoría de los casos, un profesional de salud mental debidamente autorizado y capacitado es el encargado de llevar a cabo las sesiones de psicoterapia, ya sean individuales o con otras personas en un entorno de grupo. Dos de las psicoterapias eficaces para tratar la depresión son la terapia cognitivo-conductual y la terapia interpersonal. El uso durante un tiempo limitado de formas más antiguas de psicoterapia, como la terapia dinámica, también puede ayudar a algunas personas con depresión.</p><br>
            <p id="problema33">Con la terapia cognitivo-conductual, las personas pueden aprender a desafiar y cambiar los patrones de pensamiento y de conducta que no son útiles, para así mejorar sus sentimientos de depresión y ansiedad. Entre los avances recientes de este tipo de terapia se incluyen la introducción de principios contemplativos y el desarrollo de formas especializada de terapias dirigidas a tratar síntomas específicos, como el insomnio.</p><br>
            <p id="problema34">La terapia interpersonal se centra en acontecimientos interpersonales y de la vida que generan algún impacto en el estado de ánimo y viceversa. La finalidad de esta terapia es ayudar a las personas a mejorar sus destrezas de comunicación en sus relaciones, establecer redes de apoyo y fijar expectativas realistas para ayudarles a sobrellevar crisis u otros problemas que pueden contribuir a la depresión o empeorarla.</p><br>

            <blockquote>
                <h2 id="problema35">¿Cómo me puedo cuidar a mí mismo?</h2>
            </blockquote><br>
            <p id="problema36">Una vez que inicie el tratamiento, deberá a empezar a sentirse mejor poco a poco. No se presione mucho durante este tiempo. Trate de hacer las cosas que solía disfrutar. Aun si no se siente con ganas de hacerlas, pueden mejorar su estado de ánimo. Otras cosas que pueden ayudarlo son:</p><br>
            <ul>
                <li id="li188">Trate de hacer alguna actividad física. Tan solo 30 minutos de caminatas al día pueden mejorar su estado de ánimo.</li><br>
                <li id="li19">Trate de mantener una hora regular para acostarse y levantarse.</li><br>
                <li id="li20">Consuma alimentos saludables con regularidad.</li><br>
                <li id="li21">Haga lo que pueda y cómo pueda. Decida qué es lo que debe hacer y qué puede posponer.</li><br>
                <li id="li22">Trate de interactuar con otras personas y hablar con quienes confía sobre cómo se siente.</li><br>
                <li id="li23">Posponga decisiones importantes de la vida hasta que se sienta mejor.</li><br>

            </ul>
            <blockquote>
                <h2 id="problema37">¿Cómo puedo ayudar a un ser querido que está deprimido?</h2>
            </blockquote><br>
            <p id="problema38">Si conoce a alguien con depresión, ayúdelo a que vea a un proveedor de atención médica o un profesional de salud mental. Usted también puede:</p><br>
            <ul>
                <li id="li24">Ofrecerle apoyo, comprensión y ánimo, y tenerle paciencia.</li><br>
                <li id="li25">Invitarlo a salir a caminar, pasear o participar en otras actividades.</li><br>
                <li id="li26">Ayudarlo a seguir el plan de tratamiento, como programar recordatorios para que se tome los medicamentos que le recetaron.</li><br>
                <li id="li27">Asegurarse de que tenga un medio de transporte para ir a sus citas de psicoterapia.</li><br>
                <li id="li28">Recordarle que la depresión desaparecerá con el tiempo y el tratamiento.</li><br>
            </ul>
            <blockquote>
                <h2 id="problema39">Importante:Tome en serio los comentarios sobre el suicidio y notifíquelos al proveedor de atención médica o terapeuta de su ser querido. Si está en peligro inmediato o está pensando en hacerse daño, llame a los servicios de emergencia al 911 o diríjase a la sala de emergencias del hospital más cercano.</h2>
            </blockquote><br>
            <img src="../img/depri1.jpg" alt="">
            <a name="tips"></a>
            <blockquote>
                <h2 id="problema40">Dinammicas para superar la depresion</h2><br>
            </blockquote>
            <p id="problema41">Sal de la cama, a la hora de mejorar la depresión es de vital importancia permanecer activo, aunque en la depresión es difícil enfrentarse al día a día, el simple hecho de salir de la cama y afrontar las actividades cotidianas, hará que te sientas más capacitado, competente y mejorará tu estado de ánimo.</p><br>
            <p id="problema42">Realiza actividades que antes de tu depresión te satisfacían. Uno de los síntomas de la depresión es la anhedonía, es decir, la incapacidad para disfrutar plenamente de las actividades, lo que lleva a la persona a la inactividad y a retroalimentar la depresión, por tanto el hacer actividades agradables te ayudará a mejorar y a alcanzar cierta satisfacción y mejorará tu estado de ánimo. También puedes añadir nuevas tareas que podrías ejecutar en solitario o acompañado y que has ido dejando por falta de tiempo, pereza u otras causas.</p><br>
            <p id="problema43">Realiza ejercicio físico, no hace falta que hagas ejercicio físico como si fueras un deportista de élite, haz ejercicio conforme a tus posibilidades físicas (caminar, natación, gimnasia de mantenimiento, pilates, yoga...). cuando realizamos deporte segragamos endorfinas, sustancia que influye positivamente en el estado de ánimo, relaja favoreciendo el descanso nocturno y te sentirás más vital.</p><br>
            <p id="problema44">Rompe con la rutina. Si nuestra vida es rutinaria es posible que esto nos pueda llevar a perder la motivación a la hora de hacer las cosas, ya decíamos antes que realizar actividades es muy beneficioso para la depresión, también cambiar nuestra rutina habitual pude serlo. Intenta cambiar la manera en que haces tu trabajo, intenta conocer personas nuevas, cambia de trayecto a la hora de ir y volver a casa.</p><br>
            <p id="problema45">Realiza actividades en la naturaleza. Elige actividades que sean de tu gusto, caminar por la montaña, nadar en el mar, pasear por el bosque... Observar el paisaje, los animales, las flores, la puesta de sol, no solo conseguirá relajarte sino también que tomes conciencia de las cosas agradables que nos ofrece la vida.</p><br>
            <p id="problema46">Cuida tu aspecto físico: La valoración que tenemos de nuestra imagen es un pilar importante en nuestra autoestima. Sentirnos bien con nuestro aspecto nos mejora el estado de ánimo. Mantente aseado, viste ropa que te guste, cuida tu imagen, pero no te obsesiones con ello.</p><br>
            <p id="problema47">Cuida tu alimentación. Es importante que mantengas unos horarios estables de comida y que tengas una alimentación equilibrada. En la depresión muchas veces se pierde el apetito y no comer no te ayudará precisamente a sentirte bien. En otras ocasiones se presenta un aumento del apetito, lo que hace que la persona coma sin control, lo que lleva a una sensación de incapacidad para poder controlar los impulsos que tampoco ayuda a mejorar la depresión.</p><br>
            <p id="problema48">Mejora tu patrón de sueño. Es posible que si estás con depresión tu patrón de sueño se haya deteriorado y te cueste conciliar el sueño o te despiertes en medio de la noche. Para mejorar tu sueño, evita las cenas copiosas, ventila la habitación y mantén una temperatura confortable. Antes de acostarte puedes hacer ejercicios de relajación sencillo que te ayuden a conciliar el sueño.</p><br>
            <p id="problema49">Amplia tu círculo de amistades. Muchas personas con depresión se aislan de los demás o bien porque no les apetece interactuar con los demás o porque piensan que van a ser una “carga” para los otros. Nada más lejos de la realidad, la gente que nos quiere se preocupa por nosotros y harán lo que esté en su mano por ayudar. Intenta quedar con amigos incluso ampliar tu círculo de amistades, estar con otras personas te ayudará a vincularte con ellos y a disfrutar de su compañía.</p><br>
            <p id="problema50">Reserva tiempo para ti. En nuestra vida diaría apenas tenemos tiempo para hacer cosas para nosotros, nuestras responsabilidades y obligaciones consumen casi todo nuestro tiempo. Intenta sacar un rato para poder dedicarlo a ti cada día, ya sea para darte un baño relajante, leer algo que te guste, pasear, o cualquier otra cosa que te agrade.</p><br>
            <p id="problema51">Se tolerante contigo mismo. Tienes que tener en cuenta que el sentirte deprimido no es culpa tuya, por lo que no debes condenarte por ello. Centra tu atención en los logros que vas haciendo en el día a día y recompénsate por ello.</p><br>
            <p id="problema52">Analiza objetivamente los problemas. En la depresión muchas veces se pierde la perspectiva de las cosas y se tiende a ver todo mucho más negativo de lo que realmente es. Analiza los problemas de la manera más objetiva que puedas, si crees que has perdido la perspectiva consúltalo con laguien cercano que te pueda dar otro punto de vista. Si el problema que analizas no tiene solución, tendrás que aprender a vivir con ello y aceptarlo como una realidad dura que te toca vivir, si tiene solución, escribe todas las alternativas que tengas con las ventajas y desventajas de cada una de ellas, una vez hecho esto pon en marcha aquella que más beneficiosa sea.</p><br>
            <p id="problema53">Expresa tus emociones. Las emociones forman parte de nuestra naturaleza humana y nos ayudan a interpretar las situaciones. Sentir rabia, colera, tristeza, entusiasmo, impaciencia etc, es del todo normal y por tanto comunicarlas forma parte de la gestión de las mismas.</p><br>
            <p id="problema54">No te entregues a la autocompasion. Posiblemente estés en un momento en el que no dejas de darle vueltas a la cabeza preguntándote porque te pasa esto a ti. Con ello, lo único que consigues es retroalimentar tu derepsión generando más pensamientos negativos y predicciones pesimistas sobre el futuro, lo que hará que cada vez tengas menos percepción de control sobre la situación.</p><br>
            <p id="problema55">No consumas fármacos que el médico no te haya prescrito, la medicación es un recurso muy extendido para superar estados depresivos, ahora bien, como con cualquier tipo de fármacos estos se deben tomar bajo prescripción y seguimiento médico. Por lo que no es buena idea tomar medicación que alguien no experto te asegure que va bien.</p><br>





        </article>
        <div class="container-aside">
            <aside>
                <h2 id="footer00">Depresion</h2>
                <p><a href="#que es" id="footer1">¿Qué es la depresión?</a></p>
                <p><a href="#signos" id="footer2">Sintomas de la depresión</a></p>
                <p><a href="#tipos" id="footer3">Tipos de depresión</a></p>
                <p><a href="#causas" id="footer4">Causas de la depresión</a></p>
                <p><a href="#tips" id="footer5">Tips para la depresión</a></p>

            </aside>
        </div>
    </div>
    <footer>
        <ul class="footer_ul">
            <li><a href="../php/Home.php" class="fo_link" id="fo1">Home</a></li>
            <li><a href="../php/Identidad.php" class="fo_link" id="fo2">Sobre nosotros</a></li>
            <li><a href="../php/Psicologos.php" class="fo_link" id="fo3">Psicologos</a></li>
            <li><a href="../php/Centrosdeayuda.php" class="fo_link" id="fo4">Centros de ayuda</a></li>
            <hr class="hr_footer">
        </ul>
        <div class="_marcalogo">
            <img src="../img/logo_white_large.png">
            <p class="copyright">ClearTechChoice © 2022</p>
        </div>

        <p class="social social-text">Nuestras redes sociales!</p>

        <div class="social">

            <ul class="footer_ul">
                <li><a href="https://www.instagram.com/innerpeace_cdb/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" class="instagram">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="#fff"></path>
                        </svg></a></li>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" viewBox="0 0 16 16" class="facebook">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg></a></li>
                <li><a href=""><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 330.001 330.001" style="enable-background:new 0 0 330.001 330.001; fill: white;" xml:space="preserve">
                            <g id="XMLID_348_">
                                <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
                       L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z" />
                                <polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	" />
                            </g>
                        </svg>
                    </a></li>
            </ul>
        </div>
        <div class="translatebutton">
            <input type="checkbox" name="translate" id="translate">
            <label for="translate" class="trans"></label>
        </div>
    </footer>


    <!-- Script translate -->
    <script src="../js/Translate/Depresion.js"></script>
    <!-- loading script -->
    <script>
        window.addEventListener("load", () => {
            const loader = document.querySelector(".loader");
            loader.classList.add("loader-hidden");

            loader.addEventListener("transtitionend", () => {
                document.body.removeChild("loader");
            })
        })
    </script>


</body>

</html>