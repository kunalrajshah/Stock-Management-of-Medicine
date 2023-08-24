import React, { useState } from "react";
import CartContext from "./cartContext";

const ContextProvider = (props) => {
  const [item, setItem] = useState([]);
  // Add to cart
  const addToCartHandler = (it,quant) => {
    const newItem = { ...it, Quantity: parseInt(quant)};
    setItem((prevItems) => [...prevItems, newItem]);
  };
  // Update Quantity of cart
  const updateItemQuantity = (itemName, newQuantity) => {
    const updatedItems = item.map((it) => {
      if (it.name === itemName) {
        const updateQuant=+it.Quantity+ +newQuantity;
        return { ...it, Quantity: updateQuant };
      }
      return it;
    });
    setItem(updatedItems);
  };
  const clearCartHandler=()=>{
    setItem([]);
  }
  
  const cartValue = {
    item: item,
    addItem: addToCartHandler,
    updateQuant: updateItemQuantity,
    clearCart:clearCartHandler
  };
  // console.log("item in cart", cartValue.item);
  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
