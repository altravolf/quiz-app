import './Questions.scss';
import data from "../../../data/mcq.json";

function Questions() {

    return (
        <div className="Questions mt-10 mb-8">
            <h3 className="md:text-2xl text-xl  font-bold ">
                {data[0].question}
            </h3>

            <ol className="list-inside " >
                {/* <label className="label cursor-pointer">
                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                    <span className="label-text">Red pill</span>
                </label> */}

                {
                    data[0].options.map((option, index) => {
                        return (
                            <li className="label cursor-pointer justify-start gap-3" key={index}>
                                <input type="radio" name="radio-10" className="radio check checked:bg-green-600" />
                                <span className="label-text text-lg">{option}</span>
                            </li>
                        );
                    })
                }
            </ol>
        </div>
    );
}

export default Questions;
