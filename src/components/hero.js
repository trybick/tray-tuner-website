import React from 'react';
import headerImage from '../images/header.png';
import appScreenshot from '../images/screenshots/app-window.png';
import Button from './button';

const downloadsLink =
  'https://drive.google.com/drive/folders/1uyz-Y-EZ8_Dw0jdy2QWyLeq5TK0wBp-T?usp=sharing';

const Header = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '4rem 1rem 2rem',
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: 'absolute',
        top: 0,
        zIndex: -5,
        height: '100vh',
        width: '96vw',
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: 'center' }}>Tray Tuner</h1>
    <p style={{ textAlign: 'center', maxWidth: 440 }}>
      A desktop application to control online radio streams
    </p>
    <Button to={downloadsLink}>Download</Button>
    <div className="app-screenshot-wrapper">
      <img className="app-screenshot-image" src={appScreenshot} alt="app screenshot" />
    </div>
  </div>
);

export default Header;
