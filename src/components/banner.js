import React, { useState, useEffect } from "react";
import Weather from "./weather";
import { css } from "@emotion/core";
import macbook from "../../static/assets/macbook.jpg";

// import Ip from "./ip";

export default function Banner () {
  const [meModal, setMeModal] = useState(false);
  const [youModal, setYouModal] = useState(false);
  const todaysDate = new Date().toLocaleDateString();
  // const [add, setAdd] = useState("");

  // useEffect(() => {
  //   fetch("https://portfoliopython.herokuapp.com/visitors", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ date: todaysDate })
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(responseData => {
  //       return setAdd(responseData);
  //     });
  // }, [todaysDate]);

  // useEffect(() => {
  //   setTimeout(ipChecker, 15000);
  // }, [todaysDate]);

  // const ipChecker = () => {
  //   if (add[0] == "") {
  //     fetch("https://portfoliopython.herokuapp.com/visitors", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ date: todaysDate })
  //     })
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(responseData => {
  //         return setAdd(responseData);
  //       });
  //   }
  // };

  const clickHandleMe = title => {
    setMeModal(true);
    // fetch("https://portfoliopython.herokuapp.com/clicks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     site: title,
    //     date: todaysDate
    //   })
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(responseData => console.log(responseData));
  };

  const clickHandleYou = title => {
    // ipChecker();
    setYouModal(true);
    // fetch("https://portfoliopython.herokuapp.com/clicks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     site: title,
    //     date: todaysDate
    //   })
    // }).then(response => {
    //   return response.json();
    // });
  };
  const someStyle = css`
    display: grid;
    justify-content: right;
    align-content: center;
    padding-right: 50px;
    background-image: url(static/assets/macbook.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    height: 700px;
    margin-bottom: 150px;
  `;
  const ryanStyle = css`
    font-size: 4rem;
    overflow: hidden;
    color: #050608;
  `;
  const buttonWrap = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    animation: buttons 1.5s ease 2s 1 forwards;
    opacity: 1;
  `;
  const button = css`
    transition: 0.5s ease;
    width: 30%;
    margin-bottom: 25px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border-style: none;
    border-radius: 4px;
    box-shadow: 0px 1px 2px 0px #232b39a1;
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
  `;
  const aboutYou = css`
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    width: 60%;
    height: 50%;
    border-radius: 7px;
    font-size: 1.2rem;
  `;
  const aboutYouHeading = css`
    grid-column: left-s/right-e;
    grid-row: header-s/header-e;
  `;
  const closeStyle = css`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px;
  `;
  const ryanPic = css`
    background-image: url(static/assets/ryan.jpg);
    background-size: cover;
    background-position-y: 34%;
    border-radius: 50%;
    height: 175px;
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
      <div css={youModal ? aboutMe : hideAboutMe}>
        <div css={aboutYou}>
          <div css={aboutYouHeading}>
            <h1>Hello There!</h1>
          </div>
          <Weather />
          {/* <Ip address={add} /> */}
          <div css={closeStyle} onClick={() => setYouModal(false)}>
            {" "}
            Close X
          </div>
        </div>
      </div>
      <div css={meModal ? aboutMeWrap : hideAboutMe}>
        <div css={aboutMe}>
          <div css={ryanPic} />
          <div>
            <p>
              I love the challenges that programming provides me on a daily
              basis, and I enjoy learning in general! When I'm not coding, I
              enjoy spending time with my family, watching basketball, or
              reading something historical.{" "}
            </p>
          </div>
          <div css={siteAboutHeading}>
            <h2>This Site:</h2>
          </div>
          <div>
            <p>
              Front end is done in React, recently refactored to include Hooks.
              Back-end work is mainly done with Python and Flask, with a
              PostgreSQL database.
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
