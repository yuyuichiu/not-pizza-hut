import React, { useState, useContext, useEffect } from "react";

import CartContext from "../../../../store/cart-context";
import Modal from "../../../UI/Modal";
import styles from "./ComboChoicesModal.module.css";
import { mealList } from "../../Meals";
import ChoiceRow from "./ChoiceRow";
import Button from "../../../UI/Button";

function outputUniqueId(prefix) {
  return `${prefix}_${(Date.now() + Math.random()).toString(36)}`;
}

/* 
  Data we will use
  1) props.mainItem: the combo item information
  2) props.category: the categories for row, and its amount requirement
  3) mealList (imported from Meals.js): To translate product ID into actual product
*/
export default function ComboChoicesModal(props) {
  const cartCtx = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(props.mainItem.category);
  const [rowManager, editRowManager] = useState(
    categories.slice().map((x) => {
      return {
        title: x.title,
        amountReq: x.amountReq,
        selectedAmount: 0,
        selectedItems: [], // {productID, amount}
      };
    })
  );

  // Translating productIds from mainItem into full product information
  useEffect(() => {
    let productIds = props.mainItem.categoryProductsId.slice();
    let translatedProducts = [...productIds];

    for (let c = 0; c < productIds.length; c++) {
      translatedProducts[c] = productIds[c].map((id) => {
        // All id prefix matches the start of the name of its category
        let belongsToCategory = id.replace(/_.*/, "").toUpperCase();
        return mealList
          .filter((x) => x.category.startsWith(belongsToCategory))[0]
          .items.filter((x) => x.id === id)[0];
      });
    }

    setCategories(props.mainItem.category);
    setProducts(translatedProducts);
  }, [props.mainItem]);

  /* Handlers */
  const clearModalHandler = () => {
    props.onClearModal();
  };

  const editRowAmountHandler = (editAmt, targetRow, productId) => {
    editRowManager((prevState) => {
      let targetIdx = prevState.findIndex((x) => x.title === targetRow);
      let prevAmount = prevState[targetIdx].selectedAmount;
      let updatedRowInfo = prevState.slice();
      let newSelectedItems = prevState[targetIdx].selectedItems;

      // Update selected item information & row selected item count
      let productItemIdx = newSelectedItems.findIndex(
        (x) => x.productId === productId
      );
      if (productItemIdx > -1) {
        newSelectedItems[productItemIdx].amount += editAmt;
        if (newSelectedItems[productItemIdx].amount <= 0) {
          newSelectedItems.splice(productItemIdx, 1);
        }
      } else {
        newSelectedItems.push({
          productId: productId,
          productTitle: mealList
            .filter((x) => x.category.startsWith(productId.replace(/_.*/, "").toUpperCase()))[0]
            .items.filter(x => x.id === productId)[0].title.toLowerCase(),
          amount: editAmt,
        });
      }

      updatedRowInfo[targetIdx].selectedItems = newSelectedItems;
      updatedRowInfo[targetIdx].selectedAmount = prevAmount + editAmt;
      return updatedRowInfo;
    });
  };

  const submitComboChoicesHandler = () => {
    if (rowManager.every((x) => x.selectedAmount === x.amountReq)) {
      // Wrap up final chosen items and total extra price, then add this item to cart
      let amendedPrice = props.mainItem.price + 0; // to-do
      let comboChosenItems = rowManager.map((x) => x.selectedItems).flat();

      let toAdd = {
        id: outputUniqueId(props.mainItem.id), // Id is based on time to ensure uniqueness
        title: props.mainItem.title,
        price: props.mainItem.price,
        amount: 1,
        itemOptions: comboChosenItems,
      };

      console.log("Added Cart Item:", toAdd);
      cartCtx.addCartItem(toAdd);
      // props.onClearModal();
    }
  };

  return (
    <Modal onClearModal={clearModalHandler}>
      <div className={styles.msg}>
        <div className={styles.header}>{/* <img src={pic}></img> */}</div>

        <div className={styles.container}>
          {categories.map((category, idx) => (
            <ChoiceRow
              key={idx}
              category={category}
              options={products[idx]}
              isOpen={idx === 0}
              onRowAmountChange={editRowAmountHandler}
            />
          ))}
        </div>

        <Button
          onClick={submitComboChoicesHandler}
          className={styles.submitBtn}
        >
          Complete
        </Button>
      </div>
    </Modal>
  );
}
