import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import CarrtitoElementos from "./CarrtitoElementos";
import { CarritoTotal } from "./CarritoTotal";

const CarritoCarga = () => {
    const {cart} = useContext(dataContext);
    //Condicion
    
    return cart.length > 0 ? (
        <>
        <CarrtitoElementos/>
        <CarritoTotal/>
        </>
        

       
        
        
        
    ):(
        <h2 className="cart-message-center"> Tu carrito está vacío</h2>
    )
  };
  export default CarritoCarga;