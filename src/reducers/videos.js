import Status from '../constants/Status.js'

const music_videos = (state = {byIds: {}, allIds: [], status: null}, action) => {
  console.log('this is the payload', action.payload)
  switch (action.type) {
    case 'RECEIVE_MUSIC_VIDEOS_FULFILLED':
      return {
        ...state,
        status: Status.FULFILLED,
        allIds: action.payload.length > 0 ? action.payload.map(post => post.slug) : []
      }
    default:
      return state;
  }
}
const videos = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_MUSIC_VIDEOS_PENDING':
    case 'RECEIVE_MUSIC_VIDEOS_REJECTED':
    case 'RECEIVE_MUSIC_VIDEOS_FULFILLED': 
      return {  ...state,
        music_videos: music_videos(state.music_videos, action)
      }
    default: 
      return state;
  }
}
export default videos