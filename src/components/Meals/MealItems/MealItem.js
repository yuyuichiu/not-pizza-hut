import React from 'react';

import styles from './MealItem.module.css'
import testPic from '../../../assets/pizza.jpg'
import PriceButton from './PriceButton';

const MealItem = (props) => {
  return <div className={styles.mealItem}>
    <img src={testPic} alt="food title"></img>
    <h3>Food Title</h3>
    <p>description of the product, some dummy words to test stuff</p>

    <PriceButton price={12}/>
  </div>
}

export default MealItem