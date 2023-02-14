import React,{useContext} from "react";
import styles from "./Cart.module.css";
import pic from './cart.png'
import cartContext from "../../store/cartContext";

function Cart(props) {

  const ctx=useContext(cartContext)
  let total=0
  ctx.cart.forEach(order=>{total+=order.quantity})




  const cartClicked=()=>{
    ctx.showCart(true)
  }
  return (
    <div className={styles.cart} onClick={cartClicked}>
      <img src={pic}/>
      <p>Your Cart</p>
      <div>{total}</div>
    </div>
  );
}

export default Cart;
