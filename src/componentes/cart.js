import "./cart.css";


function Producto(props) {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.name}</div>
        {props.description}
      </div>
      <span class="badge bg-primary rounded-pill">{props.price}</span>
    </li>
  );
}

export default function Cart(props) {
  let total = 0;

  function pay() {
    let venta = {
      products: props.selectedItems,
      total: total,
    };

    fetch("/pay", {
      headers: {
        "Content-type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(venta),
    });
  }
  return (
    <div className="col-4 mh-100" id="cart">
      <h2 className="d-flex justify-content-center">carrito compras 🛒</h2>
      <ol class="list-group list-group-numbered" id="list">
        {props.selectedItems.map((item) => {
          total += item.price;
          return (
            <Producto name={item.name} price={item.price}></Producto>
          );
        })}
      </ol>
      <div className="d-flex justify-content-evenly col-12 mt-4">
        <h4>
          Total: {total}
        </h4>
        <button type="button" class="btn btn-danger" onClick={pay}>
          Pagar carrito
        </button>
      </div>
    </div>
  );
}
