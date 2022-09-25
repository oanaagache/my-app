import { combineReducers } from "redux";
import { counterReducer } from "./counters/counterReducer";
import { productsReducer } from "./productsReducer";

const initialState = {
  count: 0,
};

export const reducer = combineReducers({
  counter: counterReducer,
  products: productsReducer,
});
