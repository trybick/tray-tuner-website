import React from "react";
import SectionHeader from "./section-header";
import { COLORS } from "../styles/constants";
import trayScreenshot from "../images/screenshots/tray.png";

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader title="Built with Electron" description="Supports macOS, Windows, and Linux" />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>One click to play/pause from system tray</h3>
        <p style={{ color: COLORS.gray }}>
          Control your music with the UI, keyboard shortcuts, or from the system tray.
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
