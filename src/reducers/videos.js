import Status from '../constants/Status'
import {RECEIVE_MUSIC_VIDEOS, RECEIVE_RECAP_VIDEOS, RECEIVE_DOC_VIDEOS, RECEIVE_PROJ_VIDEOS} from '../constants/Actions'

const allIds = (state, action) => {
  return action.payload.length > 0 ? action.payload.map(post => post.id) : state
}

const music_videos = (state = {byIds: {}, allIds: [], status: Status.IDLE, error: null}, action) => {

  switch (action.type) {
    case `${RECEIVE_MUSIC_VIDEOS}_FULFILLED`: 
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: action.payload.length > 0 ? action.payload.reduce((obj, post) => {
          obj[post.id] = post;
          return obj
        }, {}) : state.byIds,
        allIds: allIds(state.allIds, action)
      }
    default:
      return state;
  }
}

const recap_videos = (state = { byIds: {}, allIds: [], status: Status.IDLE, error: null }, action) => {
  console.log('recap video payload in reducer', action.payload)
  switch (action.type) {
    case `${RECEIVE_RECAP_VIDEOS}_FULFILLED`: 
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: action.payload.length > 0 ? action.payload.reduce((obj, post) => {
          obj[post.id] = post;
          return obj
        }, {}) : state.byIds,
        allIds: allIds(state.allIds, action)
      }
    default:
      return state;
  }
}

const doc_videos = (state = {byIds: {}, allIds: [], status: Status.IDLE, error: null}, action) => {

  switch (action.type) {
    case `${RECEIVE_DOC_VIDEOS}_FULFILLED`: 
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: action.payload.length > 0 ? action.payload.reduce((obj, post) => {
          obj[post.id] = post;
          return obj
        }, {}) : state.byIds,
        allIds: allIds(state.allIds, action)
      }
    default:
      return state;
  }
}

const proj_videos = (state = {byIds: {}, allIds: [], status: Status.IDLE, error: null}, action) => {

  switch (action.type) {
    case `${RECEIVE_PROJ_VIDEOS}_FULFILLED`: 
      return {
        ...state,
        status: Status.FULFILLED,
        byIds: action.payload.length > 0 ? action.payload.reduce((obj, post) => {
          obj[post.id] = post;
          return obj
        }, {}) : state.byIds,
        allIds: allIds(state.allIds, action)
      }
    default:
      return state;
  }
}

const videos = (state = {
  music_videos: { 
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  recap_videos: { 
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  doc_videos: { 
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null },
  proj_videos: { 
    byIds: {}, 
    allIds: [], 
    status: Status.IDLE, 
    error: null }
  }, action) => {

  switch (action.type) {
    case `${RECEIVE_MUSIC_VIDEOS}_PENDING`:
    case `${RECEIVE_MUSIC_VIDEOS}_REJECTED`:
    case `${RECEIVE_MUSIC_VIDEOS}_FULFILLED`: 
      return {  
        ...state,
        music_videos: music_videos(state.music_videos, action)
      }
    case `${RECEIVE_RECAP_VIDEOS}_PENDING`:
    case `${RECEIVE_RECAP_VIDEOS}_REJECTED`:
    case `${RECEIVE_RECAP_VIDEOS}_FULFILLED`: 
      return {  
        ...state,
        recap_videos: recap_videos(state.recap_videos, action)
      }
    case `${RECEIVE_DOC_VIDEOS}_PENDING`:
    case `${RECEIVE_DOC_VIDEOS}_REJECTED`:
    case `${RECEIVE_DOC_VIDEOS}_FULFILLED`: 
      return {  
        ...state,
        doc_videos: doc_videos(state.doc_videos, action)
      }
    case `${RECEIVE_PROJ_VIDEOS}_PENDING`:
    case `${RECEIVE_PROJ_VIDEOS}_REJECTED`:
    case `${RECEIVE_PROJ_VIDEOS}_FULFILLED`: 
      return {  
        ...state,
        proj_videos: proj_videos(state.proj_videos, action)
      }
    default: 
      return state;
  }
}
export default videos