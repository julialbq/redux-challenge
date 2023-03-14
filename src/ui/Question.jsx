import "./Question.css";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionType, questionTypeAction } from "../state/question";
import { AnswerBoolean } from "./AnswerBoolean";
import { AnswerNumber } from "./AnswerNumber";
import { AnswerText } from "./AnswerText";

export const Question = () => {
  const questionType = useSelector((state) => getQuestionType(state));
  const dispatch = useDispatch();

  const changeQuestionType = (value) => {
    dispatch(questionTypeAction(value));
  };

  return (
    <div className="form-body__question">
      <div className="form-body__question--title">
        <input type="text" placeholder="Question title" />
        <select
          name="question type"
          onChange={(e) => changeQuestionType(e.target.value)}
        >
          <option value="">Select question type</option>
          <option value="boolean">Yes or No</option>
          <option value="string">Text</option>
          <option value="number">Number</option>
        </select>
      </div>
      {questionType === "string" && <AnswerText />}
      {questionType === "boolean" && <AnswerBoolean />}
      {questionType === "number" && <AnswerNumber />}
    </div>
  );
};
