import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const posts = data.allMarkdownRemark.nodes

  const data1 = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  console.log("data1", data1)

  return (
    <Layout location={location}>
      <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {data1.allContentfulBlog.edges.map((edge, i) => (
          <h1 key={i}>{edge.node.title}</h1>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogIndex
