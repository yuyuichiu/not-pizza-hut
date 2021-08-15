import React, { useContext, useEffect } from 'react'

import Modal from '../UI/Modal'
import AmountButton from '../UI/AmountButton'
import styles from './Receipt.module.css'
import Button from '../UI/Button'
import CartContext from '../../store/cart-context'
import ReceiptItem from './ReceiptItem'

export default function Receipt(props) {
  const cartCtx = useContext(CartContext);

  const clickHandler = () => {
    props.onClearModal();
  }

  const clearModalHandler = () => {
    props.onClearModal();
    // cartCtx.clearCart();
  }

  return <Modal onClearModal={clearModalHandler}>
    <div className={styles.msg}>
      <AmountButton className={styles.closeBtn} onClick={clearModalHandler}>X</AmountButton>
      <h1>Thank You!</h1>
      <p>This is the receipt of your order</p>

      <div className={styles.receipt}>
        {props.cart.items.map(x => <ReceiptItem item={x}/>)}
      </div>

      <div className={styles.totalAmount}>
        <h3>Total Amount:</h3>
        <h2>{`HK$${cartCtx.totalPrice.toFixed(2)}`}</h2>
      </div>

      <div>
        <p>Cutlery: {props.cart.cutlery ? 'Yes' : 'No'}</p>
      </div>

      <Button onClick={clickHandler} className={styles.submitBtn}>Confirm</Button>
      
    </div>
  </Modal>
}