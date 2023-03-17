import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getSelectedQuiz } from "./state/allQuizzes";
import { getQuizCreation, quizCreatedAction } from "./state/quiz";
import { Button } from "./ui/components/Button";
import { CreateQuiz } from "./ui/components/CreateQuiz";
import { QuizList } from "./ui/components/QuizList";
import { SelectedQuiz } from "./ui/components/SelectedQuiz";

function App() {
  const quizCreation = useSelector((state) => getQuizCreation(state));
  const selectedQuiz = useSelector((state) => getSelectedQuiz(state));
  const dispatch = useDispatch();

  const createQuizPage = () => {
    dispatch(quizCreatedAction());
  };

  return (
    <div className="App">
      <div className="create-quiz__container">
        {Object.keys(selectedQuiz).length === 0 && (
          <Button onClick={createQuizPage}>Create Quiz</Button>
        )}

        {quizCreation && <CreateQuiz />}

        {Object.keys(selectedQuiz).length > 0 && (
          <SelectedQuiz quiz={selectedQuiz} />
        )}
      </div>
      <QuizList />
    </div>
  );
}

export default App;
