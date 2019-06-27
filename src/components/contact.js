import React from "react";

export default function Contact() {
  return (
    <div className="contact-wrapper" id="contact">
      <h1 className="contact-heading">Get In Touch</h1>
      <div className="contact-grid">
        <div className="contact">
          <h3>
            I'm always open to new ideas or opportunities! <br /> Send me a
            message on LinkedIn and let's talk!
          </h3>
          <a
            href="https://www.linkedin.com/in/ryan-hull-3b4806b9/"
            target="_blank"
            className="linkedin-link"
          >
            <div className="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
