import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import NavigateHome from '../NavigateHome/NavigateHome';
import './CheckOut.css'

const CheckOut = () => {
    const [user] = useAuthState(auth);

    const formSubmit=(e)=>{
        // e.preventDefault();
    }

    return (
        <div style={{marginTop:'100px'}}>
            <NavigateHome></NavigateHome>
            <form onSubmit={formSubmit}>
                <input type="text" name="address" id="address" placeholder='Enter Your Address' required/>
                <input type="text" name="City" id="City" placeholder='Your City'/>
                <input type="text" name="password" id="password" readOnly value={user?.email} />
                <textarea type="text" name="instructor" id="instructor" placeholder='Add Delivery Instructor'/>
                <input type="submit" value="Check Out" />
            </form>
        </div>
    );
};

export default CheckOut;