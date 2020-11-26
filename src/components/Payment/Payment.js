import React, {useState, useEffect} from 'react';
import "./Payment.css";
import {useStateValue} from "../ContextApi/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct"
import {Link} from "react-router-dom";
import {CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal} from "../ContextApi/reducer";
import axios from "../axios";

function Payment() {
    const [ {basket}] = useStateValue();

    

    //hooks
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect( () => {
            //generate the special stripe secret which allows to charge a customer
            //connec
            const getClientSecret = async () => {
                const response = await axios({
                    method: 'post',
                    url: 'yet to built '
                }                   
                )
            }

            getClientSecret();

    }, [basket]) //it means whenever the basket changes it needs a special secret

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true) // this block of code allows you the click on the button just once and then disable it as set in the condition above
        
        //client Secret


        // const payload = await stripe
    }

    const handleChange = (event) => {
        //listen for changes in the CardElement display any errors as the customer types their card details
        setDisabled(event.empty); //it means if event is empty then disable the button
        setError(event.error ? event.error.message: ""); //else if there is an error from above show the error or nothing
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

                                <div className="payment__priceContainer">
                                    {/* Currency Format component */}
                                <CurrencyFormat 
                                        renderText={(value) => (  
                                            <>
                                            <h3>
                                                Order Total: {value}
                                            </h3>

                                            </>
                                        )}

                                        decimalScale={2} //decimal place of 2
                                        value={getBasketTotal(basket)} //current value 
                                        displayType={"text"}
                                        thousandSeperator={true}
                                        prefix={"$"}
                                    />

                                    <button disabled={processing || disabled || succeeded}> 
                                            <span> {processing ? <p>Processing...</p> : "Buy Now" }</span>
                                     </button>
                                </div>
                                    
                                    {/* Error */}
                                            {error && <div> {error} </div>}  {/* iif there is error then display the error */}
                            </form>
                    </div>
                </div>  
        </div>
    </div>
    )
}
export default Payment;
