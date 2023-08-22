import React from 'react'
import './AboutMe.css'
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import BackBtn from '../../assest/backBtn/BackBtn';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import genesys from "../../assest/images/genesys.png";
import cert from "../../assest/images/LearnableCert.png";
 
function AboutBGPg() {
  return (
    <div className='introPg'>
        <div>
            <SideBar />
        </div>
        <div>
            <Star />
        </div>
        <div className='backBtnWrapper'>
            <BackBtn />
        </div>
        <div className='genesysWrap'>
          <div className='genesys'>
            <span className='aboutTitle'>
              <p>About me</p>
              <i><MdKeyboardArrowRight /></i>
              <p>Background/Developer School</p>
            </span>
            <div>
              <span  className='genesysT'>
                <h1>Genesys Tech Hub </h1>
                <h2> (2022-2023)</h2>
              </span>
              <div className='genesysP'>
                <p>The learnable Program was the perfect product development 
                  <span> internship program </span>to wrap up a great learning phase. The 
                  internship program is brought to you by <span>Genesys Tech Hub </span> 
                   (Africa's biggest tech talent accelerator).</p>
                <p>During this program, I honed my collaborative and 
                  communication skills. I <span>collaborated with teams</span> to develop a
                  <span> Decentralized Electronic Health Record software</span>. I actively led 
                   the design team to a successful developer hand-off.</p>
                <p>I was also part of various teams that conducted user research, 
                  brainstormed, sketched, combined elements of visual design create 
                  seamless and engaging user experiences and also conducted usability 
                  evaluation to ascertain the functionality and ease of use for our 
                  potential users.</p>
              </div>
            <div>
                <img src={genesys} alt='intern week' />
                <div className='learnableCert'>
                  <img src={cert} alt='intern week' />
                </div>
                <div className='pWrapper'>
                  <div className='profileBtn'>
                    <button type='btn'>
                      <Link to='/portfolio'>Next Slide...</Link>
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

export default AboutBGPg