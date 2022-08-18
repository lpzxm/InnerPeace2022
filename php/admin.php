<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de el administrador (Prototipo</title>
    <link rel="stylesheet" href="../css/Dashboard.css">
</head>

<body>

    <div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                       
                        <span class="title">Inner peace</span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="title" id="Link1">Panel</span>
                    </a>
                </li>
       
                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="people-outline"></ion-icon>
                        </span>
                        <span class="title" id="Link2">Estudiantes</span>
                    </a>
                </li>


                <li>
                    <a href="#">
                        <span class="icon">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                        
                        <span class="title">Datos</span>
                    
                    </a>
                </li>
            </ul>
        </div>

       
        <div class="main">
            <div class="topbar">
                <div class="toggle">
                    <ion-icon name="menu-outline"></ion-icon>
                </div>

                <div class="search">
                    <label>
                        <input type="text" placeholder="Search here">
                        <ion-icon name="search-outline"></ion-icon>
                    </label>
                </div>

                <div class="user">
              <a href="../php/InicioSesion copy.php">  <span class="title" id="Link3">Salir</span></a>
                </div>
            </div>

          
            <div class="cardBox">
                <div class="card">
                    <div>
                        <div class="numbers" id="Link4">1,504</div>
                        <div class="cardName" id="Link5">Vistas diarias</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="eye-outline"></ion-icon>
                    </div>
                </div>

                

                <div class="card">
                    <div>
                        <div class="numbers">284</div>
                        <div class="cardName" id="Link6">Comentarios</div>
                    </div>

                    <div class="iconBx">
                        <ion-icon name="chatbubbles-outline"></ion-icon>
                    </div>
                </div>

               
            </div>

         
     }

         <div class="translatebutton">
                <input type="checkbox" name="translate" id="translate">
             <label for="translate" class="trans"></label>
         </div>


    <script src="../js/Dashboard.js"></script>
    <script src="../js/admin.js"></script>


   
</body>

</html>