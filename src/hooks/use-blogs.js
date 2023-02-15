import { graphql, useStaticQuery } from "gatsby";

const useBlogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  `);
  return data.allMarkdownRemark.nodes.map((post) => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    slug: post.frontmatter.slug,
  }));
};

// go to graphiql and see how to query for awards
export default useBlogs;
