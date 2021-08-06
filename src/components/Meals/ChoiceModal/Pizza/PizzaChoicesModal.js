/* Panel to request user what type of pizza they want */
import React from 'react';

import CartContext from '../../../../store/cart-context';
import Modal from '../../../UI/Modal';
import styles from './PizzaChoicesModal.module.css'

// Define pizza sub-options
const stuffedCrustAddedPrice = 19;
const goldenCrustAddedPrice = 23;
const largePizzaAddedPrice = 33;

const pizzaOptions = [
  {
    pizzaType: 'HANDCRAFT',
    crustTitle: 'Hut Signature | Hand Crafted Pizza',
    extraCharge: 0,
    image: "/pizza_product/PIE_HANDCRAFT.png"
  },
  {
    pizzaType: 'OATMEAL',
    crustTitle: 'Hut Signature | Oatmeal Pizza',
    extraCharge: 0,
    image: "/pizza_product/PIE_OATMEAL.png"
  },
  {
    pizzaType: 'PAN',
    crustTitle: 'Pan Pizza',
    extraCharge: 0,
    image: "/pizza_product/PIE_PAN.png"
  },
  {
    pizzaType: 'CRISPY',
    crustTitle: 'Crispy Pizza',
    extraCharge: 0,
    image: "/pizza_product/PIE_CRISPY.png"
  },
  {
    pizzaType: 'STUFFED-CRUST',
    crustTitle: 'Stuffed Crust Pizza',
    extraCharge: stuffedCrustAddedPrice,
    image: "/pizza_product/PIE_STUFFEDCRUST.png"
  },
  {
    pizzaType: 'GOLDEN-CRUST',
    crustTitle: 'Golden Crust Pizza',
    extraCharge: goldenCrustAddedPrice,
    image: "/pizza_product/PIE_GOLDENCRUST.png"
  },
]

const largePizzaOptions = pizzaOptions.map(x => {
  return {
    pizzaType: x.pizzaType + '_LARGE',
    crustTitle: x.crustTitle,
    extraCharge: x.extraCharge + largePizzaAddedPrice,
    image: x.image
  }
});

// Crust items
function PizzaChoiceItem(props) {
  return <div className={styles.groupItem} onClick={props.onClick}>
    <img src={process.env.PUBLIC_URL + props.pizzas.image} alt={props.pizzas.crustTitle}></img>
    <p>{props.pizzas.crustTitle}</p>
    <small>HKD {(props.mainItem.price + props.pizzas.extraCharge).toFixed(2)}</small>
  </div>
}

// The panel to choose preferences for pizza
export default function PizzaChoicesModal(props) {
  const cartCtx = React.useContext(CartContext);
  const clearModalHandler = () => { props.onClearModal(); }

  const addCartItemHandler = (customizations) => {
    let preferences = [customizations.crustTitle.replace('Hut Signature |', '')];
    if(customizations.pizzaType.endsWith('LARGE')){
      preferences[0] += ' (Large)'
    } else {
      preferences[0] += ' (Small)'
    }
    let newItem = {
      id: props.mainItem.id + '_' + customizations.pizzaType,
      title: props.mainItem.title,
      price: props.mainItem.price + customizations.extraCharge,
      preferences: preferences,
      amount: 1
    };
    cartCtx.addCartItem(newItem);
    props.onClearModal();
  }

  return <Modal onClearModal={clearModalHandler}>
    <div className={styles.msg}>
      <div className={styles.left}>
        <img src={props.mainItem.image} alt={props.mainItem.title}></img>
      </div>

      <div className={styles.right}>
        <h3>{props.mainItem.title.toLowerCase()}</h3>
        <p>{props.mainItem.description}</p>
        <hr />

        <h4>Select your size {'&'} crust</h4>
        <div className={styles.groupList}>
          <div className={styles.groupTitle}>Regular</div>
          {pizzaOptions.map(x => <PizzaChoiceItem 
            pizzas={x}
            mainItem={props.mainItem}
            key={x.pizzaType}
            onClick={() => addCartItemHandler(x)}
            onClearModal={clearModalHandler}
          />)}
          <div className={styles.groupTitle}>Large</div>
          {largePizzaOptions.map(x => <PizzaChoiceItem 
            pizzas={x}
            mainItem={props.mainItem}
            key={x.pizzaType}
            onClick={() => addCartItemHandler(x)}
            onClearModal={clearModalHandler}
          />)}
        </div>
      </div>
    </div>
  </Modal>
}