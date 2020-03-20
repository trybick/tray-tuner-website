import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const DocsPage = () => (
  <Layout>
    <SEO />
    <h1>Hi from the second page</h1>
    <p>I m ay use this as docs page. Or I may use the GitHub repo for docs.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default DocsPage;
