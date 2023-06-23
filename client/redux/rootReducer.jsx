import { combineReducers } from "redux";
import cartReducer from "./cart/CartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
