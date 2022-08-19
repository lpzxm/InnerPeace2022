<?php
session_start();
if (!empty($_POST["iniciar"])) {
    if (!empty($_POST["username"]) and !empty($_POST["password"])) {
        $usuario=$_POST["username"];
        $password=$_POST["password"];
        $sql=$con->query("Select * from usuarios where Correo_electronico= '$usuario' and contraseña= '$password'");
        $sqli=$con->query("Select * from administrador where id_usuario = '$usuario'");
        if ($datos=$sql->fetch_object()) {
            
            $id= $datos->id;
            $isAdmin=$con->query("Select * from administrador where id_usuario = $id")->fetch_assoc();
            if ($isAdmin) {
                $_SESSION["id"]=$datos->id;
                $_SESSION["usuario"]=$datos->Correo_electronico;
                header("location: admin.php");
            }
            else {
                $_SESSION["id"]=$datos->id;
                $_SESSION["usuario"]=$datos->Correo_electronico;
                $_SESSION["user"]=$datos->Nombre;
                header("location: Home.php");
            }
        }
        else{
            echo "<div>Acceso denegado</div>";
        }
    }
    else{
        echo "Campos vacios";
    }
}

?>