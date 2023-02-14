import React,{useContext} from "react";
import styles from "./CartItem.module.css";
import cartContext from "../../store/cartContext";
function CartItem(props) {
  const ctx = useContext(cartContext);
  const increment=(event)=>{
    ctx.dispatchCart({type:"INCREMENT",id:props.id,name:props.name,price:props.price,quantity:1,})
  }

  const decrement=(event)=>{
    ctx.dispatchCart({type:"DECREMENT",id:props.id,name:props.name,price:props.price,quantity:-1,})
  }
  return (
    <div className={styles.order}>
      <div className={styles.orderData}>
        <h2>{props.name}</h2>
        <div className={styles.orderPrice}>
          <p>${props.price}</p>
          <div>x {props.quantity}</div>
        </div>
      </div>
      <div className={styles.orderChange}>
        <button type="button" onClick={decrement}>{"-"}</button>
        <button type="button" onClick={increment}>{"+"}</button>
      </div>
    </div>
  );
}

export default (CartItem);
