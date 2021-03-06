import React from "react"
import PropTypes from "prop-types"

import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles"

import "assets/scss/material-kit-react.scss?v=1.4.0"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'typeface-roboto'
import 'typeface-roboto-slab'
import "./layout.css"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Inter"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(','),
  },
});

const dashboardRoutes = [];

const Layout = ({ children, noFooter }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="asdf-logo-white.png"
        brandOnScroll="asdf-logo.png"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white"
        }}
      />
      <div id="all-wrapper">
        <main>{children}</main>
        {noFooter ? <></> : 
        <Footer
          brand="asdf-logo-white.png"
        />}
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  noFooter: false,
}

export default Layout
