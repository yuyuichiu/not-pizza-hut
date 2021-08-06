import React, { useState, useContext, useEffect } from 'react';

import CartContext from '../../../../store/cart-context';
import Modal from '../../../UI/Modal';
import styles from './ComboChoicesModal.module.css'
import { mealList } from '../../Meals';
import ChoiceRow from './ChoiceRow';


/* 
  Data we will use
  1) props.mainItem: the combo item information
  2) mealList (imported from Meals.js): To translate product ID into actual product
*/
export default function ComboChoicesModal(props) {
  const cartCtx = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(props.mainItem.category)

  // Translating productIds from mainItem into full product information
  useEffect(() => {
    let productIds = props.mainItem.categoryProductsId.slice();
    let translatedProducts = [...productIds];

    for(let c = 0; c < productIds.length; c++) {
      translatedProducts[c] = productIds[c].map((id) => {
        // All id prefix matches the start of the name of its category
        let belongsToCategory = id.replace(/_.*/, '').toUpperCase();
        return mealList.filter(x => x.category.startsWith(belongsToCategory))[0]
          .items.filter(x => x.id === id)[0];
      })
    }

    setCategories(props.mainItem.category);
    setProducts(translatedProducts);
  }, [props.mainItem])
  console.log(products);


  const clearModalHandler = () => { props.onClearModal(); }

  return <Modal onClearModal={clearModalHandler}>
    <div className={styles.msg}>
      <div className={styles.header}>
        {/* <img src={pic}></img> */}
      </div>

      <div className={styles.container}>
        {categories.map((x, idx) => <ChoiceRow
          key={Object.keys(categories[idx])[0] + idx}
          category={categories[idx]}
          options={products[idx]}
          isOpen={idx === 0}
          />)}
      </div>
      
    </div>
  </Modal>
}