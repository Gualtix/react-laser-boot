import { applyMiddleware, createStore } from "redux";
import * as storage from "./store";

const savedState = localStorage.getItem("state");
const deserialized = savedState && JSON.parse(savedState);
const preloadedState = deserialized || {
    producto: {},
    productos: [
        {
            codigo: "1",
            nombre: "Producto Uno",
            precio: 100,
            cantidad: 1,
            total: 100
        },
        {
            codigo: "2",
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
    storage.generadorCodigoProductoBuilder(100),
    storage.storageMiddleware,
);

const store = createStore(storage.reducer, preloadedState, middlewares);

export default store;