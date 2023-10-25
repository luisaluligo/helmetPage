// Inicialización de variables
let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalElement = document.getElementById("total");

    listaCarrito.innerHTML = "";
    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.producto} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}
