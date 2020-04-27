import { fetchBillsData, fetchCategoriesData } from "./index";
import { ActionConstants } from "../shared/constants";
const { FETCH_BILLS_DATA_SAGA, FETCH_CATEGORIES_DATA_SAGA } = ActionConstants;

describe("actions", () => {
  it(`fetchBillsData should create ${FETCH_BILLS_DATA_SAGA} action`, () => {
    expect(fetchBillsData()).toEqual({
      type: FETCH_BILLS_DATA_SAGA,
    });
  });

  it(`fetchCategoriesData should create ${FETCH_CATEGORIES_DATA_SAGA} action`, () => {
    expect(fetchCategoriesData()).toEqual({
      type: FETCH_CATEGORIES_DATA_SAGA,
    });
  });
});
