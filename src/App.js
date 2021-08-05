import React, { useState } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Cart from './components/Cart/Cart';
import SelectionBar from './components/Header/SelectionBar';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import PizzaChoicesModal from './components/Meals/PizzaChoicesModal';
import ComboChoicesModal from './components/Meals/ComboChoicesModal';

function App() {
  const [section, setSection] = useState('COMBO');
  const [pizzaModal, setPizzaModal] = useState(null);
  const [comboModal, setComboModal] = useState(null);

  const modalOpenHandler = (item) => {
    // To do: identify product type and open correct modal.
    if (item.id.startsWith('PIZZA')) { setPizzaModal(item) }
    if (item.id.startsWith('COMBO')) { setComboModal(item) }
  }

  const modalCloseHandler = () => {
    setPizzaModal(null);
    setComboModal(null);
  }

  const sectionChangeHandler = (i) => {
    setSection(i)
  }

  return (<CartProvider>
    {pizzaModal && <PizzaChoicesModal mainItem={pizzaModal} onClearModal={modalCloseHandler}/>}
    {comboModal && <ComboChoicesModal mainItem={comboModal} onClearModal={modalCloseHandler}/>}
    <Header />
    <Cart />
    <SelectionBar activeSection={section} onSectionChange={sectionChangeHandler}/>
    <Meals activeSection={section} onModalOpen={modalOpenHandler}/>
  </CartProvider>);
}

export default App;
