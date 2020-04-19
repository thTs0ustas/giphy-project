import { SEARCH_SUCCESS } from "../actions/searchAction";

const initialState = {
  results: [],
};

export const searchReducer = (state = initialState, action) => {
  if (state === undefined) {
    return state;
  }
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        results: action.results,
      };
    default:
      return state;
  }
};
