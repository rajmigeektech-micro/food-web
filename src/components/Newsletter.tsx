import { useState } from 'react'

export function Newsletter() {
  const [message, setMessage] = useState('')

  return (
    <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title">
      <div className="container newsletter__inner">
        <h2 id="newsletter-title">Deliciousness<br className="mobile-only" /> to your inbox</h2>
        <p>Enjoy weekly hand picked recipes<br />and recommendations</p>
        <form onSubmit={(event) => {
          event.preventDefault()
          const form = event.currentTarget
          const data = new FormData(form)
          const email = String(data.get('email') ?? '')
          setMessage(`Thanks! Recipe inspiration will be sent to ${email}.`)
          form.reset()
        }}>
          <div className="newsletter__field">
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" name="email" type="email" placeholder="Email Address" required />
            <button className="button button--primary" type="submit">Join</button>
          </div>
          <small>By joining our newsletter you agree to our <a href="#footer">Terms and Conditions</a></small>
          {message && <span className="newsletter__message" role="status">{message}</span>}
        </form>
      </div>
    </section>
  )
}
