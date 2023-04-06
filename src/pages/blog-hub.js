import React from "react";
import Layout from "../components/layout";
import useBlogs from "../hooks/use-blogs";
import { Link } from "gatsby";
import { SmallIntro } from "../components/small-intro";
import { Contact } from "../components/contact";
import Seo from "../components/seo";
const BlogHub = () => {
  const posts = useBlogs();
  return (
    <Layout>
      <SmallIntro />
      <h1 id="blog-hub-title">Blog Hub</h1>
      <section id="blog-hub-section">
        {posts.map((p, i) => {
          const title = p.title;
          const date = p.date;
          const key = i;
          const slug = p.slug;
          return (
            <Link to={slug} key={key}>
              <div className="blog-link">
                <h2>{title}</h2>
                <small>{date}</small>
              </div>
            </Link>
          );
        })}
      </section>
      <Contact />
    </Layout>
  );
};

export default BlogHub;

export const Head = () => {
  return <Seo title="Blog Hub" />;
};
