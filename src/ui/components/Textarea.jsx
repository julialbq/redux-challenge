import { StyledLabel } from "../style/label";
import { StyledTextarea } from "../style/Textarea";

export const Textarea = ({ name, label, placeholder, onChange }) => {
  return (
    <>
      <StyledLabel>
        {label}
        <StyledTextarea
          name={name}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
        ></StyledTextarea>
      </StyledLabel>
    </>
  );
};
