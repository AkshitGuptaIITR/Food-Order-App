import React from "react";
import style from "./headerbtn.module.css";

const HeaderBtn = () => {
  return (
    <button className={style.btn}>
      <i className={`fa fa-shopping-cart ${style.icon}`}></i>
      <h3>Your Cart</h3>
      <div className={style.badge}>3</div>
    </button>
  );
};

export default HeaderBtn;
