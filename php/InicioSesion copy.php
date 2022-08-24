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
    <div class="back">
      <a href="../php/Home.php">
        <svg class="svg-back" style="width: 2.5em; height: 2.5em;vertical-align: super;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M563.2 715.946667a33.9968 33.9968 0 0 1-24.132267-10.001067l-170.666666-170.666667a34.133333 34.133333 0 0 1 0-48.264533l170.666666-170.666667a34.133333 34.133333 0 1 1 48.264534 48.264534l-146.517334 146.5344 146.517334 146.5344A34.133333 34.133333 0 0 1 563.2 715.946667z"  /><path d="M512 955.733333c-121.873067 0-227.549867-43.588267-314.112-129.536C111.854933 739.5328 68.266667 633.873067 68.266667 512c0-121.890133 43.605333-227.293867 129.5872-313.2928C284.416 112.145067 390.109867 68.266667 512 68.266667c121.924267 0 227.328 43.895467 313.326933 130.491733C911.837867 284.672 955.733333 389.802667 955.733333 511.146667c0 122.7264-43.8784 228.437333-130.440533 314.999466C739.293867 912.128 633.890133 955.733333 512 955.733333z m0-853.333333c-112.503467 0-210.090667 40.533333-290.013867 120.439467C142.626133 302.216533 102.4 399.496533 102.4 512c0 112.520533 40.2432 210.1248 119.620267 290.065067C301.8752 881.3568 399.4624 921.6 512 921.6c112.520533 0 209.800533-40.226133 289.160533-119.586133C881.083733 722.090667 921.6 624.520533 921.6 512c0-112.776533-40.4992-209.7664-120.405333-289.109333C721.7664 142.916267 624.4864 102.4 512 102.4z"  /></svg>
      </a>
    </div>
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
        <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" required>
        <div class="checkbox-circle">
          <input type="checkbox" id="checkbox-circle1" class="pass" name="check" onclick="showPass()"><label for="checkbox-circle1">Mostrar Contraseña</label>
        </div>
        <input type="submit" name="iniciar" value="Iniciar sesión" id="V1">
        <a href="../php/Registro1.php" id="S1">No tienes una cuenta? Registrate!</a>
      </form>
    </div>
    <div class="translatebutton">
      <input type="checkbox" name="translate" id="translate">
      <label for="translate" class="trans"></label>
    </div>
  </body>
  <script src="../js/Translate/inicioSesion.js"></script>
  <script src="../js/password.js"></script>
</html>