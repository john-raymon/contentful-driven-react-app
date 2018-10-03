import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import arrow from 'assets/images/arrow.png'

export default class InfoMenu extends Component {
  render() {
    return(
      <div className="flex flex-column items-center max-width-4 mx-auto center">
        <Link to="/bio">
          <p className="echomotors bold text-sm text-white center">
            Bio
          </p>
        </Link>
        <img src={arrow} className="py1" style={{width: "10px"}} />
        <Link to="/creds">
          <p className="echomotors bold text-sm text-white center">
            Creds
          </p>
        </Link>
        <img src={arrow} className="py1" style={{width: "10px"}} />

        <div className="max-width-1 justify-center" >
          <ul class="list-reset flex flex-row overflow-scroll">
        {
          this.props.memberPhotos.map((photo, i) => {
            return (
              <li class=" flex-grow flex flex-column mx1">
                <div style={{
                  height: "5rem",
                  width: "5rem",
                  backgroundImage: `url(${photo.fields.file.url})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}>
                  
                </div>
              </li>
            )
          })
        }
        </ul>
        </div>
        <a href="mailto:info@vvvisualvandals.com">
          <p className="echomotors bold text-sm text-white center">
            Contact
          </p>
        </a>
      </div>
    )
  }
}