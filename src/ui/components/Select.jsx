import { StyledSelect } from "../style/Select";

export const Select = ({ name, label, onChange, children }) => {
  return (
        <StyledSelect name={name} onChange={onChange}>
          {children}
        </StyledSelect>
  );
};
