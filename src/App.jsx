import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home'
import About from './views/About/About'
import Contact from './views/Contact/Contact'

function App() {
  const [path, setPath] = useState(window.location.pathname)

  const handleNavigate = (event, nextPath) => {
    event.preventDefault()
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  if (path === '/about') {
    return (
      <div className="app">
        <Navbar currentPath={path} onNavigate={handleNavigate} />
        <About />
      </div>
    )
  }

  if (path === '/contact') {
    return (
      <div className="app">
        <Navbar currentPath={path} onNavigate={handleNavigate} />
        <Contact />
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar currentPath={path} onNavigate={handleNavigate} />
      <Home />
    </div>
  )
}

export default App


