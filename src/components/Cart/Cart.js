import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button';

import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  
  return <div className={styles.cart}>
    <h2 className={styles.cartTitle}>Your Cart</h2>

    <div>{/* List of items to checkout */}</div>
    
    {cartCtx.items.map((i) => <CartItem key={i.id} meal={i}/>)}
    {cartCtx.items.length > 0 && <p>{`Total Amount: HK$${cartCtx.totalPrice.toFixed(2)}`}</p>}

    <Button className={styles.altBtn}>Coupon Code</Button>
    <Button className={styles.btn}>Checkout</Button>
  </div>
}

export default Cart