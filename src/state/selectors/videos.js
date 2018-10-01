import { createSelector } from 'reselect'
import get from 'util/get'

export default createSelector(
  state => get(state, 'contents.videos', {}),
  (videos) => {
    const contents = get(videos, 'items', [])

    return contents.reduce((flattenedContents, video) => {
      const slug = get(video, 'fields.slug', '');
      const title = get(video, 'fields.title', '');
      const description = get(video, 'fields.description', '');
      const videoFile = get(video, 'fields.videoFile', {});
      const thumbnail = get(video, 'fields.thumbnail', {});
      flattenedContents[slug] = {
        slug,
        title,
        description,
        videoFile,
        thumbnail
      }
      return flattenedContents;
    }, {})
  }
);