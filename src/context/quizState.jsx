import { useState } from "react";
import QuizContext from "../context/quizContext.jsx";

const QuizState = (props) => {

    const [user, setUser] = useState("");
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    return (
        <QuizContext.Provider value={{ user, setUser, theme, setTheme }} >
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState;

