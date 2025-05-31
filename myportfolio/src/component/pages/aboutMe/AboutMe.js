import React from 'react'
import style from './AboutMe.module.css'
import SideBar from '../sideBar/SideBar'
import Star from '../../assest/stars/Star'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import BackBtn from '../../assest/backBtn/BackBtn'

function AboutMe() {

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
        <div className={style.aboutme}>
          <div className={style.aboutTWrapper}>
            <span className={style.aboutTitle}>
              <p>About me</p>
              <i><MdKeyboardArrowRight /></i>
              <p>My Skills</p>
            </span>
              <div className={style.skillWrapper}>
                <h1>My Skills</h1>
                {/* <p>As a product designer, I bring a diverse set of skills to the table. I am proficient in 
                  industry-standard design tools such as Figma, Sketch, and Adobe Creative Suite, allowing me to create visually appealing and interactive designs 
                  (just like this one you are currently viewing). Moreover, my skills and experience covers both the technical and non-technical horizon.</p> */}
                <p>As a frontend developer, I bring a diverse set of skills to the table. I am proficient 
                  in popular developer tools such as Visual Studio Code, Git, and npm, which allow me to 
                  efficiently write and manage code. Moreover, my skills and experience covers both the 
                  technical and non-technical aspects of frontend development and with a keen eye for design 
                  aesthetics crafting user interfaces or developing websites is made possible.
                </p>
              </div>
              <div className={style.techskill}>
                <h2>Technical Skills</h2>
                <div className={style.skillSet}>
                  <div className={style.skilltab}>
                    <div>
                      <p>HTML</p>
                    </div>
                  </div>
                  <div className={style.skilltab}>
                    <div>
                      <p>CSS</p>
                    </div>
                  </div>
                  <div className={style.skilltab}>
                    <div>
                      <p>JavaScript</p>
                    </div>
                  </div>
                  <div className={style.skilltab}>
                    <div>
                      <p>Git</p>
                    </div>
                  </div>
                  <div className={style.skilltab}>
                    <div>
                      <p>React</p>
                    </div>
                  </div>
                </div>
            </div>
              <div className={style.pWrapper}>
                <div className={style.profileBtn}>
                  <button type="button">
                    <Link to='/aboutme/more'>Next Slide...</Link>
                  </button>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe