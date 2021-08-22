import React, { useState } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Cart from './components/Cart/Cart';
import SelectionBar from './components/Header/SelectionBar';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import PizzaChoicesModal from './components/Meals/ChoiceModal/Pizza/PizzaChoicesModal';
import ComboChoicesModal from './components/Meals/ChoiceModal/Combo/ComboChoicesModal';
import Checkout from './components/Checkout/Checkout';
import OrderConfirmModal from './components/Checkout/OrderConfirmModal';

function App() {
  const [section, setSection] = useState('COMBO');
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [pizzaModal, setPizzaModal] = useState(null);
  const [comboModal, setComboModal] = useState(null);
  const [checkoutModal, setCheckoutModal] = useState(null);

  const modalOpenHandler = (item) => {
    if (item.id.startsWith('PIZZA')) { setPizzaModal(item) }
    else if (item.id.startsWith('COMBO')) { setComboModal(item) }
    else if (item.id.startsWith('BOX')) { setComboModal(item) }
    else if (item.id.startsWith('CHECKOUT')){ setCheckoutModal(item) }
  }

  const modalCloseHandler = () => {
    setPizzaModal(null);
    setComboModal(null);
    setCheckoutModal(null);
    setOrderCompleted(false);
  }

  const orderCompletedHandler = () => {
    setOrderCompleted(true);
  }

  const sectionChangeHandler = (i) => { setSection(i) }

  return (<CartProvider>
    {/* Modals */}
    {orderCompleted && <OrderConfirmModal onClearModal={modalCloseHandler}/>}
    {pizzaModal && <PizzaChoicesModal mainItem={pizzaModal} onClearModal={modalCloseHandler}/>}
    {comboModal && <ComboChoicesModal mainItem={comboModal} onClearModal={modalCloseHandler}/>}
    {checkoutModal && <Checkout cart={checkoutModal.cart} onClearModal={modalCloseHandler} onOrderComplete={orderCompletedHandler}/>}

    {/* Main page */}
    <Header />
    <Cart onModalOpen={modalOpenHandler}/>
    <SelectionBar activeSection={section} onSectionChange={sectionChangeHandler}/>
    <Meals activeSection={section} onModalOpen={modalOpenHandler}/>
  </CartProvider>);
}

export default App;
