<?php
    session_start();

    if (!isset($_SESSION["username"])) {
        header("Location: ../php/InicioSesion.php");
        exit();
    }


?>