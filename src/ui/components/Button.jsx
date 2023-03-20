import { StyledButton } from "../style/button";

export const Button = ({ large, buttonType, type, onClick, disabled, children }) => {
  return (
    <StyledButton large={large} buttonType={buttonType} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
