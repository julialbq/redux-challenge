import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.large ? "182px" : "125px")};
  padding: 12px 32px;
  border: none;
  border-radius: 24px;

  font-family: "Red Hat Display";
  font-weight: 500;
  font-size: ${(props) => (props.large ? "18px" : "14px")};
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: var(--primary-green);
    color: var(--primary-black);
  }

  ${(props) => {
    switch (props.buttonType) {
      case "primary":
        return css`
          background-color: var(--primary-black);
          color: var(--primary-white);

          &:disabled {
            background-color: var(--grey-30);
            color: var(--grey-5);
          }
        `;
      case "secondary":
        return css`
          background-color: var(--primary-white);
          color: var(--primary-black);
          border: 1px solid var(--primary-black);

          &:disabled {
            background-color: var(--primary-white);
            color: var(--grey-30);
          }
        `;
      case "danger":
        return css`
          background-color: var(--signal-red);
          color: var(--primary-white);

          &:hover {
            background-color: var(--primary-black);
            color: var(--primary-white);
          }

          &:disabled {
            background-color: var(--signal-red-opacity);
            color: var(--grey-5);
          }
        `;

      default:
        return false;
    }
  }}
`;
