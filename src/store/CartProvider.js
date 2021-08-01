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

  }

  if (action.type === 'REDUCE'){
    // deduct item amount from cart, if reach zero then remove it
  }
  
  if (action.type === 'REMOVE'){
    // delete item from the cart
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
    dispatchCartAction({type: 'REMOVE', item: item});
  }

  // Final step: build context by linking to state data
  const cartCtx = {
    items: cartState.items,
    totalPrice: cartState.totalAmount,
    needCutlery: cartState.needCutlery,
    needSeasonings: cartState.needSeasonings,
    addCartItem: addCartItemHandler,
    reduceCartItem: reduceCartItemHandler
  }
  
  return <CartContext.Provider value={cartCtx}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider