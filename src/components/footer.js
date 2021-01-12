import React from "react"

const Footer = () => (
  <footer>
    <section className="bg-orange align-center">
      <div className="wrapper">
        &copy; {new Date().getFullYear()}, Tak Bak
      </div>
    </section>
  </footer>
)

export default Footer
