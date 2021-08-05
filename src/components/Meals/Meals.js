import React from "react";
import MealsAvailible from "./MealsAvailible";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <div>
      <MealsSummary />
      <MealsAvailible />
    </div>
  );
};

export default Meals;
