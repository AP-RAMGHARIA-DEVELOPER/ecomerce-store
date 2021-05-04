import React from 'react'
import a6 from './images/c-1.webp';
import a7 from './images/c-2.webp';
import a8 from './images/c-3.webp';
import a9 from './images/c4.webp';
import a10 from './images/banner3.jpg';

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
            <a href="#" class="btn btn-primary ">SHOP MEN</a>
            <a href="#" class="btn btn-primary ">SHOP WOMEN</a>
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
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={a7} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={a8} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={a9} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
            <a href="#" class="btn btn-primary ">SEE HOW</a>
            </div>
            
            </div>

            
            
        </div>
    )
}

export default Banner
