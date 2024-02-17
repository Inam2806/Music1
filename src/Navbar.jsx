// NavBar.jsx

import React from 'react';

import './styles/style.scss';
import {Link} from 'react-router-dom';
import './styles/navbar.scss';
const NavBar = () => {
    return (
        <div>
          <div class="navbar">
    <div href="#" class="nav-item"><strong>About</strong></div>
    <div href="#" class="nav-item"><strong>Contact</strong></div>
    <div class="nav-item">
       <Link to='/'  rel='noopener noreferrer'>
        <a href='ssf'>Home</a>
              </Link>
          </div>
        
</div>
  </div>
    );
};

export default NavBar;


