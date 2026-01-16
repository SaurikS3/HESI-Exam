import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const subjects = {
  math: { icon: '🧮', title: 'Mathematics' },
  vocabulary: { icon: '📚', title: 'Vocabulary' },
  grammar: { icon: '✏️', title: 'Grammar' },
  reading: { icon: '📖', title: 'Reading' }
}

function Subject() {
  const { id } = useParams()
  const navigate = useNavigate()
  const subject = subjects[id]

  if (!subject) {
    return <div className="loading">Subject not found</div>
  }

  return (
    <>
      <header className="header">
        <div className="header-back">
          <button className="back-btn" onClick={() => navigate('/')}>←</button>
          <div>
            <h1>{subject.icon} {subject.title}</h1>
            <div className="header-subtitle">Practice Quizzes</div>
          </div>
        </div>
      </header>

      <div className="quiz-page">
        <div className="mode-selector">
          <Link to={`/quiz/${id}`} className="mode-btn">
            <div className="mode-icon">📝</div>
            <div className="mode-title">Quiz</div>
            <div className="mode-desc">Test yourself with randomized quizzes</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Subject
