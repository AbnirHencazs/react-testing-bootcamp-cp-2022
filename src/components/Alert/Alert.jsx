import React from 'react'

const Alert = ({ type, show, content }) => {
    
  const [ showAlert, setShowAlert ] = React.useState(show)

  React.useEffect(() => {
      let hideAlert = setTimeout(() => {
          setShowAlert(false)
      }, 1500)
      return () => {
          clearTimeout(hideAlert)
      }
  }, [])

  if(!showAlert) return null
  
  return (
        <span role="alert" className={`alert ${ type === 'error' ? 'error' : '' }`}>{content}</span>
  )
}

export default Alert