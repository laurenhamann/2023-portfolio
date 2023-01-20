const path = require("path")
const postTemplate = path.resolve(`./src/templates/blog-post.js`)
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
  
    // Get all markdown blog posts sorted by date
    const result = await graphql(`
      {
        allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
          nodes {
            id
            frontmatter {
                slug
            }
          }
        }
      }
    `)
  

    if (result.errors) {
        reporter.panicOnBuild(
          `There was an error loading your blog posts`,
          result.errors
        )
        return
      }

  // Create blog post pages.
  const posts = result.data.allMarkdownRemark.nodes
    
    if (posts.length > 0) {
        posts.forEach((post, index) => {
          const slug = `/blog-hub/${post.frontmatter.slug}`
            createPage({
                path: slug,
                component: postTemplate,
                context: {
                  id: post.id
                },
            })
        })
    }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
  
    // Explicitly define the siteMetadata object
    // This way those will always be defined even if removed from gatsby-config.js
  
    // Also explicitly define the Markdown frontmatter
    // This way the "MarkdownRemark" queries will return `null` even when no
    // blog posts are stored inside "content/blog" instead of returning an error
  
    createTypes(`
        type SiteSiteMetadata {
            author: Author
            siteUrl: String
        }
  
        type Author {
            name: String
            summary: String
        }
  
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
        }
  
        type Frontmatter {
            title: String
            date: Date @dateformat
            slug: String
        }
    `)
}