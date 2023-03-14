import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quizReducer } from "./quiz";

const reducer = combineReducers({
  quiz: quizReducer,
});

export const store = configureStore({ reducer });
