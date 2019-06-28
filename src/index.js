import React from "react";
import ReactDOM from "react-dom";
import Home from "../src/components/home";

// import './style/main.scss';

function App () {
  return (
    <Home />
  );
}

ReactDOM.render(<App />, document.querySelector(".app-wrapper"));
