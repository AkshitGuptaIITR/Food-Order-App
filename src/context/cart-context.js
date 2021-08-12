import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => { },
  remove: (id) => { }
});

export default CartContext;