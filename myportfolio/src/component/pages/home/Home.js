import React from 'react'
import './Home.css';
import uranus from "../../assest/images/uranus.png";
import saturn from "../../assest/images/saturn.png";
import earth from "../../assest/images/earth.png";
import mars from "../../assest/images/mars.png";
import mercury from "../../assest/images/mercury.png";
import NavBar from '../navBar/NavBar';



function Home() {
  return (
    <div className='homePg'>
        <header>
            <h1>Welcome</h1>
            <p>To my Portfolio</p>
        </header>
        <main>
            <div className='planets'>
                <div className='saturn'>
                    <img src={saturn} alt='saturn' />
                </div>
                <div className='mercury'>
                    <img src={mercury} alt='mercury' />
                </div>
                <div className='earth'>
                    <div className='spinner'>
                    </div>
                    <img src={earth} alt='earth' />
                </div>
                <div className='mars'>
                    <img src={mars} alt='mars' />
                </div>
                <div className='uranus'>
                    <img src={uranus} alt='uranus' />
                </div>
            </div>
            <div className='sideBar'>
                <NavBar />
            </div>
        </main>
    </div>
  )
}

export default Home