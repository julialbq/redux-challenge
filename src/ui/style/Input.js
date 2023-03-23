import styled from "styled-components";

export const StyledInput = styled.input`
  width: 240px;
  height: 48px;

  font-family: "Red Hat Text";
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.primary};

  background-color: ${(props) => props.theme.secondary};
  padding: 10px 16px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 4px;

  &:focus {
    outline-color: ${(props) => props.theme.tertiary};
  }

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
