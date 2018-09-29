import React from 'react'

import get from 'util/get'
import Hero from 'components/Hero'
import InfoContainer from 'components/InfoBlock'
import VisualContainer from 'components/VisualBlock'

const BlockSwitch = props => {
  const { block } = props;
  const type = get(block, 'sys.contentType.sys.id');
  const blockFields = get(block, 'fields', {});

  switch (type) {
    case 'blockAnnouncementHero':
      return <Hero block={block} />;
    case 'blockInfoContainer':
      return <InfoContainer block={block} />
    case 'blockVisualContainer':
      return <VisualContainer block={block} />
    default:
      return null;
  }
};

export default BlockSwitch;
