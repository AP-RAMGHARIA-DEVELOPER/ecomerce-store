import React from "react";
import './App.css';
import Header from './Header';
import Hero from './HeroSection';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import Products from '../src/Products';
import m1 from './images/m1.png';
import m2 from './images/m2.png';
import m3 from './images/m3.png';
import { Switch , Route } from 'react-router-dom';
import Men from './Men';


const App = () => {
  
  
  return (
    //BEM
    <div className="app">
      <Header/>
      <Hero/>
      <About/>
      <Banner/>
      <Products
          imgSrc={m1}
          title="men striped shirt"
          price="$35"
      />
      <Products
          imgSrc={m2}
          title="men denim shirt"
          price="$45"
      />
      <Products
          imgSrc={m3}
          title="men floral design"
          price="$55"
      />
      <Footer/>
      <Switch>
       
        <Route path="/men" component={Men}/>
      </Switch>
    </div>
    
  );
  
}

export default App;
