import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 240px;
  height: 48px;

  padding: 4px 8px 4px 16px;

  border: 1px solid var(--primary-black);
  border-radius: 4px;

  font-family: "Red Hat Text";
  font-weight: 400;
  font-size: 16px;
  color: var(--primary-black);

  background-color: var(--primary-white);

  &:focus {
    outline-color: var(--primary-green);
  }
`;
