import { createSelector } from 'reselect'
import get from 'util/get'
import photos from './photos'


export default createSelector(
  state => photos(state),
  (state, handle) => handle,
  (photos, handle) => 
    Object.values(photos).find(photo => {
      const photoSlug = get(photo, 'slug', '');
      return photoSlug && photoSlug === handle;
    })
);