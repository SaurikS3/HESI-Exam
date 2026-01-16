import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { quizData } from '../data/content'

const STORAGE_KEY = 'hesi-quiz-progress'

// Shuffle array function
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Randomize answer positions for a question
function randomizeAnswers(question) {
  const options = question.options.map((opt, idx) => ({
    text: opt,
    originalIndex: idx
  }))
  
  const shuffledOptions = shuffleArray(options)
  
  // Find new position of correct answer
  const newCorrectIndex = shuffledOptions.findIndex(
    opt => opt.originalIndex === question.correctAnswer
  )
  
  return {
    ...question,
    options: shuffledOptions.map(opt => opt.text),
    correctAnswer: newCorrectIndex,
    originalOptions: question.options
  }
}

function Quiz() {
  const { subject } = useParams()
  const navigate = useNavigate()
  
  const [initialized, setInitialized] = useState(false)
  const [questions, setQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [streak, setStreak] = useState(0)
  const [showResumePrompt, setShowResumePrompt] = useState(false)
  const [savedProgress, setSavedProgress] = useState(null)
  const [wrongAnswers, setWrongAnswers] = useState([])
  const [quizSet, setQuizSet] = useState(0)
  const [quizzes, setQuizzes] = useState([])

  // Get saved progress
  const getSavedProgress = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const data = JSON.parse(saved)
        if (data.subject === subject && data.questions && data.questions.length > 0) {
          return data
        }
      }
    } catch (e) {
      console.error('Error loading progress:', e)
    }
    return null
  }

  // Initialize quiz
  useEffect(() => {
    const saved = getSavedProgress()
    if (saved && saved.currentQuestion < saved.questions.length) {
      setSavedProgress(saved)
      setShowResumePrompt(true)
    } else {
      startFreshQuiz()
    }
    setInitialized(true)
  }, [subject])

  // Split all questions into sets of 15, shuffle each set
  const splitIntoQuizzes = (allQuestions, size = 15) => {
    const shuffled = shuffleArray(allQuestions)
    const sets = []
    for (let i = 0; i < shuffled.length; i += size) {
      sets.push(shuffled.slice(i, i + size))
    }
    return sets
  }

  // Start fresh quiz with ALL questions randomized, multiple quizzes per section
  const startFreshQuiz = (setIdx = 0) => {
    const allQuestions = quizData[subject] || []
    const quizSets = splitIntoQuizzes(allQuestions, 15)
    setQuizzes(quizSets)
    const quizQuestions = quizSets[setIdx] ? quizSets[setIdx].map(q => randomizeAnswers(q)) : []
    setQuestions(quizQuestions)
    setQuizSet(setIdx)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setAnswered(false)
    setQuizComplete(false)
    setStreak(0)
    setShowResumePrompt(false)
    localStorage.removeItem(STORAGE_KEY)
  }

  // Resume quiz
  const resumeQuiz = () => {
    if (savedProgress) {
      setQuestions(savedProgress.questions)
      setCurrentQuestion(savedProgress.currentQuestion)
      setScore(savedProgress.score)
      setStreak(savedProgress.streak || 0)
      setSelectedAnswer(null)
      setAnswered(false)
      setQuizComplete(false)
      setShowResumePrompt(false)
    }
  }

  // Save progress on state change
  useEffect(() => {
    if (initialized && questions.length > 0 && !quizComplete && !showResumePrompt) {
      const progressData = {
        subject,
        questions,
        currentQuestion,
        score,
        streak,
        timestamp: Date.now()
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData))
    }
  }, [currentQuestion, score, streak, initialized, quizComplete])

  // Save final stats
  const saveStats = (correct, total) => {
    try {
      const saved = localStorage.getItem('hesi-stats')
      const stats = saved ? JSON.parse(saved) : {
        questionsAnswered: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        streak: 0,
        progress: {},
        subjectStats: {},
        weakAreas: []
      }
      
      stats.questionsAnswered += total
      stats.correctAnswers += correct
      stats.wrongAnswers = (stats.wrongAnswers || 0) + (total - correct)
      
      // Track per-subject stats
      if (!stats.subjectStats) stats.subjectStats = {}
      if (!stats.subjectStats[subject]) {
        stats.subjectStats[subject] = { correct: 0, wrong: 0, total: 0 }
      }
      stats.subjectStats[subject].correct += correct
      stats.subjectStats[subject].wrong += (total - correct)
      stats.subjectStats[subject].total += total
      
      const percentage = Math.round((correct / total) * 100)
      const currentProgress = stats.progress[subject] || 0
      stats.progress[subject] = Math.max(currentProgress, percentage)
      
      if (percentage >= 70) {
        stats.streak = (stats.streak || 0) + 1
      }
      
      // Save wrong answers for review
      if (!stats.weakAreas) stats.weakAreas = []
      wrongAnswers.forEach(wa => {
        // Avoid duplicates
        const exists = stats.weakAreas.find(w => w.question === wa.question)
        if (!exists) {
          stats.weakAreas.push({
            ...wa,
            timestamp: Date.now()
          })
        }
      })
      // Keep only last 50 wrong answers
      stats.weakAreas = stats.weakAreas.slice(-50)
      
      localStorage.setItem('hesi-stats', JSON.stringify(stats))
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      console.error('Failed to save stats:', e)
    }
  }

  // Resume prompt screen
  if (showResumePrompt && savedProgress) {
    return (
      <>
        <header className="header">
          <div className="header-back">
            <button className="back-btn" onClick={() => navigate(`/subject/${subject}`)}>←</button>
            <h1>Quiz</h1>
          </div>
        </header>
        <div className="quiz-page" style={{ textAlign: 'center', paddingTop: '40px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
          <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Resume Quiz?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '8px' }}>
            You have a quiz in progress
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>
            Question {savedProgress.currentQuestion + 1} of {savedProgress.questions.length} • Score: {savedProgress.score}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '250px', margin: '0 auto' }}>
            <button className="next-question-btn" onClick={resumeQuiz}>
              ▶️ Resume Quiz
            </button>
            <button 
              className="next-question-btn" 
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
              onClick={() => startFreshQuiz(quizSet)}
            >
              🔄 Start New Quiz
            </button>
          </div>
        </div>
      </>
    )
  }

  // Loading state
  if (!initialized || questions.length === 0) {
    return (
      <>
        <header className="header">
          <div className="header-back">
            <button className="back-btn" onClick={() => navigate(`/subject/${subject}`)}>←</button>
            <h1>Quiz</h1>
          </div>
        </header>
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading questions...</p>
        </div>
      </>
    )
  }

  const question = questions[currentQuestion]
  const progressPercent = ((currentQuestion + (answered ? 1 : 0)) / questions.length) * 100

  const handleAnswer = (index) => {
    if (answered) return
    setSelectedAnswer(index)
    setAnswered(true)
    
    if (index === question.correctAnswer) {
      setScore(score + 1)
      setStreak(streak + 1)
    } else {
      setStreak(0)
      // Track wrong answer
      setWrongAnswers(prev => [...prev, {
        question: question.question,
        userAnswer: question.options[index],
        correctAnswer: question.options[question.correctAnswer],
        subject: subject
      }])
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setAnswered(false)
    } else {
      saveStats(score, questions.length)
      setQuizComplete(true)
    }
  }

  // Results screen
  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100)
    
    let message, emoji
    if (percentage === 100) { message = 'Perfect!'; emoji = '🏆' }
    else if (percentage >= 90) { message = 'Excellent!'; emoji = '🌟' }
    else if (percentage >= 70) { message = 'Great Job!'; emoji = '🎉' }
    else if (percentage >= 50) { message = 'Good Try!'; emoji = '💪' }
    else { message = 'Keep Studying!'; emoji = '📚' }

    // Show quiz set navigation if multiple sets
    const quizSetNav = quizzes.length > 1 && (
      <div style={{ margin: '16px 0', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {quizzes.map((q, idx) => (
          <button
            key={idx}
            className={`secondary${quizSet === idx ? ' active' : ''}`}
            onClick={() => startFreshQuiz(idx)}
            style={{ minWidth: 36, fontWeight: quizSet === idx ? 'bold' : 'normal' }}
          >
            Quiz {idx + 1}
          </button>
        ))}
      </div>
    )
    
    return (
      <>
        <header className="header">
          <h1>Results</h1>
        </header>
        
        <div className="results-page">
          <div style={{ fontSize: '56px', marginBottom: '12px' }}>{emoji}</div>
          
          <div className="results-circle" style={{ '--score-percent': `${percentage}%` }}>
            <div className="results-score">{percentage}%</div>
          </div>
          
          <h2 className="results-message">{message}</h2>
          <p className="results-details">{score} of {questions.length} correct</p>
          {quizSetNav}
          <div className="results-actions">
            <button className="primary" onClick={() => startFreshQuiz(quizSet)}>🔄 Try Again</button>
            <button className="secondary" onClick={() => navigate(`/subject/${subject}`)}>📖 Study</button>
            <button className="secondary" onClick={() => navigate('/')}>🏠 Home</button>
          </div>
        </div>
      </>
    )
  }

  // Quiz screen
  return (
    <>
      <header className="header">
        <div className="header-back">
          <button className="back-btn" onClick={() => navigate(`/subject/${subject}`)}>←</button>
          <div>
            <h1>Quiz</h1>
            <div className="header-subtitle">{subject.charAt(0).toUpperCase() + subject.slice(1)} • {questions.length} Qs</div>
          </div>
        </div>
      </header>

      <div className="quiz-page">
        <div className="quiz-header">
          <div className="quiz-progress">
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <span className="quiz-progress-text">{currentQuestion + 1}/{questions.length}</span>
          </div>
          <div className="quiz-score">
            {streak >= 3 && <span>🔥</span>}
            <span>{score}</span>
          </div>
        </div>

        <div className="question-card">
          <div className="question-number">Question {currentQuestion + 1}</div>
          <div className="question-text">{question.question}</div>
          
          <div className="answer-options">
            {question.options.map((option, index) => {
              let className = 'answer-option'
              if (answered) {
                if (index === question.correctAnswer) className += ' correct'
                else if (index === selectedAnswer) className += ' incorrect'
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
                  <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                  <span className="option-text">{option}</span>
                </button>
              )
            })}
          </div>

          {answered && (
            <div className={`answer-feedback ${selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}`}>
              {selectedAnswer === question.correctAnswer ? (
                <strong>✅ Correct! {streak >= 3 ? `🔥 ${streak} streak!` : ''}</strong>
              ) : (
                <>
                  <strong>❌ Incorrect</strong>
                  <p>Answer: {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}</p>
                </>
              )}
              {question.explanation && <p className="explanation">💡 {question.explanation}</p>}
            </div>
          )}
        </div>

        {answered && (
          <button className="next-question-btn" onClick={nextQuestion}>
            {currentQuestion < questions.length - 1 ? 'Next →' : '🏁 Results'}
          </button>
        )}
      </div>
    </>
  )
}

export default Quiz
