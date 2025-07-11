let carrito = [];

function AgregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById('Lista-Compra');
    const totalElement = document.getElementById('total');
    const IVAElement = document.getElementById('IVA');
    const totalIVAElement = document.getElementById('Itotal');
    carritoElement.innerHTML = '';
    let total = 0;
    let IVA = 0.19 * total;
    let totalIVA = total + IVA;

    carrito.forEach(element => {
    const li = document.createElement('li');
    li.textContent = `${element.nombre} - $${element.precio}`;
    carritoElement.appendChild(li);
    total += element.precio;
    IVA = 0.19 * total;
    totalIVA = total + IVA;

    });
    
    totalIVAElement.textContent = totalIVA;
    IVAElement.textContent = IVA;
    totalElement.textContent = total;
}


