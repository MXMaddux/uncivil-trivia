import React from 'react'
import { useGlobalContext } from '../context'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  const ranks = ["Fucktard", "Shit For Brains", "Daft Doofus","Clever for a Chimp", "Rotten Egghead", "Stinkin' Genius"];
  const percentage = ((correct / questions.length) * 100).toFixed(0);
  const showRank = () => {
    if (percentage < 11) {
      return ranks[0];
    }
    if (percentage < 31) {
      return ranks[1];
    }
    if (percentage < 51) {
      return ranks[2];
    }
    if (percentage < 75) {
      return ranks[3]
    }
    if (percentage < 96) {
      return ranks[4]
    }
    if (percentage < 101) {
      return ranks[5]
    }
  }

  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>congrats, asshole!</h2>
        <p>
          You answered {percentage}% of
          questions correctly
        </p>
        <p>Your rank: <span className='rank'>{showRank()}!</span></p>
        <button className='close-btn' onClick={closeModal}>
          More abuse
        </button>
      </div>
    </div>
  )
}

export default Modal
