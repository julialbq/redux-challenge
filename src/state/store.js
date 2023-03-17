import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { allQuizzesReducer } from "./allQuizzes";
import { questionReducer } from "./question";
import { quizReducer } from "./quiz";

const reducer = combineReducers({
  quiz: quizReducer,
  question: questionReducer,
  quizzesList: allQuizzesReducer,
});

export const store = configureStore({ reducer });
