import { filterOutWithKey } from "../utils/utils";
import { SET_DATA_FROM_JSON, SET_FILTERD_DATA } from "../actions/types";

export const setDataFromJson = (data) => {
  return {
    type: SET_DATA_FROM_JSON,
    payload: {
      result: data,
    },
  };
};

export const filterOutFromJson = (data, skey) => {
  let filterdOut = filterOutWithKey(data, skey);
  console.log(data, skey, "in action");
  return {
    type: SET_FILTERD_DATA,
    payload: {
      result: filterdOut,
    },
  };
};
