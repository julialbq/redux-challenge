const questionTypeInitialState = {
  type: "QUESTION_TYPE_CHANGED",
  data: "string",
};

export const questionTypeReducer = (
  state = questionTypeInitialState,
  action
) => {
  if (action.type === "QUESTION_TYPE_CHANGED") {
    return {
      ...state,
      data: action.data,
    };
  }

  return state;
};

export const questionTypeAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: "QUESTION_TYPE_CHANGED",
      data: value,
    });
  };
};

export const getQuestionType = (state) => {
  return state.questionType.data;
};
