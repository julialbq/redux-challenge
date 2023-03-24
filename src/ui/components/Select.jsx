import { StyledContainer } from "../style/containers";
import { StyledLabel } from "../style/label";
import { StyledSelect } from "../style/Select";

export const Select = ({ name, label, onChange, children }) => {
  return (
    <StyledContainer formComponent>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect name={name} onChange={onChange}>
        {children}
      </StyledSelect>
    </StyledContainer>
  );
};
