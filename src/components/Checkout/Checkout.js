import React from 'react';
import "./Checkout.css";
import SubTotal from './SubTotal';
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue } from "../ContextApi/StateProvider";

function Checkout() {
    const [{basket} ] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                 <img className="checkout__ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                    <div>
                        <h3 className="checkout__title"> Your Shopping Basket </h3>
                            {/*CheckoutProduct*/}
                            

                            {/* it means when you add an item to the basket it will map through it and then parse the item in the <checkoutProduct> */}
                            {basket.map(item => (
                                <CheckoutProduct
                                    id= {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                />
                            ))}

                    </div>
            </div>

            <div className="checkout__right">
                    <SubTotal/>
            </div>
        </div>
    )
}

export default Checkout
