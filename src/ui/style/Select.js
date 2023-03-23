import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 240px;
  height: 48px;

  padding: 4px 8px 4px 16px;

  border: 1px solid v${(props) => props.theme.primary};
  border-radius: 4px;

  font-family: "Red Hat Text";
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.primary};

  background-color: ${(props) => props.theme.secondary};

  &:focus {
    outline-color: ${(props) => props.theme.tertiary};
  }
`;
