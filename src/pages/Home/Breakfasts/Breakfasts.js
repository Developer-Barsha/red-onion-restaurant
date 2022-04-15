import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(()=>{
        fetch('breakfast.json')
        .then(res=>res.json())
        .then(data=>setBreakfasts(data))
    } ,[]);

    return (
        <div className='meals'>
            {
                breakfasts.map(meal=><Meal key={meal.id} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Breakfasts;