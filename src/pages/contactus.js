import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactUs = () => {
  useEffect(() => {
    navigate("https://www.parjanya.org/contactus")
  })

  return (
    <Layout>
      <SEO title="Conatct us" />
      <section className="bg-orange align-center">
        <div className="wrapper">
          <h1>Conatct us</h1>
          <p>You're now being redirected</p>
        </div>
      </section>
    </Layout>
  )
}

export default ContactUs
