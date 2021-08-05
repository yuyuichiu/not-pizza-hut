import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';

import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  
  return <div className={styles.cart}>
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
      <textarea placeholder="Any special request?" maxLength="250" className={styles.request}/>
    }

    <Button className={styles.altBtn}>Coupon Code</Button>
    <Button className={styles.btn}>Checkout</Button>
  </div>
}

export default Cart