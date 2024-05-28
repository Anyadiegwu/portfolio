import React, { useState } from 'react'
// import './AboutMe.css'
import style from './AboutMe.module.css'
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import BackBtn from '../../assest/backBtn/BackBtn';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import BLogo from '../../assest/images/BCC.jpg';
import BCert from "../../assest/images/breketecert.jpg"


function AboutCCPg() {
  const [navBar, setNavBar] = useState(true)
  const allow = (data) =>{
      setNavBar(data)  
  }
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
        <div className={style.genesysWrap}>
            <div className={style.bcc}>
                <span className={style.aboutTitle}>
                <p>About me</p>
                <i><MdKeyboardArrowRight /></i>
                <p>Background/Developer School</p>
                </span>
                <div className={style.bccTWrap}>
                    <div className={style.bccT}>
                        <h1>Brekete Code Camp BCC</h1>
                        <h2>(2022)</h2>
                    </div>
                    <div className={style.genesysP}>
                        {/* <p>The learnable Program was the perfect product development 
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
                        potential users.</p> */}

                        <p>I re-call my first learning program as a frontend developer! which was 
                        conducted by <span> TECHPATRIATE in association with the Brekete family </span> in an attempt 
                        to empower the Youth with tech skills brought about <span>Brekete codecamp. </span></p>
                        <p> It was such an exciting experience. I started by creating a simple webpage 
                        using <span> HTML and CSS.</span> I learned how to structure the content with HTML tags 
                        and style it with CSS properties. It was a basic project, but it gave me a 
                        <span> solid foundation in frontend development. </span></p> 
                        <p> From there, I continued to learn 
                        and explore more advanced concepts and technologies. It's amazing how far 
                        I've come since then! </p>
                    </div>
                </div>
                <div className={style.bccImg}>
                    <img src={BLogo} alt='brekete logo' />
                    <img src={BCert} alt='brekete cert' />
                </div>
                <div className={style.pWrapper}>
                  <div className={style.profileBtn}>
                    <button type={style.btn}>
                      <Link to='/aboutme/genesys'>Next Slide...</Link>
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutCCPg