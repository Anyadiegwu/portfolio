import React, { useState } from 'react';
import style from "./Portfolio.module.css";
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import { Link } from 'react-router-dom';
import BackBtn from '../../assest/backBtn/BackBtn';




function Projects() {
  const [navBar, setNavBar] = useState(true)
  const allow = (data) =>{
      setNavBar(data)  
  }
  return (
    <div className='introPg'>
        <div className='pSideBar'>
            <SideBar />
        </div>
        <div className={style.pWBtn}>
            <div className='profileBtn'>
              <button type='btn'>
                <Link to='/contactme'>Next Slide...</Link>
                </button>
            </div>
        </div>
        <div>
          <Star />
        </div>
        <div className='backBtnWrapper'>
            <BackBtn />
        </div>
      <div className={style.projectWrapper}>

      </div>
    </div>
  )
}

export default Projects