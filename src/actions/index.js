import tumblrClient from '../util/configtumblr'
import {
  RECEIVE_MUSIC_VIDEOS,
  RECEIVE_RECAP_VIDEOS, 
  RECEIVE_DOC_VIDEOS,
  RECEIVE_PROJ_VIDEOS,
  RECEIVE_FASHION_PHOTOS, 
  RECEIVE_COM_PHOTOS,
  RECEIVE_PROJ_PHOTOS,
  RECEIVE_SHOWS_PHOTOS, 
  RECEIVE_PORT_PHOTOS,
  RECEIVE_ALBUM_DESIGNS,
  RECEIVE_BRANDS_DESIGNS, 
  RECEIVE_COM_DESIGNS
} from '../constants/Actions'
// videos section action creators/constants
const receiveMusicVideos = (videos) => ({
  type: RECEIVE_MUSIC_VIDEOS,
  payload: videos
})

const receiveRecapVideos = (videos) => ({
  type: RECEIVE_RECAP_VIDEOS,
  payload: videos
})

const receiveDocVideos = (videos) => ({
  type: RECEIVE_DOC_VIDEOS,
  payload: videos
})

const receiveProjVideos = (videos) => ({
  type: RECEIVE_PROJ_VIDEOS,
  payload: videos
})

// photos section action creators/constants
const receiveFashionPhotos = (photos) => ({
  type: RECEIVE_FASHION_PHOTOS,
  payload: photos
})

const receiveComPhotos = (photos) => ({
  type: RECEIVE_COM_PHOTOS,
  payload: photos
})

const receiveProjPhotos = (photos) => ({
  type: RECEIVE_PROJ_PHOTOS,
  payload: photos
})

const receiveShowsPhotos = (photos) => ({
  type: RECEIVE_SHOWS_PHOTOS,
  payload: photos
})

const receivePortPhotos = (photos) => ({
  type: RECEIVE_PORT_PHOTOS,
  payload: photos
})

// design section action creators/constants
const receiveAlbumDesigns = (designs) => ({
  type: RECEIVE_ALBUM_DESIGNS,
  payload: designs
})

const receiveBrandsDesigns = (designs) => ({
  type: RECEIVE_BRANDS_DESIGNS,
  payload: designs
})

const receiveComDesigns = (designs) => ({
  type: RECEIVE_COM_DESIGNS,
  payload: designs
})


// action creator
export const fetchPost = (options) => {

  return (dispatch) => {
    const {postType, tags, requestType} = options 
    // contentType should be a string like 'design/commercial' or 'video/musicvideos'

    const payload = tumblrClient.blogPosts('vvvisualvandals', {type: postType, tag: tags }).then(resp => resp.posts, error => error)

    switch(requestType) {
      case 'video/musicvideos': 
        return dispatch(receiveMusicVideos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`, error)})
      case 'video/recap':
        return dispatch(receiveRecapVideos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'video/documentary':
        return dispatch(receiveDocVideos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'video/projects':
        return dispatch(receiveProjVideos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'photo/fashion':
        return dispatch(receiveFashionPhotos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'photo/commercial':
        return dispatch(receiveComPhotos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'photo/projects': 
        return dispatch(receiveProjPhotos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'photo/shows':
        return dispatch(receiveShowsPhotos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'photo/portrait':
        return dispatch(receivePortPhotos(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'design/albumartwork':
        return dispatch(receiveAlbumDesigns(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'design/brands':
        return dispatch(receiveBrandsDesigns(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      case 'design/commercial':
        return dispatch(receiveComDesigns(payload)).catch(error => { console.log(`there was an error in fetchPost with requestType : ${requestType}`,error)})
      default:
        dispatch({})
    }
  }
}





