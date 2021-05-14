import React from 'react'
import { useStateValue } from "./StateProvide";


function CheckoutProduct(props) {
    const [ {basket} , dispatch ] = useStateValue ();
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            imgSrc: props.imgSrc,
            title: props.title,
            price: props.price
        })
    }
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
                    <button href="#" class="btn btn-primary" onClick={removeFromBasket}>remove</button>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
