import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionTypeReducer } from "./question";
import { quizReducer } from "./quiz";

const reducer = combineReducers({
  quiz: quizReducer,
  questionType: questionTypeReducer,
});

export const store = configureStore({ reducer });
