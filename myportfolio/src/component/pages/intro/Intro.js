import React from 'react';
import './Intro.css'
import SideBar from '../sideBar/SideBar';
import starBig from "../../assest/images/starbig.png";
import starSmall from "../../assest/images/starsmall.png";
import victor from "../../assest/images/victor.jpg";
import { Link} from 'react-router-dom';


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
                <section>
                    <h1>Hello, I'm Victor, </h1>
                    <span> A Frontend Developer.</span>
                </section>
            </div>
            <div className='myImageWrapper'>
                <div className='myImage'> 
                    <img src={victor} alt='myimage' />
                </div>
            </div>
            <div className='introDes'>
                    <p className='detSp1'>I’m a dedicated and enthusiastic a frontend developer with a passion for <span>nature and frontend development skills. </span> 
                    I not only specialize in crafting visually appealing and interactive designs that aligns with business goals but also <span> creating user-centered experiences, </span> 
                    It's like the way nature seamlessly connects and aligns with the needs of its inhabitants...</p>
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