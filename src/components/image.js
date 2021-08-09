import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

let imageDict = null

const Image = ({ imgName, alt, ...otherProps }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      if (!alt) alt = imgName
      if (!imageDict) {
        imageDict = {}
        data.allImageSharp.edges.forEach(edge => {
          imageDict[edge.node.fluid.originalName] = edge.node.fluid
        })
      }
      const imageFluid = imageDict[imgName]
      if (!imageFluid) {
        throw new Error(`SharpImage with name '${imgName}' doesn't exist`)
      }
      return <Img fluid={imageFluid} alt={alt} {...otherProps} />
    }}
  />
)

Image.propTypes = {
  imgName: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default Image