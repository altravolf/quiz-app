import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import data from "../../data/mcq.json"

import * as Action from "../redux/question_reducer";




export const useFetchQuestion = () => {

    const [getData, setGetData] = useState({ Loading: false, apiData: [], serverError: null });

    const dispatch = useDispatch();

    useEffect(() => {
        setGetData(prev => ({ ...prev, Loading: true }));

        // async function fetchData
        (async () => {
            try {
                let question = await data;
                if (question.length > 0) {
                    setGetData(prev => ({ ...prev, Loading: false }));
                    setGetData(prev => ({ ...prev, apiData: question }));

                    dispatch(Action.startExamAction(question));
                }
                else {
                    throw new Error("No Question Available!!!");
                }
            }
            catch (error) {
                setGetData(prev => ({ ...prev, Loading: false }));
                setGetData(prev => ({ ...prev, serverError: false }));
            }
        })();
    }, [dispatch])

    return [getData, setGetData]

}
