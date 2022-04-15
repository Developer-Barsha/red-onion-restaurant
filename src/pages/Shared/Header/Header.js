import React, { useState } from 'react';
import logo from '../../../images/logo2.png'
import CustomLink from '../../CustomLink/CustomLink';
import { ShoppingCartIcon } from '@heroicons/react/solid'
import './Header.css'
import Cart from '../Cart/Cart';

const Header = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <header>
            <img src={logo} alt="" />
            <nav>

                <Cart
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />

                <CustomLink to={'/home'}  onClick={() => setModalShow(true)}>{<ShoppingCartIcon style={{ width: '22px' }} />}</CustomLink>
                <CustomLink to={'/login'}>Login</CustomLink>
                <CustomLink className='signup-btn' to={'/signup'}>Signup</CustomLink>
            </nav>
        </header>
    );
};

export default Header;