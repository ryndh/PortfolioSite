import React from "react";
import { css } from "@emotion/core";

const footerWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #d2d9e0;
`;
const footer = css`
  color: #050608;
  font-size: initial;
`;
export default function Footer () {
  const currentTime = new Date();
  return (
    <div css={footerWrap}>
      <div css={footer}>&copy; {currentTime.getFullYear()} &#124; Ryan</div>
    </div>
  );
}
