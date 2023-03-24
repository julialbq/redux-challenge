import { useDispatch, useSelector } from "react-redux";
import { questionTitleAction, questionTypeAction } from "../../state/question";
import { Button } from "./Button";
import { Input } from "./Input";
import { getQuestions } from "../../state/quiz";
import { Select } from "./Select";

export const CreateQuestion = ({ onClick }) => {
  const questions = useSelector((state) => getQuestions(state));
  const dispatch = useDispatch();

  const changeQuestionType = (value) => {
    dispatch(questionTypeAction(value));
  };

  const addQuestionTitle = (value) => {
    dispatch(questionTitleAction(value));
  };

  return (
    <>
      <Input
        label="Question title"
        type="text"
        min={3}
        placeholder="Title"
        onChange={(e) => addQuestionTitle(e.target.value)}
      />
      <Select
        name="questionType"
        label="Select a question type"
        onChange={(e) => changeQuestionType(e.target.value)}
      >
        <option value="">Select question type</option>
        <option value="boolean">Yes or No</option>
        <option value="string">Text</option>
        <option value="number">Number</option>
      </Select>

      {
        <Button
          buttonType="secondary"
          type="button"
          onClick={onClick}
          disabled={questions.length === 10}
        >
          Add question
        </Button>
      }
    </>
  );
};
