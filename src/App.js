import React, { useState } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Cart from './components/Cart/Cart';
import SelectionBar from './components/Header/SelectionBar';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import PizzaChoicesModal from './components/Meals/ChoiceModal/Pizza/PizzaChoicesModal';
import ComboChoicesModal from './components/Meals/ChoiceModal/Combo/ComboChoicesModal';
import Receipt from './components/Receipt/Receipt';

function App() {
  const [section, setSection] = useState('COMBO');
  const [pizzaModal, setPizzaModal] = useState(null);
  const [comboModal, setComboModal] = useState(null);
  const [receiptModal, setReceiptModal] = useState(null);

  const modalOpenHandler = (item) => {
    // To do: identify product type and open correct modal.
    if (item.id.startsWith('PIZZA')) { setPizzaModal(item) }
    else if (item.id.startsWith('COMBO')) { setComboModal(item) }
    else if (item.id.startsWith('BOX')) { setComboModal(item) }
    else if (item.id.startsWith('RECEIPT')) { setReceiptModal(item.cart) };
  }

  const modalCloseHandler = () => {
    setPizzaModal(null);
    setComboModal(null);
    setReceiptModal(null);
  }

  const sectionChangeHandler = (i) => {
    setSection(i)
  }

  return (<CartProvider>
    {receiptModal && <Receipt cart={receiptModal} onClearModal={modalCloseHandler}/>}
    {pizzaModal && <PizzaChoicesModal mainItem={pizzaModal} onClearModal={modalCloseHandler}/>}
    {comboModal && <ComboChoicesModal mainItem={comboModal} onClearModal={modalCloseHandler}/>}
    <Header />
    <Cart onModalOpen={modalOpenHandler}/>
    <SelectionBar activeSection={section} onSectionChange={sectionChangeHandler}/>
    <Meals activeSection={section} onModalOpen={modalOpenHandler}/>
  </CartProvider>);
}

export default App;
