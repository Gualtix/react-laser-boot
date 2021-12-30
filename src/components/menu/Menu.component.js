import React from "react";
import './Menu.css';

const Menu = () => {
    return <header>

        <nav>
            <ul>
                <li><a href="#">CATALOGO</a></li>
            </ul>
        </nav>

        <button type="button" className="btn btn-primary" css="margin: 5px;" type="button"><i className="fas fa-shopping-cart"></i></button>
        <div className="input-group">

            <input type="text" className="form-control" placeholder="Buscar..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <button type="button" className="btn btn-secondary" css="margin-right: 5px;" type="button"><i className="fas fa-search"></i></button>

        </div>

    </header>

}

export default Menu;