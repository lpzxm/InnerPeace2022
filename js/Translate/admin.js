let idioma = document.querySelector("#translate");
const img = document.createElement('img');
const image = document.createElement('img')
img.src = '../img/spain.png'
image.src = '../img/united-kingdom.png'
    traducir(localStorage);
    function traducir(idiomaStorage, input) {
        if(idiomaStorage){
            if (idiomaStorage.idioma == "en") {
                localStorage.setItem("idioma", "en")
                document.querySelector("#Link1").innerHTML ="administrator";
                document.querySelector("#Link2").innerHTML ="Control Panel";
                document.querySelector("#Link3").innerHTML ="Task Manager";
                document.querySelector("#Link4").innerHTML ="Log out";
                document.querySelector("#Link5").innerHTML ="Panel de control";
                document.querySelector("#Link6").innerHTML ="id";
                document.querySelector("#Link7").innerHTML ="Name";
                document.querySelector("#Link8").innerHTML ="Specialty";
                document.querySelector("#Link9").innerHTML ="student code";
                document.querySelector("#Link10").innerHTML ="Year";
                document.querySelector("#Link11").innerHTML ="Section";
                document.querySelector("#Link12").innerHTML ="Date of Birth";

                 // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }  else{localStorage.setItem("idioma","es") 
                document.querySelector("#Link1").innerHTML ="Administrador";
                document.querySelector("#Link2").innerHTML ="Panel de control";
                document.querySelector("#Link3").innerHTML ="Administrador de tareas";
                document.querySelector("#Link4").innerHTML ="Salir";
                document.querySelector("#Link5").innerHTML ="Panel de control";
                document.querySelector("#Link6").innerHTML ="id";
                document.querySelector("#Link7").innerHTML ="Nombre";
                document.querySelector("#Link8").innerHTML ="Especialidad";
                document.querySelector("#Link9").innerHTML ="Codigo de estudiante";
                document.querySelector("#Link10").innerHTML ="Año";
                document.querySelector("#Link11").innerHTML ="Seccion";
                document.querySelector("#Link12").innerHTML ="Fecha de nacimiento";


                /////
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }
                 
            }
            else if (input){
                if (!input.checked){
                    localStorage.setItem("idioma", "en")
                    document.querySelector("#Link1").innerHTML ="administrator";
                    document.querySelector("#Link2").innerHTML ="Control Panel";
                    document.querySelector("#Link3").innerHTML ="Task Manager";
                    document.querySelector("#Link4").innerHTML ="Log out";
                    document.querySelector("#Link5").innerHTML ="Panel de control";
                    document.querySelector("#Link6").innerHTML ="ids";
                    document.querySelector("#Link7").innerHTML ="Name";
                    document.querySelector("#Link8").innerHTML ="Specialty";
                    document.querySelector("#Link9").innerHTML ="student code";
                    document.querySelector("#Link10").innerHTML ="Year";
                    document.querySelector("#Link11").innerHTML ="Section";
                    document.querySelector("#Link12").innerHTML ="Date of Birth";

                    /*
                    document.querySelector("#link1").innerHTML = "Psychologists";
                    document.querySelector("#link2").innerHTML = "Frequent questions";
                    document.querySelector("#link3").innerHTML = "Blog";
                    document.querySelector("#link4").innerHTML = "About us";
                    if (document.querySelector("#Logout")) {
                        document.querySelector("#Logout").innerHTML = "Logout";
                    }
                      if (document.querySelector("#Salir")) {
                        document.querySelector("#Salir").innerHTML = "Log In";
                    }
                 Parte de document querySelector en ingles
                    document.querySelector("#first-quote").innerHTML ="The anxiety";*/
                   
                   // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);

                }
                else{  localStorage.setItem("idioma", "es")
                document.querySelector("#Link1").innerHTML ="Administrador";
                document.querySelector("#Link2").innerHTML ="Panel de control";
                document.querySelector("#Link3").innerHTML ="Administrador de tareas";
                document.querySelector("#Link4").innerHTML ="Salir";
                document.querySelector("#Link5").innerHTML ="Panel de control";
                document.querySelector("#Link6").innerHTML ="id";
                document.querySelector("#Link7").innerHTML ="Nombre";
                document.querySelector("#Link8").innerHTML ="Especialidad";
                document.querySelector("#Link9").innerHTML ="Codigo de estudiante";
                document.querySelector("#Link10").innerHTML ="Año";
                document.querySelector("#Link11").innerHTML ="Seccion";
                document.querySelector("#Link12").innerHTML ="Fecha de nacimiento";

                 /*   document.querySelector("#link1").innerHTML = "Psicologos";
                    
                    if (document.querySelector("#Logout")) {
                        document.querySelector("#Logout").innerHTML = "Salir";
                    }
                      if (document.querySelector("#Salir")) {
                        document.querySelector("#Salir").innerHTML = "Entrar";
                    }*/
                  
                  
                    // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }
            }
        }
    



    idioma.addEventListener("click", () => {
        let input = document.querySelector("#translate");
        traducir(null, input)
       
    })

