import React from 'react';
import NavigateHome from '../NavigateHome/NavigateHome';

const Signup = () => {
    return (
        <div>
            <NavigateHome></NavigateHome>
            <h3 className='text-center mt-5'>Please Register</h3>
            <form >
                <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Signup;