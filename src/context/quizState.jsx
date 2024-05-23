import { useState } from "react";
import QuizContext from "../context/quizContext.jsx";

import mcqData from "../data/mcq.json";

const QuizState = (props) => {

    const [user, setUser] = useState("");
    // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [start, setStart] = useState(true);
    const [quiz, setQuiz] = useState(false);
    const [result, setResult] = useState(false);
    const [current, setCurrent] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState({});


    return (
        <QuizContext.Provider value={{ user, setUser, start, setStart, mcqData, current, setCurrent, selectedAnswer, setSelectedAnswer, result, setResult, quiz, setQuiz }} >
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState;

