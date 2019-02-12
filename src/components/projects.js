import React, { useState, useEffect } from 'react';
import { portfolioObj } from './projectsTools';

export function Projects() {
    const [projects, setProjects] = useState(portfolioObj.projects);
    const [clicks, setClicks] = useState([])

    useEffect(() => {
        fetch('https://portfoliopython.herokuapp.com/click_stats', {
            method: "GET",
            headers: {
                "accept": "application/json",
                "content-type": 'application/json'
            }
        })
            .then(response => { return response.json() })
            .then(responseData => { return responseData })
            .then(data => { setClicks({ clicks: data }) })
            .catch(err => console.log("Fetch Error", err))

    })


    return (
        <div className='projects-wrapper' id='proj'>
            <h1 className='projects-heading'>Projects</h1>
            <div className='projects-grid'>
                {projects.map((project, index) => {
                    return (
                        <a className={`project ${project.classname}`} href={project.url} target='_blank' key={index} onClick={() => this.visited(project.title)}>

                            <div className='description'>
                                <h1>{project.title}</h1>
                                <p>{project.description}</p>
                                <h3 href={project.url} target='_blank'>Click to visit!</h3>
                            </div>
                            <div className='stats'>
                                {`Link clicked ${clicks.length > 0 ? clicks.filter(item => item[0] == project.title)[0][1] : null} times since 2/11/19`}
                            </div>
                        </a>
                    )
                })}
            </div>
            <div className='github-link'>
                <h2 >Want to see the code? Go to my github by clicking here {window.innerWidth > 700 ? <i className="far fa-hand-point-right"></i> : <i className="far fa-hand-point-down"></i>}</h2>
                <a href='http://www.github.com/ryndh/' target='_blank'><i className="fab fa-github"></i></a>
            </div>
        </div>
    );
}