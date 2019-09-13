import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./projects";
import Tools from "./tools";
import Contact from "./contact";
import Footer from "./footer";
import Navbar from "./navbar";
import Banner from "./banner";
import { css } from "@emotion/core";
import { portfolioObj } from "./projectsTools";

const appStyle = css`
  position: relative;
`;
const mainBody = css`
  margin-top: 70px;
`;
export default function Home () {
  return (
    <BrowserRouter onUpdate={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <div css={appStyle}>
        <Navbar />
        <div css={mainBody}>
          <div>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <Banner />
                  <Tools />
                  <Contact />
                </>
              )}
            />
            <Route path="/projects" render={(props) => <Projects projectObj={portfolioObj.projects}/>}/>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
