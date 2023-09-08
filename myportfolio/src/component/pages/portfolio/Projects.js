import React from 'react';
import "./Portfolio.css";
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import { Link } from 'react-router-dom';
import BackBtn from '../../assest/backBtn/BackBtn';




function Projects() {
  return (
    <div className='introPg'>
        <div className='pSideBar'>
            <SideBar />
        </div>
        <div className='pWBtn'>
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
      <div className='projectWrapper'>

      </div>
    </div>
  )
}

export default Projects