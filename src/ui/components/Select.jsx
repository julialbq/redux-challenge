import { StyledDiv } from "../style/div";
import { StyledLabel } from "../style/label";
import { StyledSelect } from "../style/Select";

export const Select = ({ name, label, onChange, children }) => {
  return (
    <StyledDiv>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect name={name} onChange={onChange}>
        {children}
      </StyledSelect>
    </StyledDiv>
  );
};
