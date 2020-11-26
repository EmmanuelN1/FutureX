import React, {useState} from 'react';
import "./Payment.css";
import {useStateValue} from "../ContextApi/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct"
import {Link} from "react-router-dom";
import {CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
    const [ {basket}] = useStateValue();

    

    //hooks
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (e) => {

    }

    const handleChange = () => {

    }

    return (
        <div className="payment">
            {/* Payment Section -- delivery address */}
            <div className="payment__container">
                <h1>
                    Checkout({ <Link to="/checkout"> {basket?.length} items </Link>})
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    
                    <div className="payment__address">
                            <p>123 React Lane</p>
                            <p> Sussex, London</p>
                    </div>
                </div>

            {/* Reviewing the items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery </h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image ={item.image}
                                price = {item.price}
                            />
                        ))}
                    </div>
                </div>            
            {/* Payment method */}

                <div className="payment__section">
                    <div className="payment__title">
                            <h4>Payment Details </h4>
                    </div>

                    <div className="payment__details">
                            {/* Stripe */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                            </form>
                    </div>
                </div>  
        </div>
    </div>
    )
}
export default Payment;
