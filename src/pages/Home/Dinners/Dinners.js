import React, {useState, useEffect} from 'react';
import Meal from '../Meal/Meal';

const Dinners = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(()=>{
        fetch('dinner.json')
        .then(res=>res.json())
        .then(data=>setDinners(data))
    } ,[]);
    return (
        <div className='meals'>
            {
                dinners.map(meal=><Meal key={meal.id} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Dinners;