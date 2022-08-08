<?php
// Initialize the session
session_start();
 
// if (($usuario == 'Correo_electronico')&&($password == 'contraseña')) {
//     echo "";
// }
// else{

// }
 
// Destroy the session.
session_unset();
header ("location: ../Home.php");
exit;
?>