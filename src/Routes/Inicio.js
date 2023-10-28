import Navbar from '../componentes/Navbar';
import Banner from '../componentes/Banner';
import Eshop from '../componentes/eShop';
import { Link } from 'react-router-dom';


const Inicio = () => {
   return(
       <>
       <Navbar canSearch={true} linkA={
       <Link to="/login">Ir a Login</Link>
       } />
       
       <Banner/>
       <div className='product-card-container'>
       
       </div>
       <Eshop></Eshop>
       
       </>  
  );  
};


export default Inicio;