import React from 'react'
import './SideBar.css';
import uranus from "../../assest/images/uranus.png";
import earth from "../../assest/images/earth.png";
import mars from "../../assest/images/mars.png";
import {NavLink} from 'react-router-dom';
import Menu from '../menu/Menu';



function SideBar(show) {

  return (
    <div className="mysidebar">
      <Menu />

        <div className='sidePlanet'>
            <div className='sideEarth'>
                <div className='sideSpinner'>
                </div>
                <img src={earth} alt='earth' />
            </div>
            <div className='sideMars'>
                <img src={mars} alt='mars' />
            </div>
            <div className='sideUranus'>
                <img src={uranus} alt='uranus' />
            </div>
        </div>
        <ul className='sideBarLink'>
            <li className='sideBarLink1'>
              <NavLink to="/"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Cover
              </NavLink>
            </li>
            <li className='sideBarLink2'>
              <NavLink to="/intro"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Intro
              </NavLink>
            </li>
            <li className='sideBarLink3'>
              <NavLink to="/aboutme"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>About me
              </NavLink>
            </li>
            <li className='sideBarLink4'>
              <NavLink to="/portfolio"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Portfolio
              </NavLink>
            </li>
            <li className='sideBarLink5'>
              <NavLink to="/contactme"
                className={({isActive, isPending}) => isPending ? "pending": 
                isActive ? "active" : ""}>Contact
              </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default SideBar