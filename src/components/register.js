import React, { useState } from "react"
import axios from "axios"

// Tak Bak Signup - Google form
// sharathnraj@gmail.com
const CORS = "https://cors-anywhere.herokuapp.com/"
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
        onSubmit={e => {
          e.preventDefault()
          if (!loading) {
            const formData = new FormData()
            formData.append(NAME, name)
            formData.append(EMAIL, email)
            
            setLoading(true)
            axios
              .post(CORS + FORM, formData)
              .then(response => {
                setLoading(false)
                setSuccess(true)
                setResult("success")
              })
              .catch(error => {
                setLoading(false)
                setResult("failure")
              })
          }
        }}>
        <p>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Full name"
            onChange={e => setName(e.target.value)}
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
            onChange={e => setEmail(e.target.value)}
            required
            disabled={success}
            aria-required="true"
            aria-invalid="false" />
        </p>
        <input
          type="submit"
          value="Send"
          disabled={success}
          className="button" />
        <br /><br />
        {
          result && (
            result === "failure" ?
            <div className="form-failure">
              Something went wrong. Please try again later.
            </div>
            :
            <div className="form-success">
              Your message was sent successfully. Thanks.
            </div>
          )
        }
      </form>
    </>
  )
}

export default Register
