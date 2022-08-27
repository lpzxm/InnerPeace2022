<?php
include ("../php/auth/db.php");
$usuarios = "SELECT * FROM datos_estudiante"

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Dashbord</title>
  <link rel="stylesheet" href="../css/diseño D.css" />
</head>
<body>
  <div class="container">
    <nav>
      <ul>
        <li><a href="#" class="logo">
          <span class="nav-item">Administrador</span>
        </a></li>
        <li><a href="#">
          <i class="fas fa-menorah"></i>
          <span class="nav-item">Panel de control</span>
        </a>
          <i class="fas fa-comment"></i>
         <a href="../php/tarea.php"> <span class="nav-item">Administrador de tareas</span></a>
        </a></li>
          <i class="fas fa-sign-out-alt"></i>
      <a href="../php/InicioSesion copy.php">   <span class="nav-item">Log out</span></a> 
        </a></li>
      </ul>
    </nav>

    


    <section class="main">
      <section class="attendance">
        <div class="attendance-list">
          <h1>Panel de control</h1>
          <table class="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Especialidad</th>
                <th>Codigo de estuydiante</th>
                <th>Año</th>
                <th>Seccion</th>
                <th>Fecha de nacimiento</th>

              </tr>
            </thead>

            <?php
            $resultado = mysqli_query($con,$usuarios);
            
            while($row = mysqli_fetch_assoc($resultado)){ ?>
            <tbody>
              <tr>
                <td><?php echo $row["id"] ?></td>
                <td><?php echo $row["Nombre"] ?></td>
                <td><?php echo $row["Especialidad"] ?></td>
                <td><?php echo $row["Codigo_estudiante"] ?></td>
                <td><?php echo $row["Año"] ?></td>
                <td><?php echo $row["Seccion"] ?></td>
                <td><?php echo $row["Fecha_nacimiento"] ?></td>


                <?php } ?>
            </tbody>
          </table>
        </div>
      </section> 
    </section>


  </div>


<!--
    <script src="../js/Dashboard.js"></script>
    <script src="../js/admin.js"></script>*/ -->


   
</body>

</html>