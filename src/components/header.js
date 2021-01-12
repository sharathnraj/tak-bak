import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.webp"
import LogoText from "../images/logo-text.webp"

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrapper">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "block",
          margin: "0 auto"
        }}
      >
        <img className="logo" src={Logo} alt={siteTitle} />
        <img className="logo" src={LogoText} alt={siteTitle} />
      </Link>
    </div>
  </header>
)

export default Header
