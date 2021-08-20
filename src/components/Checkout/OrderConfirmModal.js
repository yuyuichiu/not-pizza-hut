import React from 'react';
import Button from '../UI/Button';

import Modal from '../UI/Modal';
import styles from './OrderConfirmModal.module.css';

export default function OrderConfirmModal (props) {
  const clearModalHandler = () => { props.onClearModal() }

  return <Modal onClearModal={clearModalHandler}>
    <div className={styles.msg}>
      <h2>Thank you</h2>
      <p>Your order has been received and recorded on our server.</p>
      <p>Please enjoy your imaginary pizza :D</p>
      <Button className={styles.Button} onClick={clearModalHandler}>Okay</Button>
    </div>
  </Modal>
}