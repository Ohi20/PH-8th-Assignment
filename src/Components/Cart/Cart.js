import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    let productName= "";
    
    for(const product of cart){
        total = total + product.price;
        productName = product.name;
        
    }
    
    const grandTotal = total; 
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <div>
                <p>Product Name:{productName}</p>
            </div>
            <p>Total Price:${total}</p>
            <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
            <button>Choose one for me</button>
        </div>
    );
};

export default Cart;