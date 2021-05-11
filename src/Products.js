import React from 'react'

const Products = (props) => {
    return (
        <div>
            <div className="card">
                <img src={props.imgSrc}/>
                <div className="card_info">
                    <div className="card_title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="card_price">
                        <h3>{props.price}</h3>
                    </div>
                    <div className="card_button">
                        <button>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
