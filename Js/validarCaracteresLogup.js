const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const confirmarContrasena = document.getElementById("confirmar_contrasena");
const direccion = document.getElementById("direccion");
const formulario = document.getElementById("form");

formulario.addEventListener("submit", enviar => {
    enviar.preventDefault();
    if (apellidos.value.length < 8){
        alert("Error, Minimo de caracteres 8 en la contraseña");  
    }

});