let idioma = document.querySelector("#translate");
const img = document.createElement("img");
const image = document.createElement("img");
img.src = "../img/spain.png";
image.src = "../img/united-kingdom.png";
    traducir(localStorage);
    function traducir(idiomaStorage, input) {
        if(idiomaStorage){
            if (idiomaStorage.idioma == "en") {
                localStorage.setItem("idioma", "en")
                // banner
                document.querySelector("#TitleA").innerHTML = "Sign up here";
                document.querySelector("#TitleB").innerHTML = "Full name";
                document.getElementsByName('username')[0].placeholder = "Enter your name";
                document.querySelector("#TitleD").innerHTML = "Email";
                document.getElementsByName('email')[0].placeholder = "Enter your email";
                document.querySelector("#TitleF").innerHTML = "Student code";
                document.getElementsByName('codigo_estudiante')[0].placeholder = "Enter your student code";
                document.querySelector("#A").innerHTML = "Date of birth";
                document.querySelector("#B").innerHTML = "Course Year";
                document.querySelector("#C").innerHTML = "--Select your year--";
                document.querySelector("#D").innerHTML = "First Year";
                document.querySelector("#E").innerHTML = "Second Year";
                document.querySelector("#F").innerHTML = "Third Year";
                document.querySelector("#G").innerHTML = "Speciality";
                document.querySelector("#H").innerHTML = "--Select your speciality--";
                document.querySelector("#I").innerHTML = "Software Development";
                document.querySelector("#J").innerHTML = "PRIMARY HEALTH CARE";
                document.querySelector("#K").innerHTML = "Graphic Design";
                document.querySelector("#L").innerHTML = "Electromechanical";
                document.querySelector("#M").innerHTML = "Electronic";
                document.querySelector("#M_2").innerHTML = "Automotive mechanics";
                document.querySelector("#N").innerHTML = "Section";
                document.querySelector("#O").innerHTML = "--Select your section--";
                document.querySelector("#TitleH").innerHTML = "Password";
                document.querySelector(".poli").innerHTML = "Privacy Policy";
                document.getElementsByName('password')[0].placeholder = "Enter your password";
                document.querySelector("#TitleL").value = "Register";
                document.querySelector("#TitleM").innerHTML = "I already have a password";
                // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);
            }
            else{
                localStorage.setItem("idioma", "es")
                // banner
                document.querySelector("#TitleA").innerHTML = "Registrate aquí";
                document.querySelector("#TitleB").innerHTML = "Nombre completo";
                document.getElementsByName('username')[0].placeholder = "Ingresa tu nombre";
                document.querySelector("#TitleD").innerHTML = "Correo electronico";
                document.getElementsByName('email')[0].placeholder = "Ingresa tu correo electronico";
                document.querySelector("#TitleF").innerHTML = "Codigo de estudiante";
                document.getElementsByName('codigo_estudiante')[0].placeholder = "Ingresa tu codigo de estudiante";
                document.querySelector("#A").innerHTML = "Fecha de nacimiento:";
                document.querySelector("#B").innerHTML = "Año";
                document.querySelector("#C").innerHTML = "--Seleccione su año--";
                document.querySelector("#D").innerHTML = "Primer año";
                document.querySelector("#E").innerHTML = "Segundo año";
                document.querySelector("#F").innerHTML = "Tercer año";
                document.querySelector("#G").innerHTML = "Especialidad";
                document.querySelector("#H").innerHTML = "--Seleccione su especialidad--";
                document.querySelector("#I").innerHTML = "Desarrollo de Software";
                document.querySelector("#J").innerHTML = "Atención Primaria en Salud";
                document.querySelector("#K").innerHTML = "Diseño Grafico";
                document.querySelector("#L").innerHTML = "Electromecanica";
                document.querySelector("#M").innerHTML = "Electronica";
                document.querySelector("#M_2").innerHTML = "Mecanica Automotriz";
                document.querySelector("#N").innerHTML = "Sección:";
                document.querySelector("#O").innerHTML = "--Seleccione su sección--";
                document.querySelector(".poli").innerHTML = "Politica de privacidad";
                document.querySelector("#TitleH").innerHTML = "Contraseña";
                document.getElementsByName('password')[0].placeholder = "Ingresa tu contraseña";
                document.querySelector("#TitleL").value = "Registrarme!";
                document.querySelector("#TitleM").innerHTML = "Ya tengo una cuenta";
                // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
            }
        }
        else if(input){
            if (!input.checked) {
                localStorage.setItem("idioma", "en")
                // banner
                document.querySelector("#TitleA").innerHTML = "Sign up here";
                document.querySelector("#TitleB").innerHTML = "Full name";
                document.getElementsByName('username')[0].placeholder = "Enter your name";
                document.querySelector("#TitleD").innerHTML = "Email";
                document.getElementsByName('email')[0].placeholder = "Enter your email";
                document.querySelector("#TitleF").innerHTML = "Student code";
                document.getElementsByName('codigo_estudiante')[0].placeholder = "Enter your student code";
                document.querySelector("#A").innerHTML = "Date of birth";
                document.querySelector("#B").innerHTML = "Course Year";
                document.querySelector("#C").innerHTML = "--Select your year--";
                document.querySelector("#D").innerHTML = "First Year";
                document.querySelector("#E").innerHTML = "Second Year";
                document.querySelector("#F").innerHTML = "Third Year";
                document.querySelector("#G").innerHTML = "Speciality";
                document.querySelector("#H").innerHTML = "--Select your speciality--";
                document.querySelector("#I").innerHTML = "Software Development";
                document.querySelector("#J").innerHTML = "PRIMARY HEALTH CARE";
                document.querySelector("#K").innerHTML = "Graphic Design";
                document.querySelector("#L").innerHTML = "Electromechanical";
                document.querySelector("#M").innerHTML = "Electronic";
                document.querySelector("#M_2").innerHTML = "Automotive mechanics";
                document.querySelector("#N").innerHTML = "Section";
                document.querySelector("#O").innerHTML = "--Select your section--";
                document.querySelector(".poli").innerHTML = "Privacy Policy";
                document.querySelector("#TitleH").innerHTML = "Password";
                document.getElementsByName('password')[0].placeholder = "Enter your password";
                document.querySelector("#TitleL").value = "Register";
                document.querySelector("#TitleM").innerHTML = "I already have a password";
                // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);
            }
            else{
                localStorage.setItem("idioma", "es")
                // banner
                document.querySelector("#TitleA").innerHTML = "Registrate aquí";
                document.querySelector("#TitleB").innerHTML = "Nombre completo";
                document.getElementsByName('username')[0].placeholder = "Ingresa tu nombre";
                document.querySelector("#TitleD").innerHTML = "Correo electronico";
                document.getElementsByName('email')[0].placeholder = "Ingresa tu correo electronico";
                document.querySelector("#TitleF").innerHTML = "Codigo de estudiante";
                document.getElementsByName('codigo_estudiante')[0].placeholder = "Ingresa tu codigo de estudiante";
                document.querySelector("#A").innerHTML = "Fecha de nacimiento:";
                document.querySelector("#B").innerHTML = "Año";
                document.querySelector("#C").innerHTML = "--Seleccione su año--";
                document.querySelector("#D").innerHTML = "Primer año";
                document.querySelector("#E").innerHTML = "Segundo año";
                document.querySelector("#F").innerHTML = "Tercer año";
                document.querySelector("#G").innerHTML = "Especialidad";
                document.querySelector("#H").innerHTML = "--Seleccione su especialidad--";
                document.querySelector("#I").innerHTML = "Desarrollo de Software";
                document.querySelector("#J").innerHTML = "Atención Primaria en Salud";
                document.querySelector("#K").innerHTML = "Diseño Grafico";
                document.querySelector("#L").innerHTML = "Electromecanica";
                document.querySelector("#M").innerHTML = "Electronica";
                document.querySelector("#M_2").innerHTML = "Mecanica Automotriz";
                document.querySelector("#N").innerHTML = "Sección:";
                document.querySelector("#O").innerHTML = "--Seleccione su sección--";
                document.querySelector(".poli").innerHTML = "Politica de privacidad";
                document.querySelector("#TitleH").innerHTML = "Contraseña";
                document.getElementsByName('password')[0].placeholder = "Ingresa tu contraseña";
                document.querySelector("#TitleL").value = "Registrarme!";
                document.querySelector("#TitleM").innerHTML = "Ya tengo una cuenta";
                // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
            }
        }
    }



    idioma.addEventListener("click", () => {
        let input = document.querySelector("#translate");
        traducir(null, input )
       
    })
