import axios from "axios";
import { apiUrl } from "../infrastructure/apiUrl";

const allQuizzesInitialState = {
  loading: false,
  failed: false,
  allQuizzes: [],
  selectedId: 0,
};

export const allQuizzesReducer = (state = allQuizzesInitialState, action) => {
  switch (action.type) {
    case "QUIZZES_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "QUIZZES_LOAD_SUCCEEDED":
      return {
        ...state,
        allQuizzes: action.data,
        loading: false,
      };
    case "QUIZZES_LOAD_FAILED":
      return {
        ...state,
        allQuizzes: [],
        loading: false,
        failed: true,
      };
    case "SELECTED_QUIZ_ADDED":
      return {
        ...state,
        selectedQuiz: state.allQuizzes.find((quiz) => quiz.id === action.data),
        selectedQuizId: action.data,
      };
    default: {
      return state;
    }
  }
};

export const loadAllQuizzesAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "QUIZZES_LOADING",
    });

    try {
      const response = await axios.get(`${apiUrl}/quizzes`);

      dispatch({
        type: "QUIZZES_LOAD_SUCCEEDED",
        data: response.data,
      });
    } catch (error) {
      dispatch({
        type: "QUIZZES_LOAD_FAILED",
      });
      console.log(error.message);
    }
  };
};

export const selectedQuizAction = (value) => {
  return {
    type: "SELECTED_QUIZ_ADDED",
    data: value,
  };
};

export const getQuizzes = (state) => {
  return state.quizzesList.allQuizzes;
};

export const getSelectedQuiz = (state) => {
  return state.quizzesList.allQuizzes.find((quiz) => quiz.id === state.quizzesList.selectedQuizId);
};

export const getQuizzesLoading = (state) => {
  return state.quizzesList.loading;
};

export const getQuizzesFailed = (state) => {
  return state.quizzesList.failed;
};
