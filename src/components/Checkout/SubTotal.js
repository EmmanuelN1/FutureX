import React from 'react';
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue }  from "../ContextApi/StateProvider";
import { getBasketTotal } from "../ContextApi/reducer";
import {useHistory} from "react-router-dom";

function SubTotal() {

        const [{basket},] = useStateValue();
        const history = useHistory(); //this gives us the browser History

         
    return (
        <div className="subtotal">
            {/* a snippet of code using currency format */}

            {/* value is parsed as a render prop, which makes it re-usable */}
            <CurrencyFormat 
                renderText={(value) => (  
                    <>
                    <p>
                        Subtotal ({basket.length} items);
                    <strong> {value}</strong>
                    </p>

                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>

                    </>
                )}

                decimalScale={2} //decimal place of 2
                value={getBasketTotal(basket)} //current value 
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button onClick = {e => history.push('/payment')}>Proceed to checkout</button>  {/* it means onClick the button fires an event and then push (i.e redirect ) it to the payment page */}
               
        </div>
    )
}

export default SubTotal;
