import {
  SET_CATEGORIES,
  SET_CATEGORY,
  REMOVE_CATEGORY,
  NEW_CATEGORY,
} from "../constants";

const inicialState = {
  categories: [],
  singleCategory: {},
};

export default (state = inicialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_CATEGORY:
      return { ...state, singleCategory: action.payload };
    case REMOVE_CATEGORY:
      const categories = state.categories.filter(
        (e) => e._id !== action.payload
      );
      return { ...state, categories };
    case NEW_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };
    default:
      return state;
  }
};
