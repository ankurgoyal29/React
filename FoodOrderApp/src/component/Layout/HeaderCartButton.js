import React, { useContext, useEffect, useState } from "react";
import CartContext from "../store/CartContext";
import classes from "./HeaderCartButton.module.css";
import Modal from "../UI/Modal";
import CartIcon from "./CartIcon";
import Button from "../UI/Button";
import Cart from "../Cart/Cart";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [modalState, setModalState] = useState(false);

  const showModalHandler = () => {
    setModalState(true);
  };

  const onCartCloseHandler = () => {
    setModalState(false);
  };
  const btnClasses = `${classes.button}  ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  //Side effect
  useEffect(() => {
    setBtnIsHighLighted(true);

    //setting timeout to remove the class
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300); //300 is the duration of the animation

    //clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItems]);
  return (
    <React.Fragment>
      <button className={btnClasses} onClick={showModalHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>
          <label>Your Cart</label>
        </span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      {modalState ? (
        <Modal>
          <Cart onClose={onCartCloseHandler} />
        </Modal>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default HeaderCartButton;
