import "./DisplayedQuestions.css"

export const DisplayedQuestions = ({title, type, index}) => {
  return (
    <li className="form-body__item">
      <p>{index + 1}. {title}</p>
      <span>Type: {type}</span>
    </li>
  )
}
