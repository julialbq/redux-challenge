import { useDispatch, useSelector } from "react-redux";
import {
  getQuizzes,
  getQuizzesFailed,
  getQuizzesLoading,
  loadAllQuizzesAction,
} from "../../state/allQuizzes";
import { Quiz } from "./Quiz";
import { useEffect } from "react";
import { StyledBox } from "../style/box";
import { StyledList } from "../style/list";

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
  }, [allQuizzes]);

  return (
    <StyledBox sidebar>
      {loading && <p>Loading...</p>}
      {failed && <p>Try again</p>}
      <StyledList>
        {allQuizzes.length > 0 &&
          allQuizzes.map(({ title, id }) => (
            <Quiz key={id} title={title} id={id} />
          ))}
      </StyledList>
    </StyledBox>
  );
};
