import React, { useEffect, useState } from 'react';
import { portfolioObj } from './projectsTools';
import { Projects } from './projects';
import { Tools } from './tools';
import { Contact } from './contact';
import { Footer } from './footer';
import { Navbar } from './navbar';
import { Banner } from './banner';

export default function Home() {

  const todaysDate = new Date
  const constant = 1

  let [add, setAdd] = useState('')

  useEffect(() => {
    fetch('https://portfoliopython.herokuapp.com/visitors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date: todaysDate.toLocaleString() })
    }).then(response => { return response.json() })
      .then(responseData => { return setAdd(responseData) })
  }, [constant])

  const scrolled = () => {
    const nav = document.querySelector('.navbar');
    const tool = document.querySelectorAll('.scale-tool')
    const lines = document.querySelectorAll('.h-expand')
    const navScrollAt = 0
    const toolScroolAt = window.innerWidth > 700 ? 1650 : 1900;


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

  useEffect(() => {
    console.log('listener')
    window.addEventListener('scroll', () => scrolled())

    return function cleanup() {
      window.removeEventListener('scroll', () => scrolled())
      console.log('removed listener')
    }
  }, [constant])


  return (
    <div className='app'>
      {Navbar()}
      <div className='main-body'>
        <div className='main-body-content'>
          {Banner()}
          {Projects()}
          {Tools()}
          {Contact()}
          {Footer()}
        </div>
      </div>
    </div>
  );
}