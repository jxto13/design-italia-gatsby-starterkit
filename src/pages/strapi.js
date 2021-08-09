import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiArticles {
    edges {
      node {
        id
        title
      }
    }
  }
  }
`;

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={data => (
      <ul>
        {data.allStrapiArticles.edges.map(restaurant => (
          <li key={restaurant.node.id}>{restaurant.node.title}</li>
        ))}
      </ul>
    )}
  />
);

export default IndexPage;