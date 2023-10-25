import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
            <h1 className="nav-logo"> Tecnik 🖥️ </h1>
            <Link className="seeCarrito" to={"/carrito"}>🛒</Link >
        </nav>
    </div>
  );
};

export default Navbar;