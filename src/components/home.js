import React, { useEffect } from "react";
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
  // const constant = new Date().toLocaleDateString();

  // const scrolled = () => {
  //   const nav = document.querySelector(".navbar");
  //   const tool = document.querySelectorAll(".scale-tool");
  //   const lines = document.querySelectorAll(".h-expand");
  //   const navScrollAt = 0;
  //   const toolScroolAt = window.innerWidth > 700 ? 1650 : 1900;

  //   if (window.pageYOffset > navScrollAt) {
  //     nav.classList.add("scrolled");
  //   } else {
  //     nav.classList.remove("scrolled");
  //   }

  //   if (window.pageYOffset > toolScroolAt) {
  //     tool.forEach(item => {
  //       item.classList.add("bigger");
  //     });
  //     lines.forEach(line => {
  //       line.classList.add("line");
  //     });
  //   } else {
  //     tool.forEach(item => {
  //       item.classList.remove("bigger");
  //     });
  //     lines.forEach(line => {
  //       line.classList.remove("line");
  //     });
  //   }
  // };

  // useEffect(() => {
  //   console.log("listener");
  //   window.addEventListener("scroll", () => scrolled());

  //   return function cleanup () {
  //     window.removeEventListener("scroll", () => scrolled());
  //     console.log("removed listener");
  //   };
  // }, [constant]);

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
