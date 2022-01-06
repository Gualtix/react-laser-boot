import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './Buyer.css';

const Buyer = ({ show, handleShow, handleClose }) => {
    return (
        <div>

            <Button variant="warning" onClick={handleShow} style={{ width: "100%", marginTop: "15px", fontWeight: "bold" }}>COMPRAR</Button>

            <Modal size="lg" show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar al Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="card-image">
                        <img className="rounded-0" src="https://biketoday.news/storage/articles/3857/1568643575_main.jpg" />
                    </div>

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgb(255, 255, 255)", marginLeft: "15px", marginTop: "10px"}}>

                        <div style={{fontSize: "25px", fontWeight: "bold", backgroundColor: "rgb(255, 255, 255)"}}>
                            Norco MTB Bikes
                        </div>

                        <div className="input-group" style={{width: "150px", marginRight: "15px"}}>
                            <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-minus"></i></button>
                            <input type="text" className="form-control" />
                            <button type="button" className="btn btn-secondary" type="button"><i className="fas fa-plus"></i></button>
                        </div>

                    </div>

                    <div className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </div>

                    <div className="card-heading">
                        Q475.25
                    </div>

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary" onClick={handleClose}>Agregar</Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
};

export default Buyer;

