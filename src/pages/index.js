import React from "react"

import Layout from "../containers/layout"
import SEO from "../containers/seo"
import LandingPage from "../containers/LandingPage/LandingPage"

export default () => (
  <Layout>
    <SEO title="Landing Page" />
    <LandingPage />
  </Layout>
)
