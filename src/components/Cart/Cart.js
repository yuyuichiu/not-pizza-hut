import React from 'react';

import styles from './Cart.module.css'

const Cart = () => {
  return <div className={styles.cart}>
    <h2 className={styles.cartTitle}>Your Cart</h2>
    <div>{/* List of items to checkout */}</div>
    <button>Coupon Code</button>
    <button>Checkout</button>
  </div>
}

export default Cart