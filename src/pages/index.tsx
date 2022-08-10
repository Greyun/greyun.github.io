import * as React from "react"
import type { HeadFC } from "gatsby"
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
    const { edges } = data.allMarkdownRemark
  return (
    <main>
      <h1>This is my TIL blog.</h1>
        {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
                <div>{frontmatter.title}</div>
            )
        })}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>TIL</title>

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`
