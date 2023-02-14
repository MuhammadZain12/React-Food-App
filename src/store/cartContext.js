import React from "react";

const cartContext = React.createContext({
  cart: null,
  dispatchCart: () => {},
  showCart: () => {},
});

export default cartContext;
