import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Register from "../components/register"

const ContactUs = () => (
  <Layout>
    <SEO title="Contact us" />
    <div className="anchor" id="signup" />
    <section className="bg-grey align-center">
      <div className="wrapper">
        <h2 className="large">Join the Tak Bak wagon.</h2>
        <p>Sign up to gain full access to all our learning resources. You’ll also receive our newsletter packed with fun language-learning tips and promotional offers.</p>
        <br />
        <Register />
      </div>
    </section>
  </Layout>
)

export default ContactUs
