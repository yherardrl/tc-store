import { SET_USER, REMOVE_USER, SET_USERS } from "../constants";

const initialState = {
  users: [],
  singleUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, singleUser: action.payload };
    case REMOVE_USER:
      return { ...state, singleUser: {} };
    case SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
