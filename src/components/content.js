import React from "react";
import SectionHeader from "./section-header";
import { COLORS } from "../styles/constants";
import trayScreenshot from "../images/screenshots/tray.png";

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="One-click play from system tray"
      description="Control from user-interface, keyboard shorcuts, and system tray."
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
        <h3>Built with Electron</h3>
        <p style={{ color: COLORS.gray }}>Supports macOS, Window, & Linux</p>
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
