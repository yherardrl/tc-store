import { SET_ORDER, SET_ORDERS } from "../constants";

const initialState = {
  orders: [],
  singleOrder: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return { ...state, singleOrder: action.payload };
    case SET_ORDERS:
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};
