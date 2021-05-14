import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Products from './Products'
import w1 from './images/w1.jpeg';
import w2 from './images/w2.jpeg';
import w6 from './images/w6.png';
import a1 from './images/a1.png';
import a2 from './images/a2.png';
import a3 from './images/a3.png';
import a4 from './images/a4.jpeg';
import a5 from './images/a5.jpeg';
import a6 from './images/a6.jpeg';
import a7 from './images/a7.jpeg';
import a8 from './images/a8.jpeg';
import a10 from './images/a10.jpeg';
import a11 from './images/a11.jpeg';
import a12 from './images/a12.jpeg';
import a14 from './images/a14.jpeg';

const Accessories = () => {
    return (
        <div>
             <Header/>
             <div className="men-heading text-center">
                    <h1>Accessories</h1>
                    <hr className="w-25 mx-auto"></hr>
                </div>
                <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <Products
                imgSrc={a1}
                title="men belt"
                price="$15.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a2}
                title="men belt"
                price="$14.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a2}
                title="men belt"
                price="$15.99"
            />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <Products
                imgSrc={a6}
                title="women cap"
                price="$15.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a4}
                title="women earings"
                price="$25.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a5}
                title="women earings"
                price="$15.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={a7}
                title="women scarf"
                price="$45.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a8}
                title="women scarf"
                price="$45.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a10}
                title="women scarf"
                price="$45.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={a11}
                title="women earing"
                price="$25.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a12}
                title="women scarf"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={a14}
                title="women scarf"
                price="$45.99"
            />
    </div>
  </div>
            
        </div>
            <Footer/>
        </div>
    )
}

export default Accessories
