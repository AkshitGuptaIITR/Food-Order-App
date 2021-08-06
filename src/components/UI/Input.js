import { props } from "bluebird";
import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
