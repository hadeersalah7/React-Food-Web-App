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
      updatedItem[existingCart] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "Remove_Item") {
    const existingCart = state.items.findIndex((item) => item.id === action.id);

    let exsitingItem = state.items[existingCart];

    const updatedItems = [...state.items];

    if (existingCart === 1) {
      updatedItems = [...state.items];
      updatedItems.splice(existingCart, 1);
    } else {
      const updatedItem = {
        ...exsitingItem,
        quantity: exsitingItem.quantity - 1,
      };
      updatedItems[existingCart] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }
  return state;
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "Add_Item", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "Remove_Item", id });
  };
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log(cartContext);
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
