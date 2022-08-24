<?php
session_start();

if(!isset($_SESSION["usuario"])){
    header("location: ../php/acceso denegado.php");  
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
    <link rel="stylesheet" href="../css/footer.css">}
    <link rel="stylesheet" href="../css/Chatbot.css">
    <link rel="stylesheet" href="../css/Ansiedadstyle.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    
    <title>Inner Peace - Ansiedad</title>
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

    <div class="container-content">
        <article>
            <blockquote><h2 id="first-quote">La ansiedad</h2></blockquote>

            <h3><a name="que es" id="second-quote">¿Qué es la ansiedad?</a></h3>

            <p class="context" id="tree-quote">La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen o antes de tomar una decisión importante. Si bien la ansiedad puede ayudar a enfrentar una situación, además de darle un impulso de energía o ayudarle a concentrarse, para las personas con trastornos de ansiedad el miedo no es temporal y puede ser abrumadora.</p>

            <blockquote><h3><a name="signos" id="problema1">¿Cuales son los signos o sintomas de la ansiedad?</a></h3></blockquote>

            <p id="problema2">Los signos y síntomas de la ansiedad más comunes incluyen los siguientes:
            <p>
                <ul>
                    <li id="li1">Sensación de nerviosismo, agitación o tensión</li>

                    <li id="li2">Sensación de peligro inminente, pánico o catástrofe</li>
                 
                    <li id="li3">Aumento del ritmo cardíaco</li>

                    <li id="li4">Respiración acelerada (hiperventilación)</li>

                    <li id="li5">Sudoración</li>

                    <li id="li6">Temblores</li>

                    <li id="li7">Sensación de debilidad o cansancio</li>

                    <li id="li8">Preocupación actual</li>

                    <li id="li9">Tener problemas para conciliar el sueño</li>

                    <li id="li10">Padecer problemas gastrointestinales (GI)</li>
                    <li id="li11">Tener dificultades para controlar las preocupaciones</li>
                    <li id="li12">Tener la necesidad de evitar las situaciones que generan ansiedad.</li>

                </ul></p></p>

                <div class="img_list"><img src="../img/ansiedad_tema2.jpg" class="tema_img"></div>
                <blockquote><h3 id="problema3"><a name="tipos">Tipos de trastornos de ansiedad</a></h3></blockquote>
                                <p>
                                    <ul>
                                        <li id="li13">La agorafobia es un tipo de trastorno de ansiedad en el que temes a lugares y situaciones que pueden causarte pánico o hacerte sentir atrapado, indefenso o avergonzado y a menudo intentas evitarlos.</li>
                                        
                                        <li id="li14">El trastorno de ansiedad debido a una enfermedad incluye síntomas de ansiedad o pánico intensos que son directamente causados por un problema de salud físico</li>

                                        <li id="li15">El trastorno de ansiedad generalizada se caracteriza por una ansiedad y una preocupación persistentes y excesivas por actividades o eventos, incluso asuntos comunes de rutina. La preocupación es desproporcionada con respecto a la situación actual, es difícil de controlar y afecta la forma en que te sientes físicamente. A menudo sucede junto con otros trastornos de ansiedad o con la depresión.</li> 

                                        <li id="li16">El trastorno de pánico implica episodios repetidos de sensaciones repentinas de ansiedad y miedo o terror intensos que alcanzan un nivel máximo en minutos (ataques de pánico). Puedes tener sensaciones de una catástrofe inminente, dificultad para respirar, dolor en el pecho o latidos rápidos, fuertes o como aleteos (palpitaciones cardíacas). Estos ataques de pánico pueden provocar que a la persona le preocupe que sucedan de nuevo o que evite situaciones en las que han sucedido.</li>

                                        <li id="li17">El mutismo selectivo es una incapacidad constante que tienen los niños para hablar en ciertas situaciones, como en la escuela, incluso cuando pueden hablar en otras situaciones, como en el hogar con miembros cercanos de la familia. Esto puede afectar el desempeño en la escuela, el trabajo o en la sociedad.</li>

                                        <li id="li18">El trastorno de ansiedad por separación es un trastorno de la niñez que se caracteriza por una ansiedad que es excesiva para el nivel de desarrollo del niño y que se relaciona con la separación de los padres u otras personas que cumplen una función paternal</li>

                                        <li id="li19">El trastorno de ansiedad social (fobia social) implica altos niveles de ansiedad, miedo o rechazo a situaciones sociales debido a sentimientos de vergüenza, inseguridad y preocupación por ser juzgado o percibido de manera negativa por otras personas</li>

                                        <li id="li20">Las fobias específicas se caracterizan por una notable ansiedad cuando la persona se ve expuesta a un objeto o situación específicos, y un deseo por evitarlos. En algunas personas, las fobias provocan ataques de pánico.</li>
                                    </ul>
                                </p>
                                       </p>
                                        <blockquote><a name="causas"><h3 id="problema4">Causas de la ansiedad</h3></a></blockquote>
                                       <p class="context" id="problema5">Para algunas personas, la ansiedad puede estar relacionada con un problema de salud oculto. En algunos casos, los signos y síntomas de ansiedad son los primeros indicadores de una enfermedad. Si el médico sospecha que la ansiedad que tienes puede tener una causa médica, quizás te indique análisis para buscar los signos del problema.Algunos ejemplos de problemas médicos que pueden estar relacionados con la ansiedad incluyen los siguientes:</p>

                                       <p>
                                           <ul>
                                               <li id="li21">Enfermedad cardíaca</li>

                                               <li id="li22">Diabetes</li>

                                               <li id="li23">Problemas de tiroides, como el hipertiroidismo</li>

                                               <li id="li24"> Trastornos respiratorios, como la enfermedad pulmonar obstructiva crónica (EPOC) o el asma</li>

                                               <li id="li25">Uso inadecuado de sustancias o abstinencia</li>

                                               <li id="li26">Abstinencia del alcohol, de medicamentos contra la ansiedad (benzodiazepinas) o de otros medicamentos</li>

                                               <li id="li27">Dolor crónico o síndrome de intestino irritable</li>

                                               <li id="li28">Tumores poco frecuentes que producen hormonas de reacción de “luchar o huir”</li>
                                           </ul>
                                       </p>
                                       <!-- <video src="../Videos/y2mate.com - 3 Trastorno de ansiedad y depresión Salud emocional_1080p.mp4" type="video/mp4" width="500" height="300" controls></video><br><cite id="cite">Video gracias a: 
                                        OsakidetzaEJGV en YouTube</cite> -->
                                        <iframe width="853" height="480" src="https://www.youtube.com/embed/StIyeHmS8ts" title="3. Trastorno de ansiedad y depresión. Salud emocional" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                       <blockquote><h2 class="context" id="problema6">En ocasiones, la ansiedad puede ser un efecto secundario de algunos medicamentos.Es posible que la ansiedad que te aqueja esté causada por una enfermedad oculta en los siguientes casos:</h2></blockquote> 
                                       <p>
                                           <ul>
                                               <li id="li29">Si no tienes parientes consanguíneos (como padres o hermanos) que tengan trastornos de ansiedad</li>

                                               <li id="li30">Si no tuviste un trastorno de ansiedad en la infancia</li>

                                               <li id="li31">Si no evitas ciertas cosas o situaciones a causa de la ansiedad</li>

                                               <li id="li32">Si la ansiedad se presenta de forma repentina sin estar relacionada con los eventos de la vida o si no tienes antecedentes de ansiedad</li>
                                           </ul>

                                       </p>
                                       <blockquote><h3><a name="tips" id="problema7">Tips para aliviar la ansiedad<</a></h3></blockquote>
                                       <p>
                                           <ul>
                                               <li id="li33">Duerma lo suficiente.</li>
                                               <li id="li34">Coma alimentos saludables</li>
                                               <li id="li35">Mantenga un horario diario regular</li>
                                               <li id="li36">Salga de la casa todos los días.</li>
                                               <li id="li37">Haga ejercicio todos los días.</li>
                                               <li id="li38">Manténgase alejado del alcohol y las drogas ilícitas.</li>
                                               <li id="li39">Hable con familiares o amigos cuando se sienta nervioso o asustado</li>
                                           </ul>
                                       </p>
                                       <img src="../img/ansiedad12.png" alt="">
        </article>

        <div class="container-aside">


          <aside>
              <img src="/IMG/Imagenes del blog/imagenen para el blogg muestra.jfif" alt="">
              <h2 id="footer00">La ansiedad</h2>
              <p><a href="#que es" id="footer1">¿Qué es la ansiedad?</a></p>
              <p><a href="#signos" id="footer2">Sintomas de la ansiedad</a></p>
              <p><a href="#tipos" id="footer3">Tipos de ansiedad</a></p>
              <p><a href="#causas" id="footer4">Causas de la ansiedad</a></p>
              <p><a href="#tips" id="footer5">Tips para la ansiedad</a></p>
                  
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
   <script src="../js/Translate/ansiedad.js"></script>
 
</body>
</html>