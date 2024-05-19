import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("https://localhost:3000/meals");
      if (!response) {
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    };
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};
export default Meals;
