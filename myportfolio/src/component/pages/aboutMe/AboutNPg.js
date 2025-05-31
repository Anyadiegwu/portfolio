import React from 'react';
import style from './AboutMe.module.css'
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
        <div className="backBtnWrapper">
            <BackBtn />
        </div>
        <div className={style.abbtWrap}>
            <div className={style.card}>
                <img src={card} alt='' />
            </div>
            <div className={style.aboutBT}>
                <div className={style.aboutBWrapper}>
                    <div className={style.aboutTW}>
                        <div className={style.aboutTTW}>
                            <span className={style.aboutTitle}>
                                <p>About me</p>
                                <i><MdKeyboardArrowRight /></i>
                                <p>My Skills</p>
                            </span>
                            <div className={style.aboutB}>
                                <div>
                                    <div className={style.techskills}>
                                        <h2>Non-Technical Skills</h2>
                                        <div className={style.skillSets}>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Empathizing</p>
                                                </div>
                                            </div>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Presentation</p>
                                                </div>
                                            </div>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Flexibility</p>
                                                </div>
                                            </div>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Time Management</p>
                                                </div>
                                            </div>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Continuous Learning</p>
                                                </div>
                                            </div>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Analytical Thinking</p>
                                                </div>
                                            </div>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Communication</p>
                                                </div>
                                            </div>
                                            <div className={style.skilltabs}>
                                                <div>
                                                    <p>Collaboration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.pWrapper}>
                                        <div className={style.profileBtn}>
                                            <button type={style.btn}>
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
        </div>
    </div>
  )
}

export default AboutNPg