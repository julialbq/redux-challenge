import "./Button.css"

export const Button = ({ type, onClick, children }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};
