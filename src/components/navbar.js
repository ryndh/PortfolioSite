import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/core";

const navStyle = css`
  z-index: 10;
  height: 70px;
  background-image: linear-gradient(to right, white 20%, #b2bdc7);
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 1s ease-in-out;
`;
const navAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
  `;
const navAn = css`
  animation: ${navAnimation} 1s ease 0s 1 forwards;
`;
const linkStyle = css`
  transition: 1s ease-in-out;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  padding: 0px 10px;
`;

const navTopNames = ["Home", "Projects", "Contact"];

export default function Navbar () {
  const [navAnimate, setNavAnimate] = useState(false);
  const scrolling = () => {
    let navOffset = window.pageYOffset;
    if (navAnimate) {
      navOffset < 5 ? setNavAnimate(false) : null;
    } else {
      navOffset > 5 ? setNavAnimate(true) : null;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => scrolling());
  });

  const values = {
    Home: 0,
    Projects: 800,
    Contact: window.innerWidth > 700 ? 2450 : 2700
  };
  const click = e => {
    window.scrollTo({
      top: values[e.target.name],
      behavior: "smooth"
    });
  };
  return (
    <div css={navStyle}>
      {navTopNames.map((name, i) => {
        const key = `${name}${i}`;
        return (
          <a
            onClick={e => click(e)}
            name={name}
            css={navAnimate ? [linkStyle, navAn] : linkStyle}
            key={key}
          >
            {name}
          </a>
        );
      })}
    </div>
  );
}
