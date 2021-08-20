import React, { useState, useContext, useEffect } from "react";

import CartContext from "../../../../store/cart-context";
import Modal from "../../../UI/Modal";
import styles from "./ComboChoicesModal.module.css";
import { mealList } from "../../Meals";
import ChoiceRow from "./ChoiceRow";
import Button from "../../../UI/Button";
import AmountButton from "../../../UI/AmountButton";

function getUniqueId(prefix) {
  // Unique id to prevent combo with different choices overlapping.
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
        selectedItems: [], // {productID, amount, extraCharges}
      };
    })
  );
  const [isFinished, setIsFinished] = useState(true);

  // Translating productIds from mainItem into full product information
  useEffect(() => {
    let productIds = props.mainItem.categoryProductsId.slice();
    let translatedProducts = [...productIds];

    for (let c = 0; c < productIds.length; c++) {
      translatedProducts[c] = productIds[c].map((choice) => {
        // All id prefix matches the start of the name of its category
        let belongsToCategory = choice.id.replace(/_.*/, "").toUpperCase();

        let translatedItem = mealList
          .filter((x) => x.category.startsWith(belongsToCategory))[0]
          .items.filter((x) => x.id === choice.id)[0];
        translatedItem.extraCharges = choice.extraCharges || 0;

        return translatedItem
      });
    }

    setCategories(props.mainItem.category);
    setProducts(translatedProducts);
    setIsFinished(true);
  }, [props.mainItem]);

  /* Handlers */
  const clearModalHandler = () => {
    props.onClearModal();
  };

  const editRowAmountHandler = (editAmt, targetRow, product) => {
    editRowManager((prevState) => {
      // Update selected item information & row selected item count
      let targetIdx = prevState.findIndex((x) => x.title === targetRow);
      let prevAmount = prevState[targetIdx].selectedAmount;
      let updatedRowInfo = prevState.slice();
      let newSelectedItems = prevState[targetIdx].selectedItems;

      let productItemIdx = newSelectedItems.findIndex((x) => x.productId === product.id);
      if (productItemIdx > -1) {
        // Directly adjust selected item count if already exist
        newSelectedItems[productItemIdx].amount += editAmt;
        if (newSelectedItems[productItemIdx].amount <= 0) {
          newSelectedItems.splice(productItemIdx, 1);
        }
      } else {
        // else, add new item to selectedItem
        newSelectedItems.push({
          productId: product.id,
          productTitle: mealList
            .filter((x) => x.category.startsWith(product.id.replace(/_.*/, "").toUpperCase()))[0]
            .items.filter(x => x.id === product.id)[0].title.toLowerCase(),
          amount: editAmt,
          extraChargesPerPiece: product.extraCharges
        });
      }
      
      updatedRowInfo[targetIdx].selectedItems = newSelectedItems;
      updatedRowInfo[targetIdx].selectedAmount = prevAmount + editAmt;
      return updatedRowInfo;
    });

    // A timeout to check updated state for enabling the submit button
    setTimeout(() => {
      setIsFinished(!(rowManager.every((x) => x.selectedAmount >= x.amountReq)));
    }, 10);
  };

  const submitComboChoicesHandler = () => {
    // Wrap up final chosen items and calculate final price, then add this item to cart
    if (rowManager.every((x) => x.selectedAmount >= x.amountReq)) {
      let comboChosenItems = rowManager.map((x) => x.selectedItems).flat();
      let totalExtraCharges = comboChosenItems.reduce((accumulator, current) => accumulator + current.extraChargesPerPiece * current.amount, 0);
      let amendedPrice = props.mainItem.price + totalExtraCharges;

      let toAdd = {
        id: getUniqueId(props.mainItem.id),
        title: props.mainItem.title,
        price: amendedPrice,
        amount: 1,
        itemOptions: comboChosenItems,
      };

      cartCtx.addCartItem(toAdd);
      props.onClearModal();
    }
  };

  return (
    <Modal onClearModal={clearModalHandler}>
      <div className={styles.msg}>
        <AmountButton className={styles.closeBtn} onClick={clearModalHandler}>X</AmountButton>
        <div className={styles.header}>
          <img src={require(`../../../../assets${props.mainItem.image}`).default} alt={props.mainItem.title}></img>
          <div className={styles['header-mod']}>
            <h2>{props.mainItem.title.toLowerCase()}</h2>
            <p>{props.mainItem.description}</p>
          </div>
        </div>

        <div className={styles.container}>
          {categories.map((category, idx) => (
            <ChoiceRow
              key={idx}
              category={category}
              options={products[idx]}
              isOpen={true}
              onRowAmountChange={editRowAmountHandler}
            />
          ))}
        </div>

        <Button
          onClick={submitComboChoicesHandler}
          className={styles.submitBtn}
          disabled={isFinished}
        >
          Complete
        </Button>
      </div>
    </Modal>
  );
}
