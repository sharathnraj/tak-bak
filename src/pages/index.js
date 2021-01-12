import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Register from "../components/register"
import SEO from "../components/seo"

import Animals from "../images/animals.webp"
import Colors from "../images/colors.webp"

const IndexPage = () => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const header =
    typeof window !== "undefined" &&
    window &&
    window.document &&
    document.getElementsByTagName("header") &&
    document.getElementsByTagName("header")[0] &&
    document.getElementsByTagName("header")[0].clientHeight

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window &&
      window.document &&
      document.getElementsByTagName("header")
    ) {
      setHeaderHeight(document.getElementsByTagName("header")[0].clientHeight)
    }
  }, [header])

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="hero"
        style={
          typeof window !== "undefined" &&
          window &&
          window.innerHeight ?
          {
            height: `calc(${window.innerHeight}px - ${headerHeight}px)`
          } : {}
        }>
        <div className="hero-content">
          <h1 className="words">
            <span>Play</span>
            <span>Listen</span>
            <span>Learn</span>
            <span>Repeat</span>
          </h1>
        </div>
        <a className="hero-scroll" href="#main"><span></span><span></span><span></span>Scroll</a>
      </div>
      <div className="anchor" id="main" />
      <section className="bg-white">
        <div className="wrapper">
          <div className="split">
            <div className="split-60">
              <h2>Play. Listen. Learn. Repeat</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="split-40">
              <img
                src={Animals}
                alt="Animals games"
              />

            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="wrapper">
          <div className="split">
            <div className="split-40">
              <img
                src={Colors}
                alt="Colors games"
              />
            </div>
            <div className="split-60">
                <h2>Teach Better Hindi</h2>
                <p>Improve your student outcomes with our games.</p>
                <ul>
                  <li>Point No. 1</li>
                  <li>Point No. 2</li>
                  <li>Point No. 3</li>
                  <li>Point No. 4</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </section>
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
}

export default IndexPage
