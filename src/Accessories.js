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
             <div className="men-heading text-center">
                    <h1>Accessories</h1>
                    <hr className="w-25 mx-auto"></hr>
                </div>
                <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={w1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
  </div>
            
        </div>
            <Footer/>
        </div>
    )
}

export default Accessories
