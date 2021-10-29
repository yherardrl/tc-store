import { SET_PRODUCT, SET_PRODUCTS } from "../constants";

const inicialState = {
 
  products: [],
  singleProduct: {},
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_PRODUCT:
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
};
