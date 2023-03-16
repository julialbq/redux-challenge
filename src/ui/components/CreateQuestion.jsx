import "./CreateQuestion.css";
import { useDispatch, useSelector } from "react-redux";
import { questionTitleAction, questionTypeAction } from "../../state/question";
import { Button } from "./Button";
import { Input } from "./Input";
import { getQuestions } from "../../state/quiz";

export const CreateQuestion = ({ onClick }) => {
  const questions = useSelector((state) => getQuestions(state))
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

      <Button type="button" onClick={onClick} disabled={questions.length === 10}>
        Add question
      </Button>
    </div>
  );
};
