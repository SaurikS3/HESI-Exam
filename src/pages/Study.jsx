import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { subjectData } from '../data/content'

function Study() {
  const { subject, page } = useParams()
  const navigate = useNavigate()
  const pageNum = parseInt(page)
  
  const subjectInfo = subjectData[subject]
  
  if (!subjectInfo || !subjectInfo.topics[pageNum - 1]) {
    return <div className="loading">Content not found</div>
  }

  const topic = subjectInfo.topics[pageNum - 1]
  const totalPages = subjectInfo.topics.length
  
  const goNext = () => {
    if (pageNum < totalPages) {
      navigate(`/study/${subject}/${pageNum + 1}`)
    }
  }
  
  const goPrev = () => {
    if (pageNum > 1) {
      navigate(`/study/${subject}/${pageNum - 1}`)
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-back">
          <button className="back-btn" onClick={() => navigate(`/subject/${subject}`)}>←</button>
          <div>
            <h1>{topic.title}</h1>
            <div className="header-subtitle">{subjectInfo.title} • Page {pageNum} of {totalPages}</div>
          </div>
        </div>
      </header>

      <div className="study-page">
        <div className="study-content">
          {topic.content.split('\n\n').map((paragraph, idx) => {
            // Check for HESI Hint
            if (paragraph.includes('HESI Hint') || paragraph.includes('HESI hint')) {
              return (
                <div className="hesi-hint" key={idx}>
                  <div className="hesi-hint-title">💡 HESI Hint</div>
                  <p>{paragraph.replace(/HESI Hint:?/gi, '').trim()}</p>
                </div>
              )
            }
            
            // Check for math problems (lines with numbers and operations)
            if (paragraph.match(/^\s*\d+[\.\)]/m) || paragraph.includes(' = ') || paragraph.includes(' + ') || paragraph.includes(' × ')) {
              return (
                <pre className="math-problem" key={idx}>
                  {paragraph}
                </pre>
              )
            }
            
            // Check for headers
            if (paragraph.length < 80 && !paragraph.includes('.') && paragraph === paragraph.toUpperCase()) {
              return <h2 key={idx} style={{ marginTop: '20px' }}>{paragraph}</h2>
            }
            
            return <p key={idx}>{paragraph}</p>
          })}
        </div>

        {topic.examples && topic.examples.length > 0 && (
          <div className="study-content">
            <h2>📝 Examples</h2>
            {topic.examples.map((example, idx) => (
              <div key={idx} className="math-problem">
                <strong>Example {idx + 1}:</strong>
                <pre>{example}</pre>
              </div>
            ))}
          </div>
        )}

        {topic.practice && topic.practice.length > 0 && (
          <div className="study-content">
            <h2>✏️ Practice Problems</h2>
            {topic.practice.map((problem, idx) => (
              <div key={idx} style={{ marginBottom: '12px', padding: '12px', background: '#f5f5f5', borderRadius: '8px' }}>
                <p><strong>{idx + 1}.</strong> {problem.question}</p>
                {problem.answer && (
                  <details style={{ marginTop: '8px' }}>
                    <summary style={{ cursor: 'pointer', color: '#1a73e8' }}>Show Answer</summary>
                    <p style={{ marginTop: '8px', color: '#34a853', fontWeight: '500' }}>{problem.answer}</p>
                  </details>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="page-nav">
          <button 
            className="prev" 
            onClick={goPrev}
            disabled={pageNum <= 1}
            style={{ opacity: pageNum <= 1 ? 0.5 : 1 }}
          >
            ← Previous
          </button>
          <button 
            className="next" 
            onClick={pageNum < totalPages ? goNext : () => navigate(`/quiz/${subject}`)}
          >
            {pageNum < totalPages ? 'Next →' : 'Take Quiz →'}
          </button>
        </div>
        
        <div className="page-indicator">
          Page {pageNum} of {totalPages}
        </div>
      </div>
    </>
  )
}

export default Study
