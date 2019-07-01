import React, { useState, useEffect } from "react";
import { portfolioObj } from "./projectsTools";
import { css } from "@emotion/core";
import img from "../../static/assets/movie.png";
export default function Projects () {
  const [projects, setProjects] = useState(portfolioObj.projects);
  // const [clicks, setClicks] = useState([]);
  // const [showStats, setShowStats] = useState(false);
  // const currentDate = new Date().toLocaleDateString();

  // useEffect(() => {
  //   fetch("https://portfoliopython.herokuapp.com/click_stats", {
  //     method: "GET",
  //     headers: {
  //       "accept": "application/json",
  //       "content-type": "application/json"
  //     }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(responseData => {
  //       return responseData;
  //     })
  //     .then(data => {
  //       setClicks(data);
  //     })
  //     .catch(err => console.log("Fetch Error", err));
  // }, [projects]);

  // const visited = title => {
  //   fetch("https://portfoliopython.herokuapp.com/clicks", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       site: title,
  //       date: currentDate
  //     })
  //   }).then(response => {
  //     return response.json();
  //   });
  // };
  const projWrapper = css`
    text-align: center;
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const projHeading = css`
    width: 80%;
    padding-top: 30px;
    border-top: 1px solid #050608;
    font-size: 3.5rem;
    margin-bottom: 40px;
  `;
  const projGrid = css`
    margin-top: 20px;
    width: 80%;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
    grid-gap: 50px 40px;
  `;
  const gitHub = css`
    margin-top: 70px;
    display: flex;
    align-items: center;
  `;
  const gitHubLink = css`
    transition: 0.5s ease;
    text-decoration: none;
    color: black;
    font-size: 3rem;
    margin-left: 15px;
    &:hover {
      transition: 0.5s ease;
      transform: scale(1.1);
    }
  `;
  const projectStyle = project =>
    css`
      position: relative;
      transition: 1s ease;
      line-height: 2.5rem;
      width: 100%;
      /* padding: 30px 50px; */
      opacity: 0.8;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #00d3e4;
      font-weight: 700;
      text-decoration: none;
      background-image: url(${project.image});
      background-size: cover;
      background-position: center;
      &:hover {
        opacity: 1;
        transition: 0.5s ease;
        transform: scale(1.02);
      }
      &:active {
        transition: 0.5s ease;
        transform: scale(0.98);
      }
    `;
  const projectDescriptionWrap = css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding: 55px 40px; */
    align-items: center;
    font-size: 1.3rem;
    color: #050608;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #050608d6;
    border-radius: 9px;
    opacity: 0;
    transition: 0.5s ease;
    &:hover {
      opacity: 0.9;
      color: white;
    }
  `;

  const projectDescription = css`
    height: 100%;
    padding: 20px 40px;
  `;
  return (
    <div css={projWrapper}>
      <h1 css={projHeading}>Projects</h1>
      {/* <button onClick={() => {
                    setShowStats(!showStats)
                    console.log(showStats )
                    }}>{showStats ? 'Hide Link Stats' : 'Show Link Stats'}</button> */}
      <div css={projGrid}>
        {projects.map((project, index) => {
          return (
            <a
              css={projectStyle(project)}
              href={project.url}
              target="_blank"
              key={index}
              // onClick={() => visited(project.title)}
            >
              <div css={projectDescriptionWrap}>
                <div css={projectDescription}>
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <h3 href={project.url} target="_blank">
                    Click to visit!
                  </h3>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      <div css={gitHub}>
        <h2>
          <p>
            Want to see the code? Visit my github by clicking here{" "}
            {window.innerWidth > 700 ? (
              <i className="far fa-hand-point-right" />
            ) : (
              <i className="far fa-hand-point-down" />
            )}
          </p>
        </h2>
        <a
          href="http://www.github.com/ryndh/"
          target="_blank"
          css={gitHubLink}
          // onClick={() => visited("Github")}
        >
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
}
