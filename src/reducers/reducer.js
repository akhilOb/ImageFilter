import {
  SET_DATA_FROM_JSON,
  SET_FILTERD_DATA
  } from "../actions/types";
  
  const initialState = {
    result: [],
    filterd: []
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DATA_FROM_JSON:
        return {
          result: action.payload.result,
          filterd: action.payload.result
        }
        case SET_FILTERD_DATA:
          return {
            ...state,
            filterd: action.payload.result,
          };
      default:
        return state;
    }
  };
   
  export default filterReducer;
  