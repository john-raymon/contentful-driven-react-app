import React, { Fragment} from 'react'
import { Link } from 'react-router-dom'

const VideoContainer = () => (
      <Fragment>
        <h1>Videos</h1>
        <ul>
          <li>
            <Link to="/visual/video/music-videos">
              <p>Music Videos</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/video/recap">
              <p>Recap</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/video/documentary">
              <p>Documentary</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/video/projects">
              <p>Projects</p>
            </Link>
          </li>
        </ul>
      </Fragment>
)
export default VideoContainer