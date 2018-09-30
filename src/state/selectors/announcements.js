import { createSelector } from 'reselect'
import get from 'util/get'

export default createSelector(
  state => get(state, 'contents.announcements', {}),
  (announcements) => {
    const contents = get(announcements, 'items', [])

    return contents.reduce((flattenedContents, announcement) => {
      const slug = get(announcement, 'fields.slug', '');
      const title = get(announcement, 'fields.elementTitle', '');
      const description = get(announcement, 'fields.elementDescription', '');
      const backgroundImage = get(announcement, 'fields.elementBackgroundImage', {});
      const contentBlocks = get(announcement, 'fields.contentBlocks', [])
      flattenedContents[slug] = {
        slug,
        title,
        description,
        backgroundImage,
        contentBlocks
      }
      return flattenedContents;
    }, {})
  }
);