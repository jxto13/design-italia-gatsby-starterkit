import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allStrapiArticles.edges
    return (
      <Layout>
        {posts.map(({ node }) => {
          const title = node.title || node.fields.slug
          return (
            <div>
              <Link key={node.slug} to={node.slug}>{title}</Link>
            </div>
          );
        })}
      </Layout>
    )
  }
}
export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allStrapiArticles(
      sort: { fields: [created_at], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
            slug
            title
        }
      }
    }
  }
`