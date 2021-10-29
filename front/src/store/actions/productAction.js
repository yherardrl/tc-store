import axios from "axios";
import { SET_PRODUCT, SET_PRODUCTS } from "../constants";

const products = (data) => ({
  type: SET_PRODUCTS,
  payload: data,
});

const singleProduct = (data) => ({
  type: SET_PRODUCT,
  payload: data,
});

export const postReview = (product, review) => (dispatch) =>
  axios
    .post(`/api/reviews/${product._id}`, review)
    .then(({ data }) => dispatch(singleProduct(data)));

export const createProduct = (product) => (dispatch) => {
  axios.post("/api/products", product).then(() => dispatch(fetchProducts()));
};

export const fetchProducts = () => (dispatch) =>
  axios.get("/api/products").then(({ data }) => dispatch(products(data)));

export const fetchSingleProduct = (id) => (dispatch) =>
  axios
    .get(`/api/products/${id}`)
    .then(({ data }) => dispatch(singleProduct(data)));

export const updateProduct = (product) => (dispatch) => {
  axios
    .put(`/api/products/${product._id}`, product)
    .then(({ data }) => dispatch(fetchSingleProduct(data._id)));
};

export const deleteProduct = (product) => (dispatch) => {
  axios
    .delete(`/api/products/${product._id}`)
    .then(() => dispatch(fetchProducts()));
};
