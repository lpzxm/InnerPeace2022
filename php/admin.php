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
        
      <div class="translatebutton">
                <input type="checkbox" name="translate" id="translate">
             <label for="translate" class="trans"></label>
         </div>
        <li><a href="#" class="logo">
          <span class="nav-item" id="Link1">Administrador</span>
        </a></li>
        <li><a href="#">
          <span class="nav-item" id="Link2">Panel de control</span>
        </a>
         <a href="../php/tarea.php"> <span class="nav-item" id="Link3">Administrador de tareas</span></a>
        </a></li>
      <a href="../php/InicioSesion copy.php">   <span class="nav-item" id="Link4">Salir</span></a> 
        </a></li>
      </ul>

    </nav>

    


    <section class="main">
      <section class="attendance">
        <div class="attendance-list">
          <h1 id="Link5">Panel de control</h1>
          <table class="table">
            <thead>
              <tr>
                <th id="Link6">id</th>
                <th id="Link7">Nombre</th>
                <th id="Link8">Especialidad</th>
                <th id="Link9">Codigo de estudiante</th>
                <th id="Link10">Año</th>
                <th id="Link11">Seccion</th>
                <th id="Link12">Fecha de nacimiento</th>

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

    <script src="../js/Translate/admin.js"></script>


   
</body>

</html>