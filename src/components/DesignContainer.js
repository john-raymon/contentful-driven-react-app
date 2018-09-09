import React, { Fragment} from 'react'
import { Link } from 'react-router-dom'

const DesignContainer = () => (
      <Fragment>
        <h1>Design</h1>
        <ul>
          <li>
            <Link to="/visual/design/album-artwork">
              <p>Album Artwork</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/design/brands">
              <p>Brands</p>
            </Link>
          </li>
          <li>
            <Link to="/visual/design/commercial">
              <p>Commercial</p>
            </Link>
          </li>
        </ul>
      </Fragment>
)
export default DesignContainer