import React, { useState, useContext, useRef } from 'react';
import { FaLevelUpAlt, FaShoppingCart } from 'react-icons/fa'
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';

import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const userNotes = useRef('');
  const [mobileCartMenuToggle, setMoblieCartMenuToggle] = useState(false);

  const orderSubmitHandler = () => {
    console.log('Submitted:', {
      items: cartCtx.items,
      totalPrice: cartCtx.totalPrice,
      specialRequest: userNotes.current.value
    });
  }
  
  return <div className={`${styles.cart} ${mobileCartMenuToggle ? styles['mobile-open'] : ''}`}>
    <button className={styles.mobileMenuToggle} onClick={() => setMoblieCartMenuToggle(!mobileCartMenuToggle)}>
      {mobileCartMenuToggle ? <FaLevelUpAlt /> : <FaShoppingCart />}
    </button>
    <h2 className={styles.cartTitle}>Your Cart</h2>

    <div className={styles.cartItemContainer}>
      {cartCtx.items.map((i) => <CartItem key={i.id} meal={i}/>)}
    </div>
    {cartCtx.items.length > 0 &&
      <div className={styles.cartAmount}>
        <h3>Total Amount:</h3>
        <h3>{`HK$${cartCtx.totalPrice.toFixed(2)}`}</h3>
      </div>
    }

    {cartCtx.items.length > 0 &&
      <textarea ref={userNotes} placeholder="Any special request?" maxLength="250" className={styles.request}/>
    }

    <Button className={styles.altBtn}>Coupon Code</Button>
    <Button className={styles.btn} onClick={orderSubmitHandler}>Checkout</Button>
  </div>
}

export default Cart