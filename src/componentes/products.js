import { useEffect, useState } from "react";


function ProductElement(props) {
  function addToCart() {
    props.add((arrayViejito) => [
      ...arrayViejito,
      { name: props.name, price: props.price, description: props.description },
    ]);
  }
  return (
    <div class="card col-3 m-4">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.description}</p>
        <div className="d-flex justify-content-around col-12">
          <h5> $ {props.price}</h5>;
          <button type="button" class="btn btn-warning" onClick={addToCart}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductList(props) {
  const [products, setProducts] = useState([]);

  let pokemons = ["ponyta", "onix", "mewtwo","charmander", "pikachu", "ditto", "squirtle", "metapod", "growlithe" ];

  useEffect(() => {
    pokemons.map((pokemon) => {
      fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon, {
        headers: {
          accept: "application/json",
        },
        method: "GET",
        mode: "cors",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts((arrayViejito) => [
            ...arrayViejito,
            {
              name: data.name,
              price: data.weight * 100,
              description: `Tiene ${data.moves.length} movimientos`,
              img: data.sprites.front_default,
            },
          ]);
        })
        .catch((e) => console.log(e));
    });
  }, []);
  return (
    <div className="col-8 d-flex flex-wrap justify-content-around">
      <h3 className="col-12 d-flex justify-content-center">Catalogo</h3>
      {products.map((product) => {
        return (
          <ProductElement
            name={product.name}
            price={product.price}
            description={product.description}
            img={product.img}
            add={props.setSelectItem}
          ></ProductElement>
        );
      })}
    </div>
  );
}
