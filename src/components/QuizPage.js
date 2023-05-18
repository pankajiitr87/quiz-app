import React, { useState } from 'react'
import Question from './Question';
import { QuestionsData } from './QuestionsData';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const QuizPage = () => {
  const TIME_FOR_ONE_QUESTION = 30;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submittedData, setSubmittedData] = useState({});
  const [totalTime, setTotalTime] = useState(TIME_FOR_ONE_QUESTION * QuestionsData.length);
  const navigate = useNavigate();

  const timerId = setTimeout(() => {
    if (totalTime === 0) {
      calculateScore();
    }
    else {
      setTotalTime(totalTime - 1)
    }
  }, 1000)

  const updateSubmission = (index, value) => {
    setSubmittedData({ ...submittedData, [index]: value })
  }

  const calculateScore = () => {
    clearTimeout(timerId);
    let score = 0;
    QuestionsData.forEach((question, index) => {
      if (question.answer === submittedData[index]) {
        score += 1;
      }
    })
    navigate('/score', {
      state: {
        score: score,
        submittedData: submittedData
      }
    })
  }
  return (
    <div className='quiz-box'>
      <div className='box'>
        <span className='timer'>Time: {totalTime} sec</span><br/><br/>
        <Question
          currentQuestion={currentQuestion}
          activeQuestion={QuestionsData[currentQuestion]}
          submittedData={submittedData}
          updateSubmission={updateSubmission}
          selectedOption={submittedData[currentQuestion]}
        />
        <div className='textcenter'>
          {
            currentQuestion < QuestionsData.length - 1
              ? <button
                className={`btn ${!submittedData[currentQuestion] ? 'disabled' : ""}`}
                onClick={() => setCurrentQuestion((prevQuestion) => prevQuestion + 1)}
                disabled={!submittedData[currentQuestion]}
                title={submittedData[currentQuestion] ? "" : "Select Option First"}
              >
                Next
              </button>
              : <button
                className={`btn ${!submittedData[currentQuestion] ? 'disabled' : ""}`}
                onClick={() => calculateScore()}
                disabled={!submittedData[currentQuestion]}
                title={submittedData[currentQuestion] ? "" : "Select Option First"}
              >
                Submit
              </button>
          }
        </div>
      </div>
    </div>
  )
}

export default QuizPage