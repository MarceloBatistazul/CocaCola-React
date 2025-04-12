import React from "react";
import facebook from '../assets/img/facebook.png'; //
import instagram from '../assets/img/instagram.png'; //
import twitter from '../assets/img/twitter.png'; //

export const SocialMedia: React.FC = () => {
    return (
      <ul className="social-media">
        <li><a href="#"><img src={facebook} alt="Facebook" /></a></li>
        <li><a href="#"><img src={instagram} alt="Instagram" /></a></li>
        <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
      </ul>
    );
  };
  