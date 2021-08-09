import React from "react";

import styles from "./ChoiceAmountButton.module.css";

/* 
  Props:
  1) amount - the order amount
  2) selected - which number is selected by the user
  3) activeAmt (bool) - whether this item is disabled (e.g. X2 is disabled when a X1 is chosen)
*/
export default function ChoiceAmountButton(props) {
  const clickHandler = () => {
    if (props.amount > props.activeAmt && props.selected !== props.amount) {
      return;
    }
    props.onSelection(props.amount);
  };

  return (
    <button
      className={`${styles.btn} ${
        props.selected === props.amount ? styles.active : ""
      } ${props.amount > props.activeAmt ? styles.disabled : ""} ${
        props.className
      }`}
      onClick={clickHandler}
    >
      {"X " + props.amount}
    </button>
  );
}
