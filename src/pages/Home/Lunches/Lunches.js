import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../../App';
import './Lunches.css'
import Meal from '../Meal/Meal';

const Lunches = () => {
    const [cart, setCart] = useContext(CartContext);
    const [lunches, setLunches] = useState([]);

    useEffect(()=>{
        fetch('lunch.json')
        .then(res=>res.json())
        .then(data=>setLunches(data))
    } ,[]);

    const addToCart = (meal) => {
        let addedItems=[...cart, meal];
        setCart(addedItems);
    };

    return (
        <div className='meals'>
            {
                lunches.map(meal=><Meal key={meal.id} addToCart={addToCart} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Lunches;