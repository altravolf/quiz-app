import './App.css'
import ThemeToggler from "./components/ThemeToggler/ThemeToggler"
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  return (
    <div className={`App relative py-3 min-h-screen ${theme}`} data-theme={theme}>
      <ThemeToggler setTheme={setTheme} theme={theme} />

      <div className="main-container container px-4 mx-auto">
        <Routes  >
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />

        </Routes>
      </div>





    </div>
  )
}

export default App;