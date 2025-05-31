import React from 'react';
import style from "./Portfolio.module.css";
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import BackBtn from '../../assest/backBtn/BackBtn';
import moon from '../../assest/images/Moon.png';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import vector from '../../assest/images/vector.png'
// , { useState }

function Portfolio() {
  // const [navBar, setNavBar] = useState(true)
  // const allow = (data) =>{
  //     setNavBar(data)  
  // }
  return (
    <div className='introPg'>
      <div>
        <SideBar />
      </div>
      <div>
        <Star />
        <div className={style.moon}>   
          <img src={moon} alt='moon' />
        </div>
      </div>
      <div className='backBtnWrapper'>
        <BackBtn />
      </div>
      <div className={style.portfolWrapper}>
        <div className={style.portfolio}>
          <span className={style.aboutTitle}>
            <p>About me</p>
            <i><MdKeyboardArrowRight /></i>
            <p>Portfolio highlight</p>
          </span>  
          <div className={style.portfol}>
            <h1>Portfolio Highlight</h1>
            <p>In my portfolio, you will find a <span>variety of projects </span>
               showcasing my skills. My project highlight include 
                <span> personal projects</span>, my collaborative effort in <span>team 
               projects</span> and also <span>project challenges</span>.</p>
            <div className={style.nextWrap}>
              <img src={vector} alt='' />
              <div className={style.pWrapper}>
                <div className={style.profileBtn}>
                  <button type={style.btn}>
                    <Link to='/portfolio/dice'>Next Slide...</Link>
                  </button>
                </div>
              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio