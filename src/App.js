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
        </Switch>
    </div>
    </Router>
    
   
    
    
  );
  
}
export default App;
