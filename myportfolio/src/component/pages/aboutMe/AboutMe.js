import React from 'react'
import './AboutMe.css'
import SideBar from '../sideBar/SideBar'
import Star from '../../assest/stars/Star'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className='introPg'>
        <div>
          <SideBar />
        </div>
        <div>
          <Star />
        </div>
        <div className='aboutme'>
          <div className='aboutTWrapper'>
            <span className='aboutTitle'>
              <p>About me</p>
              <i><MdKeyboardArrowRight /></i>
              <p>My Skills</p>
            </span>
            <div className='skillWrapper'>
              <h1>My Skills</h1>
              <p>As a product designer, I bring a diverse set of skills to the table. I am proficient in 
                industry-standard design tools such as Figma, Sketch, and Adobe Creative Suite, allowing me to create visually appealing and interactive designs 
                (just like this one you are currently viewing). Moreover, my skills and experience covers both the technical and non-technical horizon.</p>
            </div>
            <div className='techskill'>
              <h2>Technical Skills</h2>
              <div className='skillSet'>
                <div className='skilltab'>
                  <div>
                    <p>HTML</p>
                  </div>
                </div>
                <div className='skilltab'>
                  <div>
                    <p>CSS</p>
                  </div>
                </div>
                <div className='skilltab'>
                  <div>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className='skilltab'>
                  <div>
                    <p>Bootstrap</p>
                  </div>
                </div>
                <div className='skilltab'>
                  <div>
                    <p>React</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='pWrapper'>
              <div className='profileBtn'>
                <button type='btn'>
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