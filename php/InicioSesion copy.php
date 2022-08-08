<!DOCTYPE html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/loginstyle.css">
    <link rel="shortcut icon" href="../img/logo_small_icon_only.png" type="image/x-icon">
    <title>Inicia Sesion</title>
  </head>
  <body>


    <div class="login-box">
      <img src="../img/logo_small_icon_only_inverted.png" class="avatar" alt="Avatar Image">
      <h1 id="titleA">Ingresa aqui</h1>
      <?php
       include "../php/auth/db.php";
       include "../php/auth/controlador_login.php" 
       ?>
      <form action="" method="post" name="login">
        <label for="username" id="U1">Correo institucional:</label>
        <input type="text" name="username" placeholder="Ingresa tu usuario" required autofocus="true">
        <label for="password" id="P2">Contraseña:</label>
        <input type="password" name="password" placeholder="Ingresa tu contraseña" required>
        <input type="submit" name="iniciar" value="Iniciar sesión" id="V1">
        <a href="../php/Registro1.php" id="S1">No tienes una cuenta? Registrate!</a>
      </form>
    </div>
    <div class="translatebutton">
      <input type="checkbox" name="translate" id="translate">
      <label for="translate" class="trans"></label>
    </div>
  </body>
  <script src="../js/inicioSesion.js"></script>
</html>