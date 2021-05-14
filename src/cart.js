import React from 'react'
import SubTotal from './subTotal';
import { useStateValue } from "./StateProvide";
import CheckoutProduct from '../src/checkoutProduct';
import Header from './Header';

function Cart () {
    const [ {basket} , dispatch ] = useStateValue ();
    return (
        <div>
            <Header/>
            <div className="container">
            <div className="basket-heading text-center">
                    <h1>Shopping Basket</h1>
                </div>
                <div className="row  cart-box .shadow-sm">
                    <div className="col-lg-6 col-sm-12 products-column">
                    {basket.map(item => (
                <CheckoutProduct
                    imgSrc={item.imgSrc}
                    title={item.title}
                    price={item.price}
                />
            ))}
                    </div>
                <div className="col-lg-6 col-sm-12 product-total">
                <SubTotal/>
                </div>
            
            </div>
            </div>
            
        </div>
    )
}

export default Cart
