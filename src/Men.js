import React from 'react'
import Products from '../src/Products';
import m1 from './images/m1.png';
import m2 from './images/m2.png';
import m3 from './images/m3.png';
import m4 from './images/m4.png';
import m5 from './images/m5.png';
import m6 from './images/m6.png';
import m7 from './images/m7.png';
import m8 from './images/m8.png';
import m9 from './images/m9.png';
import m10 from './images/m10.png';
import m11 from './images/m11.png';
import m12 from './images/m12.png';
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
                price="$45.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m2}
                title="men denim shirt"
                price="$25.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m3}
                title="men design shirt"
                price="$55.99"
            />
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
    <Products
                imgSrc={m4}
                title="men denim shirt"
                price="$45.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m5}
                title="men design shirt"
                price="$55.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m6}
                title="men design shirt"
                price="$25.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={m7}
                title="men design shirt"
                price="$25.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m8}
                title="men plain shirt"
                price="$25.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m9}
                title="men printed t-shirt"
                price="$15.99"
            />
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
    <Products
                imgSrc={m10}
                title="men boxes shirt"
                price="$35.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m11}
                title="men deisgn shirt"
                price="$25.99"
            />
    </div>
    <div class="col">
    <Products
                imgSrc={m12}
                title="men design shirt"
                price="$45.99"
            />
    </div>
  </div>
</div>
            
            
            
            <Footer/>
        </div>
    )
}

export default Men
