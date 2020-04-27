import { fetchUserData } from "./index";
import { ActionConstants } from "../shared/constants";
const { FETCH_USER_DATA_SAGA } = ActionConstants;

describe("friendly bill actions", () => {
  it(`fetchUserData should create ${FETCH_USER_DATA_SAGA} action`, () => {
    expect(fetchUserData()).toEqual({
      type: FETCH_USER_DATA_SAGA,
    });
  });
});
