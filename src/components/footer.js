import React from "react";
import { css } from "@emotion/core";
import theme from './theme';
import treeImg from '../../static/assets/trees.jpg';

const footerWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 100%;
  /* border-top: 2px solid ${theme.colors.nav.border}; */
  /* background-color: ${theme.colors.footer.background}; */
  /* background-image: linear-gradient(to top right, white 20%, ${theme.colors.footer.background}); */
  background-image: url(${treeImg});
  background-size: cover;
  background-position: bottom;

`;
const footer = css`
  color: ${theme.colors.footer.text};
  font-size: 1.1rem;
`;
export default function Footer () {
  const currentTime = new Date();
  return (
    <div css={footerWrap}>
      <div css={footer}>&copy; {currentTime.getFullYear()} &#124; Ryan</div>
    </div>
  );
}
