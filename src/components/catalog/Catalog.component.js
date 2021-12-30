import React from "react";
import './Catalog.css';

import Cardix from "../card/Card.component";
import stock  from "../../stock.json";

const Catalog = () => {


    return(
        <div id="catalog">
            {
                stock.map((product) => 
                {
                    return <Cardix key={product.id} product={product}/>   
                })
            }
            
        </div>
    )
}

export default Catalog;
/*

{
                stock.map(item => {
                    return <Card key={item.id} item={item}/>
                })

            }

            */