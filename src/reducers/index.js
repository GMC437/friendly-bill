import { combineReducers } from "redux";

export const initState = {
  data: [],
  isLoading: false,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  data: appReducer,
});
