import React from "react";
import style from "./headerbtn.module.css";
import { useContext } from 'react';
import CartContext from "../../context/cart-context";

const HeaderBtn = (props) => {
  const ctx = useContext(CartContext);

  const cartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.btn} onClick={props.handleOpen}>
      <i className={`fa fa-shopping-cart ${style.icon}`}></i>
      <h3>Your Cart</h3>
      <div className={style.badge}>{cartItems}</div>
    </button>
  );
};

export default HeaderBtn;
