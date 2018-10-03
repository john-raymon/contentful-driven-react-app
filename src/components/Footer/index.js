import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'; 
import TwitterIcon from './../../assets/svgs/TwitterIcon'
import InstagramIcon from './../../assets/svgs/InstagramIcon'
import TumblrIcon from './../../assets/svgs/TumblrIcon'
const Footer = (props) => (
  <div className="Footer bg-black flex flex-column justify-center w100">
    <ul className="list-reset flex flex-column items-center mb4"> 
      <li className="py1">
        <a href={`${props.globals.twitterLink}`}>
          <div className="SocialIcon__container">
            <TwitterIcon />
          </div>
        </a>
      </li>
      <li className="py1">
        <a href={`${props.globals.instagramLink}`}>
          <div className="SocialIcon__container">
            <InstagramIcon />
          </div>
        </a>
      </li>
      <li className="py1">
        <a href={`${props.globals.tumblrLink}`}>
          <div className="SocialIcon__container">
            <TumblrIcon />
          </div>
        </a>
      </li>    
    </ul>
    <p className="worksans text-white center text-xxs">
      Copyright &copy; 2018 VVVISUAL VANDALS 
    </p>
  </div>
)

export default Footer;