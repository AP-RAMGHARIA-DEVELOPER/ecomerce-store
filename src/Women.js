import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Products from './Products'
import w1 from './images/w1.jpeg';
import w2 from './images/w2.jpeg';
import w6 from './images/w6.png';
import w3 from './images/W3.jpeg';
import w7 from './images/w7.png';
import w8 from './images/w8.png';
import w9 from './images/w9.png';
import w10 from './images/w10.png';
import w11 from './images/w11.png';
import w12 from './images/w12.png';
import w13 from './images/w13.png';
import w14 from './images/w14.png';
import w15 from './images/w15.png';

const Women = () => {
    return (
        <div>
           <Header/>
           <div className="men-heading text-center">
                    <h1>Women Products</h1>
                    <hr className="w-25 mx-auto"></hr>
                </div>
                <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <Products
                imgSrc={w11}
                title="women striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w12}
                title="women denim shirt"
                price="$45.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w15}
                title="women jeans"
                price="$25.99"
            />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <Products
                imgSrc={w6}
                title="women longwear "
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w7}
                title="women tops"
                price="$15.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w8}
                title="women zipper"
                price="$35.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={w9}
                title="women plain shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w10}
                title="women tops"
                price="$15.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w3}
                title="women plain shirt"
                price="$25.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={w2}
                title="women tops"
                price="$15.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="women vasket"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w14}
                title="women tees"
                price="$25.99"
            />
    </div>
  </div>
            
        </div>
        <Footer/>
        </div>
    )
}

export default Women
