import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
const query = graphql`
  {
    person: file(relativePath: { eq: "person.png" }) {
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showPerson }) => {
  const {
    person: { childrenImageSharp },
  } = useStaticQuery(query)
  const fluid = childrenImageSharp[0].fluid
  return (
    <header className="hero">
      {showPerson && (
        <Image fluid={fluid} alt="hero-pic" className="hero-person" />
      )}
    </header>
  )
}

export default Hero
