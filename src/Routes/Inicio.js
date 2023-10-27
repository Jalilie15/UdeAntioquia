import Navbar from '../componentes/Navbar';
import Banner from '../componentes/Banner';
import Product from '../componentes/Product';


const Inicio = () => {
   return(
       <>
       <Navbar/>
       <Banner/>
       <div className='product-card-container'>
       <Product/>
       </div>
       </>  
  );  
};


export default Inicio;