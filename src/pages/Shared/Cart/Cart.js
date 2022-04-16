import React, { useContext } from 'react';
import { CartContext } from '../../../App';
import { Modal } from 'react-bootstrap';
import CartItem from './CartItem/CartItem';
import './Cart.css'

function Cart(props) {
  const [cart] = useContext(CartContext);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart Summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='cart'>
        {cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='close-btn' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;