import React, { useState } from "react";
import { portfolioObj } from "./projectsTools";
import { css } from "@emotion/core";

const toolsWrap = css`
  text-align: center;
  background-color: #d2d9e0;
  margin-top: 150px;
  padding: 50px 0px;
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;
const toolsHeading = css`
  margin-bottom: 30px;
  font-size: 3.5rem;
  color: white;
`;
const toolsGrid = css`
  margin-top: 20px;
  width: 80%;
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 300px;
`;
const toolStyle = css`
  width: 50%;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
`;
const toolTitle = css`
  color: #050608;
  transition: 1s ease;
  margin-bottom: 30px;
  padding-bottom: 10px;
  &::after {
    display: block;
    content: "";
    padding-bottom: 10px;
    border-bottom: 2px solid white;
    animation: borderShrink 2s ease 0s 1 forwards;
  }
`;
const scaleTools = tool =>
  css`
    transition: 1.5s ease;
    background-image: url(${tool.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 70px;
    width: 100px;
    align-self: center;
  `;
export default function Tools () {
  const [tools, setTools] = useState(portfolioObj.tools);

  return (
    <div css={toolsWrap}>
      <h1 css={toolsHeading}>Some Tools I Use</h1>
      <div css={toolsGrid}>
        {tools.map((tool, index) => {
          return (
            <div css={toolStyle} key={index}>
              <div>
                <h1 css={toolTitle}>{tool.title}</h1>
              </div>
              <div css={scaleTools(tool)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
