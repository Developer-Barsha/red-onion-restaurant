import React,{useState, useEffect} from 'react';
import './Lunches.css'
import Meal from '../Meal/Meal';

const Lunches = () => {
    const [lunches, setLunches] = useState([]);
    useEffect(()=>{
        fetch('lunch.json')
        .then(res=>res.json())
        .then(data=>setLunches(data))
    } ,[]);
    return (
        <div className='meals'>
            {
                lunches.map(meal=><Meal key={meal.id} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Lunches;