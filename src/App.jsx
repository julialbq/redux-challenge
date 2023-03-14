import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getQuizCreation, quizCreatedAction } from "./state/quiz";
import { CreateQuiz } from "./ui/CreateQuiz";

function App() {
  const quizCreation = useSelector((state) => getQuizCreation(state));
  const dispatch = useDispatch();

  const createQuizPage = () => {
    dispatch(quizCreatedAction());
  };

  return (
    <div className="App">
      <button className="App__button" onClick={createQuizPage}>Create quiz</button>
      {quizCreation && <CreateQuiz />}
    </div>
  );
}

export default App;
