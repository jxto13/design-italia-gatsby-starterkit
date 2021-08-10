/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {

      resolve(
        graphql(
          `{
            allStrapiArticles {
              nodes{
                  id
                  title
                  slug
                  content
              }
            }
          }`
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const allPosts = result.data.allStrapiArticles.nodes
          allPosts.forEach(blog => {
            const page = {
              path: `/${blog.slug}`,
              component: path.resolve(`./src/templates/blog-post.js`),
              context: {
                title: blog.title,
                slug: blog.slug,
                content: blog.content
              }
            }
            createPage(page)
          })
        })
      )
    })
}
