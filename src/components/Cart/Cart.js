import React, { useState } from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  }

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  }

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const cartItems = (
    <ul className={style['cart-items']}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal handleClose={props.handleClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout amount={totalAmount} onCancel={props.handleClose} />}
      {
        !isCheckout &&
        <div className={style.actions}>
          <button className={style["button--alt"]} onClick={props.handleClose}>Close</button>
          {
            hasItems ?
              <button className={style.button} onClick={orderHandler}>Order</button> : null
          }
        </div>
      }
    </Modal>
  );
};

export default Cart;
