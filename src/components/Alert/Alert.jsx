import React from 'react'
import './Alert.css'

const Alert = ({ type, show, content }) => {

  if(!show) return null
  
  return (
        <span role="alert" className={`alert ${ type === 'error' ? 'error' : '' }`}>{content}</span>
  )
}

export default Alert