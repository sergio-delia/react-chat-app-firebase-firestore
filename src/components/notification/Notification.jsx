import React from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"

function Notification() {
  return (
    <div className='notification'>
        <ToastContainer position='bottom-right' />    
    </div>
  )
}

export default Notification