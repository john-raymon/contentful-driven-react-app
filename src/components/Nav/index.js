import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import HamburgerIcon from './../../assets/svgs/HamburgerIcon'

const Nav = () => (
  <nav className="Nav fixed w100 pt3 pb2 px3">
    <div className="w100 flex flex-row items-center justify-between border-bottom border-medium border-white pb1 px2 mx-auto max-width-3">
      <div className="text-decoration-none">
        <Link to="/home">
          <p className="echomotors text-white text-md">VVV</p>
        </Link>
      </div>
      <div className="HamburgerIcon__container fill-white"> 
        <HamburgerIcon />
      </div>
    </div>
  </nav>
)

export default Nav;