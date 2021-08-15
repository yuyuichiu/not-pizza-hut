import React from 'react';

import styles from './ReceiptItem.module.css'

export default function ReceiptItem(props) {
  return <div className={styles.receiptItem}>
    <div>
      <p className={styles.productTitle}>{props.item.title.toLowerCase()}{!props.item.preferences && !props.item.itemOptions && ` (X ${props.item.amount})`}</p>
      {props.item.preferences && <div className={styles.subOption}>{props.item.preferences}</div>}
      {props.item.itemOptions && <ul>{props.item.itemOptions.map(x => <div className={styles.subOption}>{x.productTitle} * {x.amount}</div>)}</ul>}
    </div>

    <div className={styles.right}>
      <p>HK$ {(props.item.amount * props.item.price).toFixed(2)}</p>
    </div>
  </div>
}