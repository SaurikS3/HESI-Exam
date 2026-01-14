import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { quizData } from '../data/content'

function Quiz() {
  const { subject } = useParams()
  const navigate = useNavigate()
  
  const questions = quizData[subject] || []
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  if (questions.length === 0) {
    return (
      <>
        <header className="header">
          <div className="header-back">
            <button className="back-btn" onClick={() => navigate(`/subject/${subject}`)}>←</button>
            <h1>Quiz</h1>
          </div>
        </header>
        <div className="loading">No questions available for this subject yet.</div>
      </>
    )
  }

  const question = questions[currentQuestion]

  const handleAnswer = (index) => {
    if (answered) return
    
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (index === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setAnswered(false)
    setQuizComplete(false)
  }

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    const passed = percentage >= 70
    
    return (
      <>
        <header className="header">
          <h1>Quiz Results</h1>
        </header>
        
        <div className="results-page">
          <div 
            className="results-circle" 
            style={{ '--score-percent': `${percentage}%` }}
          >
            <div className="results-score">{percentage}%</div>
          </div>
          
          <h2 className="results-message">
            {passed ? '🎉 Great Job!' : '📚 Keep Studying!'}
          </h2>
          
          <p className="results-details">
            You got {score} out of {questions.length} questions correct
          </p>
          
          <div className="results-actions">
            <button className="primary" onClick={restartQuiz}>
              Try Again
            </button>
            <button className="secondary" onClick={() => navigate(`/study/${subject}/1`)}>
              Review Material
            </button>
            <button className="secondary" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <header className="header">
        <div className="header-back">
          <button className="back-btn" onClick={() => navigate(`/subject/${subject}`)}>←</button>
          <h1>Quiz</h1>
        </div>
      </header>

      <div className="quiz-page">
        <div className="quiz-header">
          <span className="quiz-progress">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="quiz-score">
            Score: {score}/{currentQuestion + (answered ? 1 : 0)}
          </span>
        </div>

        <div className="question-card">
          <div className="question-number">Question {currentQuestion + 1}</div>
          <div className="question-text">{question.question}</div>
          
          <div className="answer-options">
            {question.options.map((option, index) => {
              let className = 'answer-option'
              
              if (answered) {
                if (index === question.correctAnswer) {
                  className += ' correct'
                } else if (index === selectedAnswer) {
                  className += ' incorrect'
                }
              } else if (index === selectedAnswer) {
                className += ' selected'
              }
              
              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleAnswer(index)}
                  disabled={answered}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              )
            })}
          </div>

          {answered && (
            <div className={`answer-feedback ${selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}`}>
              {selectedAnswer === question.correctAnswer ? (
                <>✅ Correct!</>
              ) : (
                <>❌ Incorrect. The correct answer is: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}</>
              )}
              {question.explanation && (
                <p style={{ marginTop: '8px' }}>{question.explanation}</p>
              )}
            </div>
          )}
        </div>

        {answered && (
          <button className="next-question-btn" onClick={nextQuestion}>
            {currentQuestion < questions.length - 1 ? 'Next Question →' : 'See Results'}
          </button>
        )}
      </div>
    </>
  )
}

export default Quiz
