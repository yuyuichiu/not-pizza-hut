import React from 'react';

import styles from './PriceButton.module.css'

const PriceButton = (props) => {
  return <button className={`${styles.priceBtn}`} onClick={props.onClick}>
    <div>
      <span className={styles.left}>ADD TO CART</span>
      <span className={styles.right}>{`HK$${props.price.toFixed(2)}`}</span>
    </div>
  </button>
}

export default PriceButton