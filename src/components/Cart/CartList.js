import React, { useContext } from "react";
import CartItem from "./CartItem";
import styles from "./CartList.module.css";
import Card from "../UI/Card";
import cartContext from "../../store/cartContext";
import Button from "../UI/Button";

function CartList(props) {
  const ctx = useContext(cartContext);

  if (ctx.cart.length === 0) {
    return <>There is Nothing TO show</>;
  }

  const closeCart = () => {
    ctx.showCart(false);
  };

  return (
    <>
      <div className={styles.backdrop}></div>
      <Card className={styles.order}>
        <ul>
          {ctx.cart.map((order) => (
            <li key={order.id}>
              <CartItem
                name={order.name}
                quantity={order.quantity}
                price={order.price}
                id={order.id}
              />
              <hr />
            </li>
          ))}
        </ul>
        <h4>Total Bill : </h4>
        <div className={styles.cartForm}>
          <button onClick={closeCart} className={styles.closebtn}>
            Close
          </button>
          <Button>Order</Button>
        </div>
      </Card>
    </>
  );
}

export default CartList;
