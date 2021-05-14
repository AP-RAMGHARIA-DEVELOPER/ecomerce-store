import React from 'react'
import a6 from './images/c-1.webp';
import a7 from './images/c-2.webp';
import a8 from './images/c-3.webp';
import a9 from './images/c4.webp';
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <div>
            <div className="banner-add-1 my-5">
            
            </div>

            <div className="t-heading my-5 text-center">
            <h2>Supernatural Wonders</h2>
            <div className="paras my-3  text-center">
                <p>How did we create a super soft tee shirt that also happens to reduce odor and keep<br></br> you cool? With nature, naturally.</p>
            </div>
            <div className="jatt-2">
            <Link type="button" class="btn btn-primary btn-lg b1" to="/Men">Shop Men</Link>
            <Link type="button" class="btn btn-secondary btn-lg b2" to="/Women">Shop Women</Link>
            </div>
            
            </div>

            <div className="container">
            <div className="t-heading my-5 text-center">
            <h2>Shop By Category</h2>
            <hr className="w-25 mx-auto"></hr>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={a6} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Men Shoes</h5>
        <p class="card-text">Crafted with timeless designs and modern detailing, Fumomodo men's shoes feature sleek looks for relaxed, everyday styling or formal occasions.</p>
        <Link type="button" class="btn btn-outline-secondary b1" to="/Accessories">Shop Now</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={a7} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Women Shoes</h5>
        <p class="card-text">Crafted with timeless designs and modern detailing, Fumomodo men's shoes feature sleek looks for relaxed, everyday styling or formal occasions.</p>
        <Link type="button" class="btn btn-outline-secondary b1" to="/Accessories">Shop Now</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={a8} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Men Jackets</h5>
        <p class="card-text">Protect yourself from the elements with durable and stylish men's outerwear. Shop vintage-inspired designs including the water resistant parka, denim jean trucker.</p>
        <Link type="button" class="btn btn-outline-secondary b1" to="/Accessories">Shop Now</Link>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={a9} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Women Longwear</h5>
        <p class="card-text">Shop sweatshirts, hoodies, and crewnecks for women featuring knit, cotton, cropped & more in a variety of colors from the official Fumomodo store.</p>
        <Link type="button" class="btn btn-outline-secondary b1" to="/Accessories">Shop Now</Link>
      </div>
    </div>
  </div>
</div>
            </div>
            <div className="banner-add-2 my-5">
            
            </div>
            <div className="t-heading my-5 text-center">
            <h2>Made From Nature, For Nature</h2>
            <div className="paras my-3  text-center">
                <p>We craft with planet-friendly natural materials, like merino wool and <br></br>eucalyptus trees, because they're our best chance for a sustainable future.</p>
            </div>
            <div className="jatt-2">
            <button href="#" class="btn btn-primary b1">See How</button>
            </div>
            
            </div>

            
            
        </div>
    )
}

export default Banner
