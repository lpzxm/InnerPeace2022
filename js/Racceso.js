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
                document.querySelector("#a4").innerHTML ="Start";
                document.querySelector("#a0").innerHTML ="Page access denied";
                

                
                 // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }  else{localStorage.setItem("idioma","es") 
                document.querySelector("#a1").innerHTML ="¡ACCESO DENEGADO!";
                document.querySelector("#a2").innerHTML ="Debe iniciar sesion o registrarse para visualizar la informacion de la pagina selecionada.";
                document.querySelector("#a3").innerHTML ="Registro";
                document.querySelector("#a4").innerHTML ="Inicio";
                document.querySelector("#a0").innerHTML ="Acceso denegado de paginas";
                


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
                    document.querySelector("#a4").innerHTML ="Start";
                    document.querySelector("#a0").innerHTML ="Page access denied";
                    
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

                document.querySelector("#a1").innerHTML ="¡ACCESO DENEGADO!";
                document.querySelector("#a2").innerHTML ="Debe iniciar sesion o registrarse para visualizar la informacion de la pagina selecionada.";
                document.querySelector("#a3").innerHTML ="Registro";
                document.querySelector("#a4").innerHTML ="Inicio";
                document.querySelector("#a0").innerHTML ="Acceso denegado de paginas";
                
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


