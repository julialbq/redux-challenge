import { useDispatch, useSelector } from "react-redux";
import { getTheme, themeChangeAction } from "../../state/theme";
import { StyledHeader } from "../style/Header"
import { StyledTitleLarge } from "../style/typography"
import { Button } from "./Button";

export const Header = () => {
  const theme = useSelector((state) => getTheme(state));
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(themeChangeAction());
  };

  return (
    <StyledHeader>
      <StyledTitleLarge>Noises and Quizzes</StyledTitleLarge>
      <Button buttonType="secondary" onClick={changeTheme}>
          {theme === "Dark" ? "Light" : "Dark"} Mode
        </Button>
    </StyledHeader>
  )
}
