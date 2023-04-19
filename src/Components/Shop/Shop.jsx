import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartAdded, setCartAdded] = useState([]);

    const clicked = (productClicked) => {
        console.log(productClicked);
        console.log(cartAdded);
        setCartAdded([...cartAdded, productClicked]);
        console.log(cartAdded);
        
    }
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products key={product.id} product={product} clicked={clicked}></Products>)
                }
            </div>
            <div className='summary-container'>
                <Summary cartAdded={cartAdded} ></Summary>
            </div>

        </div>
    );
};

export default Shop;