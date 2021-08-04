import React, { useState } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Cart from './components/Cart/Cart';
import SelectionBar from './components/Header/SelectionBar';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import PizzaChoicesModal from './components/Meals/PizzaChoicesModal';

function App() {
  const [section, setSection] = useState('PIZZA');

  const sectionChangeHandler = (i) => {
    setSection(i)
  }

  return (<CartProvider>
    <PizzaChoicesModal />
    <Header />
    <Cart />
    <SelectionBar activeSection={section} onSectionChange={sectionChangeHandler}/>
    <Meals activeSection={section}/>
  </CartProvider>);
}

export default App;
