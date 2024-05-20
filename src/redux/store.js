import { combineReducers, configureStore } from "@reduxjs/toolkit";


// call reducers
import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";


const rootReducer = combineReducers({
    questions: questionReducer,
    result: resultReducer
})

export default configureStore({ reducer: rootReducer });

