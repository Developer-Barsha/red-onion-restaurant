import React from 'react';
import NavigateHome from '../NavigateHome/NavigateHome';

const CheckOut = () => {
    return (
        <div style={{marginTop:'100px'}}>
            <NavigateHome></NavigateHome>
            <form>
                <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                <input type="email" name="email" id="email" placeholder='Enter Your Email' required/>
                <input type="password" name="password" id="password" placeholder='Enter Your Password' required/>
                <input type="password" name="confrimPassword" id="confrimPassword" placeholder='Confirm Password' required/>
                <input type="submit" value="Check Out" />
               </form>
        </div>
    );
};

export default CheckOut;