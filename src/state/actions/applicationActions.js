import ContentfulClient from './../../lib/Contentful';
import Data from './../../lib/Data';

import {
  fetchContentfulContent
} from './contentActions';

export const INITIALIZE_APPLICATION = 'INITIALIZE_APPLICATION';
export const initializeApplication = () => dispatch => {
  return dispatch({
    type: INITIALIZE_APPLICATION,
    payload: new Promise((resolve, reject) => {
      const Contentful = ContentfulClient();
      Data.setRef('contentful', Contentful);

      const fetchData = Promise.all([
        dispatch(fetchContentfulContent())
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