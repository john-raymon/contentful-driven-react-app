import { createSelector } from 'reselect'
import get from 'util/get'
import videos from './videos'


export default createSelector(
  state => videos(state),
  (state, handle) => handle,
  (videos, handle) => 
    Object.values(videos).find(video => {
      const videoSlug = get(video, 'slug', '');
      return videoSlug && videoSlug === handle;
    })
);