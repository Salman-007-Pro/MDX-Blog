import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = ({
  data: {
    allMdx: { posts },
  },
  pageContext: { category },
}) => {
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  )
}
export const query = graphql`
  query GetCategories($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
        excerpt
        id
        frontmatter {
          author
          category
          date(formatString: "MMMM Do, YYYY")
          readTime
          slug
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
export default CategoryTemplate
