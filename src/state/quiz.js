import axios from "axios";
import { apiUrl } from "../infrastructure/apiUrl";

const quizInitialState = {
  quizCreation: false,
  questionDisplayed: false,
  loading: false,
  failed: false,
  succeeded: false,
  data: { title: "", description: "", questions: [] },
};

export const quizReducer = (state = quizInitialState, action) => {
  switch (action.type) {
    case "QUIZ_CREATION_STARTED":
      return {
        ...state,
        quizCreation: true,
      };
    case "QUIZ_TITLE_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          title: action.data,
        },
      };
    case "QUIZ_DESCRIPTION_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          description: action.data,
        },
      };
    case "QUESTION_DISPLAYED":
      return {
        ...state,
        questionDisplayed: true,
      };
    case "QUIZ_QUESTION_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          questions: [...state.data.questions, action.data],
        },
        questionDisplayed: false,
      };
    case "QUIZ_QUESTION_REMOVED":
      return {
        ...state,
        data: {
          ...state.data,
          questions: state.data.questions.filter(
            (question) => question.title !== action.data
          ),
        },
      };
    case "QUIZ_SAVE_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "QUIZ_SAVE_SUCCEEDED":
      return {
        ...state,
        data: action.data,
        loading: false,
        succeeded: true,
      };
    case "QUIZ_SAVE_FAILED":
      return {
        ...state,
        loading: false,
        failed: true,
      };
    default:
      return state;
  }
};

export const quizCreatedAction = () => {
  return (dispatch) => {
    dispatch({
      type: "QUIZ_CREATION_STARTED",
    });
  };
};

export const quizTitleAddedAction = (value) => {
  return {
    type: "QUIZ_TITLE_ADDED",
    data: value,
  };
};

export const quizDescriptionAction = (value) => {
  return {
    type: "QUIZ_DESCRIPTION_ADDED",
    data: value,
  };
};

export const questionDisplayedAction = () => {
  return {
    type: "QUESTION_DISPLAYED",
  };
};

export const quizQuestionAddedAction = (value) => {
  return {
    type: "QUIZ_QUESTION_ADDED",
    data: value,
  };
};

export const quizQuestionRemovedAction = (value) => {
  return {
    type: "QUIZ_QUESTION_REMOVED",
    data: value,
  };
};

export const quizSavedAction = (value) => {
  return async (dispatch) => {
    dispatch({
      type: "QUIZ_SAVE_PENDING",
    });

    try {
      await axios.post(`${apiUrl}/quizzes`, value);

      dispatch({
        type: "QUIZ_SAVE_SUCCEEDED",
        data: { title: "", description: "", questions: [] },
      });
    } catch (error) {
      dispatch({
        type: "QUIZ_SAVE_FAILED",
      });
    }
  };
};

export const getQuizCreation = (state) => {
  return state.quiz.quizCreation;
};

export const getTitle = (state) => {
  return state.quiz.data.title;
};

export const getDescription = (state) => {
  return state.quiz.data.description;
};

export const getQuestionDisplayed = (state) => {
  return state.quiz.questionDisplayed;
};

export const getQuestions = (state) => {
  return state.quiz.data.questions;
};

export const getQuiz = (state) => {
  return state.quiz.data;
};

export const getQuizLoading = (state) => {
  return state.quiz.loading;
};

export const getQuizFailed = (state) => {
  return state.quiz.failed;
};

export const getQuizSucceeded = (state) => {
  return state.quiz.succeeded;
};
