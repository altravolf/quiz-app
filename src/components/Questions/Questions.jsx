import './Questions.scss';


function Questions({ data, onSelectAnswer }) {


    return (
        <div className="Questions mt-10 mb-8 min-h-[200px]">

            <div className="md:text-2xl text-xl font-bold">{data.question}</div>

            <ol className=" columns-1 md:columns-2">
                {data.options.map((el, idx) => (
                    <li className="text-xl font-semibold py-1" onClick={() => onSelectAnswer(data.id, el)} key={idx}>
                        <input type="radio" id={`${data.id}${idx}`} name="radio-5" className="radio radio-success text-success" value={el} />
                        <label htmlFor={`${data.id}${idx}`} className="ps-3">{el}</label>
                    </li>
                ))}
            </ol>


        </div>
    );
}

export default Questions;
