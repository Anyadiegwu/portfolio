import React from 'react';
import style from './AboutMe.module.css';
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import BackBtn from '../../assest/backBtn/BackBtn';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
import genesys from "../../assest/images/genesys.png";
import cert from "../../assest/images/LearnableCert.jpg";
 
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
        <div className={style.genesysWrap}>
          <div className={style.genesys}>
            <span className={style.aboutTitle}>
              <p>About me</p>
              <i><MdKeyboardArrowRight /></i>
              <p>Background/Developer School</p>
            </span>
            <div>
              <span  className={style.genesysT}>
                <h1>Genesys Tech Hub </h1>
                <h2> (2022-2023)</h2>
              </span>
              <div className={style.genesysP}>
                <p>The learnable Program was the perfect product development 
                  <span> internship program </span>to wrap up a great learning phase. The 
                  internship program is brought to you by <span>Genesys Tech Hub </span> 
                   (Africa's biggest tech talent accelerator).</p>
                <p>It was quite an adventure!. During this program, I honed my collaborative and 
                  communication skills. I <span>collaborated with teams</span> to develop a
                  <span> Learning Management system app</span>.  Working with a diverse team 
                  allowed us to bring together different perspectives and skills, resulting in 
                  a well-rounded and successful project. </p>
                <p>It was truely an incredible learning experience, we conducted user research, 
                  brainstormed to come up with a user-centered web app. I was part of the team 
                  conducted usability evaluation to ascertain the functionality and ease of use for our 
                  potential users.</p>
              </div>
            <div>
              <div className={style.provepic}>
                <img src={genesys} alt='intern week' />
                <div className={style.learnableCert}>
                  <img src={cert} alt='intern week' />
                </div>
              </div>
                <div className={style.pWrapper}>
                  <div className={style.profileBtn}>
                    <button type={style.btn}>
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