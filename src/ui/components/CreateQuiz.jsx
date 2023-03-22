import { useDispatch, useSelector } from "react-redux";
import { getQuestion } from "../../state/question";
import {
  getQuestions,
  quizDescriptionAction,
  quizQuestionAddedAction,
  quizTitleAddedAction,
  getQuestionDisplayed,
  questionDisplayedAction,
  quizQuestionRemovedAction,
  getQuiz,
  getQuizLoading,
  getQuizFailed,
  quizSavedAction,
  getQuizSucceeded,
} from "../../state/quiz";
import { Button } from "./Button";
import { Input } from "./Input";
import { CreateQuestion } from "./CreateQuestion";
import { DisplayedQuestions } from "./DisplayedQuestion";
import { Textarea } from "./Textarea";
import { StyledBox } from "../style/box";
import { StyledList } from "../style/list";
import { StyledForm } from "../style/form";
import { StyledTitleSmall, StyledTitleXSmall } from "../style/typography";

export const CreateQuiz = () => {
  const question = useSelector((state) => getQuestion(state));
  const allQuestions = useSelector((state) => getQuestions(state));
  const questionDisplayed = useSelector((state) => getQuestionDisplayed(state));
  const quiz = useSelector((state) => getQuiz(state));
  const loading = useSelector((state) => getQuizLoading(state));
  const failed = useSelector((state) => getQuizFailed(state));
  const succeeded = useSelector((state) => getQuizSucceeded(state));
  const dispatch = useDispatch();

  const addTitle = (value) => {
    dispatch(quizTitleAddedAction(value));
  };

  const addDescription = (value) => {
    dispatch(quizDescriptionAction(value));
  };

  const addQuestion = (value) => {
    dispatch(quizQuestionAddedAction(value));
  };

  const displayNewQuestion = () => {
    dispatch(questionDisplayedAction());
  };

  const removeQuestion = (value) => {
    dispatch(quizQuestionRemovedAction(value));
  };

  const saveQuiz = (value) => {
    dispatch(quizSavedAction(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveQuiz(quiz);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledBox>
        <StyledTitleSmall>Quiz</StyledTitleSmall>
        <Input
          label="Quiz title"
          type="text"
          min={5}
          placeholder="Title"
          onChange={(e) => addTitle(e.target.value)}
        />
        <Textarea
          name="description"
          label="Quiz description"
          placeholder="Form description"
          onChange={(e) => addDescription(e.target.value)}
        />
        <Button
          buttonType="secondary"
          type="button"
          onClick={displayNewQuestion}
        >
          New question
        </Button>
      </StyledBox>
      <StyledBox>
        <StyledTitleXSmall>Questions</StyledTitleXSmall>
        {questionDisplayed && (
          <CreateQuestion onClick={() => addQuestion(question)} />
        )}
        <StyledList>
          {allQuestions.length > 0 &&
            allQuestions.map(({ title, type }, index) => (
              <DisplayedQuestions
                key={title}
                title={title}
                type={type}
                index={index}
                onClick={() => removeQuestion(title)}
              />
            ))}
        </StyledList>
      </StyledBox>
      {!succeeded && (
        <Button
          buttonType="primary"
          type="submit"
          disabled={failed || loading || allQuestions.length === 0}
        >
          Finish
        </Button>
      )}
    </StyledForm>
  );
};
