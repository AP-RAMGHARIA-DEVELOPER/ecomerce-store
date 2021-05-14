import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvide";
import { getBasketTotal } from './reducer';

function SubTotal () {
    const [ {basket} , dispatch ] = useStateValue ();
    return (
        <div className="subTotal  shadow align-items-center">
            <CurrencyFormat
             renderText={(value) => (
                    <>
                    <p>
                     subTotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="gift">
                        <input type="checkbox"/> this order contains gift
                 </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            
            /><br></br>
            <div class="d-grid gap-2 col-6 mx-auto proceed  ">
            <button class="btn btn-primary" type="button">proceed to checkout</button>  
</div>

            
        </div>
    )
}

export default SubTotal
