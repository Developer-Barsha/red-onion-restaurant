import React, { useRef } from 'react';
import NavigateHome from '../NavigateHome/NavigateHome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../images/logo2.png';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [user]=useAuthState(auth);
    const navigate=useNavigate();

    const login = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(!email || !password){
            toast('1 or 2 information is wrong')
        }

        await signInWithEmailAndPassword(auth, email, password);
        if (user) {
            navigate('/');
        }
    }
    

    return (
        <div className='mt-4'>
            <ToastContainer />
            <NavigateHome></NavigateHome> 
            <img src={logo} width='200px' className='mb-2 d-flex justify-content-center' style={{margin:'0 auto'}} alt=''/>
            {/* <h3 className='text-center'>Please Login</h3> */}
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input type="email" ref={emailRef} name="email" id="email" placeholder='Enter Your Email' required/>
                <input type="password" ref={passwordRef} name="password" id="password" placeholder='Enter Your Password' required/>
                <input onClick={login} type="submit" value="Login" />
                <p>No Account? <Link to={'/signup'} style={{color:'crimson'}}>Register Here</Link></p>
            <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;