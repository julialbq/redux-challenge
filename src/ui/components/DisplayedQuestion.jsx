import { Button } from "./Button";
import { StyledListItem } from "../style/listItem";

export const DisplayedQuestions = ({ title, type, index, onClick }) => {
  return (
    <StyledListItem>
      <p>
        {index + 1}. {title}
      </p>
      <span>Type: {type}</span>
      <Button buttonType="danger" type="button" onClick={onClick}>
        Remove
      </Button>
    </StyledListItem>
  );
};
