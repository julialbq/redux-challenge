import { Button } from "./Button";
import { StyledListItem } from "../style/listItem";
import { StyledTextMedium } from "../style/typography";

export const DisplayedQuestions = ({ title, type, index, onClick }) => {
  return (
    <StyledListItem>
      <StyledTextMedium>
        {index + 1}. {title}
      </StyledTextMedium>
      <StyledTextMedium>Type: {type}</StyledTextMedium>
      <Button buttonType="danger" type="button" onClick={onClick}>
        Remove
      </Button>
    </StyledListItem>
  );
};
