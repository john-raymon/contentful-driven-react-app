import { FETCH_GLOBAL_SETTINGS } from 'state/actions/applicationActions';

const initialState = {
  globalSettings: {}
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${FETCH_GLOBAL_SETTINGS}_FULFILLED`:
      return { ...state, globalSettings: action.payload };
    default:
      return state;
  }
};