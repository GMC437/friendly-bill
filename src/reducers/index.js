import { combineReducers } from "redux";
import { ActionConstants } from "../shared/constants";
const {
  UPDATE_BILL_STATUS,
  FETCH_BILLS_DATA,
  FETCH_BILLS_DATA_SUCCESS,
  FETCH_CATEGORIES_DATA,
  FETCH_CATEGORIES_DATA_SUCCESS,
} = ActionConstants;

export const initState = {
  bills: [],
  categories: [],
  loading: {},
  news: "",
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BILLS_DATA:
    case FETCH_CATEGORIES_DATA:
      return {
        ...state,
        loading: {
          isLoading: true,
          message: "Your data is currently being fetched for",
        },
      };
    case FETCH_BILLS_DATA_SUCCESS:
      return {
        ...state,
        loading: {
          isLoading: false,
          message: "Your data has been fetched",
        },
        bills: [...action.payload],
      };
    case FETCH_CATEGORIES_DATA_SUCCESS:
      return {
        ...state,
        loading: {
          isLoading: false,
          message: "Your data has been fetched",
        },
        categories: [...action.payload],
      };
    case UPDATE_BILL_STATUS:
      const index = state.bills.findIndex((i) => i.id === action.payload.id);
      state.bills[index] = { ...state.bills[index], isBill: !action.payload.isBill };
      return {
        ...state,
        bills: [...state.bills],
      };
    default:
      return state;
  }
};

export default combineReducers({
  data: appReducer,
});
