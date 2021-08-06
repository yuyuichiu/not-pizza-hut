import React, { useContext } from 'react';
import ChoiceAmountButton from '../../../UI/ChoiceAmountButton';

import styles from './ChoiceItem.module.css'
// import CartContext from '../../../../store/cart-context';

/*
  Props:
  1) meal: Information of our item (Object - id, image, title, description and price)
  2) amountReq: The amount of items required, determines different button behaviour
*/
const ChoiceItem = (props) => {
  return <div className={`${styles.mealItem} ${props.large && styles.large}`}>
    <div className={styles.inner} >
      <div className={styles.background}>
        <img src={process.env.PUBLIC_URL + props.meal.image} alt={props.meal.title}></img>
      </div>
      <div className={styles.meta}>
        <h3>{props.meal.title}</h3>
        <p>{props.meal.description}</p>
      </div>

      <ChoiceAmountButton amount={3}/>
    </div>
  </div>
}

export default ChoiceItem

// const cartCtx = useContext(CartContext);

// const addCartItemHandler = () => {
//   if(props.meal.id.startsWith('PIZZA') || props.meal.id.startsWith('COMBO')){
//     props.onModalOpen(props.meal);
//     return;
//   }
//   cartCtx.addCartItem({
//     id: props.meal.id,
//     title: props.meal.title,
//     price: props.meal.price,
//     amount: 1
//   })
// }