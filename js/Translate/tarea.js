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
                document.querySelector("#Link1").innerHTML ="Things to do";
                document.querySelector("#add").innerHTML ="Add";
                document.querySelector("#delete").innerHTML="Delete"
                document.getElementsByName('task')[0].placeholder="New task";

               
                 // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }  else{localStorage.setItem("idioma","es") 
                document.querySelector("#Link1").innerHTML ="Lista de tareas";
                document.querySelector("#add").innerHTML ="Agregar";
                document.querySelector("#delete").innerHTML="Borrar"
                document.getElementsByName('task')[0].placeholder="Tarea nueva";

  
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }
                 
            }
            else if (input){
                if (!input.checked){
                    localStorage.setItem("idioma", "en")
                    document.querySelector("#Link1").innerHTML ="Things to do";
                    document.querySelector("#add").innerHTML ="Add";
                    document.querySelector("#delete").innerHTML="Delete"
                    document.getElementsByName('task')[0].placeholder="New task";
                   
                   // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);

                }
                else{  localStorage.setItem("idioma", "es")
                document.querySelector("#Link1").innerHTML ="Lista de tareas";
                document.querySelector("#add").innerHTML ="Agregar";
                document.querySelector("#delete").innerHTML="Borrar"
                document.getElementsByName('task')[0].placeholder="Tarea nueva";
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

