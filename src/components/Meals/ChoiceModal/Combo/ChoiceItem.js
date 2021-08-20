import React, { useState } from "react";
import ChoiceAmountButton from "../../../UI/ChoiceAmountButton";

import styles from "./ChoiceItem.module.css";

/*
  Props:
  1) meal: Information of our item (Object - id, image, title, description and price)
  2) amountReq: The amount of items required, determines different button behaviour
  3) activeAmt: The amount maximum available to be chosen
*/
export default function ChoiceItem(props) {
  let isCategoryOptional = props.category === 'add on deal (optional)';
  let AmountButtonToRender = [];
  for (let i = 1; i <= props.amountReq; i++) { AmountButtonToRender.push(i); }
  if(isCategoryOptional){ AmountButtonToRender = [1,2,3,4] }

  const [amountChosen, editAmount] = useState(0);

  const amountSelectHandler = (newAmount) => {
    editAmount((prevState) => {
      let amountToChange =
        newAmount === prevState ? +prevState : prevState - newAmount;
      props.onRowAmountChange(amountToChange, props.meal);
      return newAmount === prevState ? 0 : newAmount;
    });
  };

  return (
    <div className={`${styles.mealItem} ${props.large && styles.large}`}>
      <div className={styles.inner}>
        <div className={styles.background}>
          <img
            src={require(`../../../../assets${props.meal.image}`).default}
            alt={props.meal.title}
          ></img>
        </div>
        <div className={styles.meta}>
          <h3>{props.meal.title}</h3>
          <p>{props.meal.description}</p>
        </div>

        {props.meal.extraCharges > 0 ? (
          <p className={styles.extraCharges}>{`+ HK$ ${props.meal.extraCharges} / each`}</p>
        ) : (
          <p style={{ color: "#fff" }}>.</p>
        )}

        {AmountButtonToRender.map((amt) => (
          <ChoiceAmountButton
            key={props.meal.id + amt}
            amount={amt}
            selected={amountChosen}
            activeAmt={isCategoryOptional ? Infinity : props.activeAmt}
            onSelection={amountSelectHandler}
          />
        ))}
      </div>
    </div>
  );
}
