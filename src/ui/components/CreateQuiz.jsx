import { useDispatch, useSelector } from "react-redux";
import {
  getQuestion,
} from "../../state/question";
import {
  getQuestions,
  quizDescriptionAction,
  quizQuestionAddedAction,
  quizTitleAddedAction,
  getQuestionDisplayed,
  questionDisplayedAction,
} from "../../state/quiz";
import { Button } from "./Button";
import "./CreateQuiz.css";
import { Input } from "./Input";
import { CreateQuestion } from "./CreateQuestion";
import { DisplayedQuestions } from "./DisplayedQuestion";

export const CreateQuiz = () => {
  const question = useSelector((state) => getQuestion(state));
  const allQuestions = useSelector((state) => getQuestions(state));
  const questionDisplayed = useSelector((state) => getQuestionDisplayed(state));
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
  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-header">
          <Input
            label="Quiz title:"
            type="text"
            placeholder="Title"
            onChange={(e) => addTitle(e.target.value)}
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            placeholder="Form description"
            onChange={(e) => addDescription(e.target.value)}
          ></textarea>
          <Button type="button" onClick={displayNewQuestion}>
            New question
          </Button>
        </div>
        <div className="form-body">
          <h3>Questions</h3>
          {questionDisplayed && (
            <CreateQuestion onClick={() => addQuestion(question)} />
          )}
          <ul className="form-body__list">
          {allQuestions.length > 0 &&
            allQuestions.map(({title, type}, index) => (<DisplayedQuestions key={title} title={title} type={type} index={index} />))}
          </ul>
        </div>
      </form>
    </div>
  );
};
