document.querySelector('.password span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        document.querySelector("#Capa_1").style.width = "20px";
        document.querySelector("#Capa_1").style.height = "20px";
        passwordInput.type = 'text';
    } else {
        e.target.classList.add('show');
        document.querySelector("#Capa_1").style.width = "20px";
        document.querySelector("#Capa_1").style.height = "20px";
        passwordInput.type = 'password';

    }
});

// function showPass2(){
//     checkbox2 = document.querySelector(".pass2");
//     passField = document.getElementById('pass2');
//     if(checkbox2.checked==true){
//         passField.type = "text";
//     }
//     else{
//         passField.type = "password";
//     }
// }