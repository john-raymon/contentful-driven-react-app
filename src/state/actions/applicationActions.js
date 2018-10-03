import ContentfulClient from 'lib/Contentful';
import Data from 'lib/Data';

import {
  fetchContentfulAnnouncements,
  fetchContentfulPhotos,
  fetchContentfulVideos,
  fetchContentfulDesigns
} from './contentsActions';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = () => dispatch => {
  return dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise((resolve, reject) => {
      const Contentful = ContentfulClient();
      Data.setRef('contentful', Contentful);

      const fetchData = Promise.all([
        dispatch(fetchGlobalSettings()),
        dispatch(fetchContentfulAnnouncements()),
        dispatch(fetchContentfulPhotos()),
        dispatch(fetchContentfulDesigns()),
        dispatch(fetchContentfulVideos())
      ]);

      const timeout = new Promise((resolve, reject) => {
        setTimeout(() => reject('Timeout'), 10000);
      });

      const checkTimeout = Promise.race([fetchData, timeout]);
      return checkTimeout
        .then(([globals]) => resolve())
        .catch(err => reject(err));
    })
  });
};


export const FETCH_GLOBAL_SETTINGS = 'FETCH_GLOBAL_SETTINGS';
export const fetchGlobalSettings = () => dispatch => {
  return dispatch({
    type: FETCH_GLOBAL_SETTINGS,
    payload: Data.getEntries({ content_type: 'globals' })
  });
};