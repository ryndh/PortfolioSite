import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { css, keyframes } from "@emotion/core";
import theme from './theme';

const navStyle = css`
  z-index: 10;
  height: 70px;
  /* background-image: linear-gradient(to right, white 20%, #b2bdc7); */
  background-color: ${theme.colors.nav.background};
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 1s ease-in-out;
  border-bottom: 1px solid ${theme.colors.nav.border};
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
  color: ${theme.colors.nav.text};
  padding: 0px 10px;
`;

const navTopNames = ["Home", "Projects"]; //Add Contact back in eventually

export default function Navbar () {
  const [navAnimate, setNavAnimate] = useState(false);
  const scrolling = (windowHeight) => {
    windowHeight < 5 && navAnimate ? setNavAnimate(false) : null;
    windowHeight > 5 && !navAnimate ? setNavAnimate(true) : null;
  };
  useEffect(() => {
    window.addEventListener('scroll', () => scrolling(window.pageYOffset));
  });


  // const click = e => {
  //   const values = {
  //     Home: 0,
  //     Projects: document.getElementById('projScroll').getBoundingClientRect().top + window.pageYOffset,
  //     Contact: document.getElementById('contactScroll').getBoundingClientRect().top + window.pageYOffset
  //   };
  //   window.scrollTo({
  //     top: values[e.target.name],
  //     behavior: "smooth"
  //   });
  // };
  return (
    <div css={navStyle}>
      {navTopNames.map((name, i) => {
        const key = `${name}${i}`;
        let path;
        switch (name) {
        case 'Home' || 'Contact':
          path = '/';
          break;
        case 'Projects':
          path = '/projects';
          break;
        default:
          path = '/';
          break;
        }
        return (
          <Link
            // onClick={e => click(e)}
            to={path}
            name={name}
            css={navAnimate ? [linkStyle, navAn] : linkStyle}
            key={key}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
