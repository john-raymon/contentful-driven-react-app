import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import HamburgerIcon from './../../assets/svgs/HamburgerIcon'
import logo from 'assets/logo-white.png'

const Nav = () => (
  <nav className="Nav fixed w100 pt2 pb2 px3 z-nav">
    <div className="w100 flex flex-row items-center justify-between border-bottom border-medium border-white px1 mx-auto max-width-3">
      <div className="text-decoration-none">
        <Link to="/home">
          <div className="Logo__container">
            <img src={logo} className="w100" />  
          </div>
        </Link>
      </div>

      <div className="max-width-4" style={{width: "66%"}}>
        <ul class="list-reset flex flex-row overflow-scroll">
          <li class="pl2 py2 flex-grow flex flex-column">
            <a class="right" href="/announcements">
              <p class="inline-block echomotors bold text-white right text-xxs">
              Announcements
              </p>
            </a>     
          </li>
          <li class="pl2 py2 flex-grow flex flex-column"> 
            <a class="right" href="/info">
              <p class="inline-block echomotors bold text-white right text-xxs">
                Info
              </p>
            </a>      
          </li>
          <li class="pl2 py2 flex-grow flex flex-column">
            <a class="right" href="/visual">
              <p class="inline-block echomotors bold text-white right text-xxs">
                Visual
              </p>
            </a>      
          </li>
          <li class="pl2 py2 flex-grow flex flex-column"> 
            <a class="right" href="/global">
              <p class="inline-block echomotors bold text-white right text-xxs">
                Global
              </p>
            </a>      
          </li>
          <li class="pl2 py2 flex-grow flex flex-column"> 
            <a class="right" href="/store">
              <p class="inline-block echomotors bold text-white right text-xxs">
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