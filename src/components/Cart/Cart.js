import React, { useState, useContext, useRef, useEffect } from 'react';
import { FaLevelUpAlt, FaShoppingCart } from 'react-icons/fa'
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';
import ToggleButton from '../UI/ToggleButton';

import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const userNotes = useRef('');
  const [mobileCartMenuToggle, setMobileCartMenuToggle] = useState(false);
  const [cutleryOption, setCutleryOption] = useState(true);
  const [isBtnAnimation, setMobileButtonAnimation] = useState(false);

  useEffect(() => {
    // Animation for the mobile cart button when item is added
    if(cartCtx.items.length > 0) setMobileButtonAnimation(true);
    setTimeout(() => setMobileButtonAnimation(false), 500);
    return (() => setMobileButtonAnimation(false))
  }, [cartCtx])

  const orderSubmitHandler = () => {
    if(cartCtx.items.length > 0) {
      let cartOutput = {
        items: cartCtx.items,
        totalPrice: cartCtx.totalPrice,
        cutlery: cutleryOption,
        specialRequest: userNotes.current.value
      }

      props.onModalOpen({
        id: 'CHECKOUT',
        cart: cartOutput,
      })
    }
  }
  
  return <div className={`${styles.cart} ${mobileCartMenuToggle ? styles['mobile-open'] : ''}`}>
    <button 
    className={`${styles.mobileMenuToggle} ${isBtnAnimation && !mobileCartMenuToggle ? styles.animation : ''}`}
    onClick={() => setMobileCartMenuToggle(!mobileCartMenuToggle)}>
      {mobileCartMenuToggle ? <FaLevelUpAlt /> : <FaShoppingCart />}
    </button>
    <h2 className={styles.cartTitle}>Your Cart</h2>

    <div className={styles.cartItemContainer}>
      {cartCtx.items.map((i) => <CartItem key={i.id} meal={i}/>)}
    </div>

    {cartCtx.items.length > 0 && <>
      <div className={styles.cartAmount}>
        <h3>Total Amount:</h3>
        <h3>{`HK$${cartCtx.totalPrice.toFixed(2)}`}</h3>
      </div>
      
      <textarea ref={userNotes} placeholder="Any special request?" maxLength="250" className={styles.request}/>

      <div className={styles.cutleryControl}>
        <p>Need cutlery?</p>
        <ToggleButton description='Need cutlery?' active={cutleryOption} onClick={() => setCutleryOption((prev) => !prev)}/>
        {!cutleryOption && <p className={styles.earth}>🌍: Thanks!</p>}
      </div>
      </>
    }
    
    {false && <Button className={styles.altBtn}>Coupon Code</Button>}
    <Button className={styles.btn} onClick={orderSubmitHandler} disabled={cartCtx.items.length === 0}>Checkout</Button>
  </div>
}

export default Cart