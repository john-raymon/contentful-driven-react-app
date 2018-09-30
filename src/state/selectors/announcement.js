import { createSelector } from 'reselect'
import get from 'util/get'
import announcements from 'state/selectors/announcements'


export default createSelector(
  state => announcements(state),
  (state, props) => get(props, 'match.params.announcementHandle', ''),
  (announcements, handle) => 
    Object.values(announcements).find(announcement => {
      const announcementSlug = get(announcement, 'slug', '');
      return announcementSlug && announcementSlug === handle;
    })
);