import { all, takeLatest, put, call } from "redux-saga/effects";
import { ActionConstants, APIConstants } from "../shared/constants";
import { fetchJson } from "../helpers";
const { base } = APIConstants;
const {
  FETCH_BILLS_DATA,
  FETCH_BILLS_DATA_SUCCESS,
  FETCH_BILLS_DATA_FAILURE,
  FETCH_BILLS_DATA_SAGA,
  FETCH_CATEGORIES_DATA,
  FETCH_CATEGORIES_DATA_SUCCESS,
  FETCH_CATEGORIES_DATA_FAILURE,
  FETCH_CATEGORIES_DATA_SAGA,
} = ActionConstants;

export function* fetchBills() {
  yield put({ type: FETCH_BILLS_DATA });

  try {
    const bills = yield call(fetchJson, `${base}bills`);
    yield put({ type: FETCH_BILLS_DATA_SUCCESS, payload: bills  });
  } catch (error) {
    yield put({ type: FETCH_BILLS_DATA_FAILURE });
    console.error(error);
  }
}

export function* fetchCategories() {
  yield put({ type: FETCH_CATEGORIES_DATA });

  try {
    const categories = yield call(fetchJson, `${base}categories`);
    yield put({
      type: FETCH_CATEGORIES_DATA_SUCCESS,
      payload: categories ,
    });
  } catch (error) {
    yield put({ type: FETCH_CATEGORIES_DATA_FAILURE });
    console.error(error);
  }
}

export function* billsActionWatcher() {
  yield takeLatest(FETCH_BILLS_DATA_SAGA, fetchBills);
}
export function* categoriesActionWatcher() {
  yield takeLatest(FETCH_CATEGORIES_DATA_SAGA, fetchCategories);
}

export default function* rootSaga() {
  yield all([billsActionWatcher(), categoriesActionWatcher()]);
}
