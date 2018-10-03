import { createSelector } from 'reselect';
import get from 'util/get';

export default createSelector(
  state => get(state, 'application.globalSettings', {}),
  globalSettings => {
    const globals = get(globalSettings, 'items[0].fields', {});
    
    return {
      twitterLink: get(globals, 'twitterLink', ''),
      instagramLink: get(globals, 'instagramLink', ''),
      tumblrLink: get(globals, 'tumblrLink', ''),
      memberPhotos: get(globals, 'memberPhotos', [])
    };
  }
);