import React from 'react';
import style from "./DrumProject.module.css";
import SideBar from '../../sideBar/SideBar';
import Star from '../../../assest/stars/Star';
import { Link } from 'react-router-dom';
import BackBtn from '../../../assest/backBtn/BackBtn';
import drum from '../../../assest/images/drumkit.jpg'
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
                <h1>Instrument</h1>
                <Link to="https://drum-kit-react.vercel.app/" className={style.projectL}>
                    <img src={drum} alt='Project_Image'/>
                </Link>
                <p>Drum Project comes from the love for music. 
                    This is the beginning of having users make what 
                    they love and can be seen as a symbol of Joy. 
                    First link is Designed using only <span>HTML, CSS and 
                    JAVASRIPT</span> while the second link is designed with <span>REACT. </span>
                    Enjoy as your explore. 
                </p>
                <div className={style.linkTag}>
                    <Link to="https://drum-kit-orcin-gamma.vercel.app/" target='blank'>Page</Link>
                    <Link to="https://github.com/Anyadiegwu/drum-kit" target='blank'>Github</Link>
                    <Link to="https://drum-kit-react.vercel.app/" target='blank'>Page 2</Link>
                </div>
            </div>
        </div>
        <div className={style.pWBtn}>
            <div className='profileBtn'>
            <button type='btn'>
                <Link to='/portfolio/shopify'>Next Slide...</Link>
                </button>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}

export default Dice