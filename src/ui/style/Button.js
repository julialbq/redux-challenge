import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.large ? "122px" : "77px")};
  padding: 8px 16px;
  border: none;
  border-radius: 24px;

  font-family: "Red Hat Display";
  font-weight: 500;
  font-size: ${(props) => (props.large ? "18px" : "14px")};
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.tertiary};
    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 768px) {
    width: ${(props) => (props.large ? "182px" : "125px")};
    padding: 12px 32px;
  }

  ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return css`
          background-color: ${(props) => props.theme.primary};
          color: ${(props) => props.theme.secondary};

          &:disabled {
            background-color: ${(props) => props.theme.buttonDisabledBckg};
            color: ${(props) => props.theme.buttonDisabledBckgText};
          }
        `;
      case "secondary":
        return css`
          background-color: ${(props) => props.theme.secondary};
          color: ${(props) => props.theme.primary};
          border: 1px solid ${(props) => props.theme.primary};

          &:hover {
            border: 1px solid ${(props) => props.theme.tertiary};
          }

          &:disabled {
            background-color: ${(props) => props.theme.secondary};
            color: ${(props) => props.theme.buttonDisabledBckg};
          }
        `;
      case "danger":
        return css`
          background-color: ${(props) => props.theme.signalRed};
          color: ${(props) => props.theme.secondary};

          &:hover {
            background-color: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.secondary};
          }

          &:disabled {
            background-color: ${(props) => props.theme.signalRedButtonHover};
            color: ${(props) => props.theme.buttonDisabledBckgText};
          }
        `;
      default:
        return false;
    }
  }}
`;
