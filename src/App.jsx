import { useDispatch, useSelector } from "react-redux";
import { getSelectedQuiz } from "./state/allQuizzes";
import { getQuizCreation, quizCreatedAction } from "./state/quiz";
import { Button } from "./ui/components/Button";
import { CreateQuiz } from "./ui/components/CreateQuiz";
import { Header } from "./ui/components/Header";
import { QuizList } from "./ui/components/QuizList";
import { SelectedQuiz } from "./ui/components/SelectedQuiz";
import { StyledAppContainer, StyledCreateQuizContainer } from "./ui/style/AppContainers";
import { GlobalStyle } from "./ui/style/global";

function App() {
  const quizCreation = useSelector((state) => getQuizCreation(state));
  const selectedQuiz = useSelector((state) => getSelectedQuiz(state));
  const dispatch = useDispatch();

  const createQuizPage = () => {
    dispatch(quizCreatedAction());
  };

  return (
    <StyledAppContainer>
      <GlobalStyle />
      <Header />
      <StyledCreateQuizContainer>
        <Button buttonType="primary" large onClick={createQuizPage}>Create Quiz</Button>

        {quizCreation && <CreateQuiz />}

        {selectedQuiz !== undefined && <SelectedQuiz quiz={selectedQuiz} />}
      </StyledCreateQuizContainer>
      <QuizList />
    </StyledAppContainer>
  );
}

export default App;
