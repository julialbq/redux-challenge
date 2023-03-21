import { StyledTextarea } from "../style/Textarea";

export const Textarea = ({ name, label, placeholder, onChange }) => {
  return (
        <StyledTextarea
          name={name}
          label={label}
          placeholder={placeholder}
          onChange={onChange}
        ></StyledTextarea>
  );
};
