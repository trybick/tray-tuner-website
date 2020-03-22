import React from 'react';
// import { Link } from "gatsby";
import Button from './button';
import SectionHeader from './section-header';

const documentationLink = 'https://github.com/trybick/tray-tuner#tray-tuner';

const CallToAction = () => (
  <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
    <SectionHeader title="Built with Electron" description="Supports macOS, Windows, and Linux" />

    <Button to={documentationLink}>How to Use</Button>

    {/* <Link to="/docs/">Go to Page 2 (docs)</Link> */}
  </div>
);

export default CallToAction;
