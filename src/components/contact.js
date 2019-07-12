import React from "react";
import { css } from "@emotion/core";
import linkedinImg from '../../static/assets/linkedin.png';

const contactWrapper = css`
  text-align: center;
  margin: 50px 0px;
  padding: 40px 0px;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;
const contactHeading = css`
  margin-top: 30px;
  font-size: 3.5rem;
`;
const contactGrid = css`
  margin-top: 20px;
  width: 80%;
  height: 100%;
  display: grid;
  justify-items: center;
`;
const headingStyle = css`
  line-height: 2.5rem;
  margin-bottom: 20px;
`;

const linkedInLink = css`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;
const linkedIn = css`
  background-image: url(${linkedinImg});
  background-size: cover;
  transition: 1s ease;
  height: 70px;
  width: 70px;
  &:hover {
    transition: 1s ease;
    transform: scale(1.1);
    color: $contact-link-color;
  }
`;
export default function Contact () {
  return (
    <div id="contactScroll" css={contactWrapper}>
      <h1 css={contactHeading}>Get In Touch</h1>
      <div css={contactGrid}>
        <div>
          <h3 css={headingStyle}>
            I'm always open to new ideas or opportunities! <br /> Send me a
            message on LinkedIn and let's talk!
          </h3>
          <a
            href="https://www.linkedin.com/in/ryan-hull-3b4806b9/"
            target="_blank"
            css={linkedInLink}
          >
            <div css={linkedIn} />
          </a>
        </div>
      </div>
    </div>
  );
}
