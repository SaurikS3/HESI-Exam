// Home.jsx - Only quizzes per section, no guide or study cards

import React from 'react'
import { Link } from 'react-router-dom'

const subjects = [
  { id: 'math', icon: '🧮', title: 'Mathematics' },
  { id: 'vocabulary', icon: '📚', title: 'Vocabulary' },
  { id: 'grammar', icon: '✏️', title: 'Grammar' },
  { id: 'reading', icon: '📖', title: 'Reading' }
]

function Home() {
  return (
    <>
      <header className="header">
        <h1>HESI Exam Mastery</h1>
        <div className="header-subtitle">Practice Quizzes for Each Section</div>
      </header>
      <div className="home">
        <h3 className="section-title">Choose a Section to Practice</h3>
        <div className="subjects-grid">
          {subjects.map(subject => (
            <Link 
              to={`/subject/${subject.id}`} 
              className="subject-card" 
              key={subject.id}
            >
              <div className="subject-icon">{subject.icon}</div>
              <h3>{subject.title}</h3>
              <p>Practice quizzes to master this section</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
