import React from 'react';
import style from "./Dice.module.css";
import SideBar from '../../sideBar/SideBar';
import Star from '../../../assest/stars/Star';
import { Link } from 'react-router-dom';
import BackBtn from '../../../assest/backBtn/BackBtn';
import dice from '../../../assest/images/dicegame.jpg';

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
                    <h1>Dice</h1>
                    <Link to="https://dice-challenge-game.vercel.app" className={style.projectL}>
                        <img src={dice} alt='Project_Image'/>
                    </Link>
                    <p>Dice is a popular game played in many countries by rolling a dice 
                        in either in a bid to score higher or lower than your opponent. 
                        First link is developed using only <span>HTML, CSS and 
                        JAVASRIPT</span> while the second link is developed with <span>REACT.   </span>
                        Tap the roll button to play. Enjoy 
                    </p>
                    <div className={style.linkTag}>
                        <Link to="https://dice-challenge-game.vercel.app" target='blank'>Page</Link>
                        <Link to="https://github.com/Anyadiegwu/dice-challenge-game"  target='blank'>Github</Link> 
                        <Link to="https://dice-challenge-game-react.vercel.app/"  target='blank'>Page 2</Link>
                    </div>
                    {/* <Link to="">
                        <img src={dice} alt='Project_Image'/>
                    </Link>
                    <p>Drum Project comes from the love for music. 
                        This is the beginning of having users make what 
                        they love and can be seen as a symbol of Joy. 
                        Enjoy as your explore
                    </p>
                    <Link to="">Play now</Link> */}
                </div>
            </div>
            <div className={style.pWBtn}>
                <div className='profileBtn'>
                <button type='btn'>
                    <Link to='/portfolio/drum'>Next Slide...</Link>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dice