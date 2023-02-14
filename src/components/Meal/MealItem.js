import React, { useState, useContext } from "react";
import styles from "./MealItem.module.css";
import Button from "../UI/Button";
import cartContext from "../../store/cartContext";


function MealItem(props) {
  const [quantity, setQuantity] = useState(0);
  // const ctx = useContext(cartContext);
  
  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };

  const onAddedToCart = (event) => {
    event.preventDefault();
    // ctx.setCartNumber(Number(quantity))
    props.setId(props.mealId,Number(quantity));
  };

  return (
    <form onSubmit={onAddedToCart}>
      <div className={styles.mealItem}>
        <div className={styles.mealDescription}>
          <h4 className={styles.title}>{props.mealTitle}</h4>
          <p>{props.mealDescription}</p>
          <h4 className={styles.price}>${props.mealPrice}</h4>
        </div>

        <div className={styles.mealOrder}>
          <div className={styles.mealQuantitySelect}>
            <h4>Amount</h4>
            <input
              className={styles.quantity}
              value={quantity}
              onChange={quantityHandler}
              type="number"
              min={0}
            />
          </div>
          <div className={styles.buttonDiv}>
            <Button className={styles.orderButton} type="submit">
              {" "}
              + Add{" "}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default MealItem;
