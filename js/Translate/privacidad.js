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
                document.querySelector("#q1").innerHTML ="Notice of Privacy";
                document.querySelector("#q2").innerHTML ="To return";
                document.querySelector("#q3").innerHTML ="Notice of Privacy";
                document.querySelector("#q4").innerHTML ="Terms and conditions for student registration:";
                document.querySelector("#q5").innerHTML ="Principle of legality, loyalty and transparency: the User's consent will be required at all times prior to completely transparent information on the purposes for which the personal data is collected.";
                document.querySelector("#q6").innerHTML ="Purpose limitation principle: personal data will be collected for specific, explicit and legitimate purposes.";
                document.querySelector("#q7").innerHTML ="Principle of data minimization: the personal data collected will only be strictly necessary in relation to the purposes for which they are processed.";
                document.querySelector("#q8").innerHTML ="Accuracy principle: personal data must be exact and always updated.";
                document.querySelector("#q9").innerHTML ="Principle of limitation of the term of conservation: the personal data will only be maintained in a way that allows the identification of the User for the time necessary for the purposes of its treatment.";
                document.querySelector("#q10").innerHTML ="Principle of integrity and confidentiality: personal data will be treated in a way that guarantees its security and confidentiality.";
                document.querySelector("#q11").innerHTML ="Proactive responsibility principle: The student will be responsible for ensuring that the above principles are met, while entering the page under their own responsibility and consent, said above the terms can continue with their registration.";

                
                 // checkedbutton
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }  else{localStorage.setItem("idioma","es") 
                document.querySelector("#q1").innerHTML ="Aviso de Privacidad";
                document.querySelector("#q2").innerHTML ="Regresar";
                document.querySelector("#q3").innerHTML ="Aviso de privacidad";
                document.querySelector("#q4").innerHTML ="Terminos y condiciones para el registro de los estudiantes:";
                document.querySelector("#q5").innerHTML ="Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los Cuáles se recogen los datos personales.";
                document.querySelector("#q6").innerHTML ="Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.";
                document.querySelector("#q7").innerHTML ="Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.";
                document.querySelector("#q8").innerHTML ="Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.";
                document.querySelector("#q9").innerHTML ="Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.";
                document.querySelector("#q10").innerHTML ="Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.";
                document.querySelector("#q11").innerHTML ="Principio de responsabilidad proactiva: El estudiante será responsable de asegurar que los principios anteriores se cumplen, mientras ingresa a la pagina bajo su propia responsabilidad y consentimiento, dicho anteriormente los terminos puede continuar con su registro.";


                /////
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").removeChild(img);
                }
                 
            }
            else if (input){
                if (!input.checked){
                    localStorage.setItem("idioma", "en")
                    document.querySelector("#q1").innerHTML ="Notice of Privacy";
                    document.querySelector("#q2").innerHTML ="To return";
                    document.querySelector("#q3").innerHTML ="Notice of Privacy";
                    document.querySelector("#q4").innerHTML ="Terms and conditions for student registration:";
                    document.querySelector("#q5").innerHTML ="Principle of legality, loyalty and transparency: the User's consent will be required at all times prior to completely transparent information on the purposes for which the personal data is collected.";
                    document.querySelector("#q6").innerHTML ="Purpose limitation principle: personal data will be collected for specific, explicit and legitimate purposes.";
                    document.querySelector("#q7").innerHTML ="Principle of data minimization: the personal data collected will only be strictly necessary in relation to the purposes for which they are processed.";
                    document.querySelector("#q8").innerHTML ="Accuracy principle: personal data must be exact and always updated.";
                    document.querySelector("#q9").innerHTML ="Principle of limitation of the term of conservation: the personal data will only be maintained in a way that allows the identification of the User for the time necessary for the purposes of its treatment.";
                    document.querySelector("#q10").innerHTML ="Principle of integrity and confidentiality: personal data will be treated in a way that guarantees its security and confidentiality.";
                    document.querySelector("#q11").innerHTML ="Proactive responsibility principle: The student will be responsible for ensuring that the above principles are met, while entering the page under their own responsibility and consent, said above the terms can continue with their registration.";
    
                   
                   // checkedbutton
                document.querySelector(".trans").appendChild(img).style.width = "50px";
                document.querySelector(".trans").appendChild(image).style.width = "50px";
                document.querySelector(".trans").removeChild(image);

                }
                else{  localStorage.setItem("idioma", "es")

                document.querySelector("#q1").innerHTML ="Aviso de Privacidad";
                document.querySelector("#q2").innerHTML ="Regresar";
                document.querySelector("#q3").innerHTML ="Aviso de privacidad";
                document.querySelector("#q4").innerHTML ="Terminos y condiciones para el registro de los estudiantes:";
                document.querySelector("#q5").innerHTML ="Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los Cuáles se recogen los datos personales.";
                document.querySelector("#q6").innerHTML ="Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.";
                document.querySelector("#q7").innerHTML ="Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.";
                document.querySelector("#q8").innerHTML ="Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.";
                document.querySelector("#q9").innerHTML ="Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.";
                document.querySelector("#q10").innerHTML ="Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.";
                document.querySelector("#q11").innerHTML ="Principio de responsabilidad proactiva: El estudiante será responsable de asegurar que los principios anteriores se cumplen, mientras ingresa a la pagina bajo su propia responsabilidad y consentimiento, dicho anteriormente los terminos puede continuar con su registro.";

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


