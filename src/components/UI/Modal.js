import React from 'react';

import styles from './Modal.module.css'

function Overlay(props){
  return <div className={styles.overlay}>
    {props.children}
  </div>
}

export default function Modal(props) {
  return <Overlay>
    {props.children}
  </Overlay>
}