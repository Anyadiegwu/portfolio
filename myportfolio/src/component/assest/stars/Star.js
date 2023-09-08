import React from 'react'
import starBig from "../../assest/images/starbig.png";
import starSmall from "../../assest/images/starsmall.png";

function Star() {
  return (
    <div>
        <div className='stars'>
            <div className='starSmall'>
                <img src={starSmall} alt='star' />
            </div>
            <div className='starBig'>
                <img src={starBig} alt='star' />
            </div>
        </div>
    </div>
  )
}

export default Star