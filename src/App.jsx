import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getSelectedQuiz } from "./state/allQuizzes";
import { getQuizCreation, quizCreatedAction } from "./state/quiz";
import { getTheme } from "./state/theme";
import { Button } from "./ui/components/Button";
import { CreateQuiz } from "./ui/components/CreateQuiz";
import { Header } from "./ui/components/Header";
import { QuizList } from "./ui/components/QuizList";
import { SelectedQuiz } from "./ui/components/SelectedQuiz";
import {
  StyledCreateQuizContainer,
  StyledInnerContainer,
  StyledOutterContainer,
} from "./ui/style/AppContainers";
import { GlobalStyle } from "./ui/style/global";
import { themes } from "./ui/style/themes/themes";

function App() {
  const quizCreation = useSelector((state) => getQuizCreation(state));
  const selectedQuiz = useSelector((state) => getSelectedQuiz(state));
  const theme = useSelector((state) => getTheme(state));
  const dispatch = useDispatch();

  const createQuizPage = () => {
    dispatch(quizCreatedAction());
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <StyledOutterContainer>
        <GlobalStyle />
        <Header />
        <StyledInnerContainer>
          <StyledCreateQuizContainer>
            <Button buttonType="primary" large onClick={createQuizPage}>
              Create Quiz
            </Button>

            {quizCreation && <CreateQuiz />}

            {selectedQuiz !== undefined && <SelectedQuiz quiz={selectedQuiz} />}
          </StyledCreateQuizContainer>
          <QuizList />
        </StyledInnerContainer>
      </StyledOutterContainer>
    </ThemeProvider>
  );
}

export default App;
