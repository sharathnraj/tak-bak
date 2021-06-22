import React, { useState } from "react"
import axios from "axios"
import gtmHandler from "./gtmHandler"

// Tak Bak Signup - Google form
// sharathnraj@gmail.com
// const CORS = "https://cors-anywhere.herokuapp.com/"
const FORM = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScBNY10hkhLRKgoa1prn1jkzWrYhRCseuXWKMxQQanXnljC8w/formResponse"
const NAME = "entry.673999318"
const EMAIL = "emailAddress"

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(false)
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <>
      <form
        method="POST"
        className={result && "formThankYou"}
        onSubmit={e => {
          e.preventDefault()
          if (!loading) {
            const formData = new FormData()
            formData.append(NAME, name)
            formData.append(EMAIL, email)
            
            setLoading(true)
            axios
              .post(FORM, formData)
              .then(response => {
                setLoading(false)
                setSuccess(true)
                setResult("success")
                gtmHandler({
                  event: "signup",
                  eventType: "form_response",
                  action: "Successful signup",
                  category: "Signup"
                })
              })
              .catch(error => {
                setLoading(false)
                setSuccess(true)
                setResult("success")
                gtmHandler({
                  event: "signup",
                  eventType: "form_response",
                  action: "Successful signup",
                  category: "Signup"
                })
              })
          }
        }}>
        <p>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Full name"
            aria-label="Full name"
            onChange={e => setName(e.target.value)}
            onBlur={e => {
              if (e.target.value) {
                gtmHandler({
                  event: "input",
                  eventType: "input_value",
                  action: "Entered name",
                  category: "Signup",
                  additionalProps: {
                    inputName: "Full name"
                  }
                })
              }
            }}
            required
            disabled={success}
            aria-required="true"
            aria-invalid="false" />
        </p>
        <p>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email address"
            aria-label="Email address"
            onChange={e => setEmail(e.target.value)}
            onBlur={e => {
              if (e.target.value) {
                gtmHandler({
                  event: "input",
                  eventType: "input_value",
                  action: "Entered email",
                  category: "Signup",
                  additionalProps: {
                    inputName: "Email address"
                  }
                })
              }
            }}
            required
            disabled={success}
            aria-required="true"
            aria-invalid="false" />
        </p>
        <input
          type="submit"
          value="Contact us"
          disabled={success}
          className="button" />
        <br /><br />
        {
          result && (
            <div className="form-message">
              {
                result === "failure" ?
                <div className="form-failure">
                  Something went wrong. Please try again later.
                </div>
                :
                <div className="form-success">
                  Thank you for subscribing.<br /><br />Here are some <a href="https://create.kahoot.it/collection/7d08a333-4898-4f15-8d56-6fdab2c82c4f">Hindi 101 Kahoot</a> quizzes to try with your kids.<br /><br />Let us know how you like them. Happy Kahooting!
                </div>
              }
            </div>
          )
        }
      </form>
    </>
  )
}

export default Register
