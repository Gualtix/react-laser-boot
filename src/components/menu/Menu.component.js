import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
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

            <Checkout
                show={show}
                setShow={setShow}
                handleClose={handleClose}
                handleShow={handleShow}
            />

            <div className="input-group">
                <input type="text" className="form-control" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>

        </header>

    )
}

export default Menu;


/*
  


*/