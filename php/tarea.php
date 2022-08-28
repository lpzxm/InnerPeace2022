<?php
    session_start();
    include('../php/auth/db.php');
    include('../php/taskss.php');
    $obj = new Tasks;
    
    if(isset($_POST['submit'])) {
        // Insert Data in the Table
        $task = $_POST['task'];
        $id = $_POST['id'];
        $created_at = $updated_at = date("Y-m-d H:i:s");

        //Update
        if(!empty($id)) {
            $sql = "UPDATE todolists set task = '".$task."', updated_at = '".$updated_at."' where id = ".$id;
            $res = $obj->executeQuery($sql);
            if($res) {
                $_SESSION['success'] = "La tarea fue realizada exitosamente";
            }
            else {
                $_SESSION['error'] = "Algo malo pase intentalo mas tarde";
            }
        }   
        else {
            $sql = "INSERT INTO todolists (task, created_at, updated_at) VALUES ('".$task."', '".$created_at."', '".$updated_at."')";
            $res = $obj->executeQuery($sql);

            if($res) {
                $_SESSION['success'] = "La tarea fue realizada exitosamente";
            }
            else {
                $_SESSION['error'] = "Algo malo pase intentalo mas tarde ";
            }
        }
        
        session_write_close();
        header("LOCATION:tarea.php");
    }

    //Get all Tasks
    $tasks = $obj->getAllTasks();

    //Get Task
    $editing = false;
    if(isset($_GET['action']) && $_GET['action']  === 'edit') {
        $taskData = $obj->getTask($_GET['id']);
        $editing = true;
    }

    //Delete Task
    if(isset($_GET['action']) && $_GET['action']  === 'delete') {
        $sql = "DELETE FROM todolists WHERE id = ".$_GET['id'];
        $res = $obj->executeQuery($sql);
        if($res) {
            $_SESSION['success'] = "La tarea a sido eliminada exitosamente";
        }
        else {
            $_SESSION['error'] = "Algo falló intentalo nuevamente mas tarde";
        }

        session_write_close();
        header("LOCATION:tarea.php");
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/style.css"/>
    <title>Lista de tareas</title>
</head>
<body>

    <div class="container">

      <div id="newtask">
        <?php include('../php/alert.php') ?>
        
    




        <h3 id="Link1">Lista de tareas</h3>
        <form action="tarea.php" method="post" id="taskform">

        <div class="translatebutton">
             <label for="translate" class="trans"></label>
             <input type="checkbox" name="translate" id="translate">
         </div>
       <a href="../php/admin.php"> <svg class="svg-back" style="width: 2.5em; height: 2.5em;vertical-align: super;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M563.2 715.946667a33.9968 33.9968 0 0 1-24.132267-10.001067l-170.666666-170.666667a34.133333 34.133333 0 0 1 0-48.264533l170.666666-170.666667a34.133333 34.133333 0 1 1 48.264534 48.264534l-146.517334 146.5344 146.517334 146.5344A34.133333 34.133333 0 0 1 563.2 715.946667z"  /><path d="M512 955.733333c-121.873067 0-227.549867-43.588267-314.112-129.536C111.854933 739.5328 68.266667 633.873067 68.266667 512c0-121.890133 43.605333-227.293867 129.5872-313.2928C284.416 112.145067 390.109867 68.266667 512 68.266667c121.924267 0 227.328 43.895467 313.326933 130.491733C911.837867 284.672 955.733333 389.802667 955.733333 511.146667c0 122.7264-43.8784 228.437333-130.440533 314.999466C739.293867 912.128 633.890133 955.733333 512 955.733333z m0-853.333333c-112.503467 0-210.090667 40.533333-290.013867 120.439467C142.626133 302.216533 102.4 399.496533 102.4 512c0 112.520533 40.2432 210.1248 119.620267 290.065067C301.8752 881.3568 399.4624 921.6 512 921.6c112.520533 0 209.800533-40.226133 289.160533-119.586133C881.083733 722.090667 921.6 624.520533 921.6 512c0-112.776533-40.4992-209.7664-120.405333-289.109333C721.7664 142.916267 624.4864 102.4 512 102.4z"  /></svg></a>
            <input type="hidden" name="id" value="<?php if($editing) { echo $taskData['id']; } ?>"  >
            <input type="text" name="task" id="task" placeholder="Tarea nueva" value="<?php if($editing) { echo $taskData['task']; } ?>" />
            <button type="submit" name="submit" id="add" ><?php if($editing) { echo "Realizada"; } else {  echo "Agregar" ; } ?></button>
        
        </form>
      </div>

      <div id="tasks">
        <?php
            if(!empty($tasks)) {
                foreach($tasks as $t) {
        ?>
        <div class="task">
            <span><?php echo $t['task'] ?></span>
            <a href="tarea.php?action=edit&id=<?php echo $t['id'] ?>" ></a>
            <a id="delete" onclick="return confirm('Quieres borrar esta tarea?')" href="../php/tarea.php?action=delete&id=<?php echo $t['id'] ?>" class="delete button">Borrar<i class="fa fa-trash-alt"></i></a>
        </div>
        <?php }} ?>
      </div>
    </div>

    <script src="../js/Translate/tarea.js"></script>
</body>
</html>