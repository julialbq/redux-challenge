const quizInitialState = {
  quizCreation: false,
};

export const quizReducer = (state = quizInitialState, action) => {
  if (action.type === "QUIZ_CREATION_STARTED") {
    return {
      ...state,
      quizCreation: true,
    };
  }

  return state;
};

export const quizCreatedAction = () => {
  return (dispatch) => {
    dispatch({
      type: "QUIZ_CREATION_STARTED",
    });
  };
};

export const getQuizCreation = (state) => {
  return state.quiz.quizCreation;
};
