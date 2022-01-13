import { applyMiddleware, createStore } from "redux";
import * as storage from "./store";

const savedState = localStorage.getItem("state");
const deserialized = savedState && JSON.parse(savedState);
const preloadedState = deserialized || {
    producto: {},
    productos: [
        {
            codigo: 525,
            nombre: "Producto Uno",
            precio: 100,
            cantidad: 1,
            total: 100
        },
        {
            codigo: 625,
            nombre: "Producto Dos",
            precio: 100,
            cantidad: 1,
            total: 100
        }
    ]
};

const middlewares = applyMiddleware(
    storage.loggerMiddleware,
    storage.agregarOModificarProductoMiddleware,
    storage.storageMiddleware
);

    //storage.generadorCodigoProductoBuilder(100),

const store = createStore(storage.reducer, preloadedState, middlewares);

export default store;