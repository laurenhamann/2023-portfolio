import React from "react";
import { Link, graphql } from "gatsby"
import Layout from "../components/layout";
import { SmallIntro } from "../components/small-intro";
import { Contact } from '../components/contact'

const BlogPostTemplate = ({
    data: { markdownRemark: post },
    }) => {
    return (
      <Layout>
      <SmallIntro />
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </div>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className="article-section"
          />
        </article>
        <Contact />
      </Layout>
    )
  }

    export default BlogPostTemplate;
    export const pageQuery = graphql`
    query BlogPostBySlug(
        $id: String!
    ) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            excerpt(pruneLength: 160)
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            } 
        }
    }
`


