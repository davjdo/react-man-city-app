import React from 'react';
import { CityLogo } from '../UI/icons';

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div
        className="footer_logo"
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <CityLogo link={true} height="70px" width="70px" linkTo="/" />
      </div>
      <div className="footer_discl">
        Manchester city 2018. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
