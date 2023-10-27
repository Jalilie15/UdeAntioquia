function Login() {
    function enviarDatos(event) {
      event.preventDefault();
  
      //validar
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
        
        <div className="container">
          <form className="col-4 d-flex flex-column justify-content-around" onSubmit={enviarDatos}>
            <label>username:</label>
            <input id="username"></input>
            <label>password:</label>
            <input type="password" id="password"></input>
            <input type="submit" value="Iniciar sesion"></input>
          </form>
        </div>
      </>
    );
  }
  export default Login;
  