import React, { useEffect, useState } from 'react';
import { portfolioObj } from './projectsTools';
import { Projects } from './projects';
import { Tools } from './tools';
import { Contact } from './contact';
import { Footer } from './footer';

export default function Home() {

  const [offset, setOffset] = useState(0)
  const todaysDate = new Date
  let size = { backgroundSize: `${100 + (offset / 20)}%` }
  let sizePhone = { backgroundSize: `${120 + (offset / 20)}%` }
  let width = window.innerWidth;

  useEffect(() => {
    fetch('https://portfoliopython.herokuapp.com/visitors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ date: todaysDate.toString()})
          }).then(response => { return response.json() })     
  })

  useEffect(() => {
    window.addEventListener('scroll', scrolled())

    return function cleanup() {
      window.removeEventListener('scroll', scrolled())
    }
  })

  const scrolled = () => {
    const nav = document.querySelector('.navbar');
    const tool = document.querySelectorAll('.scale-tool')
    const lines = document.querySelectorAll('.h-expand')
    const navScrollAt = 0
    const toolScroolAt = window.innerWidth > 700 ? 1650 : 1900;

    setOffset({ offset: window.pageYOffset })

    if (window.pageYOffset > navScrollAt) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }

    if (window.pageYOffset > toolScroolAt) {
      tool.forEach((item) => {
        item.classList.add('bigger')
      })
      lines.forEach((line) => {
        line.classList.add('line')
      })
    } else {
      tool.forEach((item) => {
        item.classList.remove('bigger')
      })
      lines.forEach((line) => {
        line.classList.remove('line')
      })
    }

  }

  const visited = (title) => {
    fetch('https://portfoliopython.herokuapp.com/clicks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ site: title })
    }).then(response => { return response.json() })
  }

  const click = (e) => {
    switch (e.target.name) {
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        break
      case 'proj':
        window.scrollTo({
          top: 800,
          behavior: "smooth",
        })
        break
      case 'contact':
        window.scrollTo({
          top: window.innerWidth > 700 ? 2450 : 2700,
          behavior: "smooth",
        })
        break
    }
  }


  return (
    <div className='app'>
      <div className='navbar'>
        <a onClick={() => click()} name='home' className='link' >Home</a>
        <a onClick={() => click()} name='proj' className='link' >Projects</a>
        <a onClick={() => click()} name='contact' className='link' >Contact</a>
      </div>
      <div className='main-body'>
        <div className='main-body-content'>
          <div className='top' style={width < 700 ? sizePhone : null} style={size}>
            <p className='ryan'><span>Ryan Hull</span></p>
            <p className='dev'><span>Full Stack Developer</span></p>
          </div>
          {Projects()}
          {Tools()}
          {Contact()}
          {Footer()}
        </div>
      </div>
    </div>
  );
}
