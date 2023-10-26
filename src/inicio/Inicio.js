import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Product from '../products/Product';

//pagina de inicio
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