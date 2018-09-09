import {
  RECEIVE_ALBUM_DESIGNS,
  RECEIVE_BRANDS_DESIGNS, 
  RECEIVE_COM_DESIGNS
} from '../constants/Actions'
import Status from '../constants/Status'

const initialState = {
  album_designs: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  brands_designs: {
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  commercial_designs: {
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

const album_designs = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_ALBUM_DESIGNS}_FULFILLED`: 
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

const brands_designs = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_BRANDS_DESIGNS}_FULFILLED`:
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

const commercial_designs = (state, action) => {
  switch (action.type) {
    case `${RECEIVE_COM_DESIGNS}_FULFILLED`:
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


const designs = (state = initialState, action) => {

  switch (action.type){
    case `${RECEIVE_ALBUM_DESIGNS}_PENDING`:
    case `${RECEIVE_ALBUM_DESIGNS}_REJECTED`:
    case `${RECEIVE_ALBUM_DESIGNS}_FULFILLED`:
      return {
        ...state,
        album_designs: album_designs(state.album_designs, action)
      }
    case `${RECEIVE_BRANDS_DESIGNS}_PENDING`:
    case `${RECEIVE_BRANDS_DESIGNS}_REJECTED`:
    case `${RECEIVE_BRANDS_DESIGNS}_FULFILLED`:
      return {
        ...state,
        brands_designs: brands_designs(state.brands_designs, action)
      }
    case `${RECEIVE_COM_DESIGNS}_PENDING`:
    case `${RECEIVE_COM_DESIGNS}_REJECTED`:
    case `${RECEIVE_COM_DESIGNS}_FULFILLED`:
      return {
        ...state,
        commercial_designs: commercial_designs(state.commercial_designs, action)
      }
    default:
      return state;
  }
}

export default designs;