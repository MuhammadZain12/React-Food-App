import React from "react";
import MealItem from "./MealItem";
import styles from "./MealList.module.css";
import Card from "../UI/Card";

function MealList(props) {
  return (
    <Card className={styles.meals}>
      <ul>
        {props.mealList.map((meal) => (
          <li key={meal.id}>
            <MealItem
              mealTitle={meal.name}
              mealDescription={meal.description}
              mealPrice={meal.price}
              mealId={meal.id}
              setId={props.setId}
            />
            <hr />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default MealList;
