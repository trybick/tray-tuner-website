import React from "react";
import PropTypes from "prop-types";

import Button from "../components/button";
import headerImage from "../images/header.png";
import appScreenshot from "../images/app-screenshot.png";
import MockupContent from "./image";
import mockupFrame from "../images/mockup-frame.png";

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>Tray Tuner</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      A desktop application to control online radio streams.
    </p>
    <a
      href="https://drive.google.com/drive/folders/1uyz-Y-EZ8_Dw0jdy2QWyLeq5TK0wBp-T?usp=sharing"
      target="_blank"
    >
      <Button>Download</Button>
    </a>
    <div>
      <img src={appScreenshot} alt="app screenshot" />
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
