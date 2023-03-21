import { StyledDiv } from "../style/div";
import { StyledLabel } from "../style/label";
import { StyledTextarea } from "../style/Textarea";

export const Textarea = ({ name, label, placeholder, onChange }) => {
  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextarea
        name={name}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
      ></StyledTextarea>
    </StyledDiv>
  );
};
