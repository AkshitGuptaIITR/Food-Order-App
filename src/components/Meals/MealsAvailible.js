import React, { useEffect, useState } from "react";
import style from "./Availible.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import axios from "axios";

const MealsAvailible = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://react-http-3033b-default-rtdb.firebaseio.com/meals.json')
      .then((res) => {
        const response = res.data;
        console.log(response['m1'])
        const loadedMeals = [];

        for (const key in response) {
          loadedMeals.push({
            id: key,
            price: response[key].price,
            name: response[key].name,
            description: response[key].description
          })
        }
        setIsLoading(false);
        setMeals(loadedMeals);
      })
      .catch((err) => {
        setIsLoading(false)
        return err;
      })
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        meal={meals}
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  })


  return (
    <div className={style.meals}>
      <Card>
        <ul>{isLoading ? <p>Loading...</p> : mealsList}</ul>
      </Card>
    </div>
  );
};

export default MealsAvailible;
