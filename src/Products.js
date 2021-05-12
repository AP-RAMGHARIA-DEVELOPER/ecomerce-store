import React from 'react'

const Products = (props) => {

    return (
        <div>
            <div className="container product box">
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-12">
                <div class="card" style={{width:"18rem"}}>
                <img src={props.imgSrc} class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.price}</p>
                    <a href="#" class="btn btn-primary" >Go somewhere</a>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Products
