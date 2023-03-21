import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  width: 240px;
  font-family: "Red Hat Text";
  font-weight: 400;
  font-size: 16px;

  border: 1px solid var(--primary-black);
  border-radius: 4px;

  &:focus {
    outline-color: var(--primary-green);
  }

  &::placeholder {
    color: var(--grey-70);
  }
`;
