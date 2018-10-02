import React from 'react'
import get from 'util/get'


const PhotoDetail = ({visual}) => {
  const title = get(visual, 'title', '');
  const description = get(visual, 'description', '');
  const src = get(visual, 'photoFile.fields.file.url', '');

  return (
    <div className='PhotoDetail mx-auto w100 max-width-3 px2'>
      <p className="echomotors text-sm bold text-white py2">{ title }</p>
      <div className="w100">
        <img src={src} className="w100" />
      </div>
      <p className="worksans text-sm text-white py2">
        { description }
      </p>
    </div>
  )
}

export default PhotoDetail;