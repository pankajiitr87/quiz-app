import React from 'react'
import { useNavigate } from 'react-router-dom'
import { QuestionsData } from './QuestionsData'
import '../App.css'

const WelcomePage = () => {
  const navigate = useNavigate()

  return (
    <div className='box textcenter'>
      <h1 className='title'>Welcome to the Challenge!</h1>
      <div className='description'>
        <h5>This Quiz includes:</h5>
        <p>Total {QuestionsData.length} MCQs.</p>
        <p>5 Minutes</p>
      </div>
      <div>
        <button
          className='btn'
          onClick={() => navigate('/quiz')}
        >
          Start Quiz
        </button>
      </div>
    </div>
  )
}

export default WelcomePage