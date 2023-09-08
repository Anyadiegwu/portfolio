import React from 'react'
import arrow from '../../assest/images/Arrow.svg'
import './BackBtn.css';
import { useNavigate } from 'react-router-dom';


function BackBtn() {

    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1)
    }
  return (
    <div>
        <div className='backBtnWrapper'>
            <button type='btn' className='backBtn' onClick={goBack}>
                <img src={arrow} alt='' />
                <p>Back</p>
            </button>     
        </div>
    </div>
  )
}

export default BackBtn