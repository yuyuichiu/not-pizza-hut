import React from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalPrice: 0,
  needCutlery: false,
  needSeasonings : false,
}

const cartReducer = (prevState, action) => {
  if (action.type === 'ADD'){
    // if item exist amend its amount, else push as new item
    let foundIdx = prevState.items.findIndex(x => x.id === action.item.id);
    let newCartItem = prevState.items;
    let newPrice = prevState.totalPrice + action.item.price;

    if(foundIdx > -1) {
      if(newCartItem[foundIdx].amount >= 20){ return prevState }
      newCartItem[foundIdx].amount++;
    } else {
      newCartItem = newCartItem.concat(action.item);
    }

    return {
      ...prevState,
      items: newCartItem, 
      totalPrice: newPrice
    }
  }

  if (action.type === 'REDUCE'){
    // deduct item amount from cart, if reach zero then remove it
    let foundIdx = prevState.items.findIndex(x => x.id === action.item.id);
    let newCartItem = prevState.items;
    let newPrice = prevState.totalPrice - action.item.price;

    newCartItem[foundIdx].amount--;
    newCartItem[foundIdx].amount === 0 && newCartItem.splice(foundIdx, 1);
    return {
      ...prevState,
      items: newCartItem, 
      totalPrice: newPrice
    }
  }
  
  if (action.type === 'REMOVE'){
    // delete item from the cart
    let foundIdx = prevState.items.findIndex(x => x.id === action.item.id);
    let newCartItem = prevState.items;
    
    if(foundIdx < 0){ return prevState }
    let newPrice = prevState.totalPrice - newCartItem[foundIdx].amount * newCartItem[foundIdx].price;
    newCartItem.splice(foundIdx, 1);

    return {
      ...prevState,
      items: newCartItem, 
      totalPrice: newPrice
    }
  }

  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = React.useReducer(cartReducer, defaultCartState)

  const addCartItemHandler = (item) => {
    // dispatchAction to edit the state in complex ways
    dispatchCartAction({type: 'ADD', item: item});
  }

  const reduceCartItemHandler = (item) => {
    dispatchCartAction({type: 'REDUCE', item: item});
  }

  const removeCartItemHandler = (item) => {
    dispatchCartAction({type: 'REMOVE', item: item});
  }

  // Final step: build context by linking to state data
  const cartCtx = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    needCutlery: cartState.needCutlery,
    needSeasonings: cartState.needSeasonings,
    addCartItem: addCartItemHandler,
    reduceCartItem: reduceCartItemHandler,
    removeCartItem: removeCartItemHandler,
  }
  
  return <CartContext.Provider value={cartCtx}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider