import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './ComboChoicesModal.module.css'

export default function ComboChoicesModal(props) {
  const cartCtx = useContext(CartContext);
  const clearModalHandler = () => { props.onClearModal(); }


  return <Modal onClearModal={clearModalHandler}>
    <div className={styles.msg}>
      
    </div>
  </Modal>
}