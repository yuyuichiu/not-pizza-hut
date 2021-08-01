import React from 'react';
import AmountButton from '../../UI/AmountButton';

import styles from './CartItem.module.css'

const cartCtx = {
  id: 'TEST_1',
  title: 'TEST ITEM',
  price: 12.5,
  amount: 2,
}

export default function CartItem(props) {
  return <div className={styles.cartItem}>
    <div className={styles.left}>
      <p>{cartCtx.title.toLowerCase() + ' * ' + cartCtx.amount}</p>
      <div className={styles.amountControl}>
        <AmountButton>-</AmountButton>
        <div>{cartCtx.amount}</div>
        <AmountButton className={styles.altBtn}>+</AmountButton>
      </div>
    </div>

    <div className={styles.right}>
      <p>{`HK$${(cartCtx.price * cartCtx.amount).toFixed(2)}`}</p>
      <AmountButton className={styles.removeBtn}>X</AmountButton>
    </div>
  </div>
}