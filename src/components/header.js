import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.png"
import LogoText from "../images/logo-text.webp"

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrapper">
      <Link
        to="/"
        style={{ textDecoration: `none` }}
      >
        <img className="logo" src={Logo} alt={siteTitle} />
        <img className="logo" src={LogoText} alt={siteTitle} />
      </Link>
    </div>
  </header>
)

export default Header
