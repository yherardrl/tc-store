import { SET_CART, RESET_CART } from "../constants";

const inicialState = {
  cart: [],
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case RESET_CART:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
