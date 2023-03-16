import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionReducer } from "./question";
import { quizReducer } from "./quiz";

const reducer = combineReducers({
  quiz: quizReducer,
  question: questionReducer,
});

export const store = configureStore({ reducer });
