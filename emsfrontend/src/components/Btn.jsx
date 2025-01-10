import React from 'react'
import './Btn.css'

const Btn = ({value, type}) => {
  return (
    <div className='btn'>
        <div className="inner-btn">
            <button className='active-btn' type={type}>{value}</button>
        </div>
    </div>
  )
}

export default Btn