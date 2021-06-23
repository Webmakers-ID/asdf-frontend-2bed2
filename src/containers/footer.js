// Generic imports
import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

// import Image from "./image"

const Styles = styled.footer`


  @media only screen and (max-width: 991.98px) {
    
  }

  @media only screen and (max-width: 767.98px) {
    
  }
`

const Footer = () => (
  <Styles>
    
    <div className="copyright">
      PT As Digital Future Technology © {new Date().getFullYear()} All Rights Reserved
    </div>
  </Styles>
)

export default Footer
