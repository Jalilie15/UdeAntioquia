import Navbar from "../componentes/Navbar";
import './login.css'

function Login() {
    function enviarDatos(event) {
      event.preventDefault();
  
      
      fetch("/login", {
        method: "post",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          username: document.getElementById("username").value,
          password: document.getElementById("password").value,
        }),
      });
    }
    return (
      <>
      <Navbar></Navbar>
        
        <div className="container">
          <form className="col-4 d-flex flex-column justify-content-around" onSubmit={enviarDatos}>
            <label>Usuario:</label>
            <input id="username"></input>
            <label>Contraseña:</label>
            <input type="password" id="password"></input>
            <input className="ingresar" type="submit" value="Iniciar sesion"></input>
          </form>
        </div>
      </>
    );
  }
  export default Login;
  