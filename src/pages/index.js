import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Register from "../components/register"
import SEO from "../components/seo"

// import Animals from "../images/animals.webp"
import Home from "../images/home.webp"
import Salad from "../images/salad.webp"
import AR from "../images/quiz.webp"
// import Colors from "../images/colors.webp"
import Quiz from "../images/ar.webp"
import Leaderboard from "../images/leaderboard.webp"
import AppStore from "../images/appstore.png"

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
      <div className="hero">
        <div className="hero-content">
          {/* <h1 className="words">
            <span className="words-1">Play</span>
            <span className="words-2">Listen</span>
            <span className="words-3">Learn</span>
            <span className="words-4">Repeat</span>
          </h1> */}
          <h1>Hindi learning made fun</h1>
          {/* <p><b>TakBak app now available on the app store !!</b></p> */}
          <p>
            Get kids excited to learn and converse in Hindi with TakBak!<br /><br />
            Introduce them to their first 100 words in categories like Animals, Colors, Fruits, Vegetables, Body Parts and Numbers.<br /><br />
            Play Augmented Reality games with fun avatars to master your new learnings!<br /><br />
            <a href="https://apps.apple.com/app/id1526890643">
              <img
                src={AppStore}
                alt="AppStore"
              />
            </a>
          </p>
        </div>
        <div className="hero-logo" />
        {/* <a className="hero-scroll" href="#main"><span className="hero-scroll-1"></span><span className="hero-scroll-2"></span><span className="hero-scroll-3"></span>Scroll</a> */}
      </div>
      <div className="anchor" id="main" />
      <section className="bg-white">
        <div className="wrapper">
          <div className="split">
            <div className="split-60">
              <h2>Say bye to boring lessons</h2>
              <p>
                <ul>
                  <li>No flashcards</li>
                  <li>No rote memorization</li>
                  <li>No native reading skills needed</li>
                  <li>New words introduced through games</li>
                  <li>AR games to master new words</li>
                </ul>
              </p>
            </div>
            <div className="split-40">
              <img
                src={Home}
                alt="Home"
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
                src={Quiz}
                alt="Colors games"
              />
            </div>
            <div className="split-60">
              <h2>Safe and fun for little ones</h2>
              <p>
                <ul>
                  <li>No ads. Ever.</li>
                  <li>Animated characters that kids love</li>
                  <li>Animal avatars for kids to try out</li>
                  <li>Cheerful, encouraging audio cues</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="wrapper">
          <div className="split">
            <div className="split-60">
              <h2>Interactive learning</h2>
              <p>
                <ul>
                  <li>Improves listening and speaking skills</li>
                  <li>Helps learn new words by listening</li>
                  <li>Native speaker audio helps with pronunciation</li>
                  <li>Play based learning gets kids to come back and learn more</li>
                </ul>
              </p>
            </div>
            <div className="split-40">
              <img
                src={Salad}
                alt="Interactive"
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
                src={AR}
                alt="AR games"
              />
            </div>
            <div className="split-60">
              <h2>Augmented reality</h2>
              <p>
                <ul>
                  <li>Bring active learning into your living room</li>
                  <li>Get kids up and moving</li>
                  <li>Choose a different avatar every time</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="wrapper">
          <div className="split">
            <div className="split-60">
              <h2>Rewards & Leaderboards</h2>
              <p>
                <ul>
                  <li>Earn rewards every time you complete games</li>
                  <li>Climb up the leaderboards as you play more</li>
                  <li>Challenge your friends to beat your score</li>
                  <li>Play with your friends for extra fun</li>
                </ul>
              </p>
            </div>
            <div className="split-40">
              <img
                src={Leaderboard}
                alt="Leaderboard"
              />

            </div>
          </div>
        </div>
      </section>
      <div className="anchor" id="signup" />
      <section className="bg-grey align-center">
        <div className="wrapper">
          <h2 className="large">Join the TakBak wagon.</h2>
          <p>Download on the iPad App Store today !!</p>
          <a href="https://apps.apple.com/app/id1526890643">
            <img
              src={AppStore}
              alt="AppStore"
            />
          </a>
          <p>Sign up to gain full access to all our learning resources. You’ll also receive our newsletter packed with fun language-learning tips and promotional offers.</p>
          <br />
          <Register />
        </div>
      </section>
      <section className="bg-white align-center">
        <div className="wrapper">
          <div className="cards">
            <div className="card">
              <div className="wrapper">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <div className="wrapper">
                  <div className="top-left" />
                  <div className="top-right" />
                  <div className="bottom-left" />
                  <div className="bottom-right" />
                  <h3>Play. Listen. Learn. Repeat</h3>
                  <p className="small">Say no to boring flashcards approach to learning<br/><br/>Kids learn through repetition using games and activities, and not rote memorization.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <div className="wrapper">
                  <div className="top-left" />
                  <div className="top-right" />
                  <div className="bottom-left" />
                  <div className="bottom-right" />
                  <h3>Games on the go</h3>
                  <p className="small">Try our TakBak app loaded with games designed for kids (ages 3 - 8) on your iOS device to take your learning and practice wherever you go!</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <div className="wrapper">
                  <div className="top-left" />
                  <div className="top-right" />
                  <div className="bottom-left" />
                  <div className="bottom-right" />
                  <h3>Fun and interactive live classes</h3>
                  <p className="small">Play and compete with friends in a live collaborative setting that makes learning a breeze.<br/><br/>Our students don’t want the classes to end.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <div className="wrapper">
                  <div className="top-left" />
                  <div className="top-right" />
                  <div className="bottom-left" />
                  <div className="bottom-right" />
                  <h3>It’s not “All or Nothing”</h3>
                  <p className="small">We encourage "Hinglish" in our classes.<br/><br/>Students use how much ever Hindi they and don't stress about being prefect.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <div className="wrapper">
                  <div className="top-left" />
                  <div className="top-right" />
                  <div className="bottom-left" />
                  <div className="bottom-right" />
                  <h3>Bollywood dance lessons</h3>
                  <p className="small">Singing and dancing to songs help with learning new vocab, grammar and pronunciation<br/><br/>And who isn’t fond of a thumka or two?</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="wrapper">
                <div className="top-left" />
                <div className="top-right" />
                <div className="bottom-left" />
                <div className="bottom-right" />
                <div className="wrapper">
                  <div className="top-left" />
                  <div className="top-right" />
                  <div className="bottom-left" />
                  <div className="bottom-right" />
                  <h3>Access to tons of games and learning resources</h3>
                  <p className="small">Subscribe to our mailing list to get your hands on tons of teaching material that get kids excited about learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
