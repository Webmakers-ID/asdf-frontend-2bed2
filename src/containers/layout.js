import React from "react"
import PropTypes from "prop-types"

import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import 'typeface-roboto'
import 'typeface-roboto-slab'
import "./layout.css"

const dashboardRoutes = [];

const Layout = ({ children, noFooter }) => {
  return (
    <>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <div id="all-wrapper">
        <main>{children}</main>
        {noFooter ? <></> : <Footer />}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  noFooter: false,
}

export default Layout
