import React, { useState } from 'react';
import logo from '../../../images/logo2.png'
import CustomLink from '../../CustomLink/CustomLink';
import { ShoppingCartIcon } from '@heroicons/react/solid'
import './Header.css'
import Cart from '../Cart/Cart';
import { Badge } from 'react-bootstrap';
import auth from '../../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [user] = useAuthState(auth);

    return (
        <header>
            <img src={logo} alt="" />
            <nav>

                <Cart
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <CustomLink to={'/home'} onClick={() => setModalShow(true)}>{<ShoppingCartIcon style={{ width: '30px' }} />}
                    <Badge bg='danger' className='cart-badge d-flex justify-content-center align-items-center'>0</Badge>
                </CustomLink>
                {user ?
                    <button onClick={()=>signOut(auth)} className='text-dark border-0 bg-white fw-bolder'>SignOut</button>
                    :
                    <CustomLink to={'/login'}>Login</CustomLink>
                }
                <CustomLink className='signup-btn' to={'/signup'}>Signup</CustomLink>
            </nav>
        </header>
    );
};

export default Header;