import React from 'react'
import { Link } from 'react-router-dom'

const subjects = [
  {
    id: 'math',
    icon: '🔢',
    title: 'Mathematics',
    description: 'Arithmetic, fractions, decimals, percentages, algebra',
    pages: 37,
    progress: 0
  },
  {
    id: 'vocabulary',
    icon: '📚',
    title: 'Vocabulary',
    description: 'Medical and health profession terms',
    pages: 3,
    progress: 0
  },
  {
    id: 'grammar',
    icon: '✍️',
    title: 'Grammar',
    description: 'Parts of speech, sentence structure, punctuation',
    pages: 6,
    progress: 0
  },
  {
    id: 'reading',
    icon: '📖',
    title: 'Reading Comprehension',
    description: 'Main ideas, inferences, context clues',
    pages: 3,
    progress: 0
  }
]

function Home() {
  const totalProgress = 0 // Will be calculated from localStorage

  return (
    <>
      <header className="header">
        <h1>HESI Exam Prep</h1>
        <div className="header-subtitle">Admission Assessment Study Guide</div>
      </header>
      
      <div className="home">
        <div className="welcome-card">
          <h2>Welcome! 👋</h2>
          <p>Master all 4 subjects to ace your HESI exam</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${totalProgress}%` }}></div>
          </div>
          <div style={{ marginTop: '8px', fontSize: '12px', opacity: 0.9 }}>
            Overall Progress: {totalProgress}%
          </div>
        </div>

        <h3 className="section-title">Study Subjects</h3>
        
        <div className="subjects-grid">
          {subjects.map(subject => (
            <Link to={`/subject/${subject.id}`} className="subject-card" key={subject.id}>
              <div className="subject-icon">{subject.icon}</div>
              <h3>{subject.title}</h3>
              <p>{subject.description}</p>
              <div className="subject-progress">
                <div className="bar">
                  <div className="fill" style={{ width: `${subject.progress}%` }}></div>
                </div>
                <span>{subject.progress}%</span>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: '24px', padding: '16px', background: '#e8f0fe', borderRadius: '12px' }}>
          <h4 style={{ marginBottom: '8px', color: '#1a73e8' }}>📝 Quick Practice</h4>
          <p style={{ fontSize: '14px', color: '#5f6368', marginBottom: '12px' }}>
            Take a quick quiz to test your knowledge
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Link to="/quiz/math" style={{ 
              padding: '8px 16px', 
              background: '#1a73e8', 
              color: 'white', 
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '14px'
            }}>
              Math Quiz
            </Link>
            <Link to="/quiz/vocabulary" style={{ 
              padding: '8px 16px', 
              background: '#34a853', 
              color: 'white', 
              borderRadius: '20px',
              textDecoration: 'none',
              fontSize: '14px'
            }}>
              Vocab Quiz
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
