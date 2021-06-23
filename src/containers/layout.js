import React, { useState } from "react"
import PropTypes from "prop-types"
import { ToastContainer } from "react-toastify"

// Other components imports
import Footer from "./footer"
import Header from "./header"
import Notifications from "./Notifications"

// Redux imports

// Static imports
import "./bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "./layout.css"

const Layout = ({ children, topTransparent, updateSearch, noFooter }) => {
  const [displayNotif, setDisplayNotif] = useState(false)

  return (
    <>
      <Header
        topTransparent={topTransparent}
        setDisplayNotif={setDisplayNotif}
        updateSearch={updateSearch}
      />
      <Notifications
        displayNotif={displayNotif}
        setDisplayNotif={setDisplayNotif}
      />
      <div id="all-wrapper">
        <main>{children}</main>
        {noFooter ? <></> : <Footer />}
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  topTransparent: false,
  noFooter: false,
}

export default Layout
