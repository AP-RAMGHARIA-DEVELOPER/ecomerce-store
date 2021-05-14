import React from 'react'
import { CardElement , useStripe , useElements } from "@stripe/react-stripe-js";

function Payment() {

    const stripe = useStripe();
    const elements = useElements();
    return (
        <div>
            <CardElement
  options={{
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
  }}
/>
           </div>
    )
}

export default Payment
