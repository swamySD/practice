

import React, { useEffect } from 'react'
import './Modal.css'
const Modal = ({handleClose}) => {
 
    useEffect(()=>{
        const onKeyDown=(event)=>{
            if(event.keyCode===27){
                handleClose()
            }
        }
        document.addEventListener('keydown',onKeyDown)

        return ()=>{
            document.removeEventListener("keydown",onKeyDown)
        }

    },[])

  return (
    <div className='modalBackdrop'>
        <div className='modalContent'>
        <div className='modalHeader'>  
        <span className='title'>Modal</span>
        <span className='closeButton' onClick={()=>handleClose(true)}>X</span>
    </div>
    <span>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </span>
    </div>
    </div>
  )
}

export default Modal