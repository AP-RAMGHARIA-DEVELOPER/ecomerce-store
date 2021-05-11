import React from 'react'
import Header from './Header';
import Hero from './HeroSection';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
        <Header/>
        <Hero/>
        <About/>
        <Banner/>
        <Footer/>
        </div>
    )
}

export default Home
