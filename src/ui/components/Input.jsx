import { StyledContainer } from "../style/containers";
import { StyledInput } from "../style/Input";
import { StyledLabel } from "../style/label";

export const Input = ({ label, name, type, placeholder, onChange, min }) => {
  return (
    <StyledContainer formComponent>
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
    </StyledContainer>
  );
};
