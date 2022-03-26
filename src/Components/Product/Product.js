import React from 'react';
import './Product.css';

const Product = (props) => {
   const {name, img, price, seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
            <p>Price:${price}</p>
            <p><small>Seller:{seller}</small></p>
           </div>
           <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;