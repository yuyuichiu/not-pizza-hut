import React from 'react';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';

import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const cartCtx = React.useContext(CartContext);

  return <div className={styles.cart}>
    <h2 className={styles.cartTitle}>Your Cart</h2>

    <div>{/* List of items to checkout */}</div>
    <CartItem />
    <CartItem />
    <CartItem />

    <div>{/* Food Recommendation */}</div>
    <div>{/* cutlery, sauce etc.. */}</div>
    
    <Button className={styles.altBtn}>Coupon Code</Button>
    <Button className={styles.btn}>Checkout</Button>
  </div>
}

export default Cart