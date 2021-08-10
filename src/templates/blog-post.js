import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby'

import Layout from '../components/layout';
import ReactMarkdown from 'react-markdown'


const blog = ({ pageContext }) => {
  const post = pageContext;
  const gfm = require('remark-gfm')
  return (
    <Layout>
      <ReactMarkdown remarkPlugins={[gfm]} children={post.content} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default blog;