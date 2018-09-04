import tumblrClient from '../util/configtumblr'
// videos section action creators/constants
const RECEIVE_MUSIC_VIDEOS = 'RECEIVE_MUSIC_VIDEOS'
const receiveMusicVideos = (videos) => ({
  type: RECEIVE_MUSIC_VIDEOS,
  payload: videos
})

const RECEIVE_RECAP_VIDEOS = 'RECEIVE_RECAP_VIDEOS'
const receiveRecapVideos = (videos) => ({
  type: RECEIVE_RECAP_VIDEOS,
  payload: videos
})

const RECEIVE_DOC_VIDEOS = 'RECEIVE_DOC_VIDEOS'
const receiveDocVideos = (videos) => ({
  type: RECEIVE_DOC_VIDEOS,
  payload: videos
})

// photos section action creators/constants
const RECEIVE_FASHION_PHOTOS = 'RECEIVE_FASHION_PHOTOS'
const receiveFashionPhotos = (photos) => ({
  type: RECEIVE_FASHION_PHOTOS,
  payload: photos
})

const RECEIVE_COM_PHOTOS = 'RECEIVE_COM_PHOTOS'
const receiveComPhotos = (photos) => ({
  type: RECEIVE_COM_PHOTOS,
  payload: photos
})

const RECEIVE_PROJ_PHOTOS = 'RECEIVE_PROJ_PHOTOS'
const receiveProjPhotos = (photos) => ({
  type: RECEIVE_PROJ_PHOTOS,
  payload: photos
})

const RECEIVE_SHOWS_PHOTOS = 'RECEIVE_SHOWS_PHOTOS'
const receiveShowsPhotos = (photos) => ({
  type: RECEIVE_SHOWS_PHOTOS,
  payload: photos
})

const RECEIVE_PORT_PHOTOS = 'RECEIVE_PORT_PHOTOS'
const receivePortPhotos = (photos) => ({
  type: RECEIVE_PORT_PHOTOS,
  payload: photos
})

// design section action creators/constants
const RECEIVE_ALBUM_DESIGNS = 'RECEIVE_ALBUM_DESIGNS'
const receiveAlbumDesigns = (designs) => ({
  type: RECEIVE_ALBUM_DESIGNS,
  payload: designs
})

const RECEIVE_BRANDS_DESIGNS = 'RECEIVE_BRANDS_DESIGNS'
const receiveBrandsDesigns = (designs) => ({
  type: RECEIVE_BRANDS_DESIGNS,
  payload: designs
})

const RECEIVE_COM_DESIGNS = 'RECEIVE_COM_DESIGNS'
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
      default:
        dispatch({})
    }
  }
}





