import React from "react";
import Layout from "./layout";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  const { nodes } = data.allFile;
  console.log(nodes);
  return (
    <Layout pageTitle="Blog Page">
      {nodes.map((blog) => (
        <ul>
          <li key={blog.name}>{blog.name}</li>
        </ul>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
