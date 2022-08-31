<?php
session_start();

function obtenerUsuario(){

    if (isset($_SESSION["usuario"])) {
        return "salir";
    }
    return "entrar";
}

function directorioReturn(){
    if (isset ($_SESSION["usuario"])){
        return "./auth/logout.php";
    }
    return "./InicioSesion copy.php";
    
}

function traducir(){
    if (isset ($_SESSION["usuario"])) {
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
    <link rel="stylesheet" href="../css/casos clinicos.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    
    <title>Inner Peace - Casos clinicos</title>
</head>
<body>
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
            <a href="<?=directorioReturn(); ?>" class="navlink" id="link5"><button class="login">
                <div class="icono">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
						<path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
					</svg>
                </div>
                <span id="<?=traducir(); ?>"><?=obtenerUsuario(); ?></span></button></a>
        </ul>
    </nav>

    <!-- Bot chat -->
    <a href="../php/bot.php">
    <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible">PeaceBot 🤖</button>
    </div></a>

    <div class="container-content">
        <article>
            <h2 id="first-quote">Las pérdidas generadas por los trastornos de animo tienen un impacto en la productividad de un país.</h2>

                <h2 id="second-quote">Las pérdidas generadas por estos trastornos no son sólo importantes en términos sociales, porque las enfermedades mentales también tienen un enorme impacto en la productividad de un país.</h2>
                <br>
            <a name="Testimonio1"><blockquote><h2 id="problema1">Depresion</h2></a></blockquote>
            <br>
            <p class="context" id="testi1"> Testimonio de Nicole, estudiante de primer año.</p> 
                <br>
                <p class="context" id="context3">"Sufrí de depresión a partir de los 13 años hasta los 16 años, es algo horrible, se trastorna todo tu mundo, cada parte de tu vida y cómo te desenvuelves en la sociedad se afecta"</p>
                <br>
                <p class="context2">"La solución fue buscar ayuda psicológica, refugiarme en mi familia, practicar deportes, leer y las actividades lúdicas, comencé a conocer e interactuar con más personas porque te encierras y el abismo se hace mucho más grande", explica. Nicole no es la única que confía en la asistencia a un profesional para hacerle frente a la depresión.</p>
                    <p class="context4">"Lo otro es explicar bien a los familiares, ellos ayudan muchísimo, sin la participación de ellos es fatal"</p>
                    <br>
                    <p class="context5">Es que como cuenta Carlos, de segundo año de bachillerato, quien ha sufrido dos episodios de depresión "severa", ha tenido que darse de baja en el estudio. "Y a lo mejor pierdo el año".</p>
            <br>
                    <p class="context6">"La depresión es algo que nos hace ver al mundo en una forma muy negativa. Todas las cosas que hacemos, los hacemos con un sentimiento muy vago que nos hace tender a renunciar los disfrutes de la vida", dice, por su parte, Diego, ex estudiante de noveno grado.</p>
                    <br>
                    <p class="context7">Todos ellos tienen en comun la sintomalogia.</p>
                    <br>
                    <li class="li1">Sentimientos de tristeza, los cuales pueden incluir episodios de llanto sin razón aparente</li>
                    <br>
                    <li class="li2">Frustración o sentimientos de ira, incluso por asuntos menores. (como salir mal en un trabajo escolar).</li>
                    <br>
                    <li class="li3">Sentimientos de desesperanza o vacío.</li>
                    <br>
                    <li class="li4">Pérdida del interés o del placer en las actividades cotidianas.</li>
                    <br>
                    <p><a href="../php/Depresion.php" class="leer1">Leer mas...</a></p>
                    <img src="../img/ds.png" alt="">

                    <a name="testimonio2"><h2 class="subtitle_1">Cada día son más los que sufren trastornos de ansiedad, entre el 15 y el 20% de los jóvenes del país tienen que lidiar con este tipo de trastornos. Pero aunque es un tema del que cada vez se habla más, todavía no lo suficiente. Muchas son las personas que sufren esto y no buscan ayuda por temor a ser tratados de locos. Si tú que nos estás leyendo estas pasando por esto no te preocupes, hay gente que te puede ayudar.</h2></a>
                    <br>
                    <blockquote><p class="context8">Los testimonios de 7 chicas que sufren ansiedad. Si estás en la misma situación queremos ayudarte a que te abras y si tienes alguien en tu entorno que lo sufre ayúdale en todo lo que puedas. Mira estos testimonios y verás que no estás solo y que buscar ayuda de verdad funciona.</p><br></blockquote>
                    <li class="lipro1">1. La escuela puede ser un lugar aterrador</li><br>
                    <p class="pro1">“Sufro ansiedad. Desde el principio he tenido este problema de no hablar con la gente hasta que me siento lo suficiente cómoda con ellos, y esto hace que todos piensen que soy una cretina egocéntrica. A veces simplemente intento hablar con la gente y acabo haciendo que las cosas sean horriblemente incómodas. La escuela es un lugar aterrador porque los profesores piensan que soy tímida, y me siguen forzando a hablar delante de todos mis compañeros, y es entonces cuando empiezo a comportarme raro y hacer las cosas aún peores”. Sara, 16 años, estudiante de primer año de bachillerato.</p><br>
                    <li class="lipro2">2. Y quedar con amigos muy estresante.</li><br>
                    <p class="pro2">“Lo que tiene la ansiedad social es que es un círculo vicioso. Quieres hacer amigos y sociabilizar, pero el estrés y el miedo de ser aburrida o el simple hecho de tener que mantener una conversación con alguien a quien no conoces hacen que te bloquees. Pero perdértelo y ver fotos y Snapchats del evento del otro día solo le da más fuerza a la ansiedad, porque entonces te preocupas por perderte en el desarrollo de las relaciones, así que la próxima quedada será aún más rara e incómoda. Quieres proponer verlos o ir a eventos sociales, pero te da miedo intervenir y que te ignoren o te rechacen. Y te acaban marginando y dejando de lado siempre porque piensan que ‘nunca se apunta a nada’. Y sientes que no de verdad no le gustas a la gente y acaba ganando la ansiedad”. Gabriela, 18 años, estudiante de tercer año de bachillerato.</p><br>
                    <li class="lipro3">3. Estar solo tampoco ayuda</li><br>
                    <p class="pro3">“Cuando empecé a desarrollar ansiedad, me sentía excesivamente cohibida en los espacios públicos. Los pensamientos empezaban a correr por mi cabeza y me desorientaba si no podía calmarme. Pronto empecé a experimentar ataques de pánico en el día a día. Mi ansiedad hacía que me diera miedo estar con otros y a veces incluso estar sola, porque estar sola significaba estar a solas con mis pensamientos. Conforme crecí, con la ayuda de un terapeuta, aprendí a lidiar con ello. Todavía tengo malos días, pero ¡ahora sé cómo vivir con ello!” Adriana, 14 años, estudiante de novenogrado.</p><br>
                    <li class="lipro4">4. Y que te pierdas los mejores momentos de la vida.</li><br>
                    <p class="pro4">“Mi batalla con la ansiedad afecta a todos los aspectos de mi vida y a todo lo que hago. Me pongo extremadamente nerviosa e incómoda cuando estoy con gente nueva y de siempre, constantemente me encuentro sin saber cómo abrirme a los demás o ni siquiera querer hacerlo. La ansiedad me aparta continuamente de participar en actividades como los clubs del colegio o eventos, salir con amigos, pasar tiempo con mi familia o incluso ir a mi clase de zumba. Tener ansiedad me mantiene lejos de tantos momentos maravillosos de la vida que me encantaría simplemente vivir”. Angie, 17 años, estudiante de segundo año de bachillerato.</p><br>
                    <li class="lipro5">5. No debería haber prejuicios.</li><br>
                    <p class="pro5">“Mi madre sufre desorden bipolar, ansiedad, depresión y alcoholismo. Cuando empecé Tercer ciclo empecé a tener ataques de pánico y de ansiedad, sobre todo después de las elecciones. Como estaba familiarizada con las enfermedades mentales, pude darme cuenta de que la ansiedad que sufría no era terrible y recibí la ayuda que necesitaba. Quiero que la gente entienda que no debe haber prejuicios por sufrir de enfermedades mentales, así estas enfermedades podrían ser abordadas y tratadas”. Emiliana, 15 años, estudiante de primer año de bachillerato.</p><br>
                    <li class="lipro6">6. La terapia y la medicación pueden ayudar mucho.</li><br>
                    <p class="pro6">“Desarrollé un desorden de ansiedad cuando tenía 14 años. Empecé a sufrir ataques de ansiedad cuando estudiaba para los exámenes de mates. Fui haciendo terapia intermitentemente durante dos años, y hace poco empecé a tomar medicación para la ansiedad que me ha estado ayudando bastante. Me daba miedo tomar medicación porque no quería que me etiquetaran como una loca o que la gente me juzgara por ello. ¡Pero a quién le importa! Mi lucha todavía no ha terminado, pero estoy mucho mejor”. Karla, 15 años, estudiante de primer año de bachillerato.</p><br>
                    <li class="lipro7">7. Quizás debas hacer cambios en tu vida para recuperarte</li><br>
                    <p class="pro7">“Debido a mi desorden de bipolaridad que derivó en ansiedad, y tengo que vivir una vida muy estructurada. Tomo mi medicación por la mañana con el desayuno y no me lo puedo saltar ni un día, apenas bebo, y necesito de 8 a 10 horas de sueño cada noche. Solía pensar que me hacía una persona aburrida en comparación con mi anterior estilo de vida, caracterizado por una gran impulsividad, fiesta, falta de responsabilidad con mis estudios. Pero echando la vista atrás estoy significativamente más sana y feliz por los cambios que he hecho. Mis amigos y familia han sido geniales conmigo en cuanto a mi condición, ofreciéndome apoyo y cariño incondicionales y me siento enormemente afortunada por ello. Lo que también me ha ayudado mucho a lidiar con mi enfermedad, junto con la medicación y la terapia, es hacer ejercicio regularmente; practico yoga diariamente y voy a todos lados caminando, lo que ha reducido mi ansiedad en general y ha debilitado los efectos de mi bipolaridad”. Veronica,18 años, estudiante de tercer año de bachillerato.</p>
                    <p><a href="../php/Ansiedad.php" class="leer2">Leer mas...</a></p><br>
                    <img src="../img/ds2.jpg" alt="">
              
            
          <a name="causas"><h2 class="sub2">Los adolescentes, al igual que los adultos, pueden experimentar estrés todos los días y se pueden beneficiar de aprender las destrezas para manejar el estrés. La mayoría de los adolescentes experimentan más estrés cuando perciben una situación como peligrosa, difícil o dolorosa y ellos no tienen los recursos para enfrentarla o abordarla. Algunas de las fuentes de estrés para los adolescentes pueden incluir:</h2></a><br>
          <li class="deri1">Las demandas y frustraciones de la escuela</li><br>
          <li class="deri2">Los pensamientos y sentimientos negativos sobre sí mismos</li><br>
          <li class="deri3">Los cambios en sus cuerpos</li><br>
          <li class="deri4">Los problemas con sus amigos y/o pares en la escuela</li><br>
          <li class="deri5">La separación o divorcio de sus padres</li><br>
          <p ><a href="../php/Estres.php" class="leer50">Read More...</a></p><br>

         <blockquote><h2 class="context10">Desarrollo personal</h2><br></blockquote>
            <p class="context11">Mis problemas comenzaron cuando fui transferido a un club de los denominados grandes. Siempre había soñado en llegar allí por ser hincha fanático desde mi infancia. ¿Y quién no querría jugar en un club grande de primera? </p>

               <p class="context12"> Pero sentí presión. Algo que nunca me había afectado en mi club natal. En los entrenamientos sacaba lo mejor de mí y para el técnico era titular clavado para el puesto. Pero no podía rendir en los partidos, y decaía aún más, en los considerados claves. Resumiendo, lo que los hincha llaman: “Le pesa la camiseta”.</p><br>
                
                <p class="context13">En la cancha, me obnubilaba. En cada participación mía, sentía en la nuca los ojos de miles de hinchas evaluándome, como si fuera a ejecutar un penal trascendente para el partido de una final definitoria. En la responsabilidad de resolver cada jugada de modo magistral, tal como precedía mi fama, me hacía dudar y no disfrutaba del juego mismo. Hasta que jugar se convirtió en un calvario y me quitaba descanso y sueño. Llegué al fondo del pozo cuando sufrí una lesión tonta, evitable, que yo mismo reconozco la busqué. Creí que iba a dejar los botines para siempre.</p><br>

                <p class="context14">Trabajé con los principios de la metafísica algún tiempo, y hoy soy querido por los hinchas y el cuerpo técnico. Rindo y doy satisfacciones tanto a ellos como a mí. Y fundamentalmente, CREO EN MÍ. La presión dejo de pesar en mi conciencia. Me confío plenamente y disfruto, y amo lo que hago que es jugar en el club de mis amores.</p><br>
                <p class="context15">"El desarrollo propio esta agarrado de la mano del autoestima y del amor propio, caernos es parte del proceso."</p>

                <p ><a href="../php/Autoestima.php" class="leer4">Leer mas...</a></p><br>
                 
                <blockquote><h2 class="context19">Falta de atención</h2><br></blockquote>

                <p class="context16">La infancia, la describe como perdida en sus propios pensamientos o en las nubes. Una niña tranquila, introvertida y tímida. En la escuela aprender le costaba trabajo. Era frustrante no ser aplicada como sus amigas, tambien su topreza motriz le generaba mucha frustracion al no poder jugar resorte, avioncito, quemados, bolley, basquet, igual que sus amigos del cole. Se aislaba por no encajar en los grupos de amigas. Esto repercutió en su autoestima y autoconcepto. Frecuentemente era humillada por sus compañeros de clase y/o maestros por sus dificultades de aprendizaje</p><br>
                <p class="context17">Qué decir en la adolescencia: matemáticas, física y química apenas pasaba los exámenes. Le costaba trabajo tomar decisiones, concentrarse. Quería estudiar una carrera que no tuviera números.</p><br>
                <blockquote> <h2 class="context18">En sus primeros años en Bachillerato, se esforzaba para entender las instrucciones, para hacer lo mejor posible el trabajo.</h2></blockquote><br>
                <p ><a href="../php/TDH.php" class="leer5">Leer mas...</a></p><br>
                                      
        </article>
        <div class="container-aside">
          <aside>
              <h2 class="more1">Lee mas sobre...</h2>
              <p ><a href="../php/Estres.php" class="more2">¿Qué es el estrés?</a></p>
              <p ><a href="../php/Ansiedad.php"class="more3">¿Que es la ansiedad?</a></p>
              <p ><a href="../php/Depresion.php"class="more4">¿Que es la depresion?</a></p>
              <p ><a href="../php/TDH.php"class="more5">¿Que es el TDAH?</a></p>
              <p ><a href="../php/Autoestima.php"class="more6">Desarrollo personal</a></p>
                  
          </aside>
        </div>
    </div>
    <footer>
        <ul class="footer_ul">
            <li><a href="../php/Home.php" class="fo_link" id="fo1">Home</a></li>
            <li><a href="../php/Identidad.php"class="fo_link" id="fo2">Sobre nosotros</a></li>
            <li><a href="../php/Psicologos.php"class="fo_link" id="fo3">Psicologos</a></li>
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
                <li><a href="https://www.instagram.com/innerpeace_cdb/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" class="instagram"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="#fff"></path> </svg></a></li>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"viewBox="0 0 16 16" class="facebook"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg></a></li>
                <li><a href=""><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 330.001 330.001" style="enable-background:new 0 0 330.001 330.001; fill: white;" xml:space="preserve">
               <g id="XMLID_348_">
                   <path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
                       L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"
                       />
                   <polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"/>
               </g></svg>
               </a></li>
            </ul>
        </div>
         <div class="translatebutton">
                <input type="checkbox" name="translate" id="translate">
             <label for="translate" class="trans"></label>
         </div>
    </footer>

    
    <!-- Script translate -->
   <script src="../js/Translate/casoclinico.js"></script>


</body>
</html>