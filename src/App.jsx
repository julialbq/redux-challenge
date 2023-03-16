import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getQuizCreation, quizCreatedAction } from "./state/quiz";
import { Button } from "./ui/components/Button";
import { CreateQuiz } from "./ui/components/CreateQuiz";

function App() {
  const quizCreation = useSelector((state) => getQuizCreation(state));
  const dispatch = useDispatch();

  const createQuizPage = () => {
    dispatch(quizCreatedAction());
  };

  return (
    <div className="App">
      <Button onClick={createQuizPage}>Create Quiz</Button>
      {quizCreation && <CreateQuiz />}
    </div>
  );
}

export default App;
