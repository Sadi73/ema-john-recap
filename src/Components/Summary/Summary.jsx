import React from 'react';
import './Summary.css';

const Summary = (props) => {
    // console.log(props);
    let totalPrice = 0;
    let totalShippingCharge = 0;
    let tax = 0;
    for(const item of props.cartAdded){
        console.log(item.price);
        totalPrice = totalPrice + item.price;
        totalShippingCharge = totalShippingCharge + item.shipping;
        
    }
    return (
        <div className='summary-container'>
            <div className='summary-details'>
                <h1>Order Summary</h1>
                <p>Selected Items: {props.cartAdded.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShippingCharge}</p>
                <p>Tax: ${(totalPrice * .1).toFixed(2)}</p>
                <h3>Grand Total: ${totalPrice + totalShippingCharge + totalPrice * .1}</h3>
                <button className='clear-button'>Clear Cart</button>
                <br />
                <button className='review-button'>Review Order</button>
            </div>
        </div>
    );
};

export default Summary;