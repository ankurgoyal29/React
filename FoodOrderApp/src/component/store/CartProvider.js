import { useReducer } from "react";

import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
/**
 * params :  state => gives us the current state of the cart
 * params : action => gives us the values of action taken by the user
 */
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    console.log("Adding Item :" + action.item);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); //we create a brand new array because it let react know that the data is updated.
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE_ITEM") {
    console.log("removing Item :" + action.id);

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    if (existingCartItemIndex >= 0) {
      state.totalAmount -= state.items[existingCartItemIndex].price;
      if (state.items[existingCartItemIndex].amount === 1) {
        state.items.splice(existingCartItemIndex, 1);
      } else {
        state.items[existingCartItemIndex].amount -= 1;
      }
    }

    return { items: state.items, totalAmount: state.totalAmount };
  }

  return defaultCartState;
};

// To manage the cart context data, and provide that context to all components that wants access to it.
const CartProvider = (props) => {
  //using reducer to manage state
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
