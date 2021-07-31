import React, { useState } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Cart from './components/Cart/Cart';
import SelectionBar from './components/Header/SelectionBar';
import Meals from './components/Meals/Meals';

function App() {
  const [section, setSection] = useState('pizza')

  return (<>
    <Header />
    <Cart />
    <SelectionBar active={section}/>
    <Meals />
  </>);
}

export default App;
