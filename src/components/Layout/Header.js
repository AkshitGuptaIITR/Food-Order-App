import React from "react";
import style from "./header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderBtn from "./HeaderBtn";

const Header = (props) => {
  return (
    <>
      <div className={style.background}>
        <h1>OrderMeals</h1>
        <HeaderBtn />
      </div>
      <div className={style.mealsCSS}>
        <img src={meals} alt="" />
      </div>
    </>
  );
};

export default Header;
