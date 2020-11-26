import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

//Stripe

const promise = loadStripe('pk_test_51HrZbPKlWqUz3Qn6gKCtlFRt2UiAjPQPdnh7a4DMaZxFCQNdMyTydhou2soTZxYJgcTjGVa3QoPdhREwuX1dTv6A00SjOE5dwx');


function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
          <Switch>
              {/* Defining and creating route path*/}

              <Route path="/checkout">                  
                   <Checkout/>
              </Route>

                <Route path="/payment">
                    {/* wrapping the payment route in the element tag fro react-stripe */}
                   <Elements stripe ={promise}>                 
                        <Payment/>
                    </Elements>
                </Route>
                

                <Route path="/">                  
                  <Home/>
                </Route>


          </Switch>
      </div>
      
      <div className="app__mobileScreen"> 
                  <h5>Please, use a laptop or tablet to view this page</h5>
              </div>
    </Router>
  );
}

export default App;
