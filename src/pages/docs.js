import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

// Not in use. Saving as an example of a second page.

const DocsPage = () => (
  <Layout>
    <SEO />
    {/* <Link to="/">Go back to the homepage</Link> */}

    <div className="docs-wrapper">
      <div className="markdown-body">Test Markdown</div>
    </div>
  </Layout>
);

export default DocsPage;
