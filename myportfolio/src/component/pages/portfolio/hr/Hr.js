import React from 'react';
import style from "./Hr.module.css";
import SideBar from '../../sideBar/SideBar';
import Star from '../../../assest/stars/Star';
import { Link } from 'react-router-dom';
import BackBtn from '../../../assest/backBtn/BackBtn';
import login from '../../../assest/images/hrLoginPg.jpg';

// , { useState }

function Dice() {
//   const [navBar, setNavBar] = useState(true)
//   const allow = (data) =>{
//       setNavBar(data)  
//   }
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
                <h1>Human Resources</h1>
                <Link to="https://hrproject-anyadiegwus-projects.vercel.app/" className={style.projectL}>
                    <img src={login} alt='Project_Image'/>
                </Link>
                <p>Human Resources Page for coperate business, to proper monitor the progress and welfare of its workers. 
                    This is only an outline for the Employee not the HR Manager. 
                    Developed using <span>REACT </span> and its dependecies
                </p>
                <div className={style.linkTag}>
                    <Link to="https://hrproject-anyadiegwus-projects.vercel.app/" target='blank'>Page</Link>
                    <Link to="https://github.com/Anyadiegwu/savecodes" target='blank'>Github</Link>
                </div>
            </div>
        </div>
        <div className={style.pWBtn}>
            <div className='profileBtn'>
            <button type='btn'>
                <Link to='/contactme'>Next Slide...</Link>
                </button>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}

export default Dice