import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <button className='social-btn'>
            <img src="https://www.dtl.coventry.domains/wp-content/uploads/2020/07/Google-Logo.png" alt="" />                
                Continue With Google
            </button>

            <button className='social-btn'>
                <img src="https://www.apkmirror.com/wp-content/uploads/2021/11/28/61a4889ec1a4d-384x384.png" alt="" />
                Continue With FaceBook
            </button>

            <button className='social-btn'>
                <img src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="" />
                Continue With GitHub
            </button>
        </div>
    );
};

export default SocialLogin;