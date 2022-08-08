<?php
// include("../php/auth/auth_session.php");
session_start();

function obtenerUsuario(){

    if (isset($_SESSION["usuario"])) {
        return "salir";
    }
    return "entrar";
}

function salidaBtn(){
    if (isset($_SESSION["usuario"])) {
        return "desaparecer";

    }
    return "";
}

function retonarName(){
    if (isset($_SESSION["usuario"])){
        return $_SESSION["usuario"];
    }
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
    <link rel="stylesheet" href="../css/homestyle.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    <title>Inner Peace</title>
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
    <a href="../php/bot.php">
    <div class="chat-bar-collapsible">
        <button id="chat-button" type="button" class="collapsible">PeaceBot 🤖</button>
    </div></a>

        <div class="container-slider">
            <div class="boton">
                <div class="flecha invertido izquierda"></div>
                <div class="flecha derecha"></div>
              </div>
            <div class="slider">
              <section id="hero">
               
              </section>
              <section id="hero">
                
              </section>
              <section id="hero">
                
              </section>
              <section id="hero">
                
              </section>
              <section id="hero">
                
              </section>
            </div>
            <div class="container-circulo">
              <div class="circulo active-circulo"></div>
              <div class="circulo"></div>
              <div class="circulo"></div>
              <div class="circulo"></div>
              <div class="circulo"></div>
            </div>
            <figure>
                <div class="capa">
                    <div class="contenido">
                        <h1><span id="pal1">Bienvenido</span>  <?=retonarName();?> <span id="pal2">a la pagina de salesianidad mental</span></h1>
                        <p id="contenido2">"Mi satisfacción es verte alegre - Don Bosco"</p>
                        <a href="../php/InicioSesion copy.php" class="button <?=salidaBtn(); ?>" id="boton1">Vamos!</a>
                    </div>
                </div>
            </figure>
        </div>


    <section>
        <h1 class="service_title" id="title1">Servicios de psicologia que tratamos</h1>
        <hr>
    <div class="container_card">
        <div class="card_padre">
            <div class="card">
                <div class="card_front" style="background-image: url(../img/ansiedad_card.jpg);">
                    <div class="body_card_face">
                        <h1 id="ansiedad">Ansiedad</h1>
                    </div>
                </div>
                <div class="card_back">
                    <div class="body_card_back">
                        <h1 id="ansiedad_ask">¿Qué es la Ansiedad?</h1>
                        <p id="ansiedad_info">La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen, etc.</p>
                        <a href="../php/Ansiedad.php"><input type="button" value="Leer más" class="inptbtn" id="ansiedadbtn"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card_padre">
            <div class="card">
                <div class="card_front" style="background-image: url(../img/depresion_card.jpg);">
                    <div class="body_card_face">
                        <h1 id="depresion">Depresión</h1>
                    </div>
                </div>
                <div class="card_back">
                    <div class="body_card_back">
                        <h1 id="depresion_ask">¿Qué es la depresión?</h1>
                        <p id="depresion_info">La depresión clínica, es una enfermedad grave y común que nos afecta física y mentalmente en nuestro modo de sentir y de pensar. La depresión nos puede provocar deseos de alejarnos de nuestra familia, amigos, trabajo, y escuela. Puede además causarnos ansiedad, pérdida del sueño, del apetito, y falta de interés o placer en realizar diferentes actividades.</p>
                        <a href="../php/Depresion.php"><input type="button" value="Leer más" class="inptbtn" id="deprebtn"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card_padre">
            <div class="card">
                <div class="card_front" style="background-image: url(../img/autoestima_card.jpg);">
                    <div class="body_card_face">
                        <h1 id="autoestima">Autoestima y desarrollo personal</h1>
                    </div>
                </div>
                <div class="card_back">
                    <div class="body_card_back">
                        <h1 id="autoestima_ask">¿Qué es la autoestima y el desarrollo personal?</h1>
                        <p id="autoestima_info">La autoestima es la percepción o idea que una persona tiene acerca de sí mismo, su valía, sus capacidades y cómo de satisfecho se siente consigo mismo. La autoestima influye en los pensamientos y sentimientos que experimentamos a diario, pudiendo ser la principal fuente de malestar. Además, la autoestima condiciona la manera de actuar ante los problemas y los retos. </p>
                        <a href="../php/Autoestima.php"><input type="button" value="Leer más" class="inptbtn" id="autobtn"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card_padre">
            <div class="card">
                <div class="card_front" style="background-image: url(../img/estres_card.jpg);">
                    <div class="body_card_face">
                        <h1 id="estres">Estrés</h1>
                    </div>
                </div>
                <div class="card_back">
                    <div class="body_card_back">
                        <h1 id="estres_ask">¿Qué es el estrés?</h1>
                        <p id="estres_info">El estrés puede definirse como un conjunto de reacciones fisiológicas que se presentan cuando una persona sufre un estado de tensión nerviosa, producto de diversas situaciones en el ámbito laboral o personal: exceso de trabajo, ansiedad, situaciones traumáticas que se hayan vivido, etc.</p>
                        <a href="../php/Estres.php"><input type="button" value="Leer más" class="inptbtn" id="estresbtn"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card_padre">
            <div class="card">
                <div class="card_front" style="background-image: url(../img/atencion_card.jpg);">
                    <div class="body_card_face">
                        <h1 id="falta">Falta de atención</h1>
                    </div>
                </div>
                <div class="card_back">
                    <div class="body_card_back">
                        <h1 id="falta_ask">¿Qué es la falta de atención?</h1>
                        <p id="falta_info">El trastorno por déficit de atención e hiperactividad (TDAH) es una afección crónica que afecta a millones de niños y a menudo continúa en la edad adulta. El TDAH incluye una combinación de problemas persistentes, tales como dificultad para mantener la atención, hiperactividad y comportamiento impulsivo.</p>
                        <a href="../php/TDH.php"><input type="button" value="Leer más" class="inptbtn" id="tdhbtn"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <section class="intencion">
        <div class="container_intencion">
            <div class="intencion_content">
                <h1 class="tit_intencion">Inner Peace como tu amigo</h1>
                <p class="desc_intencion">Inner Peace pretende ayudar a los estudiantes con problemas o padecimientos psicologicos mediante soluciones interactivas para que obtengas un crecimiento mental y te sientas bien contigo mismo</p>
            </div>
        </div>
        <div class="img_container">
            <img src="../img/img_ban.jpg" alt="">
        </div>
        
    </section> 
    <!-- <div class="container_btn">
        <div class="btn_flotante">
            <a class="btn" href="#"><img src="../img/bot (1).png" alt=""></a>
        </div>
    </div> -->
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
   <script src="../js/translateindex.js"></script>

   <!-- Chatbot script -->
   <script src="../js/Chatbot.js"></script>

   <!--slider -->
   <script src="../js/slider1.js"></script>

</body>
</html>