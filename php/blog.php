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
    <link rel="stylesheet" href="../css/Blogstyle.css">
    <link rel="stylesheet" href="../css/loading.css">
    <link rel="stylesheet" href="../css/scrollbar.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    <title>Inner Peace - Blog</title>
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
            <br>
            <br>
            <br>

            <h1>¿Cómo sanar las heridas de la infancia?</h1>
            <br>
            <p> Todos podemos reconocer algún patrón que tenemos que no nos gusta. Quizás sentimos mucho miedo al abandono, o necesidad de aceptación. Quizás por el contrario, tendemos a ser demasiado independientes y a terminar nuestras relaciones con aparente facilidad. Estos patrones suelen tener origen en nuestras heridas de infancia. </p>

               <p> Estos patrones surgen a partir de ciertas experiencias dolorosas que tuvimos durante nuestros primeros años de vida, son la manera en la que nos pudimos enfrentar a este dolor. Sin embargo, pasa que seguimos repitiéndolos a lo largo de nuestra vida, una y otra vez, a pesar de que ya no sean necesarios,  y, en ocasiones, sean inconvenientes. Por eso, hoy te queremos compartir algunas herramientas que te pueden ayudar a sanar tus heridas de la infancia.</p>
            <br>
            


                                  <h2>¿Cómo comienzo a sanar mis heridas de infancia?</h2>
                                  <br>

                                  <p>El primer paso es comprenderlas y aceptar que están ahí por un motivo. No fue tu culpa desarrollar estas tendencias, tú no las elegiste ni las buscaste. Son el resultado de una infancia dolorosa (o quizás simplemente imperfecta), son el resultado de cuidadores que hicieron lo que pudieron con lo que sabían en el momento.</p>

                                   <p> Básicamente, son las estrategias que desarrollamos para sobrevivir algo que en su momento no pudimos comprender. Sin embargo, hoy podemos observarlas, comprenderlas y con sabiduría elegir distinto. Desde el presente podemos tomar acción y comenzar a hacer cambios por nuestro bienestar. Te contamos algunos pasos a seguir para hacerlo:</p>


                                    <h1>Identificar nuestras heridas de infancia</h1>
                                    <p>Un paso importante para sanar nuestras heridas es identificarlas. Es ver en qué situaciones de nuestra vida se presentan. Puedes hacerte las siguientes preguntas:</p>
                                        <br>
                                        <ul>
                                        <li>¿Qué situaciones me gatillan?</li>
                                        <li>¿Qué situaciones activan mis emociones rápidamente?</li>
                                        <li>¿A qué situaciones reacciono con más intensidad que otras personas?</li>
                                        <li>¿Qué creencias limitantes tengo sobre mi mismo/a?</li>
                                        <li>¿A qué problemas tiendo en mis relaciones?</li>
                                        <br>
                                        <p>Estas preguntas te ayudarán a comprender tus heridas de infancia. Quizás puedas entender de dónde vienen, pueden venir de la relación con alguno de tus cuidadores, o de alguna experiencia muy puntual. También puede pasar que no entiendas por qué está esa herida, no te preocupes demasiado si eso sucede. Hay experiencias que no podremos recordar o entender, el punto es hacer el esfuerzo de sanar lo que vemos en el presente. El siguiente paso para sanar es procesar nuestras emociones.</p>
                                        </ul>
                                        <br>
                                        <br>
                                        <br>
                                       <h2>Procesar nuestras emociones</h2>
                                       <br>
                                       <p>Gran parte de sanar es reconocer las emociones que nos traen las situaciones que nos gatillan, y permitirnos sentirlas. Implica aceptar cualquier emoción, incluso si son emociones que no nos gustan o no quisiéramos que estén. Cuando aparezcan estas emociones, permítete hacer el siguiente ejercicio:</p>
                                       <br>
                                       <ol>
                                           <li>Respira. Haz respiraciones largas y profundas. Una emoción es un evento transitorio, lo que sea que estés experimentando va a pasar.</li>
                                           <br>
                                           <li>Permítete sentir lo que sea que esté ahí. Está bien lo que sea que estés sintiendo. Puedes observar cómo se siente la emoción en tu cuerpo.</li>
                                           <br>
                                           <li>Conecta. Observa qué necesitas para sentir esa emoción (llorar, estar a solas, pedir un abrazo).</li>
                                           <br>
                                           <li>Suéltala. Déjala estar sin juzgarla o rechazarla. No podemos sanar sin sentir todo lo que en algún momento dolió.</li>
                                       </ol>
                                       <p>Este ejercicio permite estar en contacto y atravesar el dolor que en algún momento tuvimos. Nos permite observar las situaciones que nos gatillan desde la sabiduría</p>
                                       <br>
                                       
                                       <h2>Reparenting</h2>
                                       <br>
                                       <p>Un aspecto esencial de la sanación de nuestro niño interior es el “reparenting”. Este concepto se refiere a cuidarnos y darnos herramientas a nosotros mismos como desearíamos que nuestros cuidadores lo hubieran hecho. Implica reconocer aquellas cosas que no nos enseñaron (por ejemplo, cubrir nuestras necesidades, establecer límites, cuidarnos) y aprender a hacerlo ahora. Básicamente es darnos aquello que no recibimos. </p>
                                        <br>
                                       <li>Implica ciertos componentes:</li>
                                       <br>
                                       <ul>
                                           <li>Autocuidado: Se refiere a cuidarnos como nos hubiese gustado ser cuidados. Es aprender sobre cuáles son nuestras necesidades y cubrirlas. Puede ser el tomar agua, descansar lo suficiente, o darnos más cariño en los días difíciles. Lo que necesites, está bien. Para hacerlo, date una pausa una vez al día y pregúntate: ¿Qué necesito en este momento?</li>
                                           <br>
                                           <li>Disciplina amorosa: Esta es la práctica de mantener las promesas con nosotros mismos. De animarnos a hacer aquello que sabemos que es bueno para nosotros. Puede ser, por ejemplo, al mantener la promesa de dormirnos temprano o de meditar 5 minutos todos los días.</li>
                                           <br>
                                           <li>Juego: Muchas veces, como adultos, perdemos esta noción del juego. Perdemos esta idea de ser espontáneos, disfrutar el momento presente y simplemente dejarnos en manos de nuestra imaginación. Permítete jugar en tu día a día, crear solo para crear, descansar, tomarte las cosas a la ligera, hacer algo solo por divertirte. </li>
                                           <br>
                                           <li>Compasión y amor incondicional: Esto se refiere a aprender a darnos permiso de ser quienes somos, de sentir nuestras emociones, de reconocer que estamos en constante cambio, de reconocer nuestra humanidad y que podemos equivocarnos.</li>
                                       </ul>
        </article>

        <div class="container-aside">


          <aside>
              <br>
              <br>
              <h2>¿Que es la ansiedad?</h2>
              <p> La ansiedad es un sentimiento de miedo, temor e inquietud. Puede hacer que sude, se sienta inquieto y tenso, y tener palpitaciones. Puede ser una reacción normal al estrés. Por ejemplo, puede sentirse ansioso cuando se enfrenta a un problema difícil en el trabajo, antes de tomar un examen o antes de tomar una decisión importante. Si bien la ansiedad puede ayudar a enfrentar una situación, además de darle un impulso de energía o ayudarle a concentrarse, para las personas con trastornos de ansiedad el miedo no es temporal y puede ser abrumadora.</p>
                  <a href="../html/Ansiedad.html"><button>Leer mas</button></a>
          </aside>

          <aside>
            <h2>¿Que es el estres? </h2>
            <p>El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad. Un estresor o factor estresante puede ser algo que ocurre una sola vez o a corto plazo, o puede suceder repetidamente durante mucho tiempo.</p>
                <a href="../html/Estres.html"><button>Leer mas</button></a>
        </aside>

        <aside>
            
            <h2>Desarrollo personal y autoestima</h2>
            <p> La autoestima influye en los pensamientos y sentimientos que experimentamos a diario, pudiendo ser la principal fuente de malestar. Además, la autoestima condiciona la manera de actuar ante los problemas y los retos.</p>
                <a href="../html/Autoestima.html"><button>Leer mas</button></a>
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
  <script src="../js/Translate/translateblog.js"></script>
    <!-- loading script -->
    <script>
        window.addEventListener("load", () =>{
            const loader = document.querySelector(".loader");
            loader.classList.add("loader-hidden");

            loader.addEventListener("transtitionend", () =>{
                document.body.removeChild("loader");
            })
        })
    </script>

</body>
</html>