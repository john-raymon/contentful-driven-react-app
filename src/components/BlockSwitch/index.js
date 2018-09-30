import React from 'react'

import get from 'util/get'

import Hero from 'components/Hero'
import InfoContainer from 'components/InfoBlock'
import VisualContainer from 'components/VisualBlock'
import GlobalContainer from 'components/GlobalBlock'
import AnnouncementsGrid from 'components/AnnouncementsGrid'
import AnnouncementHero from 'components/AnnouncementHero'

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
    case 'blockGlobalContainer':
      return <GlobalContainer block={block} />
    case 'blockAnnouncementsGrid': 
      return <AnnouncementsGrid block={block} />
    case 'blockAnnouncementArticleHero': 
      const announcement = get(props, 'announcement', {})
      return <AnnouncementHero block={block} announcement={announcement} />
    default:
      return null;
  }
};

export default BlockSwitch;
