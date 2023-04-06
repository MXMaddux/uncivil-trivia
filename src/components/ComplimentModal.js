import React from 'react'
import { useGlobalContext } from '../context';

const ComplimentModal = () => {
    const {isComplimentModalOpen, compliments, rights} = useGlobalContext();

    
  return (
    <div className={`${
        isComplimentModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}>
      <div className='compliment-modal-content'>
        <h2 id='compliment'>{rights[Math.floor(Math.random() * (rights.length - 1))]}, fuckin' {compliments[Math.floor(Math.random() * (compliments.length - 1))]}!</h2>
      </div>
    </div>
  )
}

export default ComplimentModal
