import React from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal handleClose={props.handleClose}>
      {cartItems}
      <div className={style.total}>
        <span>Total Amount</span>
        <span>35.34</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.handleClose}>Close</button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
