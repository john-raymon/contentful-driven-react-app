import { createSelector } from 'reselect'
import get from 'util/get'

export default createSelector(
  state => get(state, 'contents.designs', {}),
  (designs) => {
    const contents = get(designs, 'items', [])

    return contents.reduce((flattenedContents, design) => {
      const slug = get(design, 'fields.slug', '');
      const title = get(design, 'fields.title', '');
      const description = get(design, 'fields.description', '');
      const photoFile = get(design, 'fields.photoFile', {});
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