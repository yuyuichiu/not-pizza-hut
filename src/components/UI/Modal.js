import React from 'react';

import styles from './Modal.module.css'

function Overlay(props){
  // Ensure overlay click function only activate when directly clicked.
  const overlayClickHandler = (event) => {
    if(event.target.className !== styles.overlay) {
      event.stopPropagation();
      return;
    }
    props.onClick();
  }

  return <div className={styles.overlay} onClick={overlayClickHandler}>
    {props.children}
  </div>
}

export default function Modal(props) {
  const clearModalHandler = () => {
    props.onClearModal();
  }

  return <Overlay onClick={clearModalHandler}>
    {props.children}
  </Overlay>
}