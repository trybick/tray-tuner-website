import React, { useEffect, useState } from 'react';
import marked from 'marked';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const fetch = require('node-fetch');

const DocsPage = () => {
  const [markdownToRender, setMarkdownToRender] = useState();

  useEffect(() => {
    const docsMarkdownPath = require('../markdown/docs.md');

    // fetch(docsMarkdownPath)
    //   .then(response => {
    //     console.log('response:', response);
    //     return response.text();
    //   })
    //   .then(text => {
    //     console.log('text:', text);
    //     setMarkdownToRender(marked(text));
    //   });
  }, []);

  return (
    <Layout>
      <SEO />
      {/* <Link to="/">Go back to the homepage</Link> */}

      <div className="docs-wrapper">
        <div className="markdown-body">Placeholder</div>
      </div>
    </Layout>
  );
};

export default DocsPage;
