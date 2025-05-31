import React, { useState } from 'react'
import PopUp from './Popup'
import { NavLink } from 'react-router-dom'
import earth from "../../assest/images/earth.png";
import "./Menu.css"


function Menu() {
    const [menu, setMenu] = useState(false)
    const showMenu = () =>{
        setMenu(!menu)
      }
  return (
    <>
    <div>
    <section className='mob-sidebar' onClick={showMenu}>
        <div className='mob-sideEarth'>
          <div className='mob-sideSpinner'>
          </div>
          <img src={earth} alt='earth' />
        </div>
    </section>
    </div>
    <PopUp trigger={menu}>
        <section 
        className={'sh-Menu'}
            >
            <div>
                <li><NavLink to="/"
                    className={({isActive, isPending}) => isPending ? "pending": 
                    isActive ? "active" : ""}>Cover</NavLink></li>
                <li><NavLink to="/intro"
                    className={({isActive, isPending}) => isPending ? "pending": 
                    isActive ? "active" : ""}>Intro</NavLink></li>
                <li><NavLink to="/aboutme"
                    className={({isActive, isPending}) => isPending ? "pending": 
                    isActive ? "active" : ""}>About me</NavLink></li>
                <li><NavLink to="/portfolio"
                    className={({isActive, isPending}) => isPending ? "pending": 
                    isActive ? "active" : ""}>Portfolio</NavLink></li>
                <li><NavLink to="/contactme"
                    className={({isActive, isPending}) => isPending ? "pending": 
                    isActive ? "active" : ""}>Contact</NavLink></li>
            </div>
        </section>
    </PopUp>
    </>
  )
}

export default Menu