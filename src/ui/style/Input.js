import styled from "styled-components";

export const StyledInput = styled.input`
  width: 240px;
  height: 48px;

  font-family: "Red Hat Text";
  font-weight: 400;
  font-size: 16px;

  padding: 10px 16px;
  border: 1px solid var(--primary-black);
  border-radius: 4px;

  &:focus {
    outline-color: var(--primary-green);
  }

  &::placeholder {
    color: var(--grey-70);
  }
`;
