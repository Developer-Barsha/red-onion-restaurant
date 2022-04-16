import React, { useRef } from 'react';
import NavigateHome from '../NavigateHome/NavigateHome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../images/logo2.png';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword,emailUser, loading, emailError] = useSignInWithEmailAndPassword(auth);


    const login = async () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (!email || !password) {
            toast('1 or 2 information is wrong')
        }

        await signInWithEmailAndPassword(email, password);
        if (user) {
            navigate('/');
        }

        if(emailError){
            toast(emailError.message)
        }
    }

    const sendResetPasswordMail=async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }else{
            toast('Iinvalid Email')
        }

        if(error || emailError){
            toast(error.message || emailError.message)
        }
    }



    return (
        <div className='mt-4'>
            <ToastContainer />
            <NavigateHome></NavigateHome>
            <img src={logo} width='200px' className='mb-2 d-flex justify-content-center' style={{ margin: '0 auto' }} alt='' />
            {/* <h3 className='text-center'>Please Login</h3> */}
            <form onSubmit={(e) => { e.preventDefault() }}>
                <input type="email" ref={emailRef} name="email" id="email" placeholder='Enter Your Email' required />
                <input type="password" ref={passwordRef} name="password" id="password" placeholder='Enter Your Password' required />
                <input onClick={login} type="submit" value="Login" />
                <p>No Account? <Link to={'/signup'} style={{ color: 'crimson' }}>Register Here</Link></p>
                <p>Forgot Password? <button
                    className='bg-white border-0 text-decoration-underline text-danger'
                    onClick={sendResetPasswordMail}
                >Reset Password</button></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;