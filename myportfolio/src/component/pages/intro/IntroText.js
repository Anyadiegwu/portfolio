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
            <section className='prof-wrap'>
                <div className='profileMain'>
                    <section>
                    <h2>Intro</h2>
                    <div className='details'>
                        {/* <p className='detSp1'>I’m a dedicated and enthusiastic product designer with a strong passion for <span>creating user-centered experiences.</span>
                            While designing to solve problems, I focus on the need to deliver effective conversion and align projects with <span> business goals and objectives.</span>
                            Beyond my professional expertise, I have passion for nature and the solar system. This drives me to approach design 
                            challenges with a sense of wonder and a commitment to delivering exceptional experiences.</p>
                        <p className='detSp2'>I find inspiration in the beauty and complexity of the <span>natural world.</span> As a nature enthusiast, I often draw parallels between the elegance 
                            of nature's design and the principles I apply in my work. Just as the intricacies of a delicate flower captivate my attention, I strive to create 
                            <span> designs that engage users, making their digital journeys seamless and enjoyable.</span></p>
                        <p className='detSp3'>My fascination with the <span>solar system</span> fuels my curiosity and imagination, influencing my design thinking. Exploring the vastness of the 
                            cosmos reminds me of the importance of clarity and simplicity in UX design. I believe in distilling complex ideas into elegant and 
                            accessible interfaces, allowing users to navigate through digital spaces with ease and confidence.</p>
                        <p className='detSp4'>“Let's embark on a journey of designing delightful experiences that not only meet user needs but also inspire a sense of awe and wonder”.</p> */}
                        
                        <p className='detSp1'>I’m a dedicated and enthusiastic a frontend developer with a passion for <span>nature and frontend development skills. </span> 
                        I not only specialize in crafting visually appealing and interactive designs that aligns with business goals but also <span> creating user-centered experiences, </span> 
                        It's like the way nature seamlessly connects and aligns with the needs of its inhabitants.</p>
                        <p className='detSp2'> My goal is to make sure users have a <span> smooth and enjoyable journey </span> while using the websites and applications I build. With expertise in HTML, CSS, 
                        JavaScript and React, <span> I bring ideas to life and deliver exceptional frontend solutions.</span></p> 
                        <p className='detSp3'>Whether it's building websites or developing user interfaces, <span> My dedication shines through. </span> My mindset of effective conversion and aligning 
                        projects with business goals showcases my commitment to delivering results and turning concepts into reality. I'm excited to showcase my skills and creativity through my 
                        portfolio which shows how I bring the beauty and balance of nature into my work, just like the intricate ecosystems that thrive around us..</p>
                        <p className='detSp4'>Feel free to explore my work and let's connect to discuss any frontend development opportunities. Looking forward to collaborating with you!</p>
                    </div>
                    </section>
                </div>
                <div className='profileBtn'>
                    <button type='btn'>
                        <Link to='/aboutme'>Next Slide...</Link>
                    </button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default IntroText;