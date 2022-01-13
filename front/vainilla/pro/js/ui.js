const ui = {
    onFormSubmit: (data) => {},
    onEliminarClick: (codigo) => {},
    onEditarClick: (codigo) => {},
    renderForm,
    renderTable,
};

//Client Form
const form = document.getElementsByTagName("form")[0];


const inputCodigo = document.getElementById("codigo");
const inputNombre = document.getElementById("nombre");
const inputCantidad = document.getElementById("cantidad");
const inputPrecio = document.getElementById("precio");

//Table
const tbody = document.getElementsByTagName("tbody")[0];

//Total
const cantidadTotalElement = document.getElementById("cantidad-total");
const precioTotalElement = document.getElementById("precio-total");
const granTotalElement = document.getElementById("gran-total");