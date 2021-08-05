import React from "react";
import style from "./header.module.css";
import meals from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <div className={style.background}>
        <h1>OrderMeals</h1>
        <button>
          <i className="fa fa-shopping-cart"></i>
          {"        "}
          Your Cart
        </button>
      </div>
      <div className={style.mealsCSS}>
        <img src={meals} alt="" />
      </div>
    </>
  );
};

export default Header;
