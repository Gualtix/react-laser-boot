//const tbody = document.getElementsByTagName("tbody")[0];

const preloadedState = {
    producto: {},
    productos: 
    [
        {
            codigo:"1",
            descripcion:"Norco MTB Carbon Fiber",
            unidades:3,
            precio_unitario:3754,
        },
        {
            codigo:"2",
            descripcion:"Helment MTB Oak Tree",
            unidades:9,
            precio_unitario:275,
        },
        {
            codigo:"3",
            descripcion:"Dunlop 29 Inches Tires",
            unidades:3,
            precio_unitario:275,
        }
    ]
};

let indice = 0;
const reducer = (state, action) => {
    if (action.type == "producto-agregado")
    {
        indice++;
        const producto = action.payload;
        const codigo = indice;
        const total = producto.cantidad * producto.precio;
        return {
            ...state, 
            productos: [
                ...state.productos, 
                { 
                    ...producto,
                    codigo,
                    total
                }
            ]
        };
    }

    if (action.type == "producto-modificado")
    {
        const producto = action.payload;
        const productos = state.productos.slice();
        const codigo = producto.codigo;
        const total = producto.cantidad * producto.precio;
        const old = productos.find((item) => item.codigo == codigo);
        const index = productos.indexOf(old);
        productos[index] = {...producto, total };
        return {
            ...state,
            productos
        };
    }

    if (action.type == "producto-eliminado")
    {
        const codigo = action.payload.codigo;
        const productos = state.productos.filter((item) => item.codigo != codigo);
        return {
            ...state,
            productos
        }
    }

    if (action.type == "producto-seleccionado")
    {
        const codigo = action.payload.codigo;
        return {
            ...state,
            producto: state.productos.find(x => x.codigo == codigo) || {}
        }
    }

    return state;
};

const store = Redux.createStore(reducer, preloadedState);

let latestState;

store.subscribe(() => {
    let currentState = store.getState();
    if (currentState != latestState)
    {
        latestState = currentState;
        console.log("estado: ", currentState);
        renderTable(currentState.productos);
    }
});

/*
let order = {
    nombre: "Walter Morales",
    email: "walkter@gmail.com",
    telefono:51510864,
    direccion:"Antigua Guatemala, 4ta Calle 3-37",
    detalle:[
        {
            codigo:"1",
            descripcion:"Norco MTB Carbon Fiber",
            unidades:3,
            precio_unitario:3754,
            subtotal:0
        },
        {
            codigo:"2",
            descripcion:"Helment MTB Oak Tree",
            unidades:9,
            precio_unitario:275,
            subtotal:0
        },
        {
            codigo:"3",
            descripcion:"Helment MTB Oak Tree",
            unidades:9,
            precio_unitario:275,
            subtotal:0
        }
    ],
    total_unidades:0,
    total:0
}
*/

function renderTable(productos)
{


    const filas = productos.map((item) => {
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${item.codigo}</td>
            <td>${item.descripcion}</td>
            <td>

                <div class="input-group" style="width: 150px; margin-right: 15px; ">
                    <button type="button" class="btn btn-secondary" type="button"><i class="fas fa-minus"></i></button>
                    <input type="text"  class="form-control">
                    <button type="button" class="btn btn-secondary" type="button"><i class="fas fa-plus"></i></button>
                </div>

            </td>
            <td>${item.unidades * item.precio_unitario}</td>
            <td>
                <div class="btn-group">
                    <a title="Eliminar" href="#" class="btn btn-sm btn-outline-danger">
                        <i class="fas fa-trash-alt"></i>
                    </a>
                </div>
            </td>
        `;

        const [eliminar] = tr.getElementsByTagName("a");

        eliminar.addEventListener("click", (event) => {
            event.preventDefault();
            store.dispatch({
                type: "producto-eliminado",
                payload: {
                    codigo: item.codigo
                }
            });
        });
    

        return tr;
    });

    var tbody = document.getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";
    filas.forEach((tr) => {
        tbody.appendChild(tr);
    });
    
    const total_unidades = document.getElementById("total_unidades");
    const total = document.getElementById("total");

    console.log(sum(productos, x => x.unidades));
    console.log(sum(productos, x => x.total));

    total_unidades.innerText = sum(productos, x => x.unidades);
    total.innerText = sum(productos, x => (x.unidades * x.precio_unitario));

    function sum(elementos, selector) {
        return elementos
            .map(selector)
            .reduce((a, b) => a + b, 0);
    }
}

function increment(){
    var id = "";
    var txt = document.getElementById("txt_"+id); 
    txt.value = (parseInt(txt.value) + 1);
}

function decrement(){
    var id = "";
    var txt = document.getElementById("txt_"+id); 
    txt.value = (parseInt(txt.value) - 1);
}

async function click_shopping_cart(){
    var modal = document.getElementById('cart_modal');

    var txt = await (await fetch("/pro/html/cart_modal.html")).text();
    modal.innerHTML += txt;
    open_cartModal();
}

function open_cartModal() {
    document.getElementById("backdrop").style.display = "block";
    document.getElementById("aceptcartmodal").style.display = "block";
    document.getElementById("aceptcartmodal").classList.add("show");
    renderTable(store.getState().productos);
}
function close_cartModal() {
    document.getElementById("backdrop").style.display = "none";
    document.getElementById("aceptcartmodal").style.display = "none";
    document.getElementById("aceptcartmodal").classList.remove("show");
}