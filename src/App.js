import React from 'react'
import { useGlobalContext } from './context'
import SetupForm from './components/SetupForm'
import Loading from './components/Loading'
import Modal from './components/Modal'
import InsultModal from './components/InsultModal'
import ComplimentModal from './components/ComplimentModal'

const App = () => {
  const {waiting, loading, questions, index, correct, nextQuestion, checkAnswer} = useGlobalContext();

  if(waiting) {
    return <SetupForm />
  }
  if(loading) {
    return <Loading />
  }
  const {question, correctAnswer, incorrectAnswers} = questions[index];
  // const answers = [...incorrectAnswers, correctAnswer];
  let answers = [...incorrectAnswers]
  const tempIndex = Math.floor(Math.random() * 4);
  if(tempIndex === 3) {
    answers.push(correctAnswer)
  } else {
    answers.push(answers[tempIndex])
    console.log(answers);
    answers[tempIndex] = correctAnswer;
  }

  return <main>
    <Modal />
    <InsultModal />
    <ComplimentModal />
    <section className="quiz">
      <p className="correct-answers">
        correct answers: {correct}/{index}
      </p>
      <article className="container">
        <h2>{question}</h2>
        <div className="btn-container">
          {answers.map((answer, index) => {
            return <button key={index} className='answer-btn' onClick={() => checkAnswer(correctAnswer === answer)}>{answer}</button>
          })}
        </div>
      </article>
      <button className='next-question' onClick={nextQuestion}>
        next question
      </button>
    </section>
  </main>
}

export default App
