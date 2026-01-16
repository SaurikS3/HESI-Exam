import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const subjects = {
  math: { icon: '🧮', title: 'Mathematics' },
  vocabulary: { icon: '📚', title: 'Vocabulary' },
  grammar: { icon: '✏️', title: 'Grammar' },
  reading: { icon: '📖', title: 'Reading' }
}

function Study() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const subjectInfo = subjects[subject]

  if (!subjectInfo) {
    return <div className="loading">Content not found</div>
  }

  return (
    <>
      <header className="header">
        <div className="header-back">
          <button className="back-btn" onClick={() => navigate(`/subject/${subject}`)}>←</button>
          <div>
            <h1>{subjectInfo.icon} {subjectInfo.title}</h1>
            <div className="header-subtitle">Practice Quizzes</div>
          </div>
        </div>
      </header>
      <div className="quiz-page">
        <div className="mode-selector">
          <button className="mode-btn" onClick={() => navigate(`/quiz/${subject}`)}>
            <div className="mode-icon">📝</div>
            <div className="mode-title">Quiz</div>
            <div className="mode-desc">Test yourself with randomized quizzes</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Study
