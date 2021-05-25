import React from 'react'
import './cartProduct.css'
export const CartProduct = ({id, image, name, price}) => {
    return (
       
        <div className="cartProduct">
            <div className="cartProduct__img">
                <img src={image} />
            </div>
            

            <div className="cartProduct__info">
                <div className="cartProduct__infoName">
                    <h3>
                        {name}
                    </h3>
                </div>
                <div className="cartProduct__infoPrice">
                    <h3>
                        ${price}
                    </h3>
                </div>
            </div>
         
            {/* <button>
                Remove
            </button> */}
        
            
        </div>
        
    )
}
