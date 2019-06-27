import React, { useState, useEffect } from "react";
import Weather  from "./weather";
import Ip from "./ip";

export default function Banner() {
  const [meModal, setMeModal] = useState(false);
  const [youModal, setYouModal] = useState(false);
  const todaysDate = new Date().toLocaleDateString();
  const [add, setAdd] = useState("");

  useEffect(() => {
    fetch("https://portfoliopython.herokuapp.com/visitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ date: todaysDate })
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => {
        return setAdd(responseData);
      });
  }, [todaysDate]);

  useEffect(() => {
    setTimeout(ipChecker, 15000);
  }, [todaysDate]);

  const ipChecker = () => {
    if (add[0] == "") {
      fetch("https://portfoliopython.herokuapp.com/visitors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ date: todaysDate })
      })
        .then(response => {
          return response.json();
        })
        .then(responseData => {
          return setAdd(responseData);
        });
    }
  };

  const clickHandleMe = title => {
    setMeModal(true);
    fetch("https://portfoliopython.herokuapp.com/clicks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site: title,
        date: todaysDate
      })
    })
      .then(response => {
        return response.json();
      })
      .then(responseData => console.log(responseData));
  };

  const clickHandleYou = title => {
    ipChecker();
    setYouModal(true);
    fetch("https://portfoliopython.herokuapp.com/clicks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        site: title,
        date: todaysDate
      })
    }).then(response => {
      return response.json();
    });
  };

  return (
    <div className="top">
      <p className="ryan">
        <span>Ryan Hull</span>
      </p>
      <p className="dev">
        <span>Full Stack Developer</span>
      </p>
      <div className="button-wrap">
        <button
          onClick={() => clickHandleMe("About Me")}
          className="banner-button"
        >
          About Me
        </button>
        <button
          onClick={() => clickHandleYou("About You")}
          className="banner-button"
        >
          About You
        </button>
      </div>
      <div className={youModal ? "about-you-wrap" : "hide-about-you-wrap"}>
        <div className="about-you">
          <div className="about-you-heading">
            <h1>Hello There!</h1>
          </div>
          <Weather/>
          {/* <Ip address={add} /> */}
          <div className="close" onClick={() => setYouModal(false)}>
            {" "}
            Close X
          </div>
        </div>
      </div>
      <div className={meModal ? "about-me-wrap" : "hide-about-me-wrap"}>
        <div className="about-me">
          <div className="ryan-pic" />
          <div className="ryan-about">
            <p>
              I love the challenges that programming provides me on a daily
              basis, and I enjoy learning in general! When I'm not coding, I
              enjoy spending time with my family, watching basketball, or
              reading something historical.{" "}
            </p>
          </div>
          <div className="site-about-heading">
            <h2>This Site:</h2>
          </div>
          <div className="site-about">
            <p>
              Front end is done in React, recently refactored to include Hooks.
              Back-end work is mainly done with Python and Flask, with a
              PostgreSQL database.
            </p>
          </div>
          <div className="close" onClick={() => setMeModal(false)}>
            Close X
          </div>
        </div>
      </div>
    </div>
  );
}
