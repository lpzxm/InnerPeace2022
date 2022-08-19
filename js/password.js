function showPass(){ // Si quieres le cambias el nombre xD
    checkbox = document.querySelector(".pass");
    passField = document.getElementById('password');
    if(checkbox.checked==true) // Si la checkbox de mostrar contraseña está activada
    {
        passField.type = "text";
    }
    else // Si no está activada
    {
        passField.type = "password"
    }
}

function showPass2(){
    checkbox2 = document.querySelector(".pass2");
    passField = document.getElementById('pass2');
    if(checkbox2.checked==true){
        passField.type = "text";
    }
    else{
        passField.type = "password";
    }
}