import { FULFILLED, IDLE, PENDING, REJECTED } from './../../constants/Status';
import { INITIALIZE_APPLICATION } from './../actions/applicationActions';
import { FETCH_GENERIC_PAGE } from './../actions/genericPageActions'

const initialState = {
  initializeApplication: IDLE,
  genericPage: IDLE
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${INITIALIZE_APPLICATION}_PENDING`:
      return { ...state, initializeApplication: PENDING };
    case `${INITIALIZE_APPLICATION}_FULFILLED`:
      return { ...state, initializeApplication: FULFILLED };
    case `${INITIALIZE_APPLICATION}_REJECTED`:
      return { ...state, initializeApplication: REJECTED };

    case `${FETCH_GENERIC_PAGE}_PENDING`:
      return { ...state, genericPage: PENDING };
    case `${FETCH_GENERIC_PAGE}_FULFILLED`:
      return { ...state, genericPage: FULFILLED };
    case `${FETCH_GENERIC_PAGE}_REJECTED`:
      return { ...state, genericPage: REJECTED };
    
    default:
      return state;
  }
};