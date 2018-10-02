import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import HamburgerIcon from './../../assets/svgs/HamburgerIcon'

const Nav = () => (
  <nav className="Nav fixed w100 pt3 pb2 px3 z-nav">
    <div className="w100 flex flex-row items-center justify-between border-bottom border-medium border-white pb1 px2 mx-auto max-width-3">
      <div className="text-decoration-none">
        <Link to="/">
          <p className="echomotors text-white text-md">VVV</p>
        </Link>
      </div>

      <div className="max-width-4" style={{width: "72%"}}>
        <ul class="list-reset flex flex-row overflow-scroll">
          <li class="pl2 py2 flex-grow flex flex-column">
            <a class="right" href="/announcements">
              <p class="inline-block echomotors bold border-bottom border-large border-black text-white right">
              Announcements
              </p>
            </a>     
          </li>
          <li class="pl2 py2 flex-grow flex flex-column"> 
            <a class="right" href="/info">
              <p class="inline-block echomotors bold border-bottom border-large border-black text-white right">
                Info
              </p>
            </a>      
          </li>
          <li class="pl2 py2 flex-grow flex flex-column">
            <a class="right" href="/visual">
              <p class="inline-block echomotors bold border-bottom border-large border-black text-white right">
                Visual
              </p>
            </a>      
          </li>
          <li class="pl2 py2 flex-grow flex flex-column"> 
            <a class="right" href="/global">
              <p class="inline-block echomotors bold border-bottom border-large border-black text-white right">
                Global
              </p>
            </a>      
          </li>
          <li class="pl2 py2 flex-grow flex flex-column"> 
            <a class="right" href="/store">
              <p class="inline-block echomotors bold border-bottom border-large border-black text-white right">
                Store
              </p>
            </a>      
          </li>
        </ul>
      </div>

    </div>
  </nav>
)

export default Nav;

// <div className="HamburgerIcon__container fill-white"> 
//         <HamburgerIcon />
//         </div>