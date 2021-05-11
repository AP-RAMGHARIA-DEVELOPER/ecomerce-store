import React from 'react'
import a1 from './images/p2.jpg';
import a2 from './images/p3.3.jpg';
import a3 from './images/p4.4.jpg';
import a4 from './images/p65.jpg';

function About() {
    return (
        
            <div className=" ">
                <div className="t-heading my-5 text-center">
            <h2>New Trendings</h2>
            <hr className="w-25 mx-auto"></hr>
            </div>
            <div className="container px-5rem t-products">
<div className="row mx-auto align-items-center">
                <div class="card" style={{width:"16rem"}}>
  <img src={a1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <div className="button-cart">
    <a href="#" class="btn btn-primary mx-auto">Go somewhere</a>
    </div>
  </div>
</div>

<div class="card" style={{width:"16rem"}}>
  <img src={a2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <div className="button-cart">
    <a href="#" class="btn btn-primary mx-auto">Go somewhere</a>
    </div>
  </div>
</div>

<div class="card" style={{width:"16rem"}}>
  <img src={a3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <div className="button-cart">
    <a href="#" class="btn btn-primary mx-auto">Go somewhere</a>
    </div>
  </div>
</div>

<div class="card" style={{width:"16rem"}}>
  <img src={a4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title text-center">Card title</h5>
    <div className="button-cart">
    <a href="#" class="btn btn-primary mx-auto">Go somewhere</a>
    </div>
  </div>
</div>

</div>
</div>

            </div>
        
    )
}

export default About
