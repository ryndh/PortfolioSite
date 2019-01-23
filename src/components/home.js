import React, { Component } from 'react';
import { projectsTools } from './projectsTools';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = projectsTools
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrolled)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolled)
  }

  scrolled = () => {
    const nav = document.querySelector('.navbar');
    const tool = document.querySelectorAll('.scale-tool')
    const lines = document.querySelectorAll('.h-expand')
    const navScrollAt = 0
    const toolScroolAt = window.innerWidth > 700 ? 1100 : 1850;

    this.setState({ offset: window.pageYOffset })

    if (window.pageYOffset > navScrollAt) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }

    if (window.pageYOffset > toolScroolAt) {
      tool.forEach((item) => {
        item.classList.add('bigger')
      })
      lines.forEach((line)=> {
        line.classList.add('line')
      })
    } else {
      tool.forEach((item) => {
        item.classList.remove('bigger')
      })
      lines.forEach((line)=> {
        line.classList.remove('line')
      })
    }

  }
  
  click = (e) => {
    switch(e.target.name) {
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        break
      case 'proj':
        window.scrollTo({
          top: 575,
          behavior: "smooth",
        })
        break
      case 'contact':
        window.scrollTo({
          top: window.innerWidth > 700 ? 1948 : 2700,
          behavior: "smooth",
        })
        break
    }
  }
  
  render() {
    let size = { backgroundSize: `${120 + (this.state.offset / 4)}%` }
    let sizePhone = { backgroundSize: `${150 + (this.state.offset / 4)}%` }
    let width = window.innerWidth;
    return (
      <div className='app'>
        <div className='navbar'>
          <a onClick={this.click} name='home' className='link' >Home</a>
          <a onClick={this.click} name='proj'className='link' >Projects</a>
          <a onClick={this.click} name='contact'className='link' >Contact</a>
        </div>
        <div className='main-body'>
          <div className='main-body-content'>
            <div className='top-grid' style={width < 700 ? sizePhone : null}>
              <div className='top-left'>
                <p className='ryan'>Hey there, I'm <span> Ryan</span></p>

              </div>
              <div className='top-right' style={size}></div>
            </div>
            <div className='projects-wrapper' id='proj'>
              <h1 className='projects-heading'>Projects</h1>
              <div className='projects-grid'>
                {this.state.projects.map((project, index) => {
                  return (
                    <a className='project' href={project.url} target='_blank' key={index}>
                      <h1>{project.title}</h1>
                      <h3 href={project.url} target='_blank'>Check it out!</h3>
                      <div className='description'>
                        <p>{project.description}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
            <div className='tools-wrapper'>
              <h1 className='tools-heading'>A Few Tools I Use</h1>
              <div className='tools-grid'>
                {this.state.tools.map((tool, index) => {
                  return (
                    <div className='tool' key={index}>
                      <h1 className='h-expand'>{tool.title}</h1>
                      <i className={`${tool.icon} scale-tool`}></i>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='contact-wrapper' id='contact'>
              <h1 className='contact-heading'>Get In Touch</h1>
              <div className='contact-grid'>
                <div className='contact'>
                  <h3>I'm always open to new ideas or opportunities! <br/> Send me a message on LinkedIn and let's talk!</h3>
                  <a href='https://www.linkedin.com/in/ryan-hull-3b4806b9/' target='_blank' className='linkedin-link'><i className="fab fa-linkedin"></i></a>
                </div>
              </div>
            </div>
            <div className='footer-wrapper'>
                <div className='footer'>
                &copy; 2018  &#124; Ryan
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
