import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(null);

  function handelEmailValid(e) {
    setEmailValid(false);
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailValid(true);
    }

    e.preventDefault();
  }
  return (
    <div className="contact" id="contact">
      <div className="contact__text">
        <span> 35,000+ already joined</span>
        <h4 id="contactHeading"> Stay up-to-date with what we’re doing</h4>
      </div>
      <form aria-label="contactHeading">
        <div className={`email ${emailValid === false ? "error" : ""}`}>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            aria-invalid={emailValid === false ? "true" : "false"}
            aria-describedby="emailError"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <p id="email-error" role="alert" aria-live="assertive">
            whoops,make sure it's an email
          </p>
        </div>
        <button
          type="submit"
          className="contact__btn"
          onClick={handelEmailValid}
        >
          Contact us
        </button>
      </form>
    </div>
  );
}
