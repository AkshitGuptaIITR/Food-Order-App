import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ITEM_ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const indexExisting = state.items.findIndex(item => item.id === action.item.id);
    const exisitingCartItem = state.items[indexExisting];
    let updatedItems;
    if (exisitingCartItem) {
      const updateItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount
      };
      console.log(updateItem)
      updatedItems = [...state.items];
      updatedItems[exisitingCartItem] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'ITEM_REMOVE') {
    const indexExisting = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[indexExisting];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[indexExisting] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount:updatedTotalAmount,
    }
  }

  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispactCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispactCartAction({ type: 'ITEM_ADD', item: item });
  }

  const removeItemHandler = (id) => {
    dispactCartAction({ type: 'ITEM_REMOVE', id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
