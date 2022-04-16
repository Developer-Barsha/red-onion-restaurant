import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../../App';
import Meal from '../Meal/Meal';
const Breakfasts = () => {
    const [cart, setCart] = useContext(CartContext);
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res=>res.json())
        .then(data=>setBreakfasts(data))
    } ,[]);

    console.log(cart);

    const addToCart = (meal) => {
        let addedItems=[...cart, meal];
        setCart(addedItems);
    };

    return (
        <div className='meals'>
            {
                breakfasts.map(meal=><Meal key={meal.id} addToCart={addToCart} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Breakfasts;