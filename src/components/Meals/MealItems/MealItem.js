import React, { useContext } from 'react';

import styles from './MealItem.module.css'
import PriceButton from './PriceButton';
import CartContext from '../../../store/cart-context';

// Props: meal (with id, image, title, description and price)
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  
  const addCartItemHandler = () => {
    cartCtx.addCartItem({
      id: props.meal.id,
      title: props.meal.title,
      price: props.meal.price,
      amount: 1
    })
  }

  return <div className={styles.mealItem}>
    <div className={styles.background}>
      <img src={process.env.PUBLIC_URL + props.meal.image} alt={props.meal.title}></img>
    </div>
    <h3>{props.meal.title}</h3>
    <p>{props.meal.description}</p>

    <PriceButton price={props.meal.price} onClick={addCartItemHandler}/>
  </div>
}

export default MealItem