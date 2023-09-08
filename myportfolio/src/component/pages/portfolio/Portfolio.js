import React from 'react';
import "./Portfolio.css";
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import BackBtn from '../../assest/backBtn/BackBtn';
import moon from '../../assest/images/Moon.png';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import vector from '../../assest/images/vector.png'


function Portfolio() {
  return (
    <div className='introPg'>
      <div>
        <SideBar />
      </div>
      <div>
        <Star />
        <div className='moon'>   
          <img src={moon} alt='moon' />
        </div>
      </div>
      <div className='backBtnWrapper'>
        <BackBtn />
      </div>
      <div className='portfolWrapper'>
        <div>
          <span className='aboutTitle'>
            <p>About me</p>
            <i><MdKeyboardArrowRight /></i>
            <p>Portfolio highlight</p>
          </span>  
          <div className='portfol'>
            <h1>Portfolio Highlight</h1>
            <p>In my portfolio, you will find a <span>variety of projects </span>
               showcasing my design skills. My project highlight include 
                <span> personal projects</span>, my collaborative effort in <span>team 
               projects</span> and also <span>project challenges</span>. By leveraging my skills
                I have created designs that is intriguing and captivating. </p>
            <div className='nextWrap'>
              <img src={vector} alt='' />
              <div className='pWrapper'>
                <div className='profileBtn'>
                  <button type='btn'>
                    <Link to='/portfolio/projects'>Next Slide...</Link>
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