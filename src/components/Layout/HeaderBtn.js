import React from "react";
import style from "./headerbtn.module.css";
import { useContext, useEffect, useState } from 'react';
import CartContext from "../../context/cart-context";

const HeaderBtn = (props) => {
  const ctx = useContext(CartContext);
  const [btnStyle, setBtnStyle] = useState(false);

  console.log(ctx.items)

  const cartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);

  const btnClasses = `${style.btn} ${btnStyle ? style.bump : null}`

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnStyle(true);
    const timer = setTimeout(() => {
      setBtnStyle(false)
    }, 300);
    return () => {
      clearTimeout(timer)
    }
  }, [ctx.items])

  return (
    <button className={btnClasses} onClick={props.handleOpen}>
      <i className={`fa fa-shopping-cart ${style.icon}`}></i>
      <h3>Your Cart</h3>
      <div className={style.badge}>{cartItems}</div>
    </button>
  );
};

export default HeaderBtn;
