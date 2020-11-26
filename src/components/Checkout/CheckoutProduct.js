import React from 'react';
import "./CheckoutProduct.css";
import {useStateValue} from "../ContextApi/StateProvider";

function CheckoutProgram({id, image, title, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the iten from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
             id:id, //the id is needed to finnd the item in  the basket and remove it
        })
        
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
        

                    <div className="checkoutProduct__info">
                            <p className="checkoutProduct__title">{title}</p>

                            <p className= "checkoutProduct__price"> 
                                <small>$</small>
                                <strong>{price}</strong>
                            </p>

                            <button onClick={removeFromBasket}>Remove from Basket</button>

                    </div>

            </div>
    )
}

export default CheckoutProgram;
