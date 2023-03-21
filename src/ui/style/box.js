import styled, { css } from "styled-components";

export const StyledBox = styled.div`
  width: ${(props) => (props.sidebar ? "30vw" : "60vw")};
  padding: ${(props) => (props.sidebar ? "12px" : "20px")};
  margin-top: ${(props) => (props.sidebar ? "10px" : "0")};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 1px solid var(--grey-10);
  border-radius: 8px;

  ${(props) => {
    switch (props.type) {
      case "input-wrapper":
        return css`
         width: 100%;
        `;

      default:
        return false;
    }
  }}
`;
