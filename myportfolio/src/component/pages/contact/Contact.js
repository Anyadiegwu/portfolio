import React, { useState } from 'react'
import './Contact.css';
import SideBar from '../sideBar/SideBar';
import Star from '../../assest/stars/Star';
import BackBtn from '../../assest/backBtn/BackBtn';
import { Link } from 'react-router-dom';
import victor from '../../assest/images/victor.jpg'
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GrMail, GrLinkedinOption } from 'react-icons/gr';


function Contact() {
  const [navBar, setNavBar] = useState(true)
  const allow = (data) =>{
      setNavBar(data)  
  }
  return (
    <div className='introPg'>
      <div>
        <SideBar />
      </div>
      <div>
        <Star />
      </div>
      <div className='contactPg'>
        <div className='contactPgW'>
          <div className='contactBWrapper'>
            <div className='contactBtn'>
              <div className='backBtnWrapper'>
                <BackBtn />
              </div>
              <div>
                <div className='profileCBtn'>
                  <button type='cBtn'>
                    <Link to='/'>Back to cover...</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='contactWrapper'>
            <div className='contact'>
              <div>
              <p>Contact me</p>
              <div className='conBW'>
                <div className='conBWr'>
                  <div className='conBody'> 
                    <div className='myImage'>
                      <img src={victor} alt='my pic' />
                    </div>
                    <h1>Anyadiegwu Victor</h1>
                    <h2>Frontend Developer</h2>
                  </div>
                  <div className='inforW'>
                    <div>
                      <div className='infor'>
                          <div className='contactIcon'>
                            <i><FaPhoneAlt /></i>
                          </div>
                          <Link to="tel:+2348102680872">(+234) 8102680872</Link>
                        </div>
                        <div className='infor'>
                          <div className='contactIcon'>
                            <i><GrMail /></i>
                          </div>
                          <a href='mailto:victoranyadiegwu610@gmail.com'>victoranyadiegwu610@gmail.com</a>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              </div>
              <div className='mediaWWrappe'>
                <div className='mediaW'>
                  {/* <div className='media'> */}
                  <a href='http://www.twitter.com/iam_veek_thor' className='media'> 
                    <div className='contactIcon'>
                    <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"  fill="#ffffff"/>
                      </svg></i>
                      {/* <FontAwesomeIcon icon="fa-brands fa-x-twitter" /> */}
                      {/* <i><FaPhoneAlt /></i> */}
                    </div>
                    <p>X(Twitter)</p> 
                    </a>
                  {/* </div> */}
                  <a href='https://www.linkedin.com/in/victor-anyadiegwu-8286a9238' className='media'>
                  {/* <div className='media'> */}
                    <div className='contactIcon'>
                      <i><GrLinkedinOption /></i>
                    </div>
                      <p>LinkedIn</p>
                  </a> 
                  {/* </div> */}
                  {/* <div className='media'> */}
                  <a href='https://www.instagram.com/veek__thor' className='media'>
                    <div className='contactIcon'>
                      <i><AiFillInstagram /></i>
                    </div>
                      <p>Instagram</p>
                  </a> 
                  {/* </div>
                  <div className='media'> */}
                  <a href='https://www.github.com/Anyadiegwu' className='media'>
                    <div className='contactIcon'>
                      <i><BsGithub /></i>
                    </div>
                    <p>Github</p>
                  </a> 
                  {/* </div>
                  <div className='media'> */}
                  <Link to="https://api.whatsapp.com/send?phone=2348102680872&text=Hi,%20Victor%20Anyadiegwu%20I need%20more%20information%20about%20concerning your application.%20please%20contact%20me." 
                  className='media'>
                    <div className='contactIcon'>
                      <i><IoLogoWhatsapp /></i>
                    </div>
                    <p>Whatsapp</p>
                  </Link>
                  {/* </div> */}
                  {/* <div>
                    <div className='contactIcon'>
                      <i><FaPhoneAlt /></i>
                    </div>
                    <a href='vict'>X(Twitter)</a> 
                  </div>
                  <div>
                    <div className='contactIcon'>
                      <i><FaPhoneAlt /></i>
                    </div>
                    <a href='vict'>X(Twitter)</a> 
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact