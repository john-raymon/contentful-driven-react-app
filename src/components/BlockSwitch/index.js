import React from 'react';

import get from './../../util/get';
import Hero from './../Hero'

const BlockSwitch = props => {
  const { block } = props;
  const type = get(block, 'sys.contentType.sys.id');
  const blockFields = get(block, 'fields', {});

  switch (type) {
    case 'blockAnnouncementHero':
      return <Hero block={block} />;
    default:
      return null;
  }
};

export default BlockSwitch;
