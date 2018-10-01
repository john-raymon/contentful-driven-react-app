import { createSelector } from 'reselect'
import get from 'util/get'
import designs from './designs'


export default createSelector(
  state => designs(state),
  (state, handle) => handle,
  (designs, handle) => 
    Object.values(designs).find(design => {
      const designSlug = get(design, 'slug', '');
      return designSlug && designSlug === handle;
    })
);