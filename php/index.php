<?php
    session_start();
    include('../php/database.php');
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
        header("LOCATION:index.php");
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
        header("LOCATION:index.php");
    }
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="../../css/assets/fontawesome/css/all.css" rel="stylesheet" />
    <link rel="stylesheet" href="../css/style.css"/>
    <title>Lista de tareas</title>
</head>
<body>
    <!--Step 1: Basic structure of Todo List-->
    <div class="container">
      <!--Step 2: Create input place and button-->
      <div id="newtask">
        <?php include('../php/alert.php') ?>
        
    




        <h3>Lista de tareas</h3>
        <form action="index.php" method="post" id="taskform">
            <input type="hidden" name="id" value="<?php if($editing) { echo $taskData['id']; } ?>"  >
            <input type="text" name="task" id="task" placeholder="Tarea nueva" value="<?php if($editing) { echo $taskData['task']; } ?>" />
            <button type="submit" name="submit" id="add"><?php if($editing) { echo "Realizada"; } else { echo "Agregar" ; } ?></button>
        </form>
      </div>

      <div id="tasks">
        <?php
            if(!empty($tasks)) {
                foreach($tasks as $t) {
        ?>
        <div class="task">
            <span><?php echo $t['task'] ?></span>
            <a href="index.php?action=edit&id=<?php echo $t['id'] ?>" ><i class="fa fa-edit"></i></a>
            <a onclick="return confirm('Quieres borrar esta tarea?')" href="index.php?action=delete&id=<?php echo $t['id'] ?>" class="delete button">Borrar<i class="fa fa-trash-alt"></i></a>
        </div>
        <?php }} ?>
      </div>
    </div>

    <script src="js/tarea.js"></script>
</body>
</html>