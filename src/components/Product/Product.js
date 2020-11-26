import React from 'react';
import "./Product.css"
import { useStateValue} from "../ContextApi/StateProvider" 

function Product({title, image, price, rating, id }) {

    const [ {basket}, dispatch ] = useStateValue(); //  while the dispatch is how we manipulate the data layer"

    console.log("This is the basket", basket)

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }


    return (
        <div className="product">
            <div className="product__info">
                    <p>{title}</p> {/* it means use the title that is parsed in */}
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

            </div>

            <img src={image} alt=""/>

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product; 
