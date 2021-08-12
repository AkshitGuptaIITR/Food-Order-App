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
