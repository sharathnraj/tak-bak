import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer>
    <section className="bg-orange align-center small-padding">
      <div className="wrapper">
        &copy; {new Date().getFullYear()}, TakBak
        <br /><br />
        <div>
          <a href="mailto:takbak.kids@gmail.com">
            Contact us
          </a>
          &nbsp;&nbsp;
          <Link to="/privacy-policy">
            Privacy policy
          </Link>
        </div>
        <br />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <a
            style={{ margin: "0 8px" }}
            aria-label="Instagram"
            href={
              typeof window !== "undefined" &&
              window &&
              window.navigator &&
              /iPhone|iPad|iPod/i.test(window.navigator.userAgent || "") ?
                "instagram://user?username=takbak_kids"
                : "https://www.instagram.com/takbak_kids/"
            }
            target="_blank"
            rel="noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="32px"
              width="32px">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </a>
          <a
            style={{ margin: "0 8px" }}
            aria-label="Facebook"
            href="https://facebook.com/takbak.kids/"
            target="_blank"
            rel="noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="32px"
              width="32px">
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>
          </a>
          <a
            style={{ margin: "0 8px" }}
            aria-label="Youtube"
            href="https://www.youtube.com/channel/UCGkYalEpnWiJ2kh58t8os0w"
            target="_blank"
            rel="noreferrer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="32px"
              width="32px">
              <path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </footer>
)

export default Footer
