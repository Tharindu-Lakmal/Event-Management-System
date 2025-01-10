import React from 'react'
import './InputEvent.css'

const InputEvent = ({handleInputChange, value, hoder, name, type, label, number}) => {
  
  return (
    <div className='inputevent'>
        <div className="form-input">
          <span className='list-number'>{number}</span>
          <div className="form-data">
            <label className='input-label'>
              {label}
            </label>
            <input onChange={handleInputChange} value={value} type={type} name={name} placeholder={hoder} />        
          </div>
        </div>
    </div>
  )
}

export default InputEvent