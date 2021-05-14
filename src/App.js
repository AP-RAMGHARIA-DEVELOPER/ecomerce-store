import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";
import Men from './Men';
import Women from './Women';
import Home from './Home';
import Accessories from './Accessories';
import Cart from './cart';
import Payments from './Payment';

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe (
  "pk_test_51IqrsHKElpKnbZD6ulDttzFB971TktocodWaV42j1ksEUNJ5i6NwuzVNKsFjpH6yVEf5VWktb1Ne1S2JiFQoTwLL00vZ012JfK"
);

const App = () => {
  
  
  return (
    //BEM

    <Router>
      <div className="app">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/Men"component={Men}/>
          <Route path="/Women"component={Women}/> 
          <Route path="/Accessories"component={Accessories}/> 
          <Route path="/Cart"component={Cart}/> 
          <Elements stripe = {promise}>
          <Payments/>
          </Elements>
          <Route path="/Payments"component={Payments}/> 
        </Switch>
    </div>
    </Router>
    
   
    
    
  );
  
}
export default App;
