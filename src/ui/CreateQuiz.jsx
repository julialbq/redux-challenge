import { Question } from "./Question";

export const CreateQuiz = () => {
  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="form-header">
          <input type="text" placeholder="Form title" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Form description"
          ></textarea>
        </div>
        <div className="form-body">
          <Question />
        </div>
      </form>
    </div>
  );
};
