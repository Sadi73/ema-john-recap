import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    console.log(props);
    const { id,img, name, price, seller, ratings,shipping, product } = props.product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufcturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button onClick={()=>props.clicked(id,price, shipping)}>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Products;