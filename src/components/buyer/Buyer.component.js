import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import './Buyer.css';
import Badge from 'react-bootstrap/Badge';

import { useDispatch, useSelector } from "react-redux";
import { productoModificado,productoAgregado,productoSeleccionado} from "../../store/store";

const Increment = (op,cnt) => {
   
    if(op == '+'){
        cnt++;
    }
    else{
      if(cnt > 0){
        cnt--;
      }
    } 
    return cnt;
}

const AgregarProd = (prod,cnt,acciones,handleClose) => {
    /*
        codigo: "1",
        nombre: "Producto Uno",
        precio: 100,
        cantidad: 1,
        total: 100
    */
    //console.log(prod);

    const payload = {

        codigo: prod.code,
        nombre: prod.name,
        precio: prod.price,
        cantidad: cnt,
        total: (prod.price * cnt)
    }
    
    if(cnt > 0){

    }
    acciones.agregar(payload);
    handleClose();
}

const NumFormat = (num) => {   // round to 2 decimal places    
    num = parseFloat(num).toFixed(2)
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Buyer = ({ show, handleShow, handleClose,product}) => {

    
    


    const productos = useSelector((state) => state.productos);
    const dispatch = useDispatch();

    const modificar   = (codigo) => dispatch(productoModificado(codigo));
    const agregar     = (payload) => dispatch(productoAgregado(payload));
    //    const agregar     = (payload => dispatch(productoAgregado(payload)));
    const seleccionar = (codigo) => dispatch(productoSeleccionado(codigo));

    

    const acciones = {
        modificar,
        seleccionar,
        agregar
    }


    //let xp = productos.find(x => x.codigo == product.code) || null
    //let tmp = 0;
    //console.log(xp);

    


    const [cnt, setCNT] = useState(0);


  
    return (
        <div>

            <Button variant="warning" onClick={handleShow} style={{ width: "100%", marginTop: "15px", fontWeight: "bold" }}>
                COMPRAR

                
                {(cnt > 0) && (
                <Badge pill bg="danger" style={{marginLeft:"15px"}}>{cnt}</Badge>
                )}
                
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar al Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="card-image">
                        <img  src={product.img} style={{width:"450px",height:"300px"}}/>
                    </div>

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "rgb(255, 255, 255)", marginLeft: "15px", marginTop: "10px"}}>

                        <div style={{fontSize: "25px", fontWeight: "bold", backgroundColor: "rgb(255, 255, 255)"}}>
                            {product.name}
                        </div>

                        <div className="input-group" style={{width: "150px", marginRight: "15px"}}>
                            <button type="button" className="btn btn-secondary" type="button" onClick={() => setCNT(Increment('-',cnt))}><i className="fas fa-minus"></i></button>
                            <input type="text" className="form-control" value={cnt} readOnly/>
                            <button type="button" className="btn btn-secondary" type="button" onClick={() => setCNT(Increment('+',cnt))}><i className="fas fa-plus"></i></button>
                        </div>

                    </div>

                    <div className="card-text">
                        {product.description}
                    </div>

                    <div className="card-heading">
                        
                        Q {/*parseFloat(product.price * cnt).toFixed(2)*/
                            NumFormat(product.price * cnt)}
                    </div>

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="primary" onClick={() => {AgregarProd(product,cnt,acciones,handleClose)}}>Agregar</Button>

                </Modal.Footer>
            </Modal>

        </div>
    )
};

export default Buyer;

