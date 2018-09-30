import React, { Component } from 'react'

import get from 'util/get'
import flattenImage from 'util/flattenImage'


const AnnouncementHero = ({announcement}) => {
  console.log('comp. of announ hero', announcement)
  const coverImage = get(announcement, 'backgroundImage', {});
  const { url: src, description: alt } = flattenImage(coverImage);
  return ( 
    <div className="Announcement__hero relative"
    style={{
      backgroundImage: `url(${src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: '40vh'        
    }}>
      <div class="absolute t0 l0 b0 r0 bg-black-wash">
      </div>

    </div>
  )
}

export default AnnouncementHero;
