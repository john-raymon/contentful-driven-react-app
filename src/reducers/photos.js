import {
  RECEIVE_FASHION_PHOTOS, 
  RECEIVE_COM_PHOTOS,
  RECEIVE_PROJ_PHOTOS,
  RECEIVE_SHOWS_PHOTOS, 
  RECEIVE_PORT_PHOTOS
} from '../constants/Actions'
import Status from '../constants/Status'

const initialState = {
  fashion_photos: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  commercial_photos: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  projects_photos: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  shows_photos: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  portrait_photos: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null }
};

const allIds = (state, action) => {
  return action.payload.length > 0 ? action.payload.map(post => post.id) : state
}

const byIds = (state, action) => {
  return action.payload.length > 0 ? action.payload.reduce((obj, post) => {
          obj[post.id] = post;
          return obj
        }, {}) : byIds
}

const fashion_photos = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_FASHION_PHOTOS}_FULFILLED`: 
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: byIds(state.byIds,action),
        allIds: allIds(state.allIds, action)
      }
    default:
      return state;
  }
}

const commercial_photos = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_COM_PHOTOS}_FULFILLED`:
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: byIds(state.byIds, action),
        allIds: allIds(state.allIds, action)
      }
    default:
      return state;
  }
}

const projects_photos = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_PROJ_PHOTOS}_FULFILLED`:
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: byIds(state.byIds, action),
        allIds: allIds(state.allIds, action)
      }
    default: 
      return state;
  }
}

const shows_photos = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_SHOWS_PHOTOS}_FULFILLED`:
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: byIds(state.byIds, action),
        allIds: allIds(state.allIds, action)      
      }
    default:
      return state;
  }
}

const portrait_photos = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_PORT_PHOTOS}_FULFILLED`:
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: byIds(state.byIds, action),
        allIds: allIds(state.allIds, action)
      }
    default:
      return state;
  }
}

const photos = (state = initialState, action) => {

  switch (action.type){
    case `${RECEIVE_FASHION_PHOTOS}_PENDING`:
    case `${RECEIVE_FASHION_PHOTOS}_REJECTED`:
    case `${RECEIVE_FASHION_PHOTOS}_FULFILLED`:
      return {
        ...state,
        fashion_photos: fashion_photos(state.fashion_photos, action)
      }
    case `${RECEIVE_COM_PHOTOS}_PENDING`:
    case `${RECEIVE_COM_PHOTOS}_REJECTED`:
    case `${RECEIVE_COM_PHOTOS}_FULFILLED`:
      return {
        ...state,
        commercial_photos: commercial_photos(state.commercial_photos, action)
      }
    case `${RECEIVE_PROJ_PHOTOS}_PENDING`:
    case `${RECEIVE_PROJ_PHOTOS}_REJECTED`:
    case `${RECEIVE_PROJ_PHOTOS}_FULFILLED`:
      return {
        ...state,
        projects_photos: projects_photos(state.projects_photos, action)
      }
    case `${RECEIVE_SHOWS_PHOTOS}_PENDING`:
    case `${RECEIVE_SHOWS_PHOTOS}_REJECTED`:
    case `${RECEIVE_SHOWS_PHOTOS}_FULFILLED`:
      return {
        ...state,
        shows_photos: shows_photos(state.shows_photos, action)
      }
    case `${RECEIVE_PORT_PHOTOS}_PENDING`:
    case `${RECEIVE_PORT_PHOTOS}_REJECTED`:
    case `${RECEIVE_PORT_PHOTOS}_FULFILLED`:
      return {
        ...state,
        portrait_photos: portrait_photos(state.portrait_photos, action)
      }
    default:
      return state;
  }
}

export default photos;