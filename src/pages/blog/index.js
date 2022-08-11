import React from "react";
import Layout from "../layout";
import { Link, graphql } from "gatsby";

const Blog = ({ data }) => {
  console.log(data);
  const { nodes } = data.allMdx;

  return (
    <Layout pageTitle="Blog Page">
      {nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        slug
      }
    }
  }
`;

export default Blog;
