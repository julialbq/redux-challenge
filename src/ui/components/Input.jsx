import "./Input.css"

export const Input = ({
  label,
  name,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input__container">
      <label className="input__label">{label}</label>
      <input className="input" name={name} type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
