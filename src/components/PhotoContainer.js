import React, { Fragment} from 'react'
import { Link } from 'react-router-dom'

const PhotoContainer = () => (
      <Fragment>
        <h1>Photo</h1>
        <ul>
          <li>
            <Link to="/visual/photo/fashion">
              <p>Fashion</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/photo/commercial">
              <p>Commercial</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/photo/projects">
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/photo/shows">
              <p>Shows</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/photo/portrait">
              <p>Portraits</p>
            </Link>
          </li>
        </ul>
      </Fragment>
)
export default PhotoContainer