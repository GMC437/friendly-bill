import { initState, appReducer } from "./index";
import { ActionConstants } from "../shared/constants";
const {
  FETCH_BILLS_DATA,
  FETCH_BILLS_DATA_SUCCESS,
  FETCH_CATEGORIES_DATA,
  FETCH_CATEGORIES_DATA_SUCCESS,
} = ActionConstants;

const mockState = {
  bills: [],
  categories: [],
  loading: {},
  news: "",
};

describe("reducers", () => {
  describe(`${FETCH_BILLS_DATA_SUCCESS}`, () => {
    it(`${FETCH_BILLS_DATA_SUCCESS} with mockAction`, () => {
      const mockAction = {
        type: FETCH_BILLS_DATA_SUCCESS,
        payload: [{}, {}, {}],
      };
      const { bills } = appReducer(mockState, mockAction);

      expect(bills.length).toBe(mockAction.payload.length);
    });
  });

  describe(`${FETCH_BILLS_DATA}`, () => {
    it(`${FETCH_BILLS_DATA} with mockAction`, () => {
      const mockAction = {
        type: FETCH_BILLS_DATA,
      };
      const { loading } = appReducer(mockState, mockAction);

      expect(loading.isLoading).toBe(true);
    });
  });

  describe(`${FETCH_CATEGORIES_DATA_SUCCESS}`, () => {
    it(`${FETCH_CATEGORIES_DATA_SUCCESS} with mockAction`, () => {
      const mockAction = {
        type: FETCH_CATEGORIES_DATA_SUCCESS,
        payload: [{}, {}, {}],
      };
      const { categories } = appReducer(mockState, mockAction);

      expect(categories.length).toBe(mockAction.payload.length);
    });
  });

  describe(`${FETCH_CATEGORIES_DATA}`, () => {
    it(`${FETCH_CATEGORIES_DATA} with mockAction`, () => {
      const mockAction = {
        type: FETCH_CATEGORIES_DATA,
      };
      const { loading } = appReducer(mockState, mockAction);

      expect(loading.isLoading).toBe(true);
    });
  });

  describe("Other Effects", () => {
    it("should ignore unknown actions", () => {
      const mockAction = { data: [], type: "mockAction" };
      const { bills } = appReducer(initState, mockAction);

      expect(bills.length).toBe(0);
    });
  });
});
