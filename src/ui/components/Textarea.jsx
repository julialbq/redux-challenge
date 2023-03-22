import { StyledContainer } from "../style/containers";
import { StyledLabel } from "../style/label";
import { StyledTextarea } from "../style/Textarea";

export const Textarea = ({ name, label, placeholder, onChange }) => {
  return (
    <StyledContainer formComponent>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextarea
        name={name}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
      ></StyledTextarea>
    </StyledContainer>
  );
};
