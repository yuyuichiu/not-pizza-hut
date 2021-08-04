import React from 'react';

import Modal from '../UI/Modal';
import styles from './PizzaChoicesModal.module.css'

// Panel to request user what type of pizza they want
export default function PizzaChoicesModal(props) {
  return <Modal>
    <div className={styles.msg}></div>
  </Modal>
}