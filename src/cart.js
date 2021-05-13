import React from 'react'
import SubTotal from './subTotal';
import { useStateValue } from "./StateProvide";
import CheckoutProduct from '../src/checkoutProduct';

function Cart () {
    const [ {basket} , dispatch ] = useStateValue ();
    return (
        <div>
            <h1>i am a cart</h1>
            {basket.map(item => (
                <CheckoutProduct
                    imgSrc={item.imgSrc}
                    title={item.title}
                    price={item.price}
                />
            ))}
            <SubTotal/>
        </div>
    )
}

export default Cart
