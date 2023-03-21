import { StyledDiv } from "../style/div";
import { StyledInput } from "../style/Input";
import { StyledLabel } from "../style/label";

export const Input = ({ label, name, type, placeholder, onChange, min }) => {
  return (
    <StyledDiv>
      <StyledLabel>
        {label}
        </StyledLabel>
        <StyledInput
          className="input"
          name={name}
          type={type}
          min={min}
          placeholder={placeholder}
          onChange={onChange}
        />
    </StyledDiv>
  );
};
