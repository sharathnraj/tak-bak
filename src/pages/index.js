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
            <span className="words-1">Play</span>
            <span className="words-2">Listen</span>
            <span className="words-3">Learn</span>
            <span className="words-4">Repeat</span>
          </h1>
          <p>Get kids excited to learn and converse in Hindi with our play based iOS app and tons of supporting teaching and gaming materials.</p>
        </div>
        <div className="hero-logo" />
        <a className="hero-scroll" href="#main"><span className="hero-scroll-1"></span><span className="hero-scroll-2"></span><span className="hero-scroll-3"></span>Scroll</a>
      </div>
      <div className="anchor" id="main" />
      <section className="bg-white">
        <div className="wrapper">
          <div className="split">
            <div className="split-60">
              <h2>Vision statement</h2>
              <p>It's all fun and games. When we play, we learn with the least amount of effort. And because it's fun we want to play again and again which leads us to learn better and better.<br /><br />That's our approach to introducing kids to Hindi or any other Indian language for that matter. It has to be FUN first and learning will follow. </p>
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
                <p>Here at TakBak we take tools and tricks that we know kids already love and use them to teach a language.<br /><br />We get together for a weekly Hindi class. But it isn't yet another boring zoom meeting. Kids love playing games. We learn our words through playing games like Bingo, Pictionary and Scavenger hunt. We do a lot of Kahoot quizzes and kids love to compete and be on the leaderboards.<br /><br />Kids love to sing and dance. So we dance to hindi songs while we try and listen to some words we recently learnt. We draw, read and listen to stories all while learning the language.<br /><br />And we do it with friends.<br />That's what makes it double the fun!!</p>
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
