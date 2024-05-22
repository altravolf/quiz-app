import './SubmitModal.scss';

import { useContext } from "react";
import QuizContext from "../../context/quizContext";
import { useSnackbar } from "notistack"

function SubmitModal() {

    const { setResult, setQuiz } = useContext(QuizContext);

    const { enqueueSnackbar } = useSnackbar();

    const onResult = () => {
        enqueueSnackbar("Test submitted successfully", { variant: "success", autoHideDuration: 1500, anchorOrigin: { vertical: 'top', horizontal: 'right' } });
        setQuiz(false);
        setResult(true);
    }

    return (
        <dialog id="submit_modal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-3xl ">Are you sure you want to submit?</h3>

                <div className="modal-action justify-around">

                    <button className="btn btn-success" onClick={onResult}>Yes</button>

                    <form method="dialog">
                        <button className="btn btn-error">No</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default SubmitModal;
