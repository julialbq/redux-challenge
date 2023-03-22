import { StyledBox } from "../style/box";
import { StyledTextMedium, StyledTitleXSmall } from "../style/typography";

export const SelectedQuiz = ({quiz}) => {
  const {title, description, questions} = quiz;

  return (
    <StyledBox>
      <StyledTitleXSmall>{title}</StyledTitleXSmall>
      <StyledTextMedium>{description}</StyledTextMedium>
      {questions.map(({ id, title }) => (
        <StyledTextMedium key={id}>
          {id}. {title}
        </StyledTextMedium>
      ))}
    </StyledBox>
  );
};
