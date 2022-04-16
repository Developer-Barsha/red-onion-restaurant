import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res=>res.json())
        .then(data=>setBreakfasts(data))
    } ,[]);

    
    const [cart, setCart] = useState([]);
    console.log(cart);
    let addedItems=[];

    const addToCart = (meal) => {
        console.log(addedItems);
        addedItems=[...cart, meal];
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