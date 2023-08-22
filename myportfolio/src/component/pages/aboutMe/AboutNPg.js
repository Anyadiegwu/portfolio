import React from 'react';
import './AboutMe.css'
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import BackBtn from '../../assest/backBtn/BackBtn';
import card from '../../assest/images/Group.png';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';


function AboutNPg() {
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
        <div>
            <div className='card'>
                <img src={card} alt='' />
            </div>
            <div className='aboutBT'>
                <div className='aboutBWrapper'>
                    <div className='aboutTW'>
                        <span className='aboutTitle'>
                            <p>About me</p>
                            <i><MdKeyboardArrowRight /></i>
                            <p>My Skills</p>
                        </span>
                        <div className='aboutB'>
                            <div className='techskills'>
                                <h2>Non-Technical Skills</h2>
                                <div className='skillSet'>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Empathizing</p>
                                        </div>
                                    </div>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Presentation</p>
                                        </div>
                                    </div>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Flexibility</p>
                                        </div>
                                    </div>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Time Management</p>
                                        </div>
                                    </div>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Continuous Learning</p>
                                        </div>
                                    </div>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Analytical Thinking</p>
                                        </div>
                                    </div>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Communication</p>
                                        </div>
                                    </div>
                                    <div className='skilltabs'>
                                        <div>
                                            <p>Collaboration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pWrapper'>
                                <div className='profileBtn'>
                                    <button type='btn'>
                                        <Link to='/aboutme/codecamp'>Next Slide...</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutNPg