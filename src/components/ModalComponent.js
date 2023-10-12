import React, { useState } from 'react'
import Modal from './Modal'
import './ModalComponent.css'
const ModalComponent = () => {
    const [modalOpen,setModalOpen]=useState(false)

    const showModalHandler=(e)=>{
        e.stopPropagation()
        setModalOpen(!modalOpen)
    }

    const handleClose=()=>{
        setModalOpen(false)
    }

  return (
    <div onClick={()=>setModalOpen(false)}>
        {modalOpen&& <Modal handleClose={handleClose}/>}
        <h1>Modal</h1>
        <button type="button" className='modal-button' onClick={showModalHandler}>Show the modal</button>
    </div>
  )
}

export default ModalComponent