import React from 'react'
import Products from '../src/Products';
import m1 from './images/m1.png';
import m2 from './images/m2.png';
import m3 from './images/m3.png';

const Men = () => {
    return (
        <div>
            <h1>hie i ma a jatt</h1>
            <Products
          imgSrc={m1}
          title="men striped shirt"
          price="$35"
      />
      <Products
          imgSrc={m2}
          title="men denim shirt"
          price="$45"
      />
      <Products
          imgSrc={m3}
          title="men floral design"
          price="$55"
      />
        </div>
    )
}

export default Men
