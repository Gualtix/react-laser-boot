import React from "react";
//import Card from "../card/Card.component";
import stock  from "../../stock.json";

const Catalog = () => {


    return(
        <div>
            {
                stock.map((product) => 
                {
                  return(   
                        <div>
                            <div>
                                <img src={product.img} alt={product.name}/>
                            </div>
                            <div>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                 
                            </div>
                        </div>
                    )   
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