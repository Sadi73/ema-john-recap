import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [selectedItems, setSelectedItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShippingCharge, setTotalShippingCharge] = useState(0);
    const clicked = (id, price, shippingCharge) => {
        setSelectedItems(selectedItems + 1);
        setTotalPrice(totalPrice + price);
        setTotalShippingCharge(totalShippingCharge + shippingCharge);
    }
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products key={product.id} product={product} clicked={clicked}></Products>)
                }
            </div>
            <div className='summary-container'>
                <Summary selectedItems={selectedItems} totalPrice = {totalPrice} totalShippingCharge={totalShippingCharge} ></Summary>
            </div>

        </div>
    );
};

export default Shop;