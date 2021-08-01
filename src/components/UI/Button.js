import React from 'react';

import styles from './Button.module.css'

export default function Button(props) {
  return <button className={`${styles.btn} ${props.className}`} onClick={props.onClick}>
    {props.children}
  </button>
}