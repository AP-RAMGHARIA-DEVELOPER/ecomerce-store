import React from "react";
import './App.css';
import Header from './Header';
import Hero from './HeroSection';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import {useState,useEffect} from "react";
import { commerce } from './lib/commerce';
import Product from './Product'


const App = () => {
  const [products,setProducts]= useState()

  const fetchProducts = async () => {
    const {data} = await commerce.products.list();
    setProducts(data);
  }
  useEffect(()=>{
    fetchProducts();
  },[]);
  console.log(products);
  
  return (
    //BEM
    <div className="app">
      <Header/>
      <Hero/>
      <About/>
      <Banner/>
      <Product products={products}/>
      <Footer/>
    </div>
  );
}

export default App;
