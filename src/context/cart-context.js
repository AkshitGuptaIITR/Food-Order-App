import React from 'react';

const CartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: () => { },
  remove: (id) => { }
});

export default CartContext;