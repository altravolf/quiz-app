/* eslint-disable no-console */
import MainHeading from "../MainHeading/MainHeading";
import Questions from "../Questions/Questions";
import './QuizPage.scss';
import { useContext, useEffect } from "react";
import QuizContext from "../../context/quizContext";
import SubmitModal from "../SubmitModal/SubmitModal";


function QuizPage() {
    const { mcqData, current, setCurrent, selectedAnswer, setSelectedAnswer } = useContext(QuizContext);

    const onPrev = () => {
        setCurrent(current - 1);
    }

    const onNext = () => {
        setCurrent(current + 1);
    }

    const onTile = (index) => {
        setCurrent(index)
    }

    const onSelectAnswer = (questionId, selectedOption) => {
        setSelectedAnswer(() => {
            return {
                ...selectedAnswer,
                [questionId]: selectedOption
            }
        })
    }

    useEffect(() => {
        console.log(selectedAnswer)
    }, [selectedAnswer])


    return (
        <div className="QuizPage lg:w-[60%] mx-auto">
            <MainHeading />

            <ol className="list-decimal">
                {mcqData.map((data, index) => {
                    return (
                        <li key={index} data-marker={`${data.id}.`} className={`main-question cust-marker ${current === index ? "" : "hidden"}`}>
                            <Questions data={data} onSelectAnswer={onSelectAnswer} />

                            <div className="flex justify-around">
                                <button className={`btn btn-warning`} disabled={current === 0} onClick={onPrev}>Prev</button>
                                <button className=" btn btn-success" disabled={current === mcqData.length - 1} onClick={onNext}>Next</button>
                            </div>
                        </li>
                    );
                })}
            </ol>

            <div className="flex flex-wrap gap-4 mt-8 tiles">
                {mcqData.map((data, idx) => (
                    <div className={`inline-flex justify-center items-center box-border w-14 h-14  text-black border  cursor-pointer select-none ${current === idx ? "bg-indigo-600 text-white" : "bg-slate-300"} ${selectedAnswer[data.id] ? "bg-green-600" : ""}`} key={idx} onClick={() => onTile(idx)}> <span>{data.id}</span> </div>
                ))}
            </div>

            <div className="text-center">
                <button className="btn btn-success mt-5 text-xl text-white font-semibold" onClick={() => document.getElementById('submit_modal').showModal()}> Submit Test</button>
                <SubmitModal />
            </div>


        </div >
    );
}

export default QuizPage;
