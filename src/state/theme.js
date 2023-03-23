const themeInitialState = {
  theme: "Dark",
};

export const themeReducer = (state = themeInitialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "Dark" ? "Light" : "Dark",
      };

    default:
      return {
        ...state,
      };
  }
};

export const themeChangeAction = () => {
  return {
    type: "CHANGE_THEME",
  };
};

export const getTheme = (state) => {
  return state.themeChange.theme;
};
