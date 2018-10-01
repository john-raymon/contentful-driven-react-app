import React, { Component } from 'react';

import get from 'util/get';
import BlockSwitch from 'components/BlockSwitch';

class AnnouncementView extends Component {
  render() {
    const { model, announcement } = this.props;
    if (model.isError) return <h1>Error</h1>;
    if (!announcement) return <h1>Announcement not found</h1>;
    const { contentBlocks } = announcement;
    return (
      <div className="w100 bg-white">
        {contentBlocks &&
          contentBlocks.map((block, i) => (
            <BlockSwitch
              key={`${i}-${get(block, 'sys.id', i)}`}
              block={block}
              announcement={announcement}
            />
          ))}
      </div>
    );
  }
}

export default AnnouncementView;