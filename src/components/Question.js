import React from 'react'
import '../App.css'

const Question = ({ currentQuestion, activeQuestion, submittedData, updateSubmission, selectedOption }) => {

    return (
        <div>
            <h1 className='question'>{activeQuestion.question}</h1>
            <div className='options'>
                {
                    activeQuestion.options.map((option) => (
                        <label>
                            <input
                                type="radio" key={option.id}
                                value={option.text}
                                checked={selectedOption == option.text}
                                onChange={() => updateSubmission(currentQuestion, option.text)}
                            />
                            {option.text}
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

export default Question