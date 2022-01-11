import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './Checkout.css';

import { useDispatch, useSelector } from "react-redux";
import { productoEliminado, productoSeleccionado,productoModificado } from "../../store/store";

var tmp = 0;

/*

const onSubmit = (event) => {
      event.preventDefault();
      const payload = {
          ...values,
          cantidad: parseInt(values.cantidad),
          precio: parseFloat(values.precio)
      }
      dispatch(agregarOModificarProducto(payload));
  }

*/

const ChangeCantidad = (op,prod,acciones) => {
  if(op == '+'){
    prod.cantidad++;
  }
  else{
    if(prod.cantidad > 0){
      prod.cantidad--;
    }
    
  } 
  acciones.modificar(prod)
}

const ProductItem = (prop) => {
  const producto = prop.producto;
  const acciones = prop.acciones;
  return (
      <tr>
        <th scope="row">{producto.codigo}</th>
        <td>
          <div style={{ width: "250px" }}>
          {producto.nombre}
          </div>
        </td>
        <td>

          <div className="input-group" style={{ width: "150px", marginRight: "15px" }}>
            <button type="button" className="btn btn-secondary" type="button" onClick={() => ChangeCantidad('-',producto,acciones)}><i className="fas fa-minus" ></i></button>
            <input type="text" className="form-control" value={producto.cantidad}/>
            <button type="button" className="btn btn-secondary" type="button" onClick={() => ChangeCantidad('+',producto,acciones)}><i className="fas fa-plus" ></i></button>
          </div>

        </td>
        <td>{producto.precio * producto.cantidad}</td>
        <td>
          <button type="button" className="btn btn-danger" type="button"><i className="fas fa-trash-alt" onClick={() => acciones.eliminar(producto.codigo)}></i></button>
        </td>
      </tr>
  );
}

const Checkout = ({ show, handleShow, handleClose }) => {

    const productos = useSelector((state) => state.productos);
    const dispatch = useDispatch();

    const seleccionar = (codigo) => dispatch(productoSeleccionado(codigo));
    const eliminar = (codigo) => dispatch(productoEliminado(codigo));
    const modificar = (codigo) => dispatch(productoModificado(codigo));

    const acciones = {
        seleccionar,
        eliminar,
        modificar
    }

    const cantidadTotal = sum(productos, x => x.cantidad);
    //const precioTotal = sum(productos, x => x.precio);
    const granTotal = sum(productos, x => x.total);

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow} style={{ marginRight: "5px" }}><i className="fas fa-shopping-cart"></i></button>

      <Modal size="lg" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ overflow: "hidden" }}>

          <form>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Nombre</label>
              <input type="email" className="form-control" id="exampleInputEmail1" />
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" />
              </div>
              <div className="col">
                <label htmlFor="exampleInputPassword1">Telefono</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
            </div>


            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Direccion</label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
          </form>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(255, 255, 255)", marginLeft: "15px", marginTop: "10px" }}>

            <div style={{ fontSize: "25px", fontWeight: "bold", backgroundColor: "rgb(255, 255, 255)" }}>
              D E T A L L E
            </div>

          </div>

          <div>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Codigo</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Unidades</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>
              <tbody>

              {productos.map(item => <ProductItem key={item.codigo} producto={item} acciones={acciones} />)}
                

              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="2">Totales:</td>
                  <td id="total_unidades">{cantidadTotal}</td>
                  <td id="total">{granTotal}</td>
                  <td></td>
                </tr>
              </tfoot>

            </table>

          </div>

        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>Realizar Compra</Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

function sum(elementos, selector) {
  return elementos
      .map(selector)
      .reduce((a, b) => a + b, 0);
}

export default Checkout;

/*


<tr>
                  <th scope="row">1</th>
                  <td>
                    <div style={{ width: "250px" }}>
                      Norco MTB Bike
                    </div>
                  </td>
                  <td>

                    <div className="input-group" style={{ width: "150px", marginRight: "15px" }}>
                      <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-minus"></i></button>
                      <input type="text" className="form-control" />
                      <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-plus"></i></button>
                    </div>

                  </td>
                  <td>Q 13,475.25</td>
                  <td>
                    <button type="button" className="btn btn-danger" type="button"><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>Mtb Helmet</td>
                  <td>

                    <div className="input-group" style={{ width: "150px", marginRight: "15px" }}>
                      <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-minus"></i></button>
                      <input type="text" className="form-control" />
                      <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-plus"></i></button>
                    </div>

                  </td>
                  <td>Q 475.25</td>
                  <td>
                    <button type="button" className="btn btn-danger" type="button"><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>




*/