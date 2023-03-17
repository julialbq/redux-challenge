import "./QuizList.css"
import { useDispatch, useSelector } from "react-redux";
import {
  getQuizzes,
  getQuizzesFailed,
  getQuizzesLoading,
  loadAllQuizzesAction,
} from "../../state/allQuizzes";
import { Button } from "./Button";
import { Quiz } from "./Quiz";

export const QuizList = () => {
  const allQuizzes = useSelector((state) => getQuizzes(state));
  const loading = useSelector((state) => getQuizzesLoading(state));
  const failed = useSelector((state) => getQuizzesFailed(state));
  const dispatch = useDispatch();

  const loadQuizzes = () => {
    dispatch(loadAllQuizzesAction());
  };
  return (
    <div className="sidebar">
      <Button type="button" onClick={loadQuizzes}>
        Quizzes 
      </Button>
      {loading && <p>Loading...</p>}
      {failed && <p>Try again</p>}
      <ul className="sidebar__list">
        {allQuizzes.length > 0 &&
          allQuizzes.map(({ title, id }) => <Quiz key={id} title={title} id={id}/>)}
      </ul>
    </div>
  );
};
