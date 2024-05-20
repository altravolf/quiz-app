import MainHeading from "../MainHeading/MainHeading";
import './ResultPage.scss';

function ResultPage() {
    return (
        <div className="ResultPage">
            <MainHeading />

            <div className="result">
                <h2 className="md:text-2xl text-xl  font-bold text-center mt-10">Result</h2>

                <div className="overflow-x-auto">
                    <table className="w-full lg:w-1/2 mx-auto mt-5 table table-zebra">
                        <tbody>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Username</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> Vivek Sehrawat</td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left"> Total Questions</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> 50 </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Attempts</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> 50 </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Correct Answers</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> 42 </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Wrong Answers</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> 8 </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left">Total Skipped Answers</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> 0 </td>
                            </tr>
                            <tr className="hover">
                                <th className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%] text-left"> Total Marks</th>
                                <td className="text-lg font-bold px-4 py-3 border-2 border-gray-300 w-[50%]  text-right"> {42 * 4 - (8)} </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default ResultPage;
