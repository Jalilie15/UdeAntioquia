const carritodiv = document.getElementById("div-carrito");
const verCarrito = document.getElementById("verCarrito");
const modalcontainer = document.getElementById("modal-container")

let carritoPedido = []; //array donde se guardan los contenidos del carrito

//creamos el for que recorrerá los productos.
productos.forEach((contenidoProductos) =>{

    //asignamos la etiqueta div que tendrá la estructura html que se mostrará en pantalla.
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${contenidoProductos.imageUrl}">
    <h3>${contenidoProductos.name}</h3>
    <p>${contenidoProductos.precio}<p>
    <P>${contenidoProductos.descripcion}`;

    //agregamos el contenido al body
    carritodiv.append(content);
    //Boton de comprar para cada elemento
    let btnComprar = document.createElement("button");
    //le asignamos un text con el innerText al boton
    btnComprar.innerText = "Comprar";
    btnComprar.className = "btn-comprar"

    content.append(btnComprar);
    
    btnComprar.addEventListener("click", () =>{
        
        carritoPedido.push({
            id: contenidoProductos.id,
            img: contenidoProductos.imageUrl,
            nombre: contenidoProductos.name,
            precio: contenidoProductos.precio

        });
        
    })

});

verCarrito.addEventListener("click", () =>{
    modalcontainer.innerHTML = " ";
    modalcontainer.style.display="flex";
    const modalheader = document.createElement("div");
    modalheader.className = "modal-header"
    modalheader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalcontainer.append(modalheader);


    const modalBtn = document.createElement("h1");
    modalBtn.innerText = "X";
    modalBtn.className = "modal-header-btn";
    modalheader.append(modalBtn);
    
    modalBtn.addEventListener("click",() =>{
        modalcontainer.style.display="none";
    });
    

    carritoPedido.forEach((product)=>{
    let carritoCargado = document.createElement("div");
    carritoCargado.className= "modal-content";
    carritoCargado.innerHTML  =`
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>$${product.precio} <p> 
    `;
    modalcontainer.append(carritoCargado);
    });


    const total = carritoPedido.reduce((acu, el) => acu + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className="total-content";
    totalBuying.innerHTML = `Total a Pagar: $${total}`;
    modalcontainer.append(totalBuying);

    let pagarBtn = document.createElement("button");
    pagarBtn.className="btn-pagar";
    pagarBtn.innerText="Realizar Pago";
    modalcontainer.append(pagarBtn);
});





























