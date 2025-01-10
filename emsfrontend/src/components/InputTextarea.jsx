import React from 'react'
import './InputEvent.css'

const InputTextarea = ({handleInputChange, hoder, name, value, type, label, number}) => {
  return (
    <div className='inputevent'>
        <div className="form-input">
            <span className='list-number'>{number}</span>
            <div className="form-data">
                <label className='input-label'>
                {label}
                </label>
                <div className='textArea'>
                <textarea onChange={handleInputChange} value={value} type={type} name={name} placeholder={hoder} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputTextarea