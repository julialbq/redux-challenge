import "./Quiz.css"
import { useDispatch } from "react-redux"
import { selectedQuizAction } from "../../state/allQuizzes"
import { Button } from "./Button"

export const Quiz = ({title, id}) => {
  const dispatch = useDispatch()


  const findQuiz = (quizId) => {
    dispatch(selectedQuizAction(quizId))
  }

  return (
    <li className="sidebar__item">
      <p>{title}</p>
      <Button buttonType="secondary" type="button" onClick={() => findQuiz(id)}>Select</Button>
    </li>
  )
}
