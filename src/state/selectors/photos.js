import { createSelector } from 'reselect'
import get from 'util/get'

export default createSelector(
  state => get(state, 'contents.photos', {}),
  (photos) => {
    const contents = get(photos, 'items', [])

    return contents.reduce((flattenedContents, photo) => {
      const slug = get(photo, 'fields.slug', '');
      const title = get(photo, 'fields.title', '');
      const description = get(photo, 'fields.description', '');
      const photoFile = get(photo, 'fields.photoFile', {});
      flattenedContents[slug] = {
        slug,
        title,
        description,
        photoFile
      }
      return flattenedContents;
    }, {})
  }
);