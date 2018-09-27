import Data from './../../lib/Data';

export const FETCH_CONTENTFUL_CONTENT = 'FETCH_CONTENTFUL_CONTENT';
export const fetchContentfulContent = () => dispatch => {
  return dispatch({
    type: FETCH_CONTENTFUL_CONTENT,
    payload: Data.getEntries({
      content_type: 'visualVideo',
      include: 4
    })
  });
};