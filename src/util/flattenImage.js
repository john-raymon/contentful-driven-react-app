import get from './get';

export default imageFile => ({
  title: get(imageFile, 'fields.title', ''),
  description: get(imageFile, 'fields.description', ''),
  url: get(imageFile, 'fields.file.url', '')
});