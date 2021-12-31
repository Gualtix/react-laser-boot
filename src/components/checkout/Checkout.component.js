
import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './Checkout.css';

const Checkout = ({ show, handleShow, handleClose }) => {

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow} style={{ marginRight: "5px" }}><i className="fas fa-shopping-cart"></i></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>



          <form>

            <div className="form-group">
              <label for="exampleInputEmail1">Nombre</label>
              <input type="email" className="form-control" id="exampleInputEmail1"/>
            </div>

            <div className="row">
              <div className="col">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1"/>
              </div>
              <div className="col">
                <label for="exampleInputPassword1">Telefono</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
            </div>


            <div className="form-group">
              <label for="exampleInputPassword1">Direccion</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
          </form>

          <div style="display: flex; justify-content: space-between; align-items: center; background-color: rgb(255, 255, 255); margin-left: 15px; margin-top: 10px;">

            <div style="font-size: 25px; font-weight: bold; background-color: rgb(255, 255, 255);">
              Detalle
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

              
              <tr>
                <th scope="row">1</th>
                <td>Norco MT Bike</td>
                <td>

                  <div className="input-group" style="width: 150px; margin-right: 15px; ">
                    <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-minus"></i></button>
                    <input type="text"  className="form-control"/>
                    <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-plus"></i></button>
                  </div>

                </td>
                <td>Q 475.25</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Dunlop 29 Tires</td>
                <td>3</td>
                <td>Q 218.21</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Oakley MTB Helmet</td>
                <td>7</td>
                <td>Q 375.26</td>
              </tr>
            </tbody>



              <tfoot>
                <tr>
                  <td colspan="2">Totales:</td>
                  <td id="total_unidades">0</td>
                  <td id="total">0</td>
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

export default Checkout;