<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/registrostyle.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    <title>Registrate</title>
  </head>
  <body>
  <?php
    require('../php/auth/db.php');
    // When form submitted, insert values into the database.
    if (isset($_REQUEST['username'])&& isset($_REQUEST['email'])&& isset($_REQUEST['password'])&& isset($_REQUEST['codigo_estudiante'])&& isset($_REQUEST['especialidad'])) {
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
        $query2= "INSERT INTO datos_estudiante(Nombre, Especialidad, Codigo_estudiante, Año, Seccion, Fecha_nacimiento, id_usuario) VALUES('$username', '$Especialidad', '$codigo', '$año', '$seccion', '$fecha', $id)";
        $result=$con->query($query2);
        if ($result) {
            header("location: ./InicioSesion copy.php");
        } else {
            header("location: ./Registro1.php");
        }
    } else {
?>

    <div class="login-box">
      <img src="../img/logo_small_icon_only_inverted.png" class="avatar" alt="Avatar Image">
      <h1 id="TitleA">Registrate aquí</h1>
      <form action="" method="post">
        <label for="username" id="TitleB">Usuario:</label>
        <input type="text" name="username" placeholder="Ingresa un usuario" required>
        <label for="password" id="TitleD">Correo electronico</label>
        <input type="text" name="email" placeholder="Ingresa tu correo electronico" required>
        <label for="password" id="TitleF">Codigo de estudiante</label>
        <input type="text" name="codigo_estudiante" placeholder="Ingresa tu codigo de estudiante" required>
        <label for="datetime" id="A" >Fecha de nacimiento:</label>
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
          <option value="A" >"A"</option>
          <option value="B" >"B"</option>
          <option value="C" >"C"</option>
          <option value="D" >"D"</option>
          <option value="E" >"F"</option>
          <option value="F" >"G"</option>
          <option value="G" >"H"</option>
        </select>


        
        <br><br><label for="password" id="TitleH">Contraseña</label>
        <input type="password" name="password" placeholder="Ingresa tu contraseña" required>
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
  <script src="../js/registro.js"></script>
</html>