import React from 'react';
import './Summary.css';

const Summary = (props) => {
    return (
        <div className='summary-container'>
            <div className='summary-details'>
                <h1>Order Summary</h1>
                <p>Selected Items: {props.selectedItems}</p>
                <p>Total Price: ${props.totalPrice}</p>
                <p>Total Shipping Charge: ${props.totalShippingCharge}</p>
                <p>Tax: ${(props.totalPrice * .1).toFixed(2)}</p>
                <h3>Grand Total: ${props.totalPrice + props.totalShippingCharge + props.totalPrice * .1}</h3>
                <button className='clear-button'>Clear Cart</button>
                {/* <br /> */}
                <button className='review-button'>Review Order</button>
            </div>
        </div>
    );
};

export default Summary;