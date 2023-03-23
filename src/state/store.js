import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { allQuizzesReducer } from "./allQuizzes";
import { questionReducer } from "./question";
import { quizReducer } from "./quiz";
import { themeReducer } from "./theme";

const reducer = combineReducers({
  quiz: quizReducer,
  question: questionReducer,
  quizzesList: allQuizzesReducer,
  themeChange: themeReducer,
});

export const store = configureStore({ reducer });
