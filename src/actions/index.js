import { ActionConstants } from "../shared/constants"
const { FETCH_BILLS_DATA_SAGA, FETCH_CATEGORIES_DATA_SAGA } = ActionConstants;

export const fetchBillsData = () => {
  return { type: FETCH_BILLS_DATA_SAGA };
};

export const fetchCategoriesData = () => {
  return { type: FETCH_CATEGORIES_DATA_SAGA };
};
