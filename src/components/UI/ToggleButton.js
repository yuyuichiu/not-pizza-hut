import React from 'react';

import styles from './ToggleButton.module.css'

export default function ToggleButton (props) {
  const clickHandler = () => props.onClick()

  return <div className={styles['toggle-container']} onClick={clickHandler}>
    <input type='checkbox' className={`${styles.toggle} ${props.active ? styles.active : ''}`}/>
    <label className={styles.label}>
      <div className={styles.ball}></div>
    </label>
  </div>
}