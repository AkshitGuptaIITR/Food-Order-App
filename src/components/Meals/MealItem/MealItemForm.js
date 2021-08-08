import React from "react";
import style from "./mealForm.module.css";
import { useRef, useState } from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [valide, setValide] = useState();
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNum = +enteredAmount; //Converting it to a number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmount > 5
    ) {
      setValide(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form action="" className={style.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!valide ? null : <p>Please Enter A valide Amount</p>}
    </form>
  );
};

export default MealItemForm;
