import React from 'react'
import get from 'util/get'
import BlockSwitch from 'components/BlockSwitch'

const PhotoDetail = ({visual}) => {
  const title = get(visual, 'title', '');
  const description = get(visual, 'description', '');
  const src = get(visual, 'photoFile.fields.file.url', '');
  const contentBlocks = get(visual, 'contentBlocks', []);

  return (
    <div className='PhotoDetail mx-auto w100 max-width-3 px2'>
      <p className="echomotors text-sm bold text-white py2">{ title }</p>
      <div className="w100">
        <img src={`${src}?w=500`} className="w100" />
      </div>
      <p className="worksans text-sm text-white py2">
        { description }
      </p>
      {
        contentBlocks &&
        contentBlocks.map((block, i) => (
          <BlockSwitch
            key={`${i}-${get(block, 'sys.id', i)}`}
            block={block}
          />
        ))
      }
    </div>
  )
}

export default PhotoDetail;
