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
                document.querySelector("#Link1").innerHTML ="Panel";
                document.querySelector("#Link2").innerHTML ="Students";
                document.querySelector("#Link3").innerHTML ="Leave";
                document.querySelector("#Link4").innerHTML ="Students";
                document.querySelector("#Link5").innerHTML ="daily views";
                document.querySelector("#Link6").innerHTML ="Commets";
                document.querySelector("#Link7").innerHTML ="recent uses";
                document.querySelector("#Link8").innerHTML ="see all";
                document.querySelector("#Link9").innerHTML ="Name";
                document.querySelector("#Link10").innerHTML ="Code";
                document.querySelector("#Link11").innerHTML ="Section";
                document.querySelector("#Link12").innerHTML ="Specialty";
                document.querySelector("#Link13").innerHTML ="Graphic design";
                document.querySelector("#Link14").innerHTML ="Students";
                document.querySelector("#Link15").innerHTML ="recent users";
                document.querySelector("#Link16").innerHTML ="Graphic design";

                
                 // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }  else{localStorage.setItem("idioma","es") 
                document.querySelector("#Link1").innerHTML ="Panel";
                document.querySelector("#Link2").innerHTML ="Estudiantes";
                document.querySelector("#Link3").innerHTML ="Salir";
                document.querySelector("#Link4").innerHTML ="Estudiantes";
                document.querySelector("#Link5").innerHTML ="Vistas diarias";
                document.querySelector("#Link6").innerHTML ="Comentarios";
                document.querySelector("#Link7").innerHTML ="Usos recientes";
                document.querySelector("#Link8").innerHTML ="mirar todo";
                document.querySelector("#Link9").innerHTML ="Nombre";
                document.querySelector("#Link10").innerHTML ="Codigo";
                document.querySelector("#Link11").innerHTML ="Seccion";
                document.querySelector("#Link12").innerHTML ="Especialidad";
                document.querySelector("#Link13").innerHTML ="Diseño";
                document.querySelector("#Link14").innerHTML ="Estudiantes";
                document.querySelector("#Link15").innerHTML ="Usuarios recientes";
                document.querySelector("#Link16").innerHTML ="Diseño grafico";


                /////
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }
                 
            }
            else if (input){
                if (!input.checked){
                    localStorage.setItem("idioma", "en")
                    document.querySelector("#Link1").innerHTML ="Panel";
                    document.querySelector("#Link2").innerHTML ="Students";
                    document.querySelector("#Link3").innerHTML ="Leave";
                    document.querySelector("#Link4").innerHTML ="Students";
                    document.querySelector("#Link5").innerHTML ="daily views";
                    document.querySelector("#Link6").innerHTML ="Commets";
                    document.querySelector("#Link7").innerHTML ="recent uses";
                    document.querySelector("#Link8").innerHTML ="see all";
                    document.querySelector("#Link9").innerHTML ="Name";
                    document.querySelector("#Link10").innerHTML ="Code";
                    document.querySelector("#Link11").innerHTML ="Section";
                    document.querySelector("#Link12").innerHTML ="Specialty";
                    document.querySelector("#Link13").innerHTML ="Graphic design";
                    document.querySelector("#Link14").innerHTML ="Students";
                    document.querySelector("#Link15").innerHTML ="recent users";
                    document.querySelector("#Link16").innerHTML ="Graphic design";

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

                document.querySelector("#Link1").innerHTML ="Panel";
                document.querySelector("#Link2").innerHTML ="Estudiantes";
                document.querySelector("#Link3").innerHTML ="Salir";
                document.querySelector("#Link4").innerHTML ="Estudiantes";
                document.querySelector("#Link5").innerHTML ="Vistas diarias";
                document.querySelector("#Link6").innerHTML ="Comentarios";
                document.querySelector("#Link7").innerHTML ="Usos recientes";
                document.querySelector("#Link8").innerHTML ="mirar todo";
                document.querySelector("#Link9").innerHTML ="Nombre";
                document.querySelector("#Link10").innerHTML ="Codigo";
                document.querySelector("#Link11").innerHTML ="Seccion";
                document.querySelector("#Link12").innerHTML ="Especialidad";
                document.querySelector("#Link13").innerHTML ="Diseño";
                document.querySelector("#Link14").innerHTML ="Estudiantes";
                document.querySelector("#Link15").innerHTML ="Usuarios recientes";
                document.querySelector("#Link16").innerHTML ="Diseño grafico";
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


