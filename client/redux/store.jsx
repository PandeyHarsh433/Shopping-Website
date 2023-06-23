import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
