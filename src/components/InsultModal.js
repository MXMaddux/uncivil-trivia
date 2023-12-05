import React from 'react'
import { useGlobalContext } from '../context'

const InsultModal = () => {
    const {isInsultModalOpen, insultNames, wrongs} = useGlobalContext();


  return (
    <div className={`${
        isInsultModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}>
      <div className='insult-modal-content'>
        <h2 id="insult">{wrongs[Math.floor(Math.random() * (wrongs.length - 1))]}, fuckin' {insultNames[Math.floor(Math.random() * (insultNames.length - 1))]}!</h2>
      </div>
    </div>
  )
}

export default InsultModal
