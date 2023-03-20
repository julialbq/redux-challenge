import "./QuizList.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuizzes,
  getQuizzesFailed,
  getQuizzesLoading,
  loadAllQuizzesAction,
} from "../../state/allQuizzes";
import { Quiz } from "./Quiz";
import { useEffect } from "react";

export const QuizList = () => {
  const allQuizzes = useSelector((state) => getQuizzes(state));
  const loading = useSelector((state) => getQuizzesLoading(state));
  const failed = useSelector((state) => getQuizzesFailed(state));
  const dispatch = useDispatch();

  useEffect(() => {
    const loadQuizzes = () => {
      dispatch(loadAllQuizzesAction());
    };
    loadQuizzes();
  }, []);

  return (
    <div className="sidebar">
      {loading && <p>Loading...</p>}
      {failed && <p>Try again</p>}
      <ul className="sidebar__list">
        {allQuizzes.length > 0 &&
          allQuizzes.map(({ title, id }) => (
            <Quiz key={id} title={title} id={id} />
          ))}
      </ul>
    </div>
  );
};
