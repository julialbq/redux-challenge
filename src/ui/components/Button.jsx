import "./Button.css"

export const Button = ({ type, onClick, disabled, children }) => {
  return (
    <button className="button" type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
