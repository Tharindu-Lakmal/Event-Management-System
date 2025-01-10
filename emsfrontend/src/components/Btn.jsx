import React from 'react'
import './Btn.css'

const Btn = ({value, type, style, onClick}) => {
  return (
    <div className='btn'>
        <div className="inner-btn">
            <button className='active-btn' 
              type={type} 
              style={style}
              onClick={onClick}
            >
              {value}
            </button>
        </div>
    </div>
  )
}

export default Btn