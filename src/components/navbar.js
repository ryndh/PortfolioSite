import React from "react";
import { css } from "@emotion/core";

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
  padding: 0px 40px;
  transition: 1s ease;
`;

const linkStyle = css`
  transition: 1s ease;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  padding: 0px 10px;
`;

const navTopNames = ["Home", "Projects", "Contact"];
export default function Navbar () {
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
      {navTopNames.map(name =>
        (<a onClick={e => click(e)} name={name} css={linkStyle}>
          {name}
        </a>)
      )}
    </div>
  );
}
