import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Products from './Products'
import w1 from './images/w1.jpeg';
import w2 from './images/w2.jpeg';
import w6 from './images/w6.png';

const Accessories = () => {
    return (
        <div>
             <Header/>
            <h1>MEN CLOTHING</h1>
            <Products
                imgSrc={w1}
                title=" women leather jacket"
                price="$35"
            />
            <Products
                imgSrc={w2}
                title="women black top"
                price="$45"
            />
            <Products
                imgSrc={w6}
                title="women long  sweatshirt"
                price="$55"
            />
            <Footer/>
        </div>
    )
}

export default Accessories
