import {
  FETCH_CONTENTFUL_ANNOUNCEMENTS
} from 'state/actions/contentsActions';

const initialState = {
  announcements: {}
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${FETCH_CONTENTFUL_ANNOUNCEMENTS}_FULFILLED`:
      return {
        ...state,
        announcements: action.payload
      };
    default:
      return state;
  }
}
