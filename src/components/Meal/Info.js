import React from "react";
import Card from "../UI/Card";
import styles from "./Info.module.css";

function InfoCard() {
  return (
    <Card className={styles.info}>
      <h1>
        Delecious Food, Delivered to You
      </h1>
      <p>
        Choose any Meal from vast variety of our offered meals and Enjoy a
        delecious lunch or dinner at home.
      </p>
      <p>
        All Of our meals are cooked with fresh ingredients, just-in-time and of
        course by experienced chefs.
      </p>
    </Card>
  );
}

export default InfoCard;
