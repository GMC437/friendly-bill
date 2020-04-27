import { ActionConstants } from "../shared/constants"
const { FETCH_USER_DATA_SAGA } = ActionConstants;

export const fetchUserData = () => {
  return { type: FETCH_USER_DATA_SAGA };
};
