import React, { useState, useEffect } from 'react';
import useCart from '../../../hooks/useCart';
import Cart from '../../Shared/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Meal.css'

const Meal = ({ meal }) => {
    const { name, photo, price, description } = meal;
    const [cart, setCart] = useCart([]);

    let savedCart = [];
    const addToCart = (meal) => {
        savedCart = [...cart, meal];
        // if (meal) {
            // for(const meal in savedCart){
            // const rest=cart.filter(item=>item.id !== meal.id);
            savedCart.push(meal);
            setCart(savedCart);
            // }
        // }
    };


    return (
        <div className='meal'>
            <ToastContainer />
            <Cart
                show={false}
            />

            <img className='img-fluid p-3' src={photo} alt="" />
            <h4 className='pb-2 text-danger'>{name}</h4>
            <p>{description}</p>
            <h5 className='price'>$ <span>{price}</span></h5>
            <button type="submit" onClick={() => addToCart(meal)}>Add To Cart</button>
        </div>
    );
};

export default Meal;