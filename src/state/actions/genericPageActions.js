import Data from './../../lib/Data';

export const FETCH_GENERIC_PAGE = 'FETCH_GENERIC_PAGE';
export const fetchGenericPage = slug => dispatch => {
  return dispatch({
    type: FETCH_GENERIC_PAGE,
    payload: Data.getEntries({
      content_type: 'genericPage',
      'fields.slug': slug,
      include: 4
    })
  });
};
