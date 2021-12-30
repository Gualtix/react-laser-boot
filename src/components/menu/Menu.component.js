import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'bootstrap';
import './Menu.css';

import Checkout from "../checkout/Checkout.component";



const Menu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header>

            <nav>
                <ul>
                    <li><a href="#">CATALOGO</a></li>
                </ul>
            </nav>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>



            <button type="button" className="btn btn-primary" style={{ margin: "10px" }} type="button" onClick={handleShow}><i className="fas fa-shopping-cart"></i></button>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button type="button" className="btn btn-secondary" css="margin-right: 5px;" type="button"><i className="fas fa-search"></i></button>
            </div>

            

        </header>

    )
}

export default Menu;