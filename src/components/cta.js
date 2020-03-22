import React from 'react';
// import { Link } from "gatsby";
import Button from './button';
import SectionHeader from './section-header';
import { COLORS } from '../styles/constants';

const documentationLink = 'https://github.com/trybick/tray-tuner#tray-tuner';

const CallToAction = () => (
  <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
    <SectionHeader description="Supports macOS, Windows, and Linux" title="Free and open-source" />

    {/* <>
      <h2>Built with Electron</h2>
      <ul>
        <li style={{ color: COLORS.mediumGray }}>Supports macOS, Windows, and Linux</li>

        <li style={{ color: COLORS.mediumGray }}>Free and open source</li>
      </ul>
    </> */}

    <Button to={documentationLink}>How to Use</Button>

    {/* <Link to="/docs/">Go to Page 2 (docs)</Link> */}
  </div>
);

export default CallToAction;
