import './App.css'
import ThemeToggler from "./components/ThemeToggler/ThemeToggler"
import HomePage from './components/HomePage/HomePage'
import { useContext } from "react";
import QuizContext from "./context/quizContext";

function App() {

  const { setUser, theme, setTheme } = useContext(QuizContext);


  return (
    <div className={`App relative py-3 min-h-screen ${theme}`} data-theme={theme}>
      <ThemeToggler setTheme={setTheme} theme={theme} />

      <div className="main-container container px-4 mx-auto">

        <HomePage setUser={setUser} />

      </div>
    </div>
  )
}

export default App;