import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { subjectData } from '../data/content'

function Subject() {
  const { id } = useParams()
  const navigate = useNavigate()
  const subject = subjectData[id]

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
            <div className="header-subtitle">{subject.topics.length} topics to master</div>
          </div>
        </div>
      </header>

      <div className="study-page">
        <div className="mode-selector">
          <Link to={`/study/${id}/1`} className="mode-btn">
            <div className="mode-icon">📖</div>
            <div className="mode-title">Study</div>
            <div className="mode-desc">Learn the material</div>
          </Link>
          <Link to={`/quiz/${id}`} className="mode-btn">
            <div className="mode-icon">📝</div>
            <div className="mode-title">Quiz</div>
            <div className="mode-desc">Test yourself</div>
          </Link>
        </div>

        <h3 className="section-title">Topics</h3>
        
        <div className="topic-list">
          {subject.topics.map((topic, index) => (
            <Link 
              to={`/study/${id}/${index + 1}`} 
              className="topic-item" 
              key={index}
            >
              <div>
                <h4>{topic.title}</h4>
                <p>{topic.description}</p>
              </div>
              <span className="topic-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Subject
