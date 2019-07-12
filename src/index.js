import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/components/home";
import { Global, css } from "@emotion/core";

// import './style/main.scss';
const bodyStyles = css`
  body {
    margin: 0px;
    font-family: "Khula", sans-serif;
    font-size: 70%;
  }
`;
function App () {
  return (
    <>
      <Global styles={bodyStyles} />
      <Home />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".app-wrapper"));
