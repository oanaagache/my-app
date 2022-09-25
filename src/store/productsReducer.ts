import { AnyAction } from "redux";
import * as productsActionTypes from "./productsActionTypes";

const initialState = {
  products: [],
};

const action = {
  type: "SET_PRODUCTS",
  payload: { products: ["dsdsds"] },
};

export const productsReducer = (state = initialState, action: AnyAction) => {
  const { payload, type } = action;
  switch (type) {
    case productsActionTypes.SET_PRODUCTS:
      return { ...state, products: payload.products };
    default:
      return state;
  }
};
