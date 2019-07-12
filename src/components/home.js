import React from "react";
import Projects from "./projects";
import Tools from "./tools";
import Contact from "./contact";
import Footer from "./footer";
import Navbar from "./navbar";
import Banner from "./banner";
import { css } from "@emotion/core";

const appStyle = css`
  position: relative;
`;
const mainBody = css`
  margin-top: 70px;
`;
export default function Home () {
  return (
    <div css={appStyle}>
      <Navbar />
      <div css={mainBody}>
        <div>
          <Banner />
          <Projects />
          <Tools />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
