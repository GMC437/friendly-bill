import { combineReducers } from "redux";
import { ActionConstants } from "../shared/constants";
const {
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
        bills: [...action.payload],

      };
    case FETCH_CATEGORIES_DATA_SUCCESS:
      return {
        ...state,
        categories: [...action.payload],
      };
    default:
      return state;
  }
};

export default combineReducers({
  data: appReducer,
});
