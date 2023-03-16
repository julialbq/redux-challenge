import "./CreateQuestion.css";
import { useDispatch } from "react-redux";
import { questionTitleAction, questionTypeAction } from "../../state/question";
import { Button } from "./Button";
import { Input } from "./Input";

export const CreateQuestion = ({ onClick }) => {
  const dispatch = useDispatch();

  const changeQuestionType = (value) => {
    dispatch(questionTypeAction(value));
  };

  const addQuestionTitle = (value) => {
    dispatch(questionTitleAction(value));
  };

  return (
    <div className="form-body__question">
      <div className="form-body__question--title">
        <Input
          label="Question title:"
          type="text"
          placeholder="Title"
          onChange={(e) => addQuestionTitle(e.target.value)}
        />
        <select
          name="questionType"
          onChange={(e) => changeQuestionType(e.target.value)}
        >
          <option value="">Select question type</option>
          <option value="boolean">Yes or No</option>
          <option value="string">Text</option>
          <option value="number">Number</option>
        </select>
      </div>

      <Button type="button" onClick={onClick}>
        Add question
      </Button>
    </div>
  );
};
