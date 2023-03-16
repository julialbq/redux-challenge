import "./DisplayedQuestions.css"
import { Button } from "./Button";

export const DisplayedQuestions = ({title, type, index, onClick}) => {
  return (
    <li className="form-body__item">
      <p>{index + 1}. {title}</p>
      <span>Type: {type}</span>
      <Button type="button" onClick={onClick}>Remove</Button>
    </li> 
  )
}
