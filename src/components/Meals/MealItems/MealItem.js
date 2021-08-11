import React, { useContext } from 'react';

import styles from './MealItem.module.css'
import PriceButton from './PriceButton';
import CartContext from '../../../store/cart-context';

// Props: meal (with id, image, title, description and price)
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  
  const addCartItemHandler = () => {
    if(props.meal.id.startsWith('PIZZA') || props.meal.id.startsWith('COMBO') || props.meal.id.startsWith('BOX')){
      props.onModalOpen(props.meal);
      return;
    }
    cartCtx.addCartItem({
      id: props.meal.id,
      title: props.meal.title,
      price: props.meal.price,
      amount: 1
    })
  }

  return <div className={`${styles.mealItem} ${props.large && styles.large}`}>
    <div className={styles.inner} >
      <div className={styles.background}>
        <img src={process.env.PUBLIC_URL + props.meal.image} alt={props.meal.title}></img>
      </div>
      <div className={styles.meta}>
        <h3>{props.meal.title}</h3>
        <p>{props.meal.description}</p>
      </div>

      <PriceButton id={props.meal.id} price={props.meal.price} onClick={addCartItemHandler}/>
    </div>
  </div>
}

export default MealItem