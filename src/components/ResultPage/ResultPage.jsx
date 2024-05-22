import './ResultPage.scss';

import MainHeading from "../MainHeading/MainHeading";

import { useContext } from "react";
import QuizContext from "../../context/quizContext";
import QuestionModal from "../QuestionModal/QuestionModal";

function ResultPage() {

    const { user, mcqData, selectedAnswer } = useContext(QuizContext);

    let correctAnswers = 0;

    let wrongAnswers = 0;

    let skippedAnswers = 0;

    for (let i = 1; i <= mcqData.length; i++) {
        if (selectedAnswer[i] === mcqData[i - 1].answer) {
            correctAnswers++;
        }

        else if (selectedAnswer[i] != mcqData[i - 1].answer && selectedAnswer[i] !== undefined) {
            wrongAnswers++;
        } else {
            skippedAnswers++;
        }
    }

    const totalMarks = (correctAnswers * 4) - (wrongAnswers * 1);



    return (
        <div className="ResultPage lg:w-[60%] mx-auto">
            <MainHeading />

            <div className="result">
                <h2 className="md:text-2xl text-xl  font-bold text-center mt-10">Result</h2>

                <div className="overflow-x-auto">
                    <table className="w-full md:w-[75%]  mx-auto mt-5 table table-zebra">
                        <tbody>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Username</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {user}</td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left"> Total Questions</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {mcqData.length} </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Attempts</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {Object.keys(selectedAnswer).length} </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Correct Answers</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {correctAnswers} </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Wrong Answers</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {wrongAnswers} </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Skipped Answers</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {skippedAnswers} </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left"> Total Marks</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {totalMarks} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 tiles">
                    {mcqData.map((data, idx) => (
                        <>
                            <div className={`inline-flex justify-center items-center box-border w-14 h-14  text-black border  cursor-pointer select-none
                        ${selectedAnswer[data.id] === mcqData[idx].answer ? "bg-green-600 text-white" : "bg-slate-300"} ${selectedAnswer[data.id] === undefined ? "bg-slate-300" : ""} ${selectedAnswer[data.id] !== undefined && selectedAnswer[data.id] !== mcqData[idx].answer ? "bg-red-600 text-white" : ""} `} onClick={() => document.getElementById(`modal-${data.id}`).showModal()} key={idx} > <span>{data.id}</span>
                                <QuestionModal data={data} selectedAnswer={selectedAnswer} key={`modal-${data.id}`} />
                            </div>
                        </>
                    ))}




                </div>

            </div>
        </div>
    );
}

export default ResultPage;
