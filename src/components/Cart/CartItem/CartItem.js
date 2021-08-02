import React, { useContext } from 'react';
import AmountButton from '../../UI/AmountButton';
import CartContext from '../../../store/cart-context';

import styles from './CartItem.module.css'

export default function CartItem(props) {
  const cartCtx = useContext(CartContext);

  const addItemHandler = () => {
    cartCtx.addCartItem(props.meal);
  }

  const reduceItemHandler = () => {
    cartCtx.reduceCartItem(props.meal);
  }

  const removeItemHandler = () => {
    cartCtx.removeCartItem(props.meal);
  }


  return <div className={styles.cartItem}>
    <div className={styles.left}>
      <p>{props.meal.title.toLowerCase() + ' * ' + props.meal.amount}</p>
      <div className={styles.amountControl}>
        <AmountButton onClick={reduceItemHandler}>
          -
        </AmountButton>
        <div>{props.meal.amount}</div>
        <AmountButton onClick={addItemHandler} className={styles.altBtn}>
          +
        </AmountButton>
      </div>
    </div>

    <div className={styles.right}>
      <p>{`HK$${(props.meal.price * props.meal.amount).toFixed(2)}`}</p>
      <AmountButton  onClick={removeItemHandler} className={styles.removeBtn}>
        X
      </AmountButton>
    </div>
  </div>
}