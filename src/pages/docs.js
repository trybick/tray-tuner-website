/* eslint-disable react/no-danger */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Button from '../components/button';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/docs.css';

export const pageQuery = graphql`
  query DocsPageQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const DocsPage = ({ data }) => (
  <Layout>
    <SEO />
    <div>
      <div className="docs-wrapper">
        <div className="home-link-wrapper">
          <Link className="home-link" to="/">
            Tray Tuner home
          </Link>
        </div>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}
        />
      </div>
    </div>
  </Layout>
);

export default DocsPage;
