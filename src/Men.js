import React from 'react'
import Products from '../src/Products';
import m1 from './images/m1.png';
import m2 from './images/m2.png';
import m3 from './images/m3.png';
import Header from './Header';
import Footer from './Footer';

const Men = () => {
    
    return (
        <div>
            <Header/>
            <div className="men-heading text-center">
                    <h1>Men Products</h1>
                    <hr className="w-25 mx-auto"></hr>
                </div>

                <div class="container">
  <div class="row align-items-start">
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
                title="men striped shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m1}
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

export default Men
