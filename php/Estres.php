<?php
session_start();

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
    <link rel="stylesheet" href="../css/Estrestyle.css">
    <link rel="stylesheet" href="../css/loading.css">
    <link rel="stylesheet" href="../css/scrollbar.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">

    <title>Inner Peace - Estrés</title>
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
    <a href="../php/bot.php">
        <div class="chat-bar-collapsible">
            <button id="chat-button" type="button" class="collapsible">PeaceBot 🤖</button>
        </div>
    </a>
    <div class="container-content">
        <article>
            <h1 class="tx1">El estrés</h1><br>
            <h3><a name="que es" class="text1">¿Qué es el estrés?</a></h3>
            <p class="context"> El estrés es la respuesta física o mental a una causa externa, como tener muchas tareas o padecer una enfermedad. Un estresor o factor estresante puede ser algo que ocurre una sola vez o a corto plazo, o puede suceder repetidamente durante mucho tiempo.</p>
            <a name="signos" id="tx2">
                <h2>¿Cuales son los signos o sintomas de el estrés?</h2>
            </a>
            <p id="tx3">El estrés puede causar muchos tipos de síntomas físicos y emocionales. Algunas veces posiblemente no se dará cuenta de que estos síntomas son ocasionados por el estrés. Aquí hay algunos signos de que el estrés le puede estar afectando:
            <p>
            <ul>
                <li id="tx4">Diarrea o estreñimiento</li>
                <li id="tx5">Mala memoria</li>
                <li id="tx6">Dolores y achaques frecuentes</li>
                <li id="tx7">Dolores de cabeza</li>
                <li id="tx8">Falta de energía o concentración</li>
                <li id="tx9">Problemas sexuales</li>
                <li id="tx10">Cuello o mandíbula rígidos</li>
                <li id="tx11">Cansancio</li>
                <li id="tx12">Problemas para dormir o dormir demasiado</li>
                <li id="tx13">Malestar de estómago</li>
                <li id="tx14">Pérdida o aumento de peso</li>
            </ul>
            </p>
            </p>

            <blockquote><a name="tipos">
                    <h2 id="tx15">Tipos de estrés</h2>
                </a></blockquote>
            <p id="tx16">El estrés es un sentimiento normal. Hay dos tipos principales de estrés:</p>
            <p>
            <ul>
                <li id="tx17">Estrés agudo. Este es estrés a corto plazo que desaparece rápidamente. Puede sentirlo cuando presiona los frenos, pelea con su pareja o esquía en una pendiente. Esto le ayuda a controlar las situaciones peligrosas. También ocurre cuando hace algo nuevo o emocionante. Todas las personas sienten estrés agudo en algún momento u otro.</li>
                <li id="tx18">Estrés crónico. Este es el estrés que dura por un período de tiempo prolongado. Usted puede tener estrés crónico si tiene problemas de dinero, un matrimonio infeliz o problemas en el trabajo. Cualquier tipo de estrés que continúa por semanas o meses es estrés crónico. Puede acostumbrarse tanto al estrés crónico que no se de cuenta que es un problema. Si no encuentra maneras de controlar el estrés, este podría causar problemas de salud.</li>
            </ul>


            <blockquote>
                <h2 id="tx19">Qué es y por qué se genera el estrés académico</h2>
            </blockquote><br>

            <p id="tx20">El estrés académico es la reacción normal que tenemos frente a las diversas exigencias y demandas a las que nos enfrentamos en la Universidad, tales como pruebas, exámenes, trabajos, presentaciones, etc. Esta reacción nos activa y nos moviliza para responder con eficacia y conseguir nuestras metas y objetivos. Sin embargo, en ocasiones, podemos tener demasiadas exigencias al mismo tiempo, lo que puede agudizar la respuesta y disminuir nuestro rendimiento.</p><br>

            <blockquote>
                <h2 id="tx21">Estresores académicos</h2>
            </blockquote><br>
            <p id="tx22">Las exigencias que pueden dar origen al estrés son de dos tipos:</p><br>
            <li id="tx23">Exigencias Internas: es decir, las que nos realizamos a nosotros mismos cuando somos muy autoexigentes, tenemos altas expectativas de logro, necesitamos mantener el control y nos esforzamos en ellos, entre otros.</li><br>
            <li id="tx24">Exigencias Externas: es decir, las que nos va presentando nuestro entorno, dentro de las cuales destacan tener que entregar trabajos y rendir pruebas y exámenes en un tiempo acotado; realizar trabajos en grupo; exponer frente al curso (disertaciones); no entender contenidos abordados en la clase; tiempo limitado para las obligaciones académicas, entre otros.</li><br>
            <a name="causas"></a>
            <blockquote>
                <h2 id="tx25">Estresores no académicos</h2>
            </blockquote><br>
            <p id="txz">Además de lo académico, debemos considerar una serie de situaciones vitales que nos estresan y que repercuten también en nuestro estado emocional y físico. A continuación se presenta una adaptación de la escala de Holmes y Rahe, con el listado de situaciones estresantes más comunes:</p><br>
            <ul>
                <li id="tx26">Lesión o enfermedad personal</li><br>
                <li id="tx27">Cambio de salud de un miembro de la familia</li><br>
                <li id="tx28">Adicción y/o alcoholismo (propio o de cercano)</li><br>
                <li id="tx29">Incorporación de un nuevo miembro a la familia</li><br>
                <li id="tx30">Muerte de un amigo</li><br>
                <li id="tx31">Comienzo o fin de etapa académica</li><br>
                <li id="tx32">Cambio en las condiciones de vida</li><br>
                <li id="tx33">Cambio de residencia</li><br>
                <li id="tx34">Cambio de actividades sociales</li><br>
                <li id="tx35">Cambio de hábito de dormir</li><br>
                <li id="tx36">Cambio de hábitos alimentarios</li><br>
            </ul><br>

            <blockquote>
                <h2 id="tx37">¿Cómo se manifiesta el estrés?</h2>
            </blockquote><br>
            <p id="tx38">Una vez que has identificado las situaciones que te generan estrés, es importante reconocer cómo reacciones frente a ellas; qué efectos generan en tu organismo y en tus emociones.</p><br>
            <p id="tx39">Aunque inicialmente el estrés es normal y provechoso, ya que nos ayuda a activarnos para poder responder a las demandas y exigencias del medio, con el tiempo nuestro cuerpo y nuestra mente se van agotando y comienzan a disminuir en su rendimiento.</p><br>
            <p id="tx40">Para prevenir esta baja en el rendimiento debemos regular la cantidad de tiempo que nos mantenemos funcionando bajo altos niveles de exigencia, fase a la que se denomina resistencia, que se ve seguida de la fase de agotamiento.</p><br>
            <p id="tx41">Si, a pesar del agotamiento, no nos detenemos a descansar y hacer una pausa para recuperar energías, nuestro organismo podría entrar en una fase de cronificación de las manifestaciones de la fase de agotamiento del estrés.</p><br>
            <p id="tx42">Estas manifestaciones pueden darse en diversos ámbitos -físicas, psicológicas y en la conducta- y es importante reconocerlas para irlas identificando en la medida en que van apareciendo y así poder tomar medidas preventivas.</p><br>
            <blockquote>
                <h2 id="tx43">Fases del estrés</h2>
            </blockquote><br>
            <img src="../img/Fases del estrés.jpg" alt=""><br>

            <blockquote>
                <h2 id="tx44">Manifestaciones físicas</h2>
            </blockquote><br>
            <p id="tx45">Corresponden a los síntomas que se generan en nuestro cuerpo frente a los estresores habituales, algunos de ellos son:</p><br>
            <ul>
                <li id="tx46">Somnolencia, mayor necesidad de dormir</li><br>
                <li id="tx47">Cansancio y fatiga</li><br>
                <li id="tx48">Dolores de cabeza o jaquecas</li><br>
                <li id="tx49">Dolor de estómago y/o color irritable</li><br>
                <li id="tx50">Bruxismo (tensión de mandíbulas)</li><br>
                <li id="tx51">Dolor de espalda</li><br>
                <li id="tx52">Taquicardia o palpitaciones fuertes</li><br>
                <li id="tx53">Aumento o disminución del apetito</li><br>
                <li id="tx54">Resfríos frecuentes (baja en el sistema inmune)</li><br>
                <li id="tx55">Dificultades para dormir (insomnio o pesadillas)</li><br>
            </ul>
            <blockquote>
                <h2 id="tx56">Manifestaciones psicológicas y emocionales</h2>
            </blockquote><br>
            <p id="tx57">Son las reacciones emocionales y cognitivas que tenemos frente a situaciones de estrés, entre las que destacan:</p><br>
            <ul>
                <li id="tx58">Inquietud e hiperactividad</li><br>
                <li id="tx59">Tristeza y/o desgano</li><br>
                <li id="tx60">Ansiedad constante</li><br>
                <li id="tx61">Dificultades para concentrarse</li><br>
                <li id="tx62">Dificultades para pensar (quedarse en blanco)</li><br>
                <li id="tx63">Problemas de memoria, olvidos frecuentes</li><br>
                <li id="tx64">Irritabilidad frecuente</li><br>
                <li id="tx65">Temor a no poder cumplir con las obligaciones</li><br>
                <li id="tx66">Baja motivación para actividades académicas</li><br>
                <li id="tx67">Angustia y/o ganas de llorar frecuente</li><br>
            </ul>

            <blockquote>
                <h2 id="tx68">Prevención y afrontamiento del estrés académico</h2>
            </blockquote><br>
            <p id="tx69">Una vez que identificamos las situaciones que nos generan estrés y que sabemos cómo reaccionamos frente a ello, necesitamos distinguir qué estamos haciendo para prevenir que esto ocurra o mitigar los efectos.</p><br>
            <p id="tx70">Algunas de las estrategias que ayudan tanto a prevenir la cronificación del estrés como a afrontar las manifestaciones en la fase de agotamiento son:</p><br>
            <ul>
                <li id="tx71">Planificar actividades priorizando entre ellas</li><br>
                <li id="tx72">Decidir entre diversas técnicas de estudio</li><br>
                <li id="tx73">Alimentarse saludablemente en horarios estables</li><br>
                <li id="tx74">Practicar deporte o actividades recreativas</li><br>
                <li id="tx75">Dedicar tiempo a pasatiempos y hobbies</li><br>
                <li id="tx76">Mantener ciclos de sueño estables</li><br>
                <li id="tx77">Buscar ayuda y compartir con otros</li><br>
                <li id="tx78">Practicar relajación y respiración profunda</li><br>
                <li id="tx79">Mantener el sentido del humor</li><br>
            </ul>





            <blockquote><a name="tips">
                    <h2 id="tx80">Tips para aliviar el estrés</h2>
                </a></blockquote>
            <p>
            <ul>
                <li id="tx81">Establezca prioridades. Decidir qué cosas se deben hacer y qué cosas pueden esperar y aprender a decir no a tareas nuevas si usted está abrumado.
                </li>
                <li id="tx82">Manténgase en contacto con personas que pueden proporcionar apoyo emocional y de otra índole. Pida ayuda a los amigos, la familia y la comunidad u organizaciones religiosas para reducir el estrés debido a responsabilidades laborales o asuntos familiares, tal como el cuidado de un ser querido
                </li>
                <li id="tx83">Tómese tiempo para hacer actividades relajantes que disfruta como leer, hacer yoga o jardinería.
                </li>
                <li id="tx84">Evite pensar obsesivamente en los problemas. Enfóquese en lo que ha logrado, no en lo que no ha podido hacer.
                </li>
                <li id="tx85">Haga ejercicio con regularidad. Una caminata moderada de solo 30 minutos por día puede ayudar a levantarle el ánimo y reducir el estrés.
                </li>
            </ul>
            </p><br>
            <!-- <img src="../img/estres_tema.jpg" alt=""><br> -->
            <!-- <video src="../Videos/y2mate.com - Cómo manejar el estrés de ser un estudiante  Estrés estudiantil_1080p.mp4" width="500" height="300" controls></video> -->
            <iframe width="853" height="480" src="https://www.youtube.com/embed/ujylPaOPGFE" title="Cómo manejar el estrés de ser un estudiante // Estrés estudiantil" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br><cite id="cite">Video gracias a: Pablo Sánchez Urina en YouTube</cite>



        </article>
        <div class="container-aside">
            <aside>
                <h2 id="tx86">El estrés</h2>
                <p><a href="#que es" id="tx87">¿Qué es el estrés?</a></p>
                <p><a href="#signos" id="tx88">Sintomas de estrés</a></p>
                <p><a href="#tipos" id="tx89">Tipos de estrés</a></p>
                <p><a href="#causas" id="tx90">Causas de estrés</a></p>
                <p><a href="#tips" id="tx91">Tips para el estrés</a></p>

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
    <script src="../js/Translate/estres.js"></script>
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