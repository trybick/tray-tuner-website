import React from "react";

import feature from "../images/feature.png";
import SectionHeader from "./section-header";
import { COLORS } from "../styles/constants";

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
        <h3>Simple and Powerful</h3>
        <p style={{ color: COLORS.gray }}>
          Control your music with the UI, keyboard shortcuts, or from the system tray
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
);

export default Content;
