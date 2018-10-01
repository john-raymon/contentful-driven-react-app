import React from 'react'

import get from 'util/get'
import VideoDetail from 'components/VideoDetail'


const VisualTypeSwitch = props => {
  const type = get(props, 'type', '');
  const visual = get(props, 'visual', {})
  switch (type) {
    case 'video':
      return <VideoDetail visual={visual} />
    default:
      return <p>Visual Not Found!!</p>;
  }
};

export default VisualTypeSwitch;
