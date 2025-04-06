import React from 'react';
import style from "./Shopify.module.css";
import SideBar from '../../sideBar/SideBar';
import Star from '../../../assest/stars/Star';
import { Link } from 'react-router-dom';
import BackBtn from '../../../assest/backBtn/BackBtn';
import shopify from '../../../assest/images/shopify.jpg'

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
                <h1>Shopify</h1>
                <Link to="https://shopify-challenge-xi.vercel.app/" className={style.projectL}>
                    <img src={shopify} alt='Project_Image'/>
                </Link>
                <p>Shopify is platform for business owner to widen the scope of their businesses. 
                    Here is a challenge to replicate Shopify Dashboard Page. Developed using only <span>HTML, CSS and JAVASCRIPT. </span>
                </p>
                <div className={style.linkTag}>
                    <Link to="https://shopify-challenge-xi.vercel.app/"  target='blank'>Page</Link>
                    <Link to="https://github.com/Anyadiegwu/shopify-challenge-"  target='blank'>Github</Link>
                </div>
            </div>
        </div>
        <div className={style.pWBtn}>
            <div className='profileBtn'>
            <button type='btn'>
                <Link to='/portfolio/register'>Next Slide...</Link>
                </button>
            </div>
        </div>
    </div>
  </div>
</div>
  )
}

export default Dice