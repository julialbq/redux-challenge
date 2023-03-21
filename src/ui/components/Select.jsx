import { StyledLabel } from "../style/label";
import { StyledSelect } from "../style/Select";

export const Select = ({ name, label, onChange, children }) => {
  return (
    <>
      <StyledLabel>
        {label}
        <StyledSelect name={name} onChange={onChange}>
          {children}
        </StyledSelect>
      </StyledLabel>
    </>
  );
};
