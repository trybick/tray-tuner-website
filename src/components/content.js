import React from "react";
import SectionHeader from "./section-header";
import { COLORS } from "../styles/constants";
import trayScreenshot from "../images/screenshots/tray.png";

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Focus on the music"
      description="Simple control of your favorite online radio streams"
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Click-to-play tray icon</h3>
        <p style={{ color: COLORS.gray }}>
          Click the tray icon to toggle the music or use the built-in keyboard shortcuts
        </p>
      </div>
      <div>
        <img
          src={trayScreenshot}
          style={{ width: "50%" }}
          alt="a blank card floating over colorful graphics"
        />
      </div>
    </content>
  </div>
);

export default Content;
