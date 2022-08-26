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
                document.querySelector("#a1").innerHTML ="ACCESS DENIED!";
                document.querySelector("#a2").innerHTML ="You must log in or register to view the information on the selected page.";
                document.querySelector("#a3").innerHTML ="Register";
                document.querySelector("#a4").innerHTML ="Login";
                document.querySelector("#a0").innerHTML ="Page access denied";
                

                
                 // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }  else{
                localStorage.setItem("idioma","es") 
                document.querySelector("#a1").innerHTML ="¡ACCESO DENEGADO!";
                document.querySelector("#a2").innerHTML ="Debe iniciar sesión o registrarse para visualizar la información de la página seleccionada.";
                document.querySelector("#a3").innerHTML ="Registro";
                document.querySelector("#a4").innerHTML ="Inicio";
                document.querySelector("#a0").innerHTML ="Acceso denegado de páginas";
                


                /////
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }
                 
            }
            else if (input){
                if (!input.checked){
                    localStorage.setItem("idioma", "en")
                    document.querySelector("#a1").innerHTML ="ACCESS DENIED!";
                    document.querySelector("#a2").innerHTML ="You must log in or register to view the information on the selected page.";
                    document.querySelector("#a3").innerHTML ="Register";
                    document.querySelector("#a4").innerHTML ="Login";
                    document.querySelector("#a0").innerHTML ="Page access denied";    
                   // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);

                }
                else{  
                    localStorage.setItem("idioma", "es")
                    document.querySelector("#a1").innerHTML ="¡ACCESO DENEGADO!";
                    document.querySelector("#a2").innerHTML ="Debe iniciar sesión o registrarse para visualizar la información de la página seleccionada.";
                    document.querySelector("#a3").innerHTML ="Registro";
                    document.querySelector("#a4").innerHTML ="Inicio";
                    document.querySelector("#a0").innerHTML ="Acceso denegado de páginas";
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


