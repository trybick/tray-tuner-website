import React from "react";
import { Link } from "gatsby";
import Button from "./button";
import SectionHeader from "./section-header";

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader title="Built with Electron" description="Supports macOS, Windows, and Linux" />
    <Link to="/docs/">
      {" "}
      <Button>Documentation</Button>
    </Link>
  </div>
);

export default CallToAction;
