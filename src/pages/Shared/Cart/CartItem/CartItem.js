import React from 'react';
import './CartItem.css'

const CartItem = ({cartItem}) => {
    const { name, photo, price } = cartItem;
    return (
        <div className='cart-item d-flex'>
            <img className='img-fluid' src={photo} alt="" />
            <div>
            <h4 className='text-danger' title={name}>{name.length>20 ? name.slice(0,18) : name}</h4>
            <h5>$ {price}</h5>
            </div>
        </div>
    );
};

export default CartItem;