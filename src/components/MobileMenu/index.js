import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'

export default class MobileMenu extends Component {
  render() {
    const { position } = this.props;
    return(
      <div className="bg-black z-overlay fixed t0 l0 r0 b0 w100 h100 flex flex-column justify-center center"
      style={{
              WebkitTransform: `translate3d(${position}%, 0, 0)`,
              transform: `translate3d(${position}%, 0, 0)`,
            }}
      >

      <div class="absolute t0 r0 p3 pointer" onClick={() => this.props.toggle()}>
        <p class="echomotors text-white bold text-md">
          x
        </p>
      </div>
      <div className="flex flex-column items-center max-width-4 mx-auto center">
        <Link to="/announcements">
          <p className="echomotors bold text-sm text-white center" onClick={() => this.props.toggle()}>
            Announcements
          </p>
        </Link>
        <Link to="/info">
          <p className="echomotors bold text-sm text-white center" onClick={() => this.props.toggle()}>
            Info
          </p>
        </Link>
        <Link to="/visual">
          <p className="echomotors bold text-sm text-white center" onClick={() => this.props.toggle()}>
            Visual
          </p>
        </Link>
        <Link to="/global">
          <p className="echomotors bold text-sm text-white center" onClick={() => this.props.toggle()}>
            Global
          </p>
        </Link>        
      </div>

      </div>
    )
  }
}