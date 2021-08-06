import React, { useState } from "react";

import ChoiceItem from "./ChoiceItem";
import { AiOutlineUpCircle, AiOutlineDownCircle } from "react-icons/ai";
import styles from "./ChoiceRow.module.css";

/* 
  Props:
  1) category: title of this row, includes number required
  2) options: the items inside this row
*/
export default function ChoiceRow(props) {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const triggerOpenHandler = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${styles.category} ${isOpen ? styles.open : ''}`}>
      <div className={styles["deal-option-header"]}>
        <p>{Object.keys(props.category)[0].toUpperCase()} X {Object.values(props.category)[0]}</p>
        <button onClick={triggerOpenHandler}>
          {isOpen ? <AiOutlineUpCircle /> : <AiOutlineDownCircle />}
        </button>
      </div>

      <div className={styles["deal-product-list"]}>
        {props.options && props.options.map(x => <ChoiceItem meal={x} amountReq={Object.values(props.category)[0]}/>)}
      </div>
    </div>
  );
}