import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby'

import Layout from '../components/layout';
import ReactMarkdown from 'react-markdown'


const Template = ({ data }) => {
  const post = data.allStrapiArticles.edges[0].node; //query da slug e desconstruçao do array

  const gfm = require('remark-gfm')
  return (
    <Layout>
      <h1>PDF Example with iframe</h1>
      <iframe src={"http://localhost:1337" + post.image.url} width="100%" height="500px">
      </iframe>
      <div>{post.image.url}</div>
      <ReactMarkdown remarkPlugins={[gfm]} children={post.content} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    allStrapiArticles(filter: { slug: { eq: $slug } }) {
      edges {
      node {
        title
        content
        image{
          url
        }
      }
    }
  }
  }
`;

export default Template;