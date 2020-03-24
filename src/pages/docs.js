/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
    <div className="docs-wrapper">
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }}
      />
    </div>
  </Layout>
);

export default DocsPage;
