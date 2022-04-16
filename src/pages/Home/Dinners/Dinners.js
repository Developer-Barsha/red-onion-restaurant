import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../../App';
import Meal from '../Meal/Meal';

const Dinners = () => {
    const [cart, setCart] = useContext(CartContext);
    const [dinners, setDinners] = useState([]);

    const addToCart = (meal) => {
        let addedItems = [...cart, meal];
        setCart(addedItems);
    };

    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, []);
    return (
        <div className='meals'>
            {
                dinners.map(meal => <Meal key={meal.id} addToCart={addToCart} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Dinners;