import './App.css'
import HomePage from './components/HomePage/HomePage'
import { useContext } from "react";
import QuizContext from "./context/quizContext";
import QuizPage from "./components/QuizPage/QuizPage";
import ResultPage from "./components/ResultPage/ResultPage";

function App() {

  const { start, quiz, result } = useContext(QuizContext);


  return (
    <div className={`App relative py-3 min-h-screen `}>

      <div className="main-container container px-4 mx-auto">


        {start ? <HomePage /> : null}

        {quiz ? <QuizPage /> : null}


        {result ? <ResultPage /> : null}

      </div>
    </div>
  )
}

export default App;