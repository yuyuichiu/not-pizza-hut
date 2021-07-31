import React from 'react';
import SectionButton from '../UI/SectionButton';

import styles from './SelectionBar.module.css'

// logo icons
import pizzaLogo from '../../assets/ico_pizza.png'
import comboLogo from '../../assets/ico_combo.png'
import alacarteLogo from '../../assets/ico_alacarte.png'
import drinksLogo from '../../assets/ico_drinks.png'
import boxLogo from '../../assets/ico_mybox.png'
import riceLogo from '../../assets/ico_rice.png'
// import valueDealLogo from '../../assets/ico_value_deal.png'

const Sections = [
  { id: 1, logo: comboLogo, title: 'Combo' },
  { id: 2, logo: boxLogo, title: 'My Box' },
  { id: 3, logo: pizzaLogo, title: 'Pizza' },
  { id: 4, logo: riceLogo, title: 'Pasta & Rice' },
  { id: 5, logo: alacarteLogo, title: 'Starter' },
  { id: 6, logo: drinksLogo, title: 'Drink & Dessert' },
  // { id: 7, logo: alacarteLogo, title: '?' },
]

const SelectionBar = (props) => {
  return <div className={styles.bar}>
    {Sections.map((i) => <SectionButton
      key={i.id}
      logo={i.logo}
      active={props.active}
      title={i.title}/>)}
  </div>
}

export default SelectionBar