<!DOCTYPE html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../css/registrostyle.css">
  <link rel="stylesheet" href="../css/loading.css">
  <link rel="stylesheet" href="../css/scrollbar.css">
  <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
  <title>Registrate</title>
</head>

<body>
  <?php
  require('../php/auth/db.php');
  // When form submitted, insert values into the database.
  if (isset($_REQUEST['username']) && isset($_REQUEST['email']) && isset($_REQUEST['password']) && isset($_REQUEST['codigo_estudiante']) && isset($_REQUEST['especialidad'])) {
    // removes backslashes
    $username = stripslashes($_REQUEST['username']);
    //escapes special characters in a string
    $username = mysqli_real_escape_string($con, $username);
    $email    = stripslashes($_REQUEST['email']);
    $email    = mysqli_real_escape_string($con, $email);
    $password = stripslashes($_REQUEST['password']);
    $password = mysqli_real_escape_string($con, $password);
    $codigo = stripslashes($_REQUEST['codigo_estudiante']);
    $codigo = mysqli_real_escape_string($con, $codigo);
    $fecha =  ($_REQUEST['fecha']);
    $fecha = mysqli_real_escape_string($con, $fecha);
    $Especialidad = ($_POST['especialidad']);
    $año = ($_POST['grado_curso']);
    $seccion = ($_POST['seccion']);

    $query1 = "INSERT INTO usuarios(Nombre, Correo_electronico, contraseña) VALUES('$username', '$email', '$password')";
    //Insertar el usuario para obtener su id
    $con->query($query1);
    $id = $con->query("SELECT * FROM usuarios WHERE Nombre = '$username' AND Correo_electronico = '$email' AND contraseña = '$password'")->fetch_assoc();
    $id = $id["id"];
    //Segundo query con los datos
    $query2 = "INSERT INTO datos_estudiante(Nombre, Especialidad, Codigo_estudiante, Año, Seccion, Fecha_nacimiento, id_usuario) VALUES('$username', '$Especialidad', '$codigo', '$año', '$seccion', '$fecha', $id)";
    $result = $con->query($query2);
    if ($result) {
      header("location: ./InicioSesion copy.php");
    } else {
      header("location: ./Registro1.php");
    }
  } else {
  ?>
    <!-- loading -->
    <div class="loader">
      <div class="lds-heart">
        <div></div>
      </div>
    </div>

    <div class="login-box">
      <div class="back">
        <a href="../php/Home.php">
          <svg class="svg-back" style="width: 3em; height: 3em;vertical-align: super;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M563.2 715.946667a33.9968 33.9968 0 0 1-24.132267-10.001067l-170.666666-170.666667a34.133333 34.133333 0 0 1 0-48.264533l170.666666-170.666667a34.133333 34.133333 0 1 1 48.264534 48.264534l-146.517334 146.5344 146.517334 146.5344A34.133333 34.133333 0 0 1 563.2 715.946667z" />
            <path d="M512 955.733333c-121.873067 0-227.549867-43.588267-314.112-129.536C111.854933 739.5328 68.266667 633.873067 68.266667 512c0-121.890133 43.605333-227.293867 129.5872-313.2928C284.416 112.145067 390.109867 68.266667 512 68.266667c121.924267 0 227.328 43.895467 313.326933 130.491733C911.837867 284.672 955.733333 389.802667 955.733333 511.146667c0 122.7264-43.8784 228.437333-130.440533 314.999466C739.293867 912.128 633.890133 955.733333 512 955.733333z m0-853.333333c-112.503467 0-210.090667 40.533333-290.013867 120.439467C142.626133 302.216533 102.4 399.496533 102.4 512c0 112.520533 40.2432 210.1248 119.620267 290.065067C301.8752 881.3568 399.4624 921.6 512 921.6c112.520533 0 209.800533-40.226133 289.160533-119.586133C881.083733 722.090667 921.6 624.520533 921.6 512c0-112.776533-40.4992-209.7664-120.405333-289.109333C721.7664 142.916267 624.4864 102.4 512 102.4z" />
          </svg>
        </a>
      </div>
      <img src="../img/logo_small_icon_only_inverted.png" class="avatar" alt="Avatar Image">
      <h1 id="TitleA">Registrate aquí</h1>
      <form action="" method="post">
        <label for="username" id="TitleB">Usuario:</label>
        <input type="text" name="username" placeholder="Ingresa un usuario" required>
        <label for="password" id="TitleD">Correo electronico</label>
        <input type="email" name="email" placeholder="Ingresa tu correo electronico" required>
        <label for="password" id="TitleF">Codigo de estudiante</label>
        <input type="text" name="codigo_estudiante" placeholder="Ingresa tu codigo de estudiante" required>
        <label for="datetime" id="A">Fecha de nacimiento:</label>
        <input type="date" name="fecha" class="date" required>

        <label for="password" id="B">Año</label>
        <select name="grado_curso" id="" required>
          <option value="" id="C">--Seleccione su año--</option>
          <option value="Primer_año" id="D">Primer año</option>
          <option value="Segundo_año" id="E">Segundo año</option>
          <option value="Tercer_año" id="F">Tercer año</option>
        </select>

        <label for="password" id="G">Especialidad</label>
        <select name="especialidad" id="" required>
          <option value="" id="H">--Seleccione su especialidad--</option>
          <option value="Desarrollo de Software" id="I">Desarrollo de Software</option>
          <option value="Atención Primaria en Salud" id="J">Atención Primaria en Salud</option>
          <option value="Diseño Grafico" id="K">Diseño Grafico</option>
          <option value="Electromecanica" id="L">Electromecanica</option>
          <option value="Electronica" id="M">Electronica</option>
          <option value="Mecanica Automotriz" id="M_2">Mecanica Automotriz</option>
        </select>

        <label for="password" id="N">Sección:</label>
        <select name="seccion" id="" required>
          <option value="" id="O">--Seleccione su sección--</option>
          <option value="A">"A"</option>
          <option value="B">"B"</option>
          <option value="C">"C"</option>
          <option value="D">"D"</option>
          <option value="E">"F"</option>
          <option value="F">"G"</option>
        </select>

        <br><br>
        <div class="password">
          <label for="password" id="TitleH">Contraseña</label>
          <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" required>
          <span>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="442.04px" height="442.04px" viewBox="0 0 442.04 442.04" style="enable-background:new 0 0 442.04 442.04;" xml:space="preserve">
              <g>
                <g>
                  <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203
                    c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219
                    c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367
                    c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021
                    c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212
                    c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071
                    c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />
                </g>
                <g>
                  <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188
                    c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993
                    c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5
                    s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />
                </g>
                <g>
                  <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g> </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg></span>
        </div>
        <div class="pass-strength">
          <div class="strength-percent"><span></span></div>
          <span class="strength-label">Strength</span>
        </div>
        <br>
        <a href="../php/aviso de privacidad.php" class="poli">Politica de privacidad</a><br><br>

        <input type="submit" value="Registrarme!" id="TitleL">
        <a href="../php/InicioSesion copy.php" id="TitleM">Ya tengo una cuenta</a>
      </form>
    </div>
  <?php
  }
  ?>

  <div class="translatebutton">
    <input type="checkbox" name="translate" id="translate">
    <label for="translate" class="trans"></label>
  </div>

</body>
<script src="../js/Translate/registro.js"></script>
<script src="../js/password.js"></script>

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

</html>