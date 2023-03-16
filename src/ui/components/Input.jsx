import "./Input.css"

export const Input = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  min
}) => {
  return (
    <div className="input__container">
      <label className="input__label">{label}</label>
      <input className="input" name={name} type={type} min={min} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
