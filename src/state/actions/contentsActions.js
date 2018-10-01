import Data from 'lib/Data';

export const FETCH_CONTENTFUL_ANNOUNCEMENTS = 'FETCH_CONTENTFUL_ANNOUNCEMENTS';
export const fetchContentfulAnnouncements = () => dispatch => {
  return dispatch({
    type: FETCH_CONTENTFUL_ANNOUNCEMENTS,
    payload: Data.getEntries({
      content_type: 'blockAnnouncementHero',
      include: 4
    })
  });
};

export const FETCH_CONTENTFUL_VIDEOS = 'FETCH_CONTENTFUL_VIDEOS';
export const fetchContentfulVideos = () => dispatch => {
  return dispatch({
    type: FETCH_CONTENTFUL_VIDEOS,
    payload: Data.getEntries({
      content_type: 'video',
      include: 4
    })
  });
};

export const FETCH_CONTENTFUL_PHOTOS = 'FETCH_CONTENTFUL_PHOTOS';
export const fetchContentfulPhotos = () => dispatch => {
  return dispatch({
    type: FETCH_CONTENTFUL_PHOTOS,
    payload: Data.getEntries({
      content_type: 'photo',
      include: 4
    })
  });
};

export const FETCH_CONTENTFUL_DESIGNS = 'FETCH_CONTENTFUL_DESIGNS';
export const fetchContentfulDesigns = () => dispatch => {
  return dispatch({
    type: FETCH_CONTENTFUL_DESIGNS,
    payload: Data.getEntries({
      content_type: 'design',
      include: 4
    })
  });
};