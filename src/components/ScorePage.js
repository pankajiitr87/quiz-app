import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { QuestionsData } from './QuestionsData';
import '../App.css'

const ScorePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className='box score-box'>
      <h1 className='textcenter'>Congratulations</h1>
      <h2 className='textcenter score'>Your Score: {state.score} out of {QuestionsData.length} correct</h2>
      <p className='textcenter score'> {(state.score/QuestionsData.length*100)}%</p>
      <div>
        <button
          className='btn textcenter'
          onClick={() => navigate('/')}
        >
          Start Again
        </button>
      </div>
    </div>
  )
}

export default ScorePage