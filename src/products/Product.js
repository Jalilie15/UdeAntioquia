import '../products/Products.css'
import { useContext } from "react";
import { dataContext } from "../context/DataContext";



const Product = () => {
    const {data, cart, setCart} = useContext(dataContext);

    const byProducts = (product)=>{
      console.log(product);
      setCart([...cart, product])

    };
  return data.map((product)=>{
    return (
        <div className="card" key={product.id}>
            <img src={product.imageUrl} alt="img-product-card" />
            <h3>{product.name}</h3>
            <h3>{product.precio}</h3>
            <h3>${product.descripcion}</h3>
            <button onClick={() =>byProducts (product)}>Agregar a 🛒</button>



        </div>
    )
  })
}

export default Product