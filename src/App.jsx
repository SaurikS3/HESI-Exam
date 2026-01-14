import React from 'react'
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Subject from './pages/Subject'
import Study from './pages/Study'
import Quiz from './pages/Quiz'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:id" element={<Subject />} />
        <Route path="/study/:subject/:page" element={<Study />} />
        <Route path="/quiz/:subject" element={<Quiz />} />
      </Routes>
      
      <nav className="bottom-nav">
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
          <span className="icon">🏠</span>
          <span>Home</span>
        </Link>
        <Link to="/subject/math" className={`nav-item ${location.pathname.includes('math') ? 'active' : ''}`}>
          <span className="icon">🔢</span>
          <span>Math</span>
        </Link>
        <Link to="/subject/vocabulary" className={`nav-item ${location.pathname.includes('vocabulary') ? 'active' : ''}`}>
          <span className="icon">📚</span>
          <span>Vocab</span>
        </Link>
        <Link to="/subject/grammar" className={`nav-item ${location.pathname.includes('grammar') ? 'active' : ''}`}>
          <span className="icon">✍️</span>
          <span>Grammar</span>
        </Link>
        <Link to="/subject/reading" className={`nav-item ${location.pathname.includes('reading') ? 'active' : ''}`}>
          <span className="icon">📖</span>
          <span>Reading</span>
        </Link>
      </nav>
    </div>
  )
}

export default App
