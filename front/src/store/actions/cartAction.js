import axios from "axios";
import { SET_CART, RESET_CART } from "../constants";

const setCart = (data) => ({ type: SET_CART, payload: data });

const resetCart = () => ({ type: RESET_CART });

const addProductToCart = (order) => (dispatch) =>
  axios
    .post("/api/cart/add", order)
    .then(({ data }) => dispatch(setCart(data)));

const deleteProductFromCart = (product) => (dispatch) =>
  axios
    .delete(`/api/cart/delete/${product._id}`)
    .then(({ data }) => dispatch(setCart(data)));

const fetchCartUser = () => (dispatch) =>
  axios.get("/api/cart").then(({ data }) => {
    data.length ? dispatch(setCart(data)) : dispatch(setCartUser());
  });

const setCartUser = () => (dispatch) =>
  axios.post("/api/cart", cartStorage).then(({ data }) => {
    dispatch(setCart(data));
    resetCartStorage();
  });

const resetCartUser = () => (dispatch) =>
  axios.put("/api/cart", {}).then(({ data }) => {
    console.log("CARRITO BORRADO", data);
    dispatch(resetCart());
  });

///////////// LOCAL STORAGE ////////////////////
const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];

const addProductStorage = (charge) => (dispatch) => {
  let exist = false;

  cartStorage.map((order) => {
    if (order.product._id == charge.product._id) {
      order.quantity = charge.quantity;
      exist = true;
    }
  });

  if (!exist) cartStorage.push(charge);

  localStorage.setItem("cart", JSON.stringify(cartStorage));
  dispatch(setCart(cartStorage));
};

const deleteProductStorage = (product) => (dispatch) => {
  cartStorage.map((order, index) => {
    if (order.product._id == product._id) cartStorage.splice(index, 1);
  });

  localStorage.setItem("cart", JSON.stringify(cartStorage));
  dispatch(setCart(cartStorage));
};

const resetCartStorage = () => localStorage.setItem("cart", JSON.stringify([]));

export {
  setCart,
  addProductToCart,
  deleteProductFromCart,
  fetchCartUser,
  resetCartUser,
  addProductStorage,
  deleteProductStorage,
  resetCartStorage,
  resetCart,
  cartStorage,
};
