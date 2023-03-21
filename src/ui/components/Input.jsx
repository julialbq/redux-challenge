import { StyledInput } from "../style/Input";
import { StyledLabel } from "../style/label";
import "./Input.css";

export const Input = ({ label, name, type, placeholder, onChange, min }) => {
  return (
    <>
      <StyledLabel>
        {label}
        <StyledInput
          className="input"
          name={name}
          type={type}
          min={min}
          placeholder={placeholder}
          onChange={onChange}
        />
      </StyledLabel>
    </>
  );
};
