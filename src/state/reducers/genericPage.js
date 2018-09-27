import { FETCH_GENERIC_PAGE } from './../actions/genericPageActions';

const initialState = {};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${FETCH_GENERIC_PAGE}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
};