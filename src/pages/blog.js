import React from "react"

import Layout from "../containers/layout"
import SEO from "../containers/seo"
import BlogPage from "../containers/BlogPage/BlogPage"

export default () => (
  <Layout>
    <SEO title="Blog" />
    <BlogPage />
  </Layout>
)
