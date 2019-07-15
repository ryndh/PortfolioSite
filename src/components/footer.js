import React from "react";
import { css } from "@emotion/core";
import theme from './theme';

const footerWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  /* border-top: 2px solid ${theme.colors.nav.border}; */
  background-color: ${theme.colors.footer.background};
  /* background-image: linear-gradient(to top right, white 20%, ${theme.colors.footer.background}); */

`;
const footer = css`
  color: ${theme.colors.footer.text};
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
