import React, { Component } from 'react'

import get from 'util/get'
import flattenImage from 'util/flattenImage'


const AnnouncementHero = ({announcement}) => {
  console.log('comp. of announ hero', announcement)
  const title = get(announcement, 'title', '');
  const description = get(announcement, 'description', '');
  const coverImage = get(announcement, 'backgroundImage', {});
  const { url: src, description: alt } = flattenImage(coverImage);
  return ( 
    <div className="Announcement__hero relative flex flex-column justify-end pb3 px2"
    style={{
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '40vh'        
    }}>
      <div class="absolute t0 l0 b0 r0 bg-black-wash">
      </div>
      <div class="max-width-3 w100 mx-auto">
        <p class="relative echomotors text-md text-white">
          { title }
        </p>
        <p class="relative worksans text-xsm text-white">
          { description }
        </p>
      </div>
    </div>
  )
}

export default AnnouncementHero;
