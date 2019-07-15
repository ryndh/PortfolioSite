import React, { useState, useEffect } from "react";
import Weather from "./weather";
import { css, keyframes } from "@emotion/core";
import profileImg from "../../static/assets/profile.jpg";
import treeImg from "../../static/assets/trees.jpg";
import theme from './theme';

export default function Banner () {
  const [meModal, setMeModal] = useState(false);
  const [youModal, setYouModal] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const buttonAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateX(100%);
    }
    1% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: translateX(0%);
    }
  `;

  const clickHandleMe = title => {
    setMeModal(true);
  };

  const clickHandleYou = title => {
    setYouModal(true);
  };
  const someStyle = css`
    position: relative;
    display: grid;
    justify-content: right;
    align-content: center;
    background-image: url(${treeImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 700px;
    /* margin-bottom: 150px; */
    @media(max-width: 700px){
      background-position: left;
      margin-bottom: 0px;
      height: 400px;
    }
  `;
  const ryanStyle = css`
    font-size: 4rem;
    overflow: hidden;
    color: ${theme.colors.banner};
    margin: 20px;
    @media(max-width: 700px){
      font-size: 2.5rem;
      margin: 10px;
    }
  `;
  const buttonWrap = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    opacity: 1;
    margin-right: 50px;
  `;
  const button = css`
    opacity: 1;
    transition: 0.5s ease-in-out;
    animation: ${buttonAnimation} 1s ease 0s 1;
    width: 30%;
    margin-bottom: 25px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: ${theme.colors.buttons.background};
    color: ${theme.colors.buttons.text};
    border-style: none;
    border-radius: 4px;
    box-shadow: 0px 1px 2px 0px #232b39a1;
    &:hover {
      transform: translateX(5px) scale(1.02);
    }
  `;
  const aboutMeWrap = css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgba(128, 128, 128, 0.63);
    z-index: 3;
  `;
  const hideAboutMe = css`
    display: none;
  `;
  const aboutMe = css`
    position: relative;
    background-color: white;
    display: grid;
    grid-gap: 0px 40px;
    align-items: center;
    grid-template-columns: 175px auto;
    grid-template-rows: 1fr 0.5fr;
    padding: 30px;
    width: 60%;
    height: 50%;
    border-radius: 7px;
    font-size: 1.2rem;
    overflow-y: auto;
    @media(max-width: 700px) {
      display: flex;
      flex-direction: column;
    }
  `;
  const aboutYou = css`
    position: absolute;
    top: 25%;
    left: 25%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 40%;
    height: 40%;
    border-radius: 7px;
    font-size: 1rem;
    overflow: auto;
  `;
  const closeStyle = css`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
  `;
  const ryanPic = css`
    background-image: url(${profileImg});
    background-size: cover;
    background-position-y: 34%;
    border-radius: 50%;
    min-height: 175px;
    width: 175px;
  `;
  const siteAboutHeading = css`
    text-align: center;
  `;
  return (
    <div css={someStyle}>
      <p css={ryanStyle}>
        <span>Ryan Hull</span>
      </p>
      <p css={ryanStyle}>
        <span>Full Stack Developer</span>
      </p>
      <div css={buttonWrap}>
        <button onClick={() => clickHandleMe("About Me")} css={button}>
          About Me
        </button>
        <button onClick={() => clickHandleYou("About You")} css={button}>
          Your Weather
        </button>
      </div>
      <div css={youModal ? aboutYou : hideAboutMe}>
        <Weather />
        <div css={closeStyle} onClick={() => setYouModal(false)}>
          {" "}
          Close X
        </div>
      </div>
      <div css={meModal ? aboutMeWrap : hideAboutMe}>
        <div css={aboutMe}>
          <div css={ryanPic}/>
          <div>
            <p>
              Hey there! I'm Ryan. I'm currently working for FamilySearch doing automated testing, fixing bugs, and trying to learn as much as I can! When I'm not coding, you might find me spending time with my family,
              watching a movie, or reading some non-fiction.  {" "}
            </p>
          </div>
          <div css={siteAboutHeading}>
            <h2>This Site:</h2>
          </div>
          <div>
            <p>
              What you see here is React, with a little back-end logic in Python
              and Flask going on behind the scenes. I also use a PostgreSQL
              database.
            </p>
          </div>
          <div css={closeStyle} onClick={() => setMeModal(false)}>
            Close X
          </div>
        </div>
      </div>
    </div>
  );
}
