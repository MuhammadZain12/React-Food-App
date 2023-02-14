import Header from "./components/Layout/Header";
import InfoCard from "./components/Meal/Info";
import MainImage from "./components/Layout/MainImage";
import DUMMY_MEALS from "./components/Meal/DemoMeals";
import MealList from "./components/Meal/MealList";
import React, { useReducer, useState } from "react";
import CartList from "./components/Cart/CartList";
import cartContext from "./store/cartContext";

const cartDataReducer = (state, action) => {
  let newState = [];
  if (action.type === "INCREMENT") {
    state.forEach((order) => {
      if (order.id === action.id) {
        order.quantity += action.quantity;
      }
      newState.push(order);
    });
    // newState = [...state];
    return newState;
  } else if (action.type === "DECREMENT") {
    state.forEach((order) => {
      if (order.id === action.id) {
        console.log("ActionQuantity" + action.quantity);
        order.quantity += action.quantity;
      }
      if (order.quantity !== 0) {
        newState.push(order);
      }
    });
    console.log("newState");
    console.log(newState);
    return newState;
  } else if (action.type === "ADD") {
    if (state.some((order) => order.id === action.id)) {
      state.forEach((order) => {
        if (order.id === action.id) {
          order.quantity += action.quantity;
        }
        newState.push(order);
      });
      // newState = [...state];
      return newState;
    } else {
      const newState = [
        {
          id: action.id,
          name: action.name,
          price: action.price,
          quantity: action.quantity,
        },
        ...state,
      ];
      return newState;
    }
  }
};

function App() {
  const [cartData, dispatchCartData] = useReducer(cartDataReducer, []);
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = (signal) => {
    setShowCart(signal);
  };

  const selectedIdHandler = (id, cartQuantity) => {
    const myObject = DUMMY_MEALS.filter((meal) => meal.id === id);
    console.log("Here");
    dispatchCartData({
      type: "ADD",
      id: id,
      name: myObject[0].name,
      price: myObject[0].price,
      quantity: cartQuantity,
    });
  };



  return (
    <cartContext.Provider
      value={{ cart: cartData, dispatchCart: dispatchCartData,showCart:showCartHandler }}
    >
      <Header />
      {showCart && <CartList />}
      <MainImage />
      <InfoCard />
      <MealList setId={selectedIdHandler} mealList={DUMMY_MEALS} />
      
      
    </cartContext.Provider>
  );
}

export default App;
