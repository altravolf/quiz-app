/* eslint-disable no-console */
import { useEffect } from "react";
import MainHeading from "../MainHeading/MainHeading";
import Questions from "../Questions/Questions";
import './QuizPage.scss';

// * import redux store
import { useSelector } from "react-redux";

// * import custom hooks
import { useFetchQuestion } from "../../hooks/FetchQuestion";

function QuizPage() {

    // const { questions, result } = useSelector(state => state);
    const question = useSelector(state => state.question);
    const result = useSelector(state => state.result);

    const [{ isLoading, apiData, serverError }] = useFetchQuestion();

    useEffect(() => {
        // console.log(isLoading)
        console.log(apiData)
        // console.log(serverError)
    }, [])

    const onPrev = () => {
        console.log("prev")
    }

    const onNext = () => {
        console.log("next")
    }

    return (
        <div className="QuizPage lg:w-[60%] mx-auto">
            <MainHeading />

            <Questions />


            <div className="flex justify-around">
                <button className=" btn btn-warning" onClick={onPrev}>Prev</button>
                <button className=" btn btn-success" onClick={onNext}>Next</button>
            </div>
        </div>
    );
}

export default QuizPage;
