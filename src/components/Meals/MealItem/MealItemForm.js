import React from "react";
import style from "./mealForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form action="" className={style.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;