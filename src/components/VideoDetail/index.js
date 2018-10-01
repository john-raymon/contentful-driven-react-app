import React from 'react'
import get from 'util/get'


const VideoDetail = ({visual}) => {
  const title = get(visual, 'title', '');
  const description = get(visual, 'description', '');
  const src = get(visual, 'videoFile.fields.file.url', '');
  const srcType = get(visual, 'videoFile.fields.file.contentType', '');

  return (
    <div className='VideoDetail mx-auto w100 max-width-3 px2'>
      <p className="hero-title-text text-white py2">{ title }</p>
      <video className="h100 w100" controls>
        <source src={src} type={srcType} />
        Your browser does not support the video tag.
      </video>
      <p className="worksans text-sm text-white py2">
        { description }
      </p>
    </div>
  )
}

export default VideoDetail;