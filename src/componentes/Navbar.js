import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <h1 className="nav-logo">⭕ PokeTecno ⭕ </h1>
        <nav className="lista-nav">
        <ul>
            <li><NavLink end to="/">Inicio</NavLink></li>
          </ul>
          <ul>
            <li><NavLink end to="/login">Login</NavLink></li>
          </ul>
          <ul>
            <li><NavLink end to="/logup">Logup</NavLink></li>
          </ul>
          <ul>
            <li><NavLink end to="/admin">Admin</NavLink></li>
          </ul>
        </nav>
        
      </nav>
    </div>
  );
};

export default Navbar;
