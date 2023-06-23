import axios from "axios";
import {
  ADD_TO_CART,
  ADDED_TO_CART,
  FAILED_TO_ADD,
  REMOVE_FROM_CART,
  REMOVED_FROM_CART,
  FAILED_TO_REMOVE,
} from "./CartConstant";

export const addToCart = () => {
  return {
    type: ADD_TO_CART,
    loading: true,
  };
};

export const addedToCart = (products) => {
  return {
    type: ADDED_TO_CART,
    loading: false,
    payload: products,
  };
};

export const failedToAdd = (error) => {
  return {
    type: FAILED_TO_ADD,
    loading: false,
    payload: error,
  };
};

export const removeFromCart = () => {
  return {
    type: REMOVE_FROM_CART,
    loading: true,
  };
};

export const removedFromCart = (products) => {
  return {
    type: REMOVED_FROM_CART,
    loading: false,
    payload: products,
  };
};

export const failedToRemove = (error) => {
  return {
    type: FAILED_TO_REMOVE,
    loading: false,
    payload: error,
  };
};

// Async action creator
export const addToCartAsync = (userId, productId, quantity, size) => {
  return async (dispatch) => {
    try {
      dispatch(addToCart());

      const response = await axios.post("http://localhost:8000/cart/add", {
        userId,
        productId,
        quantity,
        size,
      });

      dispatch(addedToCart(response.data.data.items));
    } catch (error) {
      dispatch(failedToAdd(error.message));
    }
  };
};

export const removeFromCartAsync = (userId, productId) => {
  return async (dispatch) => {
    try {
      dispatch(removeFromCart());

      const response = await axios.delete(`http://localhost:8000/cart/delete`, {
        userId,
        productId,
      });

      dispatch(removedFromCart(response.data.data.items));
    } catch (error) {
      dispatch(failedToRemove(error.message));
    }
  };
};
