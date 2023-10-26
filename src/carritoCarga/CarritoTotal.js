import { useContext } from "react";
import { dataContext } from "../context/DataContext";

export const CarritoTotal = () => {

    const {cart} = useContext(dataContext);

    const total = cart.reduce((acc, el) => acc+ el.precio, 0)
  return (
    <div className="cartTotal">

        <h3>Total a Pagar: ${total}</h3>
        <button className="button-pay"> Realizar Pago </button>
    </div>
  );
  
};
