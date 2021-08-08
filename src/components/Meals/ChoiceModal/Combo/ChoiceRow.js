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
  // The active amount changed based on selection, preventing amount buttons higher than this value to prevent exceeding values
  const [activeAmt, setActiveAmount] = useState(props.category.amountReq);

  const triggerOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  const activeAmountEditHandler = (editAmt, productId) => {
    props.onRowAmountChange(-editAmt, props.category.title, productId)
    setActiveAmount((prevState) => {return prevState + editAmt});
  };

  return (
    <div className={`${styles.category} ${isOpen ? styles.open : ""}`}>
      <div className={styles["deal-option-header"]}>
        <p>
          {props.category.title.toUpperCase()} X{" "}
          {props.category.amountReq}
        </p>
        <button onClick={triggerOpenHandler}>
          {isOpen ? <AiOutlineUpCircle /> : <AiOutlineDownCircle />}
        </button>
      </div>

      <div className={styles["deal-product-list"]}>
        {props.options &&
          props.options.map((product) => (
            <ChoiceItem
              key={product.id}
              meal={product}
              amountReq={props.category.amountReq}
              activeAmt={activeAmt}
              onRowAmountChange={activeAmountEditHandler}
            />
          ))}
      </div>
    </div>
  );
}
