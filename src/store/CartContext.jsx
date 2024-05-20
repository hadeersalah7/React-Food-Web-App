import React, { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  if (action.type === "Add_Item") {
    const existingCart = state.items.findIndex(
      (item) => item.id === action.item.id,
    );
    const updatedItems = [...state.items];
    let exsitingItem = state.items[existingCart];
    if (existingCart > -1) {
      const updatedItem = {
        ...exsitingItem,
        quantity: exsitingItem.quantity + 1,
      };
      updatedItems[existingCart] = updatedItem;
    } else {
      updatedItems.push(action.item);
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "Remove_Item") {
  }
  return state;
};

export const CartContextProvider = ({ children }) => {
  useReducer(cartReducer, { items: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartContext;
