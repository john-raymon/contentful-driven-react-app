import {
  FETCH_CONTENTFUL_ANNOUNCEMENTS,
  FETCH_CONTENTFUL_PHOTOS,
  FETCH_CONTENTFUL_VIDEOS,
  FETCH_CONTENTFUL_DESIGNS
} from 'state/actions/contentsActions';

const initialState = {
  announcements: {},
  videos: {},
  photos: {},
  designs: {}
};

export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case `${FETCH_CONTENTFUL_ANNOUNCEMENTS}_FULFILLED`:
      return {
        ...state,
        announcements: action.payload
      };
    case `${FETCH_CONTENTFUL_VIDEOS}_FULFILLED`:
      return {
        ...state,
        videos: action.payload
      };
    case `${FETCH_CONTENTFUL_PHOTOS}_FULFILLED`:
      return {
        ...state,
        photos: action.payload
      };
    case `${FETCH_CONTENTFUL_DESIGNS}_FULFILLED`:
      return {
        ...state,
        designs: action.payload
      };
    default:
      return state;
  }
}
