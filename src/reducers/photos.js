import {
  RECEIVE_FASHION_PHOTOS, 
  RECEIVE_COM_PHOTOS,
  RECEIVE_PROJ_PHOTOS,
  RECEIVE_SHOWS_PHOTOS, 
  RECEIVE_PORT_PHOTOS
} from '../constants/Actions'
import Status from '../constants/Status'

const allIds = (state, action) => {
  return action.payload.length > 0 ? action.payload.map(post => post.id) : state
}

const fashion_photos = (state, action) {
  switch (action.type) {
    case `${RECEIVE_FASHION_PHOTOS}_FULFILLED`: 
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: action.payload.length > 0 ? action.payload.reduce((obj, post) => {
          obj[post.id] = post;
          return obj
        }, {}) : state.byIds,
        allIds: allIds(state.allIds, action)
      }
  }
}

const photos = (state = {
  fashion_photos: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null }
  }, action) => {

  switch (action.type){
    case `${RECEIVE_FASHION_PHOTOS}_PENDING`:
    case `${RECEIVE_FASHION_PHOTOS}_REJECTED`:
    case `${RECEIVE_FASHION_PHOTOS}_FULFILLED`:
      return {
        ...state,
        fashion_photos: fashion_photos(state.fashion_photos, action)
      }
    default:
      return state;
  }
}