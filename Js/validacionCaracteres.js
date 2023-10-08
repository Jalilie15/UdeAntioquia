const email = document.getElementById("usuario");
const contrasena = document.getElementById("contrasena");
const form = document.getElementById("form");

function validarcorreo(){
	var validador =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validador.test(email.value) ){
		alert('Email es valido, continue con la Contraseña');
		return true;
	}else{
		alert('campo email invalido o vacío');
		return false;
	}
} 



form.addEventListener("submit", enviar =>{
    enviar.preventDefault();
    validarcorreo(email);
    if (contrasena.value.length < 8){
        alert("Error, contraseña debe tener minimo 8 caracteres");   
    }
} );



   
