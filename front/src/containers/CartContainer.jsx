import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../components/Cart";
import {
  deleteProductFromCart,
  resetCartUser,
  deleteProductStorage,
  resetCartStorage,
  setCart,
  cartStorage,
  fetchCartUser,
} from "../store/actions/cartAction";
import { newOrder } from "../store/actions/ordersAction";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { singleUser } = useSelector((state) => state.usersReducer);
  const { cart } = useSelector((state) => state.cartReducer);

  const [buy, setBuy] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setBuy(false);
  };
  const handleShow = () => setShow(true);

  const deleteProduct = (product) => {
    singleUser.name
      ? dispatch(deleteProductFromCart(product))
      : dispatch(deleteProductStorage(product));
  };

  const resetCart = () => {
    singleUser.name ? dispatch(resetCartUser()) : dispatch(resetCartStorage());
  };

  const createOrder = () => {
    if (cart.length) {
      dispatch(newOrder(cart));
      dispatch(resetCartUser());
      setBuy(true);
    }
    handleShow();
  };

  useEffect(() => {
    singleUser.name
      ? dispatch(fetchCartUser())
      : dispatch(setCart(cartStorage));
  }, [singleUser]);

  return (
    <Cart
      cart={cart}
      deleteProduct={deleteProduct}
      resetCart={resetCart}
      user={singleUser}
      handleClose={handleClose}
      show={show}
      createOrder={createOrder}
      buy={buy}
    />
  );
};

export default CartContainer;
