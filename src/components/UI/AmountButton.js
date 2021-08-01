import React from 'react';

import styles from './AmountButton.module.css'

export default function AmountButton(props) {
  return <button className={`${styles.btn} ${props.className}`} onClick={props.onClick}>
    {props.children}
  </button>
}