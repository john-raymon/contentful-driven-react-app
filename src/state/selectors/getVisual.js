import { createSelector } from 'reselect'
import photo from './photo'
import video from './video'
import design from './design'
import get from 'util/get'

export default createSelector(
  (state, props) => get(props, 'match.params.visualType', ''),
  (state, props) => get(props, 'match.params.visualHandle', ''),
  state => state,
  (type, handle, state) => {
    switch (type) {
      case 'video':
        return video(state, handle);
      case 'design':
        return design(state, handle);
      case 'photo':
        return photo(state, handle);
      default: 
        return null;
    }
    // do a switch to find out which selector video/photo/design to hit
    // then use visualHandle with selector figured out
  }
);