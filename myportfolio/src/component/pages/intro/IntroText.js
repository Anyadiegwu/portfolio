import React from 'react'
import './Intro.css';
import SideBar from '../sideBar/SideBar';
import { Link } from 'react-router-dom';
import BackBtn from '../../assest/backBtn/BackBtn';
import Star from '../../assest/stars/Star';

function IntroText() {
  return (
    <div className='introPg'>
        <div className='side'>
        <SideBar />
        </div>
        <div>
            <Star />
        </div>
        <div className='backBtnWrapper'>
            <BackBtn />
        </div>
        <div className='profile'>
            <div className='profileMain'>
                <h2>Intro</h2>
                <div className='details'>
                    <p className='detSp1'>I’m a dedicated and enthusiastic product designer with a strong passion for <span>creating user-centered experiences.</span>
                        While designing to solve problems, I focus on the need to deliver effective conversion and align projects with <span> business goals and objectives.</span>
                        Beyond my professional expertise, I have passion for nature and the solar system. This drives me to approach design 
                        challenges with a sense of wonder and a commitment to delivering exceptional experiences.</p>
                    <p className='detSp2'>I find inspiration in the beauty and complexity of the <span>natural world.</span> As a nature enthusiast, I often draw parallels between the elegance 
                        of nature's design and the principles I apply in my work. Just as the intricacies of a delicate flower captivate my attention, I strive to create 
                        <span> designs that engage users, making their digital journeys seamless and enjoyable.</span></p>
                    <p className='detSp3'>My fascination with the <span>solar system</span> fuels my curiosity and imagination, influencing my design thinking. Exploring the vastness of the 
                        cosmos reminds me of the importance of clarity and simplicity in UX design. I believe in distilling complex ideas into elegant and 
                        accessible interfaces, allowing users to navigate through digital spaces with ease and confidence.</p>
                    <p className='detSp4'>“Let's embark on a journey of designing delightful experiences that not only meet user needs but also inspire a sense of awe and wonder”.</p>
                </div>
            </div>
            <div className='profileBtn'>
                <button type='btn'>
                    <Link to='/aboutme'>Next Slide...</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default IntroText;