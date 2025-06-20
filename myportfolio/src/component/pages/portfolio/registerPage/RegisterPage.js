import React from 'react';
import style from "./RegisterPage.module.css";
import SideBar from '../../sideBar/SideBar';
import Star from '../../../assest/stars/Star';
import { Link } from 'react-router-dom';
import BackBtn from '../../../assest/backBtn/BackBtn';
import register from '../../../assest/images/register.jpg';


function Dice() {

  return (
    <div className='introPg'>
        <div className='pSideBar'>
            <SideBar />
        </div>
        <div>
          <Star />
        </div>
        <div className='backBtnWrapper'>
            <BackBtn />
        </div>
      <div className={style.projectWrapper}>
        <div className={style.project}>
            <div>
                <div>
                    <h1>Register</h1>
                    <Link to="https://register-eta-self.vercel.app/" className={style.projectL}>
                        <img src={register} alt='Project_Image'/>
                    </Link>
                    <p>A simple well designed and user-friendly registration page. Developed with <span>REACT. </span>
                        Click the link below to explore. Enjoy 
                    </p>
                    <div className={style.linkTag}>
                        <Link to="https://register-eta-self.vercel.app/" target='blank'>Page</Link>
                        <Link to="https://github.com/Anyadiegwu/register-pg" target='blank'>Github</Link> 
                    </div>
                </div>
            </div>
            <div className={style.pWBtn}>
                <div className='profileBtn'>
                <button type='btn'>
                    <Link to='/portfolio/hr'>Next Slide...</Link>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dice