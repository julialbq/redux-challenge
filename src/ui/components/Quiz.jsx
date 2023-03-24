import "./Quiz.css";
import { useDispatch } from "react-redux";
import { selectedQuizAction } from "../../state/allQuizzes";
import { Button } from "./Button";
import { StyledListItem } from "../style/listItem";
import { StyledTextMedium } from "../style/typography";

export const Quiz = ({ title, id }) => {
  const dispatch = useDispatch();

  const findQuiz = (quizId) => {
    dispatch(selectedQuizAction(quizId));
  };

  return (
    <StyledListItem sidebarItem>
      <StyledTextMedium>{title}</StyledTextMedium>
      <Button buttonType="secondary" type="button" onClick={() => findQuiz(id)}>
        Select
      </Button>
    </StyledListItem>
  );
};
