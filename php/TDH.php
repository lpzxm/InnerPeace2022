<?php
session_start();

if(!isset($_SESSION["usuario"])){
   
    header("location:../php/acceso denegado.php");  
   }

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
    <link rel="stylesheet" href="../css/TDHstyle.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    
    <title>Inner Peace - TDH</title>
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
            <li><a href="../php/casos clinicos.php" class="navlink" id="link3">Blog</a></li>
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
    <a href="../bot/bot.php">
    <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible">PeaceBot 🤖</button>
    </div></a>
    <section class="home" id="home">
        <div class="home-text">
          </div>
    </section >

    <div class="container-content">
        <article>
            <h1 id="tex1">Falta de atención</h1>
            <a name="que es"><h2 id="tex2">¿Qué es el TDH?</h2></a>
            <p class="context" id="tex3">El trastorno por déficit de atención e hiperactividad (TDAH) es un trastorno mental que comprende una combinación de problemas persistentes, como dificultad para prestar atención, hiperactividad y conducta impulsiva. El TDAH en los adultos puede llevar a relaciones inestables, mal desempeño en el trabajo o en la escuela, baja autoestima y otros problemas.</p>
            <a name="signos"><h2 id="tex4">¿Cuales son los signos o sintomas del TDH?</h2></a>
            <p id="tex5">Algunas personas con TDAH tienen menos síntomas a medida que envejecen, pero algunos adultos siguen teniendo síntomas importantes que interfieren en su vida diaria. En el caso de los adultos, algunas de las características principales del TDAH pueden ser dificultad para prestar atención, impulsividad e inquietud. Los síntomas pueden oscilar entre leves y graves.</p>
            <p id="tex6">Muchos adultos con TDAH no saben que lo tienen; solo saben que las tareas cotidianas pueden resultarles difíciles. Los adultos con TDAH pueden tener dificultades para concentrarse y establecer prioridades, lo que suele ocasionar que no cumplan con fechas límite y se olviden de reuniones o eventos sociales. La incapacidad para controlar los impulsos puede oscilar entre tener impaciencia al esperar en una fila o al conducir con mucho tránsito, y tener cambios de humor y arrebatos de ira. Algunos de los síntomas del TDAH en adultos son los siguientes:</p>
            <p>
                <ul>
                    <li id="tex7">Impulsividad</li>
                    <li id="tex8">Desorganización y problemas para establecer prioridades</li>
                    <li id="tex9">Escasas habilidades para administrar el tiempo</li>
                    <li id="tex10">Problemas para concentrarse en una tarea</li>
                    <li id="tex11">Problemas para realizar múltiples tareas a la vez</li>
                    <li id="tex12">Actividad excesiva o inquietud</li>
                    <li id="tex13">Escasa planificación</li>
                    <li id="tex14">Baja tolerancia a la frustración</li>
                    <li id="tex15">Cambios de humor frecuentes</li>
                </ul></p>
                <div class="img_list"><img src="../img/tdh_tema.jpg" class="tema_img"></div>
                <a name="tipos"><h2 id="tex16">Tipos de TDH</h2></a>
                                <p>
                                    <ul>
                                        <li id="tex17">TDAH, presentación predominante hiperactiva/impulsiva.
                                            Los niños que tienen este tipo de TDAH presentan síntomas de hiperactividad y sienten la necesidad de moverse constantemente. También tienen dificultad para controlar sus impulsos. Por lo general no tienen problemas de atención. Esta presentación se ve más a menudo en niños pequeños.</li> 
                                        <li id="tex18">TDAH, presentación predominante con falta de atención.
                                            Los niños que tienen este tipo de TDAH tienen dificultad para prestar atención. Se distraen con facilidad pero noson impulsivos ohiperactivos. A veces se denomina de manera no oficial como trastorno por déficit de atención o TDA.</li> 
                                        <li id="tex19">TDAH, presentación combinada.
                                            Los niños que tienen este tipo de TDAH muestran problemas significativos, tanto de hiperactividad/impulsividad como de falta de atención. Sin embargo, puede que esos problemas de hiperactividad/impulsividad disminuyan gradualmente al aproximarse la adolescencia.</li> 
                                    </ul>
                                </p>
                                       </p>
                                        <a name="causas"><h2 id="tex20">Causas del TDH</h2></a>
                                       <p class="context" id="tex21">Aunque la causa exacta del TDAH no está clara, las investigaciones continúan. Los factores que pueden estar involucrados en el desarrollo del TDAH incluyen la genética, el medio ambiente o problemas con el sistema nervioso central en momentos clave del desarrollo.</p>
                                       <a name="tips"><h2 id="tex22">Tips para tratar el TDH</h2></a>
                                       <p>
                                           <ul >
                                               <li id="tex23">Motívate para levantarte por la mañana. Algunos días te cuesta mucho levantarte. A esa hora de la mañana sueles tener hambre. Piensa en un buen desayuno y en cómo lo vas a preparar. Eso te sacará de la cama antes.
                                            </li>
                                               <li id="tex24">Haz deporte. El ejercicio físico mejora mucho la atención sostenida. Aunque pierdas algo de tiempo de estudio, dedicar 1 hora 3 veces por semana a hacer ejercicio mejorará tus funciones ejecutivas.
                                               <li id="tex25">Prepara esquemas todos los días. Cada día, cuando te sientes a estudiar por la tarde (aunque no tengas examen) haz esquemas de lo que has aprendido en el colegio. Resalta con colores los diferentes apartados según su importancia. Cuando tengas que prepararte el examen estudia sobre el esquema. Te será mucho más fácil memorizarlo.
                                            </li>
                                               <li id="tex26">Estudia en voz alta. Cuando la información llega al cerebro por el oído se fija en la memoria más fácilmente que cuando sólo la lees.
                                            </li>
                                               <li id="tex27">Utiliza check-lists. Como hacen los pilotos cada vez que despegan o aterrizan, con las tareas rutinarias ¡y eso que las hacen varias veces todos los días! No te fíes de tu memoria. Haz una lista de tareas para salir de casa por la mañana (material que debes meter en la cartera, almuerzo, recoger la habitación, cepillar los dientes, llevar la ropa sucia a su sitio -si te has cambiado-, coger las llaves), y otra para antes de acostarte. Ponlas en sitios visibles y compruébalas cada día, como si fuera la primera vez.
                                            </li>
                                           </ul>
                                       </p>
                                       <!-- <video src="../Videos/y2mate.com - 6 Señales y Síntomas de TDAH  Psych2Go ESPAÑOL_1080p.mp4" width="500" height="300" controls ></video><br> -->
                                       <iframe width="853" height="480" src="https://www.youtube.com/embed/eFuCxsnq3A0" title="6 Señales y Síntomas de TDAH | Psych2Go ESPAÑOL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                       <cite id="cite">Video gracias a: Psycho2go</cite>
        </article>
        <div class="container-aside">
          <aside>
              <h2 id="aside_tit">Falta de atención</h2>
              <p><a href="#que es" id="tex28">¿Qué es el TDH?</a></p>
              <p><a href="#signos" id="tex29">Sintomas del TDH</a></p>
              <p><a href="#tipos" id="tex30">Tipos de TDH</a></p>
              <p><a href="#causas" id="tex31">Causas del TDH</a></p>
              <p><a href="#tips" id="tex32">Tips para tratar el TDH</a></p>
                  
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
  <script src="../js/Translate/TDH.js"></script>
</body>
</html>