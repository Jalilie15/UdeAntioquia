import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import '../carritoCarga/CarritoElemntos.css'



export const CarrtitoElementos = () => {

    const {cart} = useContext(dataContext);

  return cart.map((product) => {
    return(
        <div className="cartContent" key={product.id}>
            <img src={product.imageUrl} alt="product-card" />
            <h3 className="name">{product.name}</h3>
            <h4 className="price">${product.precio}</h4>
            
        </div>
    )

  })
}

export default CarrtitoElementos;