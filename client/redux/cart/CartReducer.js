import {
  ADD_TO_CART,
  ADDED_TO_CART,
  FAILED_TO_ADD,
  REMOVE_FROM_CART,
  REMOVED_FROM_CART,
  FAILED_TO_REMOVE,
} from "./CartConstant";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        loading: action.loading,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        loading: action.loading,
      };
    case ADDED_TO_CART:
      return {
        ...state,
        loading: action.loading,
        products: action.payload,
        error: null,
      };
    case FAILED_TO_ADD:
      return {
        ...state,
        loading: action.loading,
        error: action.payload,
      };
    case FAILED_TO_REMOVE:
      return {
        ...state,
        loading: action.loading,
        error: action.payload,
      };
    case REMOVED_FROM_CART:
      return {
        ...state,
        loading: action.loading,
        products: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default cartReducer;
