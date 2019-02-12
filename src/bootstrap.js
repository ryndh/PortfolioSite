import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import  Home  from './components/home';


import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(

    <BrowserRouter>
      <Home />
    </BrowserRouter>

    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
