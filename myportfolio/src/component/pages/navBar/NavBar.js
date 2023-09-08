import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <div className='navBar'>
        <ul>
            <li>
              <NavLink to="/"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Cover
              </NavLink>
            </li>
            <li>
              <NavLink to="/intro"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Intro
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutme"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>About me
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactme"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Contact
              </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar