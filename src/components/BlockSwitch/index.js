import React from 'react'

import get from 'util/get'

import Hero from 'components/Hero'
import InfoContainer from 'components/InfoBlock'
import VisualContainer from 'components/VisualBlock'
import GlobalContainer from 'components/GlobalBlock'
import AnnouncementsGrid from 'components/AnnouncementsGrid'
import AnnouncementHero from 'components/AnnouncementHero'
import Markdown from 'components/Markdown'
import MarkdownTransparent from 'components/MarkdownTransparent'
import VisualMenu from 'components/VisualMenu'
import VideoMenu from 'components/VideoMenu'
import PhotoMenu from 'components/PhotoMenu'
import DesignMenu from 'components/DesignMenu'
import VideoGrid from 'components/VideoGrid'
import PhotoGrid from 'components/PhotoGrid'
import DesignGrid from 'components/DesignGrid'
import InfoMenu, { TeamPhotos } from 'components/InfoMenu'
import Clients from 'components/Clients'
import { ComingSoonNotFixed } from 'components/ComingSoon'

const BlockSwitch = props => {
  const { block } = props;
  const type = get(block, 'sys.contentType.sys.id');
  const blockFields = get(block, 'fields', {});
  const globals = get(props, 'globals', {});

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
    case 'blockFixedContent': 
      const fixedBlockType = get(block, 'fields.contentType', '');
      switch (fixedBlockType) {
        case 'Announcement Article Hero':
          const announcement = get(props, 'announcement', {})
          return <AnnouncementHero block={block} announcement={announcement} />     
        case 'Visual Menu':
          return <VisualMenu />
        case 'Video Menu':
          return <VideoMenu />
        case 'Photo Menu': 
          return <PhotoMenu />
        case 'Design Menu':
          return <DesignMenu />
        case 'Info Menu':
          const memberPhotos = get(globals, 'memberPhotos', []);
          return <InfoMenu memberPhotos={memberPhotos} />
        case 'Coming Soon Globe':
          return <ComingSoonNotFixed />;
        case 'Team Photos':
          const memberPhotos = get(globals, 'memberPhotos', []);
          return <TeamPhotos memberPhotos={memberPhotos} />
        default:
          return null;
      }
    case 'blockMarkdown':
      return <Markdown block={block} />
    case 'blockMarkdownTransparent':
      return <MarkdownTransparent block={block} />
    case 'videoGrid':
      return <VideoGrid block={block} />
    case 'photoGrid':
      return <PhotoGrid block={block} />
    case 'designGrid':
      return <DesignGrid block={block} />
    case 'blockClients':
      return <Clients block={block} />
    default:
      return null;
  }
};

export default BlockSwitch;
