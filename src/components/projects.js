import React, { useState, useEffect } from "react";
import { portfolioObj } from "./projectsTools";
import { css, keyframes } from "@emotion/core";
export default function Projects () {
  const [hoverState, setHoverState] = useState(false);
  const [projects, setProjects] = useState(portfolioObj.projects);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
    /* border-top: 1px solid #050608; */
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
    @media (max-width: 700px) {
      grid-auto-rows: 175px;
    }
  `;
  const gitHub = css`
    margin: 70px 0px;
    display: flex;
    align-items: center;
  `;
  const gitHubLink = css`
    transition: 0.5s ease;
    text-decoration: none;
    color: black;
    font-size: 3rem;
    &:hover {
      transition: 0.5s ease;
      transform: scale(1.1);
    }
  `;
  const projectStyle = project =>
    css`
      position: relative;
      transition: 1s ease;
      line-height: 2rem;
      width: 100%;
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
    font-size: 1.1rem;
    color: white;
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
    }
    @media (max-width: 700px) {
      font-size: 0.6rem;
      line-height: 1rem;
      h1 {
        font-size: .7rem;
      }
    }
  `;
  const projectDescriptionAnimation = keyframes`
    10%, 20% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
  `;
  const includeAnimation = (length) => (
    css`
    animation: ${projectDescriptionAnimation} 10.4s ease ${(length * 2.6) + 1}s infinite;
    `
  );
  const projectDescription = css`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 700px){
      padding: 10px;
    }
  `;
  const gitHubFlex = css`
    font-size: 1.3rem;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;
  return (
    <div id="projScroll" css={projWrapper}>
      <h1 css={projHeading}>Past Projects</h1>
      <div css={projGrid}>
        {projects.map((project, index) => {
          return (
            <a
              css={projectStyle(project)}
              href={project.url}
              target="_blank"
              key={index}
              onMouseEnter={() => setHoverState(true)}
              onMouseLeave={() => setHoverState(false)}
            >
              <div css={hoverState ? projectDescriptionWrap : [projectDescriptionWrap, includeAnimation(index)]}>
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
        <div css={gitHubFlex}>
          <p>
            <span>
              Want to see the code? <br />
              Visit my github by clicking the icon
            </span>
          </p>
          <a
            css={gitHubLink}
            href="http://www.github.com/ryndh/"
            target="_blank"
            className="fab fa-github"
          />
        </div>
      </div>
    </div>
  );
}
