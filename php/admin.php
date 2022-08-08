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

         
            <div class="details">
                <div class="recentOrders">
                    <div class="cardHeader">
                        <h2 id="Link7">Usos recientes</h2>
                        <a href="#" class="btn" id="Link8">Mirar todo</a>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td id="Link9">Nombre</td>
                                <td id="Link10">codigo</td>
                                <td id="Link11">Seccion</td>
                                <td id="Link12">Especialidad</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Carlos Eduardo</td>
                                <td>20110289</td>
                                <td>C</td>
                                <td><span class="status delivered">Dsw</span></td>
                            </tr>

                            <tr>
                                <td>Lopez guevara</td>
                                <td>20100256</td>
                                <td>A</td>
                                <td><span class="status pending" id="Link13">Diseño grafico</span></td>
                            </tr>

                            <tr>
                                <td>Rivera Lara</td>
                                <td>20220289</td>
                                <td>B</td>
                                <td><span class="status return" id="Link14">DSW</span></td>
                            </tr>

                            <tr>
                                <td>Martiez aguirre</td>
                                <td>201702145</td>
                                <td>D</td>
                                <td><span class="status inProgress">EMCA</span></td>
                            </tr>

                         
                        </tbody>
                    </table>
                </div>

               
                <div class="recentCustomers">
                    <div class="cardHeader">
                        <h2 id="Link15">Usuarios recientes </h2>
                    </div>

                    <table>
                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="../img/customer02.jpg" alt=""></div>
                            </td>
                            <td>
                                <h4>Eduardo <br> <span>DSW</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="../img/customer01.jpg" alt=""></div>
                            </td>
                            <td>
                                <h4>Guevara<br> <span id="Link16">Diseño grafico</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="../img/customer02.jpg" alt=""></div>
                            </td>
                            <td>
                                <h4>Lara <br> <span>DSW</span></h4>
                            </td>
                        </tr>

                        <tr>
                            <td width="60px">
                                <div class="imgBx"><img src="../img/customer01.jpg" alt=""></div>
                            </td>
                            <td>
                                <h4>Aguirre<br> <span>Emca</span></h4>
                            </td>
                        </tr>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

         <div class="translatebutton">
                <input type="checkbox" name="translate" id="translate">
             <label for="translate" class="trans"></label>
         </div>


    <script src="../js/Dashboard.js"></script>
    <script src="../js/admin.js"></script>


   
</body>

</html>