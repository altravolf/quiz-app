import './QuestionModal.scss';

function QuestionModal({ data, selectedAnswer }) {
    return (
        <dialog id={`modal-${data.id}`} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black dark:text-white border">✕</button>
                </form>
                <div className="md:text-2xl text-xl font-bold text-black dark:text-white">
                    {data.question}
                </div>
                <ol className="columns-1 md:columns-2">
                    {data.options.map((el, idx) => (
                        <li className="text-xl font-semibold py-1" key={idx}>
                            <label htmlFor={`${data.id}${idx}`} className={`ps-3 text-black dark:text-white ${data.answer === el && selectedAnswer ? 'text-success dark:text-success' : ''} ${selectedAnswer[data.id] !== undefined && selectedAnswer[data.id] === el && data.answer !== el ? 'text-error dark:text-error' : ''}`}>{el}</label>
                        </li>
                    ))}
                </ol>
            </div>
        </dialog>
    );
}

export default QuestionModal;
