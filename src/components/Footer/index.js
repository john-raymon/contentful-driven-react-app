import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import TwitterIcon from './../../assets/svgs/TwitterIcon'
import InstagramIcon from './../../assets/svgs/InstagramIcon'
import TumblrIcon from './../../assets/svgs/TumblrIcon'
const Footer = () => (
  <div className="Footer bg-black flex flex-column justify-center">
    <ul className="list-reset flex flex-column items-center mb4"> 
      <li className="py1">
        <div className="SocialIcon__container">
          <TwitterIcon />
        </div>
      </li>
      <li className="py1">
        <div className="SocialIcon__container">
          <InstagramIcon />
        </div>
      </li>
      <li className="py1">
        <div className="SocialIcon__container">
          <TumblrIcon />
        </div>
      </li>    
    </ul>
    <p className="worksans text-white center text-xsm">
      Copyright &copy; 2018 <span className="echomotors"> VVV </span> 
    </p>
  </div>
)

export default Footer;