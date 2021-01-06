/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./components.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <noscript>
        <iframe
          title="GoogleTagManager"
          src="https://www.googletagmanager.com/ns.html?id=GTM-WKCC5SJ"
          height="0"
          width="0"
          style={{
            display: "none",
            visibility: "hidden"
          }}>
        </iframe>
      </noscript>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>
        {children}
      </main>
      <footer>
        <section className="bg-orange align-center">
          <div className="wrapper">
            &copy; {new Date().getFullYear()}, Tak Bak
          </div>
        </section>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
