import React from 'react';

import styles from './ChoiceAmountButton.module.css'

/* 
  Props:
  1) amount - the order amount
*/
export default function ChoiceAmountButton(props) {
  return <button className={`${styles.btn} ${props.className}`} onClick={props.onClick}>
    {'X ' + props.amount}
  </button>
}