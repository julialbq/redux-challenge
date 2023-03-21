import { StyledBox } from "../style/box";

export const SelectedQuiz = ({quiz}) => {
  const {title, description, questions} = quiz;

  return (
    <StyledBox>
      <h3>{title}</h3>
      <p>{description}</p>
      {questions.map(({ id, title }) => (
        <p key={id}>
          {id}. {title}
        </p>
      ))}
    </StyledBox>
  );
};
