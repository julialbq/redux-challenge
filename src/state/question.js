const questionInitialState = {
  data: {
    title: "",
    type: "string",
  },
};

export const questionReducer = (state = questionInitialState, action) => {
  switch (action.type) {
    case "QUESTION_TITLE_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          title: action.data,
        },
      };
    case "QUESTION_TYPE_ADDED":
      return {
        ...state,
        data: {
          ...state.data,
          type: action.data,
        },
      };
      
    default:
      return state;
  }
};

export const getQuestionTitle = (state) => {
  return state.question.data.title;
};

export const getQuestionType = (state) => {
  return state.questionInfo.data.type;
};

export const getQuestion = (state) => {
  return state.question.data;
};



export const questionTitleAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: "QUESTION_TITLE_ADDED",
      data: value,
    });
  };
};

export const questionTypeAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: "QUESTION_TYPE_ADDED",
      data: value,
    });
  };
};


// const questionDisplayedInitialState = {
//   questionDisplayed: false,
//   questionConfirmed: false,
// };

// export const questionDisplayedReducer = (
//   state = questionDisplayedInitialState,
//   action
// ) => {
//   switch (action.type) {
//     case "QUESTION_DISPLAYED":
//       return {
//         ...state,
//         questionDisplayed: true,
//       };
//     case "QUESTION_CONFIRMED":
//       return {
//         ...state,
//         questionDisplayed: false,
//         questionConfirmed: true,
//       };

//     default:
//       return state;
//   }
// };



// export const questionConfirmedAction = () => {
//   return (dispatch) => {
//     dispatch({
//       type: "QUESTION_CONFIRMED",
//     });
//   };
// };
