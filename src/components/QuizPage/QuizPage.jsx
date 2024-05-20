import MainHeading from "../MainHeading/MainHeading";
import Questions from "../Questions/Questions";
import './QuizPage.scss';

function QuizPage() {

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
