import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

let bgImageDict = null

const BgImage = ({ children, imgName, ...otherProps }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `
  )

  if (!bgImageDict) {
    bgImageDict = {}
    data.allImageSharp.edges.forEach(edge => {
      bgImageDict[edge.node.fluid.originalName] = edge.node.fluid
    })
  }
  const imageFluid = bgImageDict[imgName]
  if (!imageFluid) {
    throw new Error(`SharpImage with name '${imgName}' doesn't exist`)
  }

  return (
    <BackgroundImage
      fluid={imageFluid}
      {...otherProps}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBgImage = styled(BgImage)`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBgImage
