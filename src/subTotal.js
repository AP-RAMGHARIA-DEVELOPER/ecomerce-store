import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvide";
import { getBasketTotal } from './reducer';

function SubTotal () {
    const [ {basket} , dispatch ] = useStateValue ();
    return (
        <div className="subTotal">
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
            
            />
            <button>proceed to checkout</button>
            
        </div>
    )
}

export default SubTotal
