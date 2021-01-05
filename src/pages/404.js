import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="bg-orange align-center">
      <div className="wrapper">
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist ... sad face.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
