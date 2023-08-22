import React from 'react';
import './Intro.css'
import SideBar from '../sideBar/SideBar';
import starBig from "../../assest/images/starbig.png";
import starSmall from "../../assest/images/starsmall.png";
import victor from "../../assest/images/victor.jpg";
import { Link } from 'react-router-dom';


function Intro() {
  return (
    <div className='introPg'>
        <SideBar />
        <div className='stars'>
            <div className='starSmall'>
                <img src={starSmall} alt='star' />
            </div>
            <div className='starBig'>
                <img src={starBig} alt='star' />
            </div>
        </div>
        <div className='intro'>
            <div className='introN'>
                <h1>Hello, I'm Victor, </h1>
                <span> A Frontend Developer.</span>
            </div>
            <div className='myImageWrapper'>
                <div className='myImage'> 
                    <img src={victor} alt='myimage' />
                </div>
            </div>
            <div className='introDes'>
                <p> I'm a dedicated and enthusiastic product designer with a strong passion for creating user-centered experiences.
                    While designing to solve problems, I focus on the need to deliver effective conversion and align projects 
                    with business goals and objectives. Beyond my professional expertise, I have passion for nature and the solar system. 
                    This drives me to approach design challenges with a sense of wonder and a commitment to delivering exceptional experiences.</p>
            </div>
            <div className='introBtn'>
                <button type='btn'>
                    <Link to='/intro/profile'>Continue Reading...</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Intro