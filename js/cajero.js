const listaProductos = [];

function agregarProducto() {
    const nombreProducto = document.getElementById("nombreProducto").value;
    const precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (nombreProducto === "" || isNaN(precioUnitario) || isNaN(cantidad)) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    const detalle = precioUnitario * cantidad;

    const producto = {
        nombre: nombreProducto,
        precio: precioUnitario,
        cantidad: cantidad,
        detalle: detalle
    };

    listaProductos.push(producto);

    document.getElementById("nombreProducto").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("cantidad").value = "";

    actualizarTablaYTotal();
}

function actualizarTablaYTotal() {
    const tablaProductos = document.getElementById("tablaProductos");
    const totalVentaSpan = document.getElementById("totalVenta");

    tablaProductos.innerHTML = "";

    let totalVenta = 0;
    listaProductos.forEach((producto) => {
        totalVenta += producto.detalle;
        const row = tablaProductos.insertRow();
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio.toFixed(2)}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.detalle.toFixed(2)}</td>
        `;
    });

    totalVentaSpan.textContent = totalVenta.toFixed(2);
}

function realizarCompra() {
    alert("Compra realizada");

    listaProductos.length = 0;

    document.getElementById("nombreProducto").value = "";
    document.getElementById("precioUnitario").value = "";
    document.getElementById("cantidad").value = "";

    actualizarTablaYTotal();
}

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});
