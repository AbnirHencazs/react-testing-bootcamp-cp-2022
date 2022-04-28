import React from 'react'
import './DatePicker.css'

const DatePicker = ({ handleChange, date }) => {
  return (
    <div className='datepickerContainer'>
        <label htmlFor="date-input">Pick a date</label>
        <input type="date" id='date-input' onChange={ handleChange } value={date} />
    </div>
  )
}

export default DatePicker