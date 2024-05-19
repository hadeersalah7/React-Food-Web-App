import React from "react";
import { formatter } from "../util/formatter";
const MealItem = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{formatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <div>
          <p className="meal-item-actions">
            <button>Add to cart</button>
          </p>
        </div>
      </article>
    </li>
  );
};
export default MealItem;
