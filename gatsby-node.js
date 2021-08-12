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
                  slug
              }
            }
          }`
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          
          const posts = result.data.allStrapiArticles.nodes;
          const postsPerPage = 2;
          const numPages = Math.ceil(posts.length / postsPerPage);
          Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
              path: i === 0 ? `/blog` : `/blog/${i + 1}`,
              component: path.resolve('./src/templates/blog-list-template.js'),
              context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
              },
            });
          });


          const allPosts = result.data.allStrapiArticles.nodes
          allPosts.forEach(blog => {
            const page = {
              path: `/${blog.slug}`,
              component: path.resolve(`./src/templates/blog-post.js`),
              context: {
                slug: blog.slug,
              }
            }
            createPage(page)
          })


        })
      )
    })
}
