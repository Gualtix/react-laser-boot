import React, { useState, useRef, useEffect } from 'react';
import './Card.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Buyer from "../buyer/Buyer.component";


const Cardix = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card style={{ width: '19rem'}}>
            <Card.Img variant="top" src={props.product.img} />
            <Card.Body >
                <Card.Title style={{fontWeight: "bold"}}>{props.product.name}</Card.Title>
                
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                    <Card.Title style={{color:"dimgrey"}}>Q {props.product.price}</Card.Title>
                </div>
                
                <Buyer
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}
                    handleShow={handleShow}
                />
            </Card.Body>
        </Card>
    )
}


/*
<div css="display:flex; justify-content: flex-end; background-color: red; height:15px">
const Card = (props) => {
    return (
        <div data-productid="1234567890" className="card"  css="width: 18rem; background-color: rgba(255, 20, 145, 0); border: none;">
            
            <div className="card-sl">

                <div className="card-image">
                    <img src={props.product.img} />
                </div>

                <div css="display: flex; justify-content: space-between; background-color: white;">

                    <div className="card-heading">
                        {props.product.name}

                    </div>

                    <div className="card-heading">
                        {props.product.price}
                    </div>

                </div>

                <button type="button" className="btn btn-warning rounded-0 rounded-bottom" css="width:100%;" type="button"><strong>COMPRAR</strong></button>
            </div>

        </div>
    )
}
*/

export default Cardix;