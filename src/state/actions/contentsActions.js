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