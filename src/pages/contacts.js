import React from "react"

import Layout from "../containers/layout"
import SEO from "../containers/seo"
import ContactPage from "../containers/ContactPage/ContactPage"

export default () => (
  <Layout>
    <SEO title="Pesan Sekarang" />
    <ContactPage />
  </Layout>
)
