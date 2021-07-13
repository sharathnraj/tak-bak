import { Link } from "gatsby"
import React from "react"
import Logo from "../images/logo.webp"
import LogoText from "../images/logo-text.webp"
import AppStore from "../images/appstore.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrapper" style={{ display: "flex", justifyContent: "space-between", padding: " 0 16px 16px" }}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "block"
        }}
      >
        <img className="logo" src={Logo} alt={siteTitle} />
        <img className="logo" src={LogoText} alt={siteTitle} />
      </Link>
      <a href="https://apps.apple.com/app/id1526890643">
        <img
          src={AppStore}
          alt="AppStore"
        />
      </a>
    </div>
  </header>
)

export default Header
